/* eslint-disable @typescript-eslint/no-explicit-any */
import { withCSR } from '@/Hoc/with-CSR';
import { getSuggestedSearches } from '@/api/searches';
import { useSuggestedSearches } from '@/hooks/api';
import { Dropdown, Screen } from 'components';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { QueryClient, dehydrate } from 'react-query';

type SearchSuggestionsProps = {
    isError: boolean;
};

type SuggestionProps = {
    text: string;
};

const SearchSuggestions = ({ isError }: SearchSuggestionsProps) => {
    const [isCustomLoading, setIsCustomLoadig] = useState<boolean>(false);

    const router: NextRouter = useRouter();

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
        if (isCustomLoading || !data?.suggestions?.length) return [];
        return data.suggestions.map(
            (suggestion: SuggestionProps) => suggestion.text
        );
    }, [data?.suggestions, isCustomLoading]);

    useEffect(() => {
        if (isLoading) {
            setIsCustomLoadig(true);
        }
        if (!isLoading) {
            setTimeout(() => setIsCustomLoadig(false), 2500);
        }
    }, [isLoading]);

    if (isError) return <div>Error</div>;

    return (
        <Screen>
            <Dropdown
                header="Popular Searches"
                hasClear={false}
                searches={suggestions}
                onIconClick={onSearchClick}
                isLoading={isCustomLoading}
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
