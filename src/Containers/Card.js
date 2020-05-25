import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-gray dib br4 pa3 ma2 grow bw2 shadow-5'>

            <img alt='roboimage'src={`https://robohash.org/${id}200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        
        </div>
        );
}

export default Card;