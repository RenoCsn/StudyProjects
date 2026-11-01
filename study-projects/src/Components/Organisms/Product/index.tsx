import React from 'react'
import { TypographyComponent } from '../../Atoms/Typography'
import { CardComponent } from '../../Atoms/Card'
import type { ProductType } from '../../../Utils/Types/ProductType'

import styles from './Product.module.css'

export const ProductComponent: React.FC<ProductType> = ({
  title,
  subtitle,
  freeCard,
  normalCard,
  premiumCard,
}) => {
  return (
    <div className={styles.sessionContainer}>
      <div className={styles.titlesContainer}>
        <div className={styles.titles}>
          <TypographyComponent
            children={title}
            variant='h1'
            color='textSecondary'
          />
          <TypographyComponent
            children={subtitle}
            variant='p'
            color='textSecondary'
          />
        </div>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.cards}></div>
        <CardComponent variant='free' children={freeCard} />
        <CardComponent variant='normal' children={normalCard} />
        <CardComponent variant='premium' children={premiumCard} />
      </div>
    </div>
  )
}
