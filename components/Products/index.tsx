import React, { ReactElement } from 'react';
import styles from '@/styles/products.module.css';
import Product from './Product';
import { isMobile } from 'react-device-detect';
import clsx from 'clsx';

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
        <div
            data-testid="products"
            className={clsx({
                [styles.products]: true,
                [styles.products__mobile]: isMobile
            })}
        >
            {products?.map((product: IProduct, index: number) => (
                <React.Fragment key={index}>
                    <Product product={product} isLoading={isLoading} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default Products;
