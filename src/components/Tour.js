import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>Not interested</button>
      </div>
    </div>
  );
};

export default Tour;
