import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ModuleIcon from './ModuleIcon';
import FooterNav from './Footer';

class Home extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    this.props.fetchLessons();
  }

  renderLessons() {
  let lessonProps = this.props.lessons.lesson;
  let lessons = null;
  if (lessonProps.length > 0) {
    lessons = lessonProps.map(lesson => {
      console.log(lesson);
      return (
        <div key={lesson._id}>
          <ModuleIcon lesson={lesson}/>
        </div>);
    });
  }
  return lessons;
}

	render() {
		return (

      !this.props.lessons ?
        <div>Loading...</div>
      :
			<div>
			   {this.renderLessons()}
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

export default connect(mapStateToProps, actions)(Home);
