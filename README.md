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

## A basic counter example

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

By default, **all registered controllers** will automatically have access to StimulusX's reactive features - including [attribute bindings](#️-attribute-bindings) (e.g. class names, `data-` and `aria-` attributes, `hidden` etc), **text content bindings** and **HTML bindings**.

### Explicit controller opt-in

If you **don't want to automatically enable reactivity** for all of you controllers you can instead choose to _opt-in_ to StimulusX features on a controller-by-controller basis.

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

### Binding descriptors

The value of the `data-bind-attr` attribute - `src~lightbox#srcValue` in the example above - is called an **attribute binding descriptor**.

Binding descriptors take the general form `{attribute}~{identifier}#{property}`.

So in the descriptor `src~lightbox#srcValue`:

* `src` is the **HTML attribute** to be added/updated/remove
* `lightbox` is the **controller identifier**
* `srcValue` is the **name of the property** that the attribute value should be bound to

> [!NOTE]
> The **`~`** symbol (_tilde)_ is the delimiter between the attribute name and the controller identifier, just like the way the `->` symbol is used in Stimulus actions.

<!-- Here are some other examples of valid attribute binding descriptors:

```
data-status~workflow#getStatus
open~toggle#openValue
``` -->

> [!TIP]
> In this example the `src` attribute is bound to a Stimulus [value property accessor](https://stimulus.hotwired.dev/reference/values) property (`lightbox#srcValue`). But it doesn't need to be - you can bind to any (public) controller property that you like.

### Binding classes

`class` attribute bindings let you set specific classes on an element based on controller state.

```html
<div data-controller="counter">
  <div data-bind-attr="class~counter#validityClasses">
    ...
  </div>
</div>
```

```js
// controllers/counter_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    count: Number,
  }

  get validityClasses(){
    if (this.countValue > 10) {
      return "text-red font-bold";
    } else {
      return "text-green";
    }
  }
}
```

In the example above, the value of the `validityClasses` property is a string of classes that depends on whether or not the `countValue` is greater than `10`:

* If `countValue > 10` then the element `class` attribute will be set to `"text-red font-bold"`.
* If `countValue < 10` then the element `class` attribute will be set to `"text-green"`.

The list of classes can be returned as a **string** or as an **array** - or as a special [class object](#class-objects).

#### Class objects

If you prefer, you can use a class object syntax to specify the class names. These are objects where the classes are the keys and booleans are the values.

The example above could be rewritten to use a class object as follows:

```js
export default class extends Controller {
  // ...
  get validityClasses(){
    return {
      "text-red font-bold": this.countValue > 10,
      "text-green": this.countValue <= 10,
    }
  }
}
```

The list of class names will be resolved by merging all the class names from keys with a value of `true` and ignoring all the rest.

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

## ⚡️ Text content bindings ⚡️

Text content bindings connect the **`textContent` of an element** to a **controller property**. They are useful when you want to dynamically update text content on the page based on controller state.

Text content bindings are specified using `data-bind-text` attributes where the value is a binding descriptor in the form `{identifier}#{property}`.

```html
<div data-controller="workflow">
  Status: <span data-bind-text="workflow#statusValue"></span>
</div>
```

```js
export default class extends Controller {
  static values = {
    status: {
      type: String,
      default: "in progress"
    }
  }
}
```

## ⚡️ HTML bindings ⚡️

HTML bindings are very similar to [text content bindings](#️-text-content-bindings-️) except they update the element's `innerHTML` instead of `textContent`.

HTML bindings are specified using `data-bind-html` attributes where the value is a binding descriptor in the form `{identifier}#{property}`.

```html
<div data-controller="workflow">
  <div class="status-icon" data-bind-html="workflow#statusIcon"></div>
</div>
```

```js
export default class extends Controller {
  static values = {
    status: {
      type: String,
      default: "in progress"
    }
  }

  get statusIcon(){
    if (this.statusValue === "complete"){
      return `<i data-icon="in-complete"></i>`;
    } else {
      return `<i data-icon="in-progress"></i>`;
    }
  }
}
```

## ⚡️ Binding modifiers ⚡️ 

_Modifiers_ are a convenient way to declaratively transform property values before updating the DOM.

Modifiers are appended to binding descriptors with a `:` prefix:

```html
<h1 data-bind-text="article#titleValue:upcase"></h1>
```

> _More docs coming soon..._

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

## ⚡️ Extending StimulusX ⚡️

> _Docs coming soon..._

## Credits and inspiration

StimulusX uses [VueJS's reactivity engine](https://github.com/vuejs/core/tree/main/packages/reactivity) under the hood and was inspired by (and borrows code from!) the excellent [Alpine.JS](https://alpinejs.dev/directives/bind) library.

## License

StimulusX is available as open source under the terms of the MIT License.