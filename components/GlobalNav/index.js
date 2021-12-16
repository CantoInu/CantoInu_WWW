import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Container } from 'components/Page'
import MobileNav from 'components/MobileNav'
import Image from 'next/image'
import navLogo from 'assets/images/nav-logo.png'
import Button, {
  BUTTON_THEME_CALL_TO_ACTION_SECONDARY,
} from 'components/Button'
import styles from './index.module.scss'

export const TITLE = 'Apu Coin'

export const NAV_MENU_ITEMS = [
  {
    title: 'Ecosystem',
    onClick: () => {},
  },
  {
    title: 'Buy',
    onClick: () => {},
  },
  {
    title: 'Community',
    onClick: () => {},
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
                  {NAV_MENU_ITEMS.map(item => {
                    // NOTE: currently, nav items scroll to subsection rather than link to new page
                    return (
                      <div className={styles.navigationMenuItemRight} onClick={item.onClick} key={item.title}>
                        {item.title}
                      </div>
                    )
                  })}
                  <Button
                    text={'Do Something!'}
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
