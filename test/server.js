/**
 * @description jest server
 * @author myadmin
 */

const request = require('supertest');
const server = require('../src/app').callback();

module.exports = request(server);
