import React from 'react';
import ButtonActions from '../actions/ButtonActions';
import ListStore from '../stores/ListStore';


export default class TodoFooter extends React.Component {
	constructor(props) {
	  super(props); 
	  this._checkedHandler = this._checkedHandler.bind(this);
	  this._clickHandler = this._clickHandler.bind(this);
	}
	_checkedHandler() { 
		this.props.setAllTaskState(this.refs['checkAll'].checked);
	}
	_clickHandler() { 
		ButtonActions.removeActivedItem();
	} 
	render() {
		return (
			<div className="todo-footer"> 
				<label>
					<input checked = { this.props.isAllChecked } ref="checkAll" type="checkbox" onClick = { this._checkedHandler } /> 全选 
				</label>
				<span>
					<span className="text-success">已完成{this.props.taskActivedCount}</span> / 全部{this.props.taskCount}
				</span>
				<button className = "btn btn-danger" onClick = { this._clickHandler }>清除已完成任务</button>
			</div>
		);
	}

}