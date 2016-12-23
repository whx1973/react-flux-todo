import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component{
	constructor(props) {
	  super(props);  
	}
	 
	render() {
		if(this.props.items.length>0) { 
			var itemsHtml = this.props.items.map(function(item,i) { 
				return (<ListItem key={i} task = {item}  index={i} />)
			});
			return ( 
				<ul className ="todo-main">{itemsHtml}</ul>
			);
		}else{
			return (
				<div className="todo-empty">恭喜您，目前没有待办任务！</div>
			);
		}
		
	}
}
