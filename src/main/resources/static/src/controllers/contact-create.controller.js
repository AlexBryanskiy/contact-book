App.controller('ContactCreateController', [
    '$scope', 'contactsService', '$location', function ($scope, contactsService, $location) {

        $scope.contact = {};

        $scope.submitForm = function (isValid) {
            if (isValid) {
                contactsService.createContact($scope.contact)
                    .then(function () {
                        $location.path('/');
                    });
            }
        }
    }
]);
