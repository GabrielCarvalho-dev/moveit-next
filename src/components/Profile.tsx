import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/profile.module.css'

export function Profile(){

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diego.png" alt="Diego Fernades"/>
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src='icons/level.svg' alt='level'/>
          Level {level}
        </p>
      </div>
    
    </div>
  )
}