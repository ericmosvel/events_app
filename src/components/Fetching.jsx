import React, { Suspense, useState, useEffect } from "react";
import EventCard from './EventCard'
import Pagination from './Pagination'
import axios from "axios";

// --------------------------------------------
// Pro Version - Render as you fetch

const App = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/'


  const instanceAxios = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data
      setData(data.results);
      setInfo(data.info);  
    } catch (error) {
      console.log('Error:', error.message);
    }      
  };

  const onPrev = () => {
    instanceAxios(info.prev);    
  }

  const onNext = () => {
    instanceAxios(info.next);
  }


  useEffect(() => {   
    instanceAxios(url);
  }, []) 
 
  return (
    <>
      <h1 className='text-2xl font-bold text-center p-4 mb-2'>Fetch like a Pro</h1>
      <div className="flex justify-center">
      <span className="mb-4" >Number of Characters: {info.count} </span> 
      </div>
      <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrev={onPrev} />     
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center flex-row flex-wrap">                 
          {data.map((item, index) => (
            <EventCard key={index} item={item}></EventCard>                                 
          ))}
        </div>       
      </Suspense>
      <Pagination prev={info.prev} next={info.next} onNext={onNext} onPrev={onPrev} />     
    </>
  );
}

export default App;

