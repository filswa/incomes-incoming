# Incomes incoming!

Incomes incoming is a simple web app created for displaying data about companies and their incomes in a table format. It is built using React.js, HTML, CSS, axios library for fetching data, normalize.css for css normalization (duh) and prettier to make the code look pretty

For the sake of clarity, the following sections of this documentation contain a brief commentary on the components used in the application

## Installing & running

### Prerequisites

- git
- node.js
- browser (IE not supported:))

### Download & install
please execute the following steps:

`git clone git@github.com:filswa/incomes-incoming.git`

`cd incomes-incoming/`

`npm install`

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design details

The app was implemented following React "mixed" smart/dumb components design pattern. Mixed means, that some presentational components use useState hook to store local state

### Components

**\<FilterableIncomeTable/>**

Main app component, responsible for fetching & partial processing of data, filtering logic and rendering sub-components

**\<Loader/>**

Responsible for spinning the circles on the loading screen :)

Credit - [Tobias Ahlin](https://tobiasahlin.com/spinkit/)

**\<Searchbar/>**

Simple input component, used to collect input data from the user

**\<MainTable/>**

Table container component, responsible for rendering the table and hooking in the sorting & pagination logic

**\<TableBody/>**

Simple component, responsible for displaying table content from received props

**\<Pagination/>**

Component responsible for calculating pages and displaying pagination section

**useSortData**

useSortableData hook is responsible for providing sorting logic. it accepts the items, and an optional initial sort state. It returns an object with the sorted items, and a function to re-sort the items.

**util/Income.js**

A module responsible for calculating income values. Used in combination with data fetch.

**Responsivity**

The app was made responsive by using simple flexbox container with flex-direction: column. It should respond well with devices using width ~500px and above. Any widths below might require scrolling and/or zooming and should still be usable.

### Afterword

If you have any questions regarding the app, code, or design decisions, please feel free to contact me. I would also appreciate constructive feedback from you, as well as tips on what could be done different/better. 

Many thanks!
