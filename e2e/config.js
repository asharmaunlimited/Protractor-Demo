exports.config ={
	framework:'jasmine',
	seleniumAddress:'http://localhost:4444/wd/hub',
	specs:['homepage/spec.js'],
	rootElement :'div',
	jasmineNodeOpts: {
    defaultTimeoutInterval: 55000//max time out because of browser.sleep(3000)
	},
	launchAddress_dev:'https://localhost:44300/home/landing?sub',
	launchAddress_qa:'https://qa0-p.assistpoint.com/home/landing?sub'
}
