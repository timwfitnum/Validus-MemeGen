# MemeMaker
## Getting Started:
#### The project has been hosted using firebase and can be found at: https://validusmeme.web.app/
Please read the section on web hosting below for more [information](#web-hosting).
### Initial Setup:
Once you have cloned/downloaded the project. Inside the project root directory run:

`npm -install`  

If this results in an error please try:

`npm install -g npm`  and then try the above step again.

If this fails please visit:
https://docs.npmjs.com/common-errors

## How To Run:
### Assuming the above steps were successfully executed.
If you skipped the above steps, please go back and do them now.
You may encounter errors later on if you don't.

### To run the project:
In the project root directory, in the command line interface, run:
`npm start`

Given no errors occur, you should be redirected to a browser pop-up where the project
is being run.
If you are not redirected, you should find the project running in the browser on http://localhost:3000/

## Task at Hand:
Make a meme generator using **React** as the frontend framework and anything for the backend.
User must be able to select a meme from a list of thumbnails.
Once selected, the high resolution version should be displayed along with the respective text boxes.

### Bonus Points:
* - [x] Handling api error and loading states  
* ~~Use type system like Typescript or Flow~~
* ~~As much test coverage as you can manage~~
* ~~Use any state management system over Reacts component state, e.g. Redux, RxJS or Apollo.~~
* - [x] Host your web app

# Implementation
## Libraries
The libraries used beyond the react framework:
1. Chakra UI found here: https://chakra-ui.com/
2. SWR found here: https://swr.vercel.app/

## Structure:
### Components:
* Memes - contains a single index.js file to handle the exports of the following:
  * Item - Handles the specific meme data, sets the thumbnail display as a button.
  * List - Handles all the memes, sorts the memes and displays them in a column by returning them in a stack component.
* TextOverlay - contains a single index.js file to handle the exports of the following:.
  * Item - Handles the specific textblock location and styling as well as the input text (as a child) passed from the List.
  * List - Calculates the location to pass to the textbox item as well as the specific text it should return.
 ### Data:
Data retrieval is hanlded in the folder data.
It consists of the following structure:
* data
  * api - constructs the axios http request
  * fetcher - executes the axios request constructed in api.js.
  * useMemes - hook manager to extract array of memes from the JSON object return from fetcher and itself then returns this meme array.

### App:
The application makes use of useStates to store and set the selected  meme and its respective text blocks.

I have used SWR to handle the fetching of data, it stores the data, any error message that occurs and a mutation function. The mutation function allows the user to fetch the data again when an error occurs trying to fetch the data.

All the display is produced in the App.js return. 

Numerous Boxes (imported from Chakra-UI) has been used to house all the components.

The image is then housed inside a box along with the text to display over the image. 

The TextOverLayList component handles the display and creation of all the text to be displayed over the image.

For each text block available the OverLayList creates a Text Item. This item is fed the position and style of where to be displayed. The OverlayList also passes the text to be displayed to the Item by passing it as a children prop as the item does not its child prop until it has been inputted in the text box.

Memelist is used to display all the memes retrieved from the API. It also allows the user to select available thumbnails to create memes out of. The MemeList handles passing the selected meme to the MemeItem component which is then renders as an Image in the -Image component.

Stack (imported from Chakra-UI) was an element used to position the memes list as well as the text boxes in a simple and neat manner.

The code for the project itself has been broken up into many different components, each with their own respective functionality and importance. Please read below on [Componenets](#component-use---my-biggest-victory) for more information.

# Struggles 
#### (More of a personal note - but please feel free to read)
## Web Hosting

## Inital lack of libraries

## Styling

## Confliciting Sources

## Component Use - "My Biggest *Victory*"
