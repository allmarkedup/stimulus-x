import {getProperty as $5OpyM$getProperty} from "dot-prop";
import {isReactive as $5OpyM$isReactive, reactive as $5OpyM$reactive, shallowReactive as $5OpyM$shallowReactive, effect as $5OpyM$effect, stop as $5OpyM$stop} from "@vue/reactivity/dist/reactivity.esm-browser.prod.js";

let $eae25d6e66596517$var$flushPending = false;
let $eae25d6e66596517$var$flushing = false;
let $eae25d6e66596517$var$queue = [];
let $eae25d6e66596517$var$lastFlushedIndex = -1;
let $eae25d6e66596517$var$tickStack = [];
let $eae25d6e66596517$var$isHolding = false;
function $eae25d6e66596517$export$d30788f2c20241cd(callback) {
    $eae25d6e66596517$export$fba1a0a20887772f(callback);
}
function $eae25d6e66596517$export$fba1a0a20887772f(job) {
    if (!$eae25d6e66596517$var$queue.includes(job)) $eae25d6e66596517$var$queue.push(job);
    $eae25d6e66596517$var$queueFlush();
}
function $eae25d6e66596517$export$edbe2d8b64bcb07c(job) {
    let index = $eae25d6e66596517$var$queue.indexOf(job);
    if (index !== -1 && index > $eae25d6e66596517$var$lastFlushedIndex) $eae25d6e66596517$var$queue.splice(index, 1);
}
function $eae25d6e66596517$var$queueFlush() {
    if (!$eae25d6e66596517$var$flushing && !$eae25d6e66596517$var$flushPending) {
        $eae25d6e66596517$var$flushPending = true;
        queueMicrotask($eae25d6e66596517$export$8ca066e62735a16c);
    }
}
function $eae25d6e66596517$export$8ca066e62735a16c() {
    $eae25d6e66596517$var$flushPending = false;
    $eae25d6e66596517$var$flushing = true;
    for(let i = 0; i < $eae25d6e66596517$var$queue.length; i++){
        $eae25d6e66596517$var$queue[i]();
        $eae25d6e66596517$var$lastFlushedIndex = i;
    }
    $eae25d6e66596517$var$queue.length = 0;
    $eae25d6e66596517$var$lastFlushedIndex = -1;
    $eae25d6e66596517$var$flushing = false;
}
function $eae25d6e66596517$export$bdd553fddd433dcb(callback = ()=>{}) {
    queueMicrotask(()=>{
        $eae25d6e66596517$var$isHolding || setTimeout(()=>{
            $eae25d6e66596517$export$d80ec80fb4bee1e6();
        });
    });
    return new Promise((res)=>{
        $eae25d6e66596517$var$tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function $eae25d6e66596517$export$d80ec80fb4bee1e6() {
    $eae25d6e66596517$var$isHolding = false;
    while($eae25d6e66596517$var$tickStack.length)$eae25d6e66596517$var$tickStack.shift()();
}
function $eae25d6e66596517$export$e9a53d8785d6cfc9() {
    $eae25d6e66596517$var$isHolding = true;
}






const $3ee5a2b2e05cc741$export$352205f445242f02 = (0, $5OpyM$isReactive);
const $3ee5a2b2e05cc741$export$90a44edba14e47be = (0, $5OpyM$reactive);
const $3ee5a2b2e05cc741$export$8d81cefd22d22260 = (0, $5OpyM$shallowReactive);
const $3ee5a2b2e05cc741$export$dc573d8a6576cdb3 = (callback)=>(0, $5OpyM$effect)(callback, {
        scheduler: (0, $eae25d6e66596517$export$d30788f2c20241cd)((task)=>task)
    });
function $3ee5a2b2e05cc741$export$1ecd3170301acce1(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = $3ee5a2b2e05cc741$export$dc573d8a6576cdb3(callback);
        if (!el.__stimulusX_effects) el.__stimulusX_effects = new Set();
        el.__stimulusX_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el.__stimulusX_effects.delete(effectReference);
            (0, $5OpyM$stop)(effectReference);
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
function $3ee5a2b2e05cc741$export$3db5d71bdb2d5499(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = $3ee5a2b2e05cc741$export$dc573d8a6576cdb3(()=>{
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
    return ()=>(0, $5OpyM$stop)(effectReference);
}



let $c6f8b3abaeac122e$var$onAttributeAddeds = [];
let $c6f8b3abaeac122e$var$onElRemoveds = [];
let $c6f8b3abaeac122e$var$onElAddeds = [];
let $c6f8b3abaeac122e$var$onValueAttributeChangeds = [];
let $c6f8b3abaeac122e$var$currentlyObserving = false;
let $c6f8b3abaeac122e$var$isCollecting = false;
let $c6f8b3abaeac122e$var$deferredMutations = [];
let $c6f8b3abaeac122e$var$observer = new MutationObserver($c6f8b3abaeac122e$var$onMutate);
function $c6f8b3abaeac122e$export$c395e4fde41c37ff(callback) {
    $c6f8b3abaeac122e$var$onElAddeds.push(callback);
}
function $c6f8b3abaeac122e$export$bb8862ef847f5ec0(el, callback) {
    if (typeof callback === "function") {
        if (!el.__stimulusX_cleanups) el.__stimulusX_cleanups = [];
        el.__stimulusX_cleanups.push(callback);
    } else {
        callback = el;
        $c6f8b3abaeac122e$var$onElRemoveds.push(callback);
    }
}
function $c6f8b3abaeac122e$export$545f7104b1510552(callback) {
    $c6f8b3abaeac122e$var$onAttributeAddeds.push(callback);
}
function $c6f8b3abaeac122e$export$5d89a587b01747c6(el, name, callback) {
    if (!el.__stimulusX_attributeCleanups) el.__stimulusX_attributeCleanups = {};
    if (!el.__stimulusX_attributeCleanups[name]) el.__stimulusX_attributeCleanups[name] = [];
    el.__stimulusX_attributeCleanups[name].push(callback);
}
function $c6f8b3abaeac122e$export$309d6f15c1c4d36e(callback) {
    $c6f8b3abaeac122e$var$onValueAttributeChangeds.push(callback);
}
function $c6f8b3abaeac122e$export$2c8bfe603cc113da(el, names) {
    if (!el.__stimulusX_attributeCleanups) return;
    Object.entries(el.__stimulusX_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el.__stimulusX_attributeCleanups[name];
        }
    });
}
function $c6f8b3abaeac122e$export$21fc366069a4f56f(el) {
    el.__stimulusX_cleanups?.forEach((0, $eae25d6e66596517$export$edbe2d8b64bcb07c));
    while(el.__stimulusX_cleanups?.length)el.__stimulusX_cleanups.pop()();
}
function $c6f8b3abaeac122e$export$1a5ae5db40475a2d() {
    $c6f8b3abaeac122e$var$observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    $c6f8b3abaeac122e$var$currentlyObserving = true;
}
function $c6f8b3abaeac122e$export$d4f6b05796af6998() {
    $c6f8b3abaeac122e$export$2f1f1886cd00d96e();
    $c6f8b3abaeac122e$var$observer.disconnect();
    $c6f8b3abaeac122e$var$currentlyObserving = false;
}
let $c6f8b3abaeac122e$var$queuedMutations = [];
function $c6f8b3abaeac122e$export$2f1f1886cd00d96e() {
    let records = $c6f8b3abaeac122e$var$observer.takeRecords();
    $c6f8b3abaeac122e$var$queuedMutations.push(()=>records.length > 0 && $c6f8b3abaeac122e$var$onMutate(records));
    let queueLengthWhenTriggered = $c6f8b3abaeac122e$var$queuedMutations.length;
    queueMicrotask(()=>{
        // If these two lengths match, then we KNOW that this is the LAST
        // flush in the current event loop. This way, we can process
        // all mutations in one batch at the end of everything...
        if ($c6f8b3abaeac122e$var$queuedMutations.length === queueLengthWhenTriggered) // Now Alpine can process all the mutations...
        while($c6f8b3abaeac122e$var$queuedMutations.length > 0)$c6f8b3abaeac122e$var$queuedMutations.shift()();
    });
}
function $c6f8b3abaeac122e$export$c98382a3d82f9519(callback) {
    if (!$c6f8b3abaeac122e$var$currentlyObserving) return callback();
    $c6f8b3abaeac122e$export$d4f6b05796af6998();
    let result = callback();
    $c6f8b3abaeac122e$export$1a5ae5db40475a2d();
    return result;
}
function $c6f8b3abaeac122e$export$9a7d8d7577dd8469() {
    $c6f8b3abaeac122e$var$isCollecting = true;
}
function $c6f8b3abaeac122e$export$47d46026c1b12c48() {
    $c6f8b3abaeac122e$var$isCollecting = false;
    $c6f8b3abaeac122e$var$onMutate($c6f8b3abaeac122e$var$deferredMutations);
    $c6f8b3abaeac122e$var$deferredMutations = [];
}
function $c6f8b3abaeac122e$var$onMutate(mutations) {
    if ($c6f8b3abaeac122e$var$isCollecting) {
        $c6f8b3abaeac122e$var$deferredMutations = $c6f8b3abaeac122e$var$deferredMutations.concat(mutations);
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
        $c6f8b3abaeac122e$export$2c8bfe603cc113da(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        $c6f8b3abaeac122e$var$onAttributeAddeds.forEach((i)=>i(el, attrs));
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
        $c6f8b3abaeac122e$var$onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        $c6f8b3abaeac122e$var$onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}



const $50e97065b94a2e88$var$defaultOptions = {
    optIn: false,
    compileDirectives: true,
    trackDeep: false
};
let $50e97065b94a2e88$var$options = $50e97065b94a2e88$var$defaultOptions;
function $50e97065b94a2e88$export$6df0712d20d2cc08(key) {
    return $50e97065b94a2e88$var$options[key];
}
function $50e97065b94a2e88$export$d2312e68e1f5ad00() {
    return $50e97065b94a2e88$var$options;
}
function $50e97065b94a2e88$export$add91eafeaeab287(opts) {
    $50e97065b94a2e88$var$options = Object.assign({}, $50e97065b94a2e88$var$defaultOptions, opts);
    return $50e97065b94a2e88$var$options;
}


function $61c34dda51f70fa1$export$d56142fa17014959(ControllerClass) {
    return class extends ControllerClass {
        constructor(context){
            super(context);
            // Override the attribute setter so that our mutation observer doesn't pick up on changes
            // that are also already being handled directly by Stimulus.
            const setData = this.data.set;
            this.data.set = (key, value)=>{
                (0, $c6f8b3abaeac122e$export$c98382a3d82f9519)(()=>setData.call(this.data, key, value));
            };
            // Create a reactive controller object
            const trackDeep = (0, $50e97065b94a2e88$export$6df0712d20d2cc08)("trackDeep") || this.constructor.reactive === "deep";
            const reactiveSelf = trackDeep ? (0, $3ee5a2b2e05cc741$export$90a44edba14e47be)(this) : (0, $3ee5a2b2e05cc741$export$8d81cefd22d22260)(this);
            // Initialize watched property callbacks
            const watchedProps = this.constructor.watch || [];
            watchedProps.forEach((prop)=>$61c34dda51f70fa1$export$dcc3676fc96ef4c(reactiveSelf, prop));
            // Return the reactive controller instance
            return reactiveSelf;
        }
        connect() {
            // Initialize the DOM tree and run directives when connected
            super.connect();
            (0, $eae25d6e66596517$export$bdd553fddd433dcb)(()=>(0, $85d582547429ac89$export$b1432670dab450da)(this.element));
        }
    };
}
function $61c34dda51f70fa1$export$6d5f0ef1727b562e(el, identifier) {
    const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
    if (controllerElement) return (0, $85d582547429ac89$export$8d516e055d924071).getControllerForElementAndIdentifier(controllerElement, identifier);
}
function $61c34dda51f70fa1$export$121af9acc174ac93(controller, property) {
    let value = (0, $5OpyM$getProperty)(controller, property);
    if (typeof value === "function") value = value.apply(controller);
    return value;
}
function $61c34dda51f70fa1$export$dcc3676fc96ef4c(controller, propertyRef) {
    const getter = ()=>$61c34dda51f70fa1$export$121af9acc174ac93(controller, propertyRef);
    const cleanup = (0, $3ee5a2b2e05cc741$export$3db5d71bdb2d5499)(getter, (value, oldValue)=>{
        $61c34dda51f70fa1$var$callCallbacks(controller, propertyRef, value, oldValue, false);
    });
    // Run once on creation
    $61c34dda51f70fa1$var$callCallbacks(controller, propertyRef, getter(), undefined, true);
    const rootElement = controller.element;
    if (!rootElement.__stimulusX_cleanups) rootElement.__stimulusX_cleanups = [];
    rootElement.__stimulusX_cleanups.push(cleanup);
}
function $61c34dda51f70fa1$var$callCallbacks(controller, propertyRef, value, oldValue, initial) {
    // Generic callback, called when _any_ watched property changes
    if (typeof controller.watchedPropertyChanged === "function") controller.watchedPropertyChanged(propertyRef, value, oldValue, {
        initial: initial
    });
    // Property-specific change callback
    const propertyWatcherCallback = controller[`${$61c34dda51f70fa1$var$getCamelizedPropertyRef(propertyRef)}PropertyChanged`];
    if (typeof propertyWatcherCallback === "function") propertyWatcherCallback.call(controller, value, oldValue, {
        initial: initial
    });
}
function $61c34dda51f70fa1$var$getCamelizedPropertyRef(propertyRef) {
    return $61c34dda51f70fa1$var$camelCase(propertyRef.replace(".", " "));
}
function $61c34dda51f70fa1$var$camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}


function $f3ad94c9f84f4d57$export$8a7688a96d852767(subject) {
    return subject.replace(/:/g, "_").split("_").map((word, index)=>index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}
function $f3ad94c9f84f4d57$export$588732934346abbf(el, callback) {
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        $f3ad94c9f84f4d57$export$588732934346abbf(node, callback, false);
        node = node.nextElementSibling;
    }
}
function $f3ad94c9f84f4d57$export$248d38f6296296c5(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === "object" && tx === ty ? ok(x).length === ok(y).length && ok(x).every((key)=>$f3ad94c9f84f4d57$export$248d38f6296296c5(x[key], y[key])) : x === y;
}





const $e46f4b33a7e1fc07$var$modifierHandlers = [];
function $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3(name, handler) {
    $e46f4b33a7e1fc07$var$modifierHandlers.push({
        name: name,
        handler: handler
    });
}
function $e46f4b33a7e1fc07$export$f1696300e8775372(value, modifiers = []) {
    return modifiers.reduce((value, modifier)=>{
        const { name: name, args: args } = modifier;
        if ($e46f4b33a7e1fc07$var$modifierExists(name)) return $e46f4b33a7e1fc07$var$applyModifier(value, name, args);
        else {
            console.error(`Unknown modifier '${modifier}'`);
            return value;
        }
    }, value);
}
function $e46f4b33a7e1fc07$var$applyModifier(value, name, args = []) {
    return $e46f4b33a7e1fc07$var$getModifier(name).handler(value, args);
}
function $e46f4b33a7e1fc07$var$modifierExists(name) {
    return !!$e46f4b33a7e1fc07$var$getModifier(name);
}
function $e46f4b33a7e1fc07$var$getModifier(name) {
    return $e46f4b33a7e1fc07$var$modifierHandlers.find((modifier)=>modifier.name === name);
}
function $e46f4b33a7e1fc07$export$b03ed9b4aed11ed(modifier) {
    const matches = modifier.match(/^([^\(]+)(?=\((?=(.*)\)$)|$)/);
    if (matches && typeof matches[2] !== "undefined") {
        const argStr = matches[2].trim();
        const firstChar = argStr[0];
        const lastChar = argStr[argStr.length - 1];
        let argValue = null;
        if (firstChar === "'" && lastChar === "'" || firstChar === "`" && lastChar === "`" || firstChar === `"` && lastChar === `"`) argValue = argStr.slice(1, argStr.length - 1);
        else argValue = JSON.parse(argStr);
        return {
            name: matches[1],
            args: [
                argValue
            ]
        };
    } else return {
        name: modifier,
        args: []
    };
}




let $695a1f9e83b71f7c$var$directiveHandlers = {};
let $695a1f9e83b71f7c$var$isDeferringHandlers = false;
let $695a1f9e83b71f7c$var$directiveHandlerStacks = new Map();
let $695a1f9e83b71f7c$var$currentHandlerStackKey = Symbol();
let $695a1f9e83b71f7c$var$attributePrefix = "data-bind-";
function $695a1f9e83b71f7c$export$99b43ad1ed32e735(name, callback) {
    $695a1f9e83b71f7c$var$directiveHandlers[name] = callback;
}
function $695a1f9e83b71f7c$export$19b57a1ea2e090cb(name) {
    return Object.keys($695a1f9e83b71f7c$var$directiveHandlers).includes(name);
}
function $695a1f9e83b71f7c$export$90a684c00f3df6ed(el, attributes) {
    let directives = [];
    if (el.__stimulusX_directives) directives = el.__stimulusX_directives;
    else {
        directives = Array.from(attributes).filter($695a1f9e83b71f7c$var$isDirectiveAttribute).map($695a1f9e83b71f7c$var$toParsedDirectives);
        if ((0, $50e97065b94a2e88$export$6df0712d20d2cc08)("compileDirectives") === true) el.__stimulusX_directives = directives;
    }
    return directives.flat().filter((d)=>d).map((directive)=>$695a1f9e83b71f7c$export$1dd40105af141b08(el, directive));
}
function $695a1f9e83b71f7c$export$3d81bdeca067fd2d(callback) {
    $695a1f9e83b71f7c$var$isDeferringHandlers = true;
    let key = Symbol();
    $695a1f9e83b71f7c$var$currentHandlerStackKey = key;
    $695a1f9e83b71f7c$var$directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while($695a1f9e83b71f7c$var$directiveHandlerStacks.get(key).length)$695a1f9e83b71f7c$var$directiveHandlerStacks.get(key).shift()();
        $695a1f9e83b71f7c$var$directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        $695a1f9e83b71f7c$var$isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function $695a1f9e83b71f7c$export$a51f92c9c1609d03(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, $3ee5a2b2e05cc741$export$1ecd3170301acce1)(el);
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
function $695a1f9e83b71f7c$export$1dd40105af141b08(el, directive) {
    let handler = $695a1f9e83b71f7c$var$directiveHandlers[directive.type] || (()=>{});
    let [utilities, cleanup] = $695a1f9e83b71f7c$export$a51f92c9c1609d03(el);
    (0, $c6f8b3abaeac122e$export$5d89a587b01747c6)(el, directive.attr, cleanup);
    let wrapperHandler = ()=>{
        let controller = (0, $61c34dda51f70fa1$export$6d5f0ef1727b562e)(el, directive.identifier);
        if (controller) {
            if (!(0, $3ee5a2b2e05cc741$export$352205f445242f02)(controller)) {
                console.warn(`StimulusX: Directive attached to non-reactive controller '${directive.identifier}'`, el);
                return;
            }
            handler = handler.bind(handler, el, directive, {
                ...utilities,
                evaluate: $695a1f9e83b71f7c$var$evaluator(controller),
                modify: (0, $e46f4b33a7e1fc07$export$f1696300e8775372)
            });
            $695a1f9e83b71f7c$var$isDeferringHandlers ? $695a1f9e83b71f7c$var$directiveHandlerStacks.get($695a1f9e83b71f7c$var$currentHandlerStackKey).push(handler) : handler();
        } else console.error(`Controller '${directive.identifier}' not found`);
    };
    return wrapperHandler;
}
function $695a1f9e83b71f7c$var$evaluator(controller) {
    return (property)=>(0, $61c34dda51f70fa1$export$121af9acc174ac93)(controller, property);
}
function $695a1f9e83b71f7c$var$matchedAttributeRegex() {
    return new RegExp(`${$695a1f9e83b71f7c$var$attributePrefix}(${Object.keys($695a1f9e83b71f7c$var$directiveHandlers).join("|")})$`);
}
function $695a1f9e83b71f7c$var$isDirectiveAttribute({ name: name }) {
    return $695a1f9e83b71f7c$var$matchedAttributeRegex().test(name);
}
function $695a1f9e83b71f7c$var$toParsedDirectives({ name: name, value: value }) {
    const type = name.match($695a1f9e83b71f7c$var$matchedAttributeRegex())[1];
    const bindingExpressions = value.trim().split(/\s+(?![^\(]*\))/) // split string on all spaces not contained in parentheses
    .filter((e)=>e);
    return bindingExpressions.map((bindingExpression)=>{
        const subjectMatch = bindingExpression.match(/^([a-zA-Z0-9\-_]+)~/);
        const subject = subjectMatch ? subjectMatch[1] : null;
        let valueExpression = subject ? bindingExpression.replace(`${subject}~`, "") : bindingExpression;
        let modifiers = valueExpression.match(/\:[^:\]]+(?=[^\]]*$)/g) || [];
        modifiers = modifiers.map((i)=>i.replace(":", ""));
        valueExpression = valueExpression.split(":")[0];
        if (valueExpression[0] === "!") {
            valueExpression = valueExpression.slice(1);
            modifiers.push("not");
        }
        modifiers = modifiers.map((m)=>(0, $e46f4b33a7e1fc07$export$b03ed9b4aed11ed)(m));
        const identifierMatch = valueExpression.match(/^([a-zA-Z0-9\-_]+)#/);
        if (!identifierMatch) {
            console.warn(`Invalid binding descriptor ${bindingExpression}`);
            return null;
        }
        const identifier = identifierMatch[1];
        let property = identifier ? valueExpression.replace(`${identifier}#`, "") : valueExpression;
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



let $85d582547429ac89$var$markerCount = 1;
let $85d582547429ac89$export$8d516e055d924071 = null;
function $85d582547429ac89$export$2cd8252107eb640b(app, opts = {}) {
    const { optIn: optIn } = (0, $50e97065b94a2e88$export$add91eafeaeab287)(opts);
    $85d582547429ac89$export$8d516e055d924071 = app;
    // Override controller registration to insert a reactive subclass instead of the original
    $85d582547429ac89$export$8d516e055d924071.register = function(identifier, ControllerClass) {
        let controllerConstructor;
        if (optIn === false || ControllerClass.reactive === true) controllerConstructor = (0, $61c34dda51f70fa1$export$d56142fa17014959)(ControllerClass, $85d582547429ac89$export$8d516e055d924071);
        else controllerConstructor = ControllerClass;
        $85d582547429ac89$export$8d516e055d924071.load({
            identifier: identifier,
            controllerConstructor: controllerConstructor
        });
    };
    // Handle re-initializing reactive effects after Turbo morphing
    document.addEventListener("turbo:before-morph-element", $85d582547429ac89$export$24aca0785fb6fc3);
    document.addEventListener("turbo:morph-element", $85d582547429ac89$export$e08553505fddfb4d);
    // start watching the dom for changes
    (0, $c6f8b3abaeac122e$export$1a5ae5db40475a2d)();
    (0, $c6f8b3abaeac122e$export$c395e4fde41c37ff)((el)=>{
        // Controller root elements init their own tree when connected so we can skip them.
        // if (el.hasAttribute("data-controller")) return;
        (0, $eae25d6e66596517$export$bdd553fddd433dcb)(()=>$85d582547429ac89$export$b1432670dab450da(el));
    });
    (0, $c6f8b3abaeac122e$export$bb8862ef847f5ec0)((el)=>(0, $eae25d6e66596517$export$bdd553fddd433dcb)(()=>$85d582547429ac89$export$b68acd4f72f4a123(el)));
    (0, $c6f8b3abaeac122e$export$545f7104b1510552)((el, attrs)=>{
        $85d582547429ac89$var$handleValueAttributes(el, attrs);
        (0, $695a1f9e83b71f7c$export$90a684c00f3df6ed)(el, attrs).forEach((handle)=>handle());
    });
}
function $85d582547429ac89$export$b1432670dab450da(el) {
    (0, $695a1f9e83b71f7c$export$3d81bdeca067fd2d)(()=>{
        (0, $f3ad94c9f84f4d57$export$588732934346abbf)(el, (el)=>{
            if (el.__stimulusX_marker) return;
            (0, $695a1f9e83b71f7c$export$90a684c00f3df6ed)(el, el.attributes).forEach((handle)=>handle());
            el.__stimulusX_marker = $85d582547429ac89$var$markerCount++;
        });
    });
}
function $85d582547429ac89$export$b68acd4f72f4a123(root) {
    (0, $f3ad94c9f84f4d57$export$588732934346abbf)(root, (el)=>{
        (0, $c6f8b3abaeac122e$export$21fc366069a4f56f)(el);
        (0, $c6f8b3abaeac122e$export$2c8bfe603cc113da)(el);
        delete el.__stimulusX_directives;
        delete el.__stimulusX_marker;
    });
}
function $85d582547429ac89$export$24aca0785fb6fc3({ target: target, detail: { newElement: newElement } }) {
    if (!newElement && target.__stimulusX_marker) return $85d582547429ac89$export$b68acd4f72f4a123(target);
    delete target.__stimulusX_marker;
}
function $85d582547429ac89$export$e08553505fddfb4d({ target: target, detail: { newElement: newElement } }) {
    if (newElement) $85d582547429ac89$export$b1432670dab450da(target);
}
// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function $85d582547429ac89$var$handleValueAttributes(el, attrs) {
    if (!el.hasAttribute("data-controller")) return;
    const controllerNames = el.getAttribute("data-controller").trim().split(" ").filter((e)=>e);
    const valueAttributeMatcher = new RegExp(`^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`);
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        const matches = attr.name.match(valueAttributeMatcher);
        if (matches && matches.length) {
            const identifier = matches[1];
            const valueName = matches[2];
            const controller = $85d582547429ac89$export$8d516e055d924071.getControllerForElementAndIdentifier(el, identifier);
            (0, $c6f8b3abaeac122e$export$c98382a3d82f9519)(()=>{
                controller[`${valueName}Value`] = controller[`${valueName}Value`];
            });
        }
    }
}






(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("downcase", (value)=>value.toString().toLowerCase());



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("gt", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:gt` modifier");
        return false;
    }
    return value > args[0];
});



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("gte", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:gte` modifier");
        return false;
    }
    return value >= args[0];
});




(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("is", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:is` modifier");
        return false;
    } else return (0, $f3ad94c9f84f4d57$export$248d38f6296296c5)(value, args[0]);
});




(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("isNot", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:isNot` modifier");
        return false;
    } else return !(0, $f3ad94c9f84f4d57$export$248d38f6296296c5)(value, args[0]);
});



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("lt", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:lt` modifier");
        return false;
    }
    return value < args[0];
});



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("lte", (value, args = [])=>{
    if (args.length === 0) {
        console.warn("Missing argument for `:lte` modifier");
        return false;
    }
    return value <= args[0];
});



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("not", (value)=>!value);



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("strip", (value)=>value.toString().trim());



(0, $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3)("upcase", (value)=>value.toString().toUpperCase());




function $bf07eb3c6349a827$export$2706f8d45625eda6(el, value) {
    if (Array.isArray(value)) return $bf07eb3c6349a827$var$setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return $bf07eb3c6349a827$var$setClassesFromObject(el, value);
    return $bf07eb3c6349a827$var$setClassesFromString(el, value);
}
function $bf07eb3c6349a827$var$setClassesFromString(el, classString) {
    classString = classString || "";
    let missingClasses = (classString)=>classString.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let classes = missingClasses(classString);
    el.classList.add(...classes);
    return ()=>el.classList.remove(...classes);
}
function $bf07eb3c6349a827$var$setClassesFromObject(el, classObject) {
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
const $14a833556dde2961$var$booleanAttributes = new Set([
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
const $14a833556dde2961$var$preserveIfFalsey = [
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected"
];
function $14a833556dde2961$export$2385a24977818dd0(element, name, value) {
    switch(name){
        case "class":
            $14a833556dde2961$var$bindClasses(element, value);
            break;
        case "checked":
        case "selected":
            $14a833556dde2961$var$bindAttributeAndProperty(element, name, value);
            break;
        default:
            $14a833556dde2961$var$bindAttribute(element, name, value);
            break;
    }
}
function $14a833556dde2961$var$bindClasses(element, value) {
    if (element.__stimulusX_undoClasses) element.__stimulusX_undoClasses();
    element.__stimulusX_undoClasses = (0, $bf07eb3c6349a827$export$2706f8d45625eda6)(element, value);
}
function $14a833556dde2961$var$bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && $14a833556dde2961$var$attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if ($14a833556dde2961$var$isBooleanAttr(name)) value = name;
        $14a833556dde2961$var$setIfChanged(el, name, value);
    }
}
function $14a833556dde2961$var$bindAttributeAndProperty(el, name, value) {
    $14a833556dde2961$var$bindAttribute(el, name, value);
    $14a833556dde2961$var$setPropertyIfChanged(el, name, value);
}
function $14a833556dde2961$var$setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function $14a833556dde2961$var$setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function $14a833556dde2961$var$isBooleanAttr(attrName) {
    return $14a833556dde2961$var$booleanAttributes.has(attrName);
}
function $14a833556dde2961$var$attributeShouldntBePreservedIfFalsy(name) {
    return !$14a833556dde2961$var$preserveIfFalsey.includes(name);
}


(0, $695a1f9e83b71f7c$export$99b43ad1ed32e735)("attr", (el, { property: property, subject: subject, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>{
        (0, $c6f8b3abaeac122e$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            (0, $14a833556dde2961$export$2385a24977818dd0)(el, subject, value);
        });
    });
});




(0, $695a1f9e83b71f7c$export$99b43ad1ed32e735)("text", (el, { property: property, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>(0, $c6f8b3abaeac122e$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            el.textContent = value?.toString();
        }));
});


const $cf838c15c8b009ba$var$StimulusX = {
    init: $85d582547429ac89$export$2cd8252107eb640b,
    modifier: $e46f4b33a7e1fc07$export$cd4b50bb4e5c05a3,
    directive: $695a1f9e83b71f7c$export$99b43ad1ed32e735,
    nextTick: $eae25d6e66596517$export$bdd553fddd433dcb
};
var $cf838c15c8b009ba$export$2e2bcd8739ae039 = $cf838c15c8b009ba$var$StimulusX;


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default, $eae25d6e66596517$export$bdd553fddd433dcb as nextTick};
//# sourceMappingURL=stimulus-x.js.map
