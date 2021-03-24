# MemeMaker
## Getting Started:
### Initial Setup:
Once you have cloned/downloaded the project. Inside the project root directory run:

`npm -install`  

If this results in an error please try:

`npm install -g npm`  and then try the above step again

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
If you are not redirect, you should find the project running on http://localhost:3000/

## Task at Hand:
Make a meme generator using **React** as the frontend framework and anything for the backend.
User must be able to select a meme from a list of thumbnails.
Once selected, the high resolution version should be displayed along with the respective text boxes.


# Implementation
## Libraries
The libraries used beyond the react framework:
1. Chakra UI found here: https://chakra-ui.com/
2. SWR found here: https://swr.vercel.app/

## Structure:
### Components:
* Memes - contains a single index.js file to handle the exports of the following:
  * Item - Handles the specific meme data, sets the thumbnail display as a button
  * List - Handles all the memes, sorts the memes and displays them in a column by returning them in a stack component
* TextOverlay - contains a single index.js file to handle the exports of the following:
  * Item - Handles the specific textblock location and styling as well as the input text (as a child) passed from the List
  * List - Calculates the location to pass to the textbox item as well as the specific text it should return
 ### Data:
Data retrieval is hanlded in the folder data.
It consists of the following structure:
* data
 * api - constructs the axios http request
 * fetcher - executes the axios request constructed in api.js
 * useMemes - hook manager to extract array of memes from the JSON object return from fetcher and itself then returns this meme array

### App

Fetched JSON array of objects (memes) from a REST API.
Each array element(meme) contains their respective images and styling.  

