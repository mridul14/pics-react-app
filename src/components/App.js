import React from "react";
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(search_term){
        console.log(search_term)
        // we will pass this method as props in 'SearchBar'
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/*  Since SearchBar is a user defined tag we can name the prop 'onSubmit' as anything of our choice,
                    for simplicity we have named it as onSubmit.
                    We will reference this prop in SearchBar.js
                */}
            </div>
        );
    }
}

export default App;