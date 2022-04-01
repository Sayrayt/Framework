Figure.prototype.sphere = (R = 10, count = 30,) => {
    const points = [];
    const edges = [];
    const polygons = [];

    //Points
    const deltaT = Math.PI / count;
    const deltaF = 2 * Math.PI / count;
    for (let i = 0; i <= Math.PI; i += deltaT) {
        for (let j = 0; j < 2 * Math.PI; j += deltaF) {
            points.push(new Point(
                R * Math.sin(i) * Math.sin(j),
                R * Math.cos(i),
                R * Math.sin(i) * Math.cos(j)
            ));
        }

    }

    //Edges
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1]) {
            if ((i + 1) % count === 0) {
                edges.push(new Edge(i, i + 1 - count));
            } else {
                edges.push(new Edge(i, i + 1));
            }
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));
        }
    }

    //Polygons
    for (let i = 0; i < points.length; i++) {
        if (points[i + count + 1]) {
            if ((i + 1) % count === 0) {
                polygons.push(new Polygon([i, i - count + 1, i + 1, i + count]));
            }
            else {
                polygons.push(new Polygon([i, i + 1, i + count + 1, i + count]));
            }
        }
    }
    polygons.push(new Polygon([points.length - 1, points.length - count - 1, points.length - 2 * count, points.length - count]));

    //Зарегаться на гитхабе и залить код на него

    return new Subject(points, edges, polygons, 'sphere');

}