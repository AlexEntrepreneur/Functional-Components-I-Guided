const myElement = React.createElement('h1', { className: 'heading' }, 'Lambda Is AWESOME!');
// const jayneSaysHi = React.createElement('h1', { className: 'heading' }, 'Hi Everyone');
// const petarsElement = React.createElement('button', { className: 'btn' }, ['click me!', ]);
// const myReact = React.createElement('p', { className: 'react' }, 'React Is AWESOME!');
const petarSElement = React.createElement('small', { className: 'small' }, 'nice!');




// JSX
const myElementJSX = <h1 className="heading">Lambda Is AWESOME! JSX</h1>;
const house = <div className="box1"><p>Where is your house?</p></div>;
const jayneSaysHi = <h1 className="heading">Hi Everyone</h1>;
const petarsElement = <button className= "btn">click me!</button>;
const myReact = <p className="react">React Is AWESOME! JSX</p>;
const Danikat = <h1 className="heading">Hello everyone!!</h1>;


const appContainer = React.createElement(
    'div', 
    { className: 'App' },
    [Danikat]
);

ReactDOM.render(appContainer, document.querySelector('#root'));