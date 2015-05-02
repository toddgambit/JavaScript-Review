//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

function Animal(species,name,legs,color,food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

function person(name,age,height,gender){
  return {name:name,age:age,height:height,gender:gender}
}


//Create a animal array and a person array.

var animals = [];
var peoples = [];


//Create two instances of Animal and push those into your animal array

animals.push(new Animal("Siberian tiger","Jamal","strong enough","mostly white",["people","grubs","jackals","vodka","cupcakes"]));
animals.push(new Animal("Great plains giraffe","Harvington","length","yellowish",["plant byproducts","deep concern","problem children","scabs","applesauce"]));


//Create two instances of person and push those into your person array.

peoples.push(person("Baconian",15,"5'3","Male"));
peoples.push(person("Jeninya",43,"6'4","Female"));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function(){
  var jeb = Math.floor(Math.random() * this.food.length);
  alert(this.name + " ate " + this.food[jeb]);
}


//At this point, if we wanted to add something to every istance of person could we? 

//No, because you would have to redefine the person function. Well, I guess technically they have the Object prototype, so you could add something to every Object.
//But that would be overkill and dumb.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    It sets the prototype of the object you create to be that constructor function object.
  2) What's a good way to describe the keyword 'this'
    'this' is like a pronoun that references the object that is calling the function it's in.
  3) Can a normal function which creates an object and then returns that object use the prototype?
    Yeah, but that object will just have the Object prototype, that function will not be its prototype.
  4) What happens if you forget to use 'new' when calling a constructor?
    I don't know, it doesn't work
*/