import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from '../actions/index';

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(e){
    e.preventDefault();
    this.setState({term: e.target.value});
  }
  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render(){
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="city"
          className="from-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span class="input-group-btn">
          <button type="submit" class="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
