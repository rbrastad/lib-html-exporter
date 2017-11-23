package openxp.html.exporter;

import java.io.File;

import uk.co.certait.htmlexporter.pdf.PdfExporter;
import uk.co.certait.htmlexporter.writer.excel.ExcelExporter;
import uk.co.certait.htmlexporter.writer.ods.OdsExporter;

public class HtmlExporter extends HtmlExporterUtil{

    public FileSource exportToPdf( String html, String filePathName ){
        FileSource fileSource = new FileSource();
        filePathName = getFilePathName( filePathName );
        try {
            PdfExporter exporter = new PdfExporter();
            if(filePathName != null){
                File file = new File( filePathName );
                exporter.exportHtml( html, file ) ;

                fileSource = getFileSourceByFilePathName( filePathName );
            }else{
                fileSource.setContent( exporter.exportHtml(html) );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return fileSource;
    }

    public FileSource exportToExcel( String html, String filePathName ){
        FileSource fileSource = new FileSource();
        filePathName = getFilePathName( filePathName );
        try {
            ExcelExporter exporter = new ExcelExporter();
            if(filePathName != null){
                File file = new File( filePathName );
                exporter.exportHtml( html, file) ;

                fileSource = getFileSourceByFilePathName( filePathName );
            }else{
                fileSource.setContent( exporter.exportHtml(html) );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return fileSource;
    }


    public FileSource exportToOds( String html, String filePathName ){
        FileSource fileSource = new FileSource();
        filePathName = getFilePathName( filePathName );

        try {
            OdsExporter exporter = new OdsExporter();
            if(filePathName != null){
                File file = new File( filePathName );
                exporter.exportHtml( html, file ) ;

                fileSource = getFileSourceByFilePathName( filePathName );
            }else{
                fileSource.setContent( exporter.exportHtml(html) );
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return fileSource;
    }

}
