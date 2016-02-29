function changeData() {
  this.saveButton = element(by.id('Savebutton'));
  this.editButton = element(by.id('Editbutton'));
  this.doneEditingButton = element(by.id('DoneEditingbutton'));
  this.addButton = element(by.id('Addbutton'));
  this.allButton = element(by.id('Allbutton'));
  this.clickAdd = function() {
    this.addButton.click();
  };
  this.clickAll = function() {
    this.allButton.click();
  };
  this.getAdd = function() {
    browser.get('/app/#/Add');
  };
  this.getMain = function() {
    browser.get('/app/#');
  };
  this.clickSave = function() {
    this.saveButton.click();
  };
  this.clickDetail = function(index) {
    element(by.id("Detailbutton-" + index)).click();
  };
  this.clickDelete = function(index) {
    element(by.id("Deletebutton-" + index)).click();
  };
  this.clickYes = function(index) {
    element(by.id("Yesbutton-" + index)).click();
  };
  this.clickNo = function(index) {
    element(by.id("Nobutton-" + index)).click();
  };
  this.clickEdit = function() {
    this.editButton.click();
  };
  this.clickDone = function() {
    this.doneEditingButton.click();
  };
  this.getUrl = function() {
    return browser.getCurrentUrl();
  };
  this.getTitle = function() {
    return browser.getTitle();
  };
}

module.exports = changeData;
