# Ember-speech-to-text
[ ![Codeship Status for FutoRicky/ember-speech-to-text](https://codeship.com/projects/f86b6890-5e4a-0133-752d-3e5166c5ae1c/status?branch=master)](https://codeship.com/projects/111352)

Speech to text addon for Ember.js using google's webkitspeechrecognition api.

## Installation

`ember install ember-speech-to-text`

## Usage

*This addon will only work on chrome browsers!*

To init the component:

Example:
`{{speech-to-text language='es' getResult='getResult'}}`

## Properties

* `language` (default is english): Value must be the language's abbreviation.
* `continuous`: Boolean value.
* `interimResults`: Boolean value.
* `maxAlternatives`: Integer value.
* `buttonTitle`: Button's text.
* `buttonClass`: Button's styling class.

## Events

* `onRecognitionEnd`: Triggers when the speech recognition ends.
* `onRecognitionError`: Triggers when the speech recognition errors.
* `onRecognitionResult`: Triggers when the speech recognition gets a result. Do not alter this function unless you know what you are doing. If you want to do something with the result, declare an action called `getResult` and assign it to the component.
  * Example:

  `app/controllers/example.js`:

  ```
  actions: {
    getResults(result) {
      //Do something with result.
  }
  ```

  `app/templates/example.hbs`:

  ```
  {{speech-to-text getResults='getResults'}}
  ```

## Contributions

Please make all Pull Requests to the `dev` branch. All contributions are welcomed.

***

*For more info about the webkitspeechrecognition api, please visit [Web Speech Api Specification](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)*
