# AngularMeteorCollection

An object that binds a [Meteor Collection](http://docs.meteor.com/#/full/collections) to an AngularJS scope variable. This is the object that is returned when [$meteor.collection service](http://angular-meteor.com/api/meteorCollection) is called. It represents the documents that exist in the Meteor local collection.

---------------

> This module has been deprecated in favor of the new [helpers API](/api/1.3.1/helpers).

> There is no need for `$meteor.collection` anymore as with the helpers function we can use regular [Mongo.Collection](http://docs.meteor.com/#/full/mongo_collection) directly without any wrappers. Helpers will make sure to update Angular.
> We also removed `autobind` because it's a bad practice and we gain much better performance and easier maintainability both for the library and the apps developed with it.

> Here is an example for how to migrate:

Old code:

    $scope.parties = $scope.$meteorCollection(function(){
      Parties.find({}, {sort: {createdAt: -1}})
    });

    $scope.users = $scope.$meteorCollection(function(){
      Meteor.users.find({})
    });

New Code:

    $scope.helpers({
      parties() {
        return Parties.find({}, {sort: {createdAt: -1}});
      },
      users() {
        return Meteor.users.find({});
      }
    });

---------------

## Usage

See [$meteor.collection](/api/meteorCollection)

----

## Methods

### save( :docs );

#### Parameters

| Param | Type              | Details                                                                                                                                                                                                                                                                                                                      | Required |
|-------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| docs  | None/Array/Object | The docs to save to the Meteor Collection: If nothing is passed, the method saves everything in the AngularMeteorCollection as is. If an object is passed, the method pushes that object into the AngularMeteorCollection. If an array of objects is passed, the method pushes all objects into the AngularMeteorCollection. | No       |


#### Returns

Returns a promise on success with the array of ids and the actions happened: "inserted" or "updated" for each one of the docs.

### remove( :keys );

#### Parameters

| Param | Type              | Details                                                                                                                                                                                                                                                                                                                                                                                    | Required |
|-------|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| keys  | None/Array/Object | The keys of the object to remove from the Meteor Collection. If nothing is passed, the method removes all the documents from the AngularMeteorCollection. If an object is passed, the method removes the object with that key from the AngularMeteorCollection. If an array is passed, the method removes all objects that matches the keys in the array from the AngularMeteorCollection. | No       |

#### Returns

Returns a promise on success with the array of ids and the "removed" action

### subscribe( :subscriptionName, :PublisherArguments );

A shorter ('syntactic sugar') function for <a href="/api/subscribe">$meteor.subscribe</a>.

Takes the subscription name and its parameters, but does not return a promise like <a href="/api/subscribe">$meteor.subscribe</a> does.

When called after $scope.meteorCollection, it acts the same but in addition it automatically closes the subscription when the scope is destroyed.

#### Parameters

| Param              | Type   | Details                                                                                                   | Required |
|--------------------|--------|-----------------------------------------------------------------------------------------------------------|----------|
| subscriptionName   | String | The subscription name to subscribe to. Exactly like the first parameter in the $meteor.subscribe service. | Yes      |
| publisherArguments | any    | Optional arguments passed to publisher function on server.                                                | No       |

#### Returns

None

### stop();

Stops watching the current collection for changes made in the scope variable or meteor collection.

#### Parameters

None

#### Returns

None

----

## Example

    // Bind all the todos to $scope.todos without auto-save
    $scope.todos = $meteor.collection(Todos, false);

    // Add a single todo to the collection
    var todoObject = {name:'first todo'};
    $scope.todos.save(todoObject);  // todos equals [{name:'first todo'}]

    // Add multiple todos to the collection
    var todoArray = [{name:'second todo'}, {name:'third todo'}];
    $scope.todos.save(todosArray);  // todos equals [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]

    // Add another todo to the collection
    var anotherTodoObject = {name:'fourth todo'};
    $scope.todos.push(anotherTodoObject);

    /*
     * The scope variable now holds:
     * [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}, {name:'fourth todo'}]
     *
     * but the collection holds:
     * [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]
     *
     * that's because auto-save was set to false (the 2nd parameter in the $meteor.collection call).
     *
     * To save the data we need to explicitly call the save() function:
     */
    $scope.todos.save();

    $scope.todos.remove(firstTodoId); // scope and collection equals to [{name:'second todo'}, {name:'third todo'}, {name:'fourth todo'}]

    $scope.todos.remove(todoIdsArray); // removes everything matches the array of IDs both in scope and in collection

    $scope.todos.pop();  // removes only in scope

    $scope.todos.remove(); // syncs also in Meteor collection

    // Using the subscribe function
    $scope.parties = $meteor.collection(Parties).subscribe('partiesSubscription');

    // With a callback to do something after the todo was saved and to catch errors
    $scope.todos.save(todoObject)
      .then( function() {

        // todos were successfully saved
        console.log('The todo was saved');

      }, function(err) {

        // an error occurred while saving the todos: maybe you're not authorized
        console.error( 'An error occurred. The error message is: ' + err.message);

      });
