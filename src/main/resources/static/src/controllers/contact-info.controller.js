App.controller('ContactInfoController', [
    '$scope', 'contactsService', '$route', 'utils', function ($scope, contactsService, $route, utils) {

        $scope.contact = {};

        $scope.init = function () {
            contactsService.getContactInfo($route.current.params.id)
             .then(function (response) {
                $scope.contact = response.data;
            }).catch(function (err) {
                utils.handleError();
            })
        }
    }
]);
