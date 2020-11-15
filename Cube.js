class Cube{
    // construct new triangle object 
    constructor(){
        this.type   = 'cube';
        this.color  = [1.0,1.0,1.0,1.0];
        this.matrix = new Matrix4();
    }


    render(){
        var rgba = this.color;                                           // set rgba to the ith point's color field
        
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);   // Pass the color of point to u_FragColor
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements); // Pass the matrix to u_ModelMatrix attribute
        
        // Front of cube
        drawTriangle3D([0,0,0,  1,1,0,  1,0,0]);
        drawTriangle3D([0,0,0,  0,1,0,  1,1,0]);

        // Top of cube
        gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);
        drawTriangle3D([0,1,0,  0,1,1,  1,1,1]);
        drawTriangle3D([0,1,0,  1,1,1,  1,1,0]);

        // Bottom of cube
        gl.uniform4f(u_FragColor, rgba[0]*.9, rgba[1]*.9, rgba[2]*.9, rgba[3]);
        drawTriangle3D([0,0,0,  1,0,1,  0,0,1]);
        drawTriangle3D([0,0,0,  1,0,0,  1,0,1]);

        // Left side of cube
        gl.uniform4f(u_FragColor, rgba[0]*.8, rgba[1]*.8, rgba[2]*.8, rgba[3]);
        drawTriangle3D([1,0,0,  1,1,1,  1,1,0]);
        drawTriangle3D([1,0,0,  1,0,1,  1,1,1]);

        // Right side of cube
        gl.uniform4f(u_FragColor, rgba[0]*.8, rgba[1]*.8, rgba[2]*.8, rgba[3]);
        drawTriangle3D([0,0,0,  0,1,1,  0,1,0]);
        drawTriangle3D([0,0,0,  0,0,1,  0,1,1]);

        // Back of cube
        gl.uniform4f(u_FragColor, rgba[0]*.7, rgba[1]*.7, rgba[2]*.7, rgba[3]);
        drawTriangle3D([0,0,1,  1,1,1,  0,1,1]);
        drawTriangle3D([0,0,1,  1,0,1,  1,1,1]);
    }
}