import Ember from 'ember';

export default Ember.Controller.extend({

  result: null,
  buttonTitle: 'Test Me',
  synthesisText: null,
  language: null,
  languages: [
    {
      full: 'english',
      short: 'en'
    },
    {
      full: 'español',
      short: 'es'
    },
    {
      full: 'italiano',
      short: 'italiano'
    },
    {
      full: 'français',
      short: 'fr'
    },
    {
      full: '日本語',
      short: 'ja'
    },
    {
      full: 'português',
      short: 'pt'
    }
  ],

  actions: {
    getResult(result) {
      this.set('result', result);
    },
    selectLanguage(language) {
      this.set('language', language);
    }
  }
});
