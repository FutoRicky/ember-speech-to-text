
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('speech-to-text', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('properties are being set correctly', function(assert) {
  let component = this.subject();
  this.render();
  let languages=['es', 'en', 'fr', 'it', 'pt'];
  let randIndex = Math.floor(Math.random() * languages.length);
  let randBoolean = Math.random() >= 0.5;
  let randNumber = Math.floor(Math.random());
  component.set('language', languages[randIndex]);
  component.set('continuous', randBoolean);
  component.set('interimResults', randBoolean);
  component.set('maxAlternatives', randNumber);
  component.send('startRecognition');
  assert.equal(languages[randIndex], component.currentSpeechRecognitionSession.lang);
  assert.equal(randBoolean, component.currentSpeechRecognitionSession.continuous);
  assert.equal(randBoolean, component.currentSpeechRecognitionSession.interimResults);
  assert.equal(randNumber, component.currentSpeechRecognitionSession.maxAlternatives);
});
