import React from 'react';
import Consumers from '../consumers/consumers';

function Main() {
  return (
    <div>
      <span
        style={{ margin: '7px', display: 'block' }}
        role="img"
        aria-label="rocket"
      >
        🚀
      </span>
      <Consumers />
    </div>
  );
}

export default Main;
