import React from 'react';
import SectionSome from './components/SectionSome';

function BasicButton(props) {
  return <button>{ props.text }</button>
}

function GoogleIt(props) {
  return <a href="https://www.google.com">{ props.text }</a>
}

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <BasicButton text='Click Me!'/>
      <SectionSome custom="some generic text"/>
      <GoogleIt text="Google"/>
    </div>
  );
}

export default App;
