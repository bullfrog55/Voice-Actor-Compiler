1. //create a sqlite database
    * //create an Actor table with relevant fields
    * //enter some dummy data
2. //create a Database class
   * //create initDatabase() in the database class
         * //starts a connection to a sqlite database
       * //create function getActorByName(name:string)
         * //searches and returns the first actor whose name matches the passed in parameter
3. update main to use the database class to search for the user specified actor
  * make a prompt that asks for an actors name
  * run getActorName with the response to the prompt as the parameter
  * log the correct actor row
  * 