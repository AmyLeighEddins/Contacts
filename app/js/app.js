var app = angular.module('Contacts', ['ngRoute']);

var currentId = localStorage.length + 1;

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/All', {
      templateUrl : 'index.html',
      controller : 'AllController'
    })
    .when('/Add', {
      templateUrl : 'add.html',
      controller : 'AddController'
    })
    .when('/Detail', {
      templateUrl : 'detail.html',
      controller : 'DetailsController'
    })
    .otherwise({
      redirectTo: '/All'
    });
}]);

app.controller('MainController', function($scope){
  $scope.actions = [
    {"id": 1, name:"All"},
    {"id": 2, name:"Add"}
  ];
  $scope.currentAction = $scope.actions[0];
});

app.controller('AllController', function($scope, storage){
  $scope.showPopup = false;
  $scope.setCurrentAction = function(action, id) {
    $scope.currentAction = action;
    currentId = id;
    if (action === "Delete") {
      $scope.togglePopup();
    }
  };
  $scope.togglePopup = function() {
    $scope.showPopup = !$scope.showPopup;
  };
  $scope.deleteContact = function() {
    storage.removeContact(currentId);
    $scope.togglePopup();
    window.location.reload();
  };
  $scope.getContacts = function() {
    return storage.getAllContacts();
  };
  $scope.contacts = $scope.getContacts();
});

app.controller('AddController', function($scope, storage){
  $scope.saveContact = function(name, address, number) {
    currentId = 0;
    while (storage.checkIfExists(currentId)) {
      currentId++;
    }
    var data = {"id": currentId, "name": name, "address": address, "phone": number};
    storage.setContact(currentId, data);
    currentId++;
  };
});

app.controller('DetailsController', function($scope, storage){
  $scope.editing = false;
  $scope.getDetails = function(id) {
    return storage.getContact(id);
  };
  $scope.contact = $scope.getDetails(currentId);
  $scope.toggleEdit = function () {
    $scope.editing = !$scope.editing;
  };
  $scope.editContact = function(id, name, address, number) {
    $scope.toggleEdit();
    storage.removeContact(id);
    var data = {"id": id, "name": name, "address": address, "phone": number};
    storage.setContact(id, data);
  };
});

app.directive('modal', function() {
  return {
    restrict: 'E',
    scope: {
      show:'='
    },
    replace: true,
    transclude: true,
    template:"<div class='ng-modal' ng-show='show' >" +
              "<div class='ng-modal-dialog' ng-style='dialogStyle'>" +
                "<div class='ng-modal-dialog-content' ng-transclude></div>" +
                "</div>" +
              "</div>"
  };
});

app.factory('storage', function(){
  var service = {
    get: function(key) {
      var value = localStorage.getItem(key);
      if (value && value != 'undefined') {
        return angular.fromJson(value);
      }
      return undefined;
    },
    set: function(key, value) {
      var storeValue = angular.toJson(value);
      localStorage.setItem(key, storeValue);
    },
    removeAll: function() {
      localStorage.clear();
    },
    remove: function(key) {
      localStorage.removeItem(key);
    },
    has: function(key) {
      var hasItem = localStorage.getItem(key);
      return (hasItem) ? true : false;
    },
    getContact: function(id) {
      return this.get(id);
    },
    getAllContacts: function() {
      var contacts = [];
      for (i=0;i<localStorage.length;i++) {
        var value = localStorage.getItem(localStorage.key(i));
        contacts.push(angular.fromJson(value));
      }
      return contacts;
    },
    setContact: function(id, value) {
      return this.set(id, value);
    },
    removeContact: function(id) {
      return this.remove(id);
    },
    clearContacts: function(id) {
      return this.removeAll();
    },
    checkIfExists: function(id) {
      return this.has(id);
    }
  };
  return service;
});
