import React from 'react';
import Text from './text';
import ClassSectionBox from './classSectionBox';

class ClassResultBox extends React.Component{

render(){
  	return(
  		<div className = "classResults">
  			<Text className = "className">{this.props.name}</Text>
        <br />
        <ul>
    			{
            this.props.sections.map(section => <li><ClassSectionBox classSection={section.name} classTime={section.time} selected={section.selected}/></li>)
          }
        </ul>
  		</div>
  	);
  }
}
export default ClassResultBox;
