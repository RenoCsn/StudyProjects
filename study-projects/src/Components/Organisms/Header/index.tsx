import React from 'react'
import type { HeaderType } from '../../../Utils/Types/HeaderType'
import { ButtonComponent } from '../../Atoms/Button'
import styles from './Header.module.css'

export const HeaderComponent: React.FC<HeaderType> = ({
  logo,
  items = [],
  signUp,
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
            {items.map((item) => (
              <li key={item.href} className={styles.navButtons}>
                <a
                  href={item.href}
                  className={
                    item.label === 'Pricing'
                      ? activeClassCombined
                      : styles.navActions
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
            {signUp && (
              <li className={styles.navButtons}>
                <a href={signUp.href}>
                  <ButtonComponent
                    variant='outlined'
                    animationStyle='offset'
                    isAnimated
                  >
                    {signUp.label}
                  </ButtonComponent>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
