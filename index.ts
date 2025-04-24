const colors = ['#43c8bf', '#896bc8', '#e54f6b'];
let defaultColor = colors[0];
const canvas = new fabric.Canvas('canvas', { width: window.innerWidth, height: window.innerHeight });
let strokeWidth = 2;
let strokeColor = defaultColor;

const o1 = new fabric.Circle({
    radius: 30,
    strokeWidth: strokeWidth,
    stroke: strokeColor,
    fill: 'transparent',
    left: 100,
    top: 100
});

const o2 = new fabric.Circle({
    radius: 30,
    strokeWidth: strokeWidth,
    stroke: strokeColor,
    fill: 'transparent',
    left: 150,
    top: 100,
});

const g = new fabric.Group([o1, o2])
g.controls = {
    ...fabric.Group.prototype.controls,
    mtr: new fabric.Control({visible: false})
}
canvas.on('mouse:wheel', function(opt) {
    var delta = opt.e.deltaY;
    var zoom = canvas.getZoom();
    zoom *= 0.999 ** delta;
    if (zoom > 20) zoom = 20;
    if (zoom < 0.01) zoom = 0.01;
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  })

canvas.add(g)