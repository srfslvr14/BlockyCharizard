class Circle{
    // construct new triangle object 
    constructor(){
        this.type       = 'circle';
        this.position   = [0.0,0.0,0.0];
        this.color      = [1.0,1.0,1.0,1.0];
        this.size       = 5.0;
        this.sides      = 3.0;
    }

    render(){
        var xy   = this.position;                                       // set xy to the ith point's pos field
        var rgba = this.color;                                          // set rgba to the ith point's color field
        var size = this.size;                                           // set size to the ith point's size field
 
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);  // Pass the color of point to u_FragColor
                                
        var d = this.size/200.0;                                        // side/diameter length
        var r = d;                                                    // radius length

        let angleStep = 360/this.sides;
        for (var angle = 0; angle <= 360; angle = angle + angleStep){
            let centerPt = [xy[0], xy[1]];
            let a1 = angle;
            let a2 = angle + angleStep;
            let vec1 = [Math.cos(a1*Math.PI/180)*r, 
                        Math.sin(a1*Math.PI/180)*r]; 
            let vec2 = [Math.cos(a2*Math.PI/180)*r,
                        Math.sin(a2*Math.PI/180)*r];
            let p1 = [centerPt[0]+vec1[0], centerPt[1]+vec1[1]];
            let p2 = [centerPt[0]+vec2[0], centerPt[1]+vec2[1]];
            drawTriangle([xy[0], xy[1], p1[0], p1[1], p2[0], p2[1]]);
        }

        // let vertices = [];
        // let tp = this.sides;
        // for (var i = 0; i <= tp; i++){
        //     let angle = 2 * Math.PI * i / tp;
        //     let x     = xy[0] + r * Math.cos(angle);
        //     let y     = xy[1] + r * Math.sin(angle);
        //     vertices.push(x, y);
        // }

        // drawCircle(tp, vertices);     
    }
}