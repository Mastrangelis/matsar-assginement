import { useQuery } from 'react-query';
import * as api from '@/api/searches';

const useProductSearch = (q: string) => {
    return useQuery(['productSearch', q], () => api.productSearch(q));
};

export default useProductSearch;
