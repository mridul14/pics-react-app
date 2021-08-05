import React from 'react';

class SearchBar extends React.Component {

    /* ------------------------------- Approach 2 ------------------------------- */
    /*
    Control flow for this approach:
    1) User enters some input
    2) Callback gets invoked
    3) We call setState with the new value
    4) Component re-renders
    5) Input is assigned a value(coming from state)
    */
    state = { term : '' };

    render() {
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
//    ------------------------------- Approach 1 -------------------------------
//    // event is a JS object, that contains a bunch of information
//    // about the event that just occurred
//
//    onInputChange(event) {
//        // event.target.value will contain the text that the user added to the input
//        console.log(event.target.value);
//    }
//
//    // Naming convention for Event Callback Methods: on<Name of Tag><Name of Event>
//    // Example: onInputChange, onInputClick
//
//    render() {
//        return (
//            <div className="ui segment">
//                <form className="ui form">
//                    <div className="field">
//                        <label>Image Search</label>
//                        <input type="text" onChange={this.onInputChange} />
//                        {
//                        //Notice that we are not using () with onInputChange method,
//                        //that is because if we put () then onInputChange method will be
//                        //called when render() is called. But we do not want that, we want
//                        //to call onInputChange method later some point in time,
//                        //hence () is omitted, by leaving the () we are passing a reference
//                        //of method onInputChange to input.
//
//
//                        //Alternate way to handle event on an element:
//                        //<input type="text" onchange={ (event) => console.log(event.target.value) } />
//                        //In this approach we need not to write a separate callback method,
//                        //this is a common syntax when we want to execute a single line of code
//                        //whenever an event occurs.
//                    </div>
//                </form>
//            </div>
//        );
//    }
}


export default SearchBar;