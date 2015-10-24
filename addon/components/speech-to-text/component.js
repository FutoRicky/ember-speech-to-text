/*global webkitSpeechRecognition*/
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  buttonTitle: '',
  speechRecognition: new webkitSpeechRecognition(),
  currentSpeechRecognitionSession: null,
  result: '',

  // PROPERTIES
  language: null,
  continuous: false,
  interimResults: false,
  maxAlternatives: 1,


  onRecognitionEnd: function() {
    this.get('speechRecognition').stop();
  },

  onRecognitionError: function(error) {
    console.log(error);
  },

  onRecognitionResult: function(e) {
    let result= '';
    let resultNo = 0;
    let alternativeNo = 0;

    result = e.results[resultNo][alternativeNo].transcript;
    this.sendAction('getResult', result);
  },

  actions: {
    startRecognition() {
        let speechRecognition = this.speechRecognition;
        // set properties
        speechRecognition.lang = this.get('language');
        speechRecognition.continuous = this.get('continuous');
        speechRecognition.interimResults = this.get('interimResults');
        speechRecognition.maxAlternatives = this.get('maxAlternatives');

        // set events
        speechRecognition.onresult = Ember.run.bind(this, this.onRecognitionResult);
        speechRecognition.onerror = Ember.run.bind(this, this.onRecognitionError);
        speechRecognition.onend = Ember.run.bind(this, this.onRecognitionEnd);
        this.set('currentSpeechRecognitionSession', speechRecognition);
        speechRecognition.start();
    },

    getResult(result) {
      this.sendAction('getResult', result);
    }
  }
});
