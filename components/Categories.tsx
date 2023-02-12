import { useState } from 'react';
import styles from '@/styles/categories.module.css';
import clsx from 'clsx';
import { categories } from '@/constants/categories';

const Categories = () => {
    const [selected, setSelected] = useState<string>(categories[0]);

    return (
        <div className={styles.categories}>
            <div className={styles.categories__container}>
                {categories?.map((category: string, index: number) => (
                    <div
                        key={index}
                        className={clsx({
                            [styles.category]: true,
                            [styles.category__active]: category === selected
                        })}
                        onClick={() => setSelected(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <div className={styles.categories__line} />
        </div>
    );
};

export default Categories;
