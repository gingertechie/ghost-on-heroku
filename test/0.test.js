var webdriver = require('selenium-webdriver');
require('./fast-selenium.js');

var userName = "dave1229";
var accessKey = "pz6jgzx9b4utpk6D8Nm8"
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';
var targetURL = 'http://dev.ghostmarketplace.com';

// Input capabilities
var capabilities = {
	'bstack:options' : {
		"os" : "Windows",
		"osVersion" : "10",
		"projectName" : "ghost-marketplace",
		"buildName" : "1.0",
		"local" : "false",
		"seleniumVersion" : "3.5.2",
		"userName" : "dave1229",
		"accessKey" : "pz6jgzx9b4utpk6D8Nm8",
	},
	"browserName" : "IE",
	"browserVersion" : "11.0",
}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get(targetURL).then(function(){
  driver.getTitle().then(function(title) {
    console.log('Title:', title);
    driver.quit();
  });
});