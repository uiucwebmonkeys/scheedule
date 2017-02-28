import React from 'react';
import Text from './text';
import ClassSectionBox from './classSectionBox';
import HorizontalLine from './horizontalLine';

class ClassResultBox extends React.Component{

render(){
  	return(
  		<div className = "classResults">
  			<Text className = "className">{this.props.name}</Text>
        <HorizontalLine black className="divideNameAndTimes" width="60" margin-top="10" margin-bottom="10"/>
        <ul className = "classList">
    			{
            this.props.sections.map(section => <li className = "classListItem"><ClassSectionBox classSection={section.name} classTime={section.time} selected={section.selected} rejected={section.rejected}/></li>)
          }
        </ul>
  		</div>
  	);
  }
}
export default ClassResultBox;
