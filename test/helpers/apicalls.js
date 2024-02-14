const axios = require("axios").default;
async function testApiCall() {
  try {
    const response = await axios.get("https://reqres.in/api/users/2");
    // Process the API response as needed
    console.log("API Response:", response.data);
    // return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

module.exports = {
  testApiCall,
};
