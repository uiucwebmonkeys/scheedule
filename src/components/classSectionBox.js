import React from 'react';
import Text from './text';

class ClassSectionBox extends React.Component{
constructor(props){
	super(props);
}

render(){
  	return(
  		<div className={"class"+(this.props.selected ? "Green" : "")}>
  			<Text className="classSectionName">{this.props.classSection}</Text>
        <Text className="classTime">{this.props.classTime}</Text>
  		</div>
  	);
  }
}
export default ClassSectionBox;
