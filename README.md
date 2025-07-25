<center>

# StimulusX 

**⚡️ Reactivity engine for Stimulus controllers ⚡️**

![NPM Version](https://img.shields.io/npm/v/stimulus-x)
 [![CI](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml)

</center>

---

_StimulusX_ brings the power of **reactive programming** to [Stimulus](https://stimulus.hotwired.dev), greatly reducing the amount of tedious DOM manipulation code required and making your controllers cleaner, leaner and more flexible.

### Features

#### ✅ Automatic UI updates with reactive DOM bindings

* Connect **HTML attributes** (and content) to **controller properties** using `data-bind-*` attributes in your markup
* HTML attributes/content will **automatically be kept in sync** with the value of the properties they are bound to via the magic of reactive data bindings
* **Declarative syntax** - specify bindings in a similar way to Stimulus [action descriptors](https://stimulus.hotwired.dev/reference/actions)
* Chainable **binding modifiers** for easy property value transformations

#### ✅ Property watchers

* **Watch any controller property** for changes
* `[name]PropertyChanged` **callback methods** available for all watched properties

#### ✅ Extensibility

* Straighforward **extension API**
* Add custom **modifiers** and **directives**

### What it looks like

Below is an example of a simple `counter` controller implemented using StimulusX's reactive DOM bindings.

<img src=".github/assets/counter.gif" width="120">

> [!TIP]
> You can [play around with this example on JSfiddle &rarr;](https://jsfiddle.net/allmarkedup/q293ay8v/)

```html
<div data-controller="counter">
  <div
    data-bind-attr="class~counter#validityClasses"
    data-bind-text="counter#displayText"
    class="display">
  </div>

  <button data-action="counter#increment">⬆️</button>
  <button data-action="counter#decrement">⬇️</button>
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

  get displayText(){
    return `${this.countValue} of ${this.maxValue}`;
  }
  
  get validityClasses(){
    const valid = this.countValue <= this.maxValue;
    return {
      "text-green": valid,
      "text-red font-bold": !valid,
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

StimulusX hooks into your Stimulus application instance via the `StimulusX.init` method.

```js
import { Application, Controller } from "@hotwired/stimulus";
import StimulusX from "stimulus-x";

window.Stimulus = Application.start();

// You must call the `StimulusX.init` method _before_ registering any controllers.
StimulusX.init(Stimulus); 

// Register controllers as usual...
Stimulus.register("example", ExampleController);
```

Once initialized, **all registered controllers** will automatically have access to StimulusX's reactive features - including [attribute bindings](#️-attribute-bindings) (e.g. class names, `data-` and `aria-` attributes, `hidden` etc), **text content bindings** and **HTML bindings**.

### Explicit controller opt-in

If you don't want to automatically enable reactivity for **all** of you controllers you can instead choose to opt in to StimulusX features on a controller-by-controller basis.

To enable individual controller opt-in pass `optIn: true` as an option when initializing StimulusX:

```js
StimulusX.init(Stimulus, { optIn: true }); 
```

To enable reactive features for a controller, set the `static reactive` variable to `true` in the controller class:

```js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static reactive = true; // enable StimulusX reactive features for this controller
  // ...
}
```



<!-- ```js
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
``` -->

## ⚡️ HTML attribute bindings ⚡️ 

Attribute bindings connect **HTML attribute values** to **controller properties**.

They are specified declaratively in your HTML using `data-bind-attr` attributes and use a similar syntax to Stimulus [action descriptors](https://stimulus.hotwired.dev/reference/actions#descriptors).

```html
<div data-controller="lightbox">
  <img data-bind-attr="src~lightbox#srcValue">
</div>
```

```js
export default class extends Controller {
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
> In this example the `src` attribute is bound to a Stimulus [value property accessor](https://stimulus.hotwired.dev/reference/values) property (`lightbox#srcValue`). But it doesn't need to be - you can bind to any (public) controller property that you like.

### Class attribute

> _Docs coming soon&hellip;_

### Boolean attributes

[Boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) such as `checked`, `disabled`, `open` etc will be _added_ if the value of the property they are bound to is `true`, and _removed completely_ when it is `false`.

```html
<div data-controller="example">
  <button data-bind-attr="disabled~example#disabledValue">submit</button>
</div>
```

```js
export default class extends Controller {
  static values = {
    disabled: Boolean
  }
}
```

### Using modifiers

> _Docs coming soon&hellip;_

## ⚡️ Text content bindings ⚡️

> _Docs coming soon&hellip;_

## ⚡️ HTML bindings ⚡️

> _Docs coming soon&hellip;_

## ⚡️ Watching properties for changes ⚡️

```js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static watch = ["enabled", "userInput"];

  connect(){
    this.enabled = false;
    this.userInput = "";
  }

  enabledPropertyChanged(currentValue, previousValue){
    if (currentValue) {
      console.log("Controller is enabled");
    } else {
      console.log("Controller has been disabled");
    }
  }

  userInputPropertyChanged(currentValue, previousValue){
    console.log(`User input has changed from "${previousValue}" to "${currentValue}"`);
  }

  // ...
}
```
