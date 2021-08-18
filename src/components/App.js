import React from "react";
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images : [] };

//      ------------------- Approach 2 for Async request --------------------
    onSearchSubmit = async (search_term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: search_term},
        });
        this.setState({ images: response.data.results });
    }

//    onSearchSubmit(search_term){
//         --------- Approach 1 to get response from Async request -----------------
//        axios.get('https://api.unsplash.com/search/photos', {
//            params: {query: search_term},
//            headers: {
//                Authorization: 'Client-ID 6j_qm6zkxzwfXHbNYqmf-8_6nMJVGQgcAxOEPN7_yeA'
//            }
//        }).then((response) => {
//             axios.get is an Async request so it will take some time to send the request and take some response back.
//             So by the time we get a response from the Async request, we would have already exited onSearchSubmit method.
//             Whenever we make a request with Axios, it returns an object called 'Promise', a promise is an object that will give us
//             a notification when some amount of work(like network request) is completed.
//             So in order to know a request is completed we can chain a '.then' function.
//             this .then will be called at some point in time in future, it will be invoked with the response we get back from the API.
//
//            console.log(response.data.results);
//        });
//         we will pass this method as props in 'SearchBar'
//    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/*  Since SearchBar is a user defined tag we can name the prop 'onSubmit' as anything of our choice,
                    for simplicity we have named it as onSubmit.
                    We will reference this prop in SearchBar.js
                */}
				<ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;