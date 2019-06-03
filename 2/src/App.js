import React from 'react';

function BasicButton(props) {
  return <button>{ props.text }</button>

}

function SectionSome() {
  return (
  <section>
    <div>
      <p><strong>Are you still there?</strong></p>
    </div>
  </section>
  )
}

function GoogleIt() {
  return <a href="https://www.google.com">Go to Google</a>
}

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <BasicButton text='Click Me!'/>
      <SectionSome />
      <GoogleIt />
    </div>
  );
}

export default App;
