const express = require("express");
const http = require("http");
const axios = require("axios");
const app = express();
const PORT = 5000;

const accessToke =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI0NDIwMDUsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMjBkMmQzMzAtZDIzMy00NGQ3LWEwN2YtMjc4MzQ5ODUyMzNiIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwQjgxQTMzOTMifQ.KtFh9NlXy_vV2z4fUM3y7gwH3D2v03bBxMfxZb_dX-c";

const requestData = {
  companyName: "Train Central",
  clientID: "20d2d330-d233-44d7-a07f-27834985233b",
  clientSecret: "anxGMNCcCdlEBYqx",
  ownerName: "Rubeena Khatun",
  ownerEmail: "skrubeenakhatun@gmail.com",
  rollNo: "20B81A3393",
};
let accessToken = ""; // To store the response token
const sendTokenRequest = async () => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/train/auth",
      requestData
    );
    accessToken = response.data.access_token; // Store the access token
    console.log("Access token:", accessToken);
    setTimeout(sendTokenRequest, 10 * 60 * 1000);
  } catch (error) {
    console.error("Error sending token request:", error);
    setTimeout(sendTokenRequest, 10 * 1000);
  }
};
sendTokenRequest();

app.get("/trains", (req, res) => {
  try {
    const options = {
      hostname: "20.244.56.144",
      path: "http://20.244.56.144/train/trains",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const request = http.request(options, (externalApiResponse) => {
      let data = "";
      externalApiResponse.on("data", (chunk) => {
        data += chunk;
      });

      externalApiResponse.on("end", () => {
        res.json(JSON.parse(data));
      });
    });
    request.on("error", (error) => {
      console.error("Error:", error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    });
    request.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred while fetching data." });
  }
});

app.get("/trains/:param", async (req, res) => {
  const param = req.params.param;
  try {
    const options = {
      hostname: "20.244.56.144",
      path: "http://20.244.56.144/train/trains",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const request = http.request(options, (externalApiResponse) => {
      let data = "";
      externalApiResponse.on("data", (chunk) => {
        data += chunk;
      });
      externalApiResponse.on("end", () => {
        const trains = JSON.parse(data);
        const filteredTrain = trains.find(
          (train) => train.trainNumber === param
        );
        res.json(filteredTrain || { message: "Train not found." });
      });
    });
    request.on("error", (error) => {
      console.error("Error:", error);
      res
        .status(500)
        .json({ message: "An error occurred while fetching data." });
    });
    request.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred while fetching data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
