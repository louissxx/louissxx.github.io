function cube(x) {
    return x * x * x;
};

const foo = Math.PI + Math.SQRT2;

var graph = {
    // Declaring a property (key, value pair) with a function.
    draw: function () {
      console.log("From graph draw function");
    },
};


export { cube, foo, graph };