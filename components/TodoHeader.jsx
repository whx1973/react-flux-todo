import React from 'react';

export default class TodoHeader extends React.Component {

	constructor(props) {
	  super(props);
	  this._clickHandler = this._clickHandler.bind(this); 
	  
	} 
	_clickHandler() {
		var taskName = this.refs['txt'].value; 
		if(taskName){
			this.props.onClick({name:taskName,isDone:false});  
			this.refs['txt'].value='';
		}else{
			alert('请输入!');
		} 
	}

	render() {
		return (
			<div className="todo-header">
				 
				<input ref='txt' type="text" placeholder="请输入你的任务名称" />
				<button className="btn btn-danger" onClick={this._clickHandler}>add</button>
			</div>
		);
	}
}