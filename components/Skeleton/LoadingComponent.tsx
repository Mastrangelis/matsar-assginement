import React, { ReactNode } from 'react';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';

type LoadingComponentProps = {
    isLoading?: boolean;
    width?: number;
    height?: number;
    children: ReactNode;
    overflowHidden?: boolean;
    isCentered?: boolean;
    right?: boolean;
    left?: boolean;
    fullWidth?: boolean;
};

export default function LoadingComponent({
    isLoading,
    width,
    height = 25,
    children,
    overflowHidden = false,
    isCentered = false,
    right,
    left,
    fullWidth
}: LoadingComponentProps) {
    return isLoading ? (
        <Skeleton
            containerClassName={clsx({
                flex: true,
                'items-center': isCentered,
                'justify-end': right,
                'justify-start': left
            })}
            style={{
                width,
                height
            }}
        />
    ) : (
        <div
            className={clsx({
                'overflow-hidden': overflowHidden,
                'w-full': fullWidth
            })}
        >
            {children}
        </div>
    );
}
