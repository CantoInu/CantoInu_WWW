import { Container } from 'components/Page'
import Image from 'next/image'
import styles from './index.module.scss'

const NFTBlock = ({ image, title, description }) => {
  return (
    <Container fullWidth className={styles.nftBlockWrapper}>

        <div className={styles.nftBlockTextContainer}>
          <div className={styles.nftBlockTitle}>
            {'WOOF NFT'}
          </div>
          <div className={styles.nftBlockDescription}>
            {"You can send any amount of CANTO to the NFT contract to mint an NFT and burn $CINU. Thank you for your support!"}
          </div>
          <div className={styles.nftAddressWrapper}>
            {'Send CANTO (not wrapped): 0xDE7Aa2B085bef0d752AA61058837827247Cc5253'}
          </div>
        </div>

    </Container>
  )
}

export default NFTBlock
