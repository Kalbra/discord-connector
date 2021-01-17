'use strict';

const DiscordRPC = require('discord-rpc')


// Set this to your Client ID.
const clientId = '798305083833188372';

// Only needed if you want to use spectate, join, or ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

var activity_status = {
    details: `booped`,
    state: 'in slither party',
    startTimestamp,
    largeImageKey: 'pp',
    largeImageText: 'tea is delicious',
    smallImageKey: 'pp',
    smallImageText: 'i am my own pillows',
    instance: false,
}

function setPPRO(){
    activity_status = {
        details: `Working on `,
        state: 'Premiere Pro',
        startTimestamp,
        largeImageKey: 'pp',
        largeImageText: 'tea is delicious',
        smallImageKey: 'pp',
        smallImageText: 'i am my own pillows',
        instance: false,
    }
}
setPPRO()

async function setActivity() {
    rpc.setActivity(activity_status);
}

rpc.on('ready', () => {
    setActivity();

    // activity can only be set every 15 seconds
    setInterval(() => {
        setActivity();
    }, 15e3);
});

rpc.login({ clientId }).catch(console.error);