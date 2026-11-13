import { ButtonComponent } from '../../../Atoms/Button'
import { TypographyComponent } from '../../../Atoms/Typography'
import styles from './Normal.module.css'

export const NormalCard = () => {
  return (
    <div className={styles.normalCtaContainer}>
      <div className={styles.normalCtaTitleContainer}>
        <div>
          <div className={styles.normalCtaTitle}>
            <TypographyComponent
              children={'Small Business Plan'}
              color='primary'
              variant='h2'
            />
          </div>
          <div className={styles.normalCtaPriceContainer}>
            <TypographyComponent
              children={'$59 per month'}
              variant='h4'
              color='inherit'
            />
          </div>
          <div className={styles.normalCtaBtnContainer}>
            <ButtonComponent
              children={'Sign Up Now'}
              variant='primary'
              isAnimated
              animationStyle='expand'
            />
          </div>
          <div className={styles.normalCtaBenefits}>
            You get Pulse Basics, plus:
          </div>
        </div>
      </div>

      <ul className={styles.normalCardList}>
        <li className={styles.normalCardItem}>
          Manage cash flow across multiple financial accounts
        </li>
        <li className={styles.normalCardItem}>
          Invite your investors, book keeper, or management team to see reports
          or manage cash flow
        </li>
        <li className={styles.normalCardItem}>
          Integrate with QuickBooks Online for more accurate cash flow
        </li>
        <li className={styles.normalCardItem}>
          Track your actual cash flow alongside your projected cash flow
        </li>
      </ul>

      <div className={styles.mobileCtaBtnContainer}>
        <ButtonComponent
          children={'Sign Up Now'}
          variant='primary'
          style={{ width: '100%' }}
        />
      </div>
    </div>
  )
}
