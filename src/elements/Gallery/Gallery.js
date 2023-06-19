import React from 'react';
import CardComponent from '../Card/Card';
import infos from '../../Infos/infos';
import './Gallery.css'

function Gallery() {
  return (
    <div className='card_gallery'>
      {infos.map((info) => (
        <CardComponent key={info.id} info={info} />
      ))}
    </div>
  );
}

export default Gallery;