import styles from '@/styles/status-bar.module.css';
import Image from './Image';
import { statusBarTimeFormatUTC } from '@/utils/date';

const StatusBar = () => {
    return (
        <div className={styles['status-bar']}>
            <div className={styles['status-bar__time']}>
                <span>{statusBarTimeFormatUTC()}</span>
            </div>
            <div className={styles['status-bar__icons']}>
                <Image
                    src="/Status-Bar/Mobile-Signal.svg"
                    alt="Mobile-Signal"
                    width={17}
                    height={11}
                />
                <Image
                    src="/Status-Bar/Wifi.svg"
                    alt="Wifi"
                    width={15}
                    height={11}
                />
                <Image
                    src="/Status-Bar/Battery.svg"
                    alt="Battery"
                    width={24}
                    height={11}
                />
            </div>
        </div>
    );
};

export default StatusBar;
