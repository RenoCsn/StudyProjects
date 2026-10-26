import type { CardType } from '../../../Utils/Types/CardType'
import styles from './Card.module.css'

export const CardComponent: React.FC<CardType> = ({
  children,
  variant = 'free',
}) => {
  const normalCard = (
    <div className={styles.normalCard}>
      <div className={styles.recommended}>
        <p>RECOMMENDED</p>
      </div>
      {children}
    </div>
  )

  const premiumCard = (
    <div className={styles.premiumCard}>
      <div className={styles.premiumCardTitle}>
        Complex business with multiple financial accounts, currencies, or
        auditing needs?
      </div>
      {children}
    </div>
  )

  return (
    <div className={styles.card}>
      {variant === 'free'
        ? children
        : variant === 'normal'
          ? normalCard
          : premiumCard}
    </div>
  )
}
