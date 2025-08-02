<div align="center">

<img src=".github/assets/logo.png" width="250">
 
_Reactivity engine for Stimulus controllers_
<br>

![NPM Version](https://img.shields.io/npm/v/stimulus-x)
 [![CI](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/allmarkedup/stimulus-x/actions/workflows/ci.yml)

</div>

---

_StimulusX_ brings modern **reactive programming paradigms** to [Stimulus](https://stimulus.hotwired.dev) controllers.

**Features include:**

❎ &nbsp;Automatic UI updates with reactive DOM bindings<br>
❎ &nbsp;Declarative binding syntax based on Stimulus' [action descriptors](https://stimulus.hotwired.dev/reference/actions#descriptors)<br>
❎ &nbsp;Chainable value modifiers <br>
❎ &nbsp;Property watcher callback <br>
❎ &nbsp;Extension API
<br>
<br>
**Who is StimulusX for?**

If you are a Stimulus user and are tired of writing repetitive DOM manipulation code then StimulusX's declarative, live-updating **controller&rarr;HTML bindings** might be just what you need to brighten up your day. _StimulusX_ will make your controllers cleaner & leaner whilst ensuring they are less tightly coupled to a specific markup structure.

However if you are _not_ currently a Stimulus user then I'd definitely recommend looking at something like [Alpine](https://alpinejs.dev), [VueJS](https://vuejs.org/) or [Svelte](https://svelte.dev/) first before considering a `Stimulus + StimulusX` combo, as they will likely provide a more elegant fit for your needs.

[ &darr; Skip examples and jump to the docs &darr;](#installation)

### Example: A simple counter

Below is an example of a simple `counter` controller implemented using StimulusX's reactive DOM bindings.

> [!TIP]
> _You can find a [runnable version of this example on JSfiddle &rarr;](https://jsfiddle.net/allmarkedup/q293ay8v/)_

<img src=".github/assets/counter.gif" width="120">

```html
<div data-controller="counter">
  <span data-bind-attr="class~counter#displayClasses">
    <span data-bind-text="counter#count"></span> of
    <span data-bind-text="counter#max"></span>
  </span>

  <button data-action="counter#increment">⬆️</button>
  <button
    data-bind-attr="disabled~counter#count:lte(0)"
    data-action="counter#decrement"
  >⬇️</button>
</div>
```

```js
// controllers/counter_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize(){
    this.count = 0;
    this.max = 5;
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  get textClasses(){
    return {
      "text-green": this.count <= this.max,
      "text-red font-bold": this.count > this.max,
    }
  }  
}
```

---

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

#### Without a bundler

You can use StimulusX with native browser `module` imports by loading from it from [Skypack](https://skypack.dev):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <script type="module">
    import { Application } from "https://cdn.skypack.dev/@hotwired/stimulus"
    import StimulusX from "https://cdn.skypack.dev/stimulus-x"
    // ...see docs below for usage info
  </script>
</head>
<body>
</body>
</html>
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

By default, **all registered controllers** will automatically have access to StimulusX's reactive features - including [attribute bindings](#️attribute-bindings) (e.g. class names, `data-` and `aria-` attributes, `hidden` etc), [text content bindings](#text-bindings), [HTML bindings](#html-bindings) and more.

<h3 id="controller-opt-in"> Explicit controller opt-in</h3>

If you don't want to automatically enable reactivity for all of your controllers you can instead choose to _opt-in_ to StimulusX features on a controller-by-controller basis.

To enable individual controller opt-in set the `optIn` option to `true` when initializing StimulusX:

```js
StimulusX.init(Stimulus, { optIn: true }); 
```

To then enable reactive features on a per-controller basis, set the `static reactive` variable to `true` in the controller class:

```js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static reactive = true; // enable StimulusX reactive features for this controller
  // ...
}
```

<h2 id="dom-bindings-overview">Reactive DOM bindings - overview</h2>

[HTML attributes](#attribute-binding), [text](#text-binding) and [HTML content](#text-binding) can be tied to the value of controller properties using `data-bind-*` attributes in your HTML.

These bindings are _reactive_ which means the DOM is **automatically updated** when the value of the controller properties change.

### Binding descriptors

Bindings are specified declaratively in your HTML using `data-bind-(attr|text|html)` attributes where the _value_ of the attribute is a **binding descriptor**.

**Attribute** binding descriptors take the form `attribute~identifier#property` where `attribute` is the name of the **HTML attribute** to set, `identifier` is the **controller identifier** and `property` is the **name of the property** to bind to.

```html
<!-- keep the `src` attribute value in sync with the value of the lightbox controller `.imageUrl` property -->
<img data-bind-attr="src~lightbox#imageUrl">
```

📚 ***Read more: [Attribute bindings &rarr;](#attribute-binding)***

**Text** and **HTML** binding descriptors take the form `identifier#property` where `identifier` is the **controller identifier** and `property` is the **name of the property** to bind to.

```html
<!-- keep `element.textContent` in sync with the value of the article controller `.title` property -->
<h1 data-bind-text="article#title"></h1>

<!-- keep `element.innerHTML` in sync with the value of the article controller `.proseContent` property -->
<div data-bind-html="article#proseContent"></div>
```

📚 ***Read more: [text bindings](#text-binding)*** _and_ ***[HTML bindings &rarr;](#html-binding)***

> [!NOTE]
> _If you are familiar with Stimulus [action descriptors](https://stimulus.hotwired.dev/reference/actions#descriptors) then binding descriptors should feel familiar as they have a similar role and syntax._

### Value modifiers

Binding _value modifiers_ are a convenient way to transform or test property values in-situ before updating the DOM.

```html
<h1 data-bind-text="article#title:upcase"></h1>
<input data-bind-attr="disabled~workflow#status:is('complete')">
```

📚 ***Read more: [Binding value modifiers &rarr;](#binding-value-modifiers)***

### Negating property values

Boolean property values can be negated (inverted) by prefixing the `identifier#property` part of the binding descriptor with an exclaimation mark:.

```html
<details data-bind-attr="open~!panel#closed"></details>
```

> [!NOTE]
> _The `!` prefix is really just an more concise alternative syntax for applying [the `:not` modifier](#binding-value-modifiers)._

### Shallow vs deep reactivity

By default StimulusX only tracks changes to **top level** controller properties to figure out when to update the DOM. This is _shallow reactivity_.

To enable _deep reactivity_ for a controller (i.e. the ability to track changes to **properties in nested objects**) you can can set the static `reactive` property to `"deep"` within your controller:

```js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static reactive = "deep"; // enable deep reactivity mode
  // ...
}
```

Alternatively you can enable deep reactivity for **all** controllers using the `trackDeep` option when [initializing StimulusX](#usage):

```js
StimulusX.init(Stimulus, { trackDeep: true }); 
```

<h2 id="attribute-bindings">Attribute bindings</h2>

Attribute bindings connect **HTML attribute values** to **controller properties**, and ensure that the attribute value is automatically updated so as to stay in sync with the value of the controller property at all times.

They are specified using `data-bind-attr` attributes with [value descriptors](#binding-descriptors) that take the general form `{attribute}~{identifier}#{property}`.

```html
<div data-controller="lightbox">
  <img data-bind-attr="src~lightbox#imageUrl">
</div>
```

```js
export default class extends Controller {
  initialize(){
    this.imageUrl = "https://placeholder.com/kittens.jpg";
  }
}
```

In the attribute binding descriptor `src~lightbox#imageUrl` above:

* `src` is the **HTML attribute** to be added/updated/remove
* `lightbox` is the **controller identifier**
* `imageUrl` is the **name of the property** that the attribute value should be bound to

So the image `src` attribute will initially be set to the default value of the `imageUrl` property (i.e. `https://placeholder.com/kittens.jpg`). And whenever the `imageUrl` property is changed, the image `src` attribute value in the DOM will be automatically updated to reflect the new value.

```js
this.imageUrl = "https://kittens.com/daily-kitten.jpg"
// <img src="https://kittens.com/daily-kitten.jpg">
```


### Boolean attributes

[Boolean attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes) such as `checked`, `disabled`, `open` etc will be _added_ if the value of the property they are bound to is `true`, and _removed completely_ when it is `false`.

```html
<div data-controller="example">
  <button data-bind-attr="disabled~example#incomplete">submit</button>
</div>
```

```js
export default class extends Controller {
  initialize(){
    this.incomplete = true;
  }
}
```

Boolean attribute bindings often pair nicely with **[comparison modifiers](#comparison-modifiers)** such as `:is`:

```html
<div data-controller="form">
  <input type="text" data-action="form#checkCompleted">
  <button data-bind-attr="disabled~form#status:is('incomplete')">submit</button>
</div>
```

```js
export default class extends Controller {
  initialize(){
    this.status = "incomplete";
  }

  // called when the text input value is changed
  checkCompleted({ currentTarget }){
    if (currentTarget.value?.length > 0) {
      this.status === "complete"; // button will be enabled
    }
  }
}
```

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
  initialize(){
    this.count = 0;
  }

  get validityClasses(){
    if (this.count > 10) {
      return "text-red font-bold";
    } else {
      return "text-green";
    }
  }
}
```

In the example above, the value of the `validityClasses` property is a string of classes that depends on whether or not the value of the `count` property is greater than `10`:

* If `this.count > 10` then the element `class` attribute will be set to `"text-red font-bold"`.
* If `this.count < 10` then the element `class` attribute will be set to `"text-green"`.

The list of classes can be returned as a **string** or as an **array** - or as a special [class object](#class-objects).

#### Class objects

If you prefer, you can use a class object syntax to specify the class names. These are objects where the classes are the keys and booleans are the values.

The example above could be rewritten to use a class object as follows:

```js
export default class extends Controller {
  // ...
  get validityClasses(){
    return {
      "text-red font-bold": this.count > 10,
      "text-green": this.count <= 10,
    }
  }
}
```

The list of class names will be resolved by merging all the class names from keys with a value of `true` and ignoring all the rest.

<h2 id="text-bindings">Text content bindings</h2>

Text content bindings connect the **`textContent`** of an element to a **controller property**. They are useful when you want to dynamically update text on the page based on controller state.

Text content bindings are specified using `data-bind-text` attributes where the value is a binding descriptor in the form `{identifier}#{property}`.

```html
<div data-controller="workflow">
  Status: <span data-bind-text="workflow#status"></span>
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

<h2 id="html-bindings">HTML bindings</h2>

HTML bindings are very similar to [text content bindings](#️text-bindings) except they update the element's `innerHTML` instead of `textContent`.

HTML bindings are specified using `data-bind-html` attributes where the value is a binding descriptor in the form `{identifier}#{property}`.

```html
<div data-controller="workflow">
  <div class="status-icon" data-bind-html="workflow#statusIcon"></div>
</div>
```

```js
export default class extends Controller {
  initialize(){
    this.status = "in progress";
  }

  get statusIcon(){
    if (this.status === "complete"){
      return `<i data-icon="in-complete"></i>`;
    } else {
      return `<i data-icon="in-progress"></i>`;
    }
  }
}
```

<h2 id="binding-value-modifiers">Binding value modifiers</h2>

Inline _value modifiers_ are a convenient way to transform or test property values before updating the DOM.

Modifiers are appended to the end of [binding descriptors](#binding-descriptors) and are separated from the descriptor (or from each other) by a `:` colon.

The example below uses the `upcase` modifier to transform the title to upper case before displaying it on the page:

```html
<h1 data-bind-text="article#title:upcase"></h1>
```

> [!TIP]
> _Multiple modifiers can be piped together one after each other, separated by colons, e.g. `article#title:upcase:trim`_

<h3 id="string-transform-modifiers">String transform modifiers</h3>

String transform modifiers provide stackable output transformations for string values.

#### Available string modifiers:

* `:upcase` - transform text to uppercase
* `:downcase` - transform text to lowercase
* `:strip` - strip leading and trailing whitespace

<h5 id="upcase-modifier"><code>:upcase</code></h5>

Converts the string to uppercase.

```html
<h1 data-bind-text="article#title:upcase"></h1>
```

<h5 id="downcase-modifier"><code>:downcase</code></h5>

Converts the string to lowercase.

```html
<h1 data-bind-text="article#title:downcase"></h1>
```

<h5 id="downcase-modifier"><code>:strip</code></h5>

Strips leading and trailing whitespace from the string value.

```html
<h1 data-bind-text="article#title:downcase"></h1>
```

<h3 id="comparison-modifiers">Comparison modifiers</h3>

_Comparison modifiers_ compare the resolved **controller property value** against a **provided test value**.

```html
<input data-bind-attr="disabled~workflow#status:is('complete')">
```

They are primarily intended for use with [boolean attribute bindings](#boolean-attributes) to conditionally add or remove attributes based on the result of value comparisons.

> [!TIP]
> _Comparison modifiers play nicely with other chained modifiers - the comparison will be done against the property value **after** it has been transformed by any other preceeding modifiers_:
> ```html
> <input data-bind-attr="disabled~workflow#status:upcase:is('COMPLETE')">`
> ```

#### Available comparison modifiers:

* `:is(<value>)` - equality test ([read more](#is-modifier))
* `:isNot(<value>)` - negated equality test ([read more](#is-not-modifier))
* `:gt(<value>)` - 'greater than' test ([read more](#gt-modifier))
* `:gte(<value>)` - 'greater than or equal to' test ([read more](#gte-modifier))
* `:lt(<value>)` - 'less than' test ([read more](#lt-modifier))
* `:lte(<value>)` - 'less than or equal to' test ([read more](#lte-modifier))

<h5 id="is-modifier"><code>:is(&lt;value&gt;)</code></h5>

The `:is` modifier compares the resolved property value with the `<value>` provided as an argument, returning `true` if they match and `false` if not.

```html
<!-- input is disabled if `workflow#status` === "complete" -->
<input data-bind-attr="disabled~workflow#status:is('complete')">
```

* **String** comparison: `:is('single quoted string')`, `:is("double quoted string")`
* **Integer** comparison: `:is(123)`
* **Float** comparison: `:is(1.23)`
* **Boolean** comparison: `:is(true)`, `:is(false)`

<h5 id="is-not-modifier"><code>:isNot(&lt;value&gt;)</code></h5>

The `:isNot` modifier works exactly the same as the [`:is` modifier](#is-modifier), but returns `true` if the value comparison fails and `false` if the values match.

> [!IMPORTANT]
> _The `:is` and `:isNot` modifiers only accept simple `String`, `Number` or `Boolean` values. `Object` and `Array` values are not supported._

<h5 id="gt-modifier"><code>:gt(&lt;value&gt;)</code></h5>

The `:gt` modifier returns `true` if the resolved property value is **greater than** the numeric `<value>` provided as an argument.

```html
<!-- button is disabled if `counter#count` is > 9 -->
<button data-bind-attr="disabled~counter#count:gt(9)">+</button>
```

<h5 id="gte-modifier"><code>:gte(&lt;value&gt;)</code></h5>

The `:gte` modifier returns `true` if the resolved property value is **greater than or equal to** the numeric `<value>` provided as an argument.

```html
<!-- button is disabled if `counter#count` is >= 10 -->
<button data-bind-attr="disabled~counter#count:gte(10)">+</button>
```

<h5 id="lt-modifier"><code>:lt(&lt;value&gt;)</code></h5>

The `:lt` modifier returns `true` if the resolved property value is **less than** the numeric `<value>` provided as an argument.

```html
<!-- button is disabled if `counter#count` is < 1 -->
<button data-bind-attr="disabled~counter#count:lt(1)">-</button>
```

<h5 id="lte-modifier"><code>:lte(&lt;value&gt;)</code></h5>

The `:lte` modifier returns `true` if the resolved property value is **less than or equal to** the numeric `<value>` provided as an argument.

```html
<!-- button is disabled if `counter#count` is <= 0 -->
<button data-bind-attr="disabled~counter#count:lte(0)">-</button>
```

<h3 id="other-modifiers">Other modifiers</h3>

* `:not` - negate (invert) a boolean value

> [!TIP]
> _You can add your own **custom modifiers** if required. See [Extending StimulusX](#extending) for more info._

<h2 id="watching-properties">Watching properties for changes</h2>

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

🚧 _More docs coming soon..._


<h2 id="extending">Extending StimulusX</h2>

### Custom modifiers

You can add your own modifiers using the `StimulusX.modifier` method:

```js
StimulusX.modifier("modifierName", (value) => {
  // Do something to `value` and return the result of the transformation.
  const transformedValue = doSomethingTo(value);
  return transformedValue;
}); 
```

### Custom directives

🚧 _Documentation coming soon..._

## Known issues, caveats and workarounds

### ❌ Private properties and methods  

Unfortunately it is not possible to use StimulusX with controllers that define [private methods or properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements) (i.e. with names using the `#` prefix). [See Lea Verou's excellent blog post on the topic for more details.](https://lea.verou.me/blog/2023/04/private-fields-considered-harmful/)

If you have existing controllers with private methods and want to add new StimulusX-based controllers alongside them then you should [enable explicit controller opt-in](#controller-opt-in) to prevent errors being thrown at initialization time.

## Credits and inspiration

StimulusX uses [VueJS's reactivity engine](https://github.com/vuejs/core/tree/main/packages/reactivity) under the hood and was inspired by (and borrows much of its code from) the excellent [Alpine.JS](https://alpinejs.dev/directives/bind) library.

## License

StimulusX is available as open source under the terms of the MIT License.