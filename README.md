# Television
Raspberry PI TV Display

This project creates a React website which will display differant art depending on the hour, or the user's current
Spotify song if they have logged in.

Spotify's Authorization Code Flow is used to update the user's access tokens, so they do not expire after an hour.

Running this program requires my Client Secret in a sec.js file to be in my-app/src with the following format:

### export const CLIENT_SECRET = '<Client Secret>';

Or, the user may create their own app at developer.spotify.com, with the redirect uri set as http://localhost:3000.
If this is done, alter the CLIENT_ID constant in Television.js

Art used in this project can be found here

### https://anasabdin.tumblr.com/

If the user would like to change the art used, they can replace the files in my-app/src/images. Images are named
based upon the hour they appear. Further edits can be made in Image.js to change imports.

This application is intended for use on a Standard Definition television with a Raspberry PI. It may not work
for you as intended. Image size adjustments can be made in Television.css, as well as Image.css if necessary.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
