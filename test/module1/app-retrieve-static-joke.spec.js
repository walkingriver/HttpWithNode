const nock = require('nock')
const url = 'https://api.chucknorris.io';
const sampleJoke = { "categories": [], "created_at": "2020-01-05 13:42:22.701402", "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", "id": "7F7uREb_TfeF9jnGKqzyQg", "updated_at": "2020-01-05 13:42:22.701402", "url": "https://api.chucknorris.io/jokes/7F7uREb_TfeF9jnGKqzyQg", "value": "Chuck Norris can speak French in Russian" };

const scope = nock(url)
  .get('/jokes/random')
  .reply(200, {
    json: () => {
      sampleJoke
    }
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
    let joke;
    try {
      const getJoke = appModule.__get__('getJoke');
      joke = await getJoke();
      console.log(joke);
    } catch (err) {
      console.log(err);
    }
    expect(joke).not.to.be.undefined;
  });

  it('should contain decodeJoke() @app-retrieve-static-joke', () => {
    try {
      decodeJoke = appModule.__get__('decodeJoke');
    } catch (err) {
      assert(decodeJoke !== undefined, 'Has the `decodeJoke()` been added to app.js?');
    }
  });

  it('should retrieve joke text from getJoke() call @app-retrieve-static-joke', () => {
    decodeJoke = appModule.__get__('decodeJoke');
    const joke = decodeJoke(sampleJoke);
    expect(joke).to.equal(sampleJoke.value);
  });
});