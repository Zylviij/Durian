const http = require( 'http' );
const fs = require( 'fs' );

function main () {
    const hostname = 'localhost';
    const port = 3000;

    const server = http.createServer( ( request, response ) => {
        if ( isStaticURL( request.url ) ) {
            let fileLocation = getStaticURLExtension( request.url );
            let extensionName = getFileExtensionName( getFileExtension( fileLocation ) );
            let contents = fs.readFileSync( './static' + fileLocation );

            if ( contents && extensionName ) {
                response.statusCode = 200;
                response.setHeader( 'Content-Type', extensionName );
                response.write( contents );
                response.end();
            }      
        }
        else if ( request.url === '/' ) {
            response.statusCode = 200;
            response.setHeader( 'Content-Type', 'text/html' );

            const static_page = fs.readFileSync( './index.html' );


            response.write( static_page )
            response.end();
        } else {
            throw new Error( 'URL not found' );
        }
    });

    server.listen( port, hostname, () => { } );
}


let getFileExtension = ( fileName ) => {

    let position = -1;

    for ( let i = fileName.length - 1; i >= 0; i-- ) {
        if ( fileName.charAt( i ) === '.' ) {
            position = i;
            break;
        }
    }
    
    if ( position == -1 ) return new Error( 'unknown file type' );

    let extension = fileName.substring( position );

    return extension;
    
}

let getFileExtensionName = ( extension ) => {
    var validExtensions = {
        ".html" : "text/html",          
        ".js": "application/javascript", 
        ".css": "text/css",
        ".txt": "text/plain",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".png": "image/png"
    };

    extensionName = validExtensions[ extension ]

    if ( extensionName ) return extensionName;
    else return new Error( 'invalid extension name' )
}

let staticURLPrefix = '/static';

let isStaticURL = ( url ) => {
    return url.startsWith( staticURLPrefix );
}

let getStaticURLExtension = ( url ) => {
    if ( isStaticURL( url ) ) {
        return url.substring( staticURLPrefix.length );
    } else {
        return new Error( 'URL not static.' );
    }
} 




main();