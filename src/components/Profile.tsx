import styles from '../styles/components/Profile.module.css';
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/28119993?s=460&u=546cac51d4c8d980e67f3e30e232908d101cc069&v=4" alt="Breno Siqueira" />
      <div>
        <strong>Breno Siqueira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
          </p>
      </div>
    </div>
  )
}