import styles from '@/styles/products.module.css';
import Product from './Product';

export type IProduct = {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
};

const Products = () => {
    const prs: IProduct[] = new Array(10).fill({
        id: Math.floor(Math.random() * 1000),
        name: 'Product Name',
        brand: 'Brand',
        price: 2100,
        image: 'f4996972c90bfe873efa8c2dbbe9d6f0'
    });
    return (
        <div className={styles.products}>
            {prs?.map((product: IProduct) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
