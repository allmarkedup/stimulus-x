<center>

# StimulusX 

**⚡️ Reactivity engine for Stimulus controllers ⚡️**

![NPM Version](https://img.shields.io/npm/v/stimulus-x)
 [![CI](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml)

</center>

---

_StimulusX_ brings the power of **reactive programming** to [Stimulus](https://stimulus.hotwired.dev), greatly reducing the need for tedious DOM manipulation code and making your controllers cleaner, leaner and easier to understand.

### Features:

#### ⚡️ Live DOM bindings ⚡️ 

* Connect **HTML attributes** (and content) to **controller properties** using `data-bind-*` attributes
* _Reactive_ bindings - so DOM attributes/elements will be **automagically kept in sync** with the value of the properties they are bound to
* Uses a declarative syntax based on Stimulus [action descriptors](https://stimulus.hotwired.dev/reference/actions)

#### ⚡️ Property watchers ⚡️

* **Watch any controller property** for changes
* `[name]PropertyChanged` callback methods for all watched properties

#### ⚡️ Extensibility ⚡️

* Straighforward **extension API**
* Add custom **modifiers** and **directives**

### Example: counter controller 

[View this example on JSfiddle &rarr;](https://jsfiddle.net/2nyLrahu/)

```html
<div data-controller="counter">
  <div data-bind-attr="class~counter#validityClasses">
    <span id="count" data-bind-text="counter#countValue"></span> of 
    <span id="max" data-bind-text="counter#maxValue"></span>
  </div>

  <button data-action="counter#increment">+</button>
  <button data-action="counter#decrement">-</button>
</div>
```

```js
// controllers/counter_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    count: Number,
    max: {
      type: Number,
      default: 5
    }
  }
  
  get validityClasses(){
    const valid = this.countValue <= this.maxValue;
    return {
      "invalid bold": !valid,
      "valid": valid,
    }
  }

  increment(){
    this.countValue++;
  }

  decrement(){
    this.countValue--;
  }
}
```

---

> [!WARNING]
> _This project is very new. The API may still change and it has not been throughly battle-tested yet. Use with caution!_ 

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

StimulusX hooks into your Stimulus application instance via the `StimulusX.extend` method:

```js
import { Application, Controller } from "@hotwired/stimulus";
import StimulusX from "stimulus-x";

window.Stimulus = Application.start();
StimulusX.extend(window.Stimulus);

window.Stimulus.register("example", ExampleController);

// ...
```

> [!IMPORTANT]
> You must call the `StimulusX.extend` method _before_ registering any controllers or they will not be made reactive.

Controllers are created as usual, but they can now make use of StimulusX's reactive features - including [attribute bindings](#️-attribute-bindings) (e.g. class names, `data-` and `aria-` attributes, `hidden` etc), **text content bindings** and **HTML bindings**.

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

```html
<div data-controller="loader">
  <progress data-bind-attr="value~loader#progressValue" max="100"></progress>
  <p>Status: <strong data-bind-text="loader#status"></strong></p>
</div>
```

## ⚡️ HTML attribute bindings ⚡️ 

Attribute bindings connect **HTML attribute values** to **controller properties**.

They are specified declaratively in your HTML using `data-bind-attr` attributes and use a similar syntax to Stimulus [action descriptors](https://stimulus.hotwired.dev/reference/actions#descriptors).

```html
<div data-controller="lightbox">
  <img data-bind-attr="src~lightbox#srcValue">
</div>
```

```js
class LightboxController extends Controller {
  static values = {
    src: {
      type: String,
      default: "https://placeholder.com/kittens.jpg"
    }
  }
}
```

In the example above, the image `src` attribute will initially be set to the default value of the `srcValue` property (i.e. `https://placeholder.com/kittens.jpg`).

Whenever the `srcValue` property is changed, the image `src` attribute value in the DOM will be automatically updated to reflect the new value.

```js
this.srcValue = "https://kittens.com/daily-kitten.jpg"

// <img src="https://kittens.com/daily-kitten.jpg">
```

### Descriptors

The `data-bind-attr` value `src~lightbox#srcValue` is called a _binding descriptor_. In this descriptor:

* `src` is the DOM attribute to be updated
* `lightbox` is the controller identifier
* `srcValue` is the name of the property that the attribute value should be bound to

> [!TIP]
> In this example the `src` attribute is bound to a Stimulus [Value property accessor](https://stimulus.hotwired.dev/reference/values) property (`lightbox#srcValue`). But it doesn't need to be - you can bind to any (public) controller property that you like!

### Binding class names 

> _Docs coming soon&hellip;_

### Boolean attributes

> _Docs coming soon&hellip;_

### Using modifiers

> _Docs coming soon&hellip;_

## ⚡️ Text content bindings ⚡️

> _Docs coming soon&hellip;_

## ⚡️ HTML bindings ⚡️

> _Docs coming soon&hellip;_

## ⚡️ Watching properties ⚡️

> _Docs coming soon&hellip;_