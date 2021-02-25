import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value});
    }

    render() {
        const loginPass = this.props.loginPass;
        if (loginPass) {
            return (
                <div className="SearchBar">
                    <input placeholder="Enter A Song, Album, or Artist"
                        onChange={this.handleTermChange} />
                    <button className="SearchButton" onClick={this.search}>SEARCH</button>
                </div>
            );
        }
        return (
            <div className="SearchBar">
                <button className="LoginButton" onClick={this.props.onLogin}>LOGIN TO SPOTIFY</button>
            </div>
        );
    }
}

export default SearchBar;