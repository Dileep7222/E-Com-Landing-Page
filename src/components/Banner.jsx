import "./Banner.css"
import BannerImg from "../assets/Banner.png"
 
export default function Banner(){
    return(
        <div className="banner">
      <div>
        <h1>The Biggest Sale is on!</h1>
        <p>
          During this exclusive sale, grab items at top discount
          <br />
          Dont miss the chance
        </p>
        <button>Check now</button>
      </div>
      <img src={BannerImg} alt="Banner for special offers" />
    </div>
    );
}