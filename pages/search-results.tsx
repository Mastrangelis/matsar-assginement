/* eslint-disable @typescript-eslint/no-explicit-any */
import { productSearch } from '@/api/searches';
import { useProductSearch } from '@/hooks/api';
import { Categories, Headline, Products, Screen } from 'components';
import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from '@/Hoc/with-CSR';

type SearchResultsProps = {
    isError: boolean;
};
const SearchResults = ({ isError }: SearchResultsProps) => {
    const {
        query: { q }
    } = useRouter();

    const { data, isLoading } = useProductSearch(q as string);

    if (isError) return <div>Error</div>;

    if (isLoading) return <div>Loading</div>;

    return (
        <Screen>
            <Headline />
            <Categories />
            <Products products={data?.payload?.products} />
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
