import IntroComponent from './intro.components';
import ContentComponent from './content.components';
import styles from './Page.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            <IntroComponent />
            <ContentComponent />
        </div>
    );
}
