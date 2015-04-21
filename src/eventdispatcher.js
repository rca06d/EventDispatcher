// This is a way to emulate the native dom event api on any js object
function EventDispatcher ()
{
	var listeners = [];

	this.addEventListener = function (type, fn)
	{
		listeners.push({type: type, fn: fn});
	};

	this.removeEventListener = function (type, fn)
	{
		for ( var i = 0, l = listeners.length; i < l; i++)
		{
			if (listeners[i].type == type && listeners[i].fn == fn) return listeners.splice(i, 1);
		}
	};

	this.dispatchEvent = function (e)
	{
		for ( var i = 0, l = listeners.length; i < l; i++)
		{
			if (listeners[i].type == e.type) listeners[i].fn(e);
		}
	};
}