import { useDispatch } from 'react-redux';
import { closeModal } from "../../../redux/slices/modalSlice";
import styles from './Auth.module.scss';

export default function Auth() {
    const dispatch = useDispatch();
    const handleCloseModal = () => {
        dispatch(closeModal())
    }
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Модальное окно</h2>
        <div onClick={handleCloseModal} className={styles.close}>
          &times;
        </div>
        <h3 className={styles.subtitle}></h3>
      </div>
    </div>
  );
}
