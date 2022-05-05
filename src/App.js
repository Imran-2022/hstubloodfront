import React from 'react'
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Context/Context';
function App() {
  return (
    <>
     <Context>
        <Main/>
      </Context>
    </>
  );
}

export default App;
