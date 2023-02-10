import { CLOUDFRONT_URL } from '@/constants/url';

const getProductImage = (image: string) => {
    return image
        ? `${CLOUDFRONT_URL}/140x150/${image[0]}/${image[1]}/${image}.jpg`
        : null;
};

export { getProductImage };
