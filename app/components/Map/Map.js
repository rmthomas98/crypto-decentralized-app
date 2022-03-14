import styles from './Map.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Map = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Roadmap</p>
        <p className={styles.subHeader}>This is the path we plan to take.</p>
        <VerticalTimeline>
          <VerticalTimelineElement>
            
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Map;