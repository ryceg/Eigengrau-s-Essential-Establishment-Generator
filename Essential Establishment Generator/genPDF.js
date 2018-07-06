
setup.genPDF = function() {
  var doc = new jsPDF();

  doc.fromHTML($('#testdiv').get(0), 20, 20,{
          'width': 400 });

  doc.setProperties({
   title: "Eigengrau's Generator Output",
   subject: 'Generator Output',
   author: '/u/rcgy',
   keywords: 'generated, javascript, dnd, dungeons and dragons, eigengrau, generator, random',
   creator: '/u/rcgy'
  });

  doc.save('Test.pdf');
}



// setup.genPDF = function() {
//   html2canvas(document.getElementById("testdiv"), {
//     onrendered: function (canvas) {
//       var img = canvas.toDataURL("image/png");
//       var doc = new jsPDF();
//       doc.addImage(img, 'JPEG', 20, 20);
//       doc.save('Test.pdf');
//     }
//   });
// };
