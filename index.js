import tmi from 'tmi.js';

const opts = {
    identity: {
      username: 'HolaSoyMax',
      password: 'oauth:78o3ro3t2uvbu5s5wbw2i7hkxzgd7c'
    },
    channels: [
      'HolaSoyMax'
    ]
  };

const client = new tmi.client(opts);

client.on('connected', (address, port)=>{
    client.say(opts.channels[0], 'Wassap guys');
    console.log(`Bot listening at: ${address}:${port}`);
});

client.on('message', (target, ctx, msg, self) =>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();
