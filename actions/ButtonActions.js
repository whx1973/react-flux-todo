import AppDispatcher from '../dispatcher/AppDispatcher';

var ButtonActions= {
	addNewItem: function (task) { 
		AppDispatcher.dispatch({
			actionType: 'ADD_NEW_ITEM',
			taskName: task.name,
			isDone:task.isDone
		})
	},
	removeItem: function(index) {
	  	AppDispatcher.dispatch({
	  		actionType: 'REMOVE_ITEM',
	  		index: index
	  	})
  	},
  	removeActivedItem: function() {
  		AppDispatcher.dispatch({
  			actionType: 'REMOVE_ACTIVED_ITEM',
  		});
  	},
  	updateItem: function(index) {
  		AppDispatcher.dispatch({
  			actionType:'UPDATE_ITEM',
  			index: index
  		})
  	},
  	updateAllState: function(state) {
  		AppDispatcher.dispatch({
  			actionType:'UPDATE_ALL_STATE',
  			state: state
  		})
  	}
}
export default ButtonActions;