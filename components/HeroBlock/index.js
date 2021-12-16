import classnames from 'classnames'
import Image from 'next/image'
import Button, {
  BUTTON_THEME_CALL_TO_ACTION_PRIMARY,
} from 'components/Button'
import apuImage from 'images/splash-image-2.png'
import styles from './index.module.scss'

const bubblesUI = (
  <ul className={styles.bgbubbles}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
)

const HeroBlock = ({ title, subtitle, buttonText, buttonHref, buttonOnClick, windowWidth }) => {
  const isSmallViewport = windowWidth < 900
  return (
    <div className={classnames(
      styles.headerWrapper,
      isSmallViewport && styles.headerWrapperSmallViewport,
    )}>
      {bubblesUI}
      <div className={classnames(
        styles.headerContent,
        isSmallViewport && styles.headerContentSmallViewport,
      )}>
        <div className={classnames(
          styles.splashImage,
          isSmallViewport && styles.splashImageSmallViewport,
        )}>
          <Image src={apuImage} />
        </div>
        <div className={styles.blockTextContainer}>
          <h1 className={styles.containerSubHeader}>
            {title}
          </h1>
          <div className={styles.containerSubParagraph}>
            {subtitle}
          </div>
          <Button
            text={buttonText}
            theme={BUTTON_THEME_CALL_TO_ACTION_PRIMARY}
            href={buttonHref}
            className={styles.splashCTAButton}
            onClick={buttonOnClick}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroBlock
