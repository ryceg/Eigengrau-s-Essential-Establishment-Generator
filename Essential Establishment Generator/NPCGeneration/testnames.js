setup.testnames = function() {
var name = JSON.parse(Story.get("Names").text);
return name.human.lastname.random();
};
