describe('Require `fetch`', () => {
  it('should contain requires @app-require-libs', () => {
    let fetch;
    try {
      fetch = appModule.__get__('fetch');
    } catch (err) {
      assert(fetch !== undefined, 'Has the `fetch` module been required in `app.js`?');
    }
  });
});