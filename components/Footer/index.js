import classnames from 'classnames'
import { Container } from 'components/Page'
import styles from './index.module.scss'
import { TITLE, NAV_MENU_ITEMS } from 'components/GlobalNav'

const subtitleExample = 'A Dog Centric Token on Canto.'



const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerLeft}>
          <p className={styles.footerLinks}>
            <a href="#" key="HOME">Home</a>
            {NAV_MENU_ITEMS.map(item => (
              <a href={item.path} key={item.title}>{item.title}</a>
            ))}
          </p>
          <p>{TITLE} &copy; 2022</p>
          <p>This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation to buy or sell, any token or other product. Purchasing and selling tokens is inherently risky and holders must bear their risk of loss. 
            Neither the authors of this website nor any participants in the Canto Inu project accept any liability for losses or taxes that holders, purchasers or sellers of Canto Inu may incur. The value of Canto Inu may decrease and may be highly volatile.
            This website is not directed towards any person located in a jurisdiction where purchasing, selling or holding Canto Inu is prohibited or regulated. Consult your local laws before transacting in any cryptocurrency.</p>
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
