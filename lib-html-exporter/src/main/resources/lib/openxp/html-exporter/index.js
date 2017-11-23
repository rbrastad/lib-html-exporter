var jsonUtilBean =  __.newBean("openxp.html.exporter.JSONUtil");
var htmlExporterBean =  __.newBean("openxp.html.exporter.HtmlExporter");
var textEncodingLib = require('/lib/text-encoding');

exports.exportToExcel = function( html, filePathName ){
    return __.toNativeObject(  toJson( htmlExporterBean.exportToExcel(html, filePathName) ) );
};

exports.exportToPdf = function( html, filePathName ){
    return __.toNativeObject( toJson(  htmlExporterBean.exportToPdf(html, filePathName) ) );
};

/*
This does not work fix when needed
exports.exportToOds = function( html, filePathName){
    return  __.toNativeObject(  toJson(  htmlExporterBean.exportToOds(html, filePathName) ) );
};
*/

function toJson( fileSource ){
    return JSON.parse(  jsonUtilBean.toJson(fileSource) );
}


exports.getStream = function( fileSource, charsetDecode, encoding ) {
    try{
        var stream = textEncodingLib.base64Decode( fileSource.content );

        if( encoding == undefined ){
            encoding = "UTF-8";
        }

        if(charsetDecode != undefined && charsetDecode === true){
            stream = textEncodingLib.charsetDecode(content, encoding);
        }

        return stream;
    }catch (e){
        log.error(e);
        return e;
    }
};
