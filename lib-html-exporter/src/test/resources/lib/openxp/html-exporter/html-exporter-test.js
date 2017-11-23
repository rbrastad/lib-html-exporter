var assert = require("/lib/xp/assert");
var ioLib = require("/lib/xp/io");
var textEncodingLib = require("/lib/text-encoding");

var htmlExporterLib = require("/lib/openxp/html-exporter");

var fileXlsx = "build/tmp/html-exporter-test.xlsx";
var filePdf = "build/tmp/html-exporter-test.pdf";
var fileOds = "build/tmp/html-exporter-test.ods";


exports.test = function() {
   htmlToExcelTest();
   htmlToExcelFileTest();
   htmlToPDFTest();
   htmlToPDFFileTest();

  // htmlToODSTest();
  // htmlToODSFileTest();
};

function htmlToExcelTest() {
    var res =  htmlExporterLib.exportToExcel( getHtml());
    // assert.assertEquals( true, deleted );
}


function htmlToExcelFileTest() {
    var res =  htmlExporterLib.exportToExcel( getHtml(), fileXlsx );
    // assert.assertEquals( true, deleted );
}


function htmlToPDFTest() {
    var res =  htmlExporterLib.exportToPdf( getHtml());
    // assert.assertEquals( true, deleted );
}


function htmlToPDFFileTest() {
    var res =  htmlExporterLib.exportToPdf( getHtml(), filePdf );
    // assert.assertEquals( true, deleted );
}


function htmlToODSTest() {
    var res =  htmlExporterLib.exportToOds( getHtml());
    // assert.assertEquals( true, deleted );
}


function htmlToODSFileTest() {
    var res =  htmlExporterLib.exportToOds( getHtml(), fileOds );
   //  assert.assertEquals( true, deleted );
}



function getHtml(){
    return ioLib.readText(ioLib.getResource(resolve('html-exporter-test.html')).getStream());
}