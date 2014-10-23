global.expect = require('chai').expect,
global.chai = require('chai'),
global.sinon = require('sinon'),
global.sinonChai = require('sinon-chai'),
global.Promise = require('sequelize').Promise;

chai.should();
chai.use(sinonChai);

global.models = require('../models/index');
