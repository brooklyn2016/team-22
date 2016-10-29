import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import FooterNav from './Footer';

class Issac extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(this.props.lessons.lesson[0]);
  }

	render() {
		return (
			<div>

        <h3 className="display-3">{this.props.lessons.lesson[0].lessonName}</h3>
        <p className="objective">Objective</p>
        <p className="content">{this.props.lessons.lesson[0].objective}</p>

        <p>
        {this.props.lessons.lesson[0].background[0].title}
        <br />

				{this.props.lessons.lesson[0].background[0].desc}
        </p>

        <p>
        {this.props.lessons.lesson[0].background[1].title}
        <br />
        {this.props.lessons.lesson[0].background[1].desc}
        </p>

        <Link to={'/q1'}>
          <button>Questions</button>
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

export default connect(mapStateToProps, null)(Issac);
