setup.testnames = function() {
var name = Story.get("Names").text;
var lastname = name.human.lastname.random();
return lastname;
};
