# Shopular

This repo is designed for practice using Angular 1 by building a little shop. The first round of tasks is focused on creating a table for inventory items. The second round of tasks is designed to practice two-way data binding. This assignment will focus on laying a basic understanding of how to bind form inputs to data on a controller's scope and then see any changes in the view. This assignment will also aid in the practice of using directives to initiate actions, and validate form data.

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
- [X] Allow a user to click on a table header and sort by: name, quantity, or price by using this [link](https://scotch.io/tutorials/sort-and-filter-a-table-using-angular)

## Terminal Command Review:
```sh
  sass sass/main.scss style.css

  sass --watch sass/main.scss:style.css
```

By: [Jennifer Oakes](https://www.linkedin.com/in/jennifernicoleoakes/)

March 2017
