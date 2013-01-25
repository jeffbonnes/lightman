var Spooky = require('spooky');
var program = require('commander');

program.version('0.0.1')
  .usage('[options] <createDevCert|createDistCert|createAppID>')
  .option('-p, --password <password>', 'Use password [blah]')
  .option('-u, --username <username>', 'Use username [blah]')
  .option('-t, --team [team]', 'Use team')
  .option('-c, --csr [csr file]', 'Use csr file')
  .option('-bn, --bundlename [bundle name]', 'Use bundle name')
  .option('-bi, --bundleid [bundle id]', 'Use bundle id')
  .parse(process.argv);

var world = require('./world').World;
var certificates = require('./certificates');
var authentication = require('./authentication');
var appids = require('./appids');

world(function(world) {

  if (program.args[0] == "listTeams") {
      authentication.listTeams(program.username,program.password);
  } else {
    authentication.login(program.username,program.password,program.team);

    if (program.args[0] == "createDevCert") {
      certificates.createDevelopmentCertificate(program.csr);    
    } else if (program.args[0] == "createDistCert") {
      certificates.createDistrobutionCertificate(program.csr);    
    } else if (program.args[0] == "createAppID") {
      appids.createNewAppID(program.bundlename,program.bundleid);
    } else if (program.args[0] == "configureAppIDForDistPush") {
      appids.configureAppIDForDistPush(program.csr,program.bundlename);
    }     
  }
  
  // // say cheeze!
  // spooky.then(function() {
  //   this.capture('lightman.png');
  // });
  
  spooky.run();
});

