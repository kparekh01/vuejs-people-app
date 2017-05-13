# README

This is a basic web based CRUD application using vueJS on the front end.  Versioned out an API with
Rails 5 on the backend.  Simulating all CRUD actions on one page without any refreshes.  Some of the 
application's functionality without leaving the page includes:

- Toggling of the bio from visible to not visible(simultaneously changing the button between "show" and "hide")  
- Toggling of the input form via clicking the edit button
- Deleting a person
- Editing a person after clicking "save changes" button
- Creating a new person
- Seeing all the people that are in the database

Feel free to clone the app and play around with it on your localhost by following the instructions and if 
this helped you out any,feel free to star it.  Thanks:

Clone the repo in to your projects directory, or wherever you want the repo to live:
`$ git clone git@github.com:kparekh01/vuejs-people-app.git`

Bundle up the gems:
`$ bundle`

Create the database( Postgresql ):
`$ rails db:create`

Seed the database:
`$ rails db:seed`

Migrate the database:
`$rails db:migrate`

Run your server and go to the appropriate route.  Thanks for reading.



