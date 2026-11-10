import { ButtonComponent } from '../../../Atoms/Button'
import { TypographyComponent } from '../../../Atoms/Typography'
import styles from './Premium.module.css'

export const PremiumCard = () => {
  return (
    <div className={styles.premiumCtaContainer}>
      <div>
        <div className={styles.premiumCtaTitle}>
          <TypographyComponent
            children={'Unlock Extra Features'}
            color='primary'
            variant='h3'
          />
        </div>
        <div className={styles.premiumCtaPriceContainer}>
          <TypographyComponent
            children={'$89 per month'}
            variant='h4'
            color='inherit'
          />
        </div>
        <div className={styles.premiumCtaBtnContainer}>
          <ButtonComponent
            children={'Try Premium'}
            variant='primary'
            isAnimated
            animationStyle='expand'
          />
        </div>
        <div className={styles.premiumCtaBenefits}>Get it all, plus:</div>
      </div>

      <ul className={styles.premiumCardList}>
        <li className={styles.premiumCardItem}>
          Manage cash flow across unlimited financial accounts
        </li>
        <li className={styles.premiumCardItem}>
          Convert to any currency for localized cash flow reporting and
          projections
        </li>
        <li className={styles.premiumCardItem}>
          Attach invoices or contracts to your cash flow entries for
          accountability and auditing
        </li>
      </ul>
    </div>
  )
}
