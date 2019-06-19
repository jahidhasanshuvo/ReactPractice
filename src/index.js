
import React from 'react';
import ReactDOM from 'react-dom';

import FirstCompo from './components/first_compo';
import Students from './students/students'


const App = () => {
  return <div>
    {/*<FirstCompo />*/}
    <Students/>
  </div>;
}

ReactDOM.render(<App />, document.querySelector('.app'));