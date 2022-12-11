const { server } = require("../src/server");

const supertest = require("supertest");

const request = supertest(server);

describe('Person Route', () => {
    // Person Route
    // Method : GET
    // Path: /person
    // Expects a query string from the user with a "name" property
    test('When query string present, output JSON to the client with this shape: { name: "name provided" }', async () => {
        const response = await request.get('/person?name=Neo');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ name: "Neo" });
    });

    test('When query string present with a different name,output JSON to the client with this shape: { name: "name provided" }', async () => {
        const response = await request.get('/person?name=Trinity');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ name: "Trinity"});
    });

    test('Without a name in the query string, force a "500" error', async () => {
        const response = await request.get('/person');
        expect(response.statusCode).toBe(500);
    });
});

describe("bad route test", () => {
    test("should return 404 status code", async () => {
      const response = await request.get("/badroute");
      expect(response.statusCode).toBe(404);
    });
  });