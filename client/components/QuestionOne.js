import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNav from './Footer';

class QuestionOne extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.lessons);
  }

	render() {
		return (
			<div>
        <div>{this.props.lessons.lesson[0].questions[0].question[0]}</div>
        <div>{this.props.lessons.lesson[0].questions[0].question[1]}</div>

        <Link to={'/q2'}>
          <button>Submit </button>
        </Link>

        <FooterNav />

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
