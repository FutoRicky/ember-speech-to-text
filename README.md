# Ember-speech-to-text 

Speech to text addon for Ember.js using google's webkitspeechrecognition api.

[![Build Status](https://travis-ci.org/FutoRicky/ember-speech-to-text.svg)](https://travis-ci.org/FutoRicky/ember-speech-to-text)

[DEMO](http://futoricky.github.io/ember-speech-to-text/)

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
