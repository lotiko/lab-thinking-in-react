import React from 'react';

class SearchBar extends React.Component {
    
    handelChange = (e) => {
        this.setState({ inputSearch: e.target.value });
    }
    render() {
        return (
            <div>
                <h3>Search</h3>
                <input type="text" name="search" onChange={(e) => this.props.handelSearch(e.target.value)}></input>
        </div>);
    }
}
export default SearchBar;   