import Page, { Container } from 'components/Page'
import { useRouter } from 'next/router'

import apuImage from 'images/nav-logo-2.png'
import apuSmilingImage from 'images/apu-smiling.png'
import browserImage from 'images/browser-image-2.png'

import HeroBlock from 'components/HeroBlock'
import InfoCardBlock from 'components/InfoCardBlock'
import StartGuideBlock from 'components/StartGuideBlock'
import MultiColumnBlock from 'components/MultiColumnBlock'
import DonationBlock from 'components/DonationBlock'

import styles from 'styles/shared.module.scss'

/*
TODO:
- social media icons block
*/

const hipsterIpsum = `Before they sold out heirloom shoreditch shaman unicorn. Hexagon pop-up artisan raw denim affogato aesthetic. 3 wolf moon messenger bag af, hexagon pork belly vexillologist air plant next level 90's dreamcatcher.`
const hipsterIpsumShort = 'Squid artisan tacos kickstarter cloud bread chillwave'
const subtitleExample = 'A Decentralized Meme Token that Evolved into a Vibrant Ecosystem'

const Splash = ({ windowWidth }) => {
  const router = useRouter()
  return (
    <Page withGlobalNav fullWidth windowWidth={windowWidth}>
      <HeroBlock
        title={subtitleExample}
        subtitle={hipsterIpsumShort}
        buttonText={'Call to Action!'}
        buttonOnClick={() => {}}
        windowWidth={windowWidth}
      />
      <InfoCardBlock
        image={apuImage}
        title={'What is Apu Coin?'}
        description={hipsterIpsum}
        windowWidth={windowWidth}
      />
      <MultiColumnBlock
        columns={[
          {
            title: 'How to Buy',
            description: (
              <div>
                <p>{'SHIB and LEASH are best purchased and sold through ShibaSwap, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.'}</p>
                <p>{'SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.'}</p>
              </div>
            ),
            buttonText: 'Do Something!',
            buttonHref: '#'
          },
          {
            image: browserImage,
            className: styles.boxShadow,
          }
        ]}
        windowWidth={windowWidth}
      />
      <StartGuideBlock />
      <MultiColumnBlock
        columns={[
          {
            image: apuSmilingImage,
          },
          {
            title: 'MultiColumnBlock Title',
            description: (
              <div>
                <p>{'SHIB and LEASH are best purchased and sold through ShibaSwap, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.'}</p>
                <p>{'SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.'}</p>
              </div>
            ),
            buttonText: 'Do Something!',
            buttonHref: '#'
          }
        ]}
        windowWidth={windowWidth}
      />
      <DonationBlock />
      <MultiColumnBlock
        columns={[
          {
            title: 'MultiColumnBlock Single Column',
            description: (
              <div>
                <p>{'SHIB and LEASH are best purchased and sold through ShibaSwap, but can also be found on Uniswap and an ever-growing list of CEXs. Please note that, outside of ShibaSwap, exchanges which support one may not support the other.'}</p>
                <p>{'SHIB is a decentralized experiment and, as such, we always incentivize the use of DEXs. If you choose to utilize a CEX instead, remember to research it first to ensure it is both safe and secure.'}</p>
              </div>
            ),
            buttonText: 'Do Something!',
            buttonHref: '#'
          },
        ]}
        windowWidth={windowWidth}
      />
    </Page>
  )
}

export default Splash
