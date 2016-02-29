var changeData = require('./changeData');

describe("changeData", function() {
  var page = new changeData();
  describe("add", function() {
    var name = "amy";
    var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
    var phone = "(334)207-0554";
    beforeEach(function() {
      page.getAdd();
      element(by.model('name')).sendKeys(name);
      element(by.model('address')).sendKeys(address);
      element(by.model('number')).sendKeys(phone);
      page.clickSave();
      page.getMain();
    });
    afterEach(function() {
      page.clickDelete(name);
      page.clickYes(name);
    });
    it("should save your new contact if you hit save", function() {
      var names = element.all(by.repeater('contact in contacts').column('contact.name')).map(function(column) {
        return column.getText();
      });
      expect(names).toContain(name);
    });
  });
  describe("delete", function() {
    var name = "andy";
    var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
    var phone = "(334)207-0554";
    var countAfter = 0;
    var countBefore = 0;
    beforeEach(function() {
      page.getAdd();
      element(by.model('name')).sendKeys(name);
      element(by.model('address')).sendKeys(address);
      element(by.model('number')).sendKeys(phone);
      page.clickSave();
      page.getMain();
    });
    it("should NOT delete the contact if you click delete and no", function() {
      element.all(by.repeater('contact in contacts')).count().then(function(count) {
        countBefore = Number(count);
      });
      page.clickDelete(name);
      page.clickNo(name);
      element.all(by.repeater('contact in contacts')).count().then(function(count) {
        countAfter = Number(count);
      });
      expect(countAfter).toEqual(countBefore);
      page.clickDelete(name);
      page.clickYes(name);
    });
    it("should delete the contact if you click delete and yes", function() {
      element.all(by.repeater('contact in contacts')).count().then(function(count) {
        countBefore = Number(count) - 1;
      });
      page.clickDelete(name);
      page.clickYes(name);
      element.all(by.repeater('contact in contacts')).count().then(function(count) {
        countAfter = Number(count);
      });
      expect(countAfter).toEqual(countBefore);
    });
  });
  describe("edit", function() {
    var name1 = "bob";
    var name2 = "ryan";
    var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
    var phone = "(334)207-0554";
    beforeEach(function() {
      page.getAdd();
      element(by.model('name')).sendKeys(name1);
      element(by.model('address')).sendKeys(address);
      element(by.model('number')).sendKeys(phone);
      page.clickSave();
    });
    it("should save the edited contact if you edit it", function() {
      page.getMain();
      page.clickDetail(name1);
      page.clickEdit();
      element(by.model('contact.name')).clear();
      element(by.model('contact.address')).clear();
      element(by.model('contact.phone')).clear();
      element(by.model('contact.name')).sendKeys(name2);
      element(by.model('contact.address')).sendKeys(address);
      element(by.model('contact.phone')).sendKeys(phone);
      page.clickDone();
      page.getMain();
      var names = element.all(by.repeater('contact in contacts').column('contact.name')).map(function(column) {
        return column.getText();
      });
      expect(names).toContain(name2);
    });
  });
});
