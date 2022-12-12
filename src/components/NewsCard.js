import React from "react";
import "../assests/css/NewsCard.css";

const NewsCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image_url} alt={item.title} className="image" />
      <div className="contentSection">
        <h1>{item.title}</h1>
        <p className="desc">{item.description}</p>
        <p className="author"><b style={{
            color: "black"
        }}>Created by</b> {item.creator ? item.creator : "Anonymus"} at {item.pubDate}</p>
        <a href={item.link} rel="noopener noreferrer" target="_blank">Read More at {item.source_id} </a>
      </div>
    </div>
  );
};

export default NewsCard;
