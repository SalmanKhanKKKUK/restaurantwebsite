import { review } from "../Data";
import quoteImage from "../assets/Images/quotImg.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer <span>review</span>
        </h1>
        <div className="box-container">
          {review.map((item, index) => (
            <div className="box">
              <img src={quoteImage} className="qoute" alt="quote-Image" />
              <p>{item.name}</p>
              <img src={item.img} className="user" alt="item_image" />
              <h3>{item.nameofreviewer}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
