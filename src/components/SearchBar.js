import React from 'react';

class SearchBar extends React.Component {
    
    handelChange = (e) => {
        this.setState({ inputSearch: e.target.value });
    }
    render() {
        return (
            <nav>
                <input type="text" name="search" placeholder="Search.." onChange={(e) => this.props.handelSearch(e.target.value)}></input>
        </nav>);
    }
}
export default SearchBar;   