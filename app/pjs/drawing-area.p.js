var path;

function onMouseDown(event) {
	path = new Path();
	path.strokeColor = '#00000';
	path.add(event.point);
}

function onMouseDrag(event) {
	path.add(event.point);
}
