/* eslint-disable @typescript-eslint/no-explicit-any */
import { productSearch } from '@/api/searches';
import { useProductSearch } from '@/hooks/api';
import { Categories, Headline, Products, Screen } from 'components';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from '@/Hoc/with-CSR';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';

type SearchResultsProps = {
    isError: boolean;
};
const SearchResults = ({ isError }: SearchResultsProps) => {
    const [isCustomLoading, setIsCustomLoadig] = useState<boolean>(false);

    const {
        query: { q }
    } = useRouter();

    const { data, isLoading } = useProductSearch(q as string);

    const products = useMemo(() => {
        if (isCustomLoading || !data?.payload?.products?.length)
            return new Array(10).fill({
                image: '',
                price: '',
                brand: '',
                name: ''
            });
        return data?.payload?.products;
    }, [data, isCustomLoading]);

    useEffect(() => {
        if (isLoading) {
            setIsCustomLoadig(true);
        }
        if (!isLoading) {
            setTimeout(() => setIsCustomLoadig(false), 1000);
        }
    }, [isLoading]);

    if (isError) return <div>Error</div>;

    return (
        <Screen>
            <Headline />
            <Categories />
            <Products products={products} isLoading={isCustomLoading} />
        </Screen>
    );
};

export const getServerSideProps = withCSR(async (ctx: any) => {
    const { q } = ctx.query;

    const queryClient = new QueryClient();

    let isError = false;
    try {
        await queryClient.fetchQuery(['productSearch', q], () =>
            productSearch(q)
        );
    } catch (error: any) {
        isError = true;
        ctx.res.statusCode = error.response.status;
    }

    return {
        props: {
            isError,
            // dehydrate query cache
            dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
        }
    };
});

export default SearchResults;
