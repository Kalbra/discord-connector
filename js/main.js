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
	//Premiere Pro
	else if(app_name == "PPRO"){
		csInterface.evalScript("app.project.name", function (filename) {
			rpc.setActivity({
				details: 'Premiere Pro',
				state: filename,
				startTimestamp,
				largeImageKey: 'ppro',
				largeImageText: 'Premiere Pro',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//Prelude
	else if(app_name == "PRLD"){
		csInterface.evalScript("app.project.name", function (filename) {
			rpc.setActivity({
				details: 'Prelude',
				state: filename,
				startTimestamp,
				largeImageKey: 'prld',
				largeImageText: 'Prelude',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//After Effects
	else if(app_name == "AEFT"){
		csInterface.evalScript("app.project.file.name", function (filename) {
			rpc.setActivity({
				details: 'After Effects',
				state: decodeURI(filename),
				startTimestamp,
				largeImageKey: 'aeft',
				largeImageText: 'After Effects',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//Animate
	else if(app_name == "FLPR"){
		csInterface.evalScript("app.fileName", function (filename) {
			rpc.setActivity({
				details: 'Animate',
				state: filename,
				startTimestamp,
				largeImageKey: 'flpr',
				largeImageText: 'Animate',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//Dreamweaver
	else if(app_name == "DRWV"){
		csInterface.evalScript("app.fileName", function (filename) {
			rpc.setActivity({
				details: 'Dreamweaver',
				state: filename,
				startTimestamp,
				largeImageKey: 'drwv',
				largeImageText: 'Dreamweaver',
				smallImageKey: 'adobe',
				smallImageText: 'Adobe',
				instance: false,
			});
		});
	}
	//Audition
	else if(app_name == "AUDT"){
		csInterface.evalScript("app.activeDocument.path.split('\\').slice(-1)[0]", function (filename) {
			rpc.setActivity({
				details: 'Audition',
				state: filename,
				startTimestamp,
				largeImageKey: 'audt',
				largeImageText: 'Audition',
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

