import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNav from './Footer';

class QuestionTwo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.lessons);
  }

	render() {
		return (
      // lesson, material, instruct, question, funfact
			<div>
      <div>{this.props.lessons.lesson[0].questions[1].lesson}</div>
      <div>{this.props.lessons.lesson[0].questions[1].materials[0]}</div>
      <div>{this.props.lessons.lesson[0].questions[1].materials[1]}</div>

      <div>{this.props.lessons.lesson[0].questions[1].instruction}</div>
      <div>{this.props.lessons.lesson[0].questions[1].question}</div>
      <div>{this.props.lessons.lesson[0].questions[1].funFact}</div>



        <Link to={'/q3'}>
          <button>Questions </button>
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

export default connect(mapStateToProps, null)(QuestionTwo);
