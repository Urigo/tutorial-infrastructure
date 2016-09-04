# $meteor.object   /    $scope.$meteorObject

A service that wraps a Meteor object to enable reactivity within AngularJS.
Finds the first document that matches the selector, as ordered by sort and skip options.
Wraps [collection.findOne](http://docs.meteor.com/#/full/findone)

---------------

> This module has been deprecated in favor of the new [helpers API](/api/1.3.1/helpers).

> There is no need for `$meteor.object` anymore as we can use Mongo Collection’s [findOne function](http://docs.meteor.com/#/full/findone). Helpers will make sure to update Angular.
> We also removed `autobind` because it's a bad practice and we gain much better performance and easier maintainability both for the library and the apps developed with it.

> Here is an example for how to migrate:

Old code:

    $scope.party = $meteor.object(Parties, $stateParams.partyId);

New Code:

    $scope.helpers({
      party() {
        return Parties.findOne($stateParams.partyId);
      }
    });

----

## Usage

Calling `$scope.$meteorObject` is exactly the same but additionally it will automatically stop the object when the scope is destroyed; therefore this is the **recommended method**.

    $meteor.object(collection, selector, auto)

    $scope.$meteorObject(collection, selector, auto)

  If you documents are saved with objects IDs (and not strings:  <a href="http://docs.meteor.com/#/full/mongo_collection" >see here </a>),
you should use <code> new Mongo.objectID  </code> to retrieve the object.

    $meteor.object (collection, new Mongo.ObjectID (stringId), auto); // you can also use Meteor.Collection.ObjectID


### Arguments

| Param          | Type                                 | Details                                                                                                                                                                                                                       | Required | Default |
|----------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| collection     | Meteor Collection Object             | A Meteor Collection to bind to.                                                                                                                                                                                               | Yes      |         |
| selector       | Mongo Selector, Object ID, or String | A query describing the documents to find or just the ID of the document.,$meteor.object will find the first document that matches the selector, as ordered by sort and skip options, exactly like Meteor's collection.findOne | Yes      |         |
| autoClientSave | Boolean                              | By default, changes in the Angular object will automatically update the Meteor object.,However if set to false, changes in the client won't be automatically propagated back to the Meteor object.                            | No       | True    |

### Returns

Newly created [AngularMeteorObject](/api/AngularMeteorObject) object with the following set of methods:

| save         | saves the current value of the object to the server.returns a promise with an error in case for an error or a number of successful docs changed in case of success. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| reset        | reset the current value of the object to the one in the server                                                                                                      |
| subscribe    | [Go to reference](/)                                                                                                                                                |
| getRawObject | [Go to reference](/)                                                                                                                                                |


----

## Example

    // Define a new Meteor Mongo Collection
    Parties = new Mongo.Collection('parties');

    if (Meteor.isClient) {

      angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
        function($scope, $stateParams, $meteor){

          $scope.party = $meteor.object(Parties, $stateParams.partyId);


          $scope.partyNotAuto = $scope.$meteorObject(Parties, $stateParams.partyId, false);

          $scope.save = function() {
            $scope.partyNotAuto.save().then(function(numberOfDocs){
              console.log('save success doc affected ', numberOfDocs);
            }, function(error){
              console.log('save error', error);
            });
          };

          $scope.reset = function() {
            $scope.partyNotAuto.reset();
          };

          // Query selector example
          $scope.partyOfUser = $meteor.object(Parties, {userId: Meteor.userId()});

      }]);
    }
