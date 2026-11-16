import React, { useState } from 'react'
import type { HeaderType } from '../../../Utils/Types/HeaderType'
import { ButtonComponent } from '../../Atoms/Button'
import styles from './Header.module.css'

export const HeaderComponent: React.FC<HeaderType> = ({
  logo,
  items = [],
  mobileItems = [],
  signUp,
}) => {
  const activeClassCombined = [styles.navActions, styles.navActionsActive]
    .filter(Boolean)
    .join(' ')

  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <a href={logo?.url} className={styles.navLink}>
            <img src={logo?.img} alt='Logo' />
          </a>
          <div className={styles.mobileMenuContainer}>
            <button
              className={styles.menuBtn}
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className={styles.mobileMenuIcon}
                viewBox='0 0 35 22'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z' />
              </svg>
            </button>
          </div>
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
      {showMenu && (
        <div className={styles.mobileMenuListContainer}>
          <div>
            <ul className={styles.mobileNavList}>
              {mobileItems.map((mobileItem) => (
                <li key={mobileItem.href}>
                  <a href={mobileItem.href} className={styles.mobileNavActions}>
                    {mobileItem.label}
                  </a>
                </li>
              ))}
              {signUp && (
                <li>
                  <a href={signUp.href}>
                    <ButtonComponent variant='gradient'>
                      {signUp.label}
                    </ButtonComponent>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
