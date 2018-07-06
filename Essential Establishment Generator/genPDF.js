
setup.genPDF = function() {
  var doc = new jsPDF();
  doc.fromHTML($('#testdiv').get(0), 20, 20,{
  // doc.fromHTML($(document.getElementsByTagName("BODY")).get(0), 20, 20,{
          'width': 300 });


  doc.setProperties({
   title: "Eigengrau's Generator Output",
   subject: 'Generator Output',
   author: '/u/rcgy',
   keywords: 'generated, javascript, dnd, dungeons and dragons, eigengrau, generator, random',
   creator: '/u/rcgy'
  });

  doc.save('Test.pdf');
};
