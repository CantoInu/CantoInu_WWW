import React, { useState } from 'react'
import Link from "next/link";
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Container } from 'components/Page'
import MobileNav from 'components/MobileNav'
import Image from 'next/image'
import Button, {
  BUTTON_THEME_CALL_TO_ACTION_SECONDARY,
} from 'components/Button'
import styles from './index.module.scss'

export const TITLE = 'Canto Inu'

export const NAV_MENU_ITEMS = [
  {
    title: 'About',
    path: '#About',
  },
  {
    title: 'Trade',
    path: '#Trade',
  },
  {
    title: 'NFT',
    path: '#NFT',
  },
]



const GlobalNav = ({
  router,
  isSmallViewport,
}) => {
  return (
    <nav role={'navigation'}>
      {isSmallViewport
        ? <MobileNav menuItems={NAV_MENU_ITEMS} />
        : (
          <div className={styles.navigationWrapper}>
            <Container fullWidth className={styles.navigationContainer}>
              <div className={styles.navigationMenuItemsList}>
                <div className={styles.navigationMenuItemsLeft}>
                  <div className={styles.navTitle}>
                    {TITLE}
                  </div>
                </div>
                <div className={styles.navigationMenuItemsRight}>
                  {NAV_MENU_ITEMS.map((item, index) => {
                    // NOTE: currently, nav items scroll to subsection rather than link to new page
                    return (
                      <Link href={item.path}>
                        <li className={styles.navigationMenuItemRight} key={index}>{item.title}</li>
                      </Link>
                    )
                  })}
                  <Button
                    text={'Enter App - soon™'}
                    theme={BUTTON_THEME_CALL_TO_ACTION_SECONDARY}
                    className={styles.splashCTAButton}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </Container>
          </div>
      )}
    </nav>
  )
}

GlobalNav.propTypes = {
  router: PropTypes.object,
  isSmallViewport: PropTypes.bool,
}

export default GlobalNav
