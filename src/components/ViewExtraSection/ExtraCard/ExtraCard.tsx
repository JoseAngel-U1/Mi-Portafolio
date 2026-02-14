import React from "react";
import'./ExtraCard.css'

interface ExtraCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ExtraCard: React.FC<ExtraCardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="extra-card-square">
      <div className="card-front">
        <div className="card-img-container">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="card-title">{title}</div>
      </div>
      <div className="card-back">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ExtraCard;
