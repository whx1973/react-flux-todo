import React from 'react';
import ButtonActions from '../actions/ButtonActions';
import ListStore from '../stores/ListStore';
export default class ListItem extends React.Component {
	constructor(props) {
	  super(props);  
	  this._onClick = this._onClick.bind(this); 
	  this._handlerMouseOver = this._handlerMouseOver.bind(this);
	  this._handlerMouseOut = this._handlerMouseOut.bind(this);
	  this._handlerChange = this._handlerChange.bind(this);
	}
	_onClick() {  
		ButtonActions.removeItem(this.props.index);
	}
	_handlerMouseOver() {
		this.refs['delButton'].style.display='inline-block';
		this.refs['item'].style.background='#eee'; 
	}
	_handlerMouseOut() { 
		this.refs['delButton'].style.display='none'; 
		this.refs['item'].style.background='#fff'; 
	}
	_handlerChange() {
		ButtonActions.updateItem(this.props.index);
	}
	render() {
		let className = this.props.task.isDone ? 'task-done' : ''; 
		return (
			<li ref='item' onMouseOver = {this._handlerMouseOver} onMouseOut = {this._handlerMouseOut}>
				<label>
					<input checked = {this.props.task.isDone} type="checkbox" onChange= {this._handlerChange}/>
					<span className={className} >{this.props.task.name}</span> 
				</label>
				<button ref="delButton" className="btn btn-danger" onClick={this._onClick}>删除</button>

			</li>
		);
	}
}