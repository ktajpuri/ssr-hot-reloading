import React from 'react';
import './card.scss';

const Card = ({ data }) => (
  <div className="cards__item">
    <h1>{data}</h1>
  </div>
)

const Cards = () => (
  <div className="cards__container">
    {[1, 2, 3].map(item => <Card key={item} data={item} />)}
  </div>
)

export default Cards;
