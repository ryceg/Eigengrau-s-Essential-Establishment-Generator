setup.testnames = function() {
var name = JSON.parse(Story.get("Names").json);
var lastname = name.human.lastname.random();
return lastname;
};
