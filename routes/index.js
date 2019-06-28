const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    // Read variables sent via POST from our SDK
    const {sessionId, serviceCode, phoneNumber, text} = req.body;

    console.log('####################', req.body);

    let response = "";

    if (text === "") {
        console.log(text);

        // This is the first request
        response = 'CON What would you like to check?' +
            '\n1. My Account' +
            '\n2. My phone number';
    } else if (text === "1") {
        // Business logic for first level response
        response = 'CON Choose account information you want to view' +
            '\n1. Account number' +
            '\n2. Account balance'
    } else if (text === "2") {
        // Business logic for first level response. This is a terminal request
        response = "END Your phone number is " + phoneNumber
    } else if (text === "1*1") {
        // This is a second level response where the user selected 1 in the first instance
        const accountNumber = "ACC100101";

        // This is a terminal request
        response = "END Your account number is " + accountNumber
    } else if (text === "1 * 2") {
        // This is a second level response where the user selected 1 in the first instance
        const balance = "KES 10,000";

        // This is a terminal request
        response = "END Your balance is " + balance
    }

    // Print the response onto the page so that our SDK can read it
    res.set("Content-Type: text/plain");
    res.send(response);

    // res.render('index', {title: 'Express'});
});

module.exports = router;
