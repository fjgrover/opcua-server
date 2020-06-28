const express = require( 'express' );
const app = express();

// start listener
app.listen( 5000, () => {
    console.log( 'Server started' );
});

app.post('/', (req, res) => {
    console.log( req );
});