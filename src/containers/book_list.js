import React, {Component} from 'react';
// 'connect' is a function
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  constructor(props){
    super(props);
  }
  renderList(){
    return this.props.books.map((book) => <li onclick={() => this.props.selectBook(book)} className="list-group-item" key={book.title}>{book.title}</li>);
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch);
}
// mapping state to props
function mapStateToProps(state){
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// mapStateToProps->state
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
