import NextImage from 'next/image';

type ImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
};
const Image = ({ src, alt, width = 22, height = 22 }: ImageProps) => {
    return (
        <NextImage
            src={src}
            alt={alt}
            height={height}
            width={width}
            quality={100}
            style={{ objectFit: 'contain' }}
        />
    );
};

export default Image;
