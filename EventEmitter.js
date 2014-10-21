function EventEmitter () {

	var listeners = [];

	this.addEventListener = function (name, fn) {
		listeners.push({name: name, fn: fn});
	};

	this.removeEventListener = function (name, fn) {
		for ( var i = 0, l = listeners.length; i < l; i++) {
			if (listeners[i].name == name && listeners[i].fn == fn) return listeners.splice(i, 1);
		}
	};

	this.dispatchEvent = function () {

		var name = arguments[0];
		var args = [];

		for ( var i = 1, l = arguments.length; i < l; i++) {
			args[i-1] = arguments[i];
		} 

		for ( var i = 0, l = listeners.length; i < l; i++) {
			if (listeners[i].name == name) listeners[i].fn.apply(this, args);
		}
	};
}