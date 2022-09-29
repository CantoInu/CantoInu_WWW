import Page, { Container } from 'components/Page'
import { useRouter } from 'next/router'

import logoImage from 'images/CantoInu_Logo.png'
import stonksImage from 'images/stonks.png'

import HeroBlock from 'components/HeroBlock'
import InfoCardBlock from 'components/InfoCardBlock'
import StartGuideBlock from 'components/StartGuideBlock'
import MultiColumnBlock from 'components/MultiColumnBlock'
import NFTBlock from 'components/NFTBlock'

import styles from 'styles/shared.module.scss'

/*
TODO:
- social media icons block
*/

const subtitleExample = 'A Dog Centric Token on Canto.'
const hipsterIpsumShort = 'No promises, no roadmap, no team, no marketing, just Canto free public infrastructure and memes.'
const hipsterIpsum = `Canto Inu is the first memecoin on Canto, launched in August 2022. Canto Inu was launched for entertainment purposes and aims to showcase the innovation in the Canto ecosystem.`


const Splash = ({ windowWidth }) => {
  const router = useRouter()
  return (
    <Page withGlobalNav fullWidth windowWidth={windowWidth}>
      <HeroBlock
        title={subtitleExample}
        subtitle={hipsterIpsumShort}
        buttonText={'Join the Telegram!'}
        buttonOnClick={(e) => {
            e.preventDefault();
            window.open('http://t.me/CantoInu', '_blank', 'noopener,noreferrer');
          }
        }
        windowWidth={windowWidth}
      />
      <section id="About">
        <InfoCardBlock
          image={logoImage}
          title={'What is Canto Inu?'}
          description={hipsterIpsum}
          windowWidth={windowWidth}
        />
      </section>
      <section id="Trade">
        <MultiColumnBlock
          columns={[
            {
              title: 'How Trade?',
              description: (
                <div>
                  <p>{'Canto Inu ($CINU) tokens can be traded on the Canto blockchain at Slingshot and Forteswap.'}</p>
                  <p>{'CINU is a decentralized experiment and, as such, we always focus on Canto Native DEXs.'}</p>
                </div>
              ),
              buttonText: 'Trade on Slingshot!',
              buttonOnClick: (e) => {
                e.preventDefault();
                window.open('https://app.slingshot.finance/trade/CANTO', '_blank', 'noopener,noreferrer');
              }
            },
            {
              image: stonksImage,
              className: styles.boxShadow,
            }
          ]}
          windowWidth={windowWidth}
        />
      </section>
      <StartGuideBlock />
      <section id="NFT">
        <NFTBlock/>
      </section>
    </Page>
  )
}

export default Splash
