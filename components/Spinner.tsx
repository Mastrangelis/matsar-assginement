import React from 'react';
import clsx from 'clsx';
import styles from '@/styles/spinner.module.css';

type Color = 'primary' | 'secondary' | 'accent';

type SpinnerProps = {
    color?: Color;
};

export default function Spinner({ color = 'primary' }: SpinnerProps) {
    return (
        <div
            className={clsx({
                [styles.spinner]: true,
                [styles.spinner__primary]: color === 'primary',
                [styles.spinner__secondary]: color === 'secondary',
                [styles.spinner__accent]: color === 'accent'
            })}
        />
    );
}
