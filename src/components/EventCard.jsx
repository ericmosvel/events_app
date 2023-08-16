import React from 'react'
import Image from 'next/image'

function EventCard({ item }) {

//---------- Handler the character status ---------
  const statusColor = () => {
    if (item.status === 'Alive') {
      return 'green';
    } else if (item.status === 'Dead') {
      return 'red';
    } else if (item.status === 'unknown') {
      return 'yellow';
    };
    return 'gray';    
  };
  
  //------ Return the card with the character's information --------
  return (
    <div className='w-80 h-auto bg-indigo-700 rounded-lg overflow-hidden px-2 py-4 mb-6 mr-2 transition-all cursor-pointer text-white'>
      <h4 className='text-xl font-bold text-center p-4'>{item.name}</h4>
      <div className='flex justify-center'>
        <span className={`icon-${statusColor()}`} />              
        <span>Status: {item.status}</span>
      </div>
      <Image className='mt-2' src={item.image} alt="Rick and Morty" />
      <div className='flex justify-center'>
        <span className='pt-4'>Location: {item.location.name}</span>
      </div>
    </div>   
  );
}


export default EventCard

