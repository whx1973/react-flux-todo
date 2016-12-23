import React from 'react';
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import ButtonActions from '../actions/ButtonActions';
import ListStore from '../stores/ListStore';
import List from './List';


export default class Main extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	items: ListStore.getAll(), 
	  	taskCount:ListStore.getTaskCount(),
	  	taskActivedCount:ListStore.getActivedTaskCount(),
	  	isAllChecked:false
	  };  
	  this._onChange = this._onChange.bind(this); 
	  this._setAllTaskState = this._setAllTaskState.bind(this);
	}
	componentWillMount() {
		// console.log('main will');
		ListStore.addChangeListener(this._onChange);
	}
	// componentDidMount() { 
	// 	console.log('main did');  
	// }
	componentWillUnmount() {
		ListStore.removeChangeListener(this._onChange);
	}
	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('main update')
	// }
	// componentDidUpdate(prevProps, prevState) {
	// 	console.log('main did update')
	// }
	_onChange() {   
		var list = ListStore.getAll();
		var checkedItems = list.filter((item)=>{return item.isDone});
		this.setState({
			items: list,
			taskCount:ListStore.getTaskCount(),
	  		taskActivedCount:ListStore.getActivedTaskCount(),
	  		isAllChecked:checkedItems.length==list.length?true:false
		});  
	}
	_createNewItem(task) { 
		ButtonActions.addNewItem(task);  
	}
	_setAllTaskState(isAllChecked) {
		ButtonActions.updateAllState(isAllChecked);
	}
	 
	render(){
		return (
			<div className="todo-wrap">
				<header>
					<h1 className="todo-title">
						React-Todos
					</h1>
				</header>
				<TodoHeader onClick = {this._createNewItem} />
				<List items = { this.state.items }  /> 
				<TodoFooter isAllChecked = {this.state.isAllChecked} setAllTaskState = {this._setAllTaskState}  taskCount = {this.state.taskCount}  taskActivedCount = {this.state.taskActivedCount} />
			</div>
		);
	}

}