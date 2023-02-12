import { ReactElement } from 'react';
import { getProductImage } from '@/utils/product';
import styles from '@/styles/products.module.css';
import { IProduct } from '.';
import Image from '../Image';

type ProductProps = {
    product: IProduct;
};

const Product = ({ product }: ProductProps): ReactElement => {
    function ProductImage() {
        return (
            <div className={styles.product__image}>
                <Image
                    src={getProductImage(product.image) ?? ''}
                    alt="Product"
                    width={28}
                    height={98}
                />
            </div>
        );
    }

    function ProductDetails() {
        return (
            <div className={styles.product__details}>
                <div className={styles.product__detailsName}>
                    <h3>{product.name}</h3>
                </div>
                <div className={styles.product__detailsBrand}>
                    {product.brand}
                </div>
                <div className={styles.product__DetailsPrice}>
                    {`$${product.price}`}
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
