import React, { ReactElement } from 'react';
import styles from '@/styles/products.module.css';
import Product from './Product';

export type IProduct = {
    name: string;
    brand: string;
    price: number;
    image: string;
};

type IProducts = {
    isLoading: boolean;
    products: IProduct[];
};

const Products = ({ isLoading, products = [] }: IProducts): ReactElement => {
    return (
        <div data-testid="products" className={styles.products}>
            {products?.map((product: IProduct, index: number) => (
                <React.Fragment key={index}>
                    <Product product={product} isLoading={isLoading} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default Products;
