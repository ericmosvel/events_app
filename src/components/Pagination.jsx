import React from 'react'

const Pagination = ({ prev, next, onPrev, onNext }) => {

  const handlerPrev = () => {
    onPrev();
  }

  const handlerNext= () => {
    onNext();
  }

  return (
    <div className='flex justify-center items-center my-5 h-2'>
      { prev ? (
        <button onClick={handlerPrev}>PREV</button>
      ) : null }
      { next ? (
        <button onClick={handlerNext}>NEXT</button>
      ) : null}
    </div>
    
  )
}


export default Pagination
