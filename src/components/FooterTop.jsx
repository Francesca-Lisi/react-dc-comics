import DigitalComicsImg from '../assets/img/buy-comics-digital-comics.png'
import MerchandiseImg from '../assets/img/buy-comics-merchandise.png'
import SubscriptionImg from '../assets/img/buy-comics-subscriptions.png'
import LocatorImg from '../assets/img/buy-comics-shop-locator.png'
import VisaImg from '../assets/img/buy-dc-power-visa.svg'


const FooterTop = () => {
  return (
    <div className='container footer-top'>
      <div className="row row-cols-5 align-self-center">
        <div className="col" >
          <img src={DigitalComicsImg} alt="Digital Comics" />
          <a href="#">DIGITAL COMICS</a>
        </div>
        <div className="col" >
          <img src={MerchandiseImg} alt="DC Merchandise" />
          <a href="#">DC MERCHANDISE</a>
        </div>
        <div className="col" >
          <img src={SubscriptionImg} alt="Subscription" />
          <a href="#">SUBSCRIPTION</a>
        </div>
        <div className="col" >
          <img src={LocatorImg} alt="Comic Shop Locator" />
          <a href="#">COMIC SHOP LOCATOR</a>
        </div>
        <div className="col" >
          <img src={VisaImg} alt="Dc Power Visa" />
          <a href="#">DC POWER VISA</a>
        </div>
      </div>
    </div>
  )
}

export default FooterTop