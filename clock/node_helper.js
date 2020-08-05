//This file exists to create python processes and send their information to the main clock.js file

var NodeHelper = require("node_helper");

const spawn = require("child_process").spawn;

module.exports = NodeHelper.create({
	socketNotificationReceived(notification, payload) {
		// if config message from module
		if (notification === "CONFIG") {
			this.job();
		}
	},
	job() {
		console.log("Start read process");
		//var process = spawn('python', ['/home/pi/MagicMirror/modules/default/clock/thermalread.py']);
		var process = spawn("python", ["/home/pi/MagicMirror/modules/default/clock/roomcheck.py"]);
		//console.log("Start visual process");
		//var visualProcess = spawn('python', ['/home/pi/MagicMirror/modules/default/clock/thermalcamera.py']);
		process.stdout.on("data", (data) => {
			console.log("Here is data: " + data);
			this.sendSocketNotification("FROM_PY_SCRIPT", data.toString());
		});
	}
});
