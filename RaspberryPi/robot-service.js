var util = require('util');
var bleno = require('bleno');

var RobotMotorCharacteristic = require('./robot-motor-characteristic');
var RobotTemperatureCharacteristic = require('./robot-temperature-characteristic');
var RobotVoltageCharacteristic = require('./robot-voltage-characteristic');

function RobotService(robot) {
    bleno.PrimaryService.call(this, {
	uuid: '31491EECD9BB41BD8D632282ABAE6810',
	characteristics: [
	    new RobotMotorCharacteristic(robot, 1),
	    new RobotMotorCharacteristic(robot, 2),
	    new RobotTemperatureCharacteristic(robot),
	    new RobotVoltageCharacteristic(robot)
	]
    });
}

util.inherits(RobotService, bleno.PrimaryService);

module.exports = RobotService;
