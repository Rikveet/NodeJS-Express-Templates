const jwt = require('jsonwebtoken');
class JWT_Handler {


    generate(payload, claims = {}) {
        return jwt.sign(payload, process.env.JWT_SECRET, claims);
    }

    process(req, res, next) {
        const authHeader = req.headers['authorization']; // get the auth header from the request
        const token = authHeader && authHeader.split(' ')[1]; // take the token from the request

        if (token == null) { // invalid request if no token provided
            return res.sendStatus(401);
        }
        jwt.verify(token, process.env.JWT_SECRET, (error, payload) => { // verify the validity of the token using secret key
            if (error) {
                return res.sendStatus(403); // invalid token
            }
            req.payload = payload; // add parsed payload attribute
            next(); // next function.
        });
    }

}

module.exports = new JWT_Handler();
