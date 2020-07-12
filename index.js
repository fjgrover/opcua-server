const https = require( 'https' );
const fs = require( 'fs' );

const opt = {
    key: fs.readFileSync( 'key.pem' ),
    cert: fs.readFileSync( 'cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
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
}).listen( 5000, '192.168.1.5' );