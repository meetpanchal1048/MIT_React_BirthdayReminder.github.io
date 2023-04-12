import React from 'react'

export const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const{id,name,age,image} = person;
        return ( 
        <article key={id} className='person text-light'>
          <img src={image} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </article>
        );
      })}
    </>
  )
}

