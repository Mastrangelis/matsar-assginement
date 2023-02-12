export type Page = {
    url: string;
    label: string;
};

const pages: Page[] = [
    {
        url: '/search-results',
        label: 'Search Results'
    },
    {
        url: '/recent-searches',
        label: 'Recent Searches'
    },
    {
        url: '/search-suggestions',
        label: 'Search Suggestions'
    }
];

export { pages };
