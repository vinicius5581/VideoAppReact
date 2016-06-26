///////////////////////////////////
// Forming a Connection to React //
///////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

//////////////////////////////////////////////////////////////
// Create a new Component.                                  //
// -- This component should produce some HTML               //
// ---- A component is a function or an object that returns //
// some amount of HTML. We can have different components    //
// for different functions. For diff purposes.              //
//////////////////////////////////////////////////////////////

/**
 * [Just a Component]
 * @param {[const]} Jack [declaring a variable, just like 'var'... however, 'const' means that this is the finalvalue of this variable. It's never going to change. It's a constant. You'll never reassign 'Jack' down the line.]
 * @return {[JSX]} [The HTML looking structure in the return is JSX. A subset / dialect of JS which allows us to write what looks like HTMl inside JS but really behind the scenes is JS. Babel + Webpack will transpile this for the browser to read (Vanilla JS).]
 * @param {[=>]} [New way of declaring a function using ES6. Different value of 'this' ]
 */
const Jack = () => {
    return <div>What's up dude?</div>;
}

//////////////////////////////////////////////
// Take this Component's generated HTML and //
// put it on the page (in the DOM)          //
//////////////////////////////////////////////

ReactDOM.render(<Jack />, document.querySelector('.container'));
