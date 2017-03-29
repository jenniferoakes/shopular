# Shopular

This repo is designed for practice using Angular 1 by building a little shop. The first round of tasks is focused on creating a table for inventory items.

The second round of tasks is designed to practice two-way data binding. This assignment will focus on laying a basic understanding of how to bind form inputs to data on a controller's scope and then see any changes in the view. This assignment will also aid in the practice of using directives to initiate actions, and validate form data.

The second round of tasks is designed to practice combining a lot of different peices to build full applications. This assignment will help with practicing creating a Service, a second Controller, and organizing all of the code into a proper application. This assignment will aid with practice of organizing code into separate files and use a Service from within a Controller.

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
- [ ] Put the data to localStorage (for now).
- [ ] Separate the logic for data persistence and UI interactions into Services and Controllers.
- [ ] The owner plans to expand this system. For now he's the only user, but he'd like you to display his name and the login time at the top of the page.
- [ ] Create a Service to handle saving the item data to localStorage.
- [ ] This service only needs three methods: one to get all data, one to save a new item, and one to update all items.
- [ ] Use the "factory" pattern.
- [ ] Use the new service in the controller for your items (instead of our in-controller data from last time).
- [ ] When the page is loaded and the Controller is created, get the data from the Service and put it on the scope.
- [ ] Whenever an item is added, save the data using this new Service.
- [ ] If you allow updating of items (EPIC Mode from last time), use the proper Service method for that.

## Terminal Command Review:
```sh
  sass sass/main.scss style.css

  sass --watch sass/main.scss:style.css
```

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

March 2017
