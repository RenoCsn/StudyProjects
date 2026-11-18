import React from 'react'
import type { TestimonialType } from '../../../Utils/Types/TestimonialType'
import { TypographyComponent } from '../../Atoms/Typography'
import styles from './Testimonial.module.css'

export const TestimonialComponent: React.FC<TestimonialType> = ({
  img = '',
  testimonialText = '',
  brandName = '',
}) => {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.centralContainer}>
        <img src={img} alt='' className={styles.testimonialImg} />
        <div className={styles.testimonialTextContainer}>
          <TypographyComponent
            children={testimonialText}
            variant='h4'
            color='textSecondary'
            key={'brand'}
          />
        </div>
        <div className={styles.brandName}>{brandName}</div>
      </div>
    </div>
  )
}
