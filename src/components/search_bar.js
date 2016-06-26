/**
 * Forming a Connection to React
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * SearchBar Component
 * @return {[type]} [description]
 */

//////////////////////////////////////////////
// A Functional Component                   //
// -- Since it literally is a function. Duh //
// One function, some info goes in and some //
// JSX comes out. Very simple               //
//////////////////////////////////////////////
// const SearchBar = () => {
//     return <input />
// }

///////////////////////////////////////////////////
// A Class Component                             //
// -- Used whenever you want a component to have //
// some type of an internal record keeping.      //
// Some ability to be aware of itself and what's //
// happened to it since it's been rendered.      //
// Some ability to introspect itself.            //
// A bit more aware of itself and tell others as //
// to what's going on. Greater Complexity.       //
// -- ES6 Class                                  //
// ---- JS Object with Properties and Methods    //
///////////////////////////////////////////////////
class SearchBar extends Component {
    ///////////////////////////////////////////////
    // Event Handler                             //
    // -- Function runs whenever an Event occurs //
    // -- Naming the Handler                     //
    // Generally 'on' or 'handle'                //
    // Then the 'name' of the element            //
    // Then the 'name' of the event itself       //
    ///////////////////////////////////////////////
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    //////////////////////////////////////////////
    // Each component MUST have a Render Method //
    // The ability to render itself somehow.    //
    //////////////////////////////////////////////
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

/**
 * Let's export the SearchBar Code to other files.
 * Since all of the components are siloed from each other
 * unless we explicitly declare a connection between them.
 */
export default SearchBar;
