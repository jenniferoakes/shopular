# Shopular

This repo is designed for practice using Angular 1 by building a little shop. The first round of tasks is focused on creating a table for inventory items.

The second round of tasks is designed to practice two-way data binding. This assignment will focus on laying a basic understanding of how to bind form inputs to data on a controller's scope and then see any changes in the view. This assignment will also aid in the practice of using directives to initiate actions, and validate form data.

The third round of tasks is designed to practice combining a lot of different pieces to build full applications. This assignment will help with practicing creating a Service, a second Controller, and organizing all of the code into a proper application. This assignment will aid with practice of organizing code into separate files and use a Service from within a Controller.

The fourth round of tasks is designed to help with practicing testing Angular and seeing code coverage results. The goal is to set up testing of Angular applications and write tests for controllers and services.

## First Round of Tasks
- [X] Create an interface to edit the inventory.
- [X] Create all of the pieces of this application (HTML, Sass, JS).
- [X] Create one Angular module and controller.
- [X] Bootstrap your module to the <html> tag.
- [X] Bind your controller to an element in the HTML document.
- [X] Make the controller have a tax property on its scope set to 5.75%.
- [X] Display a table of the item data from the controller's scope.
- [X] Place the data linked above in your controller.
- [X] Only display the name, price, quantity and color.
- [X] Make sure the price includes tax and any discount! (Discounts are in dollars, not percent.)
- [X] If the item has a discount, show this icon next to the price: discount icon
- [X] Add zebra striped rows and centered in the page with 80% width.

## Second Round of Tasks
- [X] Create a form to add a new item.
- [X] The owner must provide the name, price, quantity, color, and discount.
- [X] Use Angular directives to bind the data to the controller (use a newItem object on the scope).
- [X] Validate the data using angular, highlight any invalid fields in red.
- [X] On form submission, add the item to the data (and hence UI) if all fields are valid.
- [X] Allow default sorting by price (lowest at the top).
- [X] Allow a user to click on a table header and sort by: name, quantity, or price by using this [reference link](https://scotch.io/tutorials/sort-and-filter-a-table-using-angular)

## Third Round of Tasks
- [X] Put the data to localStorage (for now).
- [X] Separate the logic for data persistence and UI interactions into Services and Controllers.
- [ ] The owner plans to expand this system. For now he's the only user, but he'd like you to display his name and the login time at the top of the page.
- [X] Create a Service to handle saving the item data to localStorage.
- [X] This service only needs three methods: one to get all data, one to save a new item, and one to update all items.
- [X] Use the "factory" pattern.
- [X] Use the new service in the controller for your items (instead of our in-controller data from last time).
- [X] When the page is loaded and the Controller is created, get the data from the Service and put it on the scope.
- [X] Whenever an item is added, save the data using this new Service.

## Fourth Round of Tasks
- [ ] Set up testing using our Grunt build with Karma and Mocha.
- [ ] Add grunt-bable task (Babel transpiles code to ES5).
- [ ] Create a build directory with a copy task for html file, a clean task, jshint, test with karma, and sass.
- [ ] Write tests for all controllers and services with a separate spec file for each.
- [ ] You need must have code coverage being reported in the grunt build.
- [ ] You do NOT have to have 100% coverage, you must have at least 50% coverage of all branches.
- [ ] Get 100% code coverage.
- [ ] Install babel.

## Terminal Command Review:
```sh
  sass sass/main.scss style.css

  sass --watch sass/main.scss:style.css

  npm init
  npm install --save-dev grunt karma mocha chai karma-mocha karma-chai grunt-karma karma-chrome-launcher
  npm i --save angular
  npm i --save-dev angular-mocks

  npm install --save-dev grunt-babel babel-preset-es2015
  npm install --save-dev grunt-contrib-concat
  npm install --save-dev karma-coverage

```

## Notes for npm install
- Test: "grunt karma"
- Main: "build/js/inventory.module.js"

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

March 2017
