global.expect = require('chai').expect;
global.chai = require('chai');
global.sinon = require('sinon');

var sinonChai = require('sinon-chai'),
    chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);

global.models = require('../models/index');
