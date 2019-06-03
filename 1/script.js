const myElement = React.createElement('h1', { className: 'heading' }, 'Lambda Is AWESOME!');
const jayneSaysHi = React.createElement('h1', { className: 'heading' }, 'Hi Everyone');
const petarsElement = React.createElement('button', { className: 'btn' }, ['click me!', ]);
const myReact = React.createElement('p', { className: 'react' }, 'React Is AWESOME!');
const petarSElement = React.createElement('small', { className: 'small' }, 'nice!');




// JSX
const myElementJSX = <h1 className="heading">Lambda Is AWESOME! JSX</h1>;



const appContainer = React.createElement(
    'div', 
    { className: 'App' },
    [jayneSaysHi, myElementJSX, petarsElement, myReact]
);

ReactDOM.render(appContainer, document.querySelector('#root'));