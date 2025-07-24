# StimulusX

![NPM Version](https://img.shields.io/npm/v/stimulus-x)
 [![CI](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml)

StimulusX brings the power of **reactive DOM bindings** to [Stimulus](https://stimulus.hotwired.dev) 
controllers.


> [!WARNING]
> This project is very new and has not been heavily battle-tested yet! **Use it with caution.**

---

### 🙋 What are 'reactive DOM bindings'?

Good question! Bindings&hellip;

* &hellip;connect **DOM attributes** (and/or element content) to **Stimulus controller properties** using `data-bind-*` attributes.
* &hellip;are **reactive**, meaning DOM attributes/elements will be **automagically kept in sync** with the value of the properties they are bound to.
* &hellip;are conceptually similar to Stimulus [actions](https://stimulus.hotwired.dev/reference/actions) - but with the  connection between DOM and controller reversed.
  * _`actions` = **DOM changes &rarr; controller**_
  * _`bindings` = **controller changes &rarr; DOM**_
* &hellip;clean up your controllers by **greatly reducing (or even eliminating)** the need for lots of **boring, repetitive DOM manipulation code** everywhere. Woohoo! 🥳

### 🚀 Bindings in action

In the example below:

1. the progress element's `value` attribute is bound to the value of controller's `progressValue` property: `data-bind-attr="value~loader#progressValue"`
2. the `textContent` of the status label element is bound to the value of controller's `status` property: `data-bind-text="loader#status"`.

```js
<figure data-controller="loader">
  <progress data-bind-attr="value~loader#progressValue" max="100"></progress> <!-- [1] -->
  <p>Status: <strong data-bind-text="loader#status"></strong></p> <!-- [2] -->
</figure>
```

```js
// controllers/loader_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    progress: Number
  }
  
  get status(){
    return this.progressValue === 100 ? "finished" : "loading";
  }
}
```

* Any changes to the `loader#progressValue` property (perhaps via an [action](https://stimulus.hotwired.dev/reference/actions)) will **trigger an update** to the progress bar `value` attribute in the DOM.
* Once progress gets to `100` the status displayed in the DOM will be updated to `"finished"` to match the value of the `loader#status` property.
* All DOM updates happen automatically whenever a property (or a computed value) changes. In this example that means taht there there is no need for any direct DOM manipulation code in the controller at all.

## Installation

Add the `stimulus-x` package to your `package.json`:

#### Using NPM:

```
npm i stimulus-x
```

#### Using Yarn:

```
yarn add stimulus-x
```

## Usage

_Docs coming soon&hellip;_

