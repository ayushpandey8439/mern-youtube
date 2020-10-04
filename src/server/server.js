const compression = require("compression");
const express = require("express");
const path = require("path");
const { google } = require("googleapis");

const app = express();
// Gives constant name to long directory home page.
const appPage = path.join(__dirname, "../../public/index.html");
const testdata = path.join(__dirname, "./testdata.json");

const youtube = google.youtube({
  version: "v3",
  auth: "AIzaSyDCQZ0uhFI9LAR-gMqJro3f9qUOYaPyxag",
});

// Compresses App
app.use(compression());
app.disable("etag");
// Allows the use of files.
app.use(express.static(__dirname + "./../../"));

// SERVES STATIC HOMEPAGE at '/' URL
app.get("/", function (req, res) {
  res.sendFile(appPage);
});

app.get("/videos", function (req, res) {
  /*let search = youtube.videos.list(
    {
      part: ["snippet,contentDetails,statistics"],
      chart: "mostPopular",
      regionCode: "US",
    },
    (error, response) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(response);
      }
    }
  );*/
  res.status(200).sendFile(testdata);
});

// Port Setting
app.listen(3000, () =>
  console.log(
    'Running on Port 3000... Do not forget to run "npm run dev" in another terminal!'
  )
);
