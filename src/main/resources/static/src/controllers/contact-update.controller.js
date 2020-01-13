App.controller('ContactUpdateController', [
    '$scope', 'contactsService', '$location', '$route', 'utils',
     function ($scope, contactsService, $location, $route, utils) {

        $scope.contact = {};

        $scope.init = function () {
            contactsService.getContactInfo($route.current.params.id)
                .then(function (response) {
                    $scope.contact = response.data;
                }).catch(function () {
                    utils.handleError();
            })
        };

        $scope.submitForm = function (isValid) {
            if (isValid) {
                contactsService.updateContact($scope.contact)
                    .then(function () {
                        $location.path('/');
                    });
            }
        }
    }
]);
