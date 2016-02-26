function IndexPage() {
  this.addButton = element(by.id('Addbutton'));
  this.allButton = element(by.id('Allbutton'));
  this.detailButton = element(by.id('Detailbutton'));

  this.get = function() {
    browser.get('/app/#');
  };
  this.clickAdd = function () {
    this.addButton.click();
  };
  this.clickAll = function () {
    this.allButton.click();
  };
  this.clickDetail = function () {
    this.detailButton.click();
  };
  this.getTitle = function () {
    return browser.getTitle();
  };
  this.getUrl = function() {
    return browser.getCurrentUrl();
  };

}

module.exports = IndexPage;
