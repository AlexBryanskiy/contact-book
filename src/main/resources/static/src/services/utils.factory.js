App.factory('utils', function() {
    return {
        handleError: function() {
            jQuery.noConflict();
            $('#errorModal').modal('show');
        }
    }
});