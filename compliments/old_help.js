var NodeHelper = require("node_helper");

const { exec } = require("child_process");

module.exports = NodeHelper.create({
	init() {
		console.log("init module helper SampleModule");
	},

	start() {
		console.log("Starting module helper:" + this.name);
	},

	stop() {
		console.log("Stopping module helper: " + this.name);
	},
	socketNotificationReceived(notification, payload) {
		//console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config = payload;
			//send a message back to module
			//console.log("Notification sent");
			exec("python3 /home/pi/MagicMirror/modules/default/compliments/face.py", (error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					return;
				}
				//console.log("sent");
				this.sendSocketNotification("FROM_PY_SCRIPT", stdout);
			});
		}
	}
});
