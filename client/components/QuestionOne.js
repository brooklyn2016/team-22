import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class QuestionOne extends Component {
  constructor(props) {
    super(props);

  }

	render() {
		return (
			<div>


        <Link to={'/q2'}>
          <button>Submit </button>
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

export default connect(mapStateToProps, null)(QuestionOne);
