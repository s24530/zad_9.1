const axios = require("axios");
const baseURL = "http://my-express-app-container:3000";

describe("API tests for cars", () => {
  it("should fetch all cars", async () => {
    const response = await axios.get(`${baseURL}/cars`);
    expect(response.status).toBe(200);
    expect(response.data.length).toBe(5);
  });

  it("should fetch the first car", async () => {
    const response = await axios.get(`${baseURL}/cars/1`);
    expect(response.status).toBe(200);
    expect(response.data.brand).toBe("Toyota");
    expect(response.data.year).toBe(2018);
  });

  it("should calculate the average year", async () => {
    const response = await axios.get(`${baseURL}/average_year`);
    expect(response.status).toBe(200);
    const avgYear = parseFloat(response.data.average);
    const expectedAvgYear = (2018 + 2019 + 2020 + 2017 + 2021) / 5;
    expect(avgYear).toBeCloseTo(expectedAvgYear);
  });
});
