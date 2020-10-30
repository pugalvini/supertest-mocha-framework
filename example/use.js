
// Create a confuguration object containing BaseUrl of your apis endpoints or application
var config = {
    "baseUrl": "https://reqres.in",
    "debug": false
}

var expect = require('chai').expect;
var supermocha = require('../index')
var test = new supermocha(config)

describe('Test Suite...', function () {
    this.timeout(50000)

    // Example Test Case 01: POST request
    it('\n1. Create a Test User', function (done) {
        test({
            uri: '/api/users',
            method: 'post',
            json: {
                "name": "Test User",
                "job": "Quality Check"
            }
        }, function (err, res) {
            expect(res.body).to.have.property('name', 'Test User')
            expect(res.body).to.have.property('job', 'Quality Check')
            done();
        })
    });

    // Example Test Case 02: GET request
    it('\n2. Get the list of Test Users', function (done) {
        test({
            uri: '/api/users',
        }, function (err, res) {
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('page');
            // Add required assertion here
            done();
        })
    });

});