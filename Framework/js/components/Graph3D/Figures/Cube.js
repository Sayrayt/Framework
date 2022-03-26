Figure.prototype.cube = () => {
    //points
    const points = [
        new Point(-10, -10, 10), //0
        new Point(10, -10, 10), //1
        new Point(10, -10, -10), //5
        new Point(-10, -10, -10), //4
        new Point(-10, 10, 10), //3
        new Point(10, 10, 10), //2
        new Point(10, 10, -10), //6
        new Point(-10, 10, -10), //7

    ];
    //edges
    const edges = [
        new Edge(0, 1),
        new Edge(1, 2),
        new Edge(2, 3),
        new Edge(3, 0),
        new Edge(0, 4),
        new Edge(4, 5),
        new Edge(5, 6),
        new Edge(6, 7),
        new Edge(7, 4),
        new Edge(7, 3),
        new Edge(6, 2),
        new Edge(5, 1)
    ];
    //polygons
    const polygons = [
        new Polygon([0, 1, 2, 3]), new Polygon([0, 1, 5, 4]),
        new Polygon([0, 3, 7, 4]), new Polygon([1, 2, 6, 5]),
        new Polygon([2, 3, 7, 6]), new Polygon([7, 6, 5, 4])
    ]

    return new Subject(points, edges, polygons, 'cube');
}