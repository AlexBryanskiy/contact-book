App.service('contactsService',
    ['$http', 'apiBaseUrl',  function ($http, apiBaseUrl) {

        var resource = "contact/";

        this.getContactsList = function () {
            return $http.get(apiBaseUrl + "contact");
        };

        this.getContactInfo = function (id) {
            return $http.get(apiBaseUrl + resource + id);
        };

        this.createContact = function (contact) {
            return $http.post(apiBaseUrl + resource, JSON.stringify(contact));
        };

        this.updateContact = function (contact) {
            return $http.put(apiBaseUrl + resource + contact.id, JSON.stringify(contact));
        };

        this.deleteContact = function (id) {
            return $http.delete(apiBaseUrl + resource + id);
        };
      }
    ]
);
