import React from 'react';

const OfficerCard = ({ image, name, title, description }) => {
  return (
    <div
      className="bg-white shadow-md rounded-full p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
      style={{ aspectRatio: '1 / 1.2' }}
    >
      <img
        src={image}
        alt={`${name}'s headshot`} // Added alt text for better accessibility
        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-indigo-500"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-indigo-600 font-medium">{title}</p>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default OfficerCard;
