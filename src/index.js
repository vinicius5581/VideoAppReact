/**
 * Forming a Connection to React and other modules
 */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LetsSearchVidz from 'youtube-api-search';

/**
 * Forming a Connection to sub-components
 */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

/**
 * YouTube Data API v3 - Browser Key
 * @type {String}
 */
const API_KEY = 'AIzaSyC7btKSBmhm7nloIrYdiFgkH9TQpgpM7II';

// LetsSearchVidz({ key: API_KEY, term: 'lamborghini' }, function(lamborghiniVidz) {
// 	console.log(lamborghiniVidz);
// });

//////////////////////////////////////////////////////////////
// Downwards Data Flow                                      //
// -- Only the most 'parent component' in the app should be //
// responsible for fetching the data.                       //
//////////////////////////////////////////////////////////////

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
 * @param {const} VideoAppReact declaring a variable, just like 'var'... however, 'const' means that this is the finalvalue of this variable. It's never going to change. It's a constant. You'll never reassign 'VideoAppReact' down the line.
 * @param {=>} New way of declaring a function using ES6. Different value of 'this' 
 * @return {JSX} The HTML looking structure in the return is JSX. A subset / dialect of JS which allows us to write what looks like HTMl inside JS but really behind the scenes is JS. Babel + Webpack will transpile this for the browser to read (Vanilla JS).
 */
// const VideoAppReact = () => {
//     return (
//         <div>
//     		<p>I will be playing a couple of videos here :)</p>
// 			<SearchBar />
// 		</div>
//     );
// }

class VideoAppReact extends Component {
    constructor(props) {
        super(props);

        ///////////////////////////////////////////////////////////
        // Initially 'bunchAvideos' starts off as an empty Array //
        ///////////////////////////////////////////////////////////
        this.state = {
            bunchAvideos: [],
            selectedVideo: null
        };

        ////////////////////////////////////////////////////////
        // Initially run the videoSearch with something in it //
        ////////////////////////////////////////////////////////
        this.videoSearch('Lamborghini');
    }

    /**
     * Define our VideoSearch callback
     * @param  {String} term Search Term, whatever the user types into the input
     * @return {Object}      The Videos searched for
     */
    videoSearch(term) {
        ////////////////////////////////////////////////////////////////////
        // The instant the component is rendered, it kicks off a search   //
        // and it'll update 'bunchAvideos' with the search results.       //
        ////////////////////////////////////////////////////////////////////
        LetsSearchVidz({ key: API_KEY, term: term }, (bunchAvideos) => {
            console.log(bunchAvideos);
            // this.setState({ bunchAvideos: bunchAvideos });
            /////////////////////////////////////////////////
            // -- If the key and value names are the same, //
            // fork ES6's syntactic sugar :)               //
            // It'll do the work for you                   //
            /////////////////////////////////////////////////
            this.setState({
                bunchAvideos: bunchAvideos,
                selectedVideo: bunchAvideos[0]
            });
        });
    }

    /**
     * Render the VideoAppReact
     * @return {ReactJS App} The Entire Video App built with pure ReactJS and ES6 :)
     */
    render() {

        ////////////////////////////////////////////////////
        // Debounce Bounce Debounce                       //
        // -- Control the interval between function calls //
        ////////////////////////////////////////////////////
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
				<p>I will be playing a couple of videos here :)</p>
				<p>Search for Videos:
					<SearchBar 
						onSearchTermChange={videoSearch} />
				</p>
				<VideoDetail
					video={ this.state.selectedVideo } />
				<VideoList 
					onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
					videos={ this.state.bunchAvideos } />
			</div>
        );
    }
}

/**
 * Take this Component's generated HTML and put it
 * on the page (in the DOM).
 */
ReactDOM.render(<VideoAppReact />, document.querySelector('.container'));
