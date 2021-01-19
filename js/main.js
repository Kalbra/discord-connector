const DiscordRPC = require('discord-rpc');

var csInterface = new CSInterface()
var app_name = csInterface.getApplicationID()

console.log(csInterface.getApplicationID())

const clientId = '798305083833188372';

DiscordRPC.register(clientId);

var rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

function reloadDiscord(){

}


async function setFileName() {
	//Photoshop
	if(app_name == "PHXS"){
		csInterface.evalScript("app.activeDocument.name", function (filename) {
			rpc.setActivity({
				details: 'Photoshop',
				state: filename,
				startTimestamp,
				largeImageKey: 'phxs',
				largeImageText: 'Photoshop',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//Illustrator
	else if(app_name == "ILST"){
		csInterface.evalScript("app.activeDocument.name", function (filename) {
			rpc.setActivity({
				details: 'Illustrator',
				state: filename,
				startTimestamp,
				largeImageKey: 'ilst',
				largeImageText: 'Illustrator',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//InDesign
	else if(app_name == "IDSN"){
		csInterface.evalScript("app.activeDocument.name", function (filename) {
			rpc.setActivity({
				details: 'InDesign',
				state: filename,
				startTimestamp,
				largeImageKey: 'idsn',
				largeImageText: 'InDesign',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//InCopy
	else if(app_name == "AICY"){
		csInterface.evalScript("app.activeDocument.name", function (filename) {
			rpc.setActivity({
				details: 'InCopy',
				state: filename,
				startTimestamp,
				largeImageKey: 'aicy',
				largeImageText: 'InCopy',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}

}

async function setActivity() {
	setFileName();
}

rpc.on('ready', () => {
	setActivity();

	// activity can only be set every 15 seconds
	setInterval(() => {
		setActivity();
	}, 15e3);
});

function login() {
	try {
		rpc.login({clientId});
	}
	catch (error) {
		document.getElementById("status").textContent = "Offline"
	}


}

