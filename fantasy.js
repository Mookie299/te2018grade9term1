// Author: FirstName LastName
const READLINE = require("readline-sync");

// user object
let user = {
  firstName: undefined,
  lastName: undefined,
  momMaidenName: undefined,
  cityBorn: undefined,
  dreamCar: undefined,
  street: undefined,
  fantasyName: undefined,
 
};

// fantasy name generator object
let fantasyNameGenerator = {
  /******************************************************************************
                                    getNewFirstName()

    This method returns the user's new first name. To do so, concatenate the
    first 3 letters of their real first name and the first 2 letters of their
    real last name.
  *******************************************************************************/
  getNewFirstName: function(firstName, lastName) {

  },
  /******************************************************************************
                                    getNewLastName()

    This method returns the user's new last name. To do so, concatenate the
    first 2 letters of their mom's maiden name and the first 3 letters of the
    city where they were born.
  *******************************************************************************/
  getNewLastName: function(momMaidenName, cityBorn) {

  },
  /******************************************************************************
                                    getTitle()

    This method returns the user's title. To do so, concatenate the last three
    letters of their real last name, reversed, and the model of their dream car.
  *******************************************************************************/
  getTitle: function(lastName, dreamCar) {

  },
  /******************************************************************************
                                    getHonorific()

    This method returns the user's full honorific. To do so, concatenate their
    title, " of ", and the name of the street they live on. (lastName and
    dreamCar are included here since they should be passed to getTitle() above).
  *******************************************************************************/
  getHonorific: function(street, lastName, dreamCar) {

  },
  /******************************************************************************
                                       run()

    This method runs the program. At the very least it should ask the user
    to answer a series of questions, each setting one of the user object properties
    to what the user typed in. It should then call the methods above to produce
    the user's fantasy name (set fantasyName to that), and display it for the user
    to see.
  *******************************************************************************/
  run: function() {

  }
}

// Call the fantasyNameGenerator object's run() method below to run the program!
