App.controller('ContactsListController', [
    '$scope', '$location', 'contactsService', 'utils',
        function ($scope, $location, contactsService, utils) {

        $scope.contactList = [];

        $scope.openCreatePage = function () {
            $location.path('/create');
        };

        $scope.openContactInfo = function (id) {
            $location.path('/' + id);
        };

        $scope.openUpdatePage = function (id) {
            $location.path('/update/' + id);
        };

        $scope.deleteContact = function (id) {
            contactsService.deleteContact(id)
                .then(function () {
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();

                    $scope.refresh();
                }).catch(function (err) {
                utils.handleError();
            })
        };

        $scope.refresh = function () {
            contactsService.getContactsList().then(function (response) {
                $scope.contactList = response.data;
            }).catch(function (err) {
                utils.handleError();
            })
        }
    }
]);
