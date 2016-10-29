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
			<div className="lesson-bg">
        <h3 className="display-3">Lesson #2</h3>

        <div className="container">
          <br/>
          <p>{this.props.lessons.lesson[0].questions[1].lesson}</p>
          <p>Materials: {this.props.lessons.lesson[0].questions[1].materials[0]}, {this.props.lessons.lesson[0].questions[1].materials[1]}</p>

          <p>{this.props.lessons.lesson[0].questions[1].instruction}</p>
          <p>{this.props.lessons.lesson[0].questions[1].question}</p>
          <p>{this.props.lessons.lesson[0].questions[1].funFact}</p>



            <Link to={'/home'}>
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

export default connect(mapStateToProps, null)(QuestionTwo);
