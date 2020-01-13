App.controller('ContactCreateController', [
    '$scope', 'contactsService', '$location', 'utils', function ($scope, contactsService, $location, utils) {

        $scope.contact = {};

        $scope.submitForm = function (isValid) {
            if (isValid) {
                contactsService.createContact($scope.contact)
                    .then(function () {
                        $location.path('/');
                    })
                    .catch(function () {
                        utils.handleError();
                    })
            }
        }
    }
]);
