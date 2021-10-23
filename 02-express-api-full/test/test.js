const request = require("supertest");
const expect = require("chai").expect;
const { app } = require("../index");

describe("GET /", function () {
  it("responds with a fixed string", function (done) {
    request(app).get("/").expect(200, done);
  });
});

describe("GET /hello", function () {
  it("responds with a custom hello message", function (done) {
    request(app).get("/hello/Alessandro").expect(
      200,
      {
        msg: "Hello Alessandro",
      },
      done
    );
  });
  it("responds keeping the case", function (done) {
    request(app)
      .get("/hello/alessandro")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.msg).to.be.equal("Hello alessandro");
        return done();
      });
  });
});

describe("GET /events", function () {
  it("responds with a list of events", function (done) {
    request(app)
      .get("/events")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body)
          .to.be.an("array")
          .to.deep.includes({ name: "Cometocode 2021" });
        return done();
      });
  });
});
