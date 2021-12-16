import PropTypes from 'prop-types'
import { Container } from 'components/Page'
import Image from 'next/image'
import styles from './index.module.scss'

const START_GUIDE_INSTRUCTIONS = [
  {
    title: 'Create MetaMask wallet',
    description: 'Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive APU.',
  },
  {
    title: 'Send ETH to your wallet',
    description: 'You can buy Ethereum (ETH) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transfering ETH.',
  },
  {
    title: 'Connect your wallet to Milky Swap',
    description: 'Access your wallet to ShibaSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.',
  },
  {
    title: 'Swap ETH for APU',
    description: 'You can start swapping as soon as you have ETH available! Press ‘Select a token’ and enter the token address or search for it on the tokens list.',
  },
]

const StartGuideBlock = ({
  title = 'Quick Start Guide',
  instructions = START_GUIDE_INSTRUCTIONS
}) => {
  return (
    <Container fullWidth className={styles.blockWrapper}>
      <div className={styles.blockContainer}>
        <div className={styles.startGuideTitle}>{title}</div>
        <div className={styles.instructionsWrapper}>
          {instructions.map((instruction, i) => (
            <div className={styles.instructionContainer} key={i}>
              <div className={styles.instructionNumber}>{`${i + 1}`}</div>
              <div className={styles.dividerLine} />
              <div className={styles.instructionTextContainer}>
                <div className={styles.instructionTitle}>{instruction.title}</div>
                <div className={styles.isntructionDescription}>{instruction.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

StartGuideBlock.propTypes = {
  title: PropTypes.string,
  instructions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }))
}

export default StartGuideBlock
