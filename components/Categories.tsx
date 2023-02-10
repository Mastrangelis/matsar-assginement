import { useState } from 'react';
import styles from '@/styles/categories.module.css';
import clsx from 'clsx';

const categories = ['Trendy Foods', 'Bread', 'Milk', 'Egg'];

const Categories = () => {
    const [selected, setSelected] = useState<string>(categories[0]);

    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.categories}>
                {categories?.map((category: string, index: number) => (
                    <div
                        key={index}
                        className={clsx({
                            [styles.category]: true,
                            [styles.categoryActive]: category === selected
                        })}
                        onClick={() => setSelected(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <div className={styles.categoriesLine} />
        </div>
    );
};

export default Categories;
