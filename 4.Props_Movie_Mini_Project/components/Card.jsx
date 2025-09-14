import React from "react";

const Card = (props) => {
  console.log("Props = ", props);
  return (
    <div>
      <div className="card">
        <img src={props.src} alt="image not found" className="card_img" />
        <div className="card_info">
          <span className="card_category">A Netflix Original Series</span>
          <h3 className="card_title">{props.name}</h3>
          <a href={props.url} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
