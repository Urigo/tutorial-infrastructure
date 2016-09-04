# $angularMeteorSettings

This object contains general settings of the `angular-meteor` module

### API

    myModule.config(['$angularMeteorSettings', function($angularMeteorSettings) {
      $angularMeteorSettings.suppressWarnings = true; // Disables write of warnings to console
    }]);
    