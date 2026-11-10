import { TypographyComponent } from '../../../Atoms/Typography'
import styles from './Free.module.css'

export const FreeCard = () => {
  return (
    <>
      <TypographyComponent
        children={
          'These are what we call the Pulse Basics. They’re what every customer gets.'
        }
        color='primary'
        variant='h5'
      />
      <ul className={styles.freeCardList}>
        <li className={styles.freeCardItem}>
          Manage cash flow on a daily, weekly, monthly, or yearly basis
        </li>
        <li className={styles.freeCardItem}>
          Forecast growth with recurring income or expenses that scale
          automatically
        </li>
        <li className={styles.freeCardItem}>Works with any currency</li>
        <li className={styles.freeCardItem}>
          See Money In and Money Out, categorize transactions, and run helpful
          reports
        </li>
        <li className={styles.freeCardItem}>
          Toggle entries and accounts on and off to game out different scenarios
        </li>
      </ul>
      <p className={styles.cardOffer}>
        Just need the Pulse Basics?
        <br />
        <a
          className={styles.freeCardOfferLink}
          href={'https://create.pulseapp.com/signup/'}
        >
          Get them now
        </a>{' '}
        for $29 per month.
      </p>
    </>
  )
}
