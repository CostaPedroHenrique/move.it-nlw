import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUp.module.css';
export function LevelUpModal() {
  const { level, closeLevelupModalOpen } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.levelupContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button className={styles.levelupButton} type="button" onClick={closeLevelupModalOpen}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
