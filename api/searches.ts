import axiosInstance from './axios';

const productSearch = async (q: string) => {
    const { data } = await axiosInstance.post('/api/slug/', {
        slug: '/kategori',
        query: {
            q
        }
    });
    return data;
};

const getSuggestedSearches = async (q: string) => {
    const { data } = await axiosInstance.get(`/api/autocomplete/query=${q}`);
    return data;
};

export { productSearch, getSuggestedSearches };
