import React from 'react';
import CollectionCard from '../components/CollectionCard';
import './Punklist.css';

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map(punk => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
