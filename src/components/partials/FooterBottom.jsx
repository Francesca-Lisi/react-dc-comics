import FacebookImg from '../../assets/img/footer-facebook.png'
import TwitterImg from '../../assets/img/footer-twitter.png'
import YoutubeImg from '../../assets/img/footer-youtube.png'
import PinterestImg from '../../assets/img/footer-pinterest.png'
import PeriscopeImg from '../../assets/img/footer-periscope.png'


const FooterBottom = () => {
  return (
    <div id='FooterBottom'>
      <div className='container d-flex'>
        <button>SIGN-UP NOW</button>

        <ul>
          <li>
            <a href="#">FOLLOW US</a>
          </li>
          <li>
            <a href="#"><img src={FacebookImg} alt="" /></a>
          </li>
          <li>
            <a href="#"><img src={TwitterImg} alt="" /></a>
          </li>
          <li>
            <a href="#"><img src={YoutubeImg} alt="" /></a>
          </li>
          <li>
            <a href="#"><img src={PinterestImg} alt="" /></a>
          </li>
          <li>
            <a href="#"><img src={PeriscopeImg} alt="" /></a>
          </li>
        </ul>
      </div>



    </div>
  )
}

export default FooterBottom