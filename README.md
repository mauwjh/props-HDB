# Props-HDB
Props-HDB is an application built using ReactJS that compiles historical resale HDB property transactions and breaks it down into graphs using data visualisation components.

## About
The objective of this application is to provide users with an overview of historical price trends for HDBs across HDB towns and allow users to make educated decisions on potential HDB transactions. 

## Technologies
* This site was created using ReactJS

* Autocomplete: react-places-autocomplete
* Maps: react-google-maps
* Tables: material-table
* Styling: Material-UI
* Graphs: nivo

* HDB resale price data from data.gov.sg API
* Geocoding and maps from Google API

## APIs
https://data.gov.sg/dataset/resale-flat-prices (For transaction data)
https://developers.google.com/maps/documentation/javascript/overview (For geocoding and autocomplete)

## User Story
1) User will be able to see summary statistics of recent HDB transactions and overall price trends via the landing page
2) User will be able to click on the Search button in the navbar to link to the search component
3) Within the search component, the user will be able to search for HDB transactions
4) The user will be able to double click on each transaction to view more information about the property such as floor range, square area, flat model, and location on the map (map geotagging is a bonus)

## Wireframes
Search Component
![plot](images/SearchComponent.jpg)

Transaction Component
![plot](images/TransactionComponent.jpg)
