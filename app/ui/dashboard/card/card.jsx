import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>total user</span>
        <span className={styles.number}>10.23</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
