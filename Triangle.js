class Triangle{
    // construct new triangle object 
    constructor(){
        this.type       = 'triangle';
        this.position   = [0.0,0.0,0.0];
        this.color      = [1.0,1.0,1.0,1.0];
        this.size       = 5.0;
    }

    render(){
        var xy   = this.position;                                       // set xy to the ith point's pos field
        var rgba = this.color;                                          // set rgba to the ith point's color field
        var size = this.size;                                           // set size to the ith point's size field
 
        // gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);            // Pass the position of point to a_Position
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);  // Pass the color of point to u_FragColor
        gl.uniform1f(u_Size, size);                                     // Pass the size of point to u_Size
                                
        var d = this.size/200.0;                                        // side length
        drawTriangle([xy[0], xy[1], xy[0]+d, xy[1], xy[0], xy[1]+d]);   // Draw triangle with selected verts
    }
}

function drawTriangle(vertices) {
    //   var vertices = new Float32Array([
    //     0, 0.5,   -0.5, -0.5,   0.5, -0.5
    //   ]);
    var n = 3; // The number of vertices

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
    
    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function drawTriangle3D(vertices) {
    var n = 3; // The number of vertices

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
    
    // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);

    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
} 