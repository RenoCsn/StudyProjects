import React from 'react'
import type { HeaderType } from '../../../Utils/Types/HeaderType'
import { ButtonComponent } from '../../Atoms/Button'
import styles from './Header.module.css'

export const HeaderComponent: React.FC<HeaderType> = ({
  logo,
  features = '',
  customer = '',
  pricing = '',
  blog = '',
  signUp = '',
}) => {
  const activeClassCombined = [styles.navActions, styles.navActionsActive]
    .filter(Boolean)
    .join(' ')
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <a href={logo?.url} className={styles.navLink}>
            <img src={logo?.img} alt='Logo' />
          </a>
          <ul className={styles.navList}>
            <li className={styles.navButtons}>
              <a className={styles.navActions} href={features}>
                Features
              </a>
            </li>
            <li className={styles.navButtons}>
              <a className={styles.navActions} href={customer}>
                Customer Stories
              </a>
            </li>
            <li className={styles.navButtons}>
              <a className={activeClassCombined} href={pricing}>
                Pricing
              </a>
            </li>
            <li className={styles.navButtons}>
              <a className={styles.navActions} href={blog}>
                Blog
              </a>
            </li>
            <li className={styles.navButtons}>
              <a href={signUp}>
                <ButtonComponent
                  variant='outlined'
                  animationStyle='offset'
                  isAnimated
                >
                  Sign Up
                </ButtonComponent>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
