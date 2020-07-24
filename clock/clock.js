//Modified for Project Use

Module.register("clock", {
	notificationReceived: function (notification, payload, sender) {
		// once everybody is loaded up
		if (notification === "ALL_MODULES_STARTED") {
			// send our config to our node_helper
			this.sendSocketNotification("CONFIG", this.config);
		}
		if (sender) {
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
		} else {
			Log.log(this.name + " received a system notification: " + notification);
		}
	},
	socketNotificationReceived: function (notification, payload) {
		//console.log("Received")
		if (notification === "FROM_PY_SCRIPT") {
			console.log("compliments.js recieved payload");
			this.config.message = payload;
			this.updateDom(1000);
		}
	},
	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		if (this.config.hasOwnProperty("message")) {
			var outputText = this.config.message;
		} else {
			var outputText = "Getting temps";
		}
		// split it into parts on newline text
		var parts = outputText.split("\n");
		// create a span to hold it all
		var myOutput = document.createElement("span");
		// process all the parts of the compliment text
		for (var part of parts) {
			// create a text element for each part
			myOutput.appendChild(document.createTextNode(part));
			// add a break `
			myOutput.appendChild(document.createElement("BR"));
		}
		// remove the last break
		myOutput.lastElementChild.remove();
		wrapper.appendChild(myOutput);

		return wrapper;
	}
});
