const https = require( 'https' );
const fs = require( 'fs' );

const opt = {
    key: fs.readFileSync( 'key.pem' ),
    cert: fs.readFileSync( 'cert.pem')
};

// start listener
https.createServer( opt, (req, res) => {
    var body = '';

    req.on( 'data', (data) => {
        body += data
    });
    req.on('end', () => {
        console.log( body );
        res.writeHead(200);
    });
}).listen( 443 );