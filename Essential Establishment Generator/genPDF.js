// setup.genPDF = function() {
// function genPDF() {
//   var doc = new jsPDF();
//
//   doc.fromHTML($('#testdiv').get(0), 20, 20,{
//           'width': 500 });
//
//   doc.save('Test.pdf');
// }

  // html2canvas(document.body, {
  //   onrendered: function (canvas) {
  //     var img = canvas.toDataURL("image/png");
  //     var doc = new jsPDF();
  //     doc.addImage(img, 'JPEG', 20, 20);
  //     doc.save('Test.pdf');
  //   }
  // })

  var doc = new jsPDF()

  doc.text('Hello world!', 10, 10)
  doc.save('a4.pdf')
