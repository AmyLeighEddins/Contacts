var IndexPage = require('./indexPage');

describe("Contacts", function() {
  var page = new IndexPage();

  beforeEach(function() {
    page.get();
  });

  describe("index", function() {
    it("should display the correct title", function() {
      expect(page.getTitle()).toBe('Contacts');
    });
    it("should go to the add contact page when Add is pressed", function() {
      page.clickAdd();
      expect(page.getUrl()).toContain('Add');
    });
    it("should go to the all contacts page when All is pressed", function() {
      page.clickAll();
      expect(page.getUrl()).toContain('All');
    });
    it("should go to the details page when Detail is pressed", function() {
      page.clickDetail();
      expect(page.getUrl()).toContain('Detail');
    });

  });
});
