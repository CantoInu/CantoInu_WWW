import { Container } from 'components/Page'
import classnames from 'classnames'
import Image from 'next/image'
import styles from './index.module.scss'

const InfoCardBlock = ({ image, title, description, windowWidth }) => {
  const isSmallViewport = windowWidth < 900
  return (
    <Container fullWidth className={styles.infoCardBlockWrapper}>
      <div className={classnames(
        styles.infoCardBlockContainer,
        isSmallViewport && styles.infoCardBlockContainerSmallViewport,
      )}>
        <div className={classnames(
          styles.infoCardBlockImage,
          isSmallViewport && styles.infoCardBlockImageSmallViewport,
        )}>
          <Image src={image} />
        </div>
        <div className={styles.blockTextContainer}>
          <div className={styles.blockTextTitle}>
            {title}
          </div>
          <div className={styles.containerSubParagraph}>
            {description}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InfoCardBlock
