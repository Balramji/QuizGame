import React from 'react';
import './Components/Trivia.css'
import Trivia from './Components/Trivia'
import Form from './Components/Form';

function App() {
  return (
    <div className="App">

      <Form />

      {/* Please uncomment this component when you rendering after FOrm component  */}
      <Trivia />
    </div>
  );
}

export default App;
