import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours }) => {
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default Tours;
