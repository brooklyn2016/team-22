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
			<div className="lesson-bg">
        <h3 className="display-3">Lesson #1</h3>

        <div className="container">
        <br/>
          <p>{this.props.lessons.lesson[0].questions[0].question[0]}</p>
          <p>{this.props.lessons.lesson[0].questions[0].question[1]}</p>

          <Link to={'/q2'}>
            <button className="btn btn-info">Submit </button>
          </Link>
          </div>

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
