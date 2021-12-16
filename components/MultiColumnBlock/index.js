import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Container } from 'components/Page'
import Image from 'next/image'
import Button, {
  BUTTON_THEME_CALL_TO_ACTION_PRIMARY,
} from 'components/Button'
import styles from './index.module.scss'

const ColumnCard = ({
  image,
  title,
  description,
  buttonText,
  buttonHref,
  customHtml,
  className,
  columnCount,
}) => (
  <div className={classnames(
    styles.columnCardWrapper,
    className,
  )}>
    {customHtml || (
      <>
        {image && (
          <div className={styles.cardImageWrapper}>
            <Image src={image} />
          </div>
        )}
        <div className={styles.cardTitle}>
          {title}
        </div>
        <div className={styles.cardDescription}>
          {description}
        </div>
        {buttonText && (
          <Button
            text={buttonText}
            theme={BUTTON_THEME_CALL_TO_ACTION_PRIMARY}
            href={buttonHref}
            className={classnames(
              styles.columnCardButton,
              columnCount === 1 && styles.columnCardButtonCentered,
            )}
          />
        )}
      </>
    )}
  </div>
)

const MultiColumnBlock = ({ columns = [], windowWidth }) => {
  const isSmallViewport = windowWidth < 800
  return (
    <Container fullWidth className={styles.multiColumnBlockWrapper}>
      <div className={classnames(
        styles.multiColumnBlockContainer,
        isSmallViewport && styles.multiColumnBlockContainerSmallViewport,
        columns.length === 1 && styles.multiColumnBlockContainerSingleColumn,
      )}>
        {columns.map((column, i) => (
          <ColumnCard {...column} columnCount={columns.length} key={i} />
        ))}
      </div>
    </Container>
  )
}

MultiColumnBlock.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    buttonText: PropTypes.string,
    buttonOnClick: PropTypes.func,
    customHtml: PropTypes.node,
  }))
}

export default MultiColumnBlock
