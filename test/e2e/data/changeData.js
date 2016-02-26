function changeData() {
  this.saveButton = element(by.id('Savebutton'));
  this.editButton = element(by.id('Editbutton'));
  this.doneEditingButton = element(by.id('DoneEditingbutton'));
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
}

module.exports = changeData;
