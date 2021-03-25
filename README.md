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

## Failure to generate memes
I initally tried to make use of Html2canvas but had no luck in the setup and use of the tool. 

The second time around, the tool was much more successful in managing to snapshot the DOM but it was only returning an empty image.
I am still not sure as to why it would not work, but I come to the conclusion that it was the components and lack of pure html.

Later, with more success, I implemented the use of [*domtoimage*](https://www.npmjs.com/package/dom-to-image) package.
This was allowing much better screenshots of the DOM and I even managed to get some of the elements displaying.
The issue again was that none of the images were being displayed. The screenshot could capture the overlaying text but would not capture the image being displayed nor the thumbnail images being displayed in the list. 
I have left the functionality commented out in the code in the hope that someone would be able to spot a mistake I may have made or at least be able to explain to me as to what I did wrong or why it would not work in the why I set the project up.

## Web Hosting
The app has been hosted on firebase and can be found [here.](https://validusmeme.web.app/)

The main issue that occured whilst trying to host on firebase was that the site was served on an https protocol. This resulted in mixed content errors when trying to fetch from the API which was on an http protocol. The https protocol does not allow for requests to be made to an http API as the link is not seen as secured. 

The result, to get the app working on the hosted site, was to manual upload the data when the site was deployed. This allows for the app to not make any fetch calls and the https mixed content error to not occur.

The app when run locally is served on an http protocol and does not run into any errors. The local host still makes use of the fetch requests which, as mentioned above, are handled by SWR.

## Inital lack of libraries
My first attempt at this was a difficult task in that React was brand new to me and I had no idea about all the libraries at my disposal. After struggling for a while, I found some libraries to make my life easier.

Chakra-UI made styling and componenet control a lot easier for me and make the project a lot neater. 

SWR broke my fetching done to its bare components and allowed me to handle fetch errors in a more streamlined process.

The libraries did end up coming at a cost. Specifically the Chakra-UI, which made taking a screenshot of the DOM impossible to capture the image tags. Fixing this would have completely rearranged my project and I still do not understand the error that was occuring nor how to fix it.
## Styling
The real-time styling of the components, in particular, the overlaying text was very difficult for me. The lack of experience with basic css really hendered my abilites at successfully using CSS-in-JS. I especially struggled with positioning for a while until I managed to get the text to start in the appropriate position.

The next issue, that still aludes me, was correctly styling the text so that the center placement of the text would that starting position. But after many attempts at different ways of trying to position and style the text overlay I had no joy. 

I am certain I have just been making a small styling mistake and that there is not an issue at the root of my component use that did not help me succeed in the correct position and also the optional rotation of the code, given the meme required it.

## Confliciting Sources
Before I started this task I used youtube tutorials, React's documentation and lots of other resources available to me.
There were just too many conflicting ways of doing the same task, which made building on the project a bit more difficult after having tried to learn about all the different functionalites of React.

This is another reason as to why I resarted my project. Initially it was messy and hard to follow, but I took a new approach which helped break everything down into its components and made a much easier to understand project.
## Component Use - "My Biggest *Victory*"
I now am starting to see the power of React and why it is becoming such a sort after skill.

Components and being able to break up my project into such specific pieces whilst keeping the UI and logic highly functional made this much more enjoyable. They allowed me to see where issues were arising and be able to follow the flow to find the breaks.

Towards the end of this project, I felt I had come miles along with the use of components. Somethings are still a bit blury with me, like the use of specific components such as React.Fragments and how, given a key, they can be used to map a collection to an array of fragments. I never got to use it, but I thought it was cool nonetheless.

React.memo is a highly useful refernce tool, it allows for memoization of the previous function and uses the previous calls layout but checks for props that might have changed. They are used when rendering the thumbnails in this project, because the project is so small the performance boost is not even noticed.
