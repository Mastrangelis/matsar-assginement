import { useEffect, ReactElement, useState } from 'react';
import { getProductImage } from '@/utils/product';
import styles from '@/styles/products.module.css';
import { IProduct } from '.';
import Image from '../Image';
import { LoadingComponent } from '../Skeleton';

type ProductProps = {
    isLoading: boolean;
    product: IProduct;
};

const Product = ({ product, isLoading }: ProductProps): ReactElement => {
    function ProductImage() {
        const [imgSrc, setImgSrc] = useState<string | null>('');

        useEffect(() => {
            const src = getProductImage(product?.image);
            setImgSrc(src);
        }, []);

        return (
            <div className={styles.product__image}>
                <LoadingComponent
                    isLoading={isLoading}
                    width={141}
                    height={101}
                >
                    <Image
                        src={imgSrc || '/no-photo.svg'}
                        alt="Product"
                        width={141}
                        height={101}
                    />
                </LoadingComponent>
            </div>
        );
    }

    function ProductDetails() {
        return (
            <div className={styles.product__details}>
                <div className={styles.product__detailsName}>
                    <LoadingComponent
                        isLoading={isLoading}
                        width={120}
                        height={20}
                    >
                        <h3>{product.name}</h3>
                    </LoadingComponent>
                </div>

                <div className={styles.product__detailsBrand}>
                    <LoadingComponent
                        isLoading={isLoading}
                        width={52}
                        height={14}
                    >
                        {product.brand}
                    </LoadingComponent>
                </div>

                <div className={styles.product__DetailsPrice}>
                    <LoadingComponent
                        isLoading={isLoading}
                        width={38}
                        height={20}
                    >
                        {`$${product.price}`}
                    </LoadingComponent>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.product}>
            <ProductImage />
            <ProductDetails />
        </div>
    );
};

export default Product;
