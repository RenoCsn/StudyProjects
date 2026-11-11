import React from 'react'
import type { FooterType } from '../../../Utils/Types/FooterType'
import { ButtonComponent } from '../../Atoms/Button'

import styles from './Footer.module.css'

export const FooterComponent: React.FC<FooterType> = ({
  logo,
  btnText,
  menuFirstColumn,
  menuSecondColumn,
  menuThirdColumn,
}) => {
  //   const activeClassCombined = [styles.navActions, styles.navActionsActive]
  //     .filter(Boolean)
  //     .join(' ')
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.siteMapContainer}>
        <div className={styles.outsideContainer}>
          <div className={styles.insideContainer}>
            <div className={styles.ctaContainer}>
              <p className={styles.logoContainer}>
                <a href={logo?.url}>
                  <img src={logo?.img} alt='Logo' className={styles.logoImg} />
                </a>
              </p>
              <p>
                <ButtonComponent
                  children={btnText}
                  animationStyle='offset'
                  variant='gradient'
                  isAnimated
                />
              </p>
            </div>
            <div className={styles.siteMap}>
              <ul className={styles.menuList}>
                <li className={styles.menuName}>{menuFirstColumn?.menuName}</li>
                {menuFirstColumn?.menuItems.map((item) => (
                  <li className={styles.menuItem}>
                    <a href={item.url} className={styles.menuLink}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={styles.menuList}>
                <li className={styles.menuName}>
                  {menuSecondColumn?.menuName}
                </li>
                {menuSecondColumn?.menuItems.map((item) => (
                  <li className={styles.menuItem}>
                    <a href={item.url} className={styles.menuLink}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className={styles.menuList}>
                <li className={styles.menuName}>{menuThirdColumn?.menuName}</li>
                {menuThirdColumn?.menuItems.map((item) => (
                  <li className={styles.menuItem}>
                    <a href={item.url} className={styles.menuLink}>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightContainer}>
          <div className={styles.copyrightInsideContainer}>
            ©2019 Pulseapp.com, Inc. All Rights Reserved |{' '}
            <a
              href='https://pulseapp.com/terms'
              className={styles.copyrightLink}
            >
              Terms of Use
            </a>{' '}
            |{' '}
            <a
              href='https://pulseapp.com/privacy'
              className={styles.copyrightLink}
            >
              Privacy Policy
            </a>{' '}
            |{' '}
            <a
              href='https://pulseapp.com/eu-privacy'
              className={styles.copyrightLink}
            >
              EU Privacy
            </a>
            <br />
            Pulse is made by{' '}
            <a
              href='https://simplefocus.com'
              target='_blank'
              rel='noopener'
              className={styles.copyrightLink}
            >
              Simple Focus
            </a>
            . We also make{' '}
            <a
              href='https://getballpark.com'
              target='_blank'
              rel='noopener'
              className={styles.copyrightLink}
            >
              Ballpark
            </a>
            ,{' '}
            <a
              href='https://sifterapp.com'
              target='_blank'
              rel='noopener'
              className={styles.copyrightLink}
            >
              Sifter
            </a>
            , and{' '}
            <a
              href='https://curated.co'
              target='_blank'
              rel='noopener'
              className={styles.copyrightLink}
            >
              Curated
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}
