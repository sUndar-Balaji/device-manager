angular.module ("app", ["ui.router",
	"components",
	"services"]) 
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise ("/devices/");

		$stateProvider
			.state ("app", {

				url: "",
				abstract: true,
				template: "<ui-view />"
				
			})
			.state("app.devices", {

				url: "/devices",
				abstract: true,
				template: "<ui-view />" 	

			}) 
			.state("app.devices.list", {

				url: "/",
				template: "<container-component />" 	

			})
			.state("app.devices.add", {

				url: "/add",
				template: "<add-new-devices />"

			})
			.state("app.devices.update", {

				url: "/update/:id",
				template: "<update-device-details />"

			});


	});