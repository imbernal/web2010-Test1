//Answer 1
 var people = [ ['jose', 28], ['francis', 20], ['henrietta', 25] ];

 people.push(['John' , 35]);

//Answer 2
var food = [ ['banana', 'lemon', 'strawberry'], ['almond', 'pecan', 'pistachio'], ['carrot', 'potato', 'beet'] ];

console.log(food[2][1]);

//Answer 3

var a = " and I create web applications."
var job = "Web Developer";
var b = "Hello, I am a ";

console.log(b + job + a);

//Answer 4

console.log("FirstLine \n \'SecondLine' \n \ \ \ ThirdLine");


//Answer 5

result = "moocluck";

//Answer 6

13

//Answer 7

6

//Answer 8

60

//Answer 9

66

//Answer 10

class Athlete{
	constructor(name , age , sex , height , weight , marks){
		this.name = name;
		this.age = age;
		this.sex = sex;
		this.height = height;
		this.weight = weight;
		this.marks = marks;
	}
}

//Answer 11

Athlete.prototype.getMarksAverage = function(){
	var result = 0;
	for(var i = 0 ; i < this.marks.length ; i++){
		result+=this.marks[i];
	}

	return result/this.marks.length;
}

var a = new Athlete("as" , 2, "F" , 12 , 12, [1,2,3,4,5]);
console.log(a.getMarksAverage());

//Answer 12

var a = new Athlete("as" , 2, "F" , 12 , 12, [1.2,2.6,3.5,4.2,5.1]);

Athlete.prototype.getRoundedMarks = function(){
	return this.marks.map(function(item){
		return Math.round(item);
	});
}

console.log(a.getRoundedMarks());

//Answer 13

class Point2D{
	constructor(x , y){
		this.x = x;
		this.y = y;
	}
}

// //Answer 14

class Rectangle{
	constructor(Point2D , height , width){
		this.Point2D = Point2D;
		this.height = height;
		this.width = width;
	}


}

//Answer 15

class Rectangle{
	constructor(Point2D , height , width){
		this.Point2D = Point2D;
		this.height = height;
		this.width = width;
	}

	getArea(){
		return this.width * this.height;
	}
}

//Answer 16

function getTotalCoverage(rectArr){

	return rectArr.map(function(item){
		return item.getArea();
	}).reduce(function(prev,curr){
		return prev+curr;
	});

}
