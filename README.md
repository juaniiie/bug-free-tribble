# Minesweeper

This project is a remake of the classic minesweeper game. It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

This game lends itself to a component based architechture, as is why I chose to user Angular 4 to develop it. Each component holds its individual css, html and test file. I created a component for each major functional area of the game: game, board, row, timer, level selection. I also created a cell class that served as a factory to instantiate each individual cell. The cell class holds properties and methods reflect the actions that a user can perform on a cell.

The components are aware of level changes and game status changes with help from the GameControlsService and GameStateService services. These services are the source of truth for the whole application. They expose behavior subjects to which components subscribe to and receive new information only when a change happens. They also expose methods that components can use to update game properties and trigger the behavior subject broadcasting.

I've included simple tests that check the instantiation of each component.

As for my design decisions, I used a classic version of the game to guide my design because I wanted enough similarities with the layout and functionality that a regular user would not be frustrated if he or she played my game. Besides this approach, I chose a color scheme and design elements that gave the game a modern UX look.

# Table of Contents

1. [Usage](#Usage)
1. [Development Server](#server)
1. [Running Unit Tests](#tests)

## Usage

1. Clone or copy repo

1. Navigate to repo directory

1. Verify that you are running at least node 6.9.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine

1. Install Angular CLI globally: `npm install -g @angular/cli`

1. Install npm packages: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
