const $76daf8d022148001$var$modifierHandlers = [];
function $76daf8d022148001$export$cd4b50bb4e5c05a3(name, handler) {
    $76daf8d022148001$var$modifierHandlers.push({
        name: name,
        handler: handler
    });
}
function $76daf8d022148001$export$f1696300e8775372(value, modifiers = []) {
    return modifiers.reduce((value, modifier)=>{
        if ($76daf8d022148001$var$modifierExists(modifier)) return $76daf8d022148001$var$applyModifier(modifier, value);
        else {
            console.error(`Unknown modifier '${modifier}'`);
            return value;
        }
    }, value);
}
function $76daf8d022148001$var$applyModifier(name, value) {
    return $76daf8d022148001$var$getModifier(name).handler(value);
}
function $76daf8d022148001$var$modifierExists(name) {
    return !!$76daf8d022148001$var$getModifier(name);
}
function $76daf8d022148001$var$getModifier(name) {
    return $76daf8d022148001$var$modifierHandlers.find((modifier)=>modifier.name === name);
}


let $8d51fac66e0b4c1b$var$flushPending = false;
let $8d51fac66e0b4c1b$var$flushing = false;
let $8d51fac66e0b4c1b$var$queue = [];
let $8d51fac66e0b4c1b$var$lastFlushedIndex = -1;
let $8d51fac66e0b4c1b$var$tickStack = [];
let $8d51fac66e0b4c1b$var$isHolding = false;
function $8d51fac66e0b4c1b$export$d30788f2c20241cd(callback) {
    $8d51fac66e0b4c1b$export$fba1a0a20887772f(callback);
}
function $8d51fac66e0b4c1b$export$fba1a0a20887772f(job) {
    if (!$8d51fac66e0b4c1b$var$queue.includes(job)) $8d51fac66e0b4c1b$var$queue.push(job);
    $8d51fac66e0b4c1b$var$queueFlush();
}
function $8d51fac66e0b4c1b$export$edbe2d8b64bcb07c(job) {
    let index = $8d51fac66e0b4c1b$var$queue.indexOf(job);
    if (index !== -1 && index > $8d51fac66e0b4c1b$var$lastFlushedIndex) $8d51fac66e0b4c1b$var$queue.splice(index, 1);
}
function $8d51fac66e0b4c1b$var$queueFlush() {
    if (!$8d51fac66e0b4c1b$var$flushing && !$8d51fac66e0b4c1b$var$flushPending) {
        $8d51fac66e0b4c1b$var$flushPending = true;
        queueMicrotask($8d51fac66e0b4c1b$export$8ca066e62735a16c);
    }
}
function $8d51fac66e0b4c1b$export$8ca066e62735a16c() {
    $8d51fac66e0b4c1b$var$flushPending = false;
    $8d51fac66e0b4c1b$var$flushing = true;
    for(let i = 0; i < $8d51fac66e0b4c1b$var$queue.length; i++){
        $8d51fac66e0b4c1b$var$queue[i]();
        $8d51fac66e0b4c1b$var$lastFlushedIndex = i;
    }
    $8d51fac66e0b4c1b$var$queue.length = 0;
    $8d51fac66e0b4c1b$var$lastFlushedIndex = -1;
    $8d51fac66e0b4c1b$var$flushing = false;
}
function $8d51fac66e0b4c1b$export$bdd553fddd433dcb(callback = ()=>{}) {
    queueMicrotask(()=>{
        $8d51fac66e0b4c1b$var$isHolding || setTimeout(()=>{
            $8d51fac66e0b4c1b$export$d80ec80fb4bee1e6();
        });
    });
    return new Promise((res)=>{
        $8d51fac66e0b4c1b$var$tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function $8d51fac66e0b4c1b$export$d80ec80fb4bee1e6() {
    $8d51fac66e0b4c1b$var$isHolding = false;
    while($8d51fac66e0b4c1b$var$tickStack.length)$8d51fac66e0b4c1b$var$tickStack.shift()();
}
function $8d51fac66e0b4c1b$export$e9a53d8785d6cfc9() {
    $8d51fac66e0b4c1b$var$isHolding = true;
}


let $46a1f2608b4b91f0$var$onAttributeAddeds = [];
let $46a1f2608b4b91f0$var$onElRemoveds = [];
let $46a1f2608b4b91f0$var$onElAddeds = [];
let $46a1f2608b4b91f0$var$onValueAttributeChangeds = [];
let $46a1f2608b4b91f0$var$currentlyObserving = false;
let $46a1f2608b4b91f0$var$isCollecting = false;
let $46a1f2608b4b91f0$var$deferredMutations = [];
let $46a1f2608b4b91f0$var$observer = new MutationObserver($46a1f2608b4b91f0$var$onMutate);
function $46a1f2608b4b91f0$export$c395e4fde41c37ff(callback) {
    $46a1f2608b4b91f0$var$onElAddeds.push(callback);
}
function $46a1f2608b4b91f0$export$bb8862ef847f5ec0(el, callback) {
    if (typeof callback === "function") {
        if (!el.__stimulusX_cleanups) el.__stimulusX_cleanups = [];
        el.__stimulusX_cleanups.push(callback);
    } else {
        callback = el;
        $46a1f2608b4b91f0$var$onElRemoveds.push(callback);
    }
}
function $46a1f2608b4b91f0$export$545f7104b1510552(callback) {
    $46a1f2608b4b91f0$var$onAttributeAddeds.push(callback);
}
function $46a1f2608b4b91f0$export$5d89a587b01747c6(el, name, callback) {
    if (!el.__stimulusX_attributeCleanups) el.__stimulusX_attributeCleanups = {};
    if (!el.__stimulusX_attributeCleanups[name]) el.__stimulusX_attributeCleanups[name] = [];
    el.__stimulusX_attributeCleanups[name].push(callback);
}
function $46a1f2608b4b91f0$export$309d6f15c1c4d36e(callback) {
    $46a1f2608b4b91f0$var$onValueAttributeChangeds.push(callback);
}
function $46a1f2608b4b91f0$export$2c8bfe603cc113da(el, names) {
    if (!el.__stimulusX_attributeCleanups) return;
    Object.entries(el.__stimulusX_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el.__stimulusX_attributeCleanups[name];
        }
    });
}
function $46a1f2608b4b91f0$export$21fc366069a4f56f(el) {
    el.__stimulusX_cleanups?.forEach((0, $8d51fac66e0b4c1b$export$edbe2d8b64bcb07c));
    while(el.__stimulusX_cleanups?.length)el.__stimulusX_cleanups.pop()();
}
function $46a1f2608b4b91f0$export$1a5ae5db40475a2d() {
    $46a1f2608b4b91f0$var$observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    $46a1f2608b4b91f0$var$currentlyObserving = true;
}
function $46a1f2608b4b91f0$export$d4f6b05796af6998() {
    $46a1f2608b4b91f0$export$2f1f1886cd00d96e();
    $46a1f2608b4b91f0$var$observer.disconnect();
    $46a1f2608b4b91f0$var$currentlyObserving = false;
}
let $46a1f2608b4b91f0$var$queuedMutations = [];
function $46a1f2608b4b91f0$export$2f1f1886cd00d96e() {
    let records = $46a1f2608b4b91f0$var$observer.takeRecords();
    $46a1f2608b4b91f0$var$queuedMutations.push(()=>records.length > 0 && $46a1f2608b4b91f0$var$onMutate(records));
    let queueLengthWhenTriggered = $46a1f2608b4b91f0$var$queuedMutations.length;
    queueMicrotask(()=>{
        // If these two lengths match, then we KNOW that this is the LAST
        // flush in the current event loop. This way, we can process
        // all mutations in one batch at the end of everything...
        if ($46a1f2608b4b91f0$var$queuedMutations.length === queueLengthWhenTriggered) // Now Alpine can process all the mutations...
        while($46a1f2608b4b91f0$var$queuedMutations.length > 0)$46a1f2608b4b91f0$var$queuedMutations.shift()();
    });
}
function $46a1f2608b4b91f0$export$c98382a3d82f9519(callback) {
    if (!$46a1f2608b4b91f0$var$currentlyObserving) return callback();
    $46a1f2608b4b91f0$export$d4f6b05796af6998();
    let result = callback();
    $46a1f2608b4b91f0$export$1a5ae5db40475a2d();
    return result;
}
function $46a1f2608b4b91f0$export$9a7d8d7577dd8469() {
    $46a1f2608b4b91f0$var$isCollecting = true;
}
function $46a1f2608b4b91f0$export$47d46026c1b12c48() {
    $46a1f2608b4b91f0$var$isCollecting = false;
    $46a1f2608b4b91f0$var$onMutate($46a1f2608b4b91f0$var$deferredMutations);
    $46a1f2608b4b91f0$var$deferredMutations = [];
}
function $46a1f2608b4b91f0$var$onMutate(mutations) {
    if ($46a1f2608b4b91f0$var$isCollecting) {
        $46a1f2608b4b91f0$var$deferredMutations = $46a1f2608b4b91f0$var$deferredMutations.concat(mutations);
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
        $46a1f2608b4b91f0$export$2c8bfe603cc113da(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        $46a1f2608b4b91f0$var$onAttributeAddeds.forEach((i)=>i(el, attrs));
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
        $46a1f2608b4b91f0$var$onElRemoveds.forEach((i)=>i(node));
    }
    for (let node of addedNodes){
        if (!node.isConnected) continue;
        $46a1f2608b4b91f0$var$onElAddeds.forEach((i)=>i(node));
    }
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}


/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ let $d66fe74dfeff5f0b$var$e, $d66fe74dfeff5f0b$var$t, $d66fe74dfeff5f0b$var$i, $d66fe74dfeff5f0b$var$s, $d66fe74dfeff5f0b$var$r;
let $d66fe74dfeff5f0b$var$n = {}, $d66fe74dfeff5f0b$var$l = ()=>{}, $d66fe74dfeff5f0b$var$o = Object.assign, $d66fe74dfeff5f0b$var$a = Object.prototype.hasOwnProperty, $d66fe74dfeff5f0b$var$u = (e, t)=>$d66fe74dfeff5f0b$var$a.call(e, t), $d66fe74dfeff5f0b$var$h = Array.isArray, $d66fe74dfeff5f0b$var$c = (e)=>"[object Map]" === $d66fe74dfeff5f0b$var$_(e), $d66fe74dfeff5f0b$var$f = (e)=>"symbol" == typeof e, $d66fe74dfeff5f0b$var$p = (e)=>null !== e && "object" == typeof e, $d66fe74dfeff5f0b$var$d = Object.prototype.toString, $d66fe74dfeff5f0b$var$_ = (e)=>$d66fe74dfeff5f0b$var$d.call(e), $d66fe74dfeff5f0b$var$v = (e)=>"string" == typeof e && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e, $d66fe74dfeff5f0b$var$g = (e, t)=>!Object.is(e, t);
class $d66fe74dfeff5f0b$export$1168ed9dbc71ddbd {
    constructor(t = !1){
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = $d66fe74dfeff5f0b$var$e, !t && $d66fe74dfeff5f0b$var$e && (this.index = ($d66fe74dfeff5f0b$var$e.scopes || ($d66fe74dfeff5f0b$var$e.scopes = [])).push(this) - 1);
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            let e, t;
            if (this._isPaused = !0, this.scopes) for(e = 0, t = this.scopes.length; e < t; e++)this.scopes[e].pause();
            for(e = 0, t = this.effects.length; e < t; e++)this.effects[e].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            let e, t;
            if (this._isPaused = !1, this.scopes) for(e = 0, t = this.scopes.length; e < t; e++)this.scopes[e].resume();
            for(e = 0, t = this.effects.length; e < t; e++)this.effects[e].resume();
        }
    }
    run(t) {
        if (this._active) {
            let i = $d66fe74dfeff5f0b$var$e;
            try {
                return $d66fe74dfeff5f0b$var$e = this, t();
            } finally{
                $d66fe74dfeff5f0b$var$e = i;
            }
        }
    }
    on() {
        1 == ++this._on && (this.prevScope = $d66fe74dfeff5f0b$var$e, $d66fe74dfeff5f0b$var$e = this);
    }
    off() {
        this._on > 0 && 0 == --this._on && ($d66fe74dfeff5f0b$var$e = this.prevScope, this.prevScope = void 0);
    }
    stop(e) {
        if (this._active) {
            let t, i;
            for(t = 0, this._active = !1, i = this.effects.length; t < i; t++)this.effects[t].stop();
            for(t = 0, this.effects.length = 0, i = this.cleanups.length; t < i; t++)this.cleanups[t]();
            if (this.cleanups.length = 0, this.scopes) {
                for(t = 0, i = this.scopes.length; t < i; t++)this.scopes[t].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !e) {
                let e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
            }
            this.parent = void 0;
        }
    }
}
function $d66fe74dfeff5f0b$export$7056603ea81600be(e) {
    return new $d66fe74dfeff5f0b$export$1168ed9dbc71ddbd(e);
}
function $d66fe74dfeff5f0b$export$c7be4b0125a10cba() {
    return $d66fe74dfeff5f0b$var$e;
}
function $d66fe74dfeff5f0b$export$a780418acd4762da(t, i = !1) {
    $d66fe74dfeff5f0b$var$e && $d66fe74dfeff5f0b$var$e.cleanups.push(t);
}
let $d66fe74dfeff5f0b$export$37ee493b2f34ee54 = {
    ACTIVE: 1,
    1: "ACTIVE",
    RUNNING: 2,
    2: "RUNNING",
    TRACKING: 4,
    4: "TRACKING",
    NOTIFIED: 8,
    8: "NOTIFIED",
    DIRTY: 16,
    16: "DIRTY",
    ALLOW_RECURSE: 32,
    32: "ALLOW_RECURSE",
    PAUSED: 64,
    64: "PAUSED",
    EVALUATED: 128,
    128: "EVALUATED"
}, $d66fe74dfeff5f0b$var$E = new WeakSet;
class $d66fe74dfeff5f0b$export$28352bb4dd362521 {
    constructor(t){
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $d66fe74dfeff5f0b$var$e && $d66fe74dfeff5f0b$var$e.active && $d66fe74dfeff5f0b$var$e.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        64 & this.flags && (this.flags &= -65, $d66fe74dfeff5f0b$var$E.has(this) && ($d66fe74dfeff5f0b$var$E.delete(this), this.trigger()));
    }
    notify() {
        (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || $d66fe74dfeff5f0b$var$m(this));
    }
    run() {
        if (!(1 & this.flags)) return this.fn();
        this.flags |= 2, $d66fe74dfeff5f0b$var$U(this), $d66fe74dfeff5f0b$var$k(this);
        let e = $d66fe74dfeff5f0b$var$t, i = $d66fe74dfeff5f0b$var$P;
        $d66fe74dfeff5f0b$var$t = this, $d66fe74dfeff5f0b$var$P = !0;
        try {
            return this.fn();
        } finally{
            $d66fe74dfeff5f0b$var$D(this), $d66fe74dfeff5f0b$var$t = e, $d66fe74dfeff5f0b$var$P = i, this.flags &= -3;
        }
    }
    stop() {
        if (1 & this.flags) {
            for(let e = this.deps; e; e = e.nextDep)$d66fe74dfeff5f0b$var$L(e);
            this.deps = this.depsTail = void 0, $d66fe74dfeff5f0b$var$U(this), this.onStop && this.onStop(), this.flags &= -2;
        }
    }
    trigger() {
        64 & this.flags ? $d66fe74dfeff5f0b$var$E.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
        $d66fe74dfeff5f0b$var$O(this) && this.run();
    }
    get dirty() {
        return $d66fe74dfeff5f0b$var$O(this);
    }
}
let $d66fe74dfeff5f0b$var$T = 0;
function $d66fe74dfeff5f0b$var$m(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = $d66fe74dfeff5f0b$var$s, $d66fe74dfeff5f0b$var$s = e;
        return;
    }
    e.next = $d66fe74dfeff5f0b$var$i, $d66fe74dfeff5f0b$var$i = e;
}
function $d66fe74dfeff5f0b$var$A() {
    let e;
    if (!(--$d66fe74dfeff5f0b$var$T > 0)) {
        if ($d66fe74dfeff5f0b$var$s) {
            let e = $d66fe74dfeff5f0b$var$s;
            for($d66fe74dfeff5f0b$var$s = void 0; e;){
                let t = e.next;
                e.next = void 0, e.flags &= -9, e = t;
            }
        }
        for(; $d66fe74dfeff5f0b$var$i;){
            let t = $d66fe74dfeff5f0b$var$i;
            for($d66fe74dfeff5f0b$var$i = void 0; t;){
                let i = t.next;
                if (t.next = void 0, t.flags &= -9, 1 & t.flags) try {
                    t.trigger();
                } catch (t) {
                    e || (e = t);
                }
                t = i;
            }
        }
        if (e) throw e;
    }
}
function $d66fe74dfeff5f0b$var$k(e) {
    for(let t = e.deps; t; t = t.nextDep)t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $d66fe74dfeff5f0b$var$D(e) {
    let t, i = e.depsTail, s = i;
    for(; s;){
        let e = s.prevDep;
        -1 === s.version ? (s === i && (i = e), $d66fe74dfeff5f0b$var$L(s), function(e) {
            let { prevDep: t, nextDep: i } = e;
            t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
        }(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = e;
    }
    e.deps = t, e.depsTail = i;
}
function $d66fe74dfeff5f0b$var$O(e) {
    for(let t = e.deps; t; t = t.nextDep)if (t.dep.version !== t.version || t.dep.computed && ($d66fe74dfeff5f0b$var$I(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty;
}
function $d66fe74dfeff5f0b$var$I(e) {
    if (4 & e.flags && !(16 & e.flags) || (e.flags &= -17, e.globalVersion === $d66fe74dfeff5f0b$var$H) || (e.globalVersion = $d66fe74dfeff5f0b$var$H, !e.isSSR && 128 & e.flags && (!e.deps && !e._dirty || !$d66fe74dfeff5f0b$var$O(e)))) return;
    e.flags |= 2;
    let i = e.dep, s = $d66fe74dfeff5f0b$var$t, r = $d66fe74dfeff5f0b$var$P;
    $d66fe74dfeff5f0b$var$t = e, $d66fe74dfeff5f0b$var$P = !0;
    try {
        $d66fe74dfeff5f0b$var$k(e);
        let t = e.fn(e._value);
        (0 === i.version || $d66fe74dfeff5f0b$var$g(t, e._value)) && (e.flags |= 128, e._value = t, i.version++);
    } catch (e) {
        throw i.version++, e;
    } finally{
        $d66fe74dfeff5f0b$var$t = s, $d66fe74dfeff5f0b$var$P = r, $d66fe74dfeff5f0b$var$D(e), e.flags &= -3;
    }
}
function $d66fe74dfeff5f0b$var$L(e, t = !1) {
    let { dep: i, prevSub: s, nextSub: r } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), i.subs === e && (i.subs = s, !s && i.computed)) {
        i.computed.flags &= -5;
        for(let e = i.computed.deps; e; e = e.nextDep)$d66fe74dfeff5f0b$var$L(e, !0);
    }
    t || --i.sc || !i.map || i.map.delete(i.key);
}
function $d66fe74dfeff5f0b$export$dc573d8a6576cdb3(e, t) {
    e.effect instanceof $d66fe74dfeff5f0b$export$28352bb4dd362521 && (e = e.effect.fn);
    let i = new $d66fe74dfeff5f0b$export$28352bb4dd362521(e);
    t && $d66fe74dfeff5f0b$var$o(i, t);
    try {
        i.run();
    } catch (e) {
        throw i.stop(), e;
    }
    let s = i.run.bind(i);
    return s.effect = i, s;
}
function $d66fe74dfeff5f0b$export$fa6813432f753b0d(e) {
    e.effect.stop();
}
let $d66fe74dfeff5f0b$var$P = !0, $d66fe74dfeff5f0b$var$W = [];
function $d66fe74dfeff5f0b$export$938a971395fef855() {
    $d66fe74dfeff5f0b$var$W.push($d66fe74dfeff5f0b$var$P), $d66fe74dfeff5f0b$var$P = !1;
}
function $d66fe74dfeff5f0b$export$1f8ffc6fd33b1d16() {
    $d66fe74dfeff5f0b$var$W.push($d66fe74dfeff5f0b$var$P), $d66fe74dfeff5f0b$var$P = !0;
}
function $d66fe74dfeff5f0b$export$c39176b1babaa8b8() {
    let e = $d66fe74dfeff5f0b$var$W.pop();
    $d66fe74dfeff5f0b$var$P = void 0 === e || e;
}
function $d66fe74dfeff5f0b$export$92b6a62b33d94031(e, i = !1) {
    $d66fe74dfeff5f0b$var$t instanceof $d66fe74dfeff5f0b$export$28352bb4dd362521 && ($d66fe74dfeff5f0b$var$t.cleanup = e);
}
function $d66fe74dfeff5f0b$var$U(e) {
    let { cleanup: i } = e;
    if (e.cleanup = void 0, i) {
        let e = $d66fe74dfeff5f0b$var$t;
        $d66fe74dfeff5f0b$var$t = void 0;
        try {
            i();
        } finally{
            $d66fe74dfeff5f0b$var$t = e;
        }
    }
}
let $d66fe74dfeff5f0b$var$H = 0;
class $d66fe74dfeff5f0b$var$Y {
    constructor(e, t){
        this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}
class $d66fe74dfeff5f0b$var$G {
    constructor(e){
        this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
    }
    track(e) {
        if (!$d66fe74dfeff5f0b$var$t || !$d66fe74dfeff5f0b$var$P || $d66fe74dfeff5f0b$var$t === this.computed) return;
        let i = this.activeLink;
        if (void 0 === i || i.sub !== $d66fe74dfeff5f0b$var$t) i = this.activeLink = new $d66fe74dfeff5f0b$var$Y($d66fe74dfeff5f0b$var$t, this), $d66fe74dfeff5f0b$var$t.deps ? (i.prevDep = $d66fe74dfeff5f0b$var$t.depsTail, $d66fe74dfeff5f0b$var$t.depsTail.nextDep = i, $d66fe74dfeff5f0b$var$t.depsTail = i) : $d66fe74dfeff5f0b$var$t.deps = $d66fe74dfeff5f0b$var$t.depsTail = i, function e(t) {
            if (t.dep.sc++, 4 & t.sub.flags) {
                let i = t.dep.computed;
                if (i && !t.dep.subs) {
                    i.flags |= 20;
                    for(let t = i.deps; t; t = t.nextDep)e(t);
                }
                let s = t.dep.subs;
                s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
            }
        }(i);
        else if (-1 === i.version && (i.version = this.version, i.nextDep)) {
            let e = i.nextDep;
            e.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = e), i.prevDep = $d66fe74dfeff5f0b$var$t.depsTail, i.nextDep = void 0, $d66fe74dfeff5f0b$var$t.depsTail.nextDep = i, $d66fe74dfeff5f0b$var$t.depsTail = i, $d66fe74dfeff5f0b$var$t.deps === i && ($d66fe74dfeff5f0b$var$t.deps = e);
        }
        return i;
    }
    trigger(e) {
        this.version++, $d66fe74dfeff5f0b$var$H++, this.notify(e);
    }
    notify(e) {
        $d66fe74dfeff5f0b$var$T++;
        try {
            for(let e = this.subs; e; e = e.prevSub)e.sub.notify() && e.sub.dep.notify();
        } finally{
            $d66fe74dfeff5f0b$var$A();
        }
    }
}
let $d66fe74dfeff5f0b$var$F = new WeakMap, $d66fe74dfeff5f0b$export$3c41b1a4e06acc14 = Symbol(""), $d66fe74dfeff5f0b$export$49093fa1cddcb78d = Symbol(""), $d66fe74dfeff5f0b$export$4f926f0baab682cd = Symbol("");
function $d66fe74dfeff5f0b$export$6b2a7d5132615086(e, i, s) {
    if ($d66fe74dfeff5f0b$var$P && $d66fe74dfeff5f0b$var$t) {
        let t = $d66fe74dfeff5f0b$var$F.get(e);
        t || $d66fe74dfeff5f0b$var$F.set(e, t = new Map);
        let i = t.get(s);
        i || (t.set(s, i = new $d66fe74dfeff5f0b$var$G), i.map = t, i.key = s), i.track();
    }
}
function $d66fe74dfeff5f0b$export$e614dc9140f7ae71(e, t, i, s, r, n) {
    let l = $d66fe74dfeff5f0b$var$F.get(e);
    if (!l) return void $d66fe74dfeff5f0b$var$H++;
    let o = (e)=>{
        e && e.trigger();
    };
    if ($d66fe74dfeff5f0b$var$T++, "clear" === t) l.forEach(o);
    else {
        let r = $d66fe74dfeff5f0b$var$h(e), n = r && $d66fe74dfeff5f0b$var$v(i);
        if (r && "length" === i) {
            let e = Number(s);
            l.forEach((t, i)=>{
                ("length" === i || i === $d66fe74dfeff5f0b$export$4f926f0baab682cd || !$d66fe74dfeff5f0b$var$f(i) && i >= e) && o(t);
            });
        } else switch((void 0 !== i || l.has(void 0)) && o(l.get(i)), n && o(l.get($d66fe74dfeff5f0b$export$4f926f0baab682cd)), t){
            case "add":
                r ? n && o(l.get("length")) : (o(l.get($d66fe74dfeff5f0b$export$3c41b1a4e06acc14)), $d66fe74dfeff5f0b$var$c(e) && o(l.get($d66fe74dfeff5f0b$export$49093fa1cddcb78d)));
                break;
            case "delete":
                !r && (o(l.get($d66fe74dfeff5f0b$export$3c41b1a4e06acc14)), $d66fe74dfeff5f0b$var$c(e) && o(l.get($d66fe74dfeff5f0b$export$49093fa1cddcb78d)));
                break;
            case "set":
                $d66fe74dfeff5f0b$var$c(e) && o(l.get($d66fe74dfeff5f0b$export$3c41b1a4e06acc14));
        }
    }
    $d66fe74dfeff5f0b$var$A();
}
function $d66fe74dfeff5f0b$export$1544eab4943788e4(e) {
    let t = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e);
    return t === e ? t : ($d66fe74dfeff5f0b$export$6b2a7d5132615086(t, "iterate", $d66fe74dfeff5f0b$export$4f926f0baab682cd), $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) ? t : t.map($d66fe74dfeff5f0b$export$45c769cf449a508c));
}
function $d66fe74dfeff5f0b$export$5eb48af14254449e(e) {
    return $d66fe74dfeff5f0b$export$6b2a7d5132615086(e = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e), "iterate", $d66fe74dfeff5f0b$export$4f926f0baab682cd), e;
}
let $d66fe74dfeff5f0b$var$$ = {
    __proto__: null,
    [Symbol.iterator] () {
        return $d66fe74dfeff5f0b$var$ee(this, Symbol.iterator, $d66fe74dfeff5f0b$export$45c769cf449a508c);
    },
    concat (...e) {
        return $d66fe74dfeff5f0b$export$1544eab4943788e4(this).concat(...e.map((e)=>$d66fe74dfeff5f0b$var$h(e) ? $d66fe74dfeff5f0b$export$1544eab4943788e4(e) : e));
    },
    entries () {
        return $d66fe74dfeff5f0b$var$ee(this, "entries", (e)=>(e[1] = $d66fe74dfeff5f0b$export$45c769cf449a508c(e[1]), e));
    },
    every (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "every", e, t, void 0, arguments);
    },
    filter (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "filter", e, t, (e)=>e.map($d66fe74dfeff5f0b$export$45c769cf449a508c), arguments);
    },
    find (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "find", e, t, $d66fe74dfeff5f0b$export$45c769cf449a508c, arguments);
    },
    findIndex (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "findIndex", e, t, void 0, arguments);
    },
    findLast (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "findLast", e, t, $d66fe74dfeff5f0b$export$45c769cf449a508c, arguments);
    },
    findLastIndex (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "forEach", e, t, void 0, arguments);
    },
    includes (...e) {
        return $d66fe74dfeff5f0b$var$er(this, "includes", e);
    },
    indexOf (...e) {
        return $d66fe74dfeff5f0b$var$er(this, "indexOf", e);
    },
    join (e) {
        return $d66fe74dfeff5f0b$export$1544eab4943788e4(this).join(e);
    },
    lastIndexOf (...e) {
        return $d66fe74dfeff5f0b$var$er(this, "lastIndexOf", e);
    },
    map (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "map", e, t, void 0, arguments);
    },
    pop () {
        return $d66fe74dfeff5f0b$var$en(this, "pop");
    },
    push (...e) {
        return $d66fe74dfeff5f0b$var$en(this, "push", e);
    },
    reduce (e, ...t) {
        return $d66fe74dfeff5f0b$var$es(this, "reduce", e, t);
    },
    reduceRight (e, ...t) {
        return $d66fe74dfeff5f0b$var$es(this, "reduceRight", e, t);
    },
    shift () {
        return $d66fe74dfeff5f0b$var$en(this, "shift");
    },
    some (e, t) {
        return $d66fe74dfeff5f0b$var$ei(this, "some", e, t, void 0, arguments);
    },
    splice (...e) {
        return $d66fe74dfeff5f0b$var$en(this, "splice", e);
    },
    toReversed () {
        return $d66fe74dfeff5f0b$export$1544eab4943788e4(this).toReversed();
    },
    toSorted (e) {
        return $d66fe74dfeff5f0b$export$1544eab4943788e4(this).toSorted(e);
    },
    toSpliced (...e) {
        return $d66fe74dfeff5f0b$export$1544eab4943788e4(this).toSpliced(...e);
    },
    unshift (...e) {
        return $d66fe74dfeff5f0b$var$en(this, "unshift", e);
    },
    values () {
        return $d66fe74dfeff5f0b$var$ee(this, "values", $d66fe74dfeff5f0b$export$45c769cf449a508c);
    }
};
function $d66fe74dfeff5f0b$var$ee(e, t, i) {
    let s = $d66fe74dfeff5f0b$export$5eb48af14254449e(e), r = s[t]();
    return s === e || $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) || (r._next = r.next, r.next = ()=>{
        let e = r._next();
        return e.value && (e.value = i(e.value)), e;
    }), r;
}
let $d66fe74dfeff5f0b$var$et = Array.prototype;
function $d66fe74dfeff5f0b$var$ei(e, t, i, s, r, n) {
    let l = $d66fe74dfeff5f0b$export$5eb48af14254449e(e), o = l !== e && !$d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e), a = l[t];
    if (a !== $d66fe74dfeff5f0b$var$et[t]) {
        let t = a.apply(e, n);
        return o ? $d66fe74dfeff5f0b$export$45c769cf449a508c(t) : t;
    }
    let u = i;
    l !== e && (o ? u = function(t, s) {
        return i.call(this, $d66fe74dfeff5f0b$export$45c769cf449a508c(t), s, e);
    } : i.length > 2 && (u = function(t, s) {
        return i.call(this, t, s, e);
    }));
    let h = a.call(l, u, s);
    return o && r ? r(h) : h;
}
function $d66fe74dfeff5f0b$var$es(e, t, i, s) {
    let r = $d66fe74dfeff5f0b$export$5eb48af14254449e(e), n = i;
    return r !== e && ($d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) ? i.length > 3 && (n = function(t, s, r) {
        return i.call(this, t, s, r, e);
    }) : n = function(t, s, r) {
        return i.call(this, t, $d66fe74dfeff5f0b$export$45c769cf449a508c(s), r, e);
    }), r[t](n, ...s);
}
function $d66fe74dfeff5f0b$var$er(e, t, i) {
    let s = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e);
    $d66fe74dfeff5f0b$export$6b2a7d5132615086(s, "iterate", $d66fe74dfeff5f0b$export$4f926f0baab682cd);
    let r = s[t](...i);
    return (-1 === r || !1 === r) && $d66fe74dfeff5f0b$export$5f3ca29d057519b3(i[0]) ? (i[0] = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(i[0]), s[t](...i)) : r;
}
function $d66fe74dfeff5f0b$var$en(e, t, i = []) {
    $d66fe74dfeff5f0b$export$938a971395fef855(), $d66fe74dfeff5f0b$var$T++;
    let s = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e)[t].apply(e, i);
    return $d66fe74dfeff5f0b$var$A(), $d66fe74dfeff5f0b$export$c39176b1babaa8b8(), s;
}
let $d66fe74dfeff5f0b$var$el = function(e) {
    let t = Object.create(null);
    for (let i of e.split(","))t[i] = 1;
    return (e)=>e in t;
}("__proto__,__v_isRef,__isVue"), $d66fe74dfeff5f0b$var$eo = new Set(Object.getOwnPropertyNames(Symbol).filter((e)=>"arguments" !== e && "caller" !== e).map((e)=>Symbol[e]).filter($d66fe74dfeff5f0b$var$f));
function $d66fe74dfeff5f0b$var$ea(e) {
    $d66fe74dfeff5f0b$var$f(e) || (e = String(e));
    let t = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this);
    return $d66fe74dfeff5f0b$export$6b2a7d5132615086(t, "has", e), t.hasOwnProperty(e);
}
class $d66fe74dfeff5f0b$var$eu {
    constructor(e = !1, t = !1){
        this._isReadonly = e, this._isShallow = t;
    }
    get(e, t, i) {
        if ("__v_skip" === t) return e.__v_skip;
        let s = this._isReadonly, r = this._isShallow;
        if ("__v_isReactive" === t) return !s;
        if ("__v_isReadonly" === t) return s;
        if ("__v_isShallow" === t) return r;
        if ("__v_raw" === t) return i === (s ? r ? $d66fe74dfeff5f0b$var$eA : $d66fe74dfeff5f0b$var$em : r ? $d66fe74dfeff5f0b$var$eT : $d66fe74dfeff5f0b$var$ex).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
        let n = $d66fe74dfeff5f0b$var$h(e);
        if (!s) {
            let e;
            if (n && (e = $d66fe74dfeff5f0b$var$$[t])) return e;
            if ("hasOwnProperty" === t) return $d66fe74dfeff5f0b$var$ea;
        }
        let l = Reflect.get(e, t, $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e : i);
        return ($d66fe74dfeff5f0b$var$f(t) ? $d66fe74dfeff5f0b$var$eo.has(t) : $d66fe74dfeff5f0b$var$el(t)) || (s || $d66fe74dfeff5f0b$export$6b2a7d5132615086(e, "get", t), r) ? l : $d66fe74dfeff5f0b$export$4f9f5282de18fc69(l) ? n && $d66fe74dfeff5f0b$var$v(t) ? l : l.value : $d66fe74dfeff5f0b$var$p(l) ? s ? $d66fe74dfeff5f0b$export$6ec456bd5b7b3c51(l) : $d66fe74dfeff5f0b$export$90a44edba14e47be(l) : l;
    }
}
class $d66fe74dfeff5f0b$var$eh extends $d66fe74dfeff5f0b$var$eu {
    constructor(e = !1){
        super(!1, e);
    }
    set(e, t, i, s) {
        let r = e[t];
        if (!this._isShallow) {
            let t = $d66fe74dfeff5f0b$export$92d09b48637741e7(r);
            if ($d66fe74dfeff5f0b$export$7f3fe6025abfa26e(i) || $d66fe74dfeff5f0b$export$92d09b48637741e7(i) || (r = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(r), i = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(i)), !$d66fe74dfeff5f0b$var$h(e) && $d66fe74dfeff5f0b$export$4f9f5282de18fc69(r) && !$d66fe74dfeff5f0b$export$4f9f5282de18fc69(i)) {
                if (t) return !1;
                else return r.value = i, !0;
            }
        }
        let n = $d66fe74dfeff5f0b$var$h(e) && $d66fe74dfeff5f0b$var$v(t) ? Number(t) < e.length : $d66fe74dfeff5f0b$var$u(e, t), l = Reflect.set(e, t, i, $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e : s);
        return e === $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(s) && (n ? $d66fe74dfeff5f0b$var$g(i, r) && $d66fe74dfeff5f0b$export$e614dc9140f7ae71(e, "set", t, i) : $d66fe74dfeff5f0b$export$e614dc9140f7ae71(e, "add", t, i)), l;
    }
    deleteProperty(e, t) {
        let i = $d66fe74dfeff5f0b$var$u(e, t);
        e[t];
        let s = Reflect.deleteProperty(e, t);
        return s && i && $d66fe74dfeff5f0b$export$e614dc9140f7ae71(e, "delete", t, void 0), s;
    }
    has(e, t) {
        let i = Reflect.has(e, t);
        return $d66fe74dfeff5f0b$var$f(t) && $d66fe74dfeff5f0b$var$eo.has(t) || $d66fe74dfeff5f0b$export$6b2a7d5132615086(e, "has", t), i;
    }
    ownKeys(e) {
        return $d66fe74dfeff5f0b$export$6b2a7d5132615086(e, "iterate", $d66fe74dfeff5f0b$var$h(e) ? "length" : $d66fe74dfeff5f0b$export$3c41b1a4e06acc14), Reflect.ownKeys(e);
    }
}
class $d66fe74dfeff5f0b$var$ec extends $d66fe74dfeff5f0b$var$eu {
    constructor(e = !1){
        super(!0, e);
    }
    set(e, t) {
        return !0;
    }
    deleteProperty(e, t) {
        return !0;
    }
}
let $d66fe74dfeff5f0b$var$ef = new $d66fe74dfeff5f0b$var$eh, $d66fe74dfeff5f0b$var$ep = new $d66fe74dfeff5f0b$var$ec, $d66fe74dfeff5f0b$var$ed = new $d66fe74dfeff5f0b$var$eh(!0), $d66fe74dfeff5f0b$var$e_ = new $d66fe74dfeff5f0b$var$ec(!0), $d66fe74dfeff5f0b$var$ev = (e)=>e, $d66fe74dfeff5f0b$var$eg = (e)=>Reflect.getPrototypeOf(e);
function $d66fe74dfeff5f0b$var$ey(e) {
    return function() {
        return "delete" !== e && ("clear" === e ? void 0 : this);
    };
}
function $d66fe74dfeff5f0b$var$eR(e, t) {
    let i = function(e, t) {
        let i = {
            get (i) {
                let s = this.__v_raw, r = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(s), n = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(i);
                e || ($d66fe74dfeff5f0b$var$g(i, n) && $d66fe74dfeff5f0b$export$6b2a7d5132615086(r, "get", i), $d66fe74dfeff5f0b$export$6b2a7d5132615086(r, "get", n));
                let { has: l } = $d66fe74dfeff5f0b$var$eg(r), o = t ? $d66fe74dfeff5f0b$var$ev : e ? $d66fe74dfeff5f0b$export$4a78e7a2a4fb689f : $d66fe74dfeff5f0b$export$45c769cf449a508c;
                return l.call(r, i) ? o(s.get(i)) : l.call(r, n) ? o(s.get(n)) : void (s !== r && s.get(i));
            },
            get size () {
                let t = this.__v_raw;
                return e || $d66fe74dfeff5f0b$export$6b2a7d5132615086($d66fe74dfeff5f0b$export$ab18938b9fc5f28e(t), "iterate", $d66fe74dfeff5f0b$export$3c41b1a4e06acc14), Reflect.get(t, "size", t);
            },
            has (t) {
                let i = this.__v_raw, s = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(i), r = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(t);
                return e || ($d66fe74dfeff5f0b$var$g(t, r) && $d66fe74dfeff5f0b$export$6b2a7d5132615086(s, "has", t), $d66fe74dfeff5f0b$export$6b2a7d5132615086(s, "has", r)), t === r ? i.has(t) : i.has(t) || i.has(r);
            },
            forEach (i, s) {
                let r = this, n = r.__v_raw, l = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(n), o = t ? $d66fe74dfeff5f0b$var$ev : e ? $d66fe74dfeff5f0b$export$4a78e7a2a4fb689f : $d66fe74dfeff5f0b$export$45c769cf449a508c;
                return e || $d66fe74dfeff5f0b$export$6b2a7d5132615086(l, "iterate", $d66fe74dfeff5f0b$export$3c41b1a4e06acc14), n.forEach((e, t)=>i.call(s, o(e), o(t), r));
            }
        };
        return $d66fe74dfeff5f0b$var$o(i, e ? {
            add: $d66fe74dfeff5f0b$var$ey("add"),
            set: $d66fe74dfeff5f0b$var$ey("set"),
            delete: $d66fe74dfeff5f0b$var$ey("delete"),
            clear: $d66fe74dfeff5f0b$var$ey("clear")
        } : {
            add (e) {
                t || $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) || $d66fe74dfeff5f0b$export$92d09b48637741e7(e) || (e = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e));
                let i = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this);
                return $d66fe74dfeff5f0b$var$eg(i).has.call(i, e) || (i.add(e), $d66fe74dfeff5f0b$export$e614dc9140f7ae71(i, "add", e, e)), this;
            },
            set (e, i) {
                t || $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(i) || $d66fe74dfeff5f0b$export$92d09b48637741e7(i) || (i = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(i));
                let s = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this), { has: r, get: n } = $d66fe74dfeff5f0b$var$eg(s), l = r.call(s, e);
                l || (e = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e), l = r.call(s, e));
                let o = n.call(s, e);
                return s.set(e, i), l ? $d66fe74dfeff5f0b$var$g(i, o) && $d66fe74dfeff5f0b$export$e614dc9140f7ae71(s, "set", e, i) : $d66fe74dfeff5f0b$export$e614dc9140f7ae71(s, "add", e, i), this;
            },
            delete (e) {
                let t = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this), { has: i, get: s } = $d66fe74dfeff5f0b$var$eg(t), r = i.call(t, e);
                r || (e = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e), r = i.call(t, e)), s && s.call(t, e);
                let n = t.delete(e);
                return r && $d66fe74dfeff5f0b$export$e614dc9140f7ae71(t, "delete", e, void 0), n;
            },
            clear () {
                let e = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this), t = 0 !== e.size, i = e.clear();
                return t && $d66fe74dfeff5f0b$export$e614dc9140f7ae71(e, "clear", void 0, void 0), i;
            }
        }), [
            "keys",
            "values",
            "entries",
            Symbol.iterator
        ].forEach((s)=>{
            i[s] = function(...i) {
                let r = this.__v_raw, n = $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(r), l = $d66fe74dfeff5f0b$var$c(n), o = "entries" === s || s === Symbol.iterator && l, a = r[s](...i), u = t ? $d66fe74dfeff5f0b$var$ev : e ? $d66fe74dfeff5f0b$export$4a78e7a2a4fb689f : $d66fe74dfeff5f0b$export$45c769cf449a508c;
                return e || $d66fe74dfeff5f0b$export$6b2a7d5132615086(n, "iterate", "keys" === s && l ? $d66fe74dfeff5f0b$export$49093fa1cddcb78d : $d66fe74dfeff5f0b$export$3c41b1a4e06acc14), {
                    next () {
                        let { value: e, done: t } = a.next();
                        return t ? {
                            value: e,
                            done: t
                        } : {
                            value: o ? [
                                u(e[0]),
                                u(e[1])
                            ] : u(e),
                            done: t
                        };
                    },
                    [Symbol.iterator] () {
                        return this;
                    }
                };
            };
        }), i;
    }(e, t);
    return (t, s, r)=>"__v_isReactive" === s ? !e : "__v_isReadonly" === s ? e : "__v_raw" === s ? t : Reflect.get($d66fe74dfeff5f0b$var$u(i, s) && s in t ? i : t, s, r);
}
let $d66fe74dfeff5f0b$var$eb = {
    get: $d66fe74dfeff5f0b$var$eR(!1, !1)
}, $d66fe74dfeff5f0b$var$ew = {
    get: $d66fe74dfeff5f0b$var$eR(!1, !0)
}, $d66fe74dfeff5f0b$var$eS = {
    get: $d66fe74dfeff5f0b$var$eR(!0, !1)
}, $d66fe74dfeff5f0b$var$eE = {
    get: $d66fe74dfeff5f0b$var$eR(!0, !0)
}, $d66fe74dfeff5f0b$var$ex = new WeakMap, $d66fe74dfeff5f0b$var$eT = new WeakMap, $d66fe74dfeff5f0b$var$em = new WeakMap, $d66fe74dfeff5f0b$var$eA = new WeakMap;
function $d66fe74dfeff5f0b$export$90a44edba14e47be(e) {
    return $d66fe74dfeff5f0b$export$92d09b48637741e7(e) ? e : $d66fe74dfeff5f0b$var$eL(e, !1, $d66fe74dfeff5f0b$var$ef, $d66fe74dfeff5f0b$var$eb, $d66fe74dfeff5f0b$var$ex);
}
function $d66fe74dfeff5f0b$export$8d81cefd22d22260(e) {
    return $d66fe74dfeff5f0b$var$eL(e, !1, $d66fe74dfeff5f0b$var$ed, $d66fe74dfeff5f0b$var$ew, $d66fe74dfeff5f0b$var$eT);
}
function $d66fe74dfeff5f0b$export$6ec456bd5b7b3c51(e) {
    return $d66fe74dfeff5f0b$var$eL(e, !0, $d66fe74dfeff5f0b$var$ep, $d66fe74dfeff5f0b$var$eS, $d66fe74dfeff5f0b$var$em);
}
function $d66fe74dfeff5f0b$export$7c4b5f2b50f09f6b(e) {
    return $d66fe74dfeff5f0b$var$eL(e, !0, $d66fe74dfeff5f0b$var$e_, $d66fe74dfeff5f0b$var$eE, $d66fe74dfeff5f0b$var$eA);
}
function $d66fe74dfeff5f0b$var$eL(e, t, i, s, r) {
    var n;
    if (!$d66fe74dfeff5f0b$var$p(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    let l = (n = e).__v_skip || !Object.isExtensible(n) ? 0 : function(e) {
        switch(e){
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0;
        }
    }($d66fe74dfeff5f0b$var$_(n).slice(8, -1));
    if (0 === l) return e;
    let o = r.get(e);
    if (o) return o;
    let a = new Proxy(e, 2 === l ? s : i);
    return r.set(e, a), a;
}
function $d66fe74dfeff5f0b$export$352205f445242f02(e) {
    return $d66fe74dfeff5f0b$export$92d09b48637741e7(e) ? $d66fe74dfeff5f0b$export$352205f445242f02(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $d66fe74dfeff5f0b$export$92d09b48637741e7(e) {
    return !!(e && e.__v_isReadonly);
}
function $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) {
    return !!(e && e.__v_isShallow);
}
function $d66fe74dfeff5f0b$export$5f3ca29d057519b3(e) {
    return !!e && !!e.__v_raw;
}
function $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e) {
    let t = e && e.__v_raw;
    return t ? $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(t) : e;
}
function $d66fe74dfeff5f0b$export$995ab8b13ad7a9d0(e) {
    return !$d66fe74dfeff5f0b$var$u(e, "__v_skip") && Object.isExtensible(e) && ((e, t, i, s = !1)=>{
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: s,
            value: i
        });
    })(e, "__v_skip", !0), e;
}
let $d66fe74dfeff5f0b$export$45c769cf449a508c = (e)=>$d66fe74dfeff5f0b$var$p(e) ? $d66fe74dfeff5f0b$export$90a44edba14e47be(e) : e, $d66fe74dfeff5f0b$export$4a78e7a2a4fb689f = (e)=>$d66fe74dfeff5f0b$var$p(e) ? $d66fe74dfeff5f0b$export$6ec456bd5b7b3c51(e) : e;
function $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) {
    return !!e && !0 === e.__v_isRef;
}
function $d66fe74dfeff5f0b$export$eff4d24c3ff7876e(e) {
    return $d66fe74dfeff5f0b$var$eG(e, !1);
}
function $d66fe74dfeff5f0b$export$9b7bc5fe3b17c8b3(e) {
    return $d66fe74dfeff5f0b$var$eG(e, !0);
}
function $d66fe74dfeff5f0b$var$eG(e, t) {
    return $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e : new $d66fe74dfeff5f0b$var$eF(e, t);
}
class $d66fe74dfeff5f0b$var$eF {
    constructor(e, t){
        this.dep = new $d66fe74dfeff5f0b$var$G, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e), this._value = t ? e : $d66fe74dfeff5f0b$export$45c769cf449a508c(e), this.__v_isShallow = t;
    }
    get value() {
        return this.dep.track(), this._value;
    }
    set value(e) {
        let t = this._rawValue, i = this.__v_isShallow || $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) || $d66fe74dfeff5f0b$export$92d09b48637741e7(e);
        $d66fe74dfeff5f0b$var$g(e = i ? e : $d66fe74dfeff5f0b$export$ab18938b9fc5f28e(e), t) && (this._rawValue = e, this._value = i ? e : $d66fe74dfeff5f0b$export$45c769cf449a508c(e), this.dep.trigger());
    }
}
function $d66fe74dfeff5f0b$export$f402f86588575ccc(e) {
    e.dep && e.dep.trigger();
}
function $d66fe74dfeff5f0b$export$a239a76781616204(e) {
    return $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e.value : e;
}
function $d66fe74dfeff5f0b$export$30bdcc2218aa9458(e) {
    return "function" == typeof e ? e() : $d66fe74dfeff5f0b$export$a239a76781616204(e);
}
let $d66fe74dfeff5f0b$var$eJ = {
    get: (e, t, i)=>"__v_raw" === t ? e : $d66fe74dfeff5f0b$export$a239a76781616204(Reflect.get(e, t, i)),
    set: (e, t, i, s)=>{
        let r = e[t];
        return $d66fe74dfeff5f0b$export$4f9f5282de18fc69(r) && !$d66fe74dfeff5f0b$export$4f9f5282de18fc69(i) ? (r.value = i, !0) : Reflect.set(e, t, i, s);
    }
};
function $d66fe74dfeff5f0b$export$f353fd1b97db3fa0(e) {
    return $d66fe74dfeff5f0b$export$352205f445242f02(e) ? e : new Proxy(e, $d66fe74dfeff5f0b$var$eJ);
}
class $d66fe74dfeff5f0b$var$eX {
    constructor(e){
        this.__v_isRef = !0, this._value = void 0;
        let t = this.dep = new $d66fe74dfeff5f0b$var$G, { get: i, set: s } = e(t.track.bind(t), t.trigger.bind(t));
        this._get = i, this._set = s;
    }
    get value() {
        return this._value = this._get();
    }
    set value(e) {
        this._set(e);
    }
}
function $d66fe74dfeff5f0b$export$a20c2dd6199824cb(e) {
    return new $d66fe74dfeff5f0b$var$eX(e);
}
function $d66fe74dfeff5f0b$export$2e9533675e5e70e0(e) {
    let t = $d66fe74dfeff5f0b$var$h(e) ? Array(e.length) : {};
    for(let i in e)t[i] = $d66fe74dfeff5f0b$var$e4(e, i);
    return t;
}
class $d66fe74dfeff5f0b$var$e0 {
    constructor(e, t, i){
        this._object = e, this._key = t, this._defaultValue = i, this.__v_isRef = !0, this._value = void 0;
    }
    get value() {
        let e = this._object[this._key];
        return this._value = void 0 === e ? this._defaultValue : e;
    }
    set value(e) {
        this._object[this._key] = e;
    }
    get dep() {
        return function(e, t) {
            let i = $d66fe74dfeff5f0b$var$F.get(e);
            return i && i.get(t);
        }($d66fe74dfeff5f0b$export$ab18938b9fc5f28e(this._object), this._key);
    }
}
class $d66fe74dfeff5f0b$var$e1 {
    constructor(e){
        this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
    }
    get value() {
        return this._value = this._getter();
    }
}
function $d66fe74dfeff5f0b$export$1f60508e4f47b4b7(e, t, i) {
    return $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e : "function" == typeof e ? new $d66fe74dfeff5f0b$var$e1(e) : $d66fe74dfeff5f0b$var$p(e) && arguments.length > 1 ? $d66fe74dfeff5f0b$var$e4(e, t, i) : $d66fe74dfeff5f0b$export$eff4d24c3ff7876e(e);
}
function $d66fe74dfeff5f0b$var$e4(e, t, i) {
    let s = e[t];
    return $d66fe74dfeff5f0b$export$4f9f5282de18fc69(s) ? s : new $d66fe74dfeff5f0b$var$e0(e, t, i);
}
class $d66fe74dfeff5f0b$var$e6 {
    constructor(e, t, i){
        this.fn = e, this.setter = t, this._value = void 0, this.dep = new $d66fe74dfeff5f0b$var$G(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $d66fe74dfeff5f0b$var$H - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = i;
    }
    notify() {
        if (this.flags |= 16, !(8 & this.flags) && $d66fe74dfeff5f0b$var$t !== this) return $d66fe74dfeff5f0b$var$m(this, !0), !0;
    }
    get value() {
        let e = this.dep.track();
        return $d66fe74dfeff5f0b$var$I(this), e && (e.version = this.dep.version), this._value;
    }
    set value(e) {
        this.setter && this.setter(e);
    }
}
function $d66fe74dfeff5f0b$export$2983e091f1a1e8e2(e, t, i = !1) {
    let s, r;
    return "function" == typeof e ? s = e : (s = e.get, r = e.set), new $d66fe74dfeff5f0b$var$e6(s, r, i);
}
let $d66fe74dfeff5f0b$export$2ac2bd0a56e04551 = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}, $d66fe74dfeff5f0b$export$1e8941c92696a26 = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
}, $d66fe74dfeff5f0b$export$e738ba173768902d = {
    SKIP: "__v_skip",
    IS_REACTIVE: "__v_isReactive",
    IS_READONLY: "__v_isReadonly",
    IS_SHALLOW: "__v_isShallow",
    RAW: "__v_raw",
    IS_REF: "__v_isRef"
}, $d66fe74dfeff5f0b$export$c54ef203cb79e75f = {
    WATCH_GETTER: 2,
    2: "WATCH_GETTER",
    WATCH_CALLBACK: 3,
    3: "WATCH_CALLBACK",
    WATCH_CLEANUP: 4,
    4: "WATCH_CLEANUP"
}, $d66fe74dfeff5f0b$var$te = {}, $d66fe74dfeff5f0b$var$tt = new WeakMap;
function $d66fe74dfeff5f0b$export$2532f7acfca7c82d() {
    return $d66fe74dfeff5f0b$var$r;
}
function $d66fe74dfeff5f0b$export$8ddeeb083684a9d0(e, t = !1, i = $d66fe74dfeff5f0b$var$r) {
    if (i) {
        let t = $d66fe74dfeff5f0b$var$tt.get(i);
        t || $d66fe74dfeff5f0b$var$tt.set(i, t = []), t.push(e);
    }
}
function $d66fe74dfeff5f0b$export$3db5d71bdb2d5499(e, t, i = $d66fe74dfeff5f0b$var$n) {
    let s, o, a, u, { immediate: c, deep: f, once: p, scheduler: d, augmentJob: _, call: v } = i, y = (e)=>f ? e : $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e) || !1 === f || 0 === f ? $d66fe74dfeff5f0b$export$df3f009e3d155b20(e, 1) : $d66fe74dfeff5f0b$export$df3f009e3d155b20(e), R = !1, w = !1;
    if ($d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? (o = ()=>e.value, R = $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e)) : $d66fe74dfeff5f0b$export$352205f445242f02(e) ? (o = ()=>y(e), R = !0) : $d66fe74dfeff5f0b$var$h(e) ? (w = !0, R = e.some((e)=>$d66fe74dfeff5f0b$export$352205f445242f02(e) || $d66fe74dfeff5f0b$export$7f3fe6025abfa26e(e)), o = ()=>e.map((e)=>$d66fe74dfeff5f0b$export$4f9f5282de18fc69(e) ? e.value : $d66fe74dfeff5f0b$export$352205f445242f02(e) ? y(e) : "function" == typeof e ? v ? v(e, 2) : e() : void 0)) : o = "function" == typeof e ? t ? v ? ()=>v(e, 2) : e : ()=>{
        if (a) {
            $d66fe74dfeff5f0b$export$938a971395fef855();
            try {
                a();
            } finally{
                $d66fe74dfeff5f0b$export$c39176b1babaa8b8();
            }
        }
        let t = $d66fe74dfeff5f0b$var$r;
        $d66fe74dfeff5f0b$var$r = s;
        try {
            return v ? v(e, 3, [
                u
            ]) : e(u);
        } finally{
            $d66fe74dfeff5f0b$var$r = t;
        }
    } : $d66fe74dfeff5f0b$var$l, t && f) {
        let e = o, t = !0 === f ? 1 / 0 : f;
        o = ()=>$d66fe74dfeff5f0b$export$df3f009e3d155b20(e(), t);
    }
    let S = $d66fe74dfeff5f0b$export$c7be4b0125a10cba(), E = ()=>{
        s.stop(), S && S.active && ((e, t)=>{
            let i = e.indexOf(t);
            i > -1 && e.splice(i, 1);
        })(S.effects, s);
    };
    if (p && t) {
        let e = t;
        t = (...t)=>{
            e(...t), E();
        };
    }
    let T = w ? Array(e.length).fill($d66fe74dfeff5f0b$var$te) : $d66fe74dfeff5f0b$var$te, m = (e)=>{
        if (1 & s.flags && (s.dirty || e)) {
            if (t) {
                let e = s.run();
                if (f || R || (w ? e.some((e, t)=>$d66fe74dfeff5f0b$var$g(e, T[t])) : $d66fe74dfeff5f0b$var$g(e, T))) {
                    a && a();
                    let i = $d66fe74dfeff5f0b$var$r;
                    $d66fe74dfeff5f0b$var$r = s;
                    try {
                        let i = [
                            e,
                            T === $d66fe74dfeff5f0b$var$te ? void 0 : w && T[0] === $d66fe74dfeff5f0b$var$te ? [] : T,
                            u
                        ];
                        T = e, v ? v(t, 3, i) : t(...i);
                    } finally{
                        $d66fe74dfeff5f0b$var$r = i;
                    }
                }
            } else s.run();
        }
    };
    return _ && _(m), (s = new $d66fe74dfeff5f0b$export$28352bb4dd362521(o)).scheduler = d ? ()=>d(m, !1) : m, u = (e)=>$d66fe74dfeff5f0b$export$8ddeeb083684a9d0(e, !1, s), a = s.onStop = ()=>{
        let e = $d66fe74dfeff5f0b$var$tt.get(s);
        if (e) {
            if (v) v(e, 4);
            else for (let t of e)t();
            $d66fe74dfeff5f0b$var$tt.delete(s);
        }
    }, t ? c ? m(!0) : T = s.run() : d ? d(m.bind(null, !0), !0) : s.run(), E.pause = s.pause.bind(s), E.resume = s.resume.bind(s), E.stop = E, E;
}
function $d66fe74dfeff5f0b$export$df3f009e3d155b20(e, t = 1 / 0, i) {
    if (t <= 0 || !$d66fe74dfeff5f0b$var$p(e) || e.__v_skip || (i = i || new Set).has(e)) return e;
    if (i.add(e), t--, $d66fe74dfeff5f0b$export$4f9f5282de18fc69(e)) $d66fe74dfeff5f0b$export$df3f009e3d155b20(e.value, t, i);
    else if ($d66fe74dfeff5f0b$var$h(e)) for(let s = 0; s < e.length; s++)$d66fe74dfeff5f0b$export$df3f009e3d155b20(e[s], t, i);
    else if ("[object Set]" === $d66fe74dfeff5f0b$var$_(e) || $d66fe74dfeff5f0b$var$c(e)) e.forEach((e)=>{
        $d66fe74dfeff5f0b$export$df3f009e3d155b20(e, t, i);
    });
    else if ("[object Object]" === $d66fe74dfeff5f0b$var$_(e)) {
        for(let s in e)$d66fe74dfeff5f0b$export$df3f009e3d155b20(e[s], t, i);
        for (let s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e, s) && $d66fe74dfeff5f0b$export$df3f009e3d155b20(e[s], t, i);
    }
    return e;
}



const $370754aea5bc9e6a$export$352205f445242f02 = (0, $d66fe74dfeff5f0b$export$352205f445242f02);
const $370754aea5bc9e6a$export$90a44edba14e47be = (0, $d66fe74dfeff5f0b$export$90a44edba14e47be);
const $370754aea5bc9e6a$export$dc573d8a6576cdb3 = (callback)=>(0, $d66fe74dfeff5f0b$export$dc573d8a6576cdb3)(callback, {
        scheduler: (0, $8d51fac66e0b4c1b$export$d30788f2c20241cd)((task)=>task)
    });
function $370754aea5bc9e6a$export$1ecd3170301acce1(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = $370754aea5bc9e6a$export$dc573d8a6576cdb3(callback);
        if (!el.__stimulusX_effects) el.__stimulusX_effects = new Set();
        el.__stimulusX_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el.__stimulusX_effects.delete(effectReference);
            (0, $d66fe74dfeff5f0b$export$fa6813432f753b0d)(effectReference);
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
function $370754aea5bc9e6a$export$3db5d71bdb2d5499(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = $370754aea5bc9e6a$export$dc573d8a6576cdb3(()=>{
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
    return ()=>(0, $d66fe74dfeff5f0b$export$fa6813432f753b0d)(effectReference);
}



const $331937ba118c934e$var$isObject = (value)=>{
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
};
const $331937ba118c934e$var$isEmptyObject = (value)=>$331937ba118c934e$var$isObject(value) && Object.keys(value).length === 0;
const $331937ba118c934e$var$disallowedKeys = new Set([
    '__proto__',
    'prototype',
    'constructor'
]);
const $331937ba118c934e$var$digits = new Set('0123456789');
function $331937ba118c934e$var$getPathSegments(path) {
    const parts = [];
    let currentSegment = '';
    let currentPart = 'start';
    let isIgnoring = false;
    for (const character of path)switch(character){
        case '\\':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
            if (isIgnoring) currentSegment += character;
            currentPart = 'property';
            isIgnoring = !isIgnoring;
            break;
        case '.':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') {
                currentPart = 'property';
                break;
            }
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += character;
                break;
            }
            if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
            parts.push(currentSegment);
            currentSegment = '';
            currentPart = 'property';
            break;
        case '[':
            if (currentPart === 'index') throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') {
                currentPart = 'index';
                break;
            }
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += character;
                break;
            }
            if (currentPart === 'property') {
                if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
                parts.push(currentSegment);
                currentSegment = '';
            }
            currentPart = 'index';
            break;
        case ']':
            if (currentPart === 'index') {
                parts.push(Number.parseInt(currentSegment, 10));
                currentSegment = '';
                currentPart = 'indexEnd';
                break;
            }
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
        default:
            if (currentPart === 'index' && !$331937ba118c934e$var$digits.has(character)) throw new Error('Invalid character in an index');
            if (currentPart === 'indexEnd') throw new Error('Invalid character after an index');
            if (currentPart === 'start') currentPart = 'property';
            if (isIgnoring) {
                isIgnoring = false;
                currentSegment += '\\';
            }
            currentSegment += character;
    }
    if (isIgnoring) currentSegment += '\\';
    switch(currentPart){
        case 'property':
            if ($331937ba118c934e$var$disallowedKeys.has(currentSegment)) return [];
            parts.push(currentSegment);
            break;
        case 'index':
            throw new Error('Index was not closed');
        case 'start':
            parts.push('');
            break;
    }
    return parts;
}
function $331937ba118c934e$var$isStringIndex(object, key) {
    if (typeof key !== 'number' && Array.isArray(object)) {
        const index = Number.parseInt(key, 10);
        return Number.isInteger(index) && object[index] === object[key];
    }
    return false;
}
function $331937ba118c934e$var$assertNotStringIndex(object, key) {
    if ($331937ba118c934e$var$isStringIndex(object, key)) throw new Error('Cannot use string index');
}
function $331937ba118c934e$export$63ef76b19cf4a753(object, path, value) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return value === undefined ? object : value;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    if (pathArray.length === 0) return value;
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        if ($331937ba118c934e$var$isStringIndex(object, key)) object = index === pathArray.length - 1 ? undefined : null;
        else object = object[key];
        if (object === undefined || object === null) {
            // `object` is either `undefined` or `null` so we want to stop the loop, and
            // if this is not the last bit of the path, and
            // if it didn't return `undefined`
            // it would return `null` if `object` is `null`
            // but we want `get({foo: null}, 'foo.bar')` to equal `undefined`, or the supplied value, not `null`
            if (index !== pathArray.length - 1) return value;
            break;
        }
    }
    return object === undefined ? value : object;
}
function $331937ba118c934e$export$a41c68a4eb5ff164(object, path, value) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return object;
    const root = object;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        $331937ba118c934e$var$assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) object[key] = value;
        else if (!$331937ba118c934e$var$isObject(object[key])) object[key] = typeof pathArray[index + 1] === 'number' ? [] : {};
        object = object[key];
    }
    return root;
}
function $331937ba118c934e$export$2fae62fb628b9c68(object, path) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return false;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    for(let index = 0; index < pathArray.length; index++){
        const key = pathArray[index];
        $331937ba118c934e$var$assertNotStringIndex(object, key);
        if (index === pathArray.length - 1) {
            delete object[key];
            return true;
        }
        object = object[key];
        if (!$331937ba118c934e$var$isObject(object)) return false;
    }
}
function $331937ba118c934e$export$bf9617eaf5d2451(object, path) {
    if (!$331937ba118c934e$var$isObject(object) || typeof path !== 'string') return false;
    const pathArray = $331937ba118c934e$var$getPathSegments(path);
    if (pathArray.length === 0) return false;
    for (const key of pathArray){
        if (!$331937ba118c934e$var$isObject(object) || !(key in object) || $331937ba118c934e$var$isStringIndex(object, key)) return false;
        object = object[key];
    }
    return true;
}
function $331937ba118c934e$export$b36556ce4a09dde6(path) {
    if (typeof path !== 'string') throw new TypeError('Expected a string');
    return path.replaceAll(/[\\.[]/g, '\\$&');
}
// The keys returned by Object.entries() for arrays are strings
function $331937ba118c934e$var$entries(value) {
    const result = Object.entries(value);
    if (Array.isArray(value)) return result.map(([key, value])=>[
            Number(key),
            value
        ]);
    return result;
}
function $331937ba118c934e$var$stringifyPath(pathSegments) {
    let result = '';
    for (let [index, segment] of $331937ba118c934e$var$entries(pathSegments))if (typeof segment === 'number') result += `[${segment}]`;
    else {
        segment = $331937ba118c934e$export$b36556ce4a09dde6(segment);
        result += index === 0 ? segment : `.${segment}`;
    }
    return result;
}
function* $331937ba118c934e$var$deepKeysIterator(object, currentPath = []) {
    if (!$331937ba118c934e$var$isObject(object) || $331937ba118c934e$var$isEmptyObject(object)) {
        if (currentPath.length > 0) yield $331937ba118c934e$var$stringifyPath(currentPath);
        return;
    }
    for (const [key, value] of $331937ba118c934e$var$entries(object))yield* $331937ba118c934e$var$deepKeysIterator(value, [
        ...currentPath,
        key
    ]);
}
function $331937ba118c934e$export$13f626a1d0c23ea1(object) {
    return [
        ...$331937ba118c934e$var$deepKeysIterator(object)
    ];
}




function $175c8aaa8bb7371e$export$d56142fa17014959(ControllerClass) {
    return class extends ControllerClass {
        constructor(context){
            super(context);
            // Override the attribute setter so that our mutation observer doesn't pick up on changes
            // that are also already being handled directly by Stimulus.
            const setData = this.data.set;
            this.data.set = (key, value)=>{
                (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>setData.call(this.data, key, value));
            };
            // Create a reactive controller object
            const self = (0, $370754aea5bc9e6a$export$90a44edba14e47be)(this);
            // Initialize watched property callbacks
            const watchedProps = this.constructor.watch || [];
            watchedProps.forEach((prop)=>$175c8aaa8bb7371e$export$dcc3676fc96ef4c(self, prop));
            // Return the reactive controller instance
            return self;
        }
    };
}
function $175c8aaa8bb7371e$export$6d5f0ef1727b562e(el, identifier, application) {
    const controllerElement = el.closest(`[data-controller~="${identifier}"]`);
    if (controllerElement) return application.getControllerForElementAndIdentifier(controllerElement, identifier);
}
function $175c8aaa8bb7371e$export$121af9acc174ac93(controller, property) {
    let value = (0, $331937ba118c934e$export$63ef76b19cf4a753)(controller, property);
    if (typeof value === "function") value = value.apply(controller);
    return value;
}
function $175c8aaa8bb7371e$export$dcc3676fc96ef4c(controller, propertyRef) {
    const getter = ()=>$175c8aaa8bb7371e$export$121af9acc174ac93(controller, propertyRef);
    const cleanup = (0, $370754aea5bc9e6a$export$3db5d71bdb2d5499)(getter, (value, oldValue)=>{
        $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, value, oldValue, false);
    });
    // Run once on creation
    $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, getter(), undefined, true);
    const rootElement = controller.element;
    if (!rootElement.__stimulusX_cleanups) rootElement.__stimulusX_cleanups = [];
    rootElement.__stimulusX_cleanups.push(cleanup);
}
function $175c8aaa8bb7371e$var$callCallbacks(controller, propertyRef, value, oldValue, initial) {
    // Generic callback, called when _any_ watched property changes
    if (typeof controller.watchedPropertyChanged === "function") controller.watchedPropertyChanged(propertyRef, value, oldValue, {
        initial: initial
    });
    // Property-specific change callback
    const propertyWatcherCallback = controller[`${$175c8aaa8bb7371e$var$getCamelizedPropertyRef(propertyRef)}PropertyChanged`];
    if (typeof propertyWatcherCallback === "function") propertyWatcherCallback.call(controller, value, oldValue, {
        initial: initial
    });
}
function $175c8aaa8bb7371e$var$getCamelizedPropertyRef(propertyRef) {
    return $175c8aaa8bb7371e$var$camelCase(propertyRef.replace(".", " "));
}
function $175c8aaa8bb7371e$var$camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}


let $d15872fa2e35871a$var$directiveHandlers = {};
let $d15872fa2e35871a$var$isDeferringHandlers = false;
let $d15872fa2e35871a$var$directiveHandlerStacks = new Map();
let $d15872fa2e35871a$var$currentHandlerStackKey = Symbol();
let $d15872fa2e35871a$var$attributePrefix = "data-bind-";
function $d15872fa2e35871a$export$99b43ad1ed32e735(name, callback) {
    $d15872fa2e35871a$var$directiveHandlers[name] = callback;
}
function $d15872fa2e35871a$export$19b57a1ea2e090cb(name) {
    return Object.keys($d15872fa2e35871a$var$directiveHandlers).includes(name);
}
function $d15872fa2e35871a$export$90a684c00f3df6ed(el, attributes) {
    const directives = Array.from(attributes).filter($d15872fa2e35871a$var$isDirectiveAttribute).map($d15872fa2e35871a$var$toParsedDirectives);
    return directives.flat().filter((d)=>d).map((directive)=>$d15872fa2e35871a$export$1dd40105af141b08(el, directive));
}
function $d15872fa2e35871a$export$3d81bdeca067fd2d(callback) {
    $d15872fa2e35871a$var$isDeferringHandlers = true;
    let key = Symbol();
    $d15872fa2e35871a$var$currentHandlerStackKey = key;
    $d15872fa2e35871a$var$directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while($d15872fa2e35871a$var$directiveHandlerStacks.get(key).length)$d15872fa2e35871a$var$directiveHandlerStacks.get(key).shift()();
        $d15872fa2e35871a$var$directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        $d15872fa2e35871a$var$isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function $d15872fa2e35871a$export$a51f92c9c1609d03(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, $370754aea5bc9e6a$export$1ecd3170301acce1)(el);
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
function $d15872fa2e35871a$export$1dd40105af141b08(el, directive) {
    let handler = $d15872fa2e35871a$var$directiveHandlers[directive.type] || (()=>{});
    let [utilities, cleanup] = $d15872fa2e35871a$export$a51f92c9c1609d03(el);
    (0, $46a1f2608b4b91f0$export$5d89a587b01747c6)(el, directive.attr, cleanup);
    let wrapperHandler = (application)=>{
        let controller = (0, $175c8aaa8bb7371e$export$6d5f0ef1727b562e)(el, directive.identifier, application);
        if (controller) {
            if (!(0, $370754aea5bc9e6a$export$352205f445242f02)(controller)) {
                console.warn(`StimulusX: Directive attached to non-reactive controller '${directive.identifier}'`, el);
                return;
            }
            handler = handler.bind(handler, el, directive, {
                ...utilities,
                evaluate: $d15872fa2e35871a$var$evaluator(controller),
                modify: (0, $76daf8d022148001$export$f1696300e8775372)
            });
            $d15872fa2e35871a$var$isDeferringHandlers ? $d15872fa2e35871a$var$directiveHandlerStacks.get($d15872fa2e35871a$var$currentHandlerStackKey).push(handler) : handler();
        } else console.error(`Controller '${directive.identifier}' not found`);
    };
    return wrapperHandler;
}
function $d15872fa2e35871a$var$evaluator(controller) {
    return (property)=>(0, $175c8aaa8bb7371e$export$121af9acc174ac93)(controller, property);
}
function $d15872fa2e35871a$var$matchedAttributeRegex() {
    return new RegExp(`${$d15872fa2e35871a$var$attributePrefix}(${Object.keys($d15872fa2e35871a$var$directiveHandlers).join("|")})$`);
}
function $d15872fa2e35871a$var$isDirectiveAttribute({ name: name }) {
    return $d15872fa2e35871a$var$matchedAttributeRegex().test(name);
}
function $d15872fa2e35871a$var$toParsedDirectives({ name: name, value: value }) {
    const type = name.match($d15872fa2e35871a$var$matchedAttributeRegex())[1];
    const bindingExpressions = value.trim().split(/\s+/).filter((e)=>e);
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




function $88fd31ba9313240f$export$8a7688a96d852767(subject) {
    return subject.replace(/:/g, "_").split("_").map((word, index)=>index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}
function $88fd31ba9313240f$export$588732934346abbf(el, callback) {
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        $88fd31ba9313240f$export$588732934346abbf(node, callback, false);
        node = node.nextElementSibling;
    }
}



const $694a8ddd6f476c7f$var$defaultOptions = {
    optIn: false
};
const $694a8ddd6f476c7f$var$StimulusX = {};
let $694a8ddd6f476c7f$var$markerCount = 1;
$694a8ddd6f476c7f$var$StimulusX.init = function(application, opts = {}) {
    const { optIn: optIn } = Object.assign({}, $694a8ddd6f476c7f$var$defaultOptions, opts);
    this.application = application;
    // Override controller registration to insert a reactive subclass instead of the original
    application.register = function(identifier, ControllerClass) {
        let controllerConstructor;
        if (optIn === false || ControllerClass.reactive === true) controllerConstructor = (0, $175c8aaa8bb7371e$export$d56142fa17014959)(ControllerClass, application);
        else controllerConstructor = ControllerClass;
        application.load({
            identifier: identifier,
            controllerConstructor: controllerConstructor
        });
    };
    // Handle re-initializing reactive effects after Turbo morphing
    document.addEventListener("turbo:before-morph-element", $694a8ddd6f476c7f$var$beforeMorphElementCallback);
    document.addEventListener("turbo:morph-element", $694a8ddd6f476c7f$var$morphElementCallback);
    // start watching the dom for changes
    (0, $46a1f2608b4b91f0$export$1a5ae5db40475a2d)();
    (0, $46a1f2608b4b91f0$export$c395e4fde41c37ff)((el)=>(0, $8d51fac66e0b4c1b$export$bdd553fddd433dcb)(()=>$694a8ddd6f476c7f$var$initTree(el)));
    (0, $46a1f2608b4b91f0$export$bb8862ef847f5ec0)((el)=>(0, $8d51fac66e0b4c1b$export$bdd553fddd433dcb)(()=>$694a8ddd6f476c7f$var$destroyTree(el)));
    (0, $46a1f2608b4b91f0$export$545f7104b1510552)((el, attrs)=>{
        $694a8ddd6f476c7f$var$handleValueAttributes(el, attrs);
        (0, $d15872fa2e35871a$export$90a684c00f3df6ed)(el, attrs).forEach((handle)=>handle($694a8ddd6f476c7f$var$StimulusX.application));
    });
    (0, $8d51fac66e0b4c1b$export$bdd553fddd433dcb)(()=>{
        $694a8ddd6f476c7f$var$rootElements().forEach((el)=>$694a8ddd6f476c7f$var$initTree(el));
    });
};
$694a8ddd6f476c7f$var$StimulusX.modifier = (0, $76daf8d022148001$export$cd4b50bb4e5c05a3);
$694a8ddd6f476c7f$var$StimulusX.directive = (0, $d15872fa2e35871a$export$99b43ad1ed32e735);
function $694a8ddd6f476c7f$var$rootElements() {
    return Array.from(document.querySelectorAll("[data-controller]:not([data-controller] [data-controller])"));
}
function $694a8ddd6f476c7f$var$initTree(el) {
    (0, $d15872fa2e35871a$export$3d81bdeca067fd2d)(()=>{
        (0, $88fd31ba9313240f$export$588732934346abbf)(el, (el)=>{
            if (el.__stimulusX_marker) return;
            (0, $d15872fa2e35871a$export$90a684c00f3df6ed)(el, el.attributes).forEach((handle)=>handle($694a8ddd6f476c7f$var$StimulusX.application));
            el.__stimulusX_marker = $694a8ddd6f476c7f$var$markerCount++;
        });
    });
}
function $694a8ddd6f476c7f$var$destroyTree(root) {
    (0, $88fd31ba9313240f$export$588732934346abbf)(root, (el)=>{
        (0, $46a1f2608b4b91f0$export$21fc366069a4f56f)(el);
        (0, $46a1f2608b4b91f0$export$2c8bfe603cc113da)(el);
        delete el.__stimulusX_marker;
    });
}
function $694a8ddd6f476c7f$var$beforeMorphElementCallback({ target: target, detail: { newElement: newElement } }) {
    if (!newElement && target.__stimulusX_marker) return $694a8ddd6f476c7f$var$destroyTree(target);
    delete target.__stimulusX_marker;
}
function $694a8ddd6f476c7f$var$morphElementCallback({ target: target, detail: { newElement: newElement } }) {
    if (newElement) $694a8ddd6f476c7f$var$initTree(target);
}
// Changes to controller value attributes in the DOM do not call
// any properties on the controller so changes are not detected.
// To fix this any value attribute changes are registered by calling
// the value setter on the proxy with the current value - the value is
// unchanged but calling the getter triggers any related effects.
function $694a8ddd6f476c7f$var$handleValueAttributes(el, attrs) {
    if (!el.hasAttribute("data-controller")) return;
    const controllerNames = el.getAttribute("data-controller").trim().split(" ").filter((e)=>e);
    const valueAttributeMatcher = new RegExp(`^data-(${controllerNames.join("|")})-([a-zA-Z0-9\-_]+)-value$`);
    for(let i = 0; i < attrs.length; i++){
        const attr = attrs[i];
        const matches = attr.name.match(valueAttributeMatcher);
        if (matches && matches.length) {
            const identifier = matches[1];
            const valueName = matches[2];
            const controller = $694a8ddd6f476c7f$var$StimulusX.application.getControllerForElementAndIdentifier(el, identifier);
            (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
                controller[`${valueName}Value`] = controller[`${valueName}Value`];
            });
        }
    }
}
var $694a8ddd6f476c7f$export$2e2bcd8739ae039 = $694a8ddd6f476c7f$var$StimulusX;



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("downcase", (value)=>value.toString().toLowerCase());



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("not", (value)=>!value);



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("strip", (value)=>value.toString().trim());



(0, $76daf8d022148001$export$cd4b50bb4e5c05a3)("upcase", (value)=>value.toString().toUpperCase());




function $f420297d66a6359d$export$2706f8d45625eda6(el, value) {
    if (Array.isArray(value)) return $f420297d66a6359d$var$setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return $f420297d66a6359d$var$setClassesFromObject(el, value);
    return $f420297d66a6359d$var$setClassesFromString(el, value);
}
function $f420297d66a6359d$var$setClassesFromString(el, classString) {
    classString = classString || "";
    let missingClasses = (classString)=>classString.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let classes = missingClasses(classString);
    el.classList.add(...classes);
    return ()=>el.classList.remove(...classes);
}
function $f420297d66a6359d$var$setClassesFromObject(el, classObject) {
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
const $cb81467d4cb40cb5$var$booleanAttributes = new Set([
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
const $cb81467d4cb40cb5$var$preserveIfFalsey = [
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected"
];
function $cb81467d4cb40cb5$export$2385a24977818dd0(element, name, value) {
    switch(name){
        case "class":
            $cb81467d4cb40cb5$var$bindClasses(element, value);
            break;
        case "checked":
        case "selected":
            $cb81467d4cb40cb5$var$bindAttributeAndProperty(element, name, value);
            break;
        default:
            $cb81467d4cb40cb5$var$bindAttribute(element, name, value);
            break;
    }
}
function $cb81467d4cb40cb5$var$bindClasses(element, value) {
    if (element.__stimulusX_undoClasses) element.__stimulusX_undoClasses();
    element.__stimulusX_undoClasses = (0, $f420297d66a6359d$export$2706f8d45625eda6)(element, value);
}
function $cb81467d4cb40cb5$var$bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && $cb81467d4cb40cb5$var$attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if ($cb81467d4cb40cb5$var$isBooleanAttr(name)) value = name;
        $cb81467d4cb40cb5$var$setIfChanged(el, name, value);
    }
}
function $cb81467d4cb40cb5$var$bindAttributeAndProperty(el, name, value) {
    $cb81467d4cb40cb5$var$bindAttribute(el, name, value);
    $cb81467d4cb40cb5$var$setPropertyIfChanged(el, name, value);
}
function $cb81467d4cb40cb5$var$setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function $cb81467d4cb40cb5$var$setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function $cb81467d4cb40cb5$var$isBooleanAttr(attrName) {
    return $cb81467d4cb40cb5$var$booleanAttributes.has(attrName);
}
function $cb81467d4cb40cb5$var$attributeShouldntBePreservedIfFalsy(name) {
    return !$cb81467d4cb40cb5$var$preserveIfFalsey.includes(name);
}


(0, $d15872fa2e35871a$export$99b43ad1ed32e735)("attr", (el, { property: property, subject: subject, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>{
        (0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            (0, $cb81467d4cb40cb5$export$2385a24977818dd0)(el, subject, value);
        });
    });
});




(0, $d15872fa2e35871a$export$99b43ad1ed32e735)("text", (el, { property: property, modifiers: modifiers }, { effect: effect, evaluate: evaluate, modify: modify })=>{
    effect(()=>(0, $46a1f2608b4b91f0$export$c98382a3d82f9519)(()=>{
            const value = modify(evaluate(property), modifiers);
            el.textContent = value.toString();
        }));
});


var $d832f2ef8a5ce6ac$export$2e2bcd8739ae039 = (0, $694a8ddd6f476c7f$export$2e2bcd8739ae039);


export {$d832f2ef8a5ce6ac$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=stimulus-x.js.map
