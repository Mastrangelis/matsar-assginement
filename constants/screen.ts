export type StatusBarIconProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

const statusBarIcons: StatusBarIconProps[] = [
    {
        src: '/Status-Bar/Mobile-Signal.svg',
        alt: 'Mobile-Signal',
        width: 17,
        height: 11
    },
    {
        src: '/Status-Bar/Wifi.svg',
        alt: 'Wifi',
        width: 15,
        height: 11
    },
    {
        src: '/Status-Bar/Battery.svg',
        alt: 'Battery',
        width: 24,
        height: 11
    }
];

export { statusBarIcons };
