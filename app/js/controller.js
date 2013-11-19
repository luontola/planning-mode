
controller = (function () {
	var listeners = [];

	return {
		fireDrawingFinished: function (json) {
			console.log("lineFinished", json);
			_.each(listeners, function (listener) {
				listener.onDrawingFinished(json);
			});
		},
		addListener: function (listener) {
			listeners.push(listener);
		}
	};
})();
