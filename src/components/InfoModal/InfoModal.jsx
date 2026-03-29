import { useTranslation } from 'react-i18next';
import Modal from 'components/Modal';
import Cell from 'components/Cell';
import styles from './InfoModal.module.scss';

const InfoModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal title={t('how-to-play')} isOpen={isOpen} onClose={onClose}>
      <h3>{t('how-to-play-desc')}</h3>
      <div className={styles.row}>
        <Cell value="W" status="correct" isCompleted />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <h3>{t('example-correct', { letter: 'W' })}</h3>
      <div className={styles.row}>
        <Cell value="P" />
        <Cell value="I" status="present" isCompleted />
        <Cell value="L" />
        <Cell value="L" />
        <Cell value="S" />
      </div>
      <h3>{t('example-present', { letter: 'I' })}</h3>
      <div className={styles.row}>
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" isCompleted />
        <Cell value="E" />
      </div>
      <h3>{t('example-absent', { letter: 'U' })}</h3>
    </Modal>
  );
};

export default InfoModal;
