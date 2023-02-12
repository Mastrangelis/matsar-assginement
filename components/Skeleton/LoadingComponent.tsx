import React, { ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

type LoadingComponentProps = {
    isLoading?: boolean;
    width?: number;
    height?: number;
    children: ReactNode;
};

export default function LoadingComponent({
    isLoading,
    width,
    height = 25,
    children
}: LoadingComponentProps) {
    return isLoading ? (
        <Skeleton
            style={{
                width,
                height
            }}
        />
    ) : (
        <div>{children}</div>
    );
}
