const nock = require('nock')
 
const scope = nock('https://api.github.com')
  .get('/repos/atom/atom/license')
  .reply(200, {
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
  })

describe('Fetch static resource', () => {
  it('should contain getJoke() @app-retrieve-static-joke', () => {
    let getJoke;
    try {
      getJoke = appModule.__get__('getJoke');
    } catch (err) {
      assert(getJoke !== undefined, 'Has the `getJoke()` function been added to `app.js`?');
    }
   });

  it('should use getJoke() to retrieve a joke @app-retrieve-static-joke', async () => {
    let getJoke;
    try {
      getJoke = appModule.__get__('getJoke');
      joke = await getJoke();
      expect(joke).not.to.be.null();
    } catch (err) {
      assert(getJoke !== undefined, 'Has the `getJoke()` function been added to `app.js`?');
    }
  });
});