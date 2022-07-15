import React from "react";



// What is a comment?
// A comment is a free form text area which will display comments on a book
// comment element has two states or modes EnterTextMode and DisplayTextMode

//mvp - ratings - numeric 1-5 will need a verification on value 
// ratings display
// rating belongs to one book, and one user
// a book can have many ratings, a user can have many ratings
// a user can only rate one book at a time 

// architecture: 
// view all ratings - books.ratings = all ratings on book "total / ratings" = average rating
// view rating - my individual rating of specific book
// create rating - add user.rating to specific book with a value
// update rating - changes user.rating to new value (similar to bookshelf update)
// delete rating - removes user rating from score 

// my ratings displays all books I've rated 
// on book add drop down to update 