Book Search API
=========================

By Edgardo Lopez
-------------------------
## Table of Contents
==============================
*   [The Purpose](#the-purpose)
*   [Critera](#criteria)
*   [Installation](#installation)
*   [Usage](#usage)
*   [The Process](#the-process)
*   [What Was Done Differently](#differently)
*   [Built With](#built-with)
*   [Contributing](#contributing)
*   [Project Status](#project-status)
*   [Disclaimer](#disclaimer)
*   [Website](#website)
==============================

#   [The Purpose](#the-purpose)

To be able to log in to the site and also apply the book search function, which will extract the title of the books that is entered in the search bar.

#   [Critera](#criteria)

User Story
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

Acceptance Criteria
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

#   [Installation](#installation)

Head on over to the GitHub:

When you have a folder location, issue the command:  

```bash
git clone {link of the project}
```
Remember to use a program such as Powershell and have a program like Visual Studio Code to be able to open and edit the project.

#   [Usage](#usage)

For this to run, you'll need to input:
```
npm run develop
```
It's not "npm run start" since you need BOTH server AND client side to be working and "npm run develop" is how you get both of these files to be run at the same time.  If you do "npm run start", you'll only start the server, but you won't be able to see the actual site.
Use this inside the main folder that contained the "package.json".  Don't forget to do install first before hand, however.

#   [The Process](#the-process)

For the most part, given what we have and learned, I decided to do from top to bottom.  I try to list out what we needed first and then we slowly worked our way to the bottom.  This will eventually lead to two big folders that included the server and client.  The client side handled the sites look itself and the structures using reacts with their respected sections such as the Login Form and Nav Bar while the server side handled the route locations for said site as well as handling the schemas that'll handle the data information of the site.

Once that's done, we can then start with the expressions we need such as "getAllUsers".  

#  [What Was Done Differently](#differently)

The biggest thing, for me, was including the Atlas.  I haven't used Heroku nor Atlas and this one was a bit tricky to do.  However, in the end, the project is running as intended thanks to the steps that were taken and helped from the student center!

#   [Built With](#built-with)

    *HTML
    *CSS
    *JavaScript
    *React

#  [Contributing](#contributing)
Made with ❤️ by [Edgardo Lopez]

#  [Project Status](#project-status)
This was done in Heroku and Atlas in order to have it functional.  More will be added here in this section to fix a few bugs and tweak out the problems.  This is still in development and hoping to improve.

#  [Disclaimer](#disclaimer)

The project is open for anyone to use.  As stated on the purpose, it's to help out those that are starting in making a portfolio of their own.

#   [Website](#website)

https://book-search-app-server.herokuapp.com/
