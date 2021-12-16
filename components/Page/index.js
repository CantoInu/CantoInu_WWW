import React from 'react'
import classnames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import GlobalNav from 'components/GlobalNav'
import Footer from 'components/Footer'
import Button from 'components/Button'
import styles from './index.module.scss'

const PageError = ({ router }) => {
  return (
    <div className={styles.pageErrorWrapper}>
      <div className={styles.pageErrorTitleText}>
        {'Error: Failed to load data'}
      </div>
      <Button
        onClick={() => router.reload()}
        text={'Reload'}
      />
    </div>
  )
}

export const Container = ({
  children,
  fullWidth,
  className,
  style,
}) => (
  <div
    className={classnames(
      styles.containerWrapper,
      fullWidth && styles.fullWidth,
      className,
    )}
    style={style}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

const FullPage = ({
  children,
  router,
  fullWidth,
  loadError,
  wrapperClassName,
  containerClassName,
  withSidebar,
  withGlobalNav,
  hideFooter,
  windowWidth,
  isLoading,
}) => {
  const isSmallViewport = windowWidth < 900
  return (
    <div>
      {withGlobalNav && (
        <GlobalNav
          router={router}
          isSmallViewport={isSmallViewport}
        />
      )}
      <div className={classnames(
        styles.pageWrapper,
        wrapperClassName,
      )}>
        <div className={classnames(
          styles.pageContainer,
          fullWidth && styles.pageContainerFullWidth,
          containerClassName,
        )}>
          <Container fullWidth={fullWidth}>
            {loadError
              ? <PageError router={router} />
              : children
            }
            {isLoading && <LoadingOverlay />}
          </Container>
        </div>
        {!hideFooter && <Footer />}
      </div>
    </div>
  )
}

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  fullWidth: PropTypes.bool,
  loadError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  wrapperClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  withSidebar: PropTypes.bool,
  customer: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default withRouter(FullPage)
