setup.closestMatch = function (Arr, readout, Prop1, Prop2, Val1, Val2) {
  var range1, range2, scale1 = 1, scale2 = 1
    // Find highest and lowest values for each property in the array.
  var min1 = Arr[0][Prop1], min2 = Arr[0][Prop2], max1 = Arr[0][Prop1], max2 = Arr[0][Prop2]
  for (var i = 1; i < Arr.length; i++) {
    if (min1 > Arr[0][Prop1]) min1 = Arr[0][Prop1]
    if (min2 > Arr[0][Prop2]) min2 = Arr[0][Prop2]
    if (max1 < Arr[0][Prop1]) max1 = Arr[0][Prop1]
    if (max2 < Arr[0][Prop2]) max2 = Arr[0][Prop2]
  }
  range1 = max1 - min1
  range2 = max2 - min2
    // Scale the values so that both ranges have equal weight when determining the "distance" to Val1 and Val2.
  if (range1 > range2) {
    scale2 = range1 / range2
  } else if (range1 < range2) {
    scale1 = range2 / range1
  }
    // Find the shortest "distance" from any item in the array to Val1 and Val2.
    // If multiple items in the array are of the same minimum distance, choose the last one.
  var curdist, closest = 0, dist = (Math.abs(Arr[0][Prop1] - Val1) * scale1) + (Math.abs(Arr[0][Prop2] - Val2) * scale2)
  for (i = 1; i < Arr.length; i++) {
    curdist = (Math.abs(Arr[i][Prop1] - Val1) * scale1) + (Math.abs(Arr[i][Prop2] - Val2) * scale2)
    if (curdist <= dist) {
      dist = curdist
      closest = i
    }
  }
  return Arr[closest][readout]
}
