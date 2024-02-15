const axios = require("axios").default;

const instance = axios.create({
  baseURL: "https://reqres.in",
});
async function testApiCall() {
  try {
    const response = await instance.get("/api/users/2");
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

module.exports = {
  testApiCall,
};
