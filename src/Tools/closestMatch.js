setup.closestMatch = function (array, readout, prop1, prop2, val1, val2) {
  // an approximation of two dimensional arrays, that needs a rework.
  let scale1 = 1; let scale2 = 1
  // Find highest and lowest values for each property in the array.
  let min1 = array[0][prop1]; let min2 = array[0][prop2]; let max1 = array[0][prop1]; let max2 = array[0][prop2]
  for (let i = 1; i < array.length; i++) {
    if (min1 > array[0][prop1]) min1 = array[0][prop1]
    if (min2 > array[0][prop2]) min2 = array[0][prop2]
    if (max1 < array[0][prop1]) max1 = array[0][prop1]
    if (max2 < array[0][prop2]) max2 = array[0][prop2]
  }
  const range1 = max1 - min1
  const range2 = max2 - min2
  // Scale the values so that both ranges have equal weight when determining the "distance" to val1 and val2.
  if (range1 > range2) {
    scale2 = range1 / range2
  } else if (range1 < range2) {
    scale1 = range2 / range1
  }
  // Find the shortest "distance" from any item in the array to val1 and val2.
  // If multiple items in the array are of the same minimum distance, choose the last one.
  let curdist
  let closest = 0
  let dist = (Math.abs(array[0][prop1] - val1) * scale1) + (Math.abs(array[0][prop2] - val2) * scale2)
  for (let i = 1; i < array.length; i++) {
    curdist = (Math.abs(array[i][prop1] - val1) * scale1) + (Math.abs(array[i][prop2] - val2) * scale2)
    if (curdist <= dist) {
      dist = curdist
      closest = i
    }
  }
  // console.log( array[closest][readout])
  return array[closest][readout]
}
