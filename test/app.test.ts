// import supertest request object
import request from "supertest"

import { Response } from "supertest"
// import supertest response type

import app from "../src/app"
// import express application and server
describe("GET /", () => {
    it("should return Hello, World!", async () => {
        // create GET request to root endpoint
        const response: Response = await request(app).get("/");

        // assert that response status is OK, rsponse text is "Hello, world!"
        expect(response.status).toBe(200);
        
        expect(response.text).toBe("Hello, World!");
    });
});

describe("GET /api/v1/health", () =>  {
    it("should return server health status", async() => {
        const response: Response = await request(app).get("/api/v1/health");

        // assert response status ok and health object in JSON format
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body).toHaveProperty("uptime");
        expect(response.body).toHaveProperty("timestamp");
        expect(response.body).toHaveProperty("version");

    })
});