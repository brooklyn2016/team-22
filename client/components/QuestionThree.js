import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNav from './Footer';

class QuestionThree extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.lessons.lesson[5]);
  }

	render() {
		return (
			<div>

        {this.props.lessons.lesson[5].lessonName}

        <p>{this.props.lessons.lesson[5].objective}</p>

        <p>
        {this.props.lessons.lesson[5].background[0].title}
        <br />

				{this.props.lessons.lesson[5].background[0].desc}
        </p>

        <p>
        {this.props.lessons.lesson[5].background[1].title}
        <br />
        {this.props.lessons.lesson[5].background[1].desc}
        </p>

        <Link to={'/home'}>
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

export default connect(mapStateToProps, null)(QuestionThree);
