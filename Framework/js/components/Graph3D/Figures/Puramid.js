Figure.prototype.puramid = (count = 6) => {
    const points = [new Point(0, 10, 0)];
    const edges = [];
    const facePolygons = [];
    const polygons = [];

    //points
    const y = -10;
    const delta = (2 * Math.PI) / count;
    for (let i = 0; i < 2 * Math.PI; i += delta) {
        points.push(new Point(
            Math.cos(i) * 10,
            y,
            Math.sin(i) * 10
        ));
    }

    //edges
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            edges.push(new Edge(0, i + 1))
            edges.push(new Edge(i, i + 1))
        }
    }

    //polygons
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            polygons.push(new Polygon([0, i, i + 1]));
        }
    }
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            facePolygons.push(i, i + 1);
        }
    }
    polygons.push(new Polygon(facePolygons));


    return new Subject(points, edges, polygons, 'puramid');
}