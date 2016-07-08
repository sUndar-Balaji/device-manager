angular.module ("components", [])
	.controller ("DeviceCtrl", DeviceCtrl)
	.directive ("device", function () {

		return {

			restrict: "E",
			scope: {
				details: '=',
				deleteDevice: '&'
			},
			controller: "DeviceCtrl as controller",
			templateUrl: "partials/device-template.html",
			link: function () {}

		};

	})
	.controller ("ContainerCtrl", ContainerCtrl)
	.directive ("containerComponent", function () {

		return {

			restrict: "E",
			controller: "ContainerCtrl as controller",
			templateUrl: "partials/container-template.html",
			link: function () {}

		};

	})
	.controller ("AddingNewDevicesCtrl", AddingNewDevicesCtrl)
	.directive ("addNewDevices", function () {

		return {
			restrict: "E",
			controller: "AddingNewDevicesCtrl as controller",
			templateUrl: "partials/add-new-devices-template.html",
			link: function () {}
		};

	})
	.controller ("UpdateDeviceDetailCtrl", UpdateDeviceDetailCtrl)
	.directive ("updateDeviceDetails", function () {

		return {
			restrict: "E",
			controller: "UpdateDeviceDetailCtrl as controller",
			templateUrl: "partials/update-device-details-template.html",
			link: function () {}
		};

	});


function ContainerCtrl ($scope, devices) {

	$scope.deleteDevice = function (deviceId) {

		var index = 0;

		$scope.devices.forEach (function (device, ind) {

			if (device._id === deviceId)
				index = ind;

		});

		$scope.devices.splice (index, 1);

	};

	devices.getAllDevices().then (function (data) {

		$scope.devices = data.data;

	}, function (err) {

		console.log (new Error(err.statusText));

	});

};

function DeviceCtrl ($scope, devices) {

	$scope.removeDevice = function (id) { 

		//console.log (id);

		$scope.deleteDevice()(id);
	
		devices.removeDevice(id).then(function (data) {

			console.log (data);

		}, function () {});

	}

};

function AddingNewDevicesCtrl ($scope, $state, devices) {

	$scope.device = {};

	$scope.addDevice = function () {

		devices.addDevice ($scope.device).then (function (data) {

			$state.go ("app.devices.list");

		}, function (err) {

			console.log (err);

		});

	};

};

function UpdateDeviceDetailCtrl ($scope, $state, devices) {

	$scope.device = {};

	$scope.updateDeviceDetail = function () {

		devices.updateDevice ($scope.device).then (function (data) {

			$state.go ("app.devices.list");

		}, function (err) {

			console.log (err);

		});

	};

	devices.deviceDetails($state.params.id).then (function (data) {

		var device = data.data;

		$scope.device.deviceName = device.name;
		$scope.device.deviceModal = device.model;
		$scope.device.id = device._id;

	}, function () {});

}