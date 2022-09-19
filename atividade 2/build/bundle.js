var Plane = /** @class */ (function () {
    function Plane() {
    }
    return Plane;
}());
var plane = new Plane;
plane.weight = 800;
plane.model = 'Sikorsky Ilya Muromets';
plane.year = 1913;
plane.velocity = 110;
console.log("Model: ".concat(plane.model));
console.log("Year: ".concat(plane.year));
console.log("Velocity: ".concat(plane.velocity));
console.log("Weight: ".concat(plane.weight));
