const os = require('os');

function printNetworkIPs() {
  const nets = os.networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
      if (net.family === familyV4Value && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  console.log('\n\x1b[36m%s\x1b[0m', '📱 You can test the app on your mobile device by using this IP address:');
  
  let found = false;
  for (const [name, ips] of Object.entries(results)) {
    for (const ip of ips) {
      console.log(`   > Network: \x1b[32mhttp://${ip}:3000\x1b[0m`);
      found = true;
    }
  }
  
  if (!found) {
    console.log('   > Only available on localhost');
  }
  console.log('\n');
}

printNetworkIPs();
