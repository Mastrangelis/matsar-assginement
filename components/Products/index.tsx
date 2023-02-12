import { ReactElement } from 'react';
import styles from '@/styles/products.module.css';
import Product from './Product';

export type IProduct = {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
};

type IProducts = {
    products: IProduct[];
};

const Products = ({ products = [] }: IProducts): ReactElement => {
    return (
        <div className={styles.products}>
            {products?.map((product: IProduct) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
