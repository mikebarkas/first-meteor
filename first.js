Places = new Meteor.Collection('places');

if (Meteor.isClient) {
  
  // Nav Router
  Meteor.Router.add({
    '/' : 'home',
    '/two' : 'two',
    '/enter-place' : 'enter_place',
    '/all-places' : 'all_places',
  })



  Template.enter_place.events({

    'click .submit_place' : function(){

        Places.insert({
          place_data: $('.place_data').val()
        });

        $('.place_data').val('');
    }

  });

  Template.all_places.show_places = function(){
    return Places.find();
  }

  
}
