import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ModuleIcon from './ModuleIcon';
import FooterNav from './Footer';
import { Link } from 'react-router';

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
      return (
        <div className="flex-child" key={lesson._id}>
          <Link to={'/lesson'}>
            <ModuleIcon lesson={lesson}/>
          </Link>
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
			<div className="background-img" >
        <div className="flex-me">
        			   {this.renderLessons()}
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

export default connect(mapStateToProps, actions)(Home);
