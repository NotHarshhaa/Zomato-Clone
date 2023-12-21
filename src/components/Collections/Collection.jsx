import React from "react";
import "./Collection.scss";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import collection1 from "../../assets/images/collection1.webp";
import collection2 from "../../assets/images/collection2.webp";
import collection3 from "../../assets/images/collection3.webp";
import collection4 from "../../assets/images/collection4.webp";

const Collection = () => {
  return (
    <div className="collection">
      <h1>Collection</h1>
      <div className="collectionText">
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Ahmedabad, based on trends
        </p>
        <span>
          All collection in Ahmedabad <ArrowRightIcon />
        </span>
      </div>
      <div className="collectionCard">
        <div className="collectionImg">
          <img src={collection1} alt="img" />
          <h3>10 Must-Visit Places for Christmas</h3>
          <span>
            9 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection2} alt="img2" />
          <h3>7 Finest Buffet Places</h3>
          <span>
            7 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection3} alt="img4" />
          <h3>Top 8 Picturesque Cafes</h3>
          <span>
            7 Places <ArrowRightIcon />
          </span>
        </div>
        <div className="collectionImg">
          <img src={collection4} alt="img4" />
          <h3>10 Best Luxury Dining Places</h3>
          <span>
            10 Places <ArrowRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
