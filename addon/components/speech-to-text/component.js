/*global webkitSpeechRecognition*/
import Ember from 'ember';
import layout from './template';
const {
  Component,
  run
} = Ember;

export default Component.extend({
  layout: layout,
  buttonTitle: '',
  speechRecognition: new webkitSpeechRecognition(),
  currentSpeechRecognitionSession: null,
  result: null,

  // PROPERTIES
  language: null,
  continuous: false,
  interimResults: false,
  maxAlternatives: 1,
  isRecording: false,

  onRecognitionEnd() {
    this.get('speechRecognition').stop();
    this.set('isRecording', false);
  },

  onRecognitionError(error) {
    console.log(error);
    this.set('isRecording', false);
  },

  onRecognitionResult(e) {
    let result= '';
    const resultNo = 0;
    const alternativeNo = 0;

    result = e.results[resultNo][alternativeNo].transcript;
    this.set('result', result);
    if (this.get('onResult')) {
      this.sendAction('onResult', result);
    }
  },

  startRecognition(){
    let speechRecognition = this.speechRecognition;
    // set properties
    speechRecognition.lang = this.get('language');
    speechRecognition.continuous = this.get('continuous');
    speechRecognition.interimResults = this.get('interimResults');
    speechRecognition.maxAlternatives = this.get('maxAlternatives');

    // set events
    speechRecognition.onresult = run.bind(this, this.onRecognitionResult);
    speechRecognition.onerror = run.bind(this, this.onRecognitionError);
    speechRecognition.onend = run.bind(this, this.onRecognitionEnd);
    this.set('currentSpeechRecognitionSession', speechRecognition);
    this.set('isRecording', true);
    speechRecognition.start();
  },

  click(){
    if (this.get('hasBlock')) {
      if (this.get('isRecording')) {
        this.onRecognitionEnd();
      } else {
        this.startRecognition();
      }
    }
  },

  actions: {
    startRecognition(){
      this.startRecognition();
    }
  }
});
