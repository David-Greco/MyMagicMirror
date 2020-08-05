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
		//console.log("Start test process");
		//var testprocess = spawn('python', ['/home/pi/MagicMirror/modules/default/compliments/thermalcamera.py']);
		console.log("Start regular process");
		var process = spawn("python3", ["/home/pi/MagicMirror/modules/default/compliments/correctface.py"]);
		/*
	    var ms = 2000;
	    var start = new Date().getTime();
	    var end = start;
	    while(end < start + ms){
		end = new Date().getTime();
	    }
	    */
		process.stdout.on("data", (data) => {
			console.log("Here is data: " + data);
			this.sendSocketNotification("FROM_PY_SCRIPT", data.toString());
		});
	}
});
