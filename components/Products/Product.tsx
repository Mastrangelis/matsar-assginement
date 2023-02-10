import { IProduct } from '.';
import styles from '@/styles/products.module.css';
import Image from '../Image';
import { getProductImage } from '@/utils/product';

type ProductProps = {
    product: IProduct;
};

const Product = ({ product }: ProductProps) => {
    return (
        <div className={styles.product}>
            <div className={styles.productImage}>
                {
                    <Image
                        src={getProductImage(product.image) ?? ''}
                        alt="Product Image"
                        width={28}
                        height={98}
                    />
                }
            </div>
            <div className={styles.productDetails}>
                <div className={styles.productDetailsName}>
                    <h3>{product.name}</h3>
                </div>
                <div className={styles.productDetailsBrand}>
                    {product.brand}
                </div>
                <div className={styles.productDetailsPrice}>
                    {`$${product.price}`}
                </div>
            </div>
        </div>
    );
};
export default Product;
