function changeData() {
  this.saveButton = element(by.id('Savebutton'));
  this.detailButton = element(by.id('Detailbutton'));
  this.deleteButton = element(by.id('Deletebutton'));
  this.yesButton = element(by.id('Yesbutton'));
  this.noButton = element(by.id('Nobutton'));
  this.editButton = element(by.id('Editbutton'));
  this.doneEditingButton = element(by.id('DoneEditingbutton'));

  this.getAdd = function() {
    browser.get('/app/#/Add');
  };
  this.getMain = function() {
    browser.get('/app/#');
  };
  this.clickSave = function () {
    this.saveButton.click();
  };
  this.clickDetail = function () {
    this.detailButton.click();
  };
  this.clickDelete = function () {
    this.deleteButton.click();
  };
  this.clickYes = function () {
    this.yesButton.click();
  };
  this.clickNo = function () {
    this.noButton.click();
  };
  this.clickEdit = function () {
    this.editButton.click();
  };
  this.clickDone = function () {
    this.doneEditingButton.click();
  };
  this.getUrl = function() {
    return browser.getCurrentUrl();
  };
}

module.exports = changeData;
