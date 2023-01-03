const request = require("supertest");
const app = require("../app");

// login user
let cookie;
let bearerToken;
let token;

beforeAll(async () => {
    const res = await request(app)
        .post("/users/login")
        .send({
            email: "john.doe@outlook.com",
            password: "123456",
        });
    cookie = res.headers["set-cookie"];
    // token = cookie without the "token=" part (cookie.split("=")[1]) and without the "; HttpOnly" part (cookie.split("=")[1].split(";")[0])
    token = cookie[0].split(";")[0];
    bearerToken = "Bearer " + cookie[0].split("=")[1].split(";")[0];
    console.log(bearerToken);
    console.log(token);
});

// get films with the cookie
describe("GET /films", () => {
    test("should return 200", async () => {
        const res = await request(app)
            .get("/films")
            .set("Authorization", `Bearer ${token}`)
            .set("Cookie", token);
        expect(res.statusCode).toEqual(200);
    });

    test("should return 401", async () => {
        const res = await request(app)
            .get("/films");
        expect(res.statusCode).toEqual(401);
    });
});