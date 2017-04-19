var settings = require('../config').config;

describe('Practice Assistpoint Tester', function(){
	browser.ignoreSynchronization = false;
	browser.driver.get(settings.launchAddress_qa);
	//element locators
	var pageElements ={
		 body : element(by.id("bodyWrapper")),
		 menuWrapper :  element(by.id("menu-wrapper")),
		 searchText : element.all(by.model('searchText')).get(2),
		 menuItem : element(by.repeater('menuItemConfig in menuItemConfigs').row(3)),
		 searchResultLabels : element.all(by.css('.label-matched.ng-binding')),
		 signin: element(by.css('[ng-click="onSignInClick()"]')),
		 link:{name:"Good Days Online", value:"Good Days Online Enrollment for Physicians [link]", click:true}
	}
	//runs before each spec
	beforeEach(function(){
		//browser.sleep(5000);
	});

	afterEach(function(){
		//halt to see the browser after each test
		browser.sleep(2000);
	});

	//main sign in page
	it('title', function (){
				//to let the initial loading finish
				browser.sleep(7000);
				expect(browser.getTitle()).toEqual('assistPoint - My Practice');
	});

	//check if body has text displaying
	it('Body', function (){
		pageElements.body.isPresent()
			.then(function(){
				//expect(browser.getTitle()).toEqual('assistPoint - My Practice');
				expect(pageElements.body.getText()).toContain("Welcome to the assistPoint practice portal!");
			})
	});

	//sign in
	it("Sign In", function (){
			pageElements.signin.click();
			//this is where user can type in azure credentials
			//after that the control comes back to protractor and ready for next spec
			browser.sleep(30000);
	});

	//practice main page
	it("Practice Dashboard", function (){
		pageElements.menuWrapper.isPresent()
			.then(function(val){
				console.log(val);
				var menu = pageElements.menuWrapper.getText();
				expect(menu).toContain("DASHBOARD");
			});
	});

	//click on Foundations menu
	it("Foundations", function (){
		var foundationLink = pageElements.menuItem.isPresent()
			.then(function(){
					pageElements.menuItem.click();
			});
	});

	//enter search text
	it("Search", function (){
		var foundationSearch = pageElements.searchText.isPresent()
			.then(function(){
					pageElements.searchText.sendKeys("Good");
			});

		element(by.repeater('part in state.title.labelParts')).isPresent()
				.then(function(){
					//browser.debugger();
					//browser.explore();
					pageElements.searchResultLabels.isPresent()
							.then(function(){
								//expect(searchResultLabels.count()).toContain(2);
								pageElements.searchResultLabels.first().click();
					})
		});
	});


});
