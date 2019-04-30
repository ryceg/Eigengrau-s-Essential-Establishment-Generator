setup.findVarByProp = function (prop, val) {
  return Object.keys(State.variables).find(function (name) {
    return State.variables[name][prop] === val;
  })
}
