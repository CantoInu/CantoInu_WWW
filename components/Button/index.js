import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.module.scss'

export const BUTTON_THEME_CALL_TO_ACTION_PRIMARY = 'BUTTON_THEME_CALL_TO_ACTION_PRIMARY'
export const BUTTON_THEME_CALL_TO_ACTION_SECONDARY = 'BUTTON_THEME_CALL_TO_ACTION_SECONDARY'

const BUTTON_TO_CLASSNAME_MAPPING = {
  [BUTTON_THEME_CALL_TO_ACTION_PRIMARY]: styles.buttonThemePrimary,
  [BUTTON_THEME_CALL_TO_ACTION_SECONDARY]: styles.buttonThemeSecondary,
}

const Button = ({
  text,
  onClick,
  theme,
  children,
  type,
  className,
  style,
  id,
  disabled = false,
}) => {
  return (
    <button
      onClick={disabled ? () => {} : onClick}
      role={'button'}
      tabIndex={'0'}
      className={classnames(
        styles.buttonWrapper,
        BUTTON_TO_CLASSNAME_MAPPING[theme],
        disabled && styles.buttonDisabled,
        className,
      )}
      style={style}
      type={type || 'button'}
      id={id}
    >
      {children || text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  // if Button component is wrapped by button form component, it doesn't require onClick
  onClick: PropTypes.func,
  theme: PropTypes.string,
  // allow 'children' for customizing buttons, e.g. with an SVG
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  theme: BUTTON_THEME_CALL_TO_ACTION_PRIMARY,
}

export default Button
