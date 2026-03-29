import { useTranslation } from 'react-i18next';
import Modal from 'components/Modal';
import Switch from 'components/Switch';
import styles from './SettingModal.module.scss';

const SettingModal = ({
  isOpen,
  onClose,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  setIsHardMode,
  setIsDarkMode,
  setIsHighContrastMode,
}) => {
  const { t } = useTranslation();

  return (
    <Modal title={t('settings')} isOpen={isOpen} onClose={onClose}>
      <Row
        title={t('hard-mode')}
        desc={t('hard-mode-desc')}
        isOn={isHardMode}
        onToggle={setIsHardMode}
      />
      <Row title={t('dark-mode')} isOn={isDarkMode} onToggle={setIsDarkMode} />
      <Row
        title={t('high-contrast-mode')}
        desc={t('high-contrast-desc')}
        isOn={isHighContrastMode}
        onToggle={setIsHighContrastMode}
      />
    </Modal>
  );
};

const Row = ({ title, desc, isOn, onToggle }) => {
  return (
    <div className={styles.row}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.desc}>{desc}</h3>
      </div>
      <div>
        <Switch isOn={isOn} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default SettingModal;
