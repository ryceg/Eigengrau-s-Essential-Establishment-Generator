setup.testnames = function() {
  var name = Story.get("Names").text;
  var lastname = JSON.parse(name).human.lastname.random();
  return lastname;
};


testFunc = function() {
  var name = Story.get("Names").text;
  /* var lastname = JSON.parse(name).human.lastname.random(); */
  return name;
};
