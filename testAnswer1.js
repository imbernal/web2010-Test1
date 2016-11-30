//Answer 1 - 2/2
 var people = [ ['jose', 28], ['francis', 20], ['henrietta', 25] ];

 people.push(['John' , 35]);


//Answer 2 - 2/2
var food = [ ['banana', 'lemon', 'strawberry'], ['almond', 'pecan', 'pistachio'], ['carrot', 'potato', 'beet'] ];

console.log(food[2][1]);

//Answer 3 - 2/2

var a = " and I create web applications."
var job = "Web Developer";
var b = "Hello, I am a ";

console.log(b + job + a);

//Answer 4 - 2/2

console.log("FirstLine \n \'SecondLine' \n \ \ \ ThirdLine");
// This also works:
console.log("FirstLine \n \'SecondLine' \n \t ThirdLine");


//Answer 5 - 2/2

result = "moocluck";

//Answer 6 - 2/2

13

//Answer 7 - 2/2

6

//Answer 8 - 0/2

60
// Correct answer:
99
// Code from question:
var f = function(){
  return 99;
}
var g = f;
var result = g();
var g = function(){
  return 60;
}

//Answer 9 - 0/2

66
// Correct Answer:
"used sock"
// Code from question:
var result = thisIsWeird();
function thisIsWeird() {
  function secret() {
    return 66;
  }
  var result;
  function secret() {
    return 1;
  }
  // The following line of code assigns a
  // secret function to the variable result.
  result = secret();
  function secret() {
    return "used sock";
  }
  return result;
}
// Note: the functions are hoisted to the top since they are function declarations


//Answer 10 - 2/2

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

//Answer 11 - 2/2

Athlete.prototype.getMarksAverage = function(){
	var result = 0;
	for(var i = 0 ; i < this.marks.length ; i++){
		result+=this.marks[i];
	}

	return result/this.marks.length;
}

var a = new Athlete("as" , 2, "F" , 12 , 12, [1,2,3,4,5]);
console.log(a.getMarksAverage());

//Answer 12 - 2/2

var a = new Athlete("as" , 2, "F" , 12 , 12, [1.2,2.6,3.5,4.2,5.1]);

Athlete.prototype.getRoundedMarks = function(){
	return this.marks.map(function(item){
		return Math.round(item);
	});
}

console.log(a.getRoundedMarks());

//Answer 13 - 2/2

class Point2D{
	constructor(x , y){
		this.x = x;
		this.y = y;
	}
}

// //Answer 14 - 2/2

class Rectangle{
	constructor(Point2D , height , width){
		this.Point2D = Point2D;
		this.height = height;
		this.width = width;
	}
}

//Answer 15 - 2/2

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

//Answer 16 - 2/2

function getTotalCoverage(rectArr){

	return rectArr.map(function(item){
		return item.getArea();
	}).reduce(function(prev,curr){
		return prev+curr;
	});

}
