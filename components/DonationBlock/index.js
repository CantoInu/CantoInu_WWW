import { Container } from 'components/Page'
import Image from 'next/image'
import styles from './index.module.scss'

const DonationBlock = ({ image, title, description }) => {
  return (
    <Container fullWidth className={styles.donationBlockWrapper}>

        <div className={styles.donationBlockTextContainer}>
          <div className={styles.donationBlockTitle}>
            {'Community'}
          </div>
          <div className={styles.donationBlockDescription}>
            {"If you'd like to donate to the Devs, send ETH or APU here. Thank you for your support!"}
          </div>
          <div className={styles.donationAddressWrapper}>
            {'CHANGE ME - 0xc351155C80aCD043BD5F8FE7ffc8536af1fF9375'}
          </div>
        </div>

    </Container>
  )
}

export default DonationBlock
