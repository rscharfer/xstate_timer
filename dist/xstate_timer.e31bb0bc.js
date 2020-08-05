// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/xstate/es/_virtual/_tslib.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__read = __read;
exports.__rest = __rest;
exports.__spread = __spread;
exports.__values = __values;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
},{}],"node_modules/xstate/es/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TARGETLESS_KEY = exports.STATE_DELIMITER = exports.EMPTY_ACTIVITY_MAP = exports.DEFAULT_GUARD_TYPE = void 0;
var STATE_DELIMITER = '.';
exports.STATE_DELIMITER = STATE_DELIMITER;
var EMPTY_ACTIVITY_MAP = {};
exports.EMPTY_ACTIVITY_MAP = EMPTY_ACTIVITY_MAP;
var DEFAULT_GUARD_TYPE = 'xstate.guard';
exports.DEFAULT_GUARD_TYPE = DEFAULT_GUARD_TYPE;
var TARGETLESS_KEY = '';
exports.TARGETLESS_KEY = TARGETLESS_KEY;
},{}],"node_modules/xstate/es/environment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_PRODUCTION = void 0;
var IS_PRODUCTION = "development" === 'production';
exports.IS_PRODUCTION = IS_PRODUCTION;
},{}],"node_modules/xstate/es/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluateGuard = evaluateGuard;
exports.flatten = flatten;
exports.getEventType = getEventType;
exports.isArray = isArray;
exports.isBuiltInEvent = isBuiltInEvent;
exports.isFunction = isFunction;
exports.isMachine = isMachine;
exports.isObservable = isObservable;
exports.isPromiseLike = isPromiseLike;
exports.isStateLike = isStateLike;
exports.isString = isString;
exports.keys = keys;
exports.mapContext = mapContext;
exports.mapFilterValues = mapFilterValues;
exports.mapValues = mapValues;
exports.matchesState = matchesState;
exports.nestedPath = nestedPath;
exports.normalizeTarget = normalizeTarget;
exports.partition = partition;
exports.pathToStateValue = pathToStateValue;
exports.reportUnhandledExceptionOnInvocation = reportUnhandledExceptionOnInvocation;
exports.toArray = toArray;
exports.toArrayStrict = toArrayStrict;
exports.toEventObject = toEventObject;
exports.toGuard = toGuard;
exports.toSCXMLEvent = toSCXMLEvent;
exports.toStatePath = toStatePath;
exports.toStatePaths = toStatePaths;
exports.toStateValue = toStateValue;
exports.toTransitionConfigArray = toTransitionConfigArray;
exports.updateContext = updateContext;
exports.updateHistoryStates = updateHistoryStates;
exports.updateHistoryValue = updateHistoryValue;
exports.warn = exports.uniqueId = exports.symbolObservable = exports.path = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _constants = require("./constants.js");

var _environment = require("./environment.js");

function keys(value) {
  return Object.keys(value);
}

function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = _constants.STATE_DELIMITER;
  }

  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);

  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    } // Parent more specific than child


    return false;
  }

  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }

  return keys(parentStateValue).every(function (key) {
    if (!(key in childStateValue)) {
      return false;
    }

    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}

function getEventType(event) {
  try {
    return isString(event) || typeof event === 'number' ? "" + event : event.type;
  } catch (e) {
    throw new Error('Events must be strings or objects with a string event.type property.');
  }
}

function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }

    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'" + stateId + "' is not a valid state path.");
  }
}

function isStateLike(state) {
  return typeof state === 'object' && 'value' in state && 'context' in state && 'event' in state && '_event' in state;
}

function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }

  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }

  if (typeof stateValue !== 'string') {
    return stateValue;
  }

  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}

function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }

  var value = {};
  var marker = value;

  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }

  return value;
}

function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = keys(collection);

  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }

  return result;
}

function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a;

  var result = {};

  try {
    for (var _b = (0, _tslib.__values)(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];

      if (!predicate(item)) {
        continue;
      }

      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return result;
}
/**
 * Retrieves a value at the given path.
 * @param props The deep path to the prop of the desired value
 */


var path = function (props) {
  return function (object) {
    var e_2, _a;

    var result = object;

    try {
      for (var props_1 = (0, _tslib.__values)(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return result;
  };
};
/**
 * Retrieves a value at the given path via the nested accessor prop.
 * @param props The deep path to the prop of the desired value
 */


exports.path = path;

function nestedPath(props, accessorProp) {
  return function (object) {
    var e_3, _a;

    var result = object;

    try {
      for (var props_2 = (0, _tslib.__values)(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a = props_2.return)) _a.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    return result;
  };
}

function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }

  if (isString(stateValue)) {
    return [[stateValue]];
  }

  var result = flatten(keys(stateValue).map(function (key) {
    var subStateValue = stateValue[key];

    if (typeof subStateValue !== 'string' && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }

    return toStatePaths(stateValue[key]).map(function (subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}

function flatten(array) {
  var _a;

  return (_a = []).concat.apply(_a, (0, _tslib.__spread)(array));
}

function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }

  return [value];
}

function toArray(value) {
  if (value === undefined) {
    return [];
  }

  return toArrayStrict(value);
}

function mapContext(mapper, context, _event) {
  var e_5, _a;

  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }

  var result = {};

  try {
    for (var _b = (0, _tslib.__values)(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];

      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return result;
}

function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}

function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  } // Check if shape matches the Promise/A+ specification for a "thenable".


  if (value !== null && (isFunction(value) || typeof value === 'object') && isFunction(value.then)) {
    return true;
  }

  return false;
}

function partition(items, predicate) {
  var e_6, _a;

  var _b = (0, _tslib.__read)([[], []], 2),
      truthy = _b[0],
      falsy = _b[1];

  try {
    for (var items_1 = (0, _tslib.__values)(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;

      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }

  return [truthy, falsy];
}

function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function (subHist, key) {
    if (!subHist) {
      return undefined;
    }

    var subStateValue = (isString(stateValue) ? undefined : stateValue[key]) || (subHist ? subHist.current : undefined);

    if (!subStateValue) {
      return undefined;
    }

    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}

function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}

function updateContext(context, _event, assignActions, state) {
  if (!_environment.IS_PRODUCTION) {
    warn(!!context, 'Attempting to update undefined context');
  }

  var updatedContext = context ? assignActions.reduce(function (acc, assignAction) {
    var e_7, _a;

    var assignment = assignAction.assignment;
    var meta = {
      state: state,
      action: assignAction,
      _event: _event
    };
    var partialUpdate = {};

    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = (0, _tslib.__values)(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }

    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
} // tslint:disable-next-line:no-empty


var warn = function () {};

exports.warn = warn;

if (!_environment.IS_PRODUCTION) {
  exports.warn = warn = function (condition, message) {
    var error = condition instanceof Error ? condition : undefined;

    if (!error && condition) {
      return;
    }

    if (console !== undefined) {
      var args = ["Warning: " + message];

      if (error) {
        args.push(error);
      } // tslint:disable-next-line:no-console


      console.warn.apply(console, args);
    }
  };
}

function isArray(value) {
  return Array.isArray(value);
} // tslint:disable-next-line:ban-types


function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
} // export function memoizedGetter<T, TP extends { prototype: object }>(
//   o: TP,
//   property: string,
//   getter: () => T
// ): void {
//   Object.defineProperty(o.prototype, property, {
//     get: getter,
//     enumerable: false,
//     configurable: false
//   });
// }


function toGuard(condition, guardMap) {
  if (!condition) {
    return undefined;
  }

  if (isString(condition)) {
    return {
      type: _constants.DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : undefined
    };
  }

  if (isFunction(condition)) {
    return {
      type: _constants.DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }

  return condition;
}

function isObservable(value) {
  try {
    return 'subscribe' in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}

var symbolObservable = /*#__PURE__*/function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

exports.symbolObservable = symbolObservable;

function isMachine(value) {
  try {
    return '__xstatenode' in value;
  } catch (e) {
    return false;
  }
}

var uniqueId = /*#__PURE__*/function () {
  var currentId = 0;
  return function () {
    currentId++;
    return currentId.toString(16);
  };
}();

exports.uniqueId = uniqueId;

function toEventObject(event, payload // id?: TEvent['type']
) {
  if (isString(event) || typeof event === 'number') {
    return (0, _tslib.__assign)({
      type: event
    }, payload);
  }

  return event;
}

function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && '$$type' in event && event.$$type === 'scxml') {
    return event;
  }

  var eventObject = toEventObject(event);
  return (0, _tslib.__assign)({
    name: eventObject.type,
    data: eventObject,
    $$type: 'scxml',
    type: 'external'
  }, scxmlEvent);
}

function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function (transitionLike) {
    if (typeof transitionLike === 'undefined' || typeof transitionLike === 'string' || isMachine(transitionLike)) {
      // @ts-ignore until Type instantiation is excessively deep and possibly infinite bug is fixed
      return {
        target: transitionLike,
        event: event
      };
    }

    return (0, _tslib.__assign)((0, _tslib.__assign)({}, transitionLike), {
      event: event
    });
  });
  return transitions;
}

function normalizeTarget(target) {
  if (target === undefined || target === _constants.TARGETLESS_KEY) {
    return undefined;
  }

  return toArray(target);
}

function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!_environment.IS_PRODUCTION) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '" + originalError.stack + "'" : '';

    if (originalError === currentError) {
      // tslint:disable-next-line:no-console
      console.error("Missing onError handler for invocation '" + id + "', error was '" + originalError + "'." + originalStackTrace);
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '" + currentError.stack + "'" : ''; // tslint:disable-next-line:no-console

      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '" + id + "'. " + ("Original error: '" + originalError + "'. " + originalStackTrace + " Current error is '" + currentError + "'." + stackTrace));
    }
  }
}

function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state: state,
    cond: guard,
    _event: _event
  }; // TODO: do not hardcode!

  if (guard.type === _constants.DEFAULT_GUARD_TYPE) {
    return guard.predicate(context, _event.data, guardMeta);
  }

  var condFn = guards[guard.type];

  if (!condFn) {
    throw new Error("Guard '" + guard.type + "' is not implemented on machine '" + machine.id + "'.");
  }

  return condFn(context, _event.data, guardMeta);
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./constants.js":"node_modules/xstate/es/constants.js","./environment.js":"node_modules/xstate/es/environment.js"}],"node_modules/xstate/es/mapState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapState = mapState;

var _tslib = require("./_virtual/_tslib.js");

var _utils = require("./utils.js");

function mapState(stateMap, stateId) {
  var e_1, _a;

  var foundStateId;

  try {
    for (var _b = (0, _tslib.__values)((0, _utils.keys)(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var mappedStateId = _c.value;

      if ((0, _utils.matchesState)(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
        foundStateId = mappedStateId;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return stateMap[foundStateId];
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./utils.js":"node_modules/xstate/es/utils.js"}],"node_modules/xstate/es/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialTargets = exports.ActionTypes = void 0;
var ActionTypes;
exports.ActionTypes = ActionTypes;

(function (ActionTypes) {
  ActionTypes["Start"] = "xstate.start";
  ActionTypes["Stop"] = "xstate.stop";
  ActionTypes["Raise"] = "xstate.raise";
  ActionTypes["Send"] = "xstate.send";
  ActionTypes["Cancel"] = "xstate.cancel";
  ActionTypes["NullEvent"] = "";
  ActionTypes["Assign"] = "xstate.assign";
  ActionTypes["After"] = "xstate.after";
  ActionTypes["DoneState"] = "done.state";
  ActionTypes["DoneInvoke"] = "done.invoke";
  ActionTypes["Log"] = "xstate.log";
  ActionTypes["Init"] = "xstate.init";
  ActionTypes["Invoke"] = "xstate.invoke";
  ActionTypes["ErrorExecution"] = "error.execution";
  ActionTypes["ErrorCommunication"] = "error.communication";
  ActionTypes["ErrorPlatform"] = "error.platform";
  ActionTypes["ErrorCustom"] = "xstate.error";
  ActionTypes["Update"] = "xstate.update";
  ActionTypes["Pure"] = "xstate.pure";
  ActionTypes["Choose"] = "xstate.choose";
})(ActionTypes || (exports.ActionTypes = ActionTypes = {}));

var SpecialTargets;
exports.SpecialTargets = SpecialTargets;

(function (SpecialTargets) {
  SpecialTargets["Parent"] = "#_parent";
  SpecialTargets["Internal"] = "#_internal";
})(SpecialTargets || (exports.SpecialTargets = SpecialTargets = {}));
},{}],"node_modules/xstate/es/actionTypes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.stop = exports.start = exports.send = exports.raise = exports.pure = exports.nullEvent = exports.log = exports.invoke = exports.init = exports.errorPlatform = exports.errorExecution = exports.error = exports.doneState = exports.choose = exports.cancel = exports.assign = exports.after = void 0;

var _types = require("./types.js");

// xstate-specific action types
var start = _types.ActionTypes.Start;
exports.start = start;
var stop = _types.ActionTypes.Stop;
exports.stop = stop;
var raise = _types.ActionTypes.Raise;
exports.raise = raise;
var send = _types.ActionTypes.Send;
exports.send = send;
var cancel = _types.ActionTypes.Cancel;
exports.cancel = cancel;
var nullEvent = _types.ActionTypes.NullEvent;
exports.nullEvent = nullEvent;
var assign = _types.ActionTypes.Assign;
exports.assign = assign;
var after = _types.ActionTypes.After;
exports.after = after;
var doneState = _types.ActionTypes.DoneState;
exports.doneState = doneState;
var log = _types.ActionTypes.Log;
exports.log = log;
var init = _types.ActionTypes.Init;
exports.init = init;
var invoke = _types.ActionTypes.Invoke;
exports.invoke = invoke;
var errorExecution = _types.ActionTypes.ErrorExecution;
exports.errorExecution = errorExecution;
var errorPlatform = _types.ActionTypes.ErrorPlatform;
exports.errorPlatform = errorPlatform;
var error = _types.ActionTypes.ErrorCustom;
exports.error = error;
var update = _types.ActionTypes.Update;
exports.update = update;
var choose = _types.ActionTypes.Choose;
exports.choose = choose;
var pure = _types.ActionTypes.Pure;
exports.pure = pure;
},{"./types.js":"node_modules/xstate/es/types.js"}],"node_modules/xstate/es/actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.after = after;
exports.choose = choose;
exports.done = done;
exports.doneInvoke = doneInvoke;
exports.error = error;
exports.escalate = escalate;
exports.forwardTo = forwardTo;
exports.getActionFunction = getActionFunction;
exports.log = log;
exports.pure = pure;
exports.raise = raise;
exports.resolveActions = resolveActions;
exports.resolveRaise = resolveRaise;
exports.resolveSend = resolveSend;
exports.respond = respond;
exports.send = send;
exports.sendParent = sendParent;
exports.sendUpdate = sendUpdate;
exports.start = start;
exports.stop = stop;
exports.toActionObject = toActionObject;
exports.toActivityDefinition = toActivityDefinition;
exports.toActionObjects = exports.resolveLog = exports.initEvent = exports.cancel = exports.assign = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _environment = require("./environment.js");

var _utils = require("./utils.js");

var _types = require("./types.js");

var _actionTypes = require("./actionTypes.js");

var initEvent = /*#__PURE__*/(0, _utils.toSCXMLEvent)({
  type: _actionTypes.init
});
exports.initEvent = initEvent;

function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || undefined : undefined;
}

function toActionObject(action, actionFunctionMap) {
  var actionObject;

  if ((0, _utils.isString)(action) || typeof action === 'number') {
    var exec = getActionFunction(action, actionFunctionMap);

    if ((0, _utils.isFunction)(exec)) {
      actionObject = {
        type: action,
        exec: exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: undefined
      };
    }
  } else if ((0, _utils.isFunction)(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);

    if ((0, _utils.isFunction)(exec)) {
      actionObject = (0, _tslib.__assign)((0, _tslib.__assign)({}, action), {
        exec: exec
      });
    } else if (exec) {
      var type = action.type,
          other = (0, _tslib.__rest)(action, ["type"]);
      actionObject = (0, _tslib.__assign)((0, _tslib.__assign)({
        type: type
      }, exec), other);
    } else {
      actionObject = action;
    }
  }

  Object.defineProperty(actionObject, 'toString', {
    value: function () {
      return actionObject.type;
    },
    enumerable: false,
    configurable: true
  });
  return actionObject;
}

var toActionObjects = function (action, actionFunctionMap) {
  if (!action) {
    return [];
  }

  var actions = (0, _utils.isArray)(action) ? action : [action];
  return actions.map(function (subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};

exports.toActionObjects = toActionObjects;

function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return (0, _tslib.__assign)((0, _tslib.__assign)({
    id: (0, _utils.isString)(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */


function raise(event) {
  if (!(0, _utils.isString)(event)) {
    return send(event, {
      to: _types.SpecialTargets.Internal
    });
  }

  return {
    type: _actionTypes.raise,
    event: event
  };
}

function resolveRaise(action) {
  return {
    type: _actionTypes.raise,
    _event: (0, _utils.toSCXMLEvent)(action.event)
  };
}
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */


function send(event, options) {
  return {
    to: options ? options.to : undefined,
    type: _actionTypes.send,
    event: (0, _utils.isFunction)(event) ? event : (0, _utils.toEventObject)(event),
    delay: options ? options.delay : undefined,
    id: options && options.id !== undefined ? options.id : (0, _utils.isFunction)(event) ? event.name : (0, _utils.getEventType)(event)
  };
}

function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event: _event
  }; // TODO: helper function for resolving Expr

  var resolvedEvent = (0, _utils.toSCXMLEvent)((0, _utils.isFunction)(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;

  if ((0, _utils.isString)(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = (0, _utils.isFunction)(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = (0, _utils.isFunction)(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }

  var resolvedTarget = (0, _utils.isFunction)(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return (0, _tslib.__assign)((0, _tslib.__assign)({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */


function sendParent(event, options) {
  return send(event, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
    to: _types.SpecialTargets.Parent
  }));
}
/**
 * Sends an update event to this machine's parent.
 */


function sendUpdate() {
  return sendParent(_actionTypes.update);
}
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */


function respond(event, options) {
  return send(event, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
    to: function (_, __, _a) {
      var _event = _a._event;
      return _event.origin; // TODO: handle when _event.origin is undefined
    }
  }));
}

var defaultLogExpr = function (context, event) {
  return {
    context: context,
    event: event
  };
};
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */


function log(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }

  return {
    type: _actionTypes.log,
    label: label,
    expr: expr
  };
}

var resolveLog = function (action, ctx, _event) {
  return (0, _tslib.__assign)((0, _tslib.__assign)({}, action), {
    value: (0, _utils.isString)(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event: _event
    })
  });
};
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */


exports.resolveLog = resolveLog;

var cancel = function (sendId) {
  return {
    type: _actionTypes.cancel,
    sendId: sendId
  };
};
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */


exports.cancel = cancel;

function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types.ActionTypes.Start,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Stops an activity.
 *
 * @param activity The activity to stop.
 */


function stop(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: _types.ActionTypes.Stop,
    activity: activityDef,
    exec: undefined
  };
}
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */


var assign = function (assignment) {
  return {
    type: _actionTypes.assign,
    assignment: assignment
  };
};
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */


exports.assign = assign;

function after(delayRef, id) {
  var idSuffix = id ? "#" + id : '';
  return _types.ActionTypes.After + "(" + delayRef + ")" + idSuffix;
}
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */


function done(id, data) {
  var type = _types.ActionTypes.DoneState + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */


function doneInvoke(id, data) {
  var type = _types.ActionTypes.DoneInvoke + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function error(id, data) {
  var type = _types.ActionTypes.ErrorPlatform + "." + id;
  var eventObject = {
    type: type,
    data: data
  };

  eventObject.toString = function () {
    return type;
  };

  return eventObject;
}

function pure(getActions) {
  return {
    type: _types.ActionTypes.Pure,
    get: getActions
  };
}
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */


function forwardTo(target, options) {
  return send(function (_, event) {
    return event;
  }, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
    to: target
  }));
}
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */


function escalate(errorData, options) {
  return sendParent(function (context, event, meta) {
    return {
      type: _actionTypes.error,
      data: (0, _utils.isFunction)(errorData) ? errorData(context, event, meta) : errorData
    };
  }, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
    to: _types.SpecialTargets.Parent
  }));
}

function choose(conds) {
  return {
    type: _types.ActionTypes.Choose,
    conds: conds
  };
}

function resolveActions(machine, currentState, currentContext, _event, actions) {
  var _a = (0, _tslib.__read)((0, _utils.partition)(actions, function (action) {
    return action.type === _actionTypes.assign;
  }), 2),
      assignActions = _a[0],
      otherActions = _a[1];

  var updatedContext = assignActions.length ? (0, _utils.updateContext)(currentContext, _event, assignActions, currentState) : currentContext;
  var resolvedActions = (0, _utils.flatten)(otherActions.map(function (actionObject) {
    var _a;

    switch (actionObject.type) {
      case _actionTypes.raise:
        return resolveRaise(actionObject);

      case _actionTypes.send:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays); // TODO: fix ActionTypes.Init

        if (!_environment.IS_PRODUCTION) {
          // warn after resolving as we can create better contextual message here
          (0, _utils.warn)(!(0, _utils.isString)(actionObject.delay) || typeof sendAction.delay === 'number', // tslint:disable-next-line:max-line-length
          "No delay reference for delay expression '" + actionObject.delay + "' was found on machine '" + machine.id + "'");
        }

        return sendAction;

      case _actionTypes.log:
        return resolveLog(actionObject, updatedContext, _event);

      case _actionTypes.choose:
        {
          var chooseAction = actionObject;
          var matchedActions = (_a = chooseAction.conds.find(function (condition) {
            var guard = (0, _utils.toGuard)(condition.cond, machine.options.guards);
            return !guard || (0, _utils.evaluateGuard)(machine, guard, updatedContext, _event, currentState);
          })) === null || _a === void 0 ? void 0 : _a.actions;

          if (!matchedActions) {
            return [];
          }

          var resolved = resolveActions(machine, currentState, updatedContext, _event, toActionObjects((0, _utils.toArray)(matchedActions), machine.options.actions));
          updatedContext = resolved[1];
          return resolved[0];
        }

      case _actionTypes.pure:
        {
          var matchedActions = actionObject.get(updatedContext, _event.data);

          if (!matchedActions) {
            return [];
          }

          var resolved = resolveActions(machine, currentState, updatedContext, _event, toActionObjects((0, _utils.toArray)(matchedActions), machine.options.actions));
          updatedContext = resolved[1];
          return resolved[0];
        }

      default:
        return toActionObject(actionObject, machine.options.actions);
    }
  }));
  return [resolvedActions, updatedContext];
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./environment.js":"node_modules/xstate/es/environment.js","./utils.js":"node_modules/xstate/es/utils.js","./types.js":"node_modules/xstate/es/types.js","./actionTypes.js":"node_modules/xstate/es/actionTypes.js"}],"node_modules/xstate/es/stateUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdjList = getAdjList;
exports.getAllStateNodes = getAllStateNodes;
exports.getChildren = getChildren;
exports.getConfiguration = getConfiguration;
exports.getValue = getValue;
exports.has = has;
exports.isInFinalState = isInFinalState;
exports.nextEvents = nextEvents;
exports.isLeafNode = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _utils = require("./utils.js");

var isLeafNode = function (stateNode) {
  return stateNode.type === 'atomic' || stateNode.type === 'final';
};

exports.isLeafNode = isLeafNode;

function getChildren(stateNode) {
  return (0, _utils.keys)(stateNode.states).map(function (key) {
    return stateNode.states[key];
  });
}

function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];

  if (isLeafNode(stateNode)) {
    return stateNodes;
  }

  return stateNodes.concat((0, _utils.flatten)(getChildren(stateNode).map(getAllStateNodes)));
}

function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a, e_2, _b, e_3, _c, e_4, _d;

  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);

  try {
    // add all ancestors
    for (var configuration_1 = (0, _tslib.__values)(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return)) _a.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  var adjList = getAdjList(configuration);

  try {
    // add descendants
    for (var configuration_2 = (0, _tslib.__values)(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value; // if previously active, add existing child nodes

      if (s.type === 'compound' && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function (sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function (sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === 'parallel') {
          try {
            for (var _e = (e_3 = void 0, (0, _tslib.__values)(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;

              if (child.type === 'history') {
                continue;
              }

              if (!configuration.has(child)) {
                configuration.add(child);

                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function (sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function (sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  try {
    // add all ancestors
    for (var configuration_3 = (0, _tslib.__values)(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;

      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  return configuration;
}

function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);

  if (!childStateNodes) {
    return {}; // todo: fix?
  }

  if (baseNode.type === 'compound') {
    var childStateNode = childStateNodes[0];

    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }

  var stateValue = {};
  childStateNodes.forEach(function (csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}

function getAdjList(configuration) {
  var e_5, _a;

  var adjList = new Map();

  try {
    for (var configuration_4 = (0, _tslib.__values)(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;

      if (!adjList.has(s)) {
        adjList.set(s, []);
      }

      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }

        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return)) _a.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }

  return adjList;
}

function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}

function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function (member) {
      return member === item;
    });
  }

  if (iterable instanceof Set) {
    return iterable.has(item);
  }

  return false; // TODO: fix
}

function nextEvents(configuration) {
  return (0, _utils.flatten)((0, _tslib.__spread)(new Set(configuration.map(function (sn) {
    return sn.ownEvents;
  }))));
}

function isInFinalState(configuration, stateNode) {
  if (stateNode.type === 'compound') {
    return getChildren(stateNode).some(function (s) {
      return s.type === 'final' && has(configuration, s);
    });
  }

  if (stateNode.type === 'parallel') {
    return getChildren(stateNode).every(function (sn) {
      return isInFinalState(configuration, sn);
    });
  }

  return false;
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./utils.js":"node_modules/xstate/es/utils.js"}],"node_modules/xstate/es/State.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindActionToState = bindActionToState;
exports.isState = isState;
exports.stateValuesEqual = stateValuesEqual;
exports.State = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _constants = require("./constants.js");

var _utils = require("./utils.js");

var _stateUtils = require("./stateUtils.js");

var _actions = require("./actions.js");

function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a === undefined || b === undefined) {
    return false;
  }

  if ((0, _utils.isString)(a) || (0, _utils.isString)(b)) {
    return a === b;
  }

  var aKeys = (0, _utils.keys)(a);
  var bKeys = (0, _utils.keys)(b);
  return aKeys.length === bKeys.length && aKeys.every(function (key) {
    return stateValuesEqual(a[key], b[key]);
  });
}

function isState(state) {
  if ((0, _utils.isString)(state)) {
    return false;
  }

  return 'value' in state && 'history' in state;
}

function bindActionToState(action, state) {
  var exec = action.exec;
  var boundAction = (0, _tslib.__assign)((0, _tslib.__assign)({}, action), {
    exec: exec !== undefined ? function () {
      return exec(state.context, state.event, {
        action: action,
        state: state,
        _event: state._event
      });
    } : undefined
  });
  return boundAction;
}

var State =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new State instance.
   * @param value The state value
   * @param context The extended state
   * @param historyValue The tree representing historical values of the state nodes
   * @param history The previous state
   * @param actions An array of action objects to execute as side-effects
   * @param activities A mapping of activities and whether they are started (`true`) or stopped (`false`).
   * @param meta
   * @param events Internal event queue. Should be empty with run-to-completion semantics.
   * @param configuration
   */
  function State(config) {
    var _this = this;

    this.actions = [];
    this.activities = _constants.EMPTY_ACTIVITY_MAP;
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || _constants.EMPTY_ACTIVITY_MAP;
    this.meta = config.meta || {};
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    Object.defineProperty(this, 'nextEvents', {
      get: function () {
        return (0, _stateUtils.nextEvents)(_this.configuration);
      }
    });
  }
  /**
   * Creates a new State instance for the given `stateValue` and `context`.
   * @param stateValue
   * @param context
   */


  State.from = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (stateValue.context !== context) {
        return new State({
          value: stateValue.value,
          context: context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }

      return stateValue;
    }

    var _event = _actions.initEvent;
    return new State({
      value: stateValue,
      context: context,
      _event: _event,
      _sessionid: null,
      historyValue: undefined,
      history: undefined,
      actions: [],
      activities: undefined,
      meta: undefined,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  /**
   * Creates a new State instance for the given `config`.
   * @param config The state config
   */


  State.create = function (config) {
    return new State(config);
  };
  /**
   * Creates a new `State` instance for the given `stateValue` and `context` with no actions (side-effects).
   * @param stateValue
   * @param context
   */


  State.inert = function (stateValue, context) {
    if (stateValue instanceof State) {
      if (!stateValue.actions.length) {
        return stateValue;
      }

      var _event = _actions.initEvent;
      return new State({
        value: stateValue.value,
        context: context,
        _event: _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }

    return State.from(stateValue, context);
  };
  /**
   * Returns an array of all the string leaf state node paths.
   * @param stateValue
   * @param delimiter The character(s) that separate each subpath in the string state node path.
   */


  State.prototype.toStrings = function (stateValue, delimiter) {
    var _this = this;

    if (stateValue === void 0) {
      stateValue = this.value;
    }

    if (delimiter === void 0) {
      delimiter = '.';
    }

    if ((0, _utils.isString)(stateValue)) {
      return [stateValue];
    }

    var valueKeys = (0, _utils.keys)(stateValue);
    return valueKeys.concat.apply(valueKeys, (0, _tslib.__spread)(valueKeys.map(function (key) {
      return _this.toStrings(stateValue[key], delimiter).map(function (s) {
        return key + delimiter + s;
      });
    })));
  };

  State.prototype.toJSON = function () {
    var _a = this,
        configuration = _a.configuration,
        transitions = _a.transitions,
        jsonValues = (0, _tslib.__rest)(_a, ["configuration", "transitions"]);

    return jsonValues;
  };
  /**
   * Whether the current state value is a subset of the given parent state value.
   * @param parentStateValue
   */


  State.prototype.matches = function (parentStateValue) {
    return (0, _utils.matchesState)(parentStateValue, this.value);
  };

  return State;
}();

exports.State = State;
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./constants.js":"node_modules/xstate/es/constants.js","./utils.js":"node_modules/xstate/es/utils.js","./stateUtils.js":"node_modules/xstate/es/stateUtils.js","./actions.js":"node_modules/xstate/es/actions.js"}],"node_modules/xstate/es/Actor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvocableActor = createInvocableActor;
exports.createNullActor = createNullActor;
exports.isActor = isActor;

var _utils = require("./utils.js");

function createNullActor(id) {
  return {
    id: id,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    },
    toJSON: function () {
      return {
        id: id
      };
    }
  };
}
/**
 * Creates a deferred actor that is able to be invoked given the provided
 * invocation information in its `.meta` value.
 *
 * @param invokeDefinition The meta information needed to invoke the actor.
 */


function createInvocableActor(invokeDefinition, machine) {
  var _a;

  var tempActor = createNullActor(invokeDefinition.id);
  var serviceCreator = (_a = machine.options.services) === null || _a === void 0 ? void 0 : _a[invokeDefinition.src];
  tempActor.deferred = true;

  if ((0, _utils.isMachine)(serviceCreator)) {
    tempActor.state = serviceCreator.initialState;
  }

  tempActor.meta = invokeDefinition;
  return tempActor;
}

function isActor(item) {
  try {
    return typeof item.send === 'function';
  } catch (e) {
    return false;
  }
}
},{"./utils.js":"node_modules/xstate/es/utils.js"}],"node_modules/xstate/es/StateNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StateNode = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _constants = require("./constants.js");

var _environment = require("./environment.js");

var _utils = require("./utils.js");

var _types = require("./types.js");

var _stateUtils = require("./stateUtils.js");

var _actionTypes = require("./actionTypes.js");

var _actions = require("./actions.js");

var _State = require("./State.js");

var _Actor = require("./Actor.js");

var NULL_EVENT = '';
var STATE_IDENTIFIER = '#';
var WILDCARD = '*';
var EMPTY_OBJECT = {};

var isStateId = function (str) {
  return str[0] === STATE_IDENTIFIER;
};

var createDefaultOptions = function () {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};

var validateArrayifiedTransitions = function (stateNode, event, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function (transition) {
    return !('cond' in transition) && !('in' in transition) && ((0, _utils.isString)(transition.target) || (0, _utils.isMachine)(transition.target));
  });
  var eventText = event === NULL_EVENT ? 'the transient event' : "event '" + event + "'";
  (0, _utils.warn)(!hasNonLastUnguardedTarget, "One or more transitions for " + eventText + " on state '" + stateNode.id + "' are unreachable. " + "Make sure that the default transition is the last one defined.");
};

var StateNode =
/*#__PURE__*/

/** @class */
function () {
  function StateNode(
  /**
   * The raw config used to create the machine.
   */
  config, options,
  /**
   * The initial extended state
   */
  context) {
    var _this = this;

    this.config = config;
    this.context = context;
    /**
     * The order this state node appears. Corresponds to the implicit SCXML document order.
     */

    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: undefined,
      relativeValue: new Map(),
      initialStateValue: undefined,
      initialState: undefined,
      on: undefined,
      transitions: undefined,
      candidates: {},
      delayedTransitions: undefined
    };
    this.idMap = {};
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = this.options._parent;
    this.key = this.config.key || this.options._key || this.config.id || '(machine)';
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : _constants.STATE_DELIMITER);
    this.id = this.config.id || (0, _tslib.__spread)([this.machine.key], this.path).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? 'parallel' : this.config.states && (0, _utils.keys)(this.config.states).length ? 'compound' : this.config.history ? 'history' : 'atomic');

    if (!_environment.IS_PRODUCTION) {
      (0, _utils.warn)(!('parallel' in this.config), "The \"parallel\" property is deprecated and will be removed in version 4.1. " + (this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '" + this.type + "'`") + " in the config for state node '" + this.id + "' instead.");
    }

    this.initial = this.config.initial;
    this.states = this.config.states ? (0, _utils.mapValues)(this.config.states, function (stateConfig, key) {
      var _a;

      var stateNode = new StateNode(stateConfig, {
        _parent: _this,
        _key: key
      });
      Object.assign(_this.idMap, (0, _tslib.__assign)((_a = {}, _a[stateNode.id] = stateNode, _a), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT; // Document order

    var order = 0;

    function dfs(stateNode) {
      var e_1, _a;

      stateNode.order = order++;

      try {
        for (var _b = (0, _tslib.__values)((0, _stateUtils.getChildren)(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }

    dfs(this); // History config

    this.history = this.config.history === true ? 'shallow' : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function (_a) {
      var event = _a.event;
      return event === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict; // TODO: deprecate (entry)

    this.onEntry = (0, _utils.toArray)(this.config.entry || this.config.onEntry).map(function (action) {
      return (0, _actions.toActionObject)(action);
    }); // TODO: deprecate (exit)

    this.onExit = (0, _utils.toArray)(this.config.exit || this.config.onExit).map(function (action) {
      return (0, _actions.toActionObject)(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === 'final' ? this.config.data : undefined;
    this.invoke = (0, _utils.toArray)(this.config.invoke).map(function (invokeConfig, i) {
      var _a, _b;

      if ((0, _utils.isMachine)(invokeConfig)) {
        _this.machine.options.services = (0, _tslib.__assign)((_a = {}, _a[invokeConfig.id] = invokeConfig, _a), _this.machine.options.services);
        return {
          type: _actionTypes.invoke,
          src: invokeConfig.id,
          id: invokeConfig.id
        };
      } else if (typeof invokeConfig.src !== 'string') {
        var invokeSrc = _this.id + ":invocation[" + i + "]"; // TODO: util function

        _this.machine.options.services = (0, _tslib.__assign)((_b = {}, _b[invokeSrc] = invokeConfig.src, _b), _this.machine.options.services);
        return (0, _tslib.__assign)((0, _tslib.__assign)({
          type: _actionTypes.invoke,
          id: invokeSrc
        }, invokeConfig), {
          src: invokeSrc
        });
      } else {
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, invokeConfig), {
          type: _actionTypes.invoke,
          id: invokeConfig.id || invokeConfig.src,
          src: invokeConfig.src
        });
      }
    });
    this.activities = (0, _utils.toArray)(this.config.activities).concat(this.invoke).map(function (activity) {
      return (0, _actions.toActivityDefinition)(activity);
    });
    this.transition = this.transition.bind(this);
  }

  StateNode.prototype._init = function () {
    if (this.__cache.transitions) {
      return;
    }

    (0, _stateUtils.getAllStateNodes)(this).forEach(function (stateNode) {
      return stateNode.on;
    });
  };
  /**
   * Clones this state machine with custom options and context.
   *
   * @param options Options (actions, guards, activities, services) to recursively merge with the existing options.
   * @param context Custom context (will override predefined context)
   */


  StateNode.prototype.withConfig = function (options, context) {
    if (context === void 0) {
      context = this.context;
    }

    var _a = this.options,
        actions = _a.actions,
        activities = _a.activities,
        guards = _a.guards,
        services = _a.services,
        delays = _a.delays;
    return new StateNode(this.config, {
      actions: (0, _tslib.__assign)((0, _tslib.__assign)({}, actions), options.actions),
      activities: (0, _tslib.__assign)((0, _tslib.__assign)({}, activities), options.activities),
      guards: (0, _tslib.__assign)((0, _tslib.__assign)({}, guards), options.guards),
      services: (0, _tslib.__assign)((0, _tslib.__assign)({}, services), options.services),
      delays: (0, _tslib.__assign)((0, _tslib.__assign)({}, delays), options.delays)
    }, context);
  };
  /**
   * Clones this state machine with custom context.
   *
   * @param context Custom context (will override predefined context, not recursive)
   */


  StateNode.prototype.withContext = function (context) {
    return new StateNode(this.config, this.options, context);
  };

  Object.defineProperty(StateNode.prototype, "definition", {
    /**
     * The well-structured state node definition.
     */
    get: function () {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: (0, _utils.mapValues)(this.states, function (state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke
      };
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.toJSON = function () {
    return this.definition;
  };

  Object.defineProperty(StateNode.prototype, "on", {
    /**
     * The mapping of events to transitions.
     */
    get: function () {
      if (this.__cache.on) {
        return this.__cache.on;
      }

      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function (map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "after", {
    get: function () {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "transitions", {
    /**
     * All the transitions that can be taken from this state node.
     */
    get: function () {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getCandidates = function (eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }

    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function (transition) {
      var sameEventType = transition.eventType === eventName; // null events should only match against eventless transitions

      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  /**
   * All delayed transitions from the config.
   */


  StateNode.prototype.getDelayedTransitions = function () {
    var _this = this;

    var afterConfig = this.config.after;

    if (!afterConfig) {
      return [];
    }

    var mutateEntryExit = function (delay, i) {
      var delayRef = (0, _utils.isFunction)(delay) ? _this.id + ":delay[" + i + "]" : delay;
      var eventType = (0, _actions.after)(delayRef, _this.id);

      _this.onEntry.push((0, _actions.send)(eventType, {
        delay: delay
      }));

      _this.onExit.push((0, _actions.cancel)(eventType));

      return eventType;
    };

    var delayedTransitions = (0, _utils.isArray)(afterConfig) ? afterConfig.map(function (transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, transition), {
        event: eventType
      });
    }) : (0, _utils.flatten)((0, _utils.keys)(afterConfig).map(function (delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = (0, _utils.isString)(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return (0, _utils.toArray)(resolvedTransition).map(function (transition) {
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function (delayedTransition) {
      var delay = delayedTransition.delay;
      return (0, _tslib.__assign)((0, _tslib.__assign)({}, _this.formatTransition(delayedTransition)), {
        delay: delay
      });
    });
  };
  /**
   * Returns the state nodes represented by the current state value.
   *
   * @param state The state value or State instance
   */


  StateNode.prototype.getStateNodes = function (state) {
    var _a;

    var _this = this;

    if (!state) {
      return [];
    }

    var stateValue = state instanceof _State.State ? state.value : (0, _utils.toStateValue)(state, this.delimiter);

    if ((0, _utils.isString)(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== undefined ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this.states[stateValue]];
    }

    var subStateKeys = (0, _utils.keys)(stateValue);
    var subStateNodes = subStateKeys.map(function (subStateKey) {
      return _this.getStateNode(subStateKey);
    });
    return subStateNodes.concat(subStateKeys.reduce(function (allSubStateNodes, subStateKey) {
      var subStateNode = _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);

      return allSubStateNodes.concat(subStateNode);
    }, []));
  };
  /**
   * Returns `true` if this state node explicitly handles the given event.
   *
   * @param event The event in question
   */


  StateNode.prototype.handles = function (event) {
    var eventType = (0, _utils.getEventType)(event);
    return this.events.includes(eventType);
  };
  /**
   * Resolves the given `state` to a new `State` instance relative to this machine.
   *
   * This ensures that `.events` and `.nextEvents` represent the correct values.
   *
   * @param state The state to resolve
   */


  StateNode.prototype.resolveState = function (state) {
    var configuration = Array.from((0, _stateUtils.getConfiguration)([], this.getStateNodes(state.value)));
    return new _State.State((0, _tslib.__assign)((0, _tslib.__assign)({}, state), {
      value: this.resolve(state.value),
      configuration: configuration
    }));
  };

  StateNode.prototype.transitionLeafNode = function (stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionCompoundNode = function (stateValue, state, _event) {
    var subStateKeys = (0, _utils.keys)(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);

    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);

    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }

    return next;
  };

  StateNode.prototype.transitionParallelNode = function (stateValue, state, _event) {
    var e_2, _a;

    var transitionMap = {};

    try {
      for (var _b = (0, _tslib.__values)((0, _utils.keys)(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];

        if (!subStateValue) {
          continue;
        }

        var subStateNode = this.getStateNode(subStateKey);

        var next = subStateNode._transition(subStateValue, state, _event);

        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    var stateTransitions = (0, _utils.keys)(transitionMap).map(function (key) {
      return transitionMap[key];
    });
    var enabledTransitions = (0, _utils.flatten)(stateTransitions.map(function (st) {
      return st.transitions;
    }));
    var willTransition = stateTransitions.some(function (st) {
      return st.transitions.length > 0;
    });

    if (!willTransition) {
      return this.next(state, _event);
    }

    var entryNodes = (0, _utils.flatten)(stateTransitions.map(function (t) {
      return t.entrySet;
    }));
    var configuration = (0, _utils.flatten)((0, _utils.keys)(transitionMap).map(function (key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: (0, _utils.flatten)(stateTransitions.map(function (t) {
        return t.exitSet;
      })),
      configuration: configuration,
      source: state,
      actions: (0, _utils.flatten)((0, _utils.keys)(transitionMap).map(function (key) {
        return transitionMap[key].actions;
      }))
    };
  };

  StateNode.prototype._transition = function (stateValue, state, _event) {
    // leaf node
    if ((0, _utils.isString)(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    } // hierarchical node


    if ((0, _utils.keys)(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    } // orthogonal node


    return this.transitionParallelNode(stateValue, state, _event);
  };

  StateNode.prototype.next = function (state, _event) {
    var e_3, _a;

    var _this = this;

    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;

    try {
      for (var _b = (0, _tslib.__values)(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond,
            stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? (0, _utils.isString)(stateIn) && isStateId(stateIn) ? // Check if in state by ID
        state.matches((0, _utils.toStateValue)(this.getStateNodeById(stateIn).path, this.delimiter)) : // Check if in state by relative grandparent
        (0, _utils.matchesState)((0, _utils.toStateValue)(stateIn, this.delimiter), (0, _utils.path)(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;

        try {
          guardPassed = !cond || (0, _utils.evaluateGuard)(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '" + (cond.name || cond.type) + "' in transition for event '" + eventName + "' in state node '" + this.id + "':\n" + err.message);
        }

        if (guardPassed && isInState) {
          if (candidate.target !== undefined) {
            nextStateNodes = candidate.target;
          }

          actions.push.apply(actions, (0, _tslib.__spread)(candidate.actions));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    if (!selectedTransition) {
      return undefined;
    }

    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions: actions
      };
    }

    var allNextStateNodes = (0, _utils.flatten)(nextStateNodes.map(function (stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : (0, _utils.flatten)(allNextStateNodes.map(function (n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions: actions
    };
  };

  StateNode.prototype.nodesFromChild = function (childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }

    var nodes = [];
    var marker = childStateNode;

    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }

    nodes.push(this); // inclusive

    return nodes;
  };
  /**
   * Whether the given state node "escapes" this state node. If the `stateNode` is equal to or the parent of
   * this state node, it does not escape.
   */


  StateNode.prototype.escapes = function (stateNode) {
    if (this === stateNode) {
      return false;
    }

    var parent = this.parent;

    while (parent) {
      if (parent === stateNode) {
        return false;
      }

      parent = parent.parent;
    }

    return true;
  };

  StateNode.prototype.getActions = function (transition, currentContext, _event, prevState) {
    var e_4, _a, e_5, _b;

    var prevConfig = (0, _stateUtils.getConfiguration)([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? (0, _stateUtils.getConfiguration)(prevConfig, transition.configuration) : prevConfig;

    try {
      for (var resolvedConfig_1 = (0, _tslib.__values)(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;

        if (!(0, _stateUtils.has)(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a = resolvedConfig_1.return)) _a.call(resolvedConfig_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    try {
      for (var prevConfig_1 = (0, _tslib.__values)(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;

        if (!(0, _stateUtils.has)(resolvedConfig, sn) || (0, _stateUtils.has)(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (!transition.source) {
      transition.exitSet = []; // Ensure that root StateNode (machine) is entered

      transition.entrySet.push(this);
    }

    var doneEvents = (0, _utils.flatten)(transition.entrySet.map(function (sn) {
      var events = [];

      if (sn.type !== 'final') {
        return events;
      }

      var parent = sn.parent;

      if (!parent.parent) {
        return events;
      }

      events.push((0, _actions.done)(sn.id, sn.doneData), // TODO: deprecate - final states should not emit done events for their own state.
      (0, _actions.done)(parent.id, sn.doneData ? (0, _utils.mapContext)(sn.doneData, currentContext, _event) : undefined));
      var grandparent = parent.parent;

      if (grandparent.type === 'parallel') {
        if ((0, _stateUtils.getChildren)(grandparent).every(function (parentNode) {
          return (0, _stateUtils.isInFinalState)(transition.configuration, parentNode);
        })) {
          events.push((0, _actions.done)(grandparent.id));
        }
      }

      return events;
    }));
    transition.exitSet.sort(function (a, b) {
      return b.order - a.order;
    });
    transition.entrySet.sort(function (a, b) {
      return a.order - b.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);

    var _c = (0, _tslib.__read)([(0, _utils.flatten)(Array.from(entryStates).map(function (stateNode) {
      return (0, _tslib.__spread)(stateNode.activities.map(function (activity) {
        return (0, _actions.start)(activity);
      }), stateNode.onEntry);
    })).concat(doneEvents.map(_actions.raise)), (0, _utils.flatten)(Array.from(exitStates).map(function (stateNode) {
      return (0, _tslib.__spread)(stateNode.onExit, stateNode.activities.map(function (activity) {
        return (0, _actions.stop)(activity);
      }));
    }))], 2),
        entryActions = _c[0],
        exitActions = _c[1];

    var actions = (0, _actions.toActionObjects)(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  /**
   * Determines the next state given the current `state` and sent `event`.
   *
   * @param state The current State instance or state value
   * @param event The event that was sent at the current state
   * @param context The current context (extended state) of the current state
   */


  StateNode.prototype.transition = function (state, event, context) {
    if (state === void 0) {
      state = this.initialState;
    }

    var _event = (0, _utils.toSCXMLEvent)(event);

    var currentState;

    if (state instanceof _State.State) {
      currentState = context === undefined ? state : this.resolveState(_State.State.from(state, context));
    } else {
      var resolvedStateValue = (0, _utils.isString)(state) ? this.resolve((0, _utils.pathToStateValue)(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context ? context : this.machine.context;
      currentState = this.resolveState(_State.State.from(resolvedStateValue, resolvedContext));
    }

    if (!_environment.IS_PRODUCTION && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('" + WILDCARD + "')");
    }

    if (this.strict) {
      if (!this.events.includes(_event.name) && !(0, _utils.isBuiltInEvent)(_event.name)) {
        throw new Error("Machine '" + this.id + "' does not accept event '" + _event.name + "'");
      }
    }

    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = (0, _stateUtils.getConfiguration)([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? (0, _stateUtils.getConfiguration)(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = (0, _tslib.__spread)(resolvedConfig);
    return this.resolveTransition(stateTransition, currentState, _event);
  };

  StateNode.prototype.resolveRaisedTransition = function (state, _event, // @ts-ignore
  originalEvent) {
    var _a;

    var currentActions = state.actions;
    state = this.transition(state, _event); // Save original event to state
    // TODO: this should be the raised event! Delete in V5 (breaking)

    state._event = originalEvent;
    state.event = originalEvent.data;

    (_a = state.actions).unshift.apply(_a, (0, _tslib.__spread)(currentActions));

    return state;
  };

  StateNode.prototype.resolveTransition = function (stateTransition, currentState, _event, context) {
    var e_6, _a;

    var _this = this;

    if (_event === void 0) {
      _event = _actions.initEvent;
    }

    if (context === void 0) {
      context = this.machine.context;
    }

    var configuration = stateTransition.configuration; // Transition will "apply" if:
    // - this is the initial state (there is no current state)
    // - OR there are transitions

    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? (0, _stateUtils.getValue)(this.machine, configuration) : undefined;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : undefined : undefined;
    var currentContext = currentState ? currentState.context : context;
    var actions = this.getActions(stateTransition, currentContext, _event, currentState);
    var activities = currentState ? (0, _tslib.__assign)({}, currentState.activities) : {};

    try {
      for (var actions_1 = (0, _tslib.__values)(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;

        if (action.type === _actionTypes.start) {
          activities[action.activity.id || action.activity.type] = action;
        } else if (action.type === _actionTypes.stop) {
          activities[action.activity.id || action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a = actions_1.return)) _a.call(actions_1);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    var _b = (0, _tslib.__read)((0, _actions.resolveActions)(this, currentState, currentContext, _event, actions), 2),
        resolvedActions = _b[0],
        updatedContext = _b[1];

    var _c = (0, _tslib.__read)((0, _utils.partition)(resolvedActions, function (action) {
      return action.type === _actionTypes.raise || action.type === _actionTypes.send && action.to === _types.SpecialTargets.Internal;
    }), 2),
        raisedEvents = _c[0],
        nonRaisedActions = _c[1];

    var invokeActions = resolvedActions.filter(function (action) {
      return action.type === _actionTypes.start && action.activity.type === _actionTypes.invoke;
    });
    var children = invokeActions.reduce(function (acc, action) {
      acc[action.activity.id] = (0, _Actor.createInvocableActor)(action.activity, _this.machine);
      return acc;
    }, currentState ? (0, _tslib.__assign)({}, currentState.children) : {});
    var resolvedConfiguration = resolvedStateValue ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var meta = resolvedConfiguration.reduce(function (acc, stateNode) {
      if (stateNode.meta !== undefined) {
        acc[stateNode.id] = stateNode.meta;
      }

      return acc;
    }, {});
    var isDone = (0, _stateUtils.isInFinalState)(resolvedConfiguration, this);
    var nextState = new _State.State({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event: _event,
      // Persist _sessionid between states
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? (0, _utils.updateHistoryValue)(historyValue, resolvedStateValue) : undefined : currentState ? currentState.historyValue : undefined,
      history: !resolvedStateValue || stateTransition.source ? currentState : undefined,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      meta: resolvedStateValue ? meta : currentState ? currentState.meta : undefined,
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children,
      done: isDone
    });
    var didUpdateContext = currentContext !== updatedContext;
    nextState.changed = _event.name === _actionTypes.update || didUpdateContext; // Dispose of penultimate histories to prevent memory leaks

    var history = nextState.history;

    if (history) {
      delete history.history;
    }

    if (!resolvedStateValue) {
      return nextState;
    }

    var maybeNextState = nextState;

    if (!isDone) {
      var isTransient = this._transient || configuration.some(function (stateNode) {
        return stateNode._transient;
      });

      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: _actionTypes.nullEvent
        }, _event);
      }

      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    } // Detect if state changed


    var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !(0, _State.stateValuesEqual)(maybeNextState.value, history.value) : undefined);
    maybeNextState.changed = changed; // Preserve original history after raised events

    maybeNextState.historyValue = nextState.historyValue;
    maybeNextState.history = history;
    return maybeNextState;
  };
  /**
   * Returns the child state node from its relative `stateKey`, or throws.
   */


  StateNode.prototype.getStateNode = function (stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }

    if (!this.states) {
      throw new Error("Unable to retrieve child state '" + stateKey + "' from '" + this.id + "'; no child states exist.");
    }

    var result = this.states[stateKey];

    if (!result) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return result;
  };
  /**
   * Returns the state node with the given `stateId`, or throws.
   *
   * @param stateId The state ID. The prefix "#" is removed.
   */


  StateNode.prototype.getStateNodeById = function (stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;

    if (resolvedStateId === this.id) {
      return this;
    }

    var stateNode = this.machine.idMap[resolvedStateId];

    if (!stateNode) {
      throw new Error("Child state node '#" + resolvedStateId + "' does not exist on machine '" + this.id + "'");
    }

    return stateNode;
  };
  /**
   * Returns the relative state node from the given `statePath`, or throws.
   *
   * @param statePath The string or string array relative path to the state node.
   */


  StateNode.prototype.getStateNodeByPath = function (statePath) {
    if (typeof statePath === 'string' && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {// try individual paths
        // throw e;
      }
    }

    var arrayStatePath = (0, _utils.toStatePath)(statePath, this.delimiter).slice();
    var currentStateNode = this;

    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();

      if (!key.length) {
        break;
      }

      currentStateNode = currentStateNode.getStateNode(key);
    }

    return currentStateNode;
  };
  /**
   * Resolves a partial state value with its full representation in this machine.
   *
   * @param stateValue The partial state value to resolve.
   */


  StateNode.prototype.resolve = function (stateValue) {
    var _a;

    var _this = this;

    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT; // TODO: type-specific properties
    }

    switch (this.type) {
      case 'parallel':
        return (0, _utils.mapValues)(this.initialStateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });

      case 'compound':
        if ((0, _utils.isString)(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);

          if (subStateNode.type === 'parallel' || subStateNode.type === 'compound') {
            return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
          }

          return stateValue;
        }

        if (!(0, _utils.keys)(stateValue).length) {
          return this.initialStateValue || {};
        }

        return (0, _utils.mapValues)(stateValue, function (subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });

      default:
        return stateValue || EMPTY_OBJECT;
    }
  };

  StateNode.prototype.getResolvedPath = function (stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];

      if (!stateNode) {
        throw new Error("Unable to find state node '" + stateIdentifier + "'");
      }

      return stateNode.path;
    }

    return (0, _utils.toStatePath)(stateIdentifier, this.delimiter);
  };

  Object.defineProperty(StateNode.prototype, "initialStateValue", {
    get: function () {
      var _a;

      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }

      var initialStateValue;

      if (this.type === 'parallel') {
        initialStateValue = (0, _utils.mapFilterValues)(this.states, function (state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function (stateNode) {
          return !(stateNode.type === 'history');
        });
      } else if (this.initial !== undefined) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '" + this.initial + "' not found on '" + this.key + "'");
        }

        initialStateValue = (0, _stateUtils.isLeafNode)(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
      }

      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.getInitialState = function (stateValue, context) {
    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration: configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: undefined,
      actions: []
    }, undefined, undefined, context);
  };

  Object.defineProperty(StateNode.prototype, "initialState", {
    /**
     * The initial State instance, which includes all actions to be executed from
     * entering the initial state.
     */
    get: function () {
      this._init();

      var initialStateValue = this.initialStateValue;

      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '" + this.id + "'.");
      }

      return this.getInitialState(initialStateValue);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "target", {
    /**
     * The target state value of the history state node, if it exists. This represents the
     * default state value to transition to if no history value exists yet.
     */
    get: function () {
      var target;

      if (this.type === 'history') {
        var historyConfig = this.config;

        if ((0, _utils.isString)(historyConfig.target)) {
          target = isStateId(historyConfig.target) ? (0, _utils.pathToStateValue)(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target = historyConfig.target;
        }
      }

      return target;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns the leaf nodes from a state path relative to this state node.
   *
   * @param relativeStateId The relative state path to retrieve the state nodes
   * @param history The previous state to retrieve history
   * @param resolve Whether state nodes should resolve to initial child state nodes
   */

  StateNode.prototype.getRelativeStateNodes = function (relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }

    return resolve ? relativeStateId.type === 'history' ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };

  Object.defineProperty(StateNode.prototype, "initialStateNodes", {
    get: function () {
      var _this = this;

      if ((0, _stateUtils.isLeafNode)(this)) {
        return [this];
      } // Case when state node is compound but no initial state is defined


      if (this.type === 'compound' && !this.initial) {
        if (!_environment.IS_PRODUCTION) {
          (0, _utils.warn)(false, "Compound state node '" + this.id + "' has no initial state.");
        }

        return [this];
      }

      var initialStateNodePaths = (0, _utils.toStatePaths)(this.initialStateValue);
      return (0, _utils.flatten)(initialStateNodePaths.map(function (initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Retrieves state nodes from a relative path to this state node.
   *
   * @param relativePath The relative path from this state node
   * @param historyValue
   */

  StateNode.prototype.getFromRelativePath = function (relativePath) {
    if (!relativePath.length) {
      return [this];
    }

    var _a = (0, _tslib.__read)(relativePath),
        stateKey = _a[0],
        childStatePath = _a.slice(1);

    if (!this.states) {
      throw new Error("Cannot retrieve subPath '" + stateKey + "' from node with no states");
    }

    var childStateNode = this.getStateNode(stateKey);

    if (childStateNode.type === 'history') {
      return childStateNode.resolveHistory();
    }

    if (!this.states[stateKey]) {
      throw new Error("Child state '" + stateKey + "' does not exist on '" + this.id + "'");
    }

    return this.states[stateKey].getFromRelativePath(childStatePath);
  };

  StateNode.prototype.historyValue = function (relativeStateValue) {
    if (!(0, _utils.keys)(this.states).length) {
      return undefined;
    }

    return {
      current: relativeStateValue || this.initialStateValue,
      states: (0, _utils.mapFilterValues)(this.states, function (stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }

        var subStateValue = (0, _utils.isString)(relativeStateValue) ? undefined : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function (stateNode) {
        return !stateNode.history;
      })
    };
  };
  /**
   * Resolves to the historical value(s) of the parent state node,
   * represented by state nodes.
   *
   * @param historyValue
   */


  StateNode.prototype.resolveHistory = function (historyValue) {
    var _this = this;

    if (this.type !== 'history') {
      return [this];
    }

    var parent = this.parent;

    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? (0, _utils.flatten)((0, _utils.toStatePaths)(historyTarget).map(function (relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }

    var subHistoryValue = (0, _utils.nestedPath)(parent.path, 'states')(historyValue).current;

    if ((0, _utils.isString)(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }

    return (0, _utils.flatten)((0, _utils.toStatePaths)(subHistoryValue).map(function (subStatePath) {
      return _this.history === 'deep' ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };

  Object.defineProperty(StateNode.prototype, "stateIds", {
    /**
     * All the state node IDs of this state node and its descendant state nodes.
     */
    get: function () {
      var _this = this;

      var childStateIds = (0, _utils.flatten)((0, _utils.keys)(this.states).map(function (stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "events", {
    /**
     * All the event types accepted by this state node and its descendants.
     */
    get: function () {
      var e_7, _a, e_8, _b;

      if (this.__cache.events) {
        return this.__cache.events;
      }

      var states = this.states;
      var events = new Set(this.ownEvents);

      if (states) {
        try {
          for (var _c = (0, _tslib.__values)((0, _utils.keys)(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];

            if (state.states) {
              try {
                for (var _e = (e_8 = void 0, (0, _tslib.__values)(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var event_1 = _f.value;
                  events.add("" + event_1);
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
      }

      return this.__cache.events = Array.from(events);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StateNode.prototype, "ownEvents", {
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get: function () {
      var events = new Set(this.transitions.filter(function (transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function (transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: true,
    configurable: true
  });

  StateNode.prototype.resolveTarget = function (_target) {
    var _this = this;

    if (_target === undefined) {
      // an undefined target signals that the state node should not transition from that state when receiving that event
      return undefined;
    }

    return _target.map(function (target) {
      if (!(0, _utils.isString)(target)) {
        return target;
      }

      var isInternalTarget = target[0] === _this.delimiter; // If internal target is defined on machine,
      // do not include machine key on target

      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target.slice(1));
      }

      var resolvedTarget = isInternalTarget ? _this.key + target : target;

      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);

          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '" + _this.id + "':\n" + err.message);
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };

  StateNode.prototype.formatTransition = function (transitionConfig) {
    var _this = this;

    var normalizedTarget = (0, _utils.normalizeTarget)(transitionConfig.target);
    var internal = 'internal' in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function (_target) {
      return (0, _utils.isString)(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target = this.resolveTarget(normalizedTarget);
    var transition = (0, _tslib.__assign)((0, _tslib.__assign)({}, transitionConfig), {
      actions: (0, _actions.toActionObjects)((0, _utils.toArray)(transitionConfig.actions)),
      cond: (0, _utils.toGuard)(transitionConfig.cond, guards),
      target: target,
      source: this,
      internal: internal,
      eventType: transitionConfig.event,
      toJSON: function () {
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, transition), {
          target: transition.target ? transition.target.map(function (t) {
            return "#" + t.id;
          }) : undefined,
          source: "#" + _this.id
        });
      }
    });
    return transition;
  };

  StateNode.prototype.formatTransitions = function () {
    var e_9, _a;

    var _this = this;

    var onConfig;

    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on,
          _c = WILDCARD,
          _d = _b[_c],
          wildcardConfigs = _d === void 0 ? [] : _d,
          strictTransitionConfigs_1 = (0, _tslib.__rest)(_b, [typeof _c === "symbol" ? _c : _c + ""]);
      onConfig = (0, _utils.flatten)((0, _utils.keys)(strictTransitionConfigs_1).map(function (key) {
        if (!_environment.IS_PRODUCTION && key === NULL_EVENT) {
          (0, _utils.warn)(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + ("Please check the `on` configuration for \"#" + _this.id + "\"."));
        }

        var transitionConfigArray = (0, _utils.toTransitionConfigArray)(key, strictTransitionConfigs_1[key]);

        if (!_environment.IS_PRODUCTION) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }

        return transitionConfigArray;
      }).concat((0, _utils.toTransitionConfigArray)(WILDCARD, wildcardConfigs)));
    }

    var eventlessConfig = this.config.always ? (0, _utils.toTransitionConfigArray)('', this.config.always) : [];
    var doneConfig = this.config.onDone ? (0, _utils.toTransitionConfigArray)(String((0, _actions.done)(this.id)), this.config.onDone) : [];

    if (!_environment.IS_PRODUCTION) {
      (0, _utils.warn)(!(this.config.onDone && !this.parent), "Root nodes cannot have an \".onDone\" transition. Please check the config of \"" + this.id + "\".");
    }

    var invokeConfig = (0, _utils.flatten)(this.invoke.map(function (invokeDef) {
      var settleTransitions = [];

      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, (0, _tslib.__spread)((0, _utils.toTransitionConfigArray)(String((0, _actions.doneInvoke)(invokeDef.id)), invokeDef.onDone)));
      }

      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, (0, _tslib.__spread)((0, _utils.toTransitionConfigArray)(String((0, _actions.error)(invokeDef.id)), invokeDef.onError)));
      }

      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = (0, _utils.flatten)((0, _tslib.__spread)(doneConfig, invokeConfig, onConfig, eventlessConfig).map(function (transitionConfig) {
      return (0, _utils.toArray)(transitionConfig).map(function (transition) {
        return _this.formatTransition(transition);
      });
    }));

    try {
      for (var delayedTransitions_1 = (0, _tslib.__values)(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return)) _a.call(delayedTransitions_1);
      } finally {
        if (e_9) throw e_9.error;
      }
    }

    return formattedTransitions;
  };

  return StateNode;
}();

exports.StateNode = StateNode;
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./constants.js":"node_modules/xstate/es/constants.js","./environment.js":"node_modules/xstate/es/environment.js","./utils.js":"node_modules/xstate/es/utils.js","./types.js":"node_modules/xstate/es/types.js","./stateUtils.js":"node_modules/xstate/es/stateUtils.js","./actionTypes.js":"node_modules/xstate/es/actionTypes.js","./actions.js":"node_modules/xstate/es/actions.js","./State.js":"node_modules/xstate/es/State.js","./Actor.js":"node_modules/xstate/es/Actor.js"}],"node_modules/xstate/es/Machine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Machine = Machine;
exports.createMachine = createMachine;

var _StateNode = require("./StateNode.js");

function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }

  var resolvedInitialContext = typeof initialContext === 'function' ? initialContext() : initialContext;
  return new _StateNode.StateNode(config, options, resolvedInitialContext);
}

function createMachine(config, options) {
  var resolvedInitialContext = typeof config.context === 'function' ? config.context() : config.context;
  return new _StateNode.StateNode(config, options, resolvedInitialContext);
}
},{"./StateNode.js":"node_modules/xstate/es/StateNode.js"}],"node_modules/xstate/es/scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var _tslib = require("./_virtual/_tslib.js");

var defaultOptions = {
  deferEvents: false
};

var Scheduler =
/*#__PURE__*/

/** @class */
function () {
  function Scheduler(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = (0, _tslib.__assign)((0, _tslib.__assign)({}, defaultOptions), options);
  }

  Scheduler.prototype.initialize = function (callback) {
    this.initialized = true;

    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }

      this.process(callback);
    }

    this.flushEvents();
  };

  Scheduler.prototype.schedule = function (task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }

    if (this.queue.length !== 0) {
      throw new Error('Event queue should be empty when it is not processing events');
    }

    this.process(task);
    this.flushEvents();
  };

  Scheduler.prototype.clear = function () {
    this.queue = [];
  };

  Scheduler.prototype.flushEvents = function () {
    var nextCallback = this.queue.shift();

    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };

  Scheduler.prototype.process = function (callback) {
    this.processingEvent = true;

    try {
      callback();
    } catch (e) {
      // there is no use to keep the future events
      // as the situation is not anymore the same
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js"}],"node_modules/xstate/es/registry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = void 0;
var children = /*#__PURE__*/new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function () {
    return "x:" + sessionIdIndex++;
  },
  register: function (id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function (id) {
    return children.get(id);
  },
  free: function (id) {
    children.delete(id);
  }
};
exports.registry = registry;
},{}],"node_modules/xstate/es/devTools.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerService = registerService;

var _environment = require("./environment.js");

function getDevTools() {
  var w = window;

  if (!!w.__xstate__) {
    return w.__xstate__;
  }

  return undefined;
}

function registerService(service) {
  if (_environment.IS_PRODUCTION || typeof window === 'undefined') {
    return;
  }

  var devTools = getDevTools();

  if (devTools) {
    devTools.register(service);
  }
}
},{"./environment.js":"node_modules/xstate/es/environment.js"}],"node_modules/xstate/es/interpreter.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpret = interpret;
exports.spawn = spawn;
exports.Interpreter = void 0;

var _tslib = require("./_virtual/_tslib.js");

var _environment = require("./environment.js");

var _utils = require("./utils.js");

var _types = require("./types.js");

var _stateUtils = require("./stateUtils.js");

var _actionTypes = require("./actionTypes.js");

var _actions = require("./actions.js");

var _State = require("./State.js");

var _Actor = require("./Actor.js");

var _scheduler = require("./scheduler.js");

var _registry = require("./registry.js");

var _devTools = require("./devTools.js");

var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
/**
 * Maintains a stack of the current service in scope.
 * This is used to provide the correct service to spawn().
 *
 * @private
 */

var withServiceScope = /*#__PURE__*/function () {
  var serviceStack = [];
  return function (service, fn) {
    service && serviceStack.push(service);
    var result = fn(service || serviceStack[serviceStack.length - 1]);
    service && serviceStack.pop();
    return result;
  };
}();

var InterpreterStatus;

(function (InterpreterStatus) {
  InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
  InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));

var Interpreter =
/*#__PURE__*/

/** @class */
function () {
  /**
   * Creates a new Interpreter instance (i.e., service) for the given machine with the provided options, if any.
   *
   * @param machine The machine to be interpreted
   * @param options Interpreter options
   */
  function Interpreter(machine, options) {
    var _this = this;

    if (options === void 0) {
      options = Interpreter.defaultOptions;
    }

    this.machine = machine;
    this.scheduler = new _scheduler.Scheduler();
    this.delayedEventsMap = {};
    this.listeners = new Set();
    this.contextListeners = new Set();
    this.stopListeners = new Set();
    this.doneListeners = new Set();
    this.eventListeners = new Set();
    this.sendListeners = new Set();
    /**
     * Whether the service is started.
     */

    this.initialized = false;
    this._status = InterpreterStatus.NotStarted;
    this.children = new Map();
    this.forwardTo = new Set();
    /**
     * Alias for Interpreter.prototype.start
     */

    this.init = this.start;
    /**
     * Sends an event to the running interpreter to trigger a transition.
     *
     * An array of events (batched) can be sent as well, which will send all
     * batched events to the running interpreter. The listeners will be
     * notified only **once** when all events are processed.
     *
     * @param event The event(s) to send
     */

    this.send = function (event, payload) {
      if ((0, _utils.isArray)(event)) {
        _this.batch(event);

        return _this.state;
      }

      var _event = (0, _utils.toSCXMLEvent)((0, _utils.toEventObject)(event, payload));

      if (_this._status === InterpreterStatus.Stopped) {
        // do nothing
        if (!_environment.IS_PRODUCTION) {
          (0, _utils.warn)(false, "Event \"" + _event.name + "\" was sent to stopped service \"" + _this.machine.id + "\". This service has already reached its final state, and will not transition.\nEvent: " + JSON.stringify(_event.data));
        }

        return _this.state;
      }

      if (_this._status === InterpreterStatus.NotStarted && _this.options.deferEvents) {
        // tslint:disable-next-line:no-console
        if (!_environment.IS_PRODUCTION) {
          (0, _utils.warn)(false, "Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\" and is deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(_event.data));
        }
      } else if (_this._status !== InterpreterStatus.Running) {
        throw new Error("Event \"" + _event.name + "\" was sent to uninitialized service \"" + _this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: " + JSON.stringify(_event.data));
      }

      _this.scheduler.schedule(function () {
        // Forward copy of event to child actors
        _this.forward(_event);

        var nextState = _this.nextState(_event);

        _this.update(nextState, _event);
      });

      return _this._state; // TODO: deprecate (should return void)
      // tslint:disable-next-line:semicolon
    };

    this.sendTo = function (event, to) {
      var isParent = _this.parent && (to === _types.SpecialTargets.Parent || _this.parent.id === to);
      var target = isParent ? _this.parent : (0, _Actor.isActor)(to) ? to : _this.children.get(to) || _registry.registry.get(to);

      if (!target) {
        if (!isParent) {
          throw new Error("Unable to send event to child '" + to + "' from service '" + _this.id + "'.");
        } // tslint:disable-next-line:no-console


        if (!_environment.IS_PRODUCTION) {
          (0, _utils.warn)(false, "Service '" + _this.id + "' has no parent: unable to send event " + event.type);
        }

        return;
      }

      if ('machine' in target) {
        // Send SCXML events to machines
        target.send((0, _tslib.__assign)((0, _tslib.__assign)({}, event), {
          name: event.name === _actionTypes.error ? "" + (0, _actions.error)(_this.id) : event.name,
          origin: _this.sessionId
        }));
      } else {
        // Send normal events to other targets
        target.send(event.data);
      }
    };

    var resolvedOptions = (0, _tslib.__assign)((0, _tslib.__assign)({}, Interpreter.defaultOptions), options);
    var clock = resolvedOptions.clock,
        logger = resolvedOptions.logger,
        parent = resolvedOptions.parent,
        id = resolvedOptions.id;
    var resolvedId = id !== undefined ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new _scheduler.Scheduler({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = _registry.registry.bookId();
  }

  Object.defineProperty(Interpreter.prototype, "initialState", {
    get: function () {
      var _this = this;

      if (this._initialState) {
        return this._initialState;
      }

      return withServiceScope(this, function () {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Interpreter.prototype, "state", {
    get: function () {
      if (!_environment.IS_PRODUCTION) {
        (0, _utils.warn)(this._status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '" + this.id + "'. Make sure the service is started first.");
      }

      return this._state;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Executes the actions of the given state, with that state's `context` and `event`.
   *
   * @param state The state whose actions will be executed
   * @param actionsConfig The action implementations to use
   */

  Interpreter.prototype.execute = function (state, actionsConfig) {
    var e_1, _a;

    try {
      for (var _b = (0, _tslib.__values)(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Interpreter.prototype.update = function (state, _event) {
    var e_2, _a, e_3, _b, e_4, _c, e_5, _d;

    var _this = this; // Attach session ID to state


    state._sessionid = this.sessionId; // Update state

    this._state = state; // Execute actions

    if (this.options.execute) {
      this.execute(this.state);
    } // Dev tools


    if (this.devTools) {
      this.devTools.send(_event.data, state);
    } // Execute listeners


    if (state.event) {
      try {
        for (var _e = (0, _tslib.__values)(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    try {
      for (var _g = (0, _tslib.__values)(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    try {
      for (var _j = (0, _tslib.__values)(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : undefined);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    var isDone = (0, _stateUtils.isInFinalState)(state.configuration || [], this.machine);

    if (this.state.configuration && isDone) {
      // get final child state node
      var finalChildStateNode = state.configuration.find(function (sn) {
        return sn.type === 'final' && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? (0, _utils.mapContext)(finalChildStateNode.doneData, state.context, _event) : undefined;

      try {
        for (var _l = (0, _tslib.__values)(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener((0, _actions.doneInvoke)(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
        } finally {
          if (e_5) throw e_5.error;
        }
      }

      this.stop();
    }
  };
  /*
   * Adds a listener that is notified whenever a state transition happens. The listener is called with
   * the next state and the event object that caused the state transition.
   *
   * @param listener The state listener
   */


  Interpreter.prototype.onTransition = function (listener) {
    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }

    return this;
  };

  Interpreter.prototype.subscribe = function (nextListenerOrObserver, // @ts-ignore
  errorListener, completeListener) {
    var _this = this;

    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function () {
          return void 0;
        }
      };
    }

    var listener;
    var resolvedCompleteListener = completeListener;

    if (typeof nextListenerOrObserver === 'function') {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }

    this.listeners.add(listener); // Send current state to listener

    if (this._status === InterpreterStatus.Running) {
      listener(this.state);
    }

    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }

    return {
      unsubscribe: function () {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  /**
   * Adds an event listener that is notified whenever an event is sent to the running interpreter.
   * @param listener The event listener
   */


  Interpreter.prototype.onEvent = function (listener) {
    this.eventListeners.add(listener);
    return this;
  };
  /**
   * Adds an event listener that is notified whenever a `send` event occurs.
   * @param listener The event listener
   */


  Interpreter.prototype.onSend = function (listener) {
    this.sendListeners.add(listener);
    return this;
  };
  /**
   * Adds a context listener that is notified whenever the state context changes.
   * @param listener The context listener
   */


  Interpreter.prototype.onChange = function (listener) {
    this.contextListeners.add(listener);
    return this;
  };
  /**
   * Adds a listener that is notified when the machine is stopped.
   * @param listener The listener
   */


  Interpreter.prototype.onStop = function (listener) {
    this.stopListeners.add(listener);
    return this;
  };
  /**
   * Adds a state listener that is notified when the statechart has reached its final state.
   * @param listener The state listener
   */


  Interpreter.prototype.onDone = function (listener) {
    this.doneListeners.add(listener);
    return this;
  };
  /**
   * Removes a listener.
   * @param listener The listener to remove
   */


  Interpreter.prototype.off = function (listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  /**
   * Starts the interpreter from the given state, or the initial state.
   * @param initialState The state to start the statechart from
   */


  Interpreter.prototype.start = function (initialState) {
    var _this = this;

    if (this._status === InterpreterStatus.Running) {
      // Do not restart the service if it is already started
      return this;
    }

    _registry.registry.register(this.sessionId, this);

    this.initialized = true;
    this._status = InterpreterStatus.Running;
    var resolvedState = initialState === undefined ? this.initialState : withServiceScope(this, function () {
      return (0, _State.isState)(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(_State.State.from(initialState, _this.machine.context));
    });

    if (this.options.devTools) {
      this.attachDev();
    }

    this.scheduler.initialize(function () {
      _this.update(resolvedState, _actions.initEvent);
    });
    return this;
  };
  /**
   * Stops the interpreter and unsubscribe all listeners.
   *
   * This will also notify the `onStop` listeners.
   */


  Interpreter.prototype.stop = function () {
    var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;

    try {
      for (var _f = (0, _tslib.__values)(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    try {
      for (var _h = (0, _tslib.__values)(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value; // call listener, then remove

        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
      } finally {
        if (e_7) throw e_7.error;
      }
    }

    try {
      for (var _k = (0, _tslib.__values)(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
      } finally {
        if (e_8) throw e_8.error;
      }
    }

    try {
      for (var _m = (0, _tslib.__values)(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
      } finally {
        if (e_9) throw e_9.error;
      }
    } // Stop all children


    this.children.forEach(function (child) {
      if ((0, _utils.isFunction)(child.stop)) {
        child.stop();
      }
    });

    try {
      // Cancel all delayed events
      for (var _p = (0, _tslib.__values)((0, _utils.keys)(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
      } finally {
        if (e_10) throw e_10.error;
      }
    }

    this.scheduler.clear();
    this.initialized = false;
    this._status = InterpreterStatus.Stopped;

    _registry.registry.free(this.sessionId);

    return this;
  };

  Interpreter.prototype.batch = function (events) {
    var _this = this;

    if (this._status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      // tslint:disable-next-line:no-console
      if (!_environment.IS_PRODUCTION) {
        (0, _utils.warn)(false, events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\" and are deferred. Make sure .start() is called for this service.\nEvent: " + JSON.stringify(event));
      }
    } else if (this._status !== InterpreterStatus.Running) {
      throw new Error( // tslint:disable-next-line:max-line-length
      events.length + " event(s) were sent to uninitialized service \"" + this.machine.id + "\". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.");
    }

    this.scheduler.schedule(function () {
      var e_11, _a;

      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];

      var _loop_1 = function (event_1) {
        var _event = (0, _utils.toSCXMLEvent)(event_1);

        _this.forward(_event);

        nextState = withServiceScope(_this, function () {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, (0, _tslib.__spread)(nextState.actions.map(function (a) {
          return (0, _State.bindActionToState)(a, nextState);
        })));
        batchChanged = batchChanged || !!nextState.changed;
      };

      try {
        for (var events_1 = (0, _tslib.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;

          _loop_1(event_1);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        } finally {
          if (e_11) throw e_11.error;
        }
      }

      nextState.changed = batchChanged;
      nextState.actions = batchedActions;

      _this.update(nextState, (0, _utils.toSCXMLEvent)(events[events.length - 1]));
    });
  };
  /**
   * Returns a send function bound to this interpreter instance.
   *
   * @param event The event to be sent by the sender.
   */


  Interpreter.prototype.sender = function (event) {
    return this.send.bind(this, event);
  };
  /**
   * Returns the next state given the interpreter's current state and the event.
   *
   * This is a pure method that does _not_ update the interpreter's state.
   *
   * @param event The event to determine the next state
   */


  Interpreter.prototype.nextState = function (event) {
    var _this = this;

    var _event = (0, _utils.toSCXMLEvent)(event);

    if (_event.name.indexOf(_actionTypes.errorPlatform) === 0 && !this.state.nextEvents.some(function (nextEvent) {
      return nextEvent.indexOf(_actionTypes.errorPlatform) === 0;
    })) {
      throw _event.data.data;
    }

    var nextState = withServiceScope(this, function () {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };

  Interpreter.prototype.forward = function (event) {
    var e_12, _a;

    try {
      for (var _b = (0, _tslib.__values)(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);

        if (!child) {
          throw new Error("Unable to forward event '" + event + "' from interpreter '" + this.id + "' to nonexistant child '" + id + "'.");
        }

        child.send(event);
      }
    } catch (e_12_1) {
      e_12 = {
        error: e_12_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_12) throw e_12.error;
      }
    }
  };

  Interpreter.prototype.defer = function (sendAction) {
    var _this = this;

    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function () {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };

  Interpreter.prototype.cancel = function (sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };

  Interpreter.prototype.exec = function (action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }

    var context = state.context,
        _event = state._event;
    var actionOrExec = action.exec || (0, _actions.getActionFunction)(action.type, actionFunctionMap);
    var exec = (0, _utils.isFunction)(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;

    if (exec) {
      try {
        return exec(context, _event.data, {
          action: action,
          state: this.state,
          _event: _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: 'xstate.error',
            data: err
          });
        }

        throw err;
      }
    }

    switch (action.type) {
      case _actionTypes.send:
        var sendAction = action;

        if (typeof sendAction.delay === 'number') {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }

        break;

      case _actionTypes.cancel:
        this.cancel(action.sendId);
        break;

      case _actionTypes.start:
        {
          var activity = action.activity; // If the activity will be stopped right after it's started
          // (such as in transient states)
          // don't bother starting the activity.

          if (!this.state.activities[activity.id || activity.type]) {
            break;
          } // Invoked services


          if (activity.type === _types.ActionTypes.Invoke) {
            var serviceCreator = this.machine.options.services ? this.machine.options.services[activity.src] : undefined;
            var id = activity.id,
                data = activity.data;

            if (!_environment.IS_PRODUCTION) {
              (0, _utils.warn)(!('forward' in activity), // tslint:disable-next-line:max-line-length
              "`forward` property is deprecated (found in invocation of '" + activity.src + "' in in machine '" + this.machine.id + "'). " + "Please use `autoForward` instead.");
            }

            var autoForward = 'autoForward' in activity ? activity.autoForward : !!activity.forward;

            if (!serviceCreator) {
              // tslint:disable-next-line:no-console
              if (!_environment.IS_PRODUCTION) {
                (0, _utils.warn)(false, "No service found for invocation '" + activity.src + "' in machine '" + this.machine.id + "'.");
              }

              return;
            }

            var resolvedData = data ? (0, _utils.mapContext)(data, context, _event) : undefined;
            var source = (0, _utils.isFunction)(serviceCreator) ? serviceCreator(context, _event.data, {
              data: resolvedData
            }) : serviceCreator;

            if ((0, _utils.isPromiseLike)(source)) {
              this.state.children[id] = this.spawnPromise(Promise.resolve(source), id);
            } else if ((0, _utils.isFunction)(source)) {
              this.state.children[id] = this.spawnCallback(source, id);
            } else if ((0, _utils.isObservable)(source)) {
              this.state.children[id] = this.spawnObservable(source, id);
            } else if ((0, _utils.isMachine)(source)) {
              // TODO: try/catch here
              this.state.children[id] = this.spawnMachine(resolvedData ? source.withContext(resolvedData) : source, {
                id: id,
                autoForward: autoForward
              });
            }
          } else {
            this.spawnActivity(activity);
          }

          break;
        }

      case _actionTypes.stop:
        {
          this.stopChild(action.activity.id);
          break;
        }

      case _actionTypes.log:
        var label = action.label,
            value = action.value;

        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }

        break;

      default:
        if (!_environment.IS_PRODUCTION) {
          (0, _utils.warn)(false, "No implementation found for action type '" + action.type + "'");
        }

        break;
    }

    return undefined;
  };

  Interpreter.prototype.removeChild = function (childId) {
    this.children.delete(childId);
    this.forwardTo.delete(childId);
    delete this.state.children[childId];
  };

  Interpreter.prototype.stopChild = function (childId) {
    var child = this.children.get(childId);

    if (!child) {
      return;
    }

    this.removeChild(childId);

    if ((0, _utils.isFunction)(child.stop)) {
      child.stop();
    }
  };

  Interpreter.prototype.spawn = function (entity, name, options) {
    if ((0, _utils.isPromiseLike)(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if ((0, _utils.isFunction)(entity)) {
      return this.spawnCallback(entity, name);
    } else if ((0, _Actor.isActor)(entity)) {
      return this.spawnActor(entity);
    } else if ((0, _utils.isObservable)(entity)) {
      return this.spawnObservable(entity, name);
    } else if ((0, _utils.isMachine)(entity)) {
      return this.spawnMachine(entity, (0, _tslib.__assign)((0, _tslib.__assign)({}, options), {
        id: name
      }));
    } else {
      throw new Error("Unable to spawn entity \"" + name + "\" of type \"" + typeof entity + "\".");
    }
  };

  Interpreter.prototype.spawnMachine = function (machine, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    var childService = new Interpreter(machine, (0, _tslib.__assign)((0, _tslib.__assign)({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));
    var resolvedOptions = (0, _tslib.__assign)((0, _tslib.__assign)({}, DEFAULT_SPAWN_OPTIONS), options);

    if (resolvedOptions.sync) {
      childService.onTransition(function (state) {
        _this.send(_actionTypes.update, {
          state: state,
          id: childService.id
        });
      });
    }

    var actor = childService;
    this.children.set(childService.id, actor);

    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }

    childService.onDone(function (doneEvent) {
      _this.removeChild(childService.id);

      _this.send((0, _utils.toSCXMLEvent)(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };

  Interpreter.prototype.spawnPromise = function (promise, id) {
    var _this = this;

    var canceled = false;
    promise.then(function (response) {
      if (!canceled) {
        _this.removeChild(id);

        _this.send((0, _utils.toSCXMLEvent)((0, _actions.doneInvoke)(id, response), {
          origin: id
        }));
      }
    }, function (errorData) {
      if (!canceled) {
        _this.removeChild(id);

        var errorEvent = (0, _actions.error)(id, errorData);

        try {
          // Send "error.platform.id" to this (parent).
          _this.send((0, _utils.toSCXMLEvent)(errorEvent, {
            origin: id
          }));
        } catch (error) {
          (0, _utils.reportUnhandledExceptionOnInvocation)(errorData, error, id);

          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }

          if (_this.machine.strict) {
            // it would be better to always stop the state machine if unhandled
            // exception/promise rejection happens but because we don't want to
            // break existing code so enforce it on strict mode only especially so
            // because documentation says that onError is optional
            _this.stop();
          }
        }
      }
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        var unsubscribed = false;
        promise.then(function (response) {
          if (unsubscribed) {
            return;
          }

          next && next(response);

          if (unsubscribed) {
            return;
          }

          complete && complete();
        }, function (err) {
          if (unsubscribed) {
            return;
          }

          handleError(err);
        });
        return {
          unsubscribe: function () {
            return unsubscribed = true;
          }
        };
      },
      stop: function () {
        canceled = true;
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnCallback = function (callback, id) {
    var _this = this;

    var canceled = false;
    var receivers = new Set();
    var listeners = new Set();

    var receive = function (e) {
      listeners.forEach(function (listener) {
        return listener(e);
      });

      if (canceled) {
        return;
      }

      _this.send(e);
    };

    var callbackStop;

    try {
      callbackStop = callback(receive, function (newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send((0, _actions.error)(id, err));
    }

    if ((0, _utils.isPromiseLike)(callbackStop)) {
      // it turned out to be an async function, can't reliably check this before calling `callback`
      // because transpiled async functions are not recognizable
      return this.spawnPromise(callbackStop, id);
    }

    var actor = {
      id: id,
      send: function (event) {
        return receivers.forEach(function (receiver) {
          return receiver(event);
        });
      },
      subscribe: function (next) {
        listeners.add(next);
        return {
          unsubscribe: function () {
            listeners.delete(next);
          }
        };
      },
      stop: function () {
        canceled = true;

        if ((0, _utils.isFunction)(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnObservable = function (source, id) {
    var _this = this;

    var subscription = source.subscribe(function (value) {
      _this.send((0, _utils.toSCXMLEvent)(value, {
        origin: id
      }));
    }, function (err) {
      _this.removeChild(id);

      _this.send((0, _utils.toSCXMLEvent)((0, _actions.error)(id, err), {
        origin: id
      }));
    }, function () {
      _this.removeChild(id);

      _this.send((0, _utils.toSCXMLEvent)((0, _actions.doneInvoke)(id), {
        origin: id
      }));
    });
    var actor = {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function (next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function () {
        return subscription.unsubscribe();
      },
      toJSON: function () {
        return {
          id: id
        };
      }
    };
    this.children.set(id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActor = function (actor) {
    this.children.set(actor.id, actor);
    return actor;
  };

  Interpreter.prototype.spawnActivity = function (activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : undefined;

    if (!implementation) {
      if (!_environment.IS_PRODUCTION) {
        (0, _utils.warn)(false, "No implementation found for activity '" + activity.type + "'");
      } // tslint:disable-next-line:no-console


      return;
    } // Start implementation


    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };

  Interpreter.prototype.spawnEffect = function (id, dispose) {
    this.children.set(id, {
      id: id,
      send: function () {
        return void 0;
      },
      subscribe: function () {
        return {
          unsubscribe: function () {
            return void 0;
          }
        };
      },
      stop: dispose || undefined,
      toJSON: function () {
        return {
          id: id
        };
      }
    });
  };

  Interpreter.prototype.attachDev = function () {
    if (this.options.devTools && typeof window !== 'undefined') {
      if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === 'object' ? this.options.devTools : undefined;
        this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect((0, _tslib.__assign)((0, _tslib.__assign)({
          name: this.id,
          autoPause: true,
          stateSanitizer: function (state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: (0, _tslib.__assign)({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : undefined)
        }), this.machine);
        this.devTools.init(this.state);
      } // add XState-specific dev tooling hook


      (0, _devTools.registerService)(this);
    }
  };

  Interpreter.prototype.toJSON = function () {
    return {
      id: this.id
    };
  };

  Interpreter.prototype[_utils.symbolObservable] = function () {
    return this;
  };
  /**
   * The default interpreter options:
   *
   * - `clock` uses the global `setTimeout` and `clearTimeout` functions
   * - `logger` uses the global `console.log()` method
   */


  Interpreter.defaultOptions = /*#__PURE__*/function (global) {
    return {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function (fn, ms) {
          return global.setTimeout.call(null, fn, ms);
        },
        clearTimeout: function (id) {
          return global.clearTimeout.call(null, id);
        }
      },
      logger: global.console.log.bind(console),
      devTools: false
    };
  }(typeof window === 'undefined' ? global : window);

  Interpreter.interpret = interpret;
  return Interpreter;
}();

exports.Interpreter = Interpreter;

var createNullActor = function (name) {
  if (name === void 0) {
    name = 'null';
  }

  return {
    id: name,
    send: function () {
      return void 0;
    },
    subscribe: function () {
      // tslint:disable-next-line:no-empty
      return {
        unsubscribe: function () {}
      };
    },
    toJSON: function () {
      return {
        id: name
      };
    }
  };
};

var resolveSpawnOptions = function (nameOrOptions) {
  if ((0, _utils.isString)(nameOrOptions)) {
    return (0, _tslib.__assign)((0, _tslib.__assign)({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }

  return (0, _tslib.__assign)((0, _tslib.__assign)((0, _tslib.__assign)({}, DEFAULT_SPAWN_OPTIONS), {
    name: (0, _utils.uniqueId)()
  }), nameOrOptions);
};

function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return withServiceScope(undefined, function (service) {
    if (!_environment.IS_PRODUCTION) {
      (0, _utils.warn)(!!service, "Attempted to spawn an Actor (ID: \"" + ((0, _utils.isMachine)(entity) ? entity.id : 'undefined') + "\") outside of a service. This will have no effect.");
    }

    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createNullActor(resolvedOptions.name);
    }
  });
}
/**
 * Creates a new Interpreter instance for the given machine with the provided options, if any.
 *
 * @param machine The machine to interpret
 * @param options Interpreter options
 */


function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./environment.js":"node_modules/xstate/es/environment.js","./utils.js":"node_modules/xstate/es/utils.js","./types.js":"node_modules/xstate/es/types.js","./stateUtils.js":"node_modules/xstate/es/stateUtils.js","./actionTypes.js":"node_modules/xstate/es/actionTypes.js","./actions.js":"node_modules/xstate/es/actions.js","./State.js":"node_modules/xstate/es/State.js","./Actor.js":"node_modules/xstate/es/Actor.js","./scheduler.js":"node_modules/xstate/es/scheduler.js","./registry.js":"node_modules/xstate/es/registry.js","./devTools.js":"node_modules/xstate/es/devTools.js"}],"node_modules/xstate/es/match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchState = matchState;

var _tslib = require("./_virtual/_tslib.js");

var _State = require("./State.js");

function matchState(state, patterns, defaultValue) {
  var e_1, _a;

  var resolvedState = _State.State.from(state, state instanceof _State.State ? state.context : undefined);

  try {
    for (var patterns_1 = (0, _tslib.__values)(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
      var _b = (0, _tslib.__read)(patterns_1_1.value, 2),
          stateValue = _b[0],
          getValue = _b[1];

      if (resolvedState.matches(stateValue)) {
        return getValue(resolvedState);
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return)) _a.call(patterns_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return defaultValue(resolvedState);
}
},{"./_virtual/_tslib.js":"node_modules/xstate/es/_virtual/_tslib.js","./State.js":"node_modules/xstate/es/State.js"}],"node_modules/xstate/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "matchesState", {
  enumerable: true,
  get: function () {
    return _utils.matchesState;
  }
});
Object.defineProperty(exports, "mapState", {
  enumerable: true,
  get: function () {
    return _mapState.mapState;
  }
});
Object.defineProperty(exports, "ActionTypes", {
  enumerable: true,
  get: function () {
    return _types.ActionTypes;
  }
});
Object.defineProperty(exports, "SpecialTargets", {
  enumerable: true,
  get: function () {
    return _types.SpecialTargets;
  }
});
Object.defineProperty(exports, "assign", {
  enumerable: true,
  get: function () {
    return _actions.assign;
  }
});
Object.defineProperty(exports, "doneInvoke", {
  enumerable: true,
  get: function () {
    return _actions.doneInvoke;
  }
});
Object.defineProperty(exports, "forwardTo", {
  enumerable: true,
  get: function () {
    return _actions.forwardTo;
  }
});
Object.defineProperty(exports, "send", {
  enumerable: true,
  get: function () {
    return _actions.send;
  }
});
Object.defineProperty(exports, "sendParent", {
  enumerable: true,
  get: function () {
    return _actions.sendParent;
  }
});
Object.defineProperty(exports, "sendUpdate", {
  enumerable: true,
  get: function () {
    return _actions.sendUpdate;
  }
});
Object.defineProperty(exports, "State", {
  enumerable: true,
  get: function () {
    return _State.State;
  }
});
Object.defineProperty(exports, "StateNode", {
  enumerable: true,
  get: function () {
    return _StateNode.StateNode;
  }
});
Object.defineProperty(exports, "Machine", {
  enumerable: true,
  get: function () {
    return _Machine.Machine;
  }
});
Object.defineProperty(exports, "createMachine", {
  enumerable: true,
  get: function () {
    return _Machine.createMachine;
  }
});
Object.defineProperty(exports, "Interpreter", {
  enumerable: true,
  get: function () {
    return _interpreter.Interpreter;
  }
});
Object.defineProperty(exports, "interpret", {
  enumerable: true,
  get: function () {
    return _interpreter.interpret;
  }
});
Object.defineProperty(exports, "spawn", {
  enumerable: true,
  get: function () {
    return _interpreter.spawn;
  }
});
Object.defineProperty(exports, "matchState", {
  enumerable: true,
  get: function () {
    return _match.matchState;
  }
});
exports.actions = void 0;

var _utils = require("./utils.js");

var _mapState = require("./mapState.js");

var _types = require("./types.js");

var _actions = require("./actions.js");

var _State = require("./State.js");

var _StateNode = require("./StateNode.js");

var _Machine = require("./Machine.js");

var _interpreter = require("./interpreter.js");

var _match = require("./match.js");

var actions = {
  raise: _actions.raise,
  send: _actions.send,
  sendParent: _actions.sendParent,
  sendUpdate: _actions.sendUpdate,
  log: _actions.log,
  cancel: _actions.cancel,
  start: _actions.start,
  stop: _actions.stop,
  assign: _actions.assign,
  after: _actions.after,
  done: _actions.done,
  respond: _actions.respond,
  forwardTo: _actions.forwardTo,
  escalate: _actions.escalate,
  choose: _actions.choose,
  pure: _actions.pure
};
exports.actions = actions;
},{"./utils.js":"node_modules/xstate/es/utils.js","./mapState.js":"node_modules/xstate/es/mapState.js","./types.js":"node_modules/xstate/es/types.js","./actions.js":"node_modules/xstate/es/actions.js","./State.js":"node_modules/xstate/es/State.js","./StateNode.js":"node_modules/xstate/es/StateNode.js","./Machine.js":"node_modules/xstate/es/Machine.js","./interpreter.js":"node_modules/xstate/es/interpreter.js","./match.js":"node_modules/xstate/es/match.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _xstate = require("xstate");

var MAX_DURATION = 30000;
var resetButton = document.querySelector("#reset");
var slider = document.querySelector("#slider");
var output = document.querySelector("#output");
var guage = document.querySelector("#guage");
var machine = (0, _xstate.createMachine)({
  initial: "active",
  context: {
    elapsedTime: 0,
    max: 3.0
  },
  states: {
    active: {
      invoke: {
        id: "addTenth",
        src: function src(ctx, event) {
          return function (callback, onReceive) {
            var id = setInterval(function () {
              return callback("ADD_TENTH");
            }, 100);
            return function () {
              return clearInterval(id);
            };
          };
        }
      },
      on: {
        ADD_TENTH: [{
          cond: function cond(ctx, event) {
            return ctx.elapsedTime < 30 ? false : true;
          },
          target: "elapsed"
        }, {
          actions: (0, _xstate.assign)({
            elapsedTime: function elapsedTime(ctx, event) {
              var next = ctx.elapsedTime + 0.1;
              return +next.toFixed(2);
            }
          })
        }],
        RESET: {
          actions: (0, _xstate.assign)({
            elapsedTime: 0
          })
        },
        SET_MAX: {
          actions: (0, _xstate.assign)({
            max: function max(c, e) {
              return e.value;
            }
          })
        }
      }
    },
    elapsed: {
      on: {
        RESET: {
          actions: (0, _xstate.assign)({
            elapsedTime: 0
          }),
          target: "active"
        },
        SET_MAX: {
          actions: (0, _xstate.assign)({
            max: function max(c, e) {
              return e.value;
            }
          })
        }
      }
    }
  }
}, {});
var service = (0, _xstate.interpret)(machine).start();
service.onTransition(function (state) {
  var _state$context = state.context,
      elapsedTime = _state$context.elapsedTime,
      max = _state$context.max;
  console.log("max is", max);

  if (elapsedTime >= max) {
    output.innerHTML = "".concat(max, "s");
    guage.style.width = "100%";
  } else {
    output.innerHTML = "".concat(elapsedTime, "s");
    guage.style.width = "".concat(elapsedTime / max * 100, "%");
  }
});
resetButton.addEventListener("click", function () {
  service.send("RESET");
});
slider.addEventListener("input", function (e) {
  service.send({
    type: "SET_MAX",
    value: e.target.valueAsNumber
  });
});
},{"xstate":"node_modules/xstate/es/index.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49832" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/xstate_timer.e31bb0bc.js.map