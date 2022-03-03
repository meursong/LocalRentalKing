webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/swr/dist/index.esm.js":
/*!********************************************!*\
  !*** ./node_modules/swr/dist/index.esm.js ***!
  \********************************************/
/*! exports provided: SWRConfig, default, mutate, unstable_serialize, useSWRConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSWR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_serialize", function() { return unstable_serialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRConfig", function() { return useSWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var noop = function () { };
// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
var UNDEFINED = ( /*#__NOINLINE__*/noop());
var OBJECT = Object;
var isUndefined = function (v) { return v === UNDEFINED; };
var isFunction = function (v) { return typeof v == 'function'; };
var mergeObjects = function (a, b) { return OBJECT.assign({}, a, b); };
var STR_UNDEFINED = 'undefined';
// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
var hasWindow = function () { return typeof window != STR_UNDEFINED; };
var hasDocument = function () { return typeof document != STR_UNDEFINED; };
var hasRequestAnimationFrame = function () {
    return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
};

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.
var stableHash = function (arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result)
            return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for (index = 0; index < arg.length; index++) {
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            // Object, sort keys.
            result = '#';
            var keys = OBJECT.keys(arg).sort();
            while (!isUndefined((index = keys.pop()))) {
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    }
    else {
        result = isDate
            ? arg.toJSON()
            : type == 'symbol'
                ? arg.toString()
                : type == 'string'
                    ? JSON.stringify(arg)
                    : '' + arg;
    }
    return result;
};

/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var hasWin = hasWindow();
var hasDoc = hasDocument();
// For node and React Native, `add/removeEventListener` doesn't exist on window.
var onWindowEvent = hasWin && window.addEventListener
    ? window.addEventListener.bind(window)
    : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener
    ? window.removeEventListener.bind(window)
    : noop;
var offDocumentEvent = hasDoc
    ? document.removeEventListener.bind(document)
    : noop;
var isVisible = function () {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
var initFocus = function (callback) {
    // focus revalidate
    onDocumentEvent('visibilitychange', callback);
    onWindowEvent('focus', callback);
    return function () {
        offDocumentEvent('visibilitychange', callback);
        offWindowEvent('focus', callback);
    };
};
var initReconnect = function (callback) {
    // revalidate on reconnected
    var onOnline = function () {
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    var onOffline = function () {
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return function () {
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
var preset = {
    isOnline: isOnline,
    isVisible: isVisible
};
var defaultConfigOptions = {
    initFocus: initFocus,
    initReconnect: initReconnect
};

var IS_SERVER = !hasWindow() || 'Deno' in window;
// Polyfill requestAnimationFrame
var rAF = function (f) {
    return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
// This assignment is to extend the Navigator type to use effectiveType.
var navigatorConnection = typeof navigator !== 'undefined' &&
    navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
var slowConnection = !IS_SERVER &&
    navigatorConnection &&
    (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) ||
        navigatorConnection.saveData);

var serialize = function (key) {
    if (isFunction(key)) {
        try {
            key = key();
        }
        catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    var args = [].concat(key);
    // If key is not falsy, or not an empty array, hash it.
    key =
        typeof key == 'string'
            ? key
            : (Array.isArray(key) ? key.length : key)
                ? stableHash(key)
                : '';
    var infoKey = key ? '$swr$' + key : '';
    return [key, args, infoKey];
};

// Global state used to deduplicate requests and store listeners
var SWRGlobalState = new WeakMap();

var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;

var broadcastState = function (cache, key, data, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) { broadcast = true; }
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], FETCH = _a[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    // Cache was populated, update states of all hooks.
    if (broadcast && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](data, error, isValidating);
        }
    }
    // If we also need to revalidate, only do it for the first hook.
    if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(function () {
                return cache.get(key);
            });
        }
    }
    return cache.get(key);
};

// Global timestamp.
var __timestamp = 0;
var getTimestamp = function () { return ++__timestamp; };

var internalMutate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, optimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasOptimisticData, rollbackData, res;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
                    options = typeof _opts === 'boolean' ? { revalidate: _opts } : _opts || {};
                    populateCache = options.populateCache !== false;
                    revalidate = options.revalidate !== false;
                    rollbackOnError = options.rollbackOnError !== false;
                    optimisticData = options.optimisticData;
                    _a = serialize(_key), key = _a[0], keyInfo = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    _b = SWRGlobalState.get(cache), MUTATION = _b[2];
                    // If there is no new data provided, revalidate the key with current state.
                    if (args.length < 3) {
                        // Revalidate and broadcast state.
                        return [2 /*return*/, broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, populateCache)];
                    }
                    data = _data;
                    beforeMutationTs = getTimestamp();
                    MUTATION[key] = [beforeMutationTs, 0];
                    hasOptimisticData = !isUndefined(optimisticData);
                    rollbackData = cache.get(key);
                    // Do optimistic data update.
                    if (hasOptimisticData) {
                        cache.set(key, optimisticData);
                        broadcastState(cache, key, optimisticData);
                    }
                    if (isFunction(data)) {
                        // `data` is a function, call it passing current cache value.
                        try {
                            data = data(cache.get(key));
                        }
                        catch (err) {
                            // If it throws an error synchronously, we shouldn't update the cache.
                            error = err;
                        }
                    }
                    if (!(data && isFunction(data.then))) return [3 /*break*/, 2];
                    return [4 /*yield*/, data.catch(function (err) {
                            error = err;
                        })
                        // Check if other mutations have occurred since we've started this mutation.
                        // If there's a race we don't update cache or broadcast the change,
                        // just return the data.
                    ];
                case 1:
                    // This means that the mutation is async, we need to check timestamps to
                    // avoid race conditions.
                    data = _c.sent();
                    // Check if other mutations have occurred since we've started this mutation.
                    // If there's a race we don't update cache or broadcast the change,
                    // just return the data.
                    if (beforeMutationTs !== MUTATION[key][0]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    else if (error && hasOptimisticData && rollbackOnError) {
                        // Rollback. Always populate the cache in this case.
                        populateCache = true;
                        data = rollbackData;
                        cache.set(key, rollbackData);
                    }
                    _c.label = 2;
                case 2:
                    if (populateCache) {
                        if (!error) {
                            // Only update cached data if there's no error. Data can be `undefined` here.
                            cache.set(key, data);
                        }
                        // Always update or reset the error.
                        cache.set(keyInfo, mergeObjects(cache.get(keyInfo), { error: error }));
                    }
                    // Reset the timestamp to mark the mutation has ended.
                    MUTATION[key][1] = getTimestamp();
                    return [4 /*yield*/, broadcastState(cache, key, data, error, UNDEFINED, revalidate, populateCache)
                        // Throw error or return data
                    ];
                case 3:
                    res = _c.sent();
                    // Throw error or return data
                    if (error)
                        throw error;
                    return [2 /*return*/, populateCache ? res : data];
            }
        });
    });
};

var revalidateAllKeys = function (revalidators, type) {
    for (var key in revalidators) {
        if (revalidators[key][0])
            revalidators[key][0](type);
    }
};
var initCache = function (provider, options) {
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that bound to
    // the cache.
    // Provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        var EVENT_REVALIDATORS = {};
        var mutate = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        // Update the state if it's new, or the provider has been extended.
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate]);
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        if (!IS_SERVER) {
            // When listening to the native events for auto revalidations,
            // we intentionally put a delay (setTimeout) here to make sure they are
            // fired after immediate JavaScript executions, which can possibly be
            // React's state updates.
            // This avoids some unnecessary revalidations such as
            // https://github.com/vercel/swr/issues/1680.
            var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = function () {
                releaseFocus_1 && releaseFocus_1();
                releaseReconnect_1 && releaseReconnect_1();
                // When un-mounting, we need to remove the cache provider from the state
                // storage too because it's a side-effect. Otherwise when re-mounting we
                // will not re-register those event listeners.
                SWRGlobalState.delete(provider);
            };
        }
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [provider, mutate, unmount];
    }
    return [provider, SWRGlobalState.get(provider)[4]];
};

// error retry
var onErrorRetry = function (_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    // Exponential backoff
    var timeout = ~~((Math.random() + 0.5) *
        (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
// Default cache provider
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
// Default config
var defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry: onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare: function (currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function () { return false; },
    cache: cache,
    mutate: mutate,
    fallback: {}
}, 
// use web preset by default
preset);

var mergeConfigs = function (a, b) {
    // Need to create a new object to avoid mutating the original here.
    var v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var SWRConfig$1 = function (props) {
    var value = props.value;
    // Extend parent context values and middleware.
    var extendedConfig = mergeConfigs(Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SWRConfigContext), value);
    // Should not use the inherited provider.
    var provider = value && value.provider;
    // Use a lazy initialized state to create the cache on first access.
    var cacheContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return provider
            ? initCache(provider(extendedConfig.cache || cache), value)
            : UNDEFINED;
    })[0];
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(function () { return (cacheContext ? cacheContext[2] : UNDEFINED); }, []);
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};

/**
 * An implementation of state with dependency-tracking.
 */
var useStateWithDeps = function (state, unmountedRef) {
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({})[1];
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(state);
    // If a state property (data, error or isValidating) is accessed by the render
    // function, we mark the property as a dependency so if it is updated again
    // in the future, we trigger a rerender.
    // This is also known as dependency-tracking.
    var stateDependenciesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    /**
     * @param payload To change stateRef, pass the values explicitly to setState:
     * @example
     * ```js
     * setState({
     *   isValidating: false
     *   data: newData // set data to newData
     *   error: undefined // set error to undefined
     * })
     *
     * setState({
     *   isValidating: false
     *   data: undefined // set data to undefined
     *   error: err // set error to err
     * })
     * ```
     */
    var setState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
            var k = _;
            // If the property has changed, update the state and mark rerender as
            // needed.
            if (currentState[k] !== payload[k]) {
                currentState[k] = payload[k];
                // If the property is accessed by the component, a rerender should be
                // triggered.
                if (stateDependenciesRef.current[k]) {
                    shouldRerender = true;
                }
            }
        }
        if (shouldRerender && !unmountedRef.current) {
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update the state reference.
    useIsomorphicLayoutEffect(function () {
        stateRef.current = state;
    });
    return [stateRef, stateDependenciesRef.current, setState];
};

var normalize = function (args) {
    return isFunction(args[1])
        ? [args[0], args[1], args[2] || {}]
        : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};

var useSWRConfig = function () {
    return mergeObjects(defaultConfig, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SWRConfigContext));
};

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
var withArgs = function (hook) {
    return function useSWRArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Get the default and inherited configuration.
        var fallbackConfig = useSWRConfig();
        // Normalize arguments.
        var _a = normalize(args), key = _a[0], fn = _a[1], _config = _a[2];
        // Merge configurations.
        var config = mergeConfigs(fallbackConfig, _config);
        // Apply middleware
        var next = hook;
        var use = config.use;
        if (use) {
            for (var i = use.length; i-- > 0;) {
                next = use[i](next);
            }
        }
        return next(key, fn || config.fetcher, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
var subscribeCallback = function (key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function () {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function (_key, fetcher, config) {
    var cache = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], MUTATION = _a[2], FETCH = _a[3];
    // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
    // states such as `error` and `isValidating` inside,
    // all of them are derived from `_key`.
    // `fnArgs` is an array of arguments parsed from the key, which will be passed
    // to the fetcher.
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    // If it's the initial render of this hook.
    var initialMountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Refs to keep the key and config.
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    var fetcherRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fetcher);
    var configRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(config);
    var getConfig = function () { return configRef.current; };
    var isActive = function () { return getConfig().isVisible() && getConfig().isOnline(); };
    var patchFetchInfo = function (info) {
        return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
    };
    // Get the current state that SWR should return.
    var cached = cache.get(key);
    var fallback = isUndefined(fallbackData)
        ? config.fallback[key]
        : fallbackData;
    var data = isUndefined(cached) ? fallback : cached;
    var info = cache.get(keyInfo) || {};
    var error = info.error;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    var shouldRevalidateOnMount = function () {
        // If `revalidateOnMount` is set, we take the value directly.
        if (!isUndefined(revalidateOnMount))
            return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused())
            return false;
        return suspense
            ? // Under suspense mode, it will always fetch on render if there is no
                // stale data so no need to revalidate immediately on mount again.
                !isUndefined(data)
            : // If there is no stale data, we need to revalidate on mount;
                // If `revalidateIfStale` is set to true, we will always revalidate.
                isUndefined(data) || config.revalidateIfStale;
    };
    // Resolve the current validating state.
    var resolveValidating = function () {
        if (!key || !fetcher)
            return false;
        if (info.isValidating)
            return true;
        // If it's not mounted yet and it should revalidate on mount, revalidate.
        return !initialMountedRef.current && shouldRevalidateOnMount();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
        data: data,
        error: error,
        isValidating: isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) { return __awaiter(void 0, void 0, void 0, function () {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFetcher = fetcherRef.current;
                    if (!key ||
                        !currentFetcher ||
                        unmountedRef.current ||
                        getConfig().isPaused()) {
                        return [2 /*return*/, false];
                    }
                    loading = true;
                    opts = revalidateOpts || {};
                    shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                    isCurrentKeyMounted = function () {
                        return !unmountedRef.current &&
                            key === keyRef.current &&
                            initialMountedRef.current;
                    };
                    cleanupState = function () {
                        // Check if it's still the same request before deleting.
                        var requestInfo = FETCH[key];
                        if (requestInfo && requestInfo[1] === startAt) {
                            delete FETCH[key];
                        }
                    };
                    newState = { isValidating: false };
                    finishRequestAndUpdateState = function () {
                        patchFetchInfo({ isValidating: false });
                        // We can only set state if it's safe (still mounted with the same key).
                        if (isCurrentKeyMounted()) {
                            setState(newState);
                        }
                    };
                    // Start fetching. Change the `isValidating` state, update the cache.
                    patchFetchInfo({
                        isValidating: true
                    });
                    setState({ isValidating: true });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    if (shouldStartNewRequest) {
                        // Tell all other hooks to change the `isValidating` state.
                        broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true);
                        // If no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !cache.get(key)) {
                            setTimeout(function () {
                                if (loading && isCurrentKeyMounted()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }, config.loadingTimeout);
                        }
                        // Start the request and save the timestamp.
                        FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                    }
                    _a = FETCH[key], newData = _a[0], startAt = _a[1];
                    return [4 /*yield*/, newData];
                case 2:
                    newData = _b.sent();
                    if (shouldStartNewRequest) {
                        // If the request isn't interrupted, clean it up after the
                        // deduplication interval.
                        setTimeout(cleanupState, config.dedupingInterval);
                    }
                    // If there're other ongoing request(s), started after the current one,
                    // we need to ignore the current one to avoid possible race conditions:
                    //   req1------------------>res1        (current one)
                    //        req2---------------->res2
                    // the request that fired later will always be kept.
                    // The timestamp maybe be `undefined` or a number
                    if (!FETCH[key] || FETCH[key][1] !== startAt) {
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Clear error.
                    patchFetchInfo({
                        error: UNDEFINED
                    });
                    newState.error = UNDEFINED;
                    mutationInfo = MUTATION[key];
                    if (!isUndefined(mutationInfo) &&
                        // case 1
                        (startAt <= mutationInfo[0] ||
                            // case 2
                            startAt <= mutationInfo[1] ||
                            // case 3
                            mutationInfo[1] === 0)) {
                        finishRequestAndUpdateState();
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Deep compare with latest state to avoid extra re-renders.
                    // For local state, compare and assign.
                    if (!compare(stateRef.current.data, newData)) {
                        newState.data = newData;
                    }
                    else {
                        // data and newData are deeply equal
                        // it should be safe to broadcast the stale data
                        newState.data = stateRef.current.data;
                        // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
                        // which takes care of avoiding the re-render
                    }
                    // For global state, it's possible that the key has changed.
                    // https://github.com/vercel/swr/pull/1058
                    if (!compare(cache.get(key), newData)) {
                        cache.set(key, newData);
                    }
                    // Trigger the successful callback if it's the original request.
                    if (shouldStartNewRequest) {
                        if (isCurrentKeyMounted()) {
                            getConfig().onSuccess(newData, key, config);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    cleanupState();
                    // Not paused, we continue handling the error. Otherwise discard it.
                    if (!getConfig().isPaused()) {
                        // Get a new error, don't use deep comparison for errors.
                        patchFetchInfo({ error: err_1 });
                        newState.error = err_1;
                        // Error event and retry logic. Only for the actual request, not
                        // deduped ones.
                        if (shouldStartNewRequest && isCurrentKeyMounted()) {
                            getConfig().onError(err_1, key, config);
                            if ((typeof config.shouldRetryOnError === 'boolean' &&
                                config.shouldRetryOnError) ||
                                (isFunction(config.shouldRetryOnError) &&
                                    config.shouldRetryOnError(err_1))) {
                                // When retrying, dedupe is always enabled
                                if (isActive()) {
                                    // If it's active, stop. It will auto revalidate when refocusing
                                    // or reconnecting.
                                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                                        retryCount: (opts.retryCount || 0) + 1,
                                        dedupe: true
                                    });
                                }
                            }
                        }
                    }
                    return [3 /*break*/, 4];
                case 4:
                    // Mark loading as stopped.
                    loading = false;
                    // Update the current hook's state.
                    finishRequestAndUpdateState();
                    // Here is the source of the request, need to tell all other hooks to
                    // update their states.
                    if (isCurrentKeyMounted() && shouldStartNewRequest) {
                        broadcastState(cache, key, newState.data, newState.error, false);
                    }
                    return [2 /*return*/, true];
            }
        });
    }); }, 
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // Similar to the global mutate, but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(
    // By using `bind` we don't need to modify the size of the rest arguments.
    internalMutate.bind(UNDEFINED, cache, function () { return keyRef.current; }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update fetcher and config refs.
    useIsomorphicLayoutEffect(function () {
        fetcherRef.current = fetcher;
        configRef.current = config;
    });
    // After mounted or key changed.
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return;
        // Not the initial render.
        var keyChanged = initialMountedRef.current;
        var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        // Expose state updater to global event listeners. So we can update hook's
        // internal state from the outside.
        var onStateUpdate = function (updatedData, updatedError, updatedIsValidating) {
            setState(mergeObjects({
                error: updatedError,
                isValidating: updatedIsValidating
            }, 
            // Since `setState` only shallowly compares states, we do a deep
            // comparison here.
            compare(stateRef.current.data, updatedData)
                ? UNDEFINED
                : {
                    data: updatedData
                }));
        };
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        var nextFocusRevalidatedAt = 0;
        var onRevalidate = function (type) {
            if (type == FOCUS_EVENT) {
                var now = Date.now();
                if (getConfig().revalidateOnFocus &&
                    now > nextFocusRevalidatedAt &&
                    isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            }
            else if (type == RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            }
            else if (type == MUTATE_EVENT) {
                return revalidate();
            }
            return;
        };
        var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
        var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // When `key` updates, reset the state to the initial value
        // and trigger a rerender if necessary.
        if (keyChanged) {
            setState({
                data: data,
                error: error,
                isValidating: isValidating
            });
        }
        // Trigger a revalidation.
        if (shouldRevalidateOnMount()) {
            if (isUndefined(data) || IS_SERVER) {
                // Revalidate immediately.
                softRevalidate();
            }
            else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                rAF(softRevalidate);
            }
        }
        return function () {
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubUpdate();
            unsubEvents();
        };
    }, [key, revalidate]);
    // Polling
    useIsomorphicLayoutEffect(function () {
        var timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            var interval = isFunction(refreshInterval)
                ? refreshInterval(data)
                : refreshInterval;
            // We only start next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online and not errored.
            if (!stateRef.current.error &&
                (refreshWhenHidden || getConfig().isVisible()) &&
                (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            }
            else {
                // Schedule next interval to check again.
                next();
            }
        }
        next();
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
    // Display debug info in React DevTools.
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"])(data);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
        mutate: boundMutate,
        get data() {
            stateDependencies.data = true;
            return data;
        },
        get error() {
            stateDependencies.error = true;
            return error;
        },
        get isValidating() {
            stateDependencies.isValidating = true;
            return isValidating;
        }
    };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
    value: defaultConfig
});
var unstable_serialize = function (key) { return serialize(key)[0]; };
var useSWR = withArgs(useSWRHandler);

// useSWR




/***/ }),

/***/ "./pages/objectrecieve.js":
/*!********************************!*\
  !*** ./pages/objectrecieve.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\objectrecieve.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

function ObjectRecieve() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["useInView"])(),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostLoading = _useSelector2.loadPostLoading,
      id = _useSelector2.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_7__["default"])("".concat(backUrl, "/user/followers?limit=").concat(followersLimit), fetcher),
      followersData = _useSWR.data,
      followerError = _useSWR.error;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])( // 화면 사이즈에 따라 버그가 발생중 fix1
  function () {
    if (inView && hasMorePost && !loadPostLoading) {
      var _mainPosts;

      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
      // dispatch({
      //   type: LOAD_O_RECIEVE_POST_REQUEST,
      //   lastId, // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
      // });
    }
  }, [inView, hasMorePost, loadPostLoading, mainPosts, id]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uBB3C\uAC74\uC744 \uBE4C\uB824\uC918 | \uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, me && __jsx(PostForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 16
    }
  }), mainPosts.map(function (post) {
    return __jsx(PostCard, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 34
      }
    });
  }), __jsx("div", {
    ref: hasMorePost && !loadPostLoading ? ref : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
}

_s(ObjectRecieve, "YH8Ocb7WWpMr5I1+S0JWuwUENBA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__["useInView"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = ObjectRecieve;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ObjectRecieve);

var _c;

$RefreshReg$(_c, "ObjectRecieve");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2JqZWN0cmVjaWV2ZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk9iamVjdFJlY2lldmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5WaWV3IiwicmVmIiwiaW5WaWV3IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0TG9hZGluZyIsImlkIiwidXNlU1dSIiwiYmFja1VybCIsImZvbGxvd2Vyc0xpbWl0IiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJlcnJvciIsInVzZUVmZmVjdCIsImxhc3RJZCIsImxlbmd0aCIsIm1hcCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7O0FBRTNJO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxlQUFlO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELElBQUksSUFBSTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkIsY0FBYyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ1AsV0FBTyxhQUFQO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQURGLENBREYsRUFJRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsRUFBRSxJQUFJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFQsRUFFR0UsU0FBUyxDQUFDYSxHQUFWLENBQWMsVUFBQ2QsSUFBRDtBQUFBLFdBQVUsTUFBQyxRQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNJLEVBQXBCO0FBQXdCLFVBQUksRUFBRUosSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFWO0FBQUEsR0FBZCxDQUZILEVBR0U7QUFBSyxPQUFHLEVBQUVFLFdBQVcsSUFBSSxDQUFDQyxlQUFoQixHQUFrQ1QsR0FBbEMsR0FBd0NxQixTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FKRixDQURGO0FBYUQ7O0dBdENRekIsYTtVQUNVRSx1RCxFQUNLQyxxRSxFQUNQRyx1RCxFQUN5Q0EsdUQsRUFFRlMsMkM7OztLQU4vQ2YsYTs7QUF5RE1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzMTBmMWZlMzQ3Y2JiNjg5NzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIGNyZWF0ZUVsZW1lbnQsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZURlYnVnVmFsdWUgfSBmcm9tICdyZWFjdCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbi8vIFVzaW5nIG5vb3AoKSBhcyB0aGUgdW5kZWZpbmVkIHZhbHVlIGFzIHVuZGVmaW5lZCBjYW4gcG9zc2libHkgYmUgcmVwbGFjZWRcbi8vIGJ5IHNvbWV0aGluZyBlbHNlLiAgUHJldHRpZXIgaWdub3JlIGFuZCBleHRyYSBwYXJlbnRoZXNlcyBhcmUgbmVjZXNzYXJ5IGhlcmVcbi8vIHRvIGVuc3VyZSB0aGF0IHRzYyBkb2Vzbid0IHJlbW92ZSB0aGUgX19OT0lOTElORV9fIGNvbW1lbnQuXG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciBVTkRFRklORUQgPSAoIC8qI19fTk9JTkxJTkVfXyovbm9vcCgpKTtcbnZhciBPQkpFQ1QgPSBPYmplY3Q7XG52YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdiA9PT0gVU5ERUZJTkVEOyB9O1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJzsgfTtcbnZhciBtZXJnZU9iamVjdHMgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gT0JKRUNULmFzc2lnbih7fSwgYSwgYik7IH07XG52YXIgU1RSX1VOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xuLy8gTk9URTogVXNlIGZ1bmN0aW9uIHRvIGd1YXJhbnRlZSBpdCdzIHJlLWV2YWx1YXRlZCBiZXR3ZWVuIGpzZG9tIGFuZCBub2RlIHJ1bnRpbWUgZm9yIHRlc3RzLlxudmFyIGhhc1dpbmRvdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT0gU1RSX1VOREVGSU5FRDsgfTtcbnZhciBoYXNEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPSBTVFJfVU5ERUZJTkVEOyB9O1xudmFyIGhhc1JlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaGFzV2luZG93KCkgJiYgdHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gIT0gU1RSX1VOREVGSU5FRDtcbn07XG5cbi8vIHVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBvYmplY3QtPmtleSBtYXBwaW5nXG4vLyBzbyB0aGUgb2JqZWN0cyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4vLyBXZWFrTWFwIHVzZXMgYSBoYXNodGFibGUgdW5kZXIgdGhlIGhvb2QsIHNvIHRoZSBsb29rdXBcbi8vIGNvbXBsZXhpdHkgaXMgYWxtb3N0IE8oMSkuXG52YXIgdGFibGUgPSBuZXcgV2Vha01hcCgpO1xuLy8gY291bnRlciBvZiB0aGUga2V5XG52YXIgY291bnRlciA9IDA7XG4vLyBBIHN0YWJsZSBoYXNoIGltcGxlbWVudGF0aW9uIHRoYXQgc3VwcG9ydHM6XG4vLyAtIEZhc3QgYW5kIGVuc3VyZXMgdW5pcXVlIGhhc2ggcHJvcGVydGllc1xuLy8gLSBIYW5kbGVzIHVuc2VyaWFsaXphYmxlIHZhbHVlc1xuLy8gLSBIYW5kbGVzIG9iamVjdCBrZXkgb3JkZXJpbmdcbi8vIC0gR2VuZXJhdGVzIHNob3J0IHJlc3VsdHNcbi8vXG4vLyBUaGlzIGlzIG5vdCBhIHNlcmlhbGl6YXRpb24gZnVuY3Rpb24sIGFuZCB0aGUgcmVzdWx0IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlXG4vLyBwYXJzaWJsZS5cbnZhciBzdGFibGVIYXNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcmcgJiYgYXJnLmNvbnN0cnVjdG9yO1xuICAgIHZhciBpc0RhdGUgPSBjb25zdHJ1Y3RvciA9PSBEYXRlO1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIGluZGV4O1xuICAgIGlmIChPQkpFQ1QoYXJnKSA9PT0gYXJnICYmICFpc0RhdGUgJiYgY29uc3RydWN0b3IgIT0gUmVnRXhwKSB7XG4gICAgICAgIC8vIE9iamVjdC9mdW5jdGlvbiwgbm90IG51bGwvZGF0ZS9yZWdleHAuIFVzZSBXZWFrTWFwIHRvIHN0b3JlIHRoZSBpZCBmaXJzdC5cbiAgICAgICAgLy8gSWYgaXQncyBhbHJlYWR5IGhhc2hlZCwgZGlyZWN0bHkgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIHJlc3VsdCA9IHRhYmxlLmdldChhcmcpO1xuICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGhhc2ggZmlyc3QgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3Rpb24gYmVmb3JlIGVudGVyaW5nIHRoZVxuICAgICAgICAvLyByZWN1cnNpdmUgYHN0YWJsZUhhc2hgIGNhbGxzLlxuICAgICAgICAvLyBGb3Igb3RoZXIgb2JqZWN0cyBsaWtlIHNldCBhbmQgbWFwLCB3ZSB1c2UgdGhpcyBpZCBkaXJlY3RseSBhcyB0aGUgaGFzaC5cbiAgICAgICAgcmVzdWx0ID0gKytjb3VudGVyICsgJ34nO1xuICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LlxuICAgICAgICAgICAgcmVzdWx0ID0gJ0AnO1xuICAgICAgICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgYXJnLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdGFibGVIYXNoKGFyZ1tpbmRleF0pICsgJywnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFibGUuc2V0KGFyZywgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gT0JKRUNUKSB7XG4gICAgICAgICAgICAvLyBPYmplY3QsIHNvcnQga2V5cy5cbiAgICAgICAgICAgIHJlc3VsdCA9ICcjJztcbiAgICAgICAgICAgIHZhciBrZXlzID0gT0JKRUNULmtleXMoYXJnKS5zb3J0KCk7XG4gICAgICAgICAgICB3aGlsZSAoIWlzVW5kZWZpbmVkKChpbmRleCA9IGtleXMucG9wKCkpKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoYXJnW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGluZGV4ICsgJzonICsgc3RhYmxlSGFzaChhcmdbaW5kZXhdKSArICcsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5zZXQoYXJnLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBpc0RhdGVcbiAgICAgICAgICAgID8gYXJnLnRvSlNPTigpXG4gICAgICAgICAgICA6IHR5cGUgPT0gJ3N5bWJvbCdcbiAgICAgICAgICAgICAgICA/IGFyZy50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgOiB0eXBlID09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkoYXJnKVxuICAgICAgICAgICAgICAgICAgICA6ICcnICsgYXJnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBEdWUgdG8gYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTY3ODA3NSxcbiAqIGl0J3Mgbm90IHJlbGlhYmxlIHRvIGRldGVjdCBpZiB0aGUgYnJvd3NlciBpcyBjdXJyZW50bHkgb25saW5lIG9yIG9mZmxpbmVcbiAqIGJhc2VkIG9uIGBuYXZpZ2F0b3Iub25MaW5lYC5cbiAqIEFzIGEgd29yayBhcm91bmQsIHdlIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmUgb24gZmlyc3QgbG9hZCwgYW5kIGNoYW5nZVxuICogdGhlIHN0YXR1cyB1cG9uIGBvbmxpbmVgIG9yIGBvZmZsaW5lYCBldmVudHMuXG4gKi9cbnZhciBvbmxpbmUgPSB0cnVlO1xudmFyIGlzT25saW5lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb25saW5lOyB9O1xudmFyIGhhc1dpbiA9IGhhc1dpbmRvdygpO1xudmFyIGhhc0RvYyA9IGhhc0RvY3VtZW50KCk7XG4vLyBGb3Igbm9kZSBhbmQgUmVhY3QgTmF0aXZlLCBgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJgIGRvZXNuJ3QgZXhpc3Qgb24gd2luZG93LlxudmFyIG9uV2luZG93RXZlbnQgPSBoYXNXaW4gJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA/IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyLmJpbmQod2luZG93KVxuICAgIDogbm9vcDtcbnZhciBvbkRvY3VtZW50RXZlbnQgPSBoYXNEb2MgPyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyLmJpbmQoZG9jdW1lbnQpIDogbm9vcDtcbnZhciBvZmZXaW5kb3dFdmVudCA9IGhhc1dpbiAmJiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgID8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh3aW5kb3cpXG4gICAgOiBub29wO1xudmFyIG9mZkRvY3VtZW50RXZlbnQgPSBoYXNEb2NcbiAgICA/IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZChkb2N1bWVudClcbiAgICA6IG5vb3A7XG52YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2aXNpYmlsaXR5U3RhdGUgPSBoYXNEb2MgJiYgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlO1xuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2aXNpYmlsaXR5U3RhdGUpIHx8IHZpc2liaWxpdHlTdGF0ZSAhPT0gJ2hpZGRlbic7XG59O1xudmFyIGluaXRGb2N1cyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIC8vIGZvY3VzIHJldmFsaWRhdGVcbiAgICBvbkRvY3VtZW50RXZlbnQoJ3Zpc2liaWxpdHljaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgb25XaW5kb3dFdmVudCgnZm9jdXMnLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2ZmRG9jdW1lbnRFdmVudCgndmlzaWJpbGl0eWNoYW5nZScsIGNhbGxiYWNrKTtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ2ZvY3VzJywgY2FsbGJhY2spO1xuICAgIH07XG59O1xudmFyIGluaXRSZWNvbm5lY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAvLyByZXZhbGlkYXRlIG9uIHJlY29ubmVjdGVkXG4gICAgdmFyIG9uT25saW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvbmxpbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH07XG4gICAgLy8gbm90aGluZyB0byByZXZhbGlkYXRlLCBqdXN0IHVwZGF0ZSB0aGUgc3RhdHVzXG4gICAgdmFyIG9uT2ZmbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25saW5lID0gZmFsc2U7XG4gICAgfTtcbiAgICBvbldpbmRvd0V2ZW50KCdvbmxpbmUnLCBvbk9ubGluZSk7XG4gICAgb25XaW5kb3dFdmVudCgnb2ZmbGluZScsIG9uT2ZmbGluZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ29ubGluZScsIG9uT25saW5lKTtcbiAgICAgICAgb2ZmV2luZG93RXZlbnQoJ29mZmxpbmUnLCBvbk9mZmxpbmUpO1xuICAgIH07XG59O1xudmFyIHByZXNldCA9IHtcbiAgICBpc09ubGluZTogaXNPbmxpbmUsXG4gICAgaXNWaXNpYmxlOiBpc1Zpc2libGVcbn07XG52YXIgZGVmYXVsdENvbmZpZ09wdGlvbnMgPSB7XG4gICAgaW5pdEZvY3VzOiBpbml0Rm9jdXMsXG4gICAgaW5pdFJlY29ubmVjdDogaW5pdFJlY29ubmVjdFxufTtcblxudmFyIElTX1NFUlZFUiA9ICFoYXNXaW5kb3coKSB8fCAnRGVubycgaW4gd2luZG93O1xuLy8gUG9seWZpbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG52YXIgckFGID0gZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gaGFzUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgPyB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddKGYpIDogc2V0VGltZW91dChmLCAxKTtcbn07XG4vLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gSVNfU0VSVkVSID8gdXNlRWZmZWN0IDogdXNlTGF5b3V0RWZmZWN0O1xuLy8gVGhpcyBhc3NpZ25tZW50IGlzIHRvIGV4dGVuZCB0aGUgTmF2aWdhdG9yIHR5cGUgdG8gdXNlIGVmZmVjdGl2ZVR5cGUuXG52YXIgbmF2aWdhdG9yQ29ubmVjdGlvbiA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yLmNvbm5lY3Rpb247XG4vLyBBZGp1c3QgdGhlIGNvbmZpZyBiYXNlZCBvbiBzbG93IGNvbm5lY3Rpb24gc3RhdHVzICg8PSA3MEticHMpLlxudmFyIHNsb3dDb25uZWN0aW9uID0gIUlTX1NFUlZFUiAmJlxuICAgIG5hdmlnYXRvckNvbm5lY3Rpb24gJiZcbiAgICAoWydzbG93LTJnJywgJzJnJ10uaW5jbHVkZXMobmF2aWdhdG9yQ29ubmVjdGlvbi5lZmZlY3RpdmVUeXBlKSB8fFxuICAgICAgICBuYXZpZ2F0b3JDb25uZWN0aW9uLnNhdmVEYXRhKTtcblxudmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBrZXkgPSBrZXkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBkZXBlbmRlbmNpZXMgbm90IHJlYWR5XG4gICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYXJncyA9IFtdLmNvbmNhdChrZXkpO1xuICAgIC8vIElmIGtleSBpcyBub3QgZmFsc3ksIG9yIG5vdCBhbiBlbXB0eSBhcnJheSwgaGFzaCBpdC5cbiAgICBrZXkgPVxuICAgICAgICB0eXBlb2Yga2V5ID09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IGtleVxuICAgICAgICAgICAgOiAoQXJyYXkuaXNBcnJheShrZXkpID8ga2V5Lmxlbmd0aCA6IGtleSlcbiAgICAgICAgICAgICAgICA/IHN0YWJsZUhhc2goa2V5KVxuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgdmFyIGluZm9LZXkgPSBrZXkgPyAnJHN3ciQnICsga2V5IDogJyc7XG4gICAgcmV0dXJuIFtrZXksIGFyZ3MsIGluZm9LZXldO1xufTtcblxuLy8gR2xvYmFsIHN0YXRlIHVzZWQgdG8gZGVkdXBsaWNhdGUgcmVxdWVzdHMgYW5kIHN0b3JlIGxpc3RlbmVyc1xudmFyIFNXUkdsb2JhbFN0YXRlID0gbmV3IFdlYWtNYXAoKTtcblxudmFyIEZPQ1VTX0VWRU5UID0gMDtcbnZhciBSRUNPTk5FQ1RfRVZFTlQgPSAxO1xudmFyIE1VVEFURV9FVkVOVCA9IDI7XG5cbnZhciBicm9hZGNhc3RTdGF0ZSA9IGZ1bmN0aW9uIChjYWNoZSwga2V5LCBkYXRhLCBlcnJvciwgaXNWYWxpZGF0aW5nLCByZXZhbGlkYXRlLCBicm9hZGNhc3QpIHtcbiAgICBpZiAoYnJvYWRjYXN0ID09PSB2b2lkIDApIHsgYnJvYWRjYXN0ID0gdHJ1ZTsgfVxuICAgIHZhciBfYSA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSksIEVWRU5UX1JFVkFMSURBVE9SUyA9IF9hWzBdLCBTVEFURV9VUERBVEVSUyA9IF9hWzFdLCBGRVRDSCA9IF9hWzNdO1xuICAgIHZhciByZXZhbGlkYXRvcnMgPSBFVkVOVF9SRVZBTElEQVRPUlNba2V5XTtcbiAgICB2YXIgdXBkYXRlcnMgPSBTVEFURV9VUERBVEVSU1trZXldO1xuICAgIC8vIENhY2hlIHdhcyBwb3B1bGF0ZWQsIHVwZGF0ZSBzdGF0ZXMgb2YgYWxsIGhvb2tzLlxuICAgIGlmIChicm9hZGNhc3QgJiYgdXBkYXRlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdXBkYXRlcnNbaV0oZGF0YSwgZXJyb3IsIGlzVmFsaWRhdGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgd2UgYWxzbyBuZWVkIHRvIHJldmFsaWRhdGUsIG9ubHkgZG8gaXQgZm9yIHRoZSBmaXJzdCBob29rLlxuICAgIGlmIChyZXZhbGlkYXRlKSB7XG4gICAgICAgIC8vIEludmFsaWRhdGUgdGhlIGtleSBieSBkZWxldGluZyB0aGUgY29uY3VycmVudCByZXF1ZXN0IG1hcmtlcnMgc28gbmV3XG4gICAgICAgIC8vIHJlcXVlc3RzIHdpbGwgbm90IGJlIGRlZHVwZWQuXG4gICAgICAgIGRlbGV0ZSBGRVRDSFtrZXldO1xuICAgICAgICBpZiAocmV2YWxpZGF0b3JzICYmIHJldmFsaWRhdG9yc1swXSkge1xuICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdG9yc1swXShNVVRBVEVfRVZFTlQpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbn07XG5cbi8vIEdsb2JhbCB0aW1lc3RhbXAuXG52YXIgX190aW1lc3RhbXAgPSAwO1xudmFyIGdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICsrX190aW1lc3RhbXA7IH07XG5cbnZhciBpbnRlcm5hbE11dGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjYWNoZSwgX2tleSwgX2RhdGEsIF9vcHRzLCBvcHRpb25zLCBwb3B1bGF0ZUNhY2hlLCByZXZhbGlkYXRlLCByb2xsYmFja09uRXJyb3IsIG9wdGltaXN0aWNEYXRhLCBfYSwga2V5LCBrZXlJbmZvLCBfYiwgTVVUQVRJT04sIGRhdGEsIGVycm9yLCBiZWZvcmVNdXRhdGlvblRzLCBoYXNPcHRpbWlzdGljRGF0YSwgcm9sbGJhY2tEYXRhLCByZXM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlID0gYXJnc1swXSwgX2tleSA9IGFyZ3NbMV0sIF9kYXRhID0gYXJnc1syXSwgX29wdHMgPSBhcmdzWzNdO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIF9vcHRzID09PSAnYm9vbGVhbicgPyB7IHJldmFsaWRhdGU6IF9vcHRzIH0gOiBfb3B0cyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVDYWNoZSA9IG9wdGlvbnMucG9wdWxhdGVDYWNoZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldmFsaWRhdGUgPSBvcHRpb25zLnJldmFsaWRhdGUgIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByb2xsYmFja09uRXJyb3IgPSBvcHRpb25zLnJvbGxiYWNrT25FcnJvciAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXN0aWNEYXRhID0gb3B0aW9ucy5vcHRpbWlzdGljRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBzZXJpYWxpemUoX2tleSksIGtleSA9IF9hWzBdLCBrZXlJbmZvID0gX2FbMl07XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICBfYiA9IFNXUkdsb2JhbFN0YXRlLmdldChjYWNoZSksIE1VVEFUSU9OID0gX2JbMl07XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG5ldyBkYXRhIHByb3ZpZGVkLCByZXZhbGlkYXRlIHRoZSBrZXkgd2l0aCBjdXJyZW50IHN0YXRlLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGFuZCBicm9hZGNhc3Qgc3RhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgY2FjaGUuZ2V0KGtleSksIFVOREVGSU5FRCwgVU5ERUZJTkVELCByZXZhbGlkYXRlLCBwb3B1bGF0ZUNhY2hlKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9kYXRhO1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVNdXRhdGlvblRzID0gZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICAgICAgICAgIE1VVEFUSU9OW2tleV0gPSBbYmVmb3JlTXV0YXRpb25UcywgMF07XG4gICAgICAgICAgICAgICAgICAgIGhhc09wdGltaXN0aWNEYXRhID0gIWlzVW5kZWZpbmVkKG9wdGltaXN0aWNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcm9sbGJhY2tEYXRhID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG9wdGltaXN0aWMgZGF0YSB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNPcHRpbWlzdGljRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleSwgb3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgb3B0aW1pc3RpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgZGF0YWAgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCBwYXNzaW5nIGN1cnJlbnQgY2FjaGUgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhKGNhY2hlLmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCB0aHJvd3MgYW4gZXJyb3Igc3luY2hyb25vdXNseSwgd2Ugc2hvdWxkbid0IHVwZGF0ZSB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGF0YSAmJiBpc0Z1bmN0aW9uKGRhdGEudGhlbikpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGF0YS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb3RoZXIgbXV0YXRpb25zIGhhdmUgb2NjdXJyZWQgc2luY2Ugd2UndmUgc3RhcnRlZCB0aGlzIG11dGF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJhY2Ugd2UgZG9uJ3QgdXBkYXRlIGNhY2hlIG9yIGJyb2FkY2FzdCB0aGUgY2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG1lYW5zIHRoYXQgdGhlIG11dGF0aW9uIGlzIGFzeW5jLCB3ZSBuZWVkIHRvIGNoZWNrIHRpbWVzdGFtcHMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYXZvaWQgcmFjZSBjb25kaXRpb25zLlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBvdGhlciBtdXRhdGlvbnMgaGF2ZSBvY2N1cnJlZCBzaW5jZSB3ZSd2ZSBzdGFydGVkIHRoaXMgbXV0YXRpb24uXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByYWNlIHdlIGRvbid0IHVwZGF0ZSBjYWNoZSBvciBicm9hZGNhc3QgdGhlIGNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCByZXR1cm4gdGhlIGRhdGEuXG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmVNdXRhdGlvblRzICE9PSBNVVRBVElPTltrZXldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IgJiYgaGFzT3B0aW1pc3RpY0RhdGEgJiYgcm9sbGJhY2tPbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSb2xsYmFjay4gQWx3YXlzIHBvcHVsYXRlIHRoZSBjYWNoZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByb2xsYmFja0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCByb2xsYmFja0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3B1bGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgY2FjaGVkIGRhdGEgaWYgdGhlcmUncyBubyBlcnJvci4gRGF0YSBjYW4gYmUgYHVuZGVmaW5lZGAgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsd2F5cyB1cGRhdGUgb3IgcmVzZXQgdGhlIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUluZm8sIG1lcmdlT2JqZWN0cyhjYWNoZS5nZXQoa2V5SW5mbyksIHsgZXJyb3I6IGVycm9yIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgdGltZXN0YW1wIHRvIG1hcmsgdGhlIG11dGF0aW9uIGhhcyBlbmRlZC5cbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05ba2V5XVsxXSA9IGdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBicm9hZGNhc3RTdGF0ZShjYWNoZSwga2V5LCBkYXRhLCBlcnJvciwgVU5ERUZJTkVELCByZXZhbGlkYXRlLCBwb3B1bGF0ZUNhY2hlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBwb3B1bGF0ZUNhY2hlID8gcmVzIDogZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxudmFyIHJldmFsaWRhdGVBbGxLZXlzID0gZnVuY3Rpb24gKHJldmFsaWRhdG9ycywgdHlwZSkge1xuICAgIGZvciAodmFyIGtleSBpbiByZXZhbGlkYXRvcnMpIHtcbiAgICAgICAgaWYgKHJldmFsaWRhdG9yc1trZXldWzBdKVxuICAgICAgICAgICAgcmV2YWxpZGF0b3JzW2tleV1bMF0odHlwZSk7XG4gICAgfVxufTtcbnZhciBpbml0Q2FjaGUgPSBmdW5jdGlvbiAocHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICAvLyBUaGUgZ2xvYmFsIHN0YXRlIGZvciBhIHNwZWNpZmljIHByb3ZpZGVyIHdpbGwgYmUgdXNlZCB0byBkZWR1cGxpY2F0ZVxuICAgIC8vIHJlcXVlc3RzIGFuZCBzdG9yZSBsaXN0ZW5lcnMuIEFzIHdlbGwgYXMgYSBtdXRhdGUgZnVuY3Rpb24gdGhhdCBib3VuZCB0b1xuICAgIC8vIHRoZSBjYWNoZS5cbiAgICAvLyBQcm92aWRlcidzIGdsb2JhbCBzdGF0ZSBtaWdodCBiZSBhbHJlYWR5IGluaXRpYWxpemVkLiBMZXQncyB0cnkgdG8gZ2V0IHRoZVxuICAgIC8vIGdsb2JhbCBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVyIGZpcnN0LlxuICAgIGlmICghU1dSR2xvYmFsU3RhdGUuaGFzKHByb3ZpZGVyKSkge1xuICAgICAgICB2YXIgb3B0cyA9IG1lcmdlT2JqZWN0cyhkZWZhdWx0Q29uZmlnT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZ2xvYmFsIHN0YXRlIGJvdW5kIHRvIHRoZSBwcm92aWRlciwgY3JlYXRlIGEgbmV3IG9uZSB3aXRoIHRoZVxuICAgICAgICAvLyBuZXcgbXV0YXRlIGZ1bmN0aW9uLlxuICAgICAgICB2YXIgRVZFTlRfUkVWQUxJREFUT1JTID0ge307XG4gICAgICAgIHZhciBtdXRhdGUgPSBpbnRlcm5hbE11dGF0ZS5iaW5kKFVOREVGSU5FRCwgcHJvdmlkZXIpO1xuICAgICAgICB2YXIgdW5tb3VudCA9IG5vb3A7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgaWYgaXQncyBuZXcsIG9yIHRoZSBwcm92aWRlciBoYXMgYmVlbiBleHRlbmRlZC5cbiAgICAgICAgU1dSR2xvYmFsU3RhdGUuc2V0KHByb3ZpZGVyLCBbRVZFTlRfUkVWQUxJREFUT1JTLCB7fSwge30sIHt9LCBtdXRhdGVdKTtcbiAgICAgICAgLy8gVGhpcyBpcyBhIG5ldyBwcm92aWRlciwgd2UgbmVlZCB0byBpbml0aWFsaXplIGl0IGFuZCBzZXR1cCBET00gZXZlbnRzXG4gICAgICAgIC8vIGxpc3RlbmVycyBmb3IgYGZvY3VzYCBhbmQgYHJlY29ubmVjdGAgYWN0aW9ucy5cbiAgICAgICAgaWYgKCFJU19TRVJWRVIpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gbGlzdGVuaW5nIHRvIHRoZSBuYXRpdmUgZXZlbnRzIGZvciBhdXRvIHJldmFsaWRhdGlvbnMsXG4gICAgICAgICAgICAvLyB3ZSBpbnRlbnRpb25hbGx5IHB1dCBhIGRlbGF5IChzZXRUaW1lb3V0KSBoZXJlIHRvIG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICAgICAgLy8gZmlyZWQgYWZ0ZXIgaW1tZWRpYXRlIEphdmFTY3JpcHQgZXhlY3V0aW9ucywgd2hpY2ggY2FuIHBvc3NpYmx5IGJlXG4gICAgICAgICAgICAvLyBSZWFjdCdzIHN0YXRlIHVwZGF0ZXMuXG4gICAgICAgICAgICAvLyBUaGlzIGF2b2lkcyBzb21lIHVubmVjZXNzYXJ5IHJldmFsaWRhdGlvbnMgc3VjaCBhc1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvaXNzdWVzLzE2ODAuXG4gICAgICAgICAgICB2YXIgcmVsZWFzZUZvY3VzXzEgPSBvcHRzLmluaXRGb2N1cyhzZXRUaW1lb3V0LmJpbmQoVU5ERUZJTkVELCByZXZhbGlkYXRlQWxsS2V5cy5iaW5kKFVOREVGSU5FRCwgRVZFTlRfUkVWQUxJREFUT1JTLCBGT0NVU19FVkVOVCkpKTtcbiAgICAgICAgICAgIHZhciByZWxlYXNlUmVjb25uZWN0XzEgPSBvcHRzLmluaXRSZWNvbm5lY3Qoc2V0VGltZW91dC5iaW5kKFVOREVGSU5FRCwgcmV2YWxpZGF0ZUFsbEtleXMuYmluZChVTkRFRklORUQsIEVWRU5UX1JFVkFMSURBVE9SUywgUkVDT05ORUNUX0VWRU5UKSkpO1xuICAgICAgICAgICAgdW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWxlYXNlRm9jdXNfMSAmJiByZWxlYXNlRm9jdXNfMSgpO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VSZWNvbm5lY3RfMSAmJiByZWxlYXNlUmVjb25uZWN0XzEoKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHVuLW1vdW50aW5nLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgY2FjaGUgcHJvdmlkZXIgZnJvbSB0aGUgc3RhdGVcbiAgICAgICAgICAgICAgICAvLyBzdG9yYWdlIHRvbyBiZWNhdXNlIGl0J3MgYSBzaWRlLWVmZmVjdC4gT3RoZXJ3aXNlIHdoZW4gcmUtbW91bnRpbmcgd2VcbiAgICAgICAgICAgICAgICAvLyB3aWxsIG5vdCByZS1yZWdpc3RlciB0aG9zZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICAgICAgU1dSR2xvYmFsU3RhdGUuZGVsZXRlKHByb3ZpZGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgbWlnaHQgd2FudCB0byBpbmplY3QgYW4gZXh0cmEgbGF5ZXIgb24gdG9wIG9mIGBwcm92aWRlcmAgaW4gdGhlIGZ1dHVyZSxcbiAgICAgICAgLy8gc3VjaCBhcyBrZXkgc2VyaWFsaXphdGlvbiwgYXV0byBHQywgZXRjLlxuICAgICAgICAvLyBGb3Igbm93LCBpdCdzIGp1c3QgYSBgTWFwYCBpbnRlcmZhY2Ugd2l0aG91dCBhbnkgbW9kaWZpY2F0aW9ucy5cbiAgICAgICAgcmV0dXJuIFtwcm92aWRlciwgbXV0YXRlLCB1bm1vdW50XTtcbiAgICB9XG4gICAgcmV0dXJuIFtwcm92aWRlciwgU1dSR2xvYmFsU3RhdGUuZ2V0KHByb3ZpZGVyKVs0XV07XG59O1xuXG4vLyBlcnJvciByZXRyeVxudmFyIG9uRXJyb3JSZXRyeSA9IGZ1bmN0aW9uIChfLCBfXywgY29uZmlnLCByZXZhbGlkYXRlLCBvcHRzKSB7XG4gICAgdmFyIG1heFJldHJ5Q291bnQgPSBjb25maWcuZXJyb3JSZXRyeUNvdW50O1xuICAgIHZhciBjdXJyZW50UmV0cnlDb3VudCA9IG9wdHMucmV0cnlDb3VudDtcbiAgICAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgdmFyIHRpbWVvdXQgPSB+figoTWF0aC5yYW5kb20oKSArIDAuNSkgKlxuICAgICAgICAoMSA8PCAoY3VycmVudFJldHJ5Q291bnQgPCA4ID8gY3VycmVudFJldHJ5Q291bnQgOiA4KSkpICogY29uZmlnLmVycm9yUmV0cnlJbnRlcnZhbDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG1heFJldHJ5Q291bnQpICYmIGN1cnJlbnRSZXRyeUNvdW50ID4gbWF4UmV0cnlDb3VudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQocmV2YWxpZGF0ZSwgdGltZW91dCwgb3B0cyk7XG59O1xuLy8gRGVmYXVsdCBjYWNoZSBwcm92aWRlclxudmFyIF9hID0gaW5pdENhY2hlKG5ldyBNYXAoKSksIGNhY2hlID0gX2FbMF0sIG11dGF0ZSA9IF9hWzFdO1xuLy8gRGVmYXVsdCBjb25maWdcbnZhciBkZWZhdWx0Q29uZmlnID0gbWVyZ2VPYmplY3RzKHtcbiAgICAvLyBldmVudHNcbiAgICBvbkxvYWRpbmdTbG93OiBub29wLFxuICAgIG9uU3VjY2Vzczogbm9vcCxcbiAgICBvbkVycm9yOiBub29wLFxuICAgIG9uRXJyb3JSZXRyeTogb25FcnJvclJldHJ5LFxuICAgIG9uRGlzY2FyZGVkOiBub29wLFxuICAgIC8vIHN3aXRjaGVzXG4gICAgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUsXG4gICAgcmV2YWxpZGF0ZU9uUmVjb25uZWN0OiB0cnVlLFxuICAgIHJldmFsaWRhdGVJZlN0YWxlOiB0cnVlLFxuICAgIHNob3VsZFJldHJ5T25FcnJvcjogdHJ1ZSxcbiAgICAvLyB0aW1lb3V0c1xuICAgIGVycm9yUmV0cnlJbnRlcnZhbDogc2xvd0Nvbm5lY3Rpb24gPyAxMDAwMCA6IDUwMDAsXG4gICAgZm9jdXNUaHJvdHRsZUludGVydmFsOiA1ICogMTAwMCxcbiAgICBkZWR1cGluZ0ludGVydmFsOiAyICogMTAwMCxcbiAgICBsb2FkaW5nVGltZW91dDogc2xvd0Nvbm5lY3Rpb24gPyA1MDAwIDogMzAwMCxcbiAgICAvLyBwcm92aWRlcnNcbiAgICBjb21wYXJlOiBmdW5jdGlvbiAoY3VycmVudERhdGEsIG5ld0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHN0YWJsZUhhc2goY3VycmVudERhdGEpID09IHN0YWJsZUhhc2gobmV3RGF0YSk7XG4gICAgfSxcbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIG11dGF0ZTogbXV0YXRlLFxuICAgIGZhbGxiYWNrOiB7fVxufSwgXG4vLyB1c2Ugd2ViIHByZXNldCBieSBkZWZhdWx0XG5wcmVzZXQpO1xuXG52YXIgbWVyZ2VDb25maWdzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBOZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgdG8gYXZvaWQgbXV0YXRpbmcgdGhlIG9yaWdpbmFsIGhlcmUuXG4gICAgdmFyIHYgPSBtZXJnZU9iamVjdHMoYSwgYik7XG4gICAgLy8gSWYgdHdvIGNvbmZpZ3MgYXJlIHByb3ZpZGVkLCBtZXJnZSB0aGVpciBgdXNlYCBhbmQgYGZhbGxiYWNrYCBvcHRpb25zLlxuICAgIGlmIChiKSB7XG4gICAgICAgIHZhciB1MSA9IGEudXNlLCBmMSA9IGEuZmFsbGJhY2s7XG4gICAgICAgIHZhciB1MiA9IGIudXNlLCBmMiA9IGIuZmFsbGJhY2s7XG4gICAgICAgIGlmICh1MSAmJiB1Mikge1xuICAgICAgICAgICAgdi51c2UgPSB1MS5jb25jYXQodTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmMSAmJiBmMikge1xuICAgICAgICAgICAgdi5mYWxsYmFjayA9IG1lcmdlT2JqZWN0cyhmMSwgZjIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xufTtcblxudmFyIFNXUkNvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbnZhciBTV1JDb25maWckMSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIC8vIEV4dGVuZCBwYXJlbnQgY29udGV4dCB2YWx1ZXMgYW5kIG1pZGRsZXdhcmUuXG4gICAgdmFyIGV4dGVuZGVkQ29uZmlnID0gbWVyZ2VDb25maWdzKHVzZUNvbnRleHQoU1dSQ29uZmlnQ29udGV4dCksIHZhbHVlKTtcbiAgICAvLyBTaG91bGQgbm90IHVzZSB0aGUgaW5oZXJpdGVkIHByb3ZpZGVyLlxuICAgIHZhciBwcm92aWRlciA9IHZhbHVlICYmIHZhbHVlLnByb3ZpZGVyO1xuICAgIC8vIFVzZSBhIGxhenkgaW5pdGlhbGl6ZWQgc3RhdGUgdG8gY3JlYXRlIHRoZSBjYWNoZSBvbiBmaXJzdCBhY2Nlc3MuXG4gICAgdmFyIGNhY2hlQ29udGV4dCA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyXG4gICAgICAgICAgICA/IGluaXRDYWNoZShwcm92aWRlcihleHRlbmRlZENvbmZpZy5jYWNoZSB8fCBjYWNoZSksIHZhbHVlKVxuICAgICAgICAgICAgOiBVTkRFRklORUQ7XG4gICAgfSlbMF07XG4gICAgLy8gT3ZlcnJpZGUgdGhlIGNhY2hlIGlmIGEgbmV3IHByb3ZpZGVyIGlzIGdpdmVuLlxuICAgIGlmIChjYWNoZUNvbnRleHQpIHtcbiAgICAgICAgZXh0ZW5kZWRDb25maWcuY2FjaGUgPSBjYWNoZUNvbnRleHRbMF07XG4gICAgICAgIGV4dGVuZGVkQ29uZmlnLm11dGF0ZSA9IGNhY2hlQ29udGV4dFsxXTtcbiAgICB9XG4gICAgLy8gVW5zdWJzY3JpYmUgZXZlbnRzLlxuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gKGNhY2hlQ29udGV4dCA/IGNhY2hlQ29udGV4dFsyXSA6IFVOREVGSU5FRCk7IH0sIFtdKTtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChTV1JDb25maWdDb250ZXh0LlByb3ZpZGVyLCBtZXJnZU9iamVjdHMocHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IGV4dGVuZGVkQ29uZmlnXG4gICAgfSkpO1xufTtcblxuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBzdGF0ZSB3aXRoIGRlcGVuZGVuY3ktdHJhY2tpbmcuXG4gKi9cbnZhciB1c2VTdGF0ZVdpdGhEZXBzID0gZnVuY3Rpb24gKHN0YXRlLCB1bm1vdW50ZWRSZWYpIHtcbiAgICB2YXIgcmVyZW5kZXIgPSB1c2VTdGF0ZSh7fSlbMV07XG4gICAgdmFyIHN0YXRlUmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBJZiBhIHN0YXRlIHByb3BlcnR5IChkYXRhLCBlcnJvciBvciBpc1ZhbGlkYXRpbmcpIGlzIGFjY2Vzc2VkIGJ5IHRoZSByZW5kZXJcbiAgICAvLyBmdW5jdGlvbiwgd2UgbWFyayB0aGUgcHJvcGVydHkgYXMgYSBkZXBlbmRlbmN5IHNvIGlmIGl0IGlzIHVwZGF0ZWQgYWdhaW5cbiAgICAvLyBpbiB0aGUgZnV0dXJlLCB3ZSB0cmlnZ2VyIGEgcmVyZW5kZXIuXG4gICAgLy8gVGhpcyBpcyBhbHNvIGtub3duIGFzIGRlcGVuZGVuY3ktdHJhY2tpbmcuXG4gICAgdmFyIHN0YXRlRGVwZW5kZW5jaWVzUmVmID0gdXNlUmVmKHtcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBwYXlsb2FkIFRvIGNoYW5nZSBzdGF0ZVJlZiwgcGFzcyB0aGUgdmFsdWVzIGV4cGxpY2l0bHkgdG8gc2V0U3RhdGU6XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqc1xuICAgICAqIHNldFN0YXRlKHtcbiAgICAgKiAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICAgKiAgIGRhdGE6IG5ld0RhdGEgLy8gc2V0IGRhdGEgdG8gbmV3RGF0YVxuICAgICAqICAgZXJyb3I6IHVuZGVmaW5lZCAvLyBzZXQgZXJyb3IgdG8gdW5kZWZpbmVkXG4gICAgICogfSlcbiAgICAgKlxuICAgICAqIHNldFN0YXRlKHtcbiAgICAgKiAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICAgKiAgIGRhdGE6IHVuZGVmaW5lZCAvLyBzZXQgZGF0YSB0byB1bmRlZmluZWRcbiAgICAgKiAgIGVycm9yOiBlcnIgLy8gc2V0IGVycm9yIHRvIGVyclxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICovXG4gICAgdmFyIHNldFN0YXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHNob3VsZFJlcmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICAgICAgICBmb3IgKHZhciBfIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgIHZhciBrID0gXztcbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSBoYXMgY2hhbmdlZCwgdXBkYXRlIHRoZSBzdGF0ZSBhbmQgbWFyayByZXJlbmRlciBhc1xuICAgICAgICAgICAgLy8gbmVlZGVkLlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZVtrXSAhPT0gcGF5bG9hZFtrXSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZVtrXSA9IHBheWxvYWRba107XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkIGJ5IHRoZSBjb21wb25lbnQsIGEgcmVyZW5kZXIgc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgLy8gdHJpZ2dlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZURlcGVuZGVuY2llc1JlZi5jdXJyZW50W2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJlcmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFJlcmVuZGVyICYmICF1bm1vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVyZW5kZXIoe30pO1xuICAgICAgICB9XG4gICAgfSwgXG4gICAgLy8gY29uZmlnLnN1c3BlbnNlIGlzbid0IGFsbG93ZWQgdG8gY2hhbmdlIGR1cmluZyB0aGUgbGlmZWN5Y2xlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtdKTtcbiAgICAvLyBBbHdheXMgdXBkYXRlIHRoZSBzdGF0ZSByZWZlcmVuY2UuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3N0YXRlUmVmLCBzdGF0ZURlcGVuZGVuY2llc1JlZi5jdXJyZW50LCBzZXRTdGF0ZV07XG59O1xuXG52YXIgbm9ybWFsaXplID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmdzWzFdKVxuICAgICAgICA/IFthcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdIHx8IHt9XVxuICAgICAgICA6IFthcmdzWzBdLCBudWxsLCAoYXJnc1sxXSA9PT0gbnVsbCA/IGFyZ3NbMl0gOiBhcmdzWzFdKSB8fCB7fV07XG59O1xuXG52YXIgdXNlU1dSQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZU9iamVjdHMoZGVmYXVsdENvbmZpZywgdXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KSk7XG59O1xuXG4vLyBJdCdzIHRyaWNreSB0byBwYXNzIGdlbmVyaWMgdHlwZXMgYXMgcGFyYW1ldGVycywgc28gd2UganVzdCBkaXJlY3RseSBvdmVycmlkZVxuLy8gdGhlIHR5cGVzIGhlcmUuXG52YXIgd2l0aEFyZ3MgPSBmdW5jdGlvbiAoaG9vaykge1xuICAgIHJldHVybiBmdW5jdGlvbiB1c2VTV1JBcmdzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCB0aGUgZGVmYXVsdCBhbmQgaW5oZXJpdGVkIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgIHZhciBmYWxsYmFja0NvbmZpZyA9IHVzZVNXUkNvbmZpZygpO1xuICAgICAgICAvLyBOb3JtYWxpemUgYXJndW1lbnRzLlxuICAgICAgICB2YXIgX2EgPSBub3JtYWxpemUoYXJncyksIGtleSA9IF9hWzBdLCBmbiA9IF9hWzFdLCBfY29uZmlnID0gX2FbMl07XG4gICAgICAgIC8vIE1lcmdlIGNvbmZpZ3VyYXRpb25zLlxuICAgICAgICB2YXIgY29uZmlnID0gbWVyZ2VDb25maWdzKGZhbGxiYWNrQ29uZmlnLCBfY29uZmlnKTtcbiAgICAgICAgLy8gQXBwbHkgbWlkZGxld2FyZVxuICAgICAgICB2YXIgbmV4dCA9IGhvb2s7XG4gICAgICAgIHZhciB1c2UgPSBjb25maWcudXNlO1xuICAgICAgICBpZiAodXNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdXNlLmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gdXNlW2ldKG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0KGtleSwgZm4gfHwgY29uZmlnLmZldGNoZXIsIGNvbmZpZyk7XG4gICAgfTtcbn07XG5cbi8vIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgbGlzdCBvZiBrZXllZCBjYWxsYmFjayBmdW5jdGlvbnMgYW5kIHJldHVyblxuLy8gdGhlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uLlxudmFyIHN1YnNjcmliZUNhbGxiYWNrID0gZnVuY3Rpb24gKGtleSwgY2FsbGJhY2tzLCBjYWxsYmFjaykge1xuICAgIHZhciBrZXllZFJldmFsaWRhdG9ycyA9IGNhbGxiYWNrc1trZXldIHx8IChjYWxsYmFja3Nba2V5XSA9IFtdKTtcbiAgICBrZXllZFJldmFsaWRhdG9ycy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSBrZXllZFJldmFsaWRhdG9ycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIC8vIE8oMSk6IGZhc3RlciB0aGFuIHNwbGljZVxuICAgICAgICAgICAga2V5ZWRSZXZhbGlkYXRvcnNbaW5kZXhdID0ga2V5ZWRSZXZhbGlkYXRvcnNba2V5ZWRSZXZhbGlkYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBrZXllZFJldmFsaWRhdG9ycy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgV0lUSF9ERURVUEUgPSB7IGRlZHVwZTogdHJ1ZSB9O1xudmFyIHVzZVNXUkhhbmRsZXIgPSBmdW5jdGlvbiAoX2tleSwgZmV0Y2hlciwgY29uZmlnKSB7XG4gICAgdmFyIGNhY2hlID0gY29uZmlnLmNhY2hlLCBjb21wYXJlID0gY29uZmlnLmNvbXBhcmUsIGZhbGxiYWNrRGF0YSA9IGNvbmZpZy5mYWxsYmFja0RhdGEsIHN1c3BlbnNlID0gY29uZmlnLnN1c3BlbnNlLCByZXZhbGlkYXRlT25Nb3VudCA9IGNvbmZpZy5yZXZhbGlkYXRlT25Nb3VudCwgcmVmcmVzaEludGVydmFsID0gY29uZmlnLnJlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFdoZW5IaWRkZW4gPSBjb25maWcucmVmcmVzaFdoZW5IaWRkZW4sIHJlZnJlc2hXaGVuT2ZmbGluZSA9IGNvbmZpZy5yZWZyZXNoV2hlbk9mZmxpbmU7XG4gICAgdmFyIF9hID0gU1dSR2xvYmFsU3RhdGUuZ2V0KGNhY2hlKSwgRVZFTlRfUkVWQUxJREFUT1JTID0gX2FbMF0sIFNUQVRFX1VQREFURVJTID0gX2FbMV0sIE1VVEFUSU9OID0gX2FbMl0sIEZFVENIID0gX2FbM107XG4gICAgLy8gYGtleWAgaXMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIFNXUiBgZGF0YWAgc3RhdGUsIGBrZXlJbmZvYCBob2xkcyBleHRyYVxuICAgIC8vIHN0YXRlcyBzdWNoIGFzIGBlcnJvcmAgYW5kIGBpc1ZhbGlkYXRpbmdgIGluc2lkZSxcbiAgICAvLyBhbGwgb2YgdGhlbSBhcmUgZGVyaXZlZCBmcm9tIGBfa2V5YC5cbiAgICAvLyBgZm5BcmdzYCBpcyBhbiBhcnJheSBvZiBhcmd1bWVudHMgcGFyc2VkIGZyb20gdGhlIGtleSwgd2hpY2ggd2lsbCBiZSBwYXNzZWRcbiAgICAvLyB0byB0aGUgZmV0Y2hlci5cbiAgICB2YXIgX2IgPSBzZXJpYWxpemUoX2tleSksIGtleSA9IF9iWzBdLCBmbkFyZ3MgPSBfYlsxXSwga2V5SW5mbyA9IF9iWzJdO1xuICAgIC8vIElmIGl0J3MgdGhlIGluaXRpYWwgcmVuZGVyIG9mIHRoaXMgaG9vay5cbiAgICB2YXIgaW5pdGlhbE1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIElmIHRoZSBob29rIGlzIHVubW91bnRlZCBhbHJlYWR5LiBUaGlzIHdpbGwgYmUgdXNlZCB0byBwcmV2ZW50IHNvbWUgZWZmZWN0c1xuICAgIC8vIHRvIGJlIGNhbGxlZCBhZnRlciB1bm1vdW50aW5nLlxuICAgIHZhciB1bm1vdW50ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIFJlZnMgdG8ga2VlcCB0aGUga2V5IGFuZCBjb25maWcuXG4gICAgdmFyIGtleVJlZiA9IHVzZVJlZihrZXkpO1xuICAgIHZhciBmZXRjaGVyUmVmID0gdXNlUmVmKGZldGNoZXIpO1xuICAgIHZhciBjb25maWdSZWYgPSB1c2VSZWYoY29uZmlnKTtcbiAgICB2YXIgZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnUmVmLmN1cnJlbnQ7IH07XG4gICAgdmFyIGlzQWN0aXZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkgJiYgZ2V0Q29uZmlnKCkuaXNPbmxpbmUoKTsgfTtcbiAgICB2YXIgcGF0Y2hGZXRjaEluZm8gPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICByZXR1cm4gY2FjaGUuc2V0KGtleUluZm8sIG1lcmdlT2JqZWN0cyhjYWNoZS5nZXQoa2V5SW5mbyksIGluZm8pKTtcbiAgICB9O1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBzdGF0ZSB0aGF0IFNXUiBzaG91bGQgcmV0dXJuLlxuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5nZXQoa2V5KTtcbiAgICB2YXIgZmFsbGJhY2sgPSBpc1VuZGVmaW5lZChmYWxsYmFja0RhdGEpXG4gICAgICAgID8gY29uZmlnLmZhbGxiYWNrW2tleV1cbiAgICAgICAgOiBmYWxsYmFja0RhdGE7XG4gICAgdmFyIGRhdGEgPSBpc1VuZGVmaW5lZChjYWNoZWQpID8gZmFsbGJhY2sgOiBjYWNoZWQ7XG4gICAgdmFyIGluZm8gPSBjYWNoZS5nZXQoa2V5SW5mbykgfHwge307XG4gICAgdmFyIGVycm9yID0gaW5mby5lcnJvcjtcbiAgICAvLyAtIFN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlJ3Mgc3RhbGUgZGF0YSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIC8vIC0gTm90IHN1c3BlbnNlIG1vZGUgYW5kIHRoZXJlIGlzIG5vIGZhbGxiYWNrIGRhdGEgYW5kIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZC5cbiAgICAvLyAtIGByZXZhbGlkYXRlSWZTdGFsZWAgaXMgZW5hYmxlZCBidXQgYGRhdGFgIGlzIG5vdCBkZWZpbmVkLlxuICAgIHZhciBzaG91bGRSZXZhbGlkYXRlT25Nb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSWYgYHJldmFsaWRhdGVPbk1vdW50YCBpcyBzZXQsIHdlIHRha2UgdGhlIHZhbHVlIGRpcmVjdGx5LlxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJldmFsaWRhdGVPbk1vdW50KSlcbiAgICAgICAgICAgIHJldHVybiByZXZhbGlkYXRlT25Nb3VudDtcbiAgICAgICAgLy8gSWYgaXQncyBwYXVzZWQsIHdlIHNraXAgcmV2YWxpZGF0aW9uLlxuICAgICAgICBpZiAoZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHN1c3BlbnNlXG4gICAgICAgICAgICA/IC8vIFVuZGVyIHN1c3BlbnNlIG1vZGUsIGl0IHdpbGwgYWx3YXlzIGZldGNoIG9uIHJlbmRlciBpZiB0aGVyZSBpcyBub1xuICAgICAgICAgICAgICAgIC8vIHN0YWxlIGRhdGEgc28gbm8gbmVlZCB0byByZXZhbGlkYXRlIGltbWVkaWF0ZWx5IG9uIG1vdW50IGFnYWluLlxuICAgICAgICAgICAgICAgICFpc1VuZGVmaW5lZChkYXRhKVxuICAgICAgICAgICAgOiAvLyBJZiB0aGVyZSBpcyBubyBzdGFsZSBkYXRhLCB3ZSBuZWVkIHRvIHJldmFsaWRhdGUgb24gbW91bnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgYHJldmFsaWRhdGVJZlN0YWxlYCBpcyBzZXQgdG8gdHJ1ZSwgd2Ugd2lsbCBhbHdheXMgcmV2YWxpZGF0ZS5cbiAgICAgICAgICAgICAgICBpc1VuZGVmaW5lZChkYXRhKSB8fCBjb25maWcucmV2YWxpZGF0ZUlmU3RhbGU7XG4gICAgfTtcbiAgICAvLyBSZXNvbHZlIHRoZSBjdXJyZW50IHZhbGlkYXRpbmcgc3RhdGUuXG4gICAgdmFyIHJlc29sdmVWYWxpZGF0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWtleSB8fCAhZmV0Y2hlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uaXNWYWxpZGF0aW5nKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIElmIGl0J3Mgbm90IG1vdW50ZWQgeWV0IGFuZCBpdCBzaG91bGQgcmV2YWxpZGF0ZSBvbiBtb3VudCwgcmV2YWxpZGF0ZS5cbiAgICAgICAgcmV0dXJuICFpbml0aWFsTW91bnRlZFJlZi5jdXJyZW50ICYmIHNob3VsZFJldmFsaWRhdGVPbk1vdW50KCk7XG4gICAgfTtcbiAgICB2YXIgaXNWYWxpZGF0aW5nID0gcmVzb2x2ZVZhbGlkYXRpbmcoKTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZVdpdGhEZXBzKHtcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGlzVmFsaWRhdGluZ1xuICAgIH0sIHVubW91bnRlZFJlZiksIHN0YXRlUmVmID0gX2NbMF0sIHN0YXRlRGVwZW5kZW5jaWVzID0gX2NbMV0sIHNldFN0YXRlID0gX2NbMl07XG4gICAgLy8gVGhlIHJldmFsaWRhdGlvbiBmdW5jdGlvbiBpcyBhIGNhcmVmdWxseSBjcmFmdGVkIHdyYXBwZXIgb2YgdGhlIG9yaWdpbmFsXG4gICAgLy8gYGZldGNoZXJgLCB0byBjb3JyZWN0bHkgaGFuZGxlIHRoZSBtYW55IGVkZ2UgY2FzZXMuXG4gICAgdmFyIHJldmFsaWRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocmV2YWxpZGF0ZU9wdHMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50RmV0Y2hlciwgbmV3RGF0YSwgc3RhcnRBdCwgbG9hZGluZywgb3B0cywgc2hvdWxkU3RhcnROZXdSZXF1ZXN0LCBpc0N1cnJlbnRLZXlNb3VudGVkLCBjbGVhbnVwU3RhdGUsIG5ld1N0YXRlLCBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUsIG11dGF0aW9uSW5mbywgZXJyXzE7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEZldGNoZXIgPSBmZXRjaGVyUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhY3VycmVudEZldGNoZXIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubW91bnRlZFJlZi5jdXJyZW50IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5pc1BhdXNlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBvcHRzID0gcmV2YWxpZGF0ZU9wdHMgfHwge307XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFN0YXJ0TmV3UmVxdWVzdCA9ICFGRVRDSFtrZXldIHx8ICFvcHRzLmRlZHVwZTtcbiAgICAgICAgICAgICAgICAgICAgaXNDdXJyZW50S2V5TW91bnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhdW5tb3VudGVkUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT09IGtleVJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE1vdW50ZWRSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBzdGlsbCB0aGUgc2FtZSByZXF1ZXN0IGJlZm9yZSBkZWxldGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0SW5mbyA9IEZFVENIW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEluZm8gJiYgcmVxdWVzdEluZm9bMV0gPT09IHN0YXJ0QXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgRkVUQ0hba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGUgPSB7IGlzVmFsaWRhdGluZzogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoUmVxdWVzdEFuZFVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hGZXRjaEluZm8oeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuIG9ubHkgc2V0IHN0YXRlIGlmIGl0J3Mgc2FmZSAoc3RpbGwgbW91bnRlZCB3aXRoIHRoZSBzYW1lIGtleSkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBTdGFydCBmZXRjaGluZy4gQ2hhbmdlIHRoZSBgaXNWYWxpZGF0aW5nYCBzdGF0ZSwgdXBkYXRlIHRoZSBjYWNoZS5cbiAgICAgICAgICAgICAgICAgICAgcGF0Y2hGZXRjaEluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7IGlzVmFsaWRhdGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVsbCBhbGwgb3RoZXIgaG9va3MgdG8gY2hhbmdlIHRoZSBgaXNWYWxpZGF0aW5nYCBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGNhY2hlLCBrZXksIHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgc3RhdGVSZWYuY3VycmVudC5lcnJvciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBjYWNoZSBiZWluZyByZW5kZXJlZCBjdXJyZW50bHkgKGl0IHNob3dzIGEgYmxhbmsgcGFnZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB0cmlnZ2VyIHRoZSBsb2FkaW5nIHNsb3cgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmxvYWRpbmdUaW1lb3V0ICYmICFjYWNoZS5nZXQoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGluZyAmJiBpc0N1cnJlbnRLZXlNb3VudGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uTG9hZGluZ1Nsb3coa2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgY29uZmlnLmxvYWRpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSByZXF1ZXN0IGFuZCBzYXZlIHRoZSB0aW1lc3RhbXAuXG4gICAgICAgICAgICAgICAgICAgICAgICBGRVRDSFtrZXldID0gW2N1cnJlbnRGZXRjaGVyLmFwcGx5KHZvaWQgMCwgZm5BcmdzKSwgZ2V0VGltZXN0YW1wKCldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9hID0gRkVUQ0hba2V5XSwgbmV3RGF0YSA9IF9hWzBdLCBzdGFydEF0ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5ld0RhdGFdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbmV3RGF0YSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgaXNuJ3QgaW50ZXJydXB0ZWQsIGNsZWFuIGl0IHVwIGFmdGVyIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVkdXBsaWNhdGlvbiBpbnRlcnZhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2xlYW51cFN0YXRlLCBjb25maWcuZGVkdXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncmUgb3RoZXIgb25nb2luZyByZXF1ZXN0KHMpLCBzdGFydGVkIGFmdGVyIHRoZSBjdXJyZW50IG9uZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBpZ25vcmUgdGhlIGN1cnJlbnQgb25lIHRvIGF2b2lkIHBvc3NpYmxlIHJhY2UgY29uZGl0aW9uczpcbiAgICAgICAgICAgICAgICAgICAgLy8gICByZXExLS0tLS0tLS0tLS0tLS0tLS0tPnJlczEgICAgICAgIChjdXJyZW50IG9uZSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHJlcTItLS0tLS0tLS0tLS0tLS0tPnJlczJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlcXVlc3QgdGhhdCBmaXJlZCBsYXRlciB3aWxsIGFsd2F5cyBiZSBrZXB0LlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdGltZXN0YW1wIG1heWJlIGJlIGB1bmRlZmluZWRgIG9yIGEgbnVtYmVyXG4gICAgICAgICAgICAgICAgICAgIGlmICghRkVUQ0hba2V5XSB8fCBGRVRDSFtrZXldWzFdICE9PSBzdGFydEF0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRDb25maWcoKS5vbkRpc2NhcmRlZChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgIHBhdGNoRmV0Y2hJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBVTkRFRklORURcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gVU5ERUZJTkVEO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbkluZm8gPSBNVVRBVElPTltrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKG11dGF0aW9uSW5mbykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXJ0QXQgPD0gbXV0YXRpb25JbmZvWzBdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBdCA8PSBtdXRhdGlvbkluZm9bMV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbkluZm9bMV0gPT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hSZXF1ZXN0QW5kVXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTdGFydE5ld1JlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRGlzY2FyZGVkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEZWVwIGNvbXBhcmUgd2l0aCBsYXRlc3Qgc3RhdGUgdG8gYXZvaWQgZXh0cmEgcmUtcmVuZGVycy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGxvY2FsIHN0YXRlLCBjb21wYXJlIGFuZCBhc3NpZ24uXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShzdGF0ZVJlZi5jdXJyZW50LmRhdGEsIG5ld0RhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGEgYW5kIG5ld0RhdGEgYXJlIGRlZXBseSBlcXVhbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIHNhZmUgdG8gYnJvYWRjYXN0IHRoZSBzdGFsZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gc3RhdGVSZWYuY3VycmVudC5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXQgdGhlIGVuZCBvZiB0aGlzIGZ1bmN0aW9uLCBgYnJvY2FzdFN0YXRlYCBpbnZva2VzIHRoZSBgb25TdGF0ZVVwZGF0ZWAgZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaCB0YWtlcyBjYXJlIG9mIGF2b2lkaW5nIHRoZSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZ2xvYmFsIHN0YXRlLCBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGtleSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9zd3IvcHVsbC8xMDU4XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShjYWNoZS5nZXQoa2V5KSwgbmV3RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXksIG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHN1Y2Nlc3NmdWwgY2FsbGJhY2sgaWYgaXQncyB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uU3VjY2VzcyhuZXdEYXRhLCBrZXksIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCBwYXVzZWQsIHdlIGNvbnRpbnVlIGhhbmRsaW5nIHRoZSBlcnJvci4gT3RoZXJ3aXNlIGRpc2NhcmQgaXQuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0Q29uZmlnKCkuaXNQYXVzZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGEgbmV3IGVycm9yLCBkb24ndCB1c2UgZGVlcCBjb21wYXJpc29uIGZvciBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaEZldGNoSW5mbyh7IGVycm9yOiBlcnJfMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gZXJyXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciBldmVudCBhbmQgcmV0cnkgbG9naWMuIE9ubHkgZm9yIHRoZSBhY3R1YWwgcmVxdWVzdCwgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWR1cGVkIG9uZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnROZXdSZXF1ZXN0ICYmIGlzQ3VycmVudEtleU1vdW50ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRXJyb3IoZXJyXzEsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiBjb25maWcuc2hvdWxkUmV0cnlPbkVycm9yID09PSAnYm9vbGVhbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzRnVuY3Rpb24oY29uZmlnLnNob3VsZFJldHJ5T25FcnJvcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zaG91bGRSZXRyeU9uRXJyb3IoZXJyXzEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHJldHJ5aW5nLCBkZWR1cGUgaXMgYWx3YXlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYWN0aXZlLCBzdG9wLiBJdCB3aWxsIGF1dG8gcmV2YWxpZGF0ZSB3aGVuIHJlZm9jdXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIHJlY29ubmVjdGluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbmZpZygpLm9uRXJyb3JSZXRyeShlcnJfMSwga2V5LCBjb25maWcsIHJldmFsaWRhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50OiAob3B0cy5yZXRyeUNvdW50IHx8IDApICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWR1cGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFyayBsb2FkaW5nIGFzIHN0b3BwZWQuXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IGhvb2sncyBzdGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgZmluaXNoUmVxdWVzdEFuZFVwZGF0ZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgaXMgdGhlIHNvdXJjZSBvZiB0aGUgcmVxdWVzdCwgbmVlZCB0byB0ZWxsIGFsbCBvdGhlciBob29rcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlaXIgc3RhdGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50S2V5TW91bnRlZCgpICYmIHNob3VsZFN0YXJ0TmV3UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0U3RhdGUoY2FjaGUsIGtleSwgbmV3U3RhdGUuZGF0YSwgbmV3U3RhdGUuZXJyb3IsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LCBcbiAgICAvLyBgc2V0U3RhdGVgIGlzIGltbXV0YWJsZSwgYW5kIGBldmVudHNDYWxsYmFja2AsIGBmbkFyZ3NgLCBga2V5SW5mb2AsXG4gICAgLy8gYW5kIGBrZXlWYWxpZGF0aW5nYCBhcmUgZGVwZW5kaW5nIG9uIGBrZXlgLCBzbyB3ZSBjYW4gZXhjbHVkZSB0aGVtIGZyb21cbiAgICAvLyB0aGUgZGVwcyBhcnJheS5cbiAgICAvL1xuICAgIC8vIEZJWE1FOlxuICAgIC8vIGBmbmAgYW5kIGBjb25maWdgIG1pZ2h0IGJlIGNoYW5nZWQgZHVyaW5nIHRoZSBsaWZlY3ljbGUsXG4gICAgLy8gYnV0IHRoZXkgbWlnaHQgYmUgY2hhbmdlZCBldmVyeSByZW5kZXIgbGlrZSB0aGlzLlxuICAgIC8vIGB1c2VTV1IoJ2tleScsICgpID0+IGZldGNoKCcvYXBpLycpLCB7IHN1c3BlbnNlOiB0cnVlIH0pYFxuICAgIC8vIFNvIHdlIG9taXQgdGhlIHZhbHVlcyBmcm9tIHRoZSBkZXBzIGFycmF5XG4gICAgLy8gZXZlbiB0aG91Z2ggaXQgbWlnaHQgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvcnMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFtrZXldKTtcbiAgICAvLyBTaW1pbGFyIHRvIHRoZSBnbG9iYWwgbXV0YXRlLCBidXQgYm91bmQgdG8gdGhlIGN1cnJlbnQgY2FjaGUgYW5kIGtleS5cbiAgICAvLyBgY2FjaGVgIGlzbid0IGFsbG93ZWQgdG8gY2hhbmdlIGR1cmluZyB0aGUgbGlmZWN5Y2xlLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICB2YXIgYm91bmRNdXRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAvLyBCeSB1c2luZyBgYmluZGAgd2UgZG9uJ3QgbmVlZCB0byBtb2RpZnkgdGhlIHNpemUgb2YgdGhlIHJlc3QgYXJndW1lbnRzLlxuICAgIGludGVybmFsTXV0YXRlLmJpbmQoVU5ERUZJTkVELCBjYWNoZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5UmVmLmN1cnJlbnQ7IH0pLCBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgW10pO1xuICAgIC8vIEFsd2F5cyB1cGRhdGUgZmV0Y2hlciBhbmQgY29uZmlnIHJlZnMuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgIH0pO1xuICAgIC8vIEFmdGVyIG1vdW50ZWQgb3Iga2V5IGNoYW5nZWQuXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBOb3QgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgICAgICB2YXIga2V5Q2hhbmdlZCA9IGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBzb2Z0UmV2YWxpZGF0ZSA9IHJldmFsaWRhdGUuYmluZChVTkRFRklORUQsIFdJVEhfREVEVVBFKTtcbiAgICAgICAgLy8gRXhwb3NlIHN0YXRlIHVwZGF0ZXIgdG8gZ2xvYmFsIGV2ZW50IGxpc3RlbmVycy4gU28gd2UgY2FuIHVwZGF0ZSBob29rJ3NcbiAgICAgICAgLy8gaW50ZXJuYWwgc3RhdGUgZnJvbSB0aGUgb3V0c2lkZS5cbiAgICAgICAgdmFyIG9uU3RhdGVVcGRhdGUgPSBmdW5jdGlvbiAodXBkYXRlZERhdGEsIHVwZGF0ZWRFcnJvciwgdXBkYXRlZElzVmFsaWRhdGluZykge1xuICAgICAgICAgICAgc2V0U3RhdGUobWVyZ2VPYmplY3RzKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogdXBkYXRlZEVycm9yLFxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdXBkYXRlZElzVmFsaWRhdGluZ1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBTaW5jZSBgc2V0U3RhdGVgIG9ubHkgc2hhbGxvd2x5IGNvbXBhcmVzIHN0YXRlcywgd2UgZG8gYSBkZWVwXG4gICAgICAgICAgICAvLyBjb21wYXJpc29uIGhlcmUuXG4gICAgICAgICAgICBjb21wYXJlKHN0YXRlUmVmLmN1cnJlbnQuZGF0YSwgdXBkYXRlZERhdGEpXG4gICAgICAgICAgICAgICAgPyBVTkRFRklORURcbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdXBkYXRlZERhdGFcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEV4cG9zZSByZXZhbGlkYXRvcnMgdG8gZ2xvYmFsIGV2ZW50IGxpc3RlbmVycy4gU28gd2UgY2FuIHRyaWdnZXJcbiAgICAgICAgLy8gcmV2YWxpZGF0aW9uIGZyb20gdGhlIG91dHNpZGUuXG4gICAgICAgIHZhciBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ID0gMDtcbiAgICAgICAgdmFyIG9uUmV2YWxpZGF0ZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBGT0NVU19FVkVOVCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25Gb2N1cyAmJlxuICAgICAgICAgICAgICAgICAgICBub3cgPiBuZXh0Rm9jdXNSZXZhbGlkYXRlZEF0ICYmXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEZvY3VzUmV2YWxpZGF0ZWRBdCA9IG5vdyArIGdldENvbmZpZygpLmZvY3VzVGhyb3R0bGVJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgc29mdFJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09IFJFQ09OTkVDVF9FVkVOVCkge1xuICAgICAgICAgICAgICAgIGlmIChnZXRDb25maWcoKS5yZXZhbGlkYXRlT25SZWNvbm5lY3QgJiYgaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gTVVUQVRFX0VWRU5UKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuc3ViVXBkYXRlID0gc3Vic2NyaWJlQ2FsbGJhY2soa2V5LCBTVEFURV9VUERBVEVSUywgb25TdGF0ZVVwZGF0ZSk7XG4gICAgICAgIHZhciB1bnN1YkV2ZW50cyA9IHN1YnNjcmliZUNhbGxiYWNrKGtleSwgRVZFTlRfUkVWQUxJREFUT1JTLCBvblJldmFsaWRhdGUpO1xuICAgICAgICAvLyBNYXJrIHRoZSBjb21wb25lbnQgYXMgbW91bnRlZCBhbmQgdXBkYXRlIGNvcnJlc3BvbmRpbmcgcmVmcy5cbiAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAga2V5UmVmLmN1cnJlbnQgPSBrZXk7XG4gICAgICAgIGluaXRpYWxNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAvLyBXaGVuIGBrZXlgIHVwZGF0ZXMsIHJlc2V0IHRoZSBzdGF0ZSB0byB0aGUgaW5pdGlhbCB2YWx1ZVxuICAgICAgICAvLyBhbmQgdHJpZ2dlciBhIHJlcmVuZGVyIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKGtleUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGlzVmFsaWRhdGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJpZ2dlciBhIHJldmFsaWRhdGlvbi5cbiAgICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGVPbk1vdW50KCkpIHtcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZChkYXRhKSB8fCBJU19TRVJWRVIpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXZhbGlkYXRlIGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgICAgIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxheSB0aGUgcmV2YWxpZGF0ZSBpZiB3ZSBoYXZlIGRhdGEgdG8gcmV0dXJuIHNvIHdlIHdvbid0IGJsb2NrXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgIHJBRihzb2Z0UmV2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE1hcmsgaXQgYXMgdW5tb3VudGVkLlxuICAgICAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgdW5zdWJVcGRhdGUoKTtcbiAgICAgICAgICAgIHVuc3ViRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgfSwgW2tleSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIFBvbGxpbmdcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVyO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgLy8gVXNlIHRoZSBwYXNzZWQgaW50ZXJ2YWxcbiAgICAgICAgICAgIC8vIC4uLm9yIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgdXBkYXRlZCBkYXRhIHRvIGdldCB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IGlzRnVuY3Rpb24ocmVmcmVzaEludGVydmFsKVxuICAgICAgICAgICAgICAgID8gcmVmcmVzaEludGVydmFsKGRhdGEpXG4gICAgICAgICAgICAgICAgOiByZWZyZXNoSW50ZXJ2YWw7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IHN0YXJ0IG5leHQgaW50ZXJ2YWwgaWYgYHJlZnJlc2hJbnRlcnZhbGAgaXMgbm90IDAsIGFuZDpcbiAgICAgICAgICAgIC8vIC0gYGZvcmNlYCBpcyB0cnVlLCB3aGljaCBpcyB0aGUgc3RhcnQgb2YgcG9sbGluZ1xuICAgICAgICAgICAgLy8gLSBvciBgdGltZXJgIGlzIG5vdCAwLCB3aGljaCBtZWFucyB0aGUgZWZmZWN0IHdhc24ndCBjYW5jZWxlZFxuICAgICAgICAgICAgaWYgKGludGVydmFsICYmIHRpbWVyICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChleGVjdXRlLCBpbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgT0sgdG8gZXhlY3V0ZTpcbiAgICAgICAgICAgIC8vIE9ubHkgcmV2YWxpZGF0ZSB3aGVuIHRoZSBwYWdlIGlzIHZpc2libGUsIG9ubGluZSBhbmQgbm90IGVycm9yZWQuXG4gICAgICAgICAgICBpZiAoIXN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAocmVmcmVzaFdoZW5IaWRkZW4gfHwgZ2V0Q29uZmlnKCkuaXNWaXNpYmxlKCkpICYmXG4gICAgICAgICAgICAgICAgKHJlZnJlc2hXaGVuT2ZmbGluZSB8fCBnZXRDb25maWcoKS5pc09ubGluZSgpKSkge1xuICAgICAgICAgICAgICAgIHJldmFsaWRhdGUoV0lUSF9ERURVUEUpLnRoZW4obmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTY2hlZHVsZSBuZXh0IGludGVydmFsIHRvIGNoZWNrIGFnYWluLlxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIHRpbWVyID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW3JlZnJlc2hJbnRlcnZhbCwgcmVmcmVzaFdoZW5IaWRkZW4sIHJlZnJlc2hXaGVuT2ZmbGluZSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIERpc3BsYXkgZGVidWcgaW5mbyBpbiBSZWFjdCBEZXZUb29scy5cbiAgICB1c2VEZWJ1Z1ZhbHVlKGRhdGEpO1xuICAgIC8vIEluIFN1c3BlbnNlIG1vZGUsIHdlIGNhbid0IHJldHVybiB0aGUgZW1wdHkgYGRhdGFgIHN0YXRlLlxuICAgIC8vIElmIHRoZXJlIGlzIGBlcnJvcmAsIHRoZSBgZXJyb3JgIG5lZWRzIHRvIGJlIHRocm93biB0byB0aGUgZXJyb3IgYm91bmRhcnkuXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYGVycm9yYCwgdGhlIGByZXZhbGlkYXRpb25gIHByb21pc2UgbmVlZHMgdG8gYmUgdGhyb3duIHRvXG4gICAgLy8gdGhlIHN1c3BlbnNlIGJvdW5kYXJ5LlxuICAgIGlmIChzdXNwZW5zZSAmJiBpc1VuZGVmaW5lZChkYXRhKSAmJiBrZXkpIHtcbiAgICAgICAgLy8gQWx3YXlzIHVwZGF0ZSBmZXRjaGVyIGFuZCBjb25maWcgcmVmcyBldmVuIHdpdGggdGhlIFN1c3BlbnNlIG1vZGUuXG4gICAgICAgIGZldGNoZXJSZWYuY3VycmVudCA9IGZldGNoZXI7XG4gICAgICAgIGNvbmZpZ1JlZi5jdXJyZW50ID0gY29uZmlnO1xuICAgICAgICB0aHJvdyBpc1VuZGVmaW5lZChlcnJvcikgPyByZXZhbGlkYXRlKFdJVEhfREVEVVBFKSA6IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtdXRhdGU6IGJvdW5kTXV0YXRlLFxuICAgICAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBlcnJvcigpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGlzVmFsaWRhdGluZygpIHtcbiAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmlzVmFsaWRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXNWYWxpZGF0aW5nO1xuICAgICAgICB9XG4gICAgfTtcbn07XG52YXIgU1dSQ29uZmlnID0gT0JKRUNULmRlZmluZVByb3BlcnR5KFNXUkNvbmZpZyQxLCAnZGVmYXVsdCcsIHtcbiAgICB2YWx1ZTogZGVmYXVsdENvbmZpZ1xufSk7XG52YXIgdW5zdGFibGVfc2VyaWFsaXplID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc2VyaWFsaXplKGtleSlbMF07IH07XG52YXIgdXNlU1dSID0gd2l0aEFyZ3ModXNlU1dSSGFuZGxlcik7XG5cbi8vIHVzZVNXUlxuXG5leHBvcnQgeyBTV1JDb25maWcsIHVzZVNXUiBhcyBkZWZhdWx0LCBtdXRhdGUsIHVuc3RhYmxlX3NlcmlhbGl6ZSwgdXNlU1dSQ29uZmlnIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuXHJcbmZ1bmN0aW9uIE9iamVjdFJlY2lldmUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nLCBpZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlcik7XHJcblxyXG4gIHVzZUVmZmVjdCggLy8g7ZmU66m0IOyCrOydtOymiOyXkCDrlLDrnbwg67KE6re46rCAIOuwnOyDneykkSBmaXgxXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmIChpblZpZXcgJiYgaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZykge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkOyAvLyDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOq1rO2YhOydhCDsnITtlbQg7ZSE66Gg7Yq4IOyEnOuyhOydmCDtmITsnqwg66CM642U66eB7KSR7J24IOqyjOyLnOq4gOuTpOykkSDqsIDsnqUg7JWE656YIOqyjOyLnOusvOydmCDqsozsi5zrhJjrsoTrpbwgbGFzdElk66GcXHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgdHlwZTogTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIC8vICAgbGFzdElkLCAvLyDqsozsi5zrrLwgMTDqsJzrpbwg7JqU7LKt7ZWY6rOgIOyduO2UvOuLiO2KuCDsiqTtgazroaQg6rWs7ZiE7J2EIOychO2VtCBsYXN0SWTrpbwg7KCE7Iah7ZWY7JesIGxhc3RJZCDquLDspIDsnLzroZwgMTDqsJzrpbwg7J6Y6528IOuwm+yVhOyYqOuLpC5cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpblZpZXcsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcsIG1haW5Qb3N0cywgaWRdLFxyXG4gICk7XHJcblxyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7rrLzqsbTsnYQg67mM66Ck7KSYIHwg7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgPGRpdiByZWY9e2hhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcgPyByZWYgOiB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgey8qIOyVhOyngSDqsozsi5zrrLzsnYQg7KCE67aAIOyXtOuejO2VmOyngCDslYrslZjqs6AgJiYg6rKM7Iuc66y87J2EIOyalOyyre2VmOuKlCDspJHsnbQg7JWE64uQ6rK97JqwIOyduO2UvOuLiO2KuCDsiqTtgazroaQg64+Z7J6RIDog7JWE64uQ6rK97JqwIHVuZGVmaW5lZCAqL31cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7IC8vIO2DgCDsnKDsoIDqsIQg7L+g7YKk6rCAIOqzteycoOuQmOuKlCDrrLjsoJzrpbwg67Cp7KeA7ZWY6riwIOychO2VqFxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0UmVjaWV2ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==