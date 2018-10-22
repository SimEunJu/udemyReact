import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term}
        onChange={evt => onInputChange(evt.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term: evt.target.value});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
