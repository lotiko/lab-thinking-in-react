import React from 'react';

class SearchBar extends React.Component {
    
    handelChange = (e) => {
        this.setState({ inputSearch: e.target.value });
    }
    render() {
        return (
            <div >
                <h3 className="title is-3">Search</h3>
                <input className="input is-large" type="text" name="search" onChange={(e) => this.props.handelSearch(e.target.value)}></input>
        </div>);
    }
}
export default SearchBar;   