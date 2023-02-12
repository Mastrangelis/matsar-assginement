import { CLOUDFRONT_URL } from '@/constants/url';
import { getProductImage } from '@/utils/product';

describe('Unit test for product utils', () => {
    describe('Get product image', () => {
        it('Should return an image url given an existing image id', () => {
            const image = 'f4996972c90bfe873efa8c2dbbe9d6f0';
            const imageUrl: string | null = getProductImage(image);
            expect(imageUrl).toBe(
                `${CLOUDFRONT_URL}/140x150/${image[0]}/${image[1]}/${image}.jpg`
            );
        });
        it('Should return null for given null value as image', () => {
            const image = '';
            const imageUrl: string | null = getProductImage(image);
            expect(imageUrl).toBeNull();
        });
    });
});
