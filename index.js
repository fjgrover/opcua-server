const express = require( 'express' );
const app = express();
const router = express().router();

// start listener
app.listen( 5000, () => {
    console.log( 'Server started' );
});

router.post('/', (req, res) => {
    console.log( req );
});