class Point{
    
    // construct new Point object 
    constructor(){
        this.type       = 'point';
        this.position   = [0.0,0.0,0.0];
        this.color      = [1.0,1.0,1.0,1.0];
        this.size       = 5.0;
    }

    render(){
        var xy   = this.position;                                       // set xy to the ith point's pos field
        var rgba = this.color;                                          // set rgba to the ith point's color field
        var size = this.size;                                           // set size to the ith point's size field

        gl.disableVertexAttribArray(a_Position);                        // Quit using the buffer to send the attribute
        gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);               // Pass the position of point to a_Position
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);  // Pass the color of point to u_FragColor
        gl.uniform1f(u_Size, size);                                     // Pass the size of point to u_Size

        gl.drawArrays(gl.POINTS, 0, 1);                                 // Draw
        // drawTriangle([ xy[0], xy[1], xy[0]+.1, xy[1], xy[0], xy[1]+.1 ]);
    }
}