package openxp.html.exporter;

import java.io.File;
import java.util.Date;

public class HtmlExporterUtil {

    public String getFilePathName( String filePathName ){
        if( "undefined".equals(filePathName) ){
            filePathName = null;
        }

        return filePathName;
    }

    public FileSource getFileSource( byte[] content, String filePathName ){
        FileSource fileSource = new FileSource();

        if(content != null){
            fileSource.setContent( content );
        }else if( filePathName != null ){
            fileSource = getFileSourceByFilePathName( filePathName );
        }

        return fileSource;
    }

    public FileSource getFileSourceByFilePathName( String filePathName ){
        FileSource fileSource = new FileSource();

        File file = new File(filePathName);

        fileSource.setName( file.getName() );
        fileSource.setAbsolutePath(file.getAbsolutePath() );
        fileSource.setLastModified( new Date(file.lastModified()) );

        return fileSource;
    }

}
