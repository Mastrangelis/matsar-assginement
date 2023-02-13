import axiosInstance from './axios';

/**
 * @function productSearch
 * @description API to fetch product details depending on the search term (q).
 * @param q {string} the search term
 * @returns {object} the data returned from the server
 */
const productSearch = async (q: string) => {
    const { data } = await axiosInstance.post('/slug/', {
        slug: '/api/kategori',
        query: {
            q
        }
    });
    return data;
};

/**
 * @function getSuggestedSearches
 * @description API to fetch suggested searches depending on the value of the search term(q).
 * @param q {string} the search term
 * @returns {object} the data returned from the server
 */
const getSuggestedSearches = async (q: string) => {
    const { data } = await axiosInstance.get(`/api/autocomplete?query=${q}`);
    return data;
};

export { productSearch, getSuggestedSearches };
