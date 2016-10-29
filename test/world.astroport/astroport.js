var request = require('request');
var http    = require('http');
var chai = require('chai');
var expect = chai.expect;
var server  = require('../../libs/world.astroport/astroport');

describe('Astroport Testing:', function() {

    var testServer;
    
    beforeEach(function(done) {
        testServer = http.createServer(server).listen(7000, done);
    });

    afterEach(function() {
        testServer.close(); 
    });
   
    it('return html page', function(done) {
        request('http://localhost:7000/astroport', function(error, response, body) {
            expect(body).to.contain( '#astroport-name' );
            done(); 
        });
    });
   
   
});