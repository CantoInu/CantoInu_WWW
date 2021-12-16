import React from 'react'
import { useRouter } from 'next/router'
import Page from 'components/Page'
import Image from 'next/image'
import Button, {
  BUTTON_THEME_CALL_TO_ACTION_PRIMARY,
} from 'components/Button'
import FourOhFourGraphic from 'assets/images/404.svg'
import backgroundImage from 'assets/images/404-background-image.svg'
import styles from 'styles/error-page.module.scss'

const ErrorPage = () => {
  const router = useRouter()
  return (
    <Page
      fullWidth
      wrapperClassName={'styles.pageWrapper404'}
    >
      <div className={'styles.backgroundImage'}>
        <Image src={backgroundImage} />
      </div>
      <div className={'styles.errorPageContent'}>
        <Image
          src={FourOhFourGraphic}
          alt={'404'}
          className={'styles.errorPageImage'}
        />
        <div className={'styles.errorPageText'}>
          {'We can\'t seem to find the page you\'re looking for'}
        </div>
        <Button
          theme={BUTTON_THEME_CALL_TO_ACTION_PRIMARY}
          text={'Go Back'}
          onClick={() => router.back()}
          className={'styles.errorPageButton'}
        />
      </div>
    </Page>
  )
}

export default ErrorPage
