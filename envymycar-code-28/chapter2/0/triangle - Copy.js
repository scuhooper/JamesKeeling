function Triangle() {//line 1,listing 2.10

	this.name = "Triangle";

	this.vertices = new Float32Array([0,0,0.5,0.5,0,0,-0.5,0,0,
	-0.5,0,0,-0.5,0,-0.5,0,0,0,
	0.5,0,0,0.5,0,-0.5,0,0,0,
	-0.5,0,-0.5,0.5,0,-0.5,-0.5,0,-1,
	0.5,0,-0.5,0.5,0,-1,-0.5,0,-1]);

	this.triangleIndices = new Uint16Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);

	this.numVertices  = 15;

	this.numTriangles = 5;
	
};//line 7
