# Full Stack Projects Collection

> ### Status:
- [x] ****Project-1 Travel Bucket List ---****
   - [ ] ****Completed --> Not deployed****
- [ ] ****Project-2 Blockchain Currency Exchange App ----****
    - [ ] ****To first Understand how to make your own cryptocurrency via ERC-20 token standards.****

***

> ### Project-1 : Travel Bucket-list App ‍🧳 ✈️ 🪂 🧗‍♀️ 🎎 🥂

> #### Version-1 First Look
‍💜🚀------‍💜‍----->🚀

<img src="./project_images/ui_first_look_v1_travelBucketList.png">


> #### Features
- GET,POST Entries in the travel bucket list via backend(api).
- Create New Travel Entry via double click on map via Front-end UI Form on the custom map from mapbox.

<img src="./project_images/ui_second_look_v1.2_travelBucketList.png">

***
> #### Updates 1.1
- [x] dropdown with stars for rating.
- [x] red alert div message set up if error occurs while new log entry in the DB.
- [x] automatic description fill(make it readonly prop) with location corresponding to latitude and longitude Coordinates.https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-ap
***

> #### Updates 1.2
- [x] Added Image upload, progress Bar, Image preview client side image upload success and image url grabbed and stored in DB :) !!
- [x] thumbnail(rounded) modified for pop ups travel log on map
- [x] added image moderation for offensive/nude/weapon/drugs or other unacceptable content detected client side.
- [x] wrong filetype,size image upload check client side validation added.
- [x] refactored css a bit to make the pop ups responsive in mobile view.
- [x] App icon updated
- [x] Basic Universal API key for making new travel entries backend verification added
***

==============================================================================

> ##                    DEVELOPER SECTION

===============================================================================

> #### Tech Stack

- [x] Node.js
- [x] Express
- [x] MongoDB
- [x] React & React Hooks
- [x] Mapbox
- [x] Cloudinary
- [x] sightengine

> #### Core dependancies

- [x] express
- [x] cors( Integrate frontend-backend)
- [x] morgan( logger that logs all the incoming requests Debugging purposes)
- [x] helmet (to configure what headers will be sent back as response by our server Security purposes)
- [x] mongoose( object modelling tool for MongoDB)
- [x] body-parser (middleware to parse the request body)
- [x] react-map-gl (to use mapbox maps via accesstoken in react)
- [x] react-hook-form https://react-hook-form.com/
- [ ] multer & multer storage cloudinary to handle multipart/form-data and upload images to cloudinary (backend).

> #### Dev dependancies

- [x] eslint ( identifying and reporting on patterns found in ECMAScript/JavaScript code.) https://www.npmjs.com/package/eslint
- [x] nodemon (restart the server after we make changes)


> #### Blueprint

- [x] Setup server
  -  install dependancies
  -  install /setup linter
  -  setup Express App
  -  setup not found and error middlewares
- [x] model DB
  - what data to store
- [x] setup mongoose
- [x] POST /journey/logs
  -  create a new log entry
- [x] GET /journey/logs
  -  list all log entry
- [x] Setup client
- [x] list all log entries on map
- [x] Setup Double click on any location on map to pop up marker with different color(so that when we actually submit that form that marker changes to normal color) and a form with it in UI for User to just add that log entry instead of specifying latitude & longitude manually via API.
- [x] create form to add a new entry
- [x] setup map sdk
- [x] global API access key to make new travel entry established at backend.
- [ ] Deploy


> ### For Future Versions
> #### Not Implemented Yet , For Version 2 & Extra's that can be added
refer-https://react-hook-form.com/
react-hook form + material ui- https://www.youtube.com/watch?v=PquWexbGcVc


- [ ] UI Improvements

    - [ ] Create & style a nav bar uptop like the firetracker api for starters. https://codepen.io/katydecorah/pen/HEgwl
    - [ ] Text moderation first convert to english then moderate for comments section.
    - [ ] upon moderation fail case of image or text redirect the user to a image offensive page message and block the IP OF the user to restrict accessing the site.
    - [ ] Tag and additional cloudinary functionalities image recoginition https://cloudinary.com/documentation/additional_upload_api_options
    - [ ] Need to reconfigure the upload image routes to cloudinary at backend, currently the upload images via upload preset is successfull on client side.
    - [ ] Starability rating dynamic star selection rather than select.
    - [ ] style the form with bootstrap
    - [ ] flash messages for the UI/UX Logging in ,Signing Up,Log entry created success or error occured. refer books api
    - [ ] set up proper validation with JOI for inputs and all routes edit,delete,signup,login to avoid dummy data,foul language data.
    - [x] image moderation for no nude/voilence/disturbing/raw content.
    https://dashboard.sightengine.com/getstarted
    - [x] wrong filetype/size restrictions client side check done etc.
    - [x] thumbnail via react-bootstrap images rounded.
    - [x] update the favicon icon use a custom or your own icon for page rather than default react app
    - [x] Upload Image via client side DONE with progress bar and url from cloudinary stored in MongoDB.
    - [x] set dropdown with stars for rating refer react-hook-form docs.
    - [x] red alert div message set up if error occurs while new log entry in the DB.
    - [x] automatic title fill(make it readonly prop) with location corresponding to latitude and longitude Coordinates.https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api





***
- [ ] Backend Improvements
   - [ ] Set up Edit route
      - [ ] Backend only
      - [ ] Integrate with frontend
   - [ ] Set up Delete route
      - [ ] Backend only
      - [ ] Integrate with frontend
   - [ ] Add New User Signup/Login and Email verification.(via backend)
      - [ ] User Profile /pic upload https://stackabuse.com/handling-file-uploads-in-node-js-with-expres-and-multer/
   - [ ] Protect the map displaying routes only show it to the logged in user and only allow the user to make a marker if he/she verifies email.
   - [ ] capture IP's of the request made can be done via morgan or refer react-mapbox docs Geolocate control in the API refferences. https://visgl.github.io/react-map-gl/docs/api-reference/geolocate-control
   - [ ] save the morgan generated logs in database or local storage to know who visited kinda security/debugging.
 refer https://www.npmjs.com/package/morgan dual logging in apache format and uuid to each request section.
***

> #### Refactoring  Options

- [ ] mongoose geojson https://mongoosejs.com/docs/geojson.html
& can also refer timestamp 121 geomaps area.

> #### Issues !!
- [ ] image upload via backend not completed yet , the object imagesStringArray gets destroyed when it reaches backend.
- [ ] logentries.map, Operation `logsentries.find()` buffering timed out after 10000ms is not a function sometimes Mongoose throws error buffering timed out need to handle the error to avoid the breaking of the entire application.
- [ ] when user types long string without spaces in textbox the textbox overflows when we view it in pop up.
https://stackoverflow.com/questions/1731190/check-if-a-string-has-white-space
- [ ] Need to address the situation where user type space, tabs etc in the textbox https://stackoverflow.com/questions/1172206/how-to-check-if-a-text-is-all-white-space-characters-in-client-side/1173854
- [x] Multipart boundry not found while sending image in body to backend. Solved: just remove the headers part where u mention content-type:multipart/formData
- [x] Getting Default lat long cordinates details via reverse geocoding even after providing the cordinates of the double click location by the user. Solved: had to make a seperate call to the api and then resolve promise for the async call.
- [x] the textarea Description field is not sending the the autofill data to the DB. solved: passed the location description prop directly to the data that is posted to the DB.
***

===========================================================

> ## Project - 2 Blockchain buy/sell tokens Smart Contract with Client Side Application

Prerequisites:
  - [ ] Must know About ERC-20 token standard and how to code your own cryptocurrency for tutorials/help refer : https://www.dappuniversity.com/articles/code-your-own-cryptocurrency-on-ethereum

timestamp - 27 SC for your own cryptocurrency
===========================================================
> ### First Look
> ### Features
> ### Updates/Versions

============================================================

> ##               DEVELOPER SECTION

============================================================

> ### Tech Stack (NERS)

- [x] Node.js
- [x] Ethereum
- [x] React.js
- [x] Solidity

> ### Token Standard

- [x] ERC-20 TOKEN STANDARD
- [x] SRC : https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md

***
> ### Core Dependencies

- [x] Ganache
- [x] truffle@5.1.14 https://www.npmjs.com/package/truffle
- [x] web3
- [x] Metamask (Browser extension)
- [x] mocha, chai (Testing)
- [x] babel https://babeljs.io/(Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.)
- [x] react-bootstrap (for styles/UI/UX)

***
> ### Blueprint

               Browser ----->   FrontendApp/website------> Blockchain          
                                                      (Nodes,transactions,Data)<----> Smart Contracts/Code(Solidity)
                                  (html+css+js)

- [x] Set up basic boilerplate, project folders, Install dependencies
- [ ] Set Up a Blockchain.
- [ ] Write 2 Smart Contracts
   - [ ] For swapping tokens/exchange
   - [ ] Creating our own token / cryptocurrency
- [ ] Write Tests for Smart Contracts
   - [ ] test for Buy tokens SC
   - [ ] test for Sell tokens SC
- [ ] Build Client Side Appplication/website/webApp
- [ ] Deploy

***
> ### Future Improvements in UI or backend

***

> ### Issues !!
