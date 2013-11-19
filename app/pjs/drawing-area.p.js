var pathBeingDrawn;

controller.addListener({
	onDrawingFinished: function (json) {
		new Path().importJSON(json);
	}
});

function onMouseDown(event) {
	pathBeingDrawn = new Path();
	pathBeingDrawn.strokeColor = '#00000';
	pathBeingDrawn.add(event.point);
}

function onMouseDrag(event) {
	pathBeingDrawn.add(event.point);
}

function onMouseUp(event) {
	pathBeingDrawn.simplify();
	var json = pathBeingDrawn.exportJSON();
	controller.fireDrawingFinished(json);
	pathBeingDrawn.remove();
	pathBeingDrawn = null;
}
