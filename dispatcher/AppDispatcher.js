import Dispatcher from 'flux';
import ListStore from '../stores/ListStore'; 
var AppDispatcher = new Dispatcher.Dispatcher();   
AppDispatcher.register(function (action) { 
	switch(action.actionType) {
		case 'ADD_NEW_ITEM':  
			ListStore.addNewItemHandler({name:action.taskName,isDone:action.isDone});
			ListStore.emitChange();
			break;
		case 'REMOVE_ITEM':
			ListStore.removeItemHandler(action.index);
			ListStore.emitChange();
			break;
		case 'UPDATE_ITEM':
			ListStore.updateItemHandler(action.index);
			ListStore.emitChange();
			break;
		case 'UPDATE_ALL_STATE':
			ListStore.updateAllStateHandler(action.state);
			ListStore.emitChange();
			break;
		case 'REMOVE_ACTIVED_ITEM':
			ListStore.removeActivedItemHandler();
			ListStore.emitChange();
			break;
		default: 
	}
});
export default AppDispatcher; 