import React from 'react';
import Gif from './giphy.gif'

const Pmetrics = ({gif}) => {
  return (
    <div>
      <img className="gif" src={gif}/>
    </div>
  );
};

export default Pmetrics;