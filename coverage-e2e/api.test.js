const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');

const app = require('./api');

describe('API Suite test', () => {
  describe('/contact', () => {
    it('should request the contact page and return HTTP status 200', async () => {
      const response = await request(app).get('/contact').expect(200);

      assert.deepStrictEqual(response.text, 'contact us page')
    });


  });

  describe('/hello', () => {
    it('should request an inexistent route /h1 and redirect to /hello', async () => {
      const response = await request(app).get('/h1').expect(200);

      assert.deepStrictEqual(response.text, 'Hello world')
    })
  });

  describe('/login', () => {
    it('should login successfully on the login route and return HTTP status 200', async () => {
      const response = await request(app)
      .post('/login')
      .send({username: 'riltonfranzone', password: '123'})
      .expect(200);

      assert.deepStrictEqual(response.text, 'Successfully signed!')
    });

    it('should fail to sign in when requesting with wrong credentials on the login route and return HTTP status 401', async () => {
      const response = await request(app)
      .post('/login')
      .send({username: 'wrongname', password: '123'})
      .expect(401);

      assert.deepStrictEqual(response.text, 'Failed to sign in')
    });
  });
})