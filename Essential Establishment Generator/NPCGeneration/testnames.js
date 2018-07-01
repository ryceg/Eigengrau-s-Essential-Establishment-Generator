setup.testnames = function() {
var name = JSON.parse(Story.get("Names").json);
return name.human.lastname.random();
};
