const axios = require("axios").default;

//In this file you will find 3 different ways to hit APIs with Axiom

//Axios instance allows you to reuse the same configuration across multiple requests.
//Here we set the baseURL
const instance = axios.create({
  baseURL: "https://reqres.in",
});

//In this API call we store the response in a variable to process it later.
async function testGetApiCall() {
  try {
    const response = await instance.get("/api/users/2");
    console.log("Get API Response:", response.data);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

//Following axiom's documentation, here we use a promise based syntax to handle the success but a try catch block to catch the error.
async function testPostApiCall() {
  try {
    await instance
      .post("/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then(function (response) {
        console.log("Post API: ", response.data);
        console.log("Post API: ", response.status);
      });
  } catch (error) {
    console.log("Failed with: ", error.response.status);
  }
}

//This is a bit different and interesting, here we use the request method on with the instance and add some configurations for more detailed API calls.
//We also ditch the try catch block and instead use the promise based syntax.
async function testRequestMethodApiCall() {
  await instance
    .request({
      method: "post",
      url: "/api/users",
      data: {
        name: "John",
        job: "Wick",
      },
    })
    .then(function (response) {
      console.log("Request Method API: ", response.data);
      console.log("Request Method API: ", response.status);
    })
    .catch(function (error) {
      console.log("Failed with: ", error.response.status);
    });
}

module.exports = {
  testGetApiCall,
  testPostApiCall,
  testRequestMethodApiCall,
};
