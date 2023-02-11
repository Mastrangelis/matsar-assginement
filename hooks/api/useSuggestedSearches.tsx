import { useQuery } from 'react-query';
import * as api from '@/api/searches';

const useSuggestedSearches = (q = 'cocacola') => {
    return useQuery(['suggestedSearches', q], () =>
        api.getSuggestedSearches(q)
    );
};

export default useSuggestedSearches;
