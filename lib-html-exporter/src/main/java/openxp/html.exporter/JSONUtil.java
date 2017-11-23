package openxp.html.exporter;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtil {

    private ObjectMapper mapper = new ObjectMapper();

    public String toJson( Object object ) throws  Exception{
        return mapper.writeValueAsString( object );
    }

}
