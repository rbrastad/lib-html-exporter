var htmlExporter = require('/lib/openxp/html-exporter');
var ioLib = require("/lib/xp/io");

exports.get = function(req, type) {
    var fileSource = null;
    var fileName = "htmlExporterTest";

    if(type == "pdf"){
        fileSource = htmlExporter.exportToPdf( getHtml() );
        fileName += ".pdf";
    }else{
        fileSource = htmlExporter.exportToExcel( getHtml() );
        fileName += ".xlsx";
    }

    fileSource.name = fileName;

	// Stream the file content to the client
	return {
		body:  htmlExporter.getStream(fileSource),
		headers : {
			"Content-Disposition": 'attachment; filename="' + fileSource.name + '"'
		}
	};

};

function getHtml(){
    return ioLib.readText(ioLib.getResource(resolve('html-exporter-test.html')).getStream());
}