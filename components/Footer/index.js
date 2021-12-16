import classnames from 'classnames'
import { Container } from 'components/Page'
import styles from './index.module.scss'
import { TITLE, NAV_MENU_ITEMS } from 'components/GlobalNav'

const hipsterIpsumShort = 'Squid artisan tacos kickstarter cloud bread chillwave'
const subtitleExample = 'A Decentralized Meme Token that Evolved into a Vibrant Ecosystem'

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <p className={styles.footerLinks}>
            {NAV_MENU_ITEMS.map(item => (
              <a href="#" key={item.title}>{item.title}</a>
            ))}
          </p>
          <p>{TITLE} &copy; 2021</p>
        </div>
        {/*
          // TODO: social media icon links
          <div className={styles.footerRight}>
    				<a href="#"><i className="fa fa-facebook"></i></a>
    				<a href="#"><i className="fa fa-twitter"></i></a>
    				<a href="#"><i className="fa fa-linkedin"></i></a>
    				<a href="#"><i className="fa fa-github"></i></a>
    			</div>
        */}
      </div>
      <div className={styles.footerQuoteWrapper}>
        <div className={styles.footerQuote}>
          {subtitleExample}
        </div>
      </div>
		</footer>
  )
}

export default Footer
