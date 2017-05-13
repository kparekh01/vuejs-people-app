
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: [],
      name: '',
      bio: '',
      success: '',
      errors: []
    },
    mounted: function(){
    $.get('/api/v1/people', function(response){
      for(i=0; i < response.length; i++){
        response[i].edit = false;
      }
      this.people = response;
    }.bind(this));
    },
    methods: {
      toggleBio: function(inputPerson){
        inputPerson.visible = !inputPerson.visible;
      },
      addPerson: function(){
        this.errors = [];
        var parameters = {
          name: this.name,
          bio: this.bio
        };
        $.post('/api/v1/people', parameters, function(response){
          this.people.push(response);
          this.name = '';
          this.bio = '';
          this.success = response.name + ' Was Successfully Created!';
        }.bind(this)).fail(function(response){
          this.success = '';
          this.errors = [];
          this.errors = response.responseJSON.errors;
        }.bind(this));
      },
      toggleEdit: function(person){
        person.edit = !person.edit;
      },
      updatePerson: function(person){
        $.ajax({
          method: 'PUT',
          dataType: 'json',
          data: {
            name: person.name,
            bio: person.bio
          },
          url: '/api/v1/people/' + person.id,
          success: function(response) {
            this.success = '';
            this.success = response.name + ' Was Successfully Updated!';
          }.bind(this),
          error: function(response) {
            this.errors = [];
            this.errors = response.responseJSON.errors;
          }.bind(this)
        });
        person.edit = false;
      },
      deletePerson: function(inputPerson){
        var index = this.people.indexOf(inputPerson);
        $.ajax({
          url: '/api/v1/people/' + inputPerson.id,
          type: 'DELETE',
          dataType: "json",
          success: function(response) {
            if(response) {
              this.success = response.name + ' Was Successfully Destroyed!';
            }
          }.bind(this)
        });
        this.people.splice(index, 1);
      },
    },
  });
});
