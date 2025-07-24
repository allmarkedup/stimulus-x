var $gXNCa$vuereactivity = require("@vue/reactivity");
var $gXNCa$dotprop = require("dot-prop");


function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
const $f144c181a48a989e$var$modifierHandlers = [];
function $f144c181a48a989e$export$cd4b50bb4e5c05a3(name, handler) {
    $f144c181a48a989e$var$modifierHandlers.push({
        name: name,
        handler: handler
    });
}
function $f144c181a48a989e$export$f1696300e8775372(value, modifiers = []) {
    return modifiers.reduce((value, modifier)=>{
        if ($f144c181a48a989e$var$modifierExists(modifier)) return $f144c181a48a989e$var$applyModifier(modifier, value);
        else {
            console.error(`Unknown modifier '${modifier}'`);
            return value;
        }
    }, value);
}
function $f144c181a48a989e$var$applyModifier(name, value) {
    return $f144c181a48a989e$var$getModifier(name).handler(value);
}
function $f144c181a48a989e$var$modifierExists(name) {
    return !!$f144c181a48a989e$var$getModifier(name);
}
function $f144c181a48a989e$var$getModifier(name) {
    return $f144c181a48a989e$var$modifierHandlers.find((modifier)=>modifier.name === name);
}


let $8ac4d22a5034a28e$var$flushPending = false;
let $8ac4d22a5034a28e$var$flushing = false;
let $8ac4d22a5034a28e$var$queue = [];
let $8ac4d22a5034a28e$var$lastFlushedIndex = -1;
let $8ac4d22a5034a28e$var$tickStack = [];
let $8ac4d22a5034a28e$var$isHolding = false;
function $8ac4d22a5034a28e$export$d30788f2c20241cd(callback) {
    $8ac4d22a5034a28e$export$fba1a0a20887772f(callback);
}
function $8ac4d22a5034a28e$export$fba1a0a20887772f(job) {
    if (!$8ac4d22a5034a28e$var$queue.includes(job)) $8ac4d22a5034a28e$var$queue.push(job);
    $8ac4d22a5034a28e$var$queueFlush();
}
function $8ac4d22a5034a28e$export$edbe2d8b64bcb07c(job) {
    let index = $8ac4d22a5034a28e$var$queue.indexOf(job);
    if (index !== -1 && index > $8ac4d22a5034a28e$var$lastFlushedIndex) $8ac4d22a5034a28e$var$queue.splice(index, 1);
}
function $8ac4d22a5034a28e$var$queueFlush() {
    if (!$8ac4d22a5034a28e$var$flushing && !$8ac4d22a5034a28e$var$flushPending) {
        $8ac4d22a5034a28e$var$flushPending = true;
        queueMicrotask($8ac4d22a5034a28e$export$8ca066e62735a16c);
    }
}
function $8ac4d22a5034a28e$export$8ca066e62735a16c() {
    $8ac4d22a5034a28e$var$flushPending = false;
    $8ac4d22a5034a28e$var$flushing = true;
    for(let i = 0; i < $8ac4d22a5034a28e$var$queue.length; i++){
        $8ac4d22a5034a28e$var$queue[i]();
        $8ac4d22a5034a28e$var$lastFlushedIndex = i;
    }
    $8ac4d22a5034a28e$var$queue.length = 0;
    $8ac4d22a5034a28e$var$lastFlushedIndex = -1;
    $8ac4d22a5034a28e$var$flushing = false;
}
function $8ac4d22a5034a28e$export$bdd553fddd433dcb(callback = ()=>{}) {
    queueMicrotask(()=>{
        $8ac4d22a5034a28e$var$isHolding || setTimeout(()=>{
            $8ac4d22a5034a28e$export$d80ec80fb4bee1e6();
        });
    });
    return new Promise((res)=>{
        $8ac4d22a5034a28e$var$tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function $8ac4d22a5034a28e$export$d80ec80fb4bee1e6() {
    $8ac4d22a5034a28e$var$isHolding = false;
    while($8ac4d22a5034a28e$var$tickStack.length)$8ac4d22a5034a28e$var$tickStack.shift()();
}
function $8ac4d22a5034a28e$export$e9a53d8785d6cfc9() {
    $8ac4d22a5034a28e$var$isHolding = true;
}


let $c4a194e961464110$var$onAttributeAddeds = [];
let $c4a194e961464110$var$onElRemoveds = [];
let $c4a194e961464110$var$onElAddeds = [];
let $c4a194e961464110$var$onValueAttributeChangeds = [];
let $c4a194e961464110$var$currentlyObserving = false;
let $c4a194e961464110$var$isCollecting = false;
let $c4a194e961464110$var$deferredMutations = [];
let $c4a194e961464110$var$observer = new MutationObserver($c4a194e961464110$var$onMutate);
function $c4a194e961464110$export$c395e4fde41c37ff(callback) {
    $c4a194e961464110$var$onElAddeds.push(callback);
}
function $c4a194e961464110$export$bb8862ef847f5ec0(el, callback) {
    if (typeof callback === "function") {
        if (!el.__stimulusX_cleanups) el.__stimulusX_cleanups = [];
        el.__stimulusX_cleanups.push(callback);
    } else {
        callback = el;
        $c4a194e961464110$var$onElRemoveds.push(callback);
    }
}
function $c4a194e961464110$export$545f7104b1510552(callback) {
    $c4a194e961464110$var$onAttributeAddeds.push(callback);
}
function $c4a194e961464110$export$5d89a587b01747c6(el, name, callback) {
    if (!el.__stimulusX_attributeCleanups) el.__stimulusX_attributeCleanups = {};
    if (!el.__stimulusX_attributeCleanups[name]) el.__stimulusX_attributeCleanups[name] = [];
    el.__stimulusX_attributeCleanups[name].push(callback);
}
function $c4a194e961464110$export$309d6f15c1c4d36e(callback) {
    $c4a194e961464110$var$onValueAttributeChangeds.push(callback);
}
function $c4a194e961464110$export$2c8bfe603cc113da(el, names) {
    if (!el.__stimulusX_attributeCleanups) return;
    Object.entries(el.__stimulusX_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el.__stimulusX_attributeCleanups[name];
        }
    });
}
function $c4a194e961464110$export$21fc366069a4f56f(el) {
    el.__stimulusX_cleanups?.forEach((0, $8ac4d22a5034a28e$export$edbe2d8b64bcb07c));
    while(el.__stimulusX_cleanups?.length)el.__stimulusX_cleanups.pop()();
}
function $c4a194e961464110$export$1a5ae5db40475a2d() {
    $c4a194e961464110$var$observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    $c4a194e961464110$var$currentlyObserving = true;
}
function $c4a194e961464110$export$d4f6b05796af6998() {
    $c4a194e961464110$export$2f1f1886cd00d96e();
    $c4a194e961464110$var$observer.disconnect();
    $c4a194e961464110$var$currentlyObserving = false;
}
let $c4a194e961464110$var$queuedMutations = [];
function $c4a194e961464110$export$2f1f1886cd00d96e() {
    let records = $c4a194e961464110$var$observer.takeRecords();
    $c4a194e961464110$var$queuedMutations.push(()=>records.length > 0 && $c4a194e961464110$var$onMutate(records));
    let queueLengthWhenTriggered = $c4a194e961464110$var$queuedMutations.length;
    queueMicrotask(()=>{
        // If these two lengths match, then we KNOW that this is the LAST
        // flush in the current event loop. This way, we can process
        // all mutations in one batch at the end of everything...
        if ($c4a194e961464110$var$queuedMutations.length === queueLengthWhenTriggered) // Now Alpine can process all the mutations...
        while($c4a194e961464110$var$queuedMutations.length > 0)$c4a194e961464110$var$queuedMutations.shift()();
    });
}
function $c4a194e961464110$export$c98382a3d82f9519(callback) {
    if (!$c4a194e961464110$var$currentlyObserving) return callback();
    $c4a194e961464110$export$d4f6b05796af6998();
    let result = callback();
    $c4a194e961464110$export$1a5ae5db40475a2d();
    return result;
}
function $c4a194e961464110$export$9a7d8d7577dd8469() {
    $c4a194e961464110$var$isCollecting = true;
}
function $c4a194e961464110$export$47d46026c1b12c48() {
    $c4a194e961464110$var$isCollecting = false;
    $c4a194e961464110$var$onMutate($c4a194e961464110$var$deferredMutations);
    $c4a194e961464110$var$deferredMutations = [];
}
function $c4a194e961464110$var$onMutate(mutations) {
    if ($c4a194e961464110$var$isCollecting) {
        $c4a194e961464110$var$deferredMutations = $c4a194e961464110$var$deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = new Set();
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target.__stimulusX_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].removedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                // No need to process removed nodes that haven't been initialized by Alpine...
                if (!node.__stimulusX_marker) return;
                removedNodes.add(node);
            });
            mutations[i].addedNodes.forEach((node)=>{
                if (node.nodeType !== 1) return;
                // If the node is a removal as well, that means it's a "move" operation and we'll leave it alone...
                if (removedNodes.has(node)) {
                    removedNodes.delete(node);
                    return;
                }
                // If the node has already been initialized, we'll leave it alone...
                if (node.__stimulusX_marker) return;
                addedNodes.push(node);
            });
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name: name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            // let valueAttributeChanged = () => {
            // };
            // New attribute.
            if (el.hasAttribute(name) && oldValue === null) add();
            else if (el.hasAttribute(name)) {
                remove();
                add();
            // Removed attribute.
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        $c4a194e961464110$export$2c8bfe603cc113da(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        $c4a194e961464110$var$onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    // There are two special scenarios we need to account for when using the mutation
    // observer to init and destroy elements. First, when a node is "moved" on the page,
    // it's registered as both an "add" and a "remove", so we want to skip those.
    // (This is handled above by the .__stimulusX_marker conditionals...)
    // Second, when a node is "wrapped", it gets registered as a "removal" and the wrapper
    // as an "addition". We don't want to remove, then re-initialize the node, so we look
    // and see if it's inside any added nodes (wrappers) and skip it.
    // (This is handled below by the .contains conditional...)
    for (let node of removedNodes){
        if (addedNodes.some((i)=>i.contains(node))) continue;
        $c4a194e961464110$var$onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        $c4a194e961464110$var$onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}




const $8fc1b106fbc18952$export$dc573d8a6576cdb3 = (callback)=>(0, $gXNCa$vuereactivity.effect)(callback, {
        scheduler: (0, $8ac4d22a5034a28e$export$d30788f2c20241cd)((task)=>task)
    });
function $8fc1b106fbc18952$export$1ecd3170301acce1(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = $8fc1b106fbc18952$export$dc573d8a6576cdb3(callback);
        if (!el.__stimulusX_effects) el.__stimulusX_effects = new Set();
        el.__stimulusX_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el.__stimulusX_effects.delete(effectReference);
            (0, $gXNCa$vuereactivity.stop)(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup();
        }
    ];
}
function $8fc1b106fbc18952$export$3db5d71bdb2d5499(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = $8fc1b106fbc18952$export$dc573d8a6576cdb3(()=>{
        let value = getter();
        // JSON.stringify touches every single property at any level enabling deep watching
        JSON.stringify(value);
        if (!firstTime) // We have to queue this watcher as a microtask so that
        // the watcher doesn't pick up its own dependencies.
        queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>(0, $gXNCa$vuereactivity.stop)(effectReference);
}






function $58ee04a91c847124$export$d56142fa17014959(ControllerClass) {
    return class extends ControllerClass {
        constructor(context){
            super(context);
            // Override the attribute setter so that our mutation observer doesn't pick up on changes
            // that are also already being handled directly by Stimulus.
            const setData = this.data.set;
            this.data.set = (key, value)=>{
                (0, $c4a194e961464110$export$c98382a3d82f9519)(()=>setData.call(this.data, key, value));
            };
            // Create a reactive controller object
            const self = (0, $8fc1b106fbc18952$re_export$reactive)(this);
            // Initialize watched property callbacks
            const watchedProps = this.constructor.watch || [];
            watchedProps.forEach((prop)=>$58ee04a91c847124$export$dcc3676fc96ef4c(self, prop));
            // Return the reactive controller instance
            return self;
        }
    };
}
function $58ee04a91c847124$export$6d5f0ef1727b562e(el, identifier, application) {
    const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
    if (controllerElement) return application.getControllerForElementAndIdentifier(controllerElement, identifier);
}
function $58ee04a91c847124$export$121af9acc174ac93(controller, property) {
    let value = (0, $gXNCa$dotprop.getProperty)(controller, property);
    if (typeof value === "function") value = value.apply(controller);
    return value;
}
function $58ee04a91c847124$export$dcc3676fc96ef4c(controller, propertyRef) {
    const getter = ()=>$58ee04a91c847124$export$121af9acc174ac93(controller, propertyRef);
    const cleanup = (0, $8fc1b106fbc18952$export$3db5d71bdb2d5499)(getter, (value, oldValue)=>{
        $58ee04a91c847124$var$callCallbacks(controller, propertyRef, value, oldValue, false);
    });
    // Run once on creation
    $58ee04a91c847124$var$callCallbacks(controller, propertyRef, getter(), undefined, true);
    const rootElement = controller.element;
    if (!rootElement.__stimulusX_cleanups) rootElement.__stimulusX_cleanups = [];
    rootElement.__stimulusX_cleanups.push(cleanup);
}
function $58ee04a91c847124$var$callCallbacks(controller, propertyRef, value, oldValue, initial) {
    // Generic callback, called when _any_ watched property changes
    if (typeof controller.watchedPropertyChanged === "function") controller.watchedPropertyChanged(propertyRef, value, oldValue, {
        initial: initial
    });
    // Property-specific change callback
    const propertyWatcherCallback = controller[`${$58ee04a91c847124$var$getCamelizedPropertyRef(propertyRef)}PropertyChanged`];
    if (typeof propertyWatcherCallback === "function") propertyWatcherCallback.call(controller, value, oldValue, {
        initial: initial
    });
}
function $58ee04a91c847124$var$getCamelizedPropertyRef(propertyRef) {
    return $58ee04a91c847124$var$camelCase(propertyRef.replace(".", " "));
}
function $58ee04a91c847124$var$camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}


let $c6c15cd6b2ee5a2e$var$directiveHandlers = {};
let $c6c15cd6b2ee5a2e$var$isDeferringHandlers = false;
let $c6c15cd6b2ee5a2e$var$directiveHandlerStacks = new Map();
let $c6c15cd6b2ee5a2e$var$currentHandlerStackKey = Symbol();
let $c6c15cd6b2ee5a2e$var$attributePrefix = "data-bind-";
function $c6c15cd6b2ee5a2e$export$99b43ad1ed32e735(name, callback) {
    $c6c15cd6b2ee5a2e$var$directiveHandlers[name] = callback;
}
function $c6c15cd6b2ee5a2e$export$19b57a1ea2e090cb(name) {
    return Object.keys($c6c15cd6b2ee5a2e$var$directiveHandlers).includes(name);
}
function $c6c15cd6b2ee5a2e$export$90a684c00f3df6ed(el, attributes) {
    const directives = Array.from(attributes).filter($c6c15cd6b2ee5a2e$var$isDirectiveAttribute).map($c6c15cd6b2ee5a2e$var$toParsedDirectives);
    return directives.flat().map((directive)=>$c6c15cd6b2ee5a2e$export$1dd40105af141b08(el, directive));
}
function $c6c15cd6b2ee5a2e$export$3d81bdeca067fd2d(callback) {
    $c6c15cd6b2ee5a2e$var$isDeferringHandlers = true;
    let key = Symbol();
    $c6c15cd6b2ee5a2e$var$currentHandlerStackKey = key;
    $c6c15cd6b2ee5a2e$var$directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while($c6c15cd6b2ee5a2e$var$directiveHandlerStacks.get(key).length)$c6c15cd6b2ee5a2e$var$directiveHandlerStacks.get(key).shift()();
        $c6c15cd6b2ee5a2e$var$directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        $c6c15cd6b2ee5a2e$var$isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function $c6c15cd6b2ee5a2e$export$a51f92c9c1609d03(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, $8fc1b106fbc18952$export$1ecd3170301acce1)(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        effect: effect,
        cleanup: cleanup
    };
    let doCleanup = ()=>{
        cleanups.forEach((i)=>i());
    };
    return [
        utilities,
        doCleanup
    ];
}
function $c6c15cd6b2ee5a2e$export$1dd40105af141b08(el, directive) {
    let handler = $c6c15cd6b2ee5a2e$var$directiveHandlers[directive.type] || (()=>{});
    let [utilities, cleanup] = $c6c15cd6b2ee5a2e$export$a51f92c9c1609d03(el);
    (0, $c4a194e961464110$export$5d89a587b01747c6)(el, directive.attr, cleanup);
    let wrapperHandler = (application)=>{
        let controller = (0, $58ee04a91c847124$export$6d5f0ef1727b562e)(el, directive.identifier, application);
        if (controller) {
            handler = handler.bind(handler, el, directive, {
                ...utilities,
                evaluate: $c6c15cd6b2ee5a2e$var$evaluator(controller),
                modify: (0, $f144c181a48a989e$export$f1696300e8775372)
            });
            $c6c15cd6b2ee5a2e$var$isDeferringHandlers ? $c6c15cd6b2ee5a2e$var$directiveHandlerStacks.get($c6c15cd6b2ee5a2e$var$currentHandlerStackKey).push(handler) : handler();
        } else console.error(`Controller '${directive.indentifier}' not found`);
    };
    return wrapperHandler;
}
function $c6c15cd6b2ee5a2e$var$evaluator(controller) {
    return (property)=>(0, $58ee04a91c847124$export$121af9acc174ac93)(controller, property);
}
function $c6c15cd6b2ee5a2e$var$matchedAttributeRegex() {
    return new RegExp(`${$c6c15cd6b2ee5a2e$var$attributePrefix}(${Object.keys($c6c15cd6b2ee5a2e$var$directiveHandlers).join("|")})$`);
}
function $c6c15cd6b2ee5a2e$var$isDirectiveAttribute({ name: name }) {
    return $c6c15cd6b2ee5a2e$var$matchedAttributeRegex().test(name);
}
function $c6c15cd6b2ee5a2e$var$toParsedDirectives({ name: name, value: value }) {
    const type = name.match($c6c15cd6b2ee5a2e$var$matchedAttributeRegex())[1];
    const bindingExpressions = value.trim().split(/\s+/).filter((e)=>e);
    return bindingExpressions.map((bindingExpression)=>{
        const subjectMatch = bindingExpression.match(/^([a-zA-Z0-9\-_]+)~/);
        const subject = subjectMatch ? subjectMatch[1] : null;
        let valueExpression = subject ? bindingExpression.replace(`${subject}~`, "") : bindingExpression;
        let modifiers = valueExpression.match(/\:[^:\]]+(?=[^\]]*$)/g) || [];
        modifiers = modifiers.map((i)=>i.replace(":", ""));
        if (valueExpression[0] === "!") {
            valueExpression = valueExpression.slice(1);
            modifiers.push("not");
        }
        valueExpression = valueExpression.split(":")[0];
        const identifierMatch = valueExpression.match(/^([a-zA-Z0-9\-_]+)#/);
        const identifier = identifierMatch ? identifierMatch[1] : null;
        const property = identifier ? valueExpression.replace(`${identifier}#`, "") : valueExpression;
        return {
            type: type,
            subject: subject,
            modifiers: modifiers,
            identifier: identifier,
            property: property,
            attr: name
        };
    });
}




function $4559ecf940edc78d$export$8a7688a96d852767(subject) {
    return subject.replace(/:/g, "_").split("_").map((word, index)=>index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}
function $4559ecf940edc78d$export$588732934346abbf(el, callback) {
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        $4559ecf940edc78d$export$588732934346abbf(node, callback, false);
        node = node.nextElementSibling;
    }
}



const $4f4b2c77fca8d6f7$var$StimulusX = {};
let $4f4b2c77fca8d6f7$var$markerCount = 1;
$4f4b2c77fca8d6f7$var$StimulusX.extend = function(application) {
    this.application = application;
    // Override controller registration to insert a reactive subclass instead of the original
    application.register = function(identifier, ControllerClass) {
        const controllerConstructor = (0, $58ee04a91c847124$export$d56142fa17014959)(ControllerClass, application);
        application.load({
            identifier: identifier,
            controllerConstructor: controllerConstructor
        });
    };
    (0, $c4a194e961464110$export$1a5ae5db40475a2d)();
    (0, $c4a194e961464110$export$c395e4fde41c37ff)((el)=>$4f4b2c77fca8d6f7$var$initTree(el));
    (0, $c4a194e961464110$export$bb8862ef847f5ec0)((el)=>$4f4b2c77fca8d6f7$var$destroyTree(el));
    (0, $c4a194e961464110$export$545f7104b1510552)((el, attrs)=>{
        $4f4b2c77fca8d6f7$var$handleValueAttributes(el, attrs);
        (0, $c6c15cd6b2ee5a2e$export$90a684c00f3df6ed)(el, attrs).forEach((handle)=>handle($4f4b2c77fca8d6f7$var$StimulusX.application));
    });
    (0, $8ac4d22a5034a28e$export$bdd553fddd433dcb)(()=>{
        $4f4b2c77fca8d6f7$var$rootElements().forEach((el)=>$4f4b2c77fca8d6f7$var$initTree(el));
    });
};
$4f4b2c77fca8d6f7$var$StimulusX.modifier = (0, $f144c181a48a989e$export$cd4b50bb4e5c05a3);
$4f4b2c77fca8d6f7$var$StimulusX.directive = (0, $c6c15cd6b2ee5a2e$export$99b43ad1ed32e735);
function $4f4b2c77fca8d6f7$var$rootElements() {
    return Array.from(document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])"));
}
function $4f4b2c77fca8d6f7$var$initTree(el) {
    (0, $c6c15cd6b2ee5a2e$export$3d81bdeca067fd2d)(()=>{
        (0, $4559ecf940edc78d$export$588732934346abbf)(el, (el)=>{
            if (el.__stimulusX_marker) return;
            (0, $c6c15cd6b2ee5a2e$export$90a684c00f3df6ed)(el, el.attributes).forEach((handle)=>handle($4f4b2c77fca8d6f7$var$StimulusX.application));
            el.__stimulusX_marker = $4f4b2c77fca8d6f7$var$markerCount++;
        });
    });
}
function $4f4b2c77fca8d6f7$var$destroyTree(root) {
    (0, $4559ecf940edc78d$export$588732934346abbf)(root, (el)=>{
        (0, $c4a194e961464110$export$21fc366069a4f56f)(el);
        (0, $c4a194e961464110$export$2c8bfe603cc113da)(el);
        delete el.__stimulusX_marker;
    });
}
// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function $4f4b2c77fca8d6f7$var$handleValueAttributes(el, attrs, application) {
    if (!el.hasAttribute("data-controller")) return;
    const controllerNames = el.getAttribute("data-controller").trim().split(" ").filter((e)=>e);
    const valueAttributeMatcher = new RegExp(`^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`);
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        const matches = attr.name.match(valueAttributeMatcher);
        if (matches.length) {
            const identifier = matches[1];
            const valueName = matches[2];
            const controller = application.getControllerForElementAndIdentifier(el, identifier);
            (0, $c4a194e961464110$export$c98382a3d82f9519)(()=>{
                controller[`${valueName}Value`] = controller[`${valueName}Value`];
            });
        }
    }
}
var $4f4b2c77fca8d6f7$export$2e2bcd8739ae039 = $4f4b2c77fca8d6f7$var$StimulusX;



(0, $f144c181a48a989e$export$cd4b50bb4e5c05a3)("downcase", (value)=>value.toString().toLowerCase());



(0, $f144c181a48a989e$export$cd4b50bb4e5c05a3)("not", (value)=>!value);



(0, $f144c181a48a989e$export$cd4b50bb4e5c05a3)("upcase", (value)=>value.toString().toUpperCase());




function $52bbe18740f0c596$export$2706f8d45625eda6(el, value) {
    if (Array.isArray(value)) return $52bbe18740f0c596$var$setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return $52bbe18740f0c596$var$setClassesFromObject(el, value);
    return $52bbe18740f0c596$var$setClassesFromString(el, value);
}
function $52bbe18740f0c596$var$setClassesFromString(el, classString) {
    classString = classString || "";
    let missingClasses = (classString)=>classString.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let classes = missingClasses(classString);
    el.classList.add(...classes);
    return ()=>el.classList.remove(...classes);
}
function $52bbe18740f0c596$var$setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}


// As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
const $84ae604ccbb67d88$var$booleanAttributes = new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
]);
const $84ae604ccbb67d88$var$preserveIfFalsey = [
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected"
];
function $84ae604ccbb67d88$export$2385a24977818dd0(element, name, value) {
    switch(name){
        case "class":
            $84ae604ccbb67d88$var$bindClasses(element, value);
            break;
        case "checked":
        case "selected":
            $84ae604ccbb67d88$var$bindAttributeAndProperty(element, name, value);
            break;
        default:
            $84ae604ccbb67d88$var$bindAttribute(element, name, value);
            break;
    }
}
function $84ae604ccbb67d88$var$bindClasses(element, value) {
    if (element.__stimulusX_undoClasses) element.__stimulusX_undoClasses();
    element.__stimulusX_undoClasses = (0, $52bbe18740f0c596$export$2706f8d45625eda6)(element, value);
}
function $84ae604ccbb67d88$var$bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && $84ae604ccbb67d88$var$attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if ($84ae604ccbb67d88$var$isBooleanAttr(name)) value = name;
        $84ae604ccbb67d88$var$setIfChanged(el, name, value);
    }
}
function $84ae604ccbb67d88$var$bindAttributeAndProperty(el, name, value) {
    $84ae604ccbb67d88$var$bindAttribute(el, name, value);
    $84ae604ccbb67d88$var$setPropertyIfChanged(el, name, value);
}
function $84ae604ccbb67d88$var$setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function $84ae604ccbb67d88$var$setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function $84ae604ccbb67d88$var$isBooleanAttr(attrName) {
    return $84ae604ccbb67d88$var$booleanAttributes.has(attrName);
}
function $84ae604ccbb67d88$var$attributeShouldntBePreservedIfFalsy(name) {
    return !$84ae604ccbb67d88$var$preserveIfFalsey.includes(name);
}


(0, $c6c15cd6b2ee5a2e$export$99b43ad1ed32e735)("attr", (el, { property: property, subject: subject, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>{
        (0, $c4a194e961464110$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            (0, $84ae604ccbb67d88$export$2385a24977818dd0)(el, subject, value);
        });
    });
});




(0, $c6c15cd6b2ee5a2e$export$99b43ad1ed32e735)("text", (el, { property: property, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>(0, $c4a194e961464110$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            el.textContent = value;
        }));
});


var $4fa36e821943b400$export$2e2bcd8739ae039 = (0, $4f4b2c77fca8d6f7$export$2e2bcd8739ae039);


//# sourceMappingURL=stimulus-x.cjs.js.map
