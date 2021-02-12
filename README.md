# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.
This presents a custom made Dynamic Table with pagination. Given any type of object it automatically generates the rows and columns of the table,
where the columns represent the keys of the object and the rows its values. A user can add a new row by simply filling the dynamic form and the new row will appear after saving. The table action are delete, edit and show details. The delete action removes the specified row, the edit shows
the dynamic form and updates the values of the row on save and the show details navigates the user to the details component showing all the extra
information about the object. The contact page displays my contact info.



## Components

Dynamic-Form: A reuseable component which generates a form based on the keys and the values of an object (can be improved)
Dialog: A reuseable component which pops up a modal
Details: A reuseable component to display information
Login: A simple login form to display the user login functionality (username: admin, password: admin)
Home: A Dynamic-Table which presents object values

## Services

AuthGuard && LoginService: A simple authguard to mock the canActivate functionality
GlobalService: A reusable service for api calls

## Development server

Run `npm install`
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Login as `admin:admin`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
