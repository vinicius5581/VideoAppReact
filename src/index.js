/**
 * Forming a Connection to React
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Forming a Connection to sub-components
 */
import SearchBar from './components/search_bar';

/**
 * YouTube Data API v3 - Browser Key
 * @type {String}
 */
const API_KEY = 'AIzaSyC7btKSBmhm7nloIrYdiFgkH9TQpgpM7II';

//////////////////////////////////////////////////////////////
// Create a new Component.                                  //
// -- This component should produce some HTML               //
// ---- A component is a function or an object that returns //
// some amount of HTML. We can have different components    //
// for different functions. For diff purposes.              //
// -- No matter how small, no matter what the purpose       //
// always remember to have ONLY ONE component per file      //
//////////////////////////////////////////////////////////////

/**
 * Just a Component
 * @param {const} VideoApp declaring a variable, just like 'var'... however, 'const' means that this is the finalvalue of this variable. It's never going to change. It's a constant. You'll never reassign 'VideoApp' down the line.
 * @param {=>} New way of declaring a function using ES6. Different value of 'this' 
 * @return {JSX} The HTML looking structure in the return is JSX. A subset / dialect of JS which allows us to write what looks like HTMl inside JS but really behind the scenes is JS. Babel + Webpack will transpile this for the browser to read (Vanilla JS).
 */
const VideoApp = () => {
    return (
    	<div>
    		<p>I will be playing a couple of videos here :)</p>
			<SearchBar />
		</div>
	);
}

/**
 * Take this Component's generated HTML and put it
 * on the page (in the DOM).
 */
ReactDOM.render(<VideoApp />, document.querySelector('.container'));
