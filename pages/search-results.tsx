/* eslint-disable @typescript-eslint/no-explicit-any */
import { productSearch } from '@/api/searches';
import { useProductSearch } from '@/hooks/api';
import { Categories, Headline, Products, Screen } from 'components';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';

const SearchResults = () => {
    const {
        query: { q }
    } = useRouter();

    const { data, isLoading } = useProductSearch(q as string);

    if (isLoading) return <div>Loading</div>;

    return (
        <Screen>
            <Headline />
            <Categories />
            <Products products={data?.payload?.products} />
        </Screen>
    );
};

export const getServerSideProps = async (ctx: any) => {
    const { q } = ctx.query;

    const queryClient = new QueryClient();

    // prefetch data on the server
    const response = await queryClient.fetchQuery(['productSearch', q], () =>
        productSearch(q)
    );

    return {
        props: {
            products: response?.payload?.products ?? []
            // // dehydrate query cache
            // dehydratedState: dehydrate(queryClient)
        }
    };
};

export default SearchResults;
