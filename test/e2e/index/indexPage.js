function IndexPage() {
  this.addButton = element(by.id('Addbutton'));
  this.allButton = element(by.id('Allbutton'));
  this.get = function() {
    browser.get('/app/#');
  };
  this.clickAdd = function() {
    this.addButton.click();
  };
  this.clickAll = function() {
    this.allButton.click();
  };
  this.getTitle = function() {
    return browser.getTitle();
  };
  this.getUrl = function() {
    return browser.getCurrentUrl();
  };
}

module.exports = IndexPage;
