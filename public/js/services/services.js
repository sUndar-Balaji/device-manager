angular.module("services", [])
	.factory ("devices", function ($http) {

		var deviceOperations = {};

		deviceOperations.getAllDevices = function () {

			return $http.get ("https://shielded-brook-22535.herokuapp.com/devices");

		};

		deviceOperations.addDevice = function (deviceDetails) {

			return $http.post ("https://shielded-brook-22535.herokuapp.com/devices/new", deviceDetails);

		};

		deviceOperations.updateDevice = function (deviceDetails) {

			return $http.post ("https://shielded-brook-22535.herokuapp.com/devices/update", deviceDetails);

		};

		deviceOperations.removeDevice = function (deviceId) {

			return $http.get ("https://shielded-brook-22535.herokuapp.com/devices/remove/" + deviceId);

		};

		deviceOperations.deviceDetails = function (deviceId) {

			return $http.get ("https://shielded-brook-22535.herokuapp.com/devices/" + deviceId);

		};

		return deviceOperations;

	});