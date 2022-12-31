A custom React/TS and Ionic based website for the band currently known as Michael the Band

Music for the inclined:
https://open.spotify.com/artist/5QpOB6YSvW4sPyx70sb0SR?si=wyNj7lMLSJysOwsv7rPdDw

Startup Instructions

**_ locally _**

- Building while in the root to project directory
  `npm run build`
- serve the application
  `ionic serve` or `npm run build`
- view the application in browser
  `localhost:8100/`

**_ deploying to the hossting s3 bucket _**

- While authorized to sync with the hosting s3 bucket
  `aws s3 sync build/ s3://michael-the-band`
- View the page
  `http://michael-the-band.s3-website-us-west-2.amazonaws.com/home`

**_ Authored by James Kasinger _**
