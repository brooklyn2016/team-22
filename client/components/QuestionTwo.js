import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class QuestionTwo extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.lessons.lesson[5]);
  }

	render() {
		return (
			<div>

        <Link to={'/q3'}>
          <button>Questions </button>
        </Link>
		 	</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.data
  }
}

export default connect(mapStateToProps, null)(QuestionTwo);
