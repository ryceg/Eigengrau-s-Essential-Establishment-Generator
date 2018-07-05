function genPDF() {
  var doc = new jsPDF();

  doc.fromHTML($('#testdiv').get(0), 20, 20,{
          'width': 500 });

  doc.save('Test.pdf');


}
