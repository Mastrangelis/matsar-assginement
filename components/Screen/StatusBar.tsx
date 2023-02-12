import { statusBarTimeFormatUTC } from '@/utils/date';
import { StatusBarIconProps, statusBarIcons } from '@/constants/screen';
import styles from '@/styles/screen.module.css';
import Image from '../Image';

const StatusBar = () => {
    return (
        <div className={styles.status__bar}>
            <div className={styles.status__barTime}>
                <span>{statusBarTimeFormatUTC()}</span>
            </div>
            <div className={styles.status__barIcons}>
                {statusBarIcons?.map(
                    (statusBarIcon: StatusBarIconProps, index: number) => (
                        <Image
                            key={index}
                            src={statusBarIcon.src}
                            alt={statusBarIcon.alt}
                            width={statusBarIcon.width}
                            height={statusBarIcon.height}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default StatusBar;
