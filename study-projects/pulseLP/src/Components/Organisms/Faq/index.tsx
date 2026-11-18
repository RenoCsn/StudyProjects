import React from 'react'
import styles from './Faq.module.css'
import { TypographyComponent } from '../../Atoms/Typography'
import type { FaqType } from '../../../Utils/Types/FaqType'

export const FaqComponent: React.FC<FaqType> = ({ faqItens }) => {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.title}>
        <TypographyComponent
          children='FAQ'
          variant='h2'
          color='textSecondary'
        />
      </div>
      <div className={styles.faqItems}>
        {faqItens?.map((faqItem) => (
          <div className={styles.faqItem}>
            <TypographyComponent
              children={faqItem.question}
              variant='h5'
              color='textSecondary'
            />
            <TypographyComponent
              children={faqItem.answer}
              variant='p'
              color='textPrimary'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
