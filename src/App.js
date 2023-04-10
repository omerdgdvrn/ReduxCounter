import React from 'react';
import { Counter } from './Counter.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="row">
    <div className="col s12 m6">
      <div className='card blue-grey darken-1'>
      <div class="card-content white-text">
      <Counter/>
      </div>
      <Footer/>
      </div>
    </div>
    </div>
  );
}

export default App;
