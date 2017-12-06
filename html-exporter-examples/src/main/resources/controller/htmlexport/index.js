var htmlExporter = require('/lib/openxp/html-exporter');
var ioLib = require('/lib/xp/io');

exports.get = function(req, type) {
	var fileSource = null;

	if (type == 'pdf') {
		fileSource = htmlToPDF();
	} else {
		fileSource = htmlToExcel();
	}

	// Stream the file content to the client
	return {
		body: htmlExporter.getStream(fileSource),
		headers: {
			'Content-Disposition': 'attachment; filename="' + fileSource.name + '"'
		}
	};
};

function htmlToExcel() {
	var fileSource = htmlExporter.exportToExcel(getHtml());
	fileSource.name = 'htmlExporterTest.xlsx';

	return fileSource;
}

function htmlToPDF() {
	var fileSource = htmlExporter.exportToPdf(getHtml());
	fileSource.name = 'htmlExporterTest.pdf';

	return fileSource;
}

function getHtml() {
	return ioLib.readText(ioLib.getResource(resolve('html-exporter-test.html')).getStream());
}
