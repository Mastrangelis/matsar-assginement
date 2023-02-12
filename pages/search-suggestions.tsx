/* eslint-disable @typescript-eslint/no-explicit-any */
import { withCSR } from '@/Hoc/with-CSR';
import { getSuggestedSearches } from '@/api/searches';
import { useSuggestedSearches } from '@/hooks/api';
import { Dropdown, Screen } from 'components';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { QueryClient, dehydrate } from 'react-query';

type SearchSuggestionsProps = {
    isError: boolean;
};

type SuggestionProps = {
    text: string;
};

const SearchSuggestions = ({ isError }: SearchSuggestionsProps) => {
    const router = useRouter();

    const {
        query: { q }
    } = router;

    const { data, isLoading } = useSuggestedSearches(q as string);

    const onSearchClick = (search: string) => {
        router.push(
            {
                pathname: '/search-results',
                query: {
                    q: search
                }
            },
            undefined,
            {
                shallow: true
            }
        );
    };

    const suggestions: string[] = useMemo(() => {
        if (!data?.suggestions?.length) return [];
        return data.suggestions.map(
            (suggestion: SuggestionProps) => suggestion.text
        );
    }, [data?.suggestions]);

    if (isError) return <div>Error</div>;

    if (isLoading) return <div>Loading</div>;

    return (
        <Screen>
            <Dropdown
                header="Popular Searches"
                hasClear={false}
                searches={suggestions}
                onIconClick={onSearchClick}
            />
        </Screen>
    );
};

export const getServerSideProps = withCSR(async (ctx: any) => {
    const { q } = ctx.query;

    const queryClient = new QueryClient();

    let isError = false;
    try {
        await queryClient.fetchQuery(['suggestedSearches', q], () =>
            getSuggestedSearches(q)
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

export default SearchSuggestions;
