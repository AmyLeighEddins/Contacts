var changeData = require('./changeData');

describe("changeData", function() {
  var page = new changeData();
  beforeEach(function() {
    page.getAdd();
  });
  /*describe("add", function() {
    it("should save your new contact if you hit save", function() {
      var nameModel = element(by.model('name'));
      var addressModel = element(by.model('address'));
      var phoneModel = element(by.model('number'));
      var name = "amy";
      var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
      var phone = "(334)207-0554";
      nameModel.sendKeys(name);
      addressModel.sendKeys(address);
      phoneModel.sendKeys(phone);
      var nameFound = false;
      var addressFound = false;
      var phoneFound = false;
      var allFound = false;
      page.clickSave();
      page.getMain();
      var listItems = element.all(by.repeater("contact in contacts | orderBy : 'name'")).then(function(rows){
        for (var i = 0; i < rows.length; ++i) {
          if (rows[i].column('contact.name') == name) {
            nameFound = true;
          }
          if (rows[i].column('contact.address') == address) {
            addressFound = true;
          }
          if (rows[i].column('contact.phone') == phone) {
            phoneFound = true;
          }
          if (nameFound === true && addressFound === true && phoneFound === true) {
            allFound = true;
          }
          nameFound = false;
          addressFound = false;
          phoneFound = false;
        }
      });
      expect(allFound).toEqual(true);
    });
  });
*/
  describe("delete", function() {
    var page = new changeData();
    beforeEach(function() {
      page.getMain();
    });
    it("should delete the contact if you click delete and yes", function() {
      //var deletedName = ;
      var nameFound = false;
      //page.clickDelete();
      //page.clickYes();
      console.log(page.element);
      element.all(by.repeater("contact in contacts")).then(function(rows){
        console.log(rows.length);
        for (var i = 0; i < rows.length; ++i) {
          if (listItems[i].column('contact.name') == name) {
            nameFound = true;
          }
        }
      });
      expect(nameFound).toEqual(false);
    });
    it("should NOT delete the contact if you click delete and no", function() {
      //var deletedName = ;
      var nameFound = false;
      //page.clickDelete();
      //page.clickNo();
      console.log(page.element);
      element.all(by.repeater("contact in contacts")).then(function(rows){
        console.log(rows.length);
        for (var i = 0; i < rows.length; ++i) {
          if (rows[i].column('contact.name') == name) {
            nameFound = true;
          }
        }
      });
      expect(nameFound).toEqual(true);
    });
  });
/*
  describe("edit", function() {
    var page = new changeData();
    beforeEach(function() {
      page.getMain();
    });
    it("should save the edited contact if you edit it", function() {
      page.clickDetail();
      page.clickEdit();
      var nameModel = element(by.model('contact.name'));
      var addressModel = element(by.model('contact.address'));
      var phoneModel = element(by.model('contact.number'));
      var name = "amy";
      var address = "1491 Fern Rd Wetumpka AL 36092";
      var phone = "(334)569-3280";
      var nameFound = false;
      var addressFound = false;
      var phoneFound = false;
      var allFound = false;
      nameModel.sendKeys(name);
      addressModel.sendKeys(address);
      phoneModel.sendKeys(phone);
      page.clickDone();
      var listItems = element.all(by.repeater("contact in contacts | orderBy : 'name'")).then(function(rows){
        for (var i = 0; i < rows.length; ++i) {
          if (rows[i].column('contact.name') == name) {
            nameFound = true;
          }
          if (rows[i].column('contact.address') == address) {
            addressFound = true;
          }
          if (rows[i].column('contact.phone') == phone) {
            phoneFound = true;
          }
          if (nameFound === true && addressFound === true && phoneFound === true) {
            allFound = true;
          }
          nameFound = false;
          addressFound = false;
          phoneFound = false;
        }
      });
      expect(allFound).toEqual(true);
    });
  });

  describe("order", function() {
    var page = new changeData();
    beforeEach(function() {
      page.getMain();
    });
    it("should order the contacts alphabetically", function() {
      var alphabeticalError = false;
      var previousName = "";
      var listItems = element.all(by.repeater("contact in contacts | orderBy : 'name'")).then(function(rows){
        for (var i = 0; i < rows.length; ++i) {
          if (i === 0) {
            previousName = rows[i];
          }
          if (previousName <= rows[i]) {
            previousName = rows[i];
          }
          else {
            alphabeticalError = true;
          }
        }
      });
      expect(alphabeticalError).toEqual(false);
    });
  });
*/
});
