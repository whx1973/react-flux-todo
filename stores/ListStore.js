import EventEmitter from 'events';
import assign from 'object-assign';

var ListStore = assign({},EventEmitter.prototype,{
	items: [],
	getAll: function () {
		return this.items;
	},
	getTaskCount: function() {
		return this.items.length;
	},
	getActivedTaskCount: function() {
		return this.items.filter((item) => {return item.isDone}).length;
	},
	addNewItemHandler: function(task) {  
		this.items.push(task);   
	},
	removeItemHandler: function(index) {
		this.items.splice(index,1);
	},
	updateItemHandler: function(index) { 
		var item = this.items.slice(index,index+1)[0]; 
		item.isDone= !item.isDone; 
		this.items.splice(index,1,item);  
	},
	updateAllStateHandler: function(state) { 
		this.items.map((item)=>{ 
			item.isDone = state;
		});
	},
	removeActivedItemHandler: function() {
		this.items = this.items.filter((item)=> {
			return !item.isDone
		});
	},
	emitChange: function() { 
		this.emit('change');
	},

	addChangeListener: function(callback) { 
		this.on('change',callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change',callback)
	}

});

export default ListStore;