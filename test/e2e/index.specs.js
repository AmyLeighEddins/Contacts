var IndexPage = require('./changeData');

describe("Contacts", function() {
  var page = new IndexPage();
  describe("All Contacts page", function() {
    beforeEach(function() {
      page.getMain();
    });
    it("should display the correct title", function() {
      expect(page.getTitle()).toBe('Contacts');
    });
    it("should say 'All Contacts'", function() {
      expect(element(by.id("allTitle")).getText()).toContain("All Contacts");
    });
    it("should go to the add contact page when Add is pressed", function() {
      page.clickAdd();
      expect(page.getUrl()).toContain('Add');
    });
    it("should go to the all contacts page when All is pressed", function() {
      page.clickAll();
      expect(page.getUrl()).toContain('All');
    });
    it("should show a detail and delete button for each contact", function() {
      page.getAdd();
      var name = "Fred";
      var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
      var phone = "(334)207-0554";
      element(by.model('name')).sendKeys(name);
      element(by.model('address')).sendKeys(address);
      element(by.model('number')).sendKeys(phone);
      page.clickSave();
      expect(element(by.id('Detailbutton-' + name)).isPresent()).toBe(true);
      expect(element(by.id('Deletebutton-' + name)).isPresent()).toBe(true);
      page.getMain();
    });
  });
  describe("Add Contact page", function() {
    beforeEach(function() {
      page.getAdd();
    });
    it("should say 'Add Contact'", function() {
      expect(element(by.id("addTitle")).getText()).toContain("Add Contact");
    });
    it("should have save button", function() {
      expect(element(by.id('Savebutton')).isPresent()).toBe(true);
    });
  });
  describe("Detail page", function() {
    var name = "Ben";
    var address = "3704 Lodge Dr. Apt. H Hoover AL 35216";
    var phone = "(334)207-0554";
    beforeEach(function() {
      page.getAdd();
      element(by.model('name')).sendKeys(name);
      element(by.model('address')).sendKeys(address);
      element(by.model('number')).sendKeys(phone);
      page.clickSave();
      page.clickDetail(name);
    });
    it("should say 'Contact Detail'", function() {
      expect(element(by.id("detailTitle")).getText()).toContain("Contact Detail");
    });
    it("should show an edit button", function() {
      expect(element(by.id('Editbutton')).isPresent()).toBe(true);
    });
    it("should show a save button if the edit button is pressed", function() {
      page.clickEdit();
      expect(element(by.id('DoneEditingbutton')).isPresent()).toBe(true);
    });
  });
});
