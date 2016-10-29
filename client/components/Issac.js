import React, { Component } from 'react';
import { connect } from 'react-redux';

class Issac extends Component {
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
      
        <button>Questions </button>
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
