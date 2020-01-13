App.directive('contactForm', function () {
    return {
        restrict: 'E',
        scope: {
            ngModel: '='
        },
        template: `
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" ng-model="ngModel.firstName" ng-required="true">
          </div>
         <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" ng-model="ngModel.lastName" ng-required="true">
          </div>
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" class="form-control" id="fullName" ng-model="ngModel.fullName" ng-required="true">
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="text" class="form-control" id="phoneNumber" ng-model="ngModel.phoneNumber" ng-required="true">
            </div>
          <div class="form-group">
            <label for="cellPhoneNumber">Cell Phone Number</label>
            <input type="text" class="form-control" id="cellPhoneNumber" ng-model="ngModel.cellPhoneNumber" 
                ng-required="true">
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" ng-model="ngModel.address" ng-required="true">
          </div>
      `
    }
});
