import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button id={`delete-btn-${id}`} class="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
      </div>
    </div>
  );
};

export default Tour;
