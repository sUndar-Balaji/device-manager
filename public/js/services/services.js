angular.module("services", [])
	.factory ("devices", function ($http) {

		var deviceOperations = {};

		deviceOperations.getAllDevices = function () {

			return $http.get ("http://localhost:3000/devices");

		};

		deviceOperations.addDevice = function (deviceDetails) {

			return $http.post ("http://localhost:3000/devices/new", deviceDetails);

		};

		deviceOperations.updateDevice = function (deviceDetails) {

			return $http.post ("http://localhost:3000/devices/update", deviceDetails);

		};

		deviceOperations.removeDevice = function (deviceId) {

			return $http.get ("http://localhost:3000/devices/remove/" + deviceId);

		};

		deviceOperations.deviceDetails = function (deviceId) {

			return $http.get ("http://localhost:3000/devices/" + deviceId);

		};

		return deviceOperations;

	});