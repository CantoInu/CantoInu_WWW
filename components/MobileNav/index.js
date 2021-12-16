/* eslint-disable max-len */
import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import navLogo from 'assets/images/nav-logo.png'
import styles from './index.module.scss'

const HamburgerMenu = props => {
	const width       			= `${props.width || 36}px`
	const height            = `${props.height || 30}px`
	const halfHeight        = `${parseInt(height.replace('px', '')) / 2}px`
	const isOpen            = props.isOpen || false
	const strokeWidth       = props.strokeWidth || 2
	const halfStrokeWidth   = `-${strokeWidth / 2}px`
	const animationDuration = props.animationDuration || '0.4'

	const getTransformValue = (isOpen, defaultPos, rotateVal) => (
		`translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${isOpen ? `${rotateVal}deg` : '0'})`
	)

	const styles = {
		container: {
			width,
			height,
			position: 'relative',
			transform: `rotate(${props.rotate || 0}deg)`
		},
		lineBase: {
			display: 'block',
			height: `${strokeWidth}px`,
			width: '100%',
			background: props.color || '#000000',
			transitionTimingFunction: 'ease',
			transitionDuration: `${animationDuration}s`,
			borderRadius: `${props.borderRadius || 0}px`,
			transformOrigin: 'center',
			position: 'absolute'
		},
		firstLine: {
			transform: getTransformValue(isOpen, 0, 45),
			marginTop: halfStrokeWidth,
		},
		secondLine: {
      transitionTimingFunction: 'ease-out',
			transitionDuration: `${animationDuration / 4}s`,
			opacity: isOpen ? '0' : '1',
			top: halfHeight,
			marginTop: halfStrokeWidth
		},
		thirdLine: {
			transform: getTransformValue(isOpen, height, -45),
			marginTop: halfStrokeWidth
		}
	}

	return (
		<div style={styles.container} onClick={props.menuClicked}>
			<span style={Object.assign({}, styles.lineBase, styles.firstLine)}></span>
			<span style={Object.assign({}, styles.lineBase, styles.secondLine)}></span>
			<span style={Object.assign({}, styles.lineBase, styles.thirdLine)}></span>
		</div>
	)
}

HamburgerMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	menuClicked: PropTypes.func,
	width: PropTypes.number,
	height: PropTypes.number,
	strokeWidth: PropTypes.number,
	rotate: PropTypes.number,
	color: PropTypes.string,
	borderRadius: PropTypes.number,
	animationDuration: PropTypes.number
}

class MobileNavMenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeMenuItemList = () => {
    this.setState({ isOpen: false })
  }

  onMobileNavigation = () => {
    this.props.onCloseMobileNav()
    this.closeMenuItemList()
  }

  render() {
    const { isOpen } = this.state
    const { menuItem } = this.props
    const subMenuItems = (
      Array.isArray(menuItem.subMenuItems) &&
      menuItem.subMenuItems.length > 0 &&
      menuItem.subMenuItems
    )
    return (
			<div className={styles.mobileNavMenuItemWrapper}>
        <div
          className={classnames(
            styles.mobileNavMenuItemContainer,
            menuItem.url && styles.mobileNavMenuItemContainerNoPadding,
          )}
          onClick={this.handleClick}
        >
          {menuItem.url
            ? (
              <Link
                to={menuItem.url}
                onClick={this.onMobileNavigation}
                className={styles.mobileNavTopLink}
              >
                {menuItem.title}
              </Link>
            ) : menuItem.title
          }
          {subMenuItems && (
            <div className={styles.mobileNavMenuItemCaret}>
              {isOpen ? '-' : '+'}
            </div>
          )}
        </div>
        {this.state.isOpen && subMenuItems && (
          <div className={styles.mobilesubMenuItemsWrapper}>
            {subMenuItems.map((subMenuItem, i) => {
              return (
                <Link
                  href={subMenuItem.url}
                  onClick={this.onMobileNavigation}
                  className={styles.mobileSubMenuItemWrapper}
                  key={i}
                >
                  {subMenuItem.title}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

class MobileNav extends Component {
	state = {
		isOpen: false
	}

  handleScroll = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflowY = (
        this.state.isOpen ? 'scroll' : 'hidden'
      )
    }
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.handleScroll()
  }

  onCloseMobileNav = () => {
    this.setState({ isOpen: false })
    if (typeof document !== 'undefined') {
      document.body.style.overflowY = 'scroll'
    }
  }

  render() {
		const { isOpen } = this.state
    const { menuItems } = this.props
    return (
      <div className={classnames(
				styles.mobileNavTopWrapper,
				isOpen && styles.mobileNavTopWrapperOpen,
			)}>
				<div className={styles.mobileNavLogo}>
					{'APU Coin'}
				</div>
        <div className={styles.mobileNavHamburgerMenu} onClick={this.handleClick}>
          <HamburgerMenu
            isOpen={this.state.isOpen}
            animationDuration={0.3}
            width={30}
            height={22}
            strokeWidth={2}
            rotate={0}
            borderRadius={2}
            color={'#384764'}
          />
        </div>
        <div className={classnames(
          styles.mobileNavWrapper,
          this.state.isOpen && styles.mobileNavWrapperOpen,
        )}>
          {menuItems.map((menuItem, i) => {
            return (
							<MobileNavMenuItem
								menuItem={menuItem}
								onCloseMobileNav={this.onCloseMobileNav}
								key={i}
							/>
						)
          })}
        </div>
      </div>
    )
  }
}

MobileNav.propTypes = {
	menuItems: PropTypes.array,
}

export default MobileNav
