import React from 'react';
import FooterNav from './Footer';

class ModuleIcon extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.lesson);
  }

	render() {
		return (
			<div>
			   <span>{this.props.lesson.lessonName}</span>
		 	</div>
		);
	}
}

export default ModuleIcon;
