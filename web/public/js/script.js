(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jquery = createCommonjsModule(function (module) {
	/*!
  * jQuery JavaScript Library v3.1.1
  * https://jquery.com/
  *
  * Includes Sizzle.js
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * https://jquery.org/license
  *
  * Date: 2016-09-22T22:30Z
  */
	(function (global, factory) {

		"use strict";

		{

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		}

		// Pass this if window is not defined yet
	})(typeof window !== "undefined" ? window : commonjsGlobal, function (window, noGlobal) {

		// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
		// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
		// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
		// enough that all such attempts are guarded in a try block.
		"use strict";

		var arr = [];

		var document = window.document;

		var getProto = Object.getPrototypeOf;

		var slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var fnToString = hasOwn.toString;

		var ObjectFunctionString = fnToString.call(Object);

		var support = {};

		function DOMEval(code, doc) {
			doc = doc || document;

			var script = doc.createElement("script");

			script.text = code;
			doc.head.appendChild(script).parentNode.removeChild(script);
		}
		/* global Symbol */
		// Defining this global in .eslintrc.json would create a danger of using the global
		// unguarded in another place, it seems safer to define global only for this module


		var version = "3.1.1",


		// Define a local copy of jQuery
		jQuery = function (selector, context) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init(selector, context);
		},


		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([a-z])/g,


		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function (all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {

			// The current version of jQuery being used
			jquery: version,

			constructor: jQuery,

			// The default length of a jQuery object is 0
			length: 0,

			toArray: function () {
				return slice.call(this);
			},

			// Get the Nth element in the matched element set OR
			// Get the whole matched element set as a clean array
			get: function (num) {

				// Return all the elements in a clean array
				if (num == null) {
					return slice.call(this);
				}

				// Return just the one element from the set
				return num < 0 ? this[num + this.length] : this[num];
			},

			// Take an array of elements and push it onto the stack
			// (returning the new matched element set)
			pushStack: function (elems) {

				// Build a new jQuery matched element set
				var ret = jQuery.merge(this.constructor(), elems);

				// Add the old object onto the stack (as a reference)
				ret.prevObject = this;

				// Return the newly-formed element set
				return ret;
			},

			// Execute a callback for every element in the matched set.
			each: function (callback) {
				return jQuery.each(this, callback);
			},

			map: function (callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function () {
				return this.pushStack(slice.apply(this, arguments));
			},

			first: function () {
				return this.eq(0);
			},

			last: function () {
				return this.eq(-1);
			},

			eq: function (i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function () {
				return this.prevObject || this.constructor();
			},

			// For internal use only.
			// Behaves like an Array's method, not like a jQuery method.
			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			// Handle a deep copy situation
			if (typeof target === "boolean") {
				deep = target;

				// Skip the boolean and the target
				target = arguments[i] || {};
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if (typeof target !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			// Extend jQuery itself if only one argument is passed
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// Prevent never-ending loop
						if (target === copy) {
							continue;
						}

						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = jQuery.extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		};

		jQuery.extend({

			// Unique for each copy of jQuery on the page
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			// Assume jQuery is ready without the ready module
			isReady: true,

			error: function (msg) {
				throw new Error(msg);
			},

			noop: function () {},

			isFunction: function (obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function (obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function (obj) {

				// As of jQuery 3.0, isNumeric is limited to
				// strings and numbers (primitives or objects)
				// that can be coerced to finite numbers (gh-2662)
				var type = jQuery.type(obj);
				return (type === "number" || type === "string") &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN(obj - parseFloat(obj));
			},

			isPlainObject: function (obj) {
				var proto, Ctor;

				// Detect obvious negatives
				// Use toString instead of jQuery.type to catch host objects
				if (!obj || toString.call(obj) !== "[object Object]") {
					return false;
				}

				proto = getProto(obj);

				// Objects with no prototype (e.g., `Object.create( null )`) are plain
				if (!proto) {
					return true;
				}

				// Objects with prototype are plain iff they were constructed by a global Object function
				Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
				return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
			},

			isEmptyObject: function (obj) {

				/* eslint-disable no-unused-vars */
				// See https://github.com/eslint/eslint/issues/6125
				var name;

				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function (obj) {
				if (obj == null) {
					return obj + "";
				}

				// Support: Android <=2.3 only (functionish RegExp)
				return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
			},

			// Evaluates a script in a global context
			globalEval: function (code) {
				DOMEval(code);
			},

			// Convert dashed to camelCase; used by the css and data modules
			// Support: IE <=9 - 11, Edge 12 - 13
			// Microsoft forgot to hump their vendor prefix (#9572)
			camelCase: function (string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function (elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function (obj, callback) {
				var length,
				    i = 0;

				if (isArrayLike(obj)) {
					length = obj.length;
					for (; i < length; i++) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (callback.call(obj[i], i, obj[i]) === false) {
							break;
						}
					}
				}

				return obj;
			},

			// Support: Android <=4.0 only
			trim: function (text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			// results is for internal usage only
			makeArray: function (arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArrayLike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function (elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			// Support: Android <=4.0 only, PhantomJS 1 only
			// push.apply(_, arraylike) throws on ancient WebKit
			merge: function (first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function (elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				// Go through the array, only saving the items
				// that pass the validator function
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			// arg is for internal usage only
			map: function (elems, callback, arg) {
				var length,
				    value,
				    i = 0,
				    ret = [];

				// Go through the array, translating each of the items to their new values
				if (isArrayLike(elems)) {
					length = elems.length;
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}

					// Go through every key on the object,
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				// Flatten any nested arrays
				return concat.apply([], ret);
			},

			// A global GUID counter for objects
			guid: 1,

			// Bind a function to a context, optionally partially applying any
			// arguments.
			proxy: function (fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				// Quick check to determine if target is callable, in the spec
				// this throws a TypeError, but we will just return undefined.
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				// Simulated bind
				args = slice.call(arguments, 2);
				proxy = function () {
					return fn.apply(context || this, args.concat(slice.call(arguments)));
				};

				// Set the guid of unique handler to the same of original handler, so it can be removed
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			// jQuery.support is not used in Core but other projects attach their
			// properties to it so it needs to exist.
			support: support
		});

		if (typeof Symbol === "function") {
			jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
		}

		// Populate the class2type map
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArrayLike(obj) {

			// Support: real iOS 8.2 only (not reproducible in simulator)
			// `in` check used to prevent JIT error (gh-2145)
			// hasOwn isn't used here due to false negatives
			// regarding Nodelist length in IE
			var length = !!obj && "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle =
		/*!
   * Sizzle CSS Selector Engine v2.3.3
   * https://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-08-08
   */
		function (window) {

			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,


			// Local document vars
			setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,


			// Instance-specific data
			expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function (a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},


			// Instance methods
			hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,

			// Use a stripped-down indexOf as it's faster than native
			// https://jsperf.com/thor-indexof-vs-for/5
			indexOf = function (list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


			// Regular expressions

			// http://www.w3.org/TR/css3-selectors/#whitespace
			whitespace = "[\\x20\\t\\r\\n\\f]",


			// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
			identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


			// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
			attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" + ")\\)|)",


			// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
			rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + identifier + ")"),
				"CLASS": new RegExp("^\\.(" + identifier + ")"),
				"TAG": new RegExp("^(" + identifier + "|[*])"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
				// For use in libraries implementing .is()
				// We use this for POS matching in `select`
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,


			// Easily-parseable/retrievable ID or TAG or CLASS selectors
			rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,


			// CSS escapes
			// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
			runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function (_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
				// NaN means non-codepoint
				// Support: Firefox<24
				// Workaround erroneous numeric interpretation of +"0x"
				return high !== high || escapedWhitespace ? escaped : high < 0 ?
				// BMP codepoint
				String.fromCharCode(high + 0x10000) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},


			// CSS string/identifier serialization
			// https://drafts.csswg.org/cssom/#common-serializing-idioms
			rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			    fcssescape = function (ch, asCodePoint) {
				if (asCodePoint) {

					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if (ch === "\0") {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			},


			// Used for iframes
			// See setDocument()
			// Removing the function wrapper causes a "Permission Denied"
			// error in IE
			unloadHandler = function () {
				setDocument();
			},
			    disabledAncestor = addCombinator(function (elem) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			}, { dir: "parentNode", next: "legend" });

			// Optimize for push.apply( _, NodeList )
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
				// Support: Android<4.0
				// Detect silently failing push.apply
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ?

					// Leverage slice if possible
					function (target, els) {
						push_native.apply(target, slice.call(els));
					} :

					// Support: IE<9
					// Otherwise append directly
					function (target, els) {
						var j = target.length,
						    i = 0;
						// Can't trust NodeList.length
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var m,
				    i,
				    elem,
				    nid,
				    match,
				    groups,
				    newSelector,
				    newContext = context && context.ownerDocument,


				// nodeType defaults to 9, since context defaults to document
				nodeType = context ? context.nodeType : 9;

				results = results || [];

				// Return early from calls with invalid selector or context
				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				// Try to shortcut find operations (as opposed to filters) in HTML documents
				if (!seed) {

					if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
						setDocument(context);
					}
					context = context || document;

					if (documentIsHTML) {

						// If the selector is sufficiently simple, try using a "get*By*" DOM method
						// (excepting DocumentFragment context, where the methods don't exist)
						if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

							// ID selector
							if (m = match[1]) {

								// Document context
								if (nodeType === 9) {
									if (elem = context.getElementById(m)) {

										// Support: IE, Opera, Webkit
										// TODO: identify versions
										// getElementById can match elements by name instead of ID
										if (elem.id === m) {
											results.push(elem);
											return results;
										}
									} else {
										return results;
									}

									// Element context
								} else {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

										results.push(elem);
										return results;
									}
								}

								// Type selector
							} else if (match[2]) {
								push.apply(results, context.getElementsByTagName(selector));
								return results;

								// Class selector
							} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

								push.apply(results, context.getElementsByClassName(m));
								return results;
							}
						}

						// Take advantage of querySelectorAll
						if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

							if (nodeType !== 1) {
								newContext = context;
								newSelector = selector;

								// qSA looks outside Element context, which is not what we want
								// Thanks to Andrew Dupont for this workaround technique
								// Support: IE <=8
								// Exclude object elements
							} else if (context.nodeName.toLowerCase() !== "object") {

								// Capture the context ID, setting it first if necessary
								if (nid = context.getAttribute("id")) {
									nid = nid.replace(rcssescape, fcssescape);
								} else {
									context.setAttribute("id", nid = expando);
								}

								// Prefix every selector in the list
								groups = tokenize(selector);
								i = groups.length;
								while (i--) {
									groups[i] = "#" + nid + " " + toSelector(groups[i]);
								}
								newSelector = groups.join(",");

								// Expand context for sibling selectors
								newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							}

							if (newSelector) {
								try {
									push.apply(results, newContext.querySelectorAll(newSelector));
									return results;
								} catch (qsaError) {} finally {
									if (nid === expando) {
										context.removeAttribute("id");
									}
								}
							}
						}
					}
				}

				// All others
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			/**
    * Create key-value caches of limited size
    * @returns {function(string, object)} Returns the Object data after storing it on itself with
    *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
    *	deleting the oldest entry
    */
			function createCache() {
				var keys = [];

				function cache(key, value) {
					// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
					if (keys.push(key + " ") > Expr.cacheLength) {
						// Only keep the most recent entries
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			/**
    * Mark a function for special use by Sizzle
    * @param {Function} fn The function to mark
    */
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			/**
    * Support testing using an element
    * @param {Function} fn Passed the created element and returns a boolean result
    */
			function assert(fn) {
				var el = document.createElement("fieldset");

				try {
					return !!fn(el);
				} catch (e) {
					return false;
				} finally {
					// Remove from its parent by default
					if (el.parentNode) {
						el.parentNode.removeChild(el);
					}
					// release memory in IE
					el = null;
				}
			}

			/**
    * Adds the same handler for all of the specified attrs
    * @param {String} attrs Pipe-separated list of attributes
    * @param {Function} handler The method that will be applied
    */
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = arr.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			/**
    * Checks document order of two siblings
    * @param {Element} a
    * @param {Element} b
    * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
    */
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

				// Use IE sourceIndex if available on both nodes
				if (diff) {
					return diff;
				}

				// Check if b follows a
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			/**
    * Returns a function to use in pseudos for input types
    * @param {String} type
    */
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for buttons
    * @param {String} type
    */
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			/**
    * Returns a function to use in pseudos for :enabled/:disabled
    * @param {Boolean} disabled true for :disabled; false for :enabled
    */
			function createDisabledPseudo(disabled) {

				// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
				return function (elem) {

					// Only certain elements can match :enabled or :disabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
					// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
					if ("form" in elem) {

						// Check for inherited disabledness on relevant non-disabled elements:
						// * listed form-associated elements in a disabled fieldset
						//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
						// * option elements in a disabled optgroup
						//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
						// All such elements have a "form" property.
						if (elem.parentNode && elem.disabled === false) {

							// Option elements defer to a parent optgroup if present
							if ("label" in elem) {
								if ("label" in elem.parentNode) {
									return elem.parentNode.disabled === disabled;
								} else {
									return elem.disabled === disabled;
								}
							}

							// Support: IE 6 - 11
							// Use the isDisabled shortcut property to check for disabled fieldset ancestors
							return elem.isDisabled === disabled ||

							// Where there is no isDisabled, check manually
							/* jshint -W018 */
							elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
						}

						return elem.disabled === disabled;

						// Try to winnow out elements that can't be disabled before trusting the disabled property.
						// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
						// even exist on them, let alone have a boolean value.
					} else if ("label" in elem) {
						return elem.disabled === disabled;
					}

					// Remaining elements are neither :enabled nor :disabled
					return false;
				};
			}

			/**
    * Returns a function to use in pseudos for positionals
    * @param {Function} fn
    */
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						// Match elements found at the specified indexes
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			/**
    * Checks a node for validity as a Sizzle context
    * @param {Element|Object=} context
    * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
    */
			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			// Expose support vars for convenience
			support = Sizzle.support = {};

			/**
    * Detects XML nodes
    * @param {Element|Object} elem An element or a document
    * @returns {Boolean} True iff elem is a non-HTML XML node
    */
			isXML = Sizzle.isXML = function (elem) {
				// documentElement is verified for cases where it doesn't yet exist
				// (such as loading iframes in IE - #4833)
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			/**
    * Sets document-related variables once based on the current document
    * @param {Element|Object} [doc] An element or document object to use to set the document
    * @returns {Object} Returns the current document
    */
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    subWindow,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				// Return early if doc is invalid or already selected
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				// Update global variables
				document = doc;
				docElem = document.documentElement;
				documentIsHTML = !isXML(document);

				// Support: IE 9-11, Edge
				// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
				if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

					// Support: IE 11, Edge
					if (subWindow.addEventListener) {
						subWindow.addEventListener("unload", unloadHandler, false);

						// Support: IE 9 - 10 only
					} else if (subWindow.attachEvent) {
						subWindow.attachEvent("onunload", unloadHandler);
					}
				}

				/* Attributes
    ---------------------------------------------------------------------- */

				// Support: IE<8
				// Verify that getAttribute really returns attributes and not properties
				// (excepting IE8 booleans)
				support.attributes = assert(function (el) {
					el.className = "i";
					return !el.getAttribute("className");
				});

				/* getElement(s)By*
    ---------------------------------------------------------------------- */

				// Check if getElementsByTagName("*") returns only elements
				support.getElementsByTagName = assert(function (el) {
					el.appendChild(document.createComment(""));
					return !el.getElementsByTagName("*").length;
				});

				// Support: IE<9
				support.getElementsByClassName = rnative.test(document.getElementsByClassName);

				// Support: IE<10
				// Check if getElementById returns elements by name
				// The broken getElementById methods don't pick up programmatically-set names,
				// so use a roundabout getElementsByName test
				support.getById = assert(function (el) {
					docElem.appendChild(el).id = expando;
					return !document.getElementsByName || !document.getElementsByName(expando).length;
				});

				// ID filter and find
				if (support.getById) {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var elem = context.getElementById(id);
							return elem ? [elem] : [];
						}
					};
				} else {
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};

					// Support: IE 6 - 7 only
					// getElementById is not reliable as a find shortcut
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var node,
							    i,
							    elems,
							    elem = context.getElementById(id);

							if (elem) {

								// Verify the id attribute
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}

								// Fall back on getElementsByName
								elems = context.getElementsByName(id);
								i = 0;
								while (elem = elems[i++]) {
									node = elem.getAttributeNode("id");
									if (node && node.value === id) {
										return [elem];
									}
								}
							}

							return [];
						}
					};
				}

				// Tag
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);

						// DocumentFragment nodes don't have gEBTN
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName(tag);

					// Filter out possible comments
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				// Class
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				/* QSA/matchesSelector
    ---------------------------------------------------------------------- */

				// QSA and matchesSelector support

				// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
				rbuggyMatches = [];

				// qSa(:focus) reports false when true (Chrome 21)
				// We allow this because of a bug in IE8/9 that throws an error
				// whenever `document.activeElement` is accessed on an iframe
				// So, we allow :focus to pass through QSA all the time to avoid the IE error
				// See https://bugs.jquery.com/ticket/13378
				rbuggyQSA = [];

				if (support.qsa = rnative.test(document.querySelectorAll)) {
					// Build QSA regex
					// Regex strategy adopted from Diego Perini
					assert(function (el) {
						// Select is set to empty string on purpose
						// This is to test IE's treatment of not explicitly
						// setting a boolean content attribute,
						// since its presence should be enough
						// https://bugs.jquery.com/ticket/12359
						docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

						// Support: IE8, Opera 11-12.16
						// Nothing should be selected when empty strings follow ^= or $= or *=
						// The test attribute must be unknown in Opera but "safe" for WinRT
						// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
						if (el.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						// Support: IE8
						// Boolean attributes and "value" are not treated correctly
						if (!el.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
						if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						// Webkit/Opera - :checked should return selected option elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						// IE8 throws error here and will not see later tests
						if (!el.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						// Support: Safari 8+, iOS 8+
						// https://bugs.webkit.org/show_bug.cgi?id=136851
						// In-page `selector#id sibling-combinator selector` fails
						if (!el.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (el) {
						el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

						// Support: Windows 8 Native Apps
						// The type and name attributes are restricted during .innerHTML assignment
						var input = document.createElement("input");
						input.setAttribute("type", "hidden");
						el.appendChild(input).setAttribute("name", "D");

						// Support: IE8
						// Enforce case-sensitivity of name attribute
						if (el.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
						// IE8 throws error here and will not see later tests
						if (el.querySelectorAll(":enabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Support: IE9-11+
						// IE's :disabled selector does not pick up the children of disabled fieldsets
						docElem.appendChild(el).disabled = true;
						if (el.querySelectorAll(":disabled").length !== 2) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						// Opera 10-11 does not throw on post-comma invalid pseudos
						el.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (el) {
						// Check to see if it's possible to do matchesSelector
						// on a disconnected node (IE 9)
						support.disconnectedMatch = matches.call(el, "*");

						// This should fail with an exception
						// Gecko does not error, returns false instead
						matches.call(el, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				/* Contains
    ---------------------------------------------------------------------- */
				hasCompare = rnative.test(docElem.compareDocumentPosition);

				// Element contains another
				// Purposefully self-exclusive
				// As in, an element does not contain itself
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				/* Sorting
    ---------------------------------------------------------------------- */

				// Document order sorting
				sortOrder = hasCompare ? function (a, b) {

					// Flag for duplicate removal
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					// Sort on method existence if only one input has compareDocumentPosition
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					// Calculate position if both inputs belong to the same document
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

					// Otherwise we know they are disconnected
					1;

					// Disconnected nodes
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

						// Choose the first element that is related to our preferred document
						if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						// Maintain original order
						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					// Exit early if the nodes are identical
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					// Parentless nodes are either documents or disconnected
					if (!aup || !bup) {
						return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

						// If the nodes are siblings, we can do a quick check
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					// Otherwise we need full lists of their ancestors for comparison
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					// Walk down the tree looking for a discrepancy
					while (ap[i] === bp[i]) {
						i++;
					}

					return i ?
					// Do a sibling check if the nodes have a common ancestor
					siblingCheck(ap[i], bp[i]) :

					// Otherwise nodes in our document sort first
					ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return document;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				// Make sure that attribute selectors are quoted
				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						// IE 9's matchesSelector returns false on disconnected nodes
						if (ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				// Set document vars if needed
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				// Set document vars if needed
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],

				// Don't get fooled by Object.prototype properties (jQuery #13807)
				val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.escape = function (sel) {
				return (sel + "").replace(rcssescape, fcssescape);
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			/**
    * Document sorting and removing duplicates
    * @param {ArrayLike} results
    */
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				// Unless we *know* we can detect duplicates, assume their presence
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				// Clear input after sorting to release objects
				// See https://github.com/jquery/sizzle/pull/225
				sortInput = null;

				return results;
			};

			/**
    * Utility function for retrieving the text value of an array of DOM nodes
    * @param {Array|Element} elem
    */
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					// If no nodeType, this is expected to be an array
					while (node = elem[i++]) {
						// Do not traverse comment nodes
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					// Use textContent for elements
					// innerText usage removed for consistency of new lines (jQuery #11153)
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						// Traverse its children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
				// Do not include comment or processing instruction nodes

				return ret;
			};

			Expr = Sizzle.selectors = {

				// Can be adjusted by the user
				cacheLength: 50,

				createPseudo: markFunction,

				match: matchExpr,

				attrHandle: {},

				find: {},

				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},

				preFilter: {
					"ATTR": function (match) {
						match[1] = match[1].replace(runescape, funescape);

						// Move the given value to match[3] whether quoted or unquoted
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function (match) {
						/* matches from matchExpr["CHILD"]
      	1 type (only|nth|...)
      	2 what (child|of-type)
      	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
      	4 xn-component of xn+y argument ([+-]?\d*n|)
      	5 sign of xn-component
      	6 x of xn-component
      	7 sign of y-component
      	8 y of y-component
      */
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							// nth-* requires argument
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							// numeric x and y parameters for Expr.filter.CHILD
							// remember that false/true cast respectively to 0/1
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");

							// other types prohibit arguments
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function (match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						// Accept quoted arguments as-is
						if (match[3]) {
							match[2] = match[4] || match[5] || "";

							// Strip excess characters from unquoted arguments
						} else if (unquoted && rpseudo.test(unquoted) && (
						// Get excess from tokenize (recursively)
						excess = tokenize(unquoted, true)) && (
						// advance to the next closing parenthesis
						excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

							// excess is a negative index
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						// Return only captures needed by the pseudo filter method (type and argument)
						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function (nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function (className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function (name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function (type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ?

						// Shortcut for :nth-*(n)
						function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    uniqueCache,
							    outerCache,
							    node,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType,
							    diff = false;

							if (parent) {

								// :(first|last|only)-(child|of-type)
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

												return false;
											}
										}
										// Reverse direction for :only-* (if we haven't yet done so)
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								// non-xml :nth-child(...) stores cache data on `parent`
								if (forward && useCache) {

									// Seek `elem` from a previously-cached index

									// ...in a gzip-friendly way
									node = parent;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (

									// Fallback to seeking `elem` from the start
									diff = nodeIndex = 0) || start.pop()) {

										// When found, cache indexes on `parent` and break
										if (node.nodeType === 1 && ++diff && node === elem) {
											uniqueCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else {
									// Use previously-cached element index if available
									if (useCache) {
										// ...in a gzip-friendly way
										node = elem;
										outerCache = node[expando] || (node[expando] = {});

										// Support: IE <9 only
										// Defend against cloned attroperties (jQuery gh-1709)
										uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

										cache = uniqueCache[type] || [];
										nodeIndex = cache[0] === dirruns && cache[1];
										diff = nodeIndex;
									}

									// xml :nth-child(...)
									// or :nth-last-child(...) or :nth(-last)?-of-type(...)
									if (diff === false) {
										// Use the same loop as above to seek `elem` from the start
										while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

											if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

												// Cache the index of each encountered element
												if (useCache) {
													outerCache = node[expando] || (node[expando] = {});

													// Support: IE <9 only
													// Defend against cloned attroperties (jQuery gh-1709)
													uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

													uniqueCache[type] = [dirruns, diff];
												}

												if (node === elem) {
													break;
												}
											}
										}
									}
								}

								// Incorporate the offset, then check against cycle size
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function (pseudo, argument) {
						// pseudo-class names are case-insensitive
						// http://www.w3.org/TR/selectors/#pseudo-classes
						// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
						// Remember that setFilters inherits from pseudos
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						// The user may use createPseudo to indicate that
						// arguments are needed to create the filter function
						// just as Sizzle does
						if (fn[expando]) {
							return fn(argument);
						}

						// But maintain support for old signatures
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					// Potentially complex pseudos
					"not": markFunction(function (selector) {
						// Trim the selector passed to compile
						// to avoid treating leading and trailing
						// spaces as combinators
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							// Match elements unmatched by `matcher`
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							// Don't keep the element (issue #299)
							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					// "Whether an element is represented by a :lang() selector
					// is based solely on the element's language value
					// being equal to the identifier C,
					// or beginning with the identifier C immediately followed by "-".
					// The matching of C against the element's language value is performed case-insensitively.
					// The identifier C does not have to be a valid language name."
					// http://www.w3.org/TR/selectors/#lang-pseudo
					"lang": markFunction(function (lang) {
						// lang value must be a valid identifier
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					// Miscellaneous
					"target": function (elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function (elem) {
						return elem === docElem;
					},

					"focus": function (elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					// Boolean properties
					"enabled": createDisabledPseudo(false),
					"disabled": createDisabledPseudo(true),

					"checked": function (elem) {
						// In CSS3, :checked should return both checked and selected elements
						// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function (elem) {
						// Accessing this property makes selected-by-default
						// options in Safari work properly
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					// Contents
					"empty": function (elem) {
						// http://www.w3.org/TR/selectors/#empty-pseudo
						// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
						//   but not by others (comment: 8; processing instruction: 7; etc.)
						// nodeType < 6 works because attributes (2) do not appear as children
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function (elem) {
						return !Expr.pseudos["empty"](elem);
					},

					// Element/input types
					"header": function (elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function (elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function (elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function (elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

						// Support: IE<8
						// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
						(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					// Position-in-collection
					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			// Add button/input type pseudos
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			// Easy API for creating new setFilters
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {

					// Comma and first run
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							// Don't consume trailing commas as valid
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					// Combinators
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
							// Cast descendant combinators to space
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					// Filters
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				// Return the length of the invalid excess
				// if we're just parsing
				// Otherwise, throw an error or return tokens
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
				// Cache the tokens
				tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    skip = combinator.next,
				    key = skip || dir,
				    checkNonElements = base && key === "parentNode",
				    doneName = done++;

				return combinator.first ?
				// Check against closest ancestor/preceding element
				function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
					return false;
				} :

				// Check against all ancestor/preceding elements
				function (elem, context, xml) {
					var oldCache,
					    uniqueCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

								if (skip && skip === elem.nodeName.toLowerCase()) {
									elem = elem[dir] || elem;
								} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

									// Assign to newCache so results back-propagate to previous elements
									return newCache[2] = oldCache[2];
								} else {
									// Reuse newcache so results back-propagate to previous elements
									uniqueCache[key] = newCache;

									// A match means we're done; a fail means we have to keep checking
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,


					// Get initial elements from seed or context
					elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


					// Prefilter to get matcher input, preserving a map for seed-results synchronization
					matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || (seed ? preFilter : preexisting || postFilter) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results : matcherIn;

					// Find primary matches
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					// Apply postFilter
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						// Un-match failing elements by moving them back to matcherIn
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								// Get the final matcherOut by condensing this intermediate into postFinder contexts
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										// Restore matcherIn since elem is not yet a final match
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							// Move matched elements from seed to results to keep them synchronized
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}

						// Add elements to results, through postFinder if defined
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,


				// The foundational matcher ensures that elements are reachable from top-level context(s)
				matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
					// Avoid hanging onto element (issue #299)
					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						// Return special upon seeing a positional matcher
						if (matcher[expando]) {
							// Find the next relative operator (if any) for proper handling
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function (seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]("*", outermost),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context === document || context || outermost;
					}

					// Add elements passing elementMatchers directly to results
					// Support: IE<9, Safari
					// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							if (!context && elem.ownerDocument !== document) {
								setDocument(elem);
								xml = !documentIsHTML;
							}
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context || document, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						// Track unmatched elements for set filters
						if (bySet) {
							// They will have gone through all possible matchers
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							// Lengthen the array for every element, matched or not
							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					// `i` is now the count of elements visited above, and adding it to `matchedCount`
					// makes the latter nonnegative.
					matchedCount += i;

					// Apply set filters to unmatched elements
					// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
					// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
					// no element matchers and no seed.
					// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
					// case, which will result in a "00" `matchedCount` that differs from `i` but is also
					// numerically zero.
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							// Reintegrate element matches to eliminate the need for sorting
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							// Discard index placeholder values to get only actual matches
							setMatched = condense(setMatched);
						}

						// Add matches to results
						push.apply(results, setMatched);

						// Seedless set matches succeeding multiple successful matchers stipulate sorting
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					// Override manipulation of globals by nested matchers
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					// Generate a function of recursive functions that can be used to check each element
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					// Cache the compiled function
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					// Save selector and tokenization
					cached.selector = selector;
				}
				return cached;
			};

			/**
    * A low-level selection function that works with Sizzle's compiled
    *  selector functions
    * @param {String|Function} selector A selector or a pre-compiled
    *  selector function built with Sizzle.compile
    * @param {Element} context
    * @param {Array} [results]
    * @param {Array} [seed] A set of elements to match against
    */
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				// Try to minimize operations if there is only one selector in the list and no seed
				// (the latter of which guarantees us context)
				if (match.length === 1) {

					// Reduce context if the leading compound selector is an ID
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;

							// Precompiled matchers will still verify ancestry, so step up a level
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					// Fetch a seed set for right-to-left matching
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						// Abort if we hit a combinator
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							// Search, expanding context for leading sibling combinators
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

								// If seed is empty or no tokens remain, we can return early
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				// Compile and execute a filtering function if one is not provided
				// Provide `match` to avoid retokenization if we modified the selector above
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			// One-time assignments

			// Sort stability
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			// Support: Chrome 14-35+
			// Always assume duplicates if they aren't passed to the comparison function
			support.detectDuplicates = !!hasDuplicate;

			// Initialize against the default document
			setDocument();

			// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
			// Detached nodes confoundingly follow *each other*
			support.sortDetached = assert(function (el) {
				// Should return 1, but returns 4 (following)
				return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
			});

			// Support: IE<8
			// Prevent attribute/property "interpolation"
			// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
			if (!assert(function (el) {
				el.innerHTML = "<a href='#'></a>";
				return el.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			// Support: IE<9
			// Use defaultValue in place of getAttribute("value")
			if (!support.attributes || !assert(function (el) {
				el.innerHTML = "<input/>";
				el.firstChild.setAttribute("value", "");
				return el.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			// Support: IE<9
			// Use getAttributeNode to fetch booleans when getAttribute lies
			if (!assert(function (el) {
				return el.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;

		// Deprecated
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
		jQuery.escapeSelector = Sizzle.escape;

		var dir = function (elem, dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		};

		var siblings = function (n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		};

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		var risSimple = /^.[^:#\[\.,]*$/;

		// Implement the identical functionality for filter and not
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			// Single element
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			// Arraylike of elements (jQuery, arguments, Array)
			if (typeof qualifier !== "string") {
				return jQuery.grep(elements, function (elem) {
					return indexOf.call(qualifier, elem) > -1 !== not;
				});
			}

			// Simple selector that can be filtered directly, removing non-Elements
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			// Complex selector, compare the two sets, removing non-Elements
			qualifier = jQuery.filter(qualifier, elements);
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			if (elems.length === 1 && elem.nodeType === 1) {
				return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
			}

			return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function (selector) {
				var i,
				    ret,
				    len = this.length,
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				ret = this.pushStack([]);

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				return len > 1 ? jQuery.uniqueSort(ret) : ret;
			},
			filter: function (selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function (selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function (selector) {
				return !!winnow(this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		// Initialize a jQuery object


		// A central reference to the root jQuery(document)
		var rootjQuery,


		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		    init = jQuery.fn.init = function (selector, context, root) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if (!selector) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				// Match html or make sure no context is specified for #id
				if (match && (match[1] || !context)) {

					// HANDLE: $(html) -> $(array)
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						// HANDLE: $(html, props)
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {

								// Properties of context are called as methods if possible
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);

									// ...and otherwise set as attributes
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;

						// HANDLE: $(#id)
					} else {
						elem = document.getElementById(match[2]);

						if (elem) {

							// Inject the element directly into the jQuery object
							this[0] = elem;
							this.length = 1;
						}
						return this;
					}

					// HANDLE: $(expr, $(...))
				} else if (!context || context.jquery) {
					return (context || root).find(selector);

					// HANDLE: $(expr, context)
					// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor(context).find(selector);
				}

				// HANDLE: $(DOMElement)
			} else if (selector.nodeType) {
				this[0] = selector;
				this.length = 1;
				return this;

				// HANDLE: $(function)
				// Shortcut for document ready
			} else if (jQuery.isFunction(selector)) {
				return root.ready !== undefined ? root.ready(selector) :

				// Execute immediately if ready is not present
				selector(jQuery);
			}

			return jQuery.makeArray(selector, this);
		};

		// Give the init function the jQuery prototype for later instantiation
		init.prototype = jQuery.fn;

		// Initialize central reference
		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,


		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.fn.extend({
			has: function (target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function (selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    targets = typeof selectors !== "string" && jQuery(selectors);

				// Positional selectors never match, since there's no _selection_ context
				if (!rneedsContext.test(selectors)) {
					for (; i < l; i++) {
						for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

							// Always skip document fragments
							if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

								matched.push(cur);
								break;
							}
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
			},

			// Determine the position of an element within the set
			index: function (elem) {

				// No argument, return index in parent
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				// Index in selector
				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				// Locate the position of the desired element
				return indexOf.call(this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[0] : elem);
			},

			add: function (selector, context) {
				return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function (selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function (elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function (elem) {
				return dir(elem, "parentNode");
			},
			parentsUntil: function (elem, i, until) {
				return dir(elem, "parentNode", until);
			},
			next: function (elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function (elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function (elem) {
				return dir(elem, "nextSibling");
			},
			prevAll: function (elem) {
				return dir(elem, "previousSibling");
			},
			nextUntil: function (elem, i, until) {
				return dir(elem, "nextSibling", until);
			},
			prevUntil: function (elem, i, until) {
				return dir(elem, "previousSibling", until);
			},
			siblings: function (elem) {
				return siblings((elem.parentNode || {}).firstChild, elem);
			},
			children: function (elem) {
				return siblings(elem.firstChild);
			},
			contents: function (elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {

					// Remove duplicates
					if (!guaranteedUnique[name]) {
						jQuery.uniqueSort(matched);
					}

					// Reverse order for parents* and prev-derivatives
					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

		// Convert String-formatted options into Object-formatted ones
		function createOptions(options) {
			var object = {};
			jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		/*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
		jQuery.Callbacks = function (options) {

			// Convert options from String-formatted to Object-formatted if needed
			// (we check in cache first)
			options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

			var // Flag to know if list is currently firing
			firing,


			// Last fire value for non-forgettable lists
			memory,


			// Flag to know if list was already fired
			fired,


			// Flag to prevent firing
			locked,


			// Actual callback list
			list = [],


			// Queue of execution data for repeatable lists
			queue = [],


			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,


			// Fire callbacks
			fire = function () {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for (; queue.length; firingIndex = -1) {
					memory = queue.shift();
					while (++firingIndex < list.length) {

						// Run callback and check for early termination
						if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if (!options.memory) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if (locked) {

					// Keep an empty list if we have data for future add calls
					if (memory) {
						list = [];

						// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},


			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function () {
					if (list) {

						// If we have memory from a past run, we should fire after adding
						if (memory && !firing) {
							firingIndex = list.length - 1;
							queue.push(memory);
						}

						(function add(args) {
							jQuery.each(args, function (_, arg) {
								if (jQuery.isFunction(arg)) {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && jQuery.type(arg) !== "string") {

									// Inspect recursively
									add(arg);
								}
							});
						})(arguments);

						if (memory && !firing) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function () {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);

							// Handle firing indexes
							if (index <= firingIndex) {
								firingIndex--;
							}
						}
					});
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function (fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function () {
					if (list) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function () {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function () {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function () {
					locked = queue = [];
					if (!memory && !firing) {
						list = memory = "";
					}
					return this;
				},
				locked: function () {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function (context, args) {
					if (!locked) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						queue.push(args);
						if (!firing) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function () {
					self.fireWith(this, arguments);
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function () {
					return !!fired;
				}
			};

			return self;
		};

		function Identity(v) {
			return v;
		}
		function Thrower(ex) {
			throw ex;
		}

		function adoptValue(value, resolve, reject) {
			var method;

			try {

				// Check for promise aspect first to privilege synchronous behavior
				if (value && jQuery.isFunction(method = value.promise)) {
					method.call(value).done(resolve).fail(reject);

					// Other thenables
				} else if (value && jQuery.isFunction(method = value.then)) {
					method.call(value, resolve, reject);

					// Other non-thenables
				} else {

					// Support: Android 4.0 only
					// Strict mode functions invoked without .call/.apply get global-object context
					resolve.call(undefined, value);
				}

				// For Promises/A+, convert exceptions into rejections
				// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
				// Deferred#then to conditionally suppress rejection.
			} catch (value) {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				reject.call(undefined, value);
			}
		}

		jQuery.extend({

			Deferred: function (func) {
				var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
				    state = "pending",
				    promise = {
					state: function () {
						return state;
					},
					always: function () {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					"catch": function (fn) {
						return promise.then(null, fn);
					},

					// Keep pipe for back-compat
					pipe: function () /* fnDone, fnFail, fnProgress */{
						var fns = arguments;

						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
									} else {
										newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
					then: function (onFulfilled, onRejected, onProgress) {
						var maxDepth = 0;
						function resolve(depth, deferred, handler, special) {
							return function () {
								var that = this,
								    args = arguments,
								    mightThrow = function () {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if (depth < maxDepth) {
										return;
									}

									returned = handler.apply(that, args);

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if (returned === deferred.promise()) {
										throw new TypeError("Thenable self-resolution");
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned && (

									// Support: Promises/A+ section 2.3.4
									// https://promisesaplus.com/#point-64
									// Only check objects and functions for thenability
									typeof returned === "object" || typeof returned === "function") && returned.then;

									// Handle a returned thenable
									if (jQuery.isFunction(then)) {

										// Special processors (notify) just wait for resolution
										if (special) {
											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

											// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
										}

										// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Identity) {
											that = undefined;
											args = [returned];
										}

										// Process the value(s)
										// Default process is resolve
										(special || deferred.resolveWith)(that, args);
									}
								},


								// Only normal processors (resolve) catch and reject exceptions
								process = special ? mightThrow : function () {
									try {
										mightThrow();
									} catch (e) {

										if (jQuery.Deferred.exceptionHook) {
											jQuery.Deferred.exceptionHook(e, process.stackTrace);
										}

										// Support: Promises/A+ section 2.3.3.3.4.1
										// https://promisesaplus.com/#point-61
										// Ignore post-resolution exceptions
										if (depth + 1 >= maxDepth) {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if (handler !== Thrower) {
												that = undefined;
												args = [e];
											}

											deferred.rejectWith(that, args);
										}
									}
								};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if (depth) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if (jQuery.Deferred.getStackHook) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout(process);
								}
							};
						}

						return jQuery.Deferred(function (newDefer) {

							// progress_handlers.add( ... )
							tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

							// fulfilled_handlers.add( ... )
							tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

							// rejected_handlers.add( ... )
							tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
						}).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function (obj) {
						return obj != null ? jQuery.extend(obj, promise) : promise;
					}
				},
				    deferred = {};

				// Add list-specific methods
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[5];

					// promise.progress = list.add
					// promise.done = list.add
					// promise.fail = list.add
					promise[tuple[1]] = list.add;

					// Handle state
					if (stateString) {
						list.add(function () {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[3 - i][2].disable,

						// progress_callbacks.lock
						tuples[0][2].lock);
					}

					// progress_handlers.fire
					// fulfilled_handlers.fire
					// rejected_handlers.fire
					list.add(tuple[3].fire);

					// deferred.notify = function() { deferred.notifyWith(...) }
					// deferred.resolve = function() { deferred.resolveWith(...) }
					// deferred.reject = function() { deferred.rejectWith(...) }
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
						return this;
					};

					// deferred.notifyWith = list.fireWith
					// deferred.resolveWith = list.fireWith
					// deferred.rejectWith = list.fireWith
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				// Make the deferred a promise
				promise.promise(deferred);

				// Call given func if any
				if (func) {
					func.call(deferred, deferred);
				}

				// All done!
				return deferred;
			},

			// Deferred helper
			when: function (singleValue) {
				var

				// count of uncompleted subordinates
				remaining = arguments.length,


				// count of unprocessed arguments
				i = remaining,


				// subordinate fulfillment data
				resolveContexts = Array(i),
				    resolveValues = slice.call(arguments),


				// the master Deferred
				master = jQuery.Deferred(),


				// subordinate callback factory
				updateFunc = function (i) {
					return function (value) {
						resolveContexts[i] = this;
						resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
						if (! --remaining) {
							master.resolveWith(resolveContexts, resolveValues);
						}
					};
				};

				// Single- and empty arguments are adopted like Promise.resolve
				if (remaining <= 1) {
					adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);

					// Use .then() to unwrap secondary thenables (cf. gh-3000)
					if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

						return master.then();
					}
				}

				// Multiple arguments are aggregated like Promise.all array elements
				while (i--) {
					adoptValue(resolveValues[i], updateFunc(i), master.reject);
				}

				return master.promise();
			}
		});

		// These usually indicate a programmer mistake during development,
		// warn about them ASAP rather than swallowing them by default.
		var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

		jQuery.Deferred.exceptionHook = function (error, stack) {

			// Support: IE 8 - 9 only
			// Console exists when dev tools are open, which can happen at any time
			if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
				window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
			}
		};

		jQuery.readyException = function (error) {
			window.setTimeout(function () {
				throw error;
			});
		};

		// The deferred used on DOM ready
		var readyList = jQuery.Deferred();

		jQuery.fn.ready = function (fn) {

			readyList.then(fn)

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch(function (error) {
				jQuery.readyException(error);
			});

			return this;
		};

		jQuery.extend({

			// Is the DOM ready to be used? Set to true once it occurs.
			isReady: false,

			// A counter to track how many items to wait for before
			// the ready event fires. See #6781
			readyWait: 1,

			// Hold (or release) the ready event
			holdReady: function (hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			// Handle when the DOM is ready
			ready: function (wait) {

				// Abort if there are pending holds or we're already ready
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				// Remember that the DOM is ready
				jQuery.isReady = true;

				// If a normal DOM Ready event fired, decrement, and wait if need be
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				// If there are functions bound, to execute
				readyList.resolveWith(document, [jQuery]);
			}
		});

		jQuery.ready.then = readyList.then;

		// The ready event handler and self cleanup method
		function completed() {
			document.removeEventListener("DOMContentLoaded", completed);
			window.removeEventListener("load", completed);
			jQuery.ready();
		}

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE <=9 - 10 only
		// Older IE sometimes signals "interactive" too soon
		if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout(jQuery.ready);
		} else {

			// Use the handy event callback
			document.addEventListener("DOMContentLoaded", completed);

			// A fallback to window.onload, that will always work
			window.addEventListener("load", completed);
		}

		// Multifunctional method to get and set values of a collection
		// The value/s can optionally be executed if it's a function
		var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			// Sets many values
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					access(elems, fn, i, key[i], true, emptyGet, raw);
				}

				// Sets one value
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {

					// Bulk operations run against the entire set
					if (raw) {
						fn.call(elems, value);
						fn = null;

						// ...except when executing function values
					} else {
						bulk = fn;
						fn = function (elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			if (chainable) {
				return elems;
			}

			// Gets
			if (bulk) {
				return fn.call(elems);
			}

			return len ? fn(elems[0], key) : emptyGet;
		};
		var acceptData = function (owner) {

			// Accepts only:
			//  - Node
			//    - Node.ELEMENT_NODE
			//    - Node.DOCUMENT_NODE
			//  - Object
			//    - Any
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};

		function Data() {
			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;

		Data.prototype = {

			cache: function (owner) {

				// Check if the owner object already has a cache
				var value = owner[this.expando];

				// If not, create one
				if (!value) {
					value = {};

					// We can accept data for non-element nodes in modern browsers,
					// but we should not, see #8335.
					// Always return an empty object.
					if (acceptData(owner)) {

						// If it is a node unlikely to be stringify-ed or looped over
						// use plain assignment
						if (owner.nodeType) {
							owner[this.expando] = value;

							// Otherwise secure it in a non-enumerable property
							// configurable must be true to allow the property to be
							// deleted when data is removed
						} else {
							Object.defineProperty(owner, this.expando, {
								value: value,
								configurable: true
							});
						}
					}
				}

				return value;
			},
			set: function (owner, data, value) {
				var prop,
				    cache = this.cache(owner);

				// Handle: [ owner, key, value ] args
				// Always use camelCase key (gh-2257)
				if (typeof data === "string") {
					cache[jQuery.camelCase(data)] = value;

					// Handle: [ owner, { properties } ] args
				} else {

					// Copy the properties one-by-one to the cache object
					for (prop in data) {
						cache[jQuery.camelCase(prop)] = data[prop];
					}
				}
				return cache;
			},
			get: function (owner, key) {
				return key === undefined ? this.cache(owner) :

				// Always use camelCase key (gh-2257)
				owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
			},
			access: function (owner, key, value) {

				// In cases where either:
				//
				//   1. No key was specified
				//   2. A string key was specified, but no value provided
				//
				// Take the "read" path and allow the get method to determine
				// which value to return, respectively either:
				//
				//   1. The entire cache object
				//   2. The data stored at the key
				//
				if (key === undefined || key && typeof key === "string" && value === undefined) {

					return this.get(owner, key);
				}

				// When the key is not a string, or both a key and value
				// are specified, set or extend (existing objects) with either:
				//
				//   1. An object of properties
				//   2. A key and value
				//
				this.set(owner, key, value);

				// Since the "set" path can have two possible entry points
				// return the expected data based on which path was taken[*]
				return value !== undefined ? value : key;
			},
			remove: function (owner, key) {
				var i,
				    cache = owner[this.expando];

				if (cache === undefined) {
					return;
				}

				if (key !== undefined) {

					// Support array or space separated string of keys
					if (jQuery.isArray(key)) {

						// If key is an array of keys...
						// We always set camelCase keys, so remove that.
						key = key.map(jQuery.camelCase);
					} else {
						key = jQuery.camelCase(key);

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
					}

					i = key.length;

					while (i--) {
						delete cache[key[i]];
					}
				}

				// Remove the expando if there's no more data
				if (key === undefined || jQuery.isEmptyObject(cache)) {

					// Support: Chrome <=35 - 45
					// Webkit & Blink performance suffers when deleting properties
					// from DOM nodes, so set to undefined instead
					// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
					if (owner.nodeType) {
						owner[this.expando] = undefined;
					} else {
						delete owner[this.expando];
					}
				}
			},
			hasData: function (owner) {
				var cache = owner[this.expando];
				return cache !== undefined && !jQuery.isEmptyObject(cache);
			}
		};
		var dataPriv = new Data();

		var dataUser = new Data();

		//	Implementation Summary
		//
		//	1. Enforce API surface and semantic compatibility with 1.9.x branch
		//	2. Improve the module's maintainability by reducing the storage
		//		paths to a single mechanism.
		//	3. Use the same single mechanism to support "private" and "user" data.
		//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
		//	5. Avoid exposing implementation details on user objects (eg. expando properties)
		//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /[A-Z]/g;

		function getData(data) {
			if (data === "true") {
				return true;
			}

			if (data === "false") {
				return false;
			}

			if (data === "null") {
				return null;
			}

			// Only convert to a number if it doesn't change the string
			if (data === +data + "") {
				return +data;
			}

			if (rbrace.test(data)) {
				return JSON.parse(data);
			}

			return data;
		}

		function dataAttr(elem, key, data) {
			var name;

			// If nothing was found internally, try to fetch any
			// data from the HTML5 data-* attribute
			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = getData(data);
					} catch (e) {}

					// Make sure we set the data so it isn't changed later
					dataUser.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function (elem) {
				return dataUser.hasData(elem) || dataPriv.hasData(elem);
			},

			data: function (elem, name, data) {
				return dataUser.access(elem, name, data);
			},

			removeData: function (elem, name) {
				dataUser.remove(elem, name);
			},

			// TODO: Now that all calls to _data and _removeData have been replaced
			// with direct calls to dataPriv methods, these can be deprecated.
			_data: function (elem, name, data) {
				return dataPriv.access(elem, name, data);
			},

			_removeData: function (elem, name) {
				dataPriv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function (key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				// Gets all values
				if (key === undefined) {
					if (this.length) {
						data = dataUser.get(elem);

						if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {

								// Support: IE 11 only
								// The attrs elements can be null (#14894)
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							dataPriv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				// Sets multiple values
				if (typeof key === "object") {
					return this.each(function () {
						dataUser.set(this, key);
					});
				}

				return access(this, function (value) {
					var data;

					// The calling jQuery object (element matches) is not empty
					// (and therefore has an element appears at this[ 0 ]) and the
					// `value` parameter was not undefined. An empty jQuery object
					// will result in `undefined` for elem = this[ 0 ] which will
					// throw an exception if an attempt to read a data cache is made.
					if (elem && value === undefined) {

						// Attempt to get data from the cache
						// The key will always be camelCased in Data
						data = dataUser.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						// Attempt to "discover" the data in
						// HTML5 custom data-* attrs
						data = dataAttr(elem, key);
						if (data !== undefined) {
							return data;
						}

						// We tried really hard, but the data doesn't exist.
						return;
					}

					// Set the data...
					this.each(function () {

						// We always store the camelCased key
						dataUser.set(this, key, value);
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function (key) {
				return this.each(function () {
					dataUser.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function (elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = dataPriv.get(elem, type);

					// Speed up dequeue by getting out quickly if this is just a lookup
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = dataPriv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function (elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function () {
					jQuery.dequeue(elem, type);
				};

				// If the fx queue is dequeued, always remove the progress sentinel
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {

					// Add a progress sentinel to prevent the fx queue from being
					// automatically dequeued
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					// Clear up the last queue stop function
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			// Not public - generate a queueHooks object, or return the current one
			_queueHooks: function (elem, type) {
				var key = type + "queueHooks";
				return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						dataPriv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function (type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					// Ensure a hooks for this queue
					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function (type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function (type) {
				return this.queue(type || "fx", []);
			},

			// Get a promise resolved when queues of a certain type
			// are emptied (fx is the type by default)
			promise: function (type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function () {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = dataPriv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHiddenWithinTree = function (elem, el) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" || elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
		};

		var swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			// Remember the old values, and insert the new ones
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			// Revert the old values
			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		function adjustCSS(elem, prop, valueParts, tween) {
			var adjusted,
			    scale = 1,
			    maxIterations = 20,
			    currentValue = tween ? function () {
				return tween.cur();
			} : function () {
				return jQuery.css(elem, prop, "");
			},
			    initial = currentValue(),
			    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

			if (initialInUnit && initialInUnit[3] !== unit) {

				// Trust units reported by jQuery.css
				unit = unit || initialInUnit[3];

				// Make sure we update the tween properties later on
				valueParts = valueParts || [];

				// Iteratively approximate from a nonzero starting point
				initialInUnit = +initial || 1;

				do {

					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					initialInUnit = initialInUnit / scale;
					jQuery.style(elem, prop, initialInUnit + unit);

					// Update scale, tolerating zero or NaN from tween.cur()
					// Break the loop if scale is unchanged or perfect, or if we've just had enough.
				} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
			}

			if (valueParts) {
				initialInUnit = +initialInUnit || +initial || 0;

				// Apply relative offset (+=/-=) if specified
				adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
				if (tween) {
					tween.unit = unit;
					tween.start = initialInUnit;
					tween.end = adjusted;
				}
			}
			return adjusted;
		}

		var defaultDisplayMap = {};

		function getDefaultDisplay(elem) {
			var temp,
			    doc = elem.ownerDocument,
			    nodeName = elem.nodeName,
			    display = defaultDisplayMap[nodeName];

			if (display) {
				return display;
			}

			temp = doc.body.appendChild(doc.createElement(nodeName));
			display = jQuery.css(temp, "display");

			temp.parentNode.removeChild(temp);

			if (display === "none") {
				display = "block";
			}
			defaultDisplayMap[nodeName] = display;

			return display;
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    values = [],
			    index = 0,
			    length = elements.length;

			// Determine new display value for elements that need to change
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				display = elem.style.display;
				if (show) {

					// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
					// check is required in this first loop unless we have a nonempty display value (either
					// inline or about-to-be-restored)
					if (display === "none") {
						values[index] = dataPriv.get(elem, "display") || null;
						if (!values[index]) {
							elem.style.display = "";
						}
					}
					if (elem.style.display === "" && isHiddenWithinTree(elem)) {
						values[index] = getDefaultDisplay(elem);
					}
				} else {
					if (display !== "none") {
						values[index] = "none";

						// Remember what we're overwriting
						dataPriv.set(elem, "display", display);
					}
				}
			}

			// Set the display of the elements in a second loop to avoid constant reflow
			for (index = 0; index < length; index++) {
				if (values[index] != null) {
					elements[index].style.display = values[index];
				}
			}

			return elements;
		}

		jQuery.fn.extend({
			show: function () {
				return showHide(this, true);
			},
			hide: function () {
				return showHide(this);
			},
			toggle: function (state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHiddenWithinTree(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
		var rcheckableType = /^(?:checkbox|radio)$/i;

		var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

		var rscriptType = /^$|\/(?:java|ecma)script/i;

		// We have to close these tags to support XHTML (#13200)
		var wrapMap = {

			// Support: IE <=9 only
			option: [1, "<select multiple='multiple'>", "</select>"],

			// XHTML parsers do not magically insert elements in the
			// same way that tag soup parsers do. So we cannot shorten
			// this by omitting <tbody> or other required elements.
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		// Support: IE <=9 only
		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function getAll(context, tag) {

			// Support: IE <=9 - 11 only
			// Use typeof to avoid zero-argument method invocation on host objects (#15151)
			var ret;

			if (typeof context.getElementsByTagName !== "undefined") {
				ret = context.getElementsByTagName(tag || "*");
			} else if (typeof context.querySelectorAll !== "undefined") {
				ret = context.querySelectorAll(tag || "*");
			} else {
				ret = [];
			}

			if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
				return jQuery.merge([context], ret);
			}

			return ret;
		}

		// Mark scripts as having already been evaluated
		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
			}
		}

		var rhtml = /<|&#?\w+;/;

		function buildFragment(elems, context, scripts, selection, ignored) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// Skip elements already in the context collection (trac-4087)
				if (selection && jQuery.inArray(elem, selection) > -1) {
					if (ignored) {
						ignored.push(elem);
					}
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		}

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			// Support: Android 4.0 - 4.3 only
			// Check state lost if the name is set (#11217)
			// Support: Windows Web Apps (WWA)
			// `name` and `type` must use .setAttribute for WWA (#14901)
			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			// Support: Android <=4.1 only
			// Older WebKit doesn't clone checked state correctly in fragments
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			// Support: IE <=11 only
			// Make sure textarea (and checkbox) defaultValue is properly cloned
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var documentElement = document.documentElement;

		var rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

		function returnTrue() {
			return true;
		}

		function returnFalse() {
			return false;
		}

		// Support: IE <=9 only
		// See #13393 for more info
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}

		function on(elem, types, selector, data, fn, one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if (typeof types === "object") {

				// ( types-Object, selector, data )
				if (typeof selector !== "string") {

					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					on(elem, type, selector, data, types[type], one);
				}
				return elem;
			}

			if (data == null && fn == null) {

				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {

					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {

					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return elem;
			}

			if (one === 1) {
				origFn = fn;
				fn = function (event) {

					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};

				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return elem.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		}

		/*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
		jQuery.event = {

			global: {},

			add: function (elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.get(elem);

				// Don't attach events to noData or text/comment nodes (but allow plain objects)
				if (!elemData) {
					return;
				}

				// Caller can pass in an object of custom data in lieu of the handler
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				// Ensure that invalid selectors throw exceptions at attach time
				// Evaluate against documentElement in case elem is a non-element node (e.g., document)
				if (selector) {
					jQuery.find.matchesSelector(documentElement, selector);
				}

				// Make sure that the handler has a unique ID, used to find/remove it later
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				// Init the element's event structure and main handler, if this is the first
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {

						// Discard the second event of a jQuery.event.trigger() and
						// when an event is called after a page has unloaded
						return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				// Handle multiple events separated by a space
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// There *must* be a type, no attaching namespace-only handlers
					if (!type) {
						continue;
					}

					// If event changes its type, use the special event handlers for the changed type
					special = jQuery.event.special[type] || {};

					// If selector defined, determine special event api type, otherwise given type
					type = (selector ? special.delegateType : special.bindType) || type;

					// Update special based on newly reset type
					special = jQuery.event.special[type] || {};

					// handleObj is passed to all event handlers
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					// Init the event handler queue if we're the first
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						// Only use addEventListener if the special events handler returns false
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					// Add to the element's handler list, delegates in front
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					// Keep track of which events have ever been used, for event optimization
					jQuery.event.global[type] = true;
				}
			},

			// Detach an event or set of events from an element
			remove: function (elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				// Once for each type.namespace in types; type may be omitted
				types = (types || "").match(rnothtmlwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					// Unbind all events (on this namespace, if provided) for the element
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					// Remove matching events
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					// Remove generic event handler if we removed something and no more handlers exist
					// (avoids potential for endless recursion during removal of special event handlers)
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				// Remove data and the expando if it's no longer used
				if (jQuery.isEmptyObject(events)) {
					dataPriv.remove(elem, "handle events");
				}
			},

			dispatch: function (nativeEvent) {

				// Make a writable jQuery.Event from the native event object
				var event = jQuery.event.fix(nativeEvent);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue,
				    args = new Array(arguments.length),
				    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				// Use the fix-ed jQuery.Event rather than the (read-only) native event
				args[0] = event;

				for (i = 1; i < arguments.length; i++) {
					args[i] = arguments[i];
				}

				event.delegateTarget = this;

				// Call the preDispatch hook for the mapped type, and let it bail if desired
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				// Determine handlers
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				// Run delegates first; they may want to stop propagation beneath us
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

						// Triggered event must either 1) have no namespace, or 2) have namespace(s)
						// a subset or equal to those in the bound event (both can have no namespace).
						if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				// Call the postDispatch hook for the mapped type
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function (event, handlers) {
				var i,
				    handleObj,
				    sel,
				    matchedHandlers,
				    matchedSelectors,
				    handlerQueue = [],
				    delegateCount = handlers.delegateCount,
				    cur = event.target;

				// Find delegate handlers
				if (delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!(event.type === "click" && event.button >= 1)) {

					for (; cur !== this; cur = cur.parentNode || this) {

						// Don't check non-elements (#13208)
						// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
						if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
							matchedHandlers = [];
							matchedSelectors = {};
							for (i = 0; i < delegateCount; i++) {
								handleObj = handlers[i];

								// Don't conflict with Object.prototype properties (#13203)
								sel = handleObj.selector + " ";

								if (matchedSelectors[sel] === undefined) {
									matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matchedSelectors[sel]) {
									matchedHandlers.push(handleObj);
								}
							}
							if (matchedHandlers.length) {
								handlerQueue.push({ elem: cur, handlers: matchedHandlers });
							}
						}
					}
				}

				// Add the remaining (directly-bound) handlers
				cur = this;
				if (delegateCount < handlers.length) {
					handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			addProp: function (name, hook) {
				Object.defineProperty(jQuery.Event.prototype, name, {
					enumerable: true,
					configurable: true,

					get: jQuery.isFunction(hook) ? function () {
						if (this.originalEvent) {
							return hook(this.originalEvent);
						}
					} : function () {
						if (this.originalEvent) {
							return this.originalEvent[name];
						}
					},

					set: function (value) {
						Object.defineProperty(this, name, {
							enumerable: true,
							configurable: true,
							writable: true,
							value: value
						});
					}
				});
			},

			fix: function (originalEvent) {
				return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
			},

			special: {
				load: {

					// Prevent triggered image.load events from bubbling to window.load
					noBubble: true
				},
				focus: {

					// Fire native event if possible so blur/focus sequence is correct
					trigger: function () {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {

					// For checkbox, fire native event so checked state will be right
					trigger: function () {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					// For cross-browser consistency, don't fire native .click() on links
					_default: function (event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function (event) {

						// Support: Firefox 20+
						// Firefox doesn't alert if the returnValue field is not set.
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {

			// This "if" is needed for plain objects
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle);
			}
		};

		jQuery.Event = function (src, props) {

			// Allow instantiation without the 'new' keyword
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			// Event object
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				// Events bubbling up the document may have been marked as prevented
				// by a handler lower down the tree; reflect the correct value.
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ? returnTrue : returnFalse;

				// Create target properties
				// Support: Safari <=6 - 7 only
				// Target should not be a text node (#504, #13143)
				this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

				this.currentTarget = src.currentTarget;
				this.relatedTarget = src.relatedTarget;

				// Event type
			} else {
				this.type = src;
			}

			// Put explicitly provided properties onto the event object
			if (props) {
				jQuery.extend(this, props);
			}

			// Create a timestamp if incoming event doesn't have one
			this.timeStamp = src && src.timeStamp || jQuery.now();

			// Mark it as fixed
			this[jQuery.expando] = true;
		};

		// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
		// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
		jQuery.Event.prototype = {
			constructor: jQuery.Event,
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
			isSimulated: false,

			preventDefault: function () {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && !this.isSimulated) {
					e.preventDefault();
				}
			},
			stopPropagation: function () {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && !this.isSimulated) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		// Includes all common event props including KeyEvent and MouseEvent specific props
		jQuery.each({
			altKey: true,
			bubbles: true,
			cancelable: true,
			changedTouches: true,
			ctrlKey: true,
			detail: true,
			eventPhase: true,
			metaKey: true,
			pageX: true,
			pageY: true,
			shiftKey: true,
			view: true,
			"char": true,
			charCode: true,
			key: true,
			keyCode: true,
			button: true,
			buttons: true,
			clientX: true,
			clientY: true,
			offsetX: true,
			offsetY: true,
			pointerId: true,
			pointerType: true,
			screenX: true,
			screenY: true,
			targetTouches: true,
			toElement: true,
			touches: true,

			which: function (event) {
				var button = event.button;

				// Add which for key events
				if (event.which == null && rkeyEvent.test(event.type)) {
					return event.charCode != null ? event.charCode : event.keyCode;
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
					if (button & 1) {
						return 1;
					}

					if (button & 2) {
						return 3;
					}

					if (button & 4) {
						return 2;
					}

					return 0;
				}

				return event.which;
			}
		}, jQuery.event.addProp);

		// Create mouseenter/leave events using mouseover/out and event-time checks
		// so that event delegation works in jQuery.
		// Do the same for pointerenter/pointerleave and pointerover/pointerout
		//
		// Support: Safari 7 only
		// Safari sends mouseenter too often; see:
		// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
		// for the description of the bug (it existed in older Chrome versions as well).
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function (event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					// For mouseenter/leave call the handler if related is outside the target.
					// NB: No relatedTarget if the mouse left/entered the browser window
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		jQuery.fn.extend({

			on: function (types, selector, data, fn) {
				return on(this, types, selector, data, fn);
			},
			one: function (types, selector, data, fn) {
				return on(this, types, selector, data, fn, 1);
			},
			off: function (types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {

					// ( event )  dispatched jQuery.Event
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if (typeof types === "object") {

					// ( types-object [, selector] )
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {

					// ( types [, fn] )
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			}
		});

		var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,


		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function manipulationTarget(elem, content) {
			if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

				return elem.getElementsByTagName("tbody")[0] || elem;
			}

			return elem;
		}

		// Replace/restore the type attribute of script elements for safe DOM manipulation
		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			// 1. Copy private data: events, handlers, etc.
			if (dataPriv.hasData(src)) {
				pdataOld = dataPriv.access(src);
				pdataCur = dataPriv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			// 2. Copy user data
			if (dataUser.hasData(src)) {
				udataOld = dataUser.access(src);
				udataCur = jQuery.extend({}, udataOld);

				dataUser.set(dest, udataCur);
			}
		}

		// Fix IE bugs, see support tests
		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			// Fails to persist the checked state of a cloned checkbox or radio button.
			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;

				// Fails to return the selected option to the default selected state when cloning options
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		function domManip(collection, args, callback, ignored) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = collection.length,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return collection.each(function (index) {
					var self = collection.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					domManip(self, args, callback, ignored);
				});
			}

			if (l) {
				fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				// Require either new content or an interest in ignored elements to invoke the callback
				if (first || ignored) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item
					// instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {

								// Support: Android <=4.0 only, PhantomJS 1 only
								// push.apply(_, arraylike) throws on ancient WebKit
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(collection[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {

									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									DOMEval(node.textContent.replace(rcleanScript, ""), doc);
								}
							}
						}
					}
				}
			}

			return collection;
		}

		function remove(elem, selector, keepData) {
			var node,
			    nodes = selector ? jQuery.filter(selector, elem) : elem,
			    i = 0;

			for (; (node = nodes[i]) != null; i++) {
				if (!keepData && node.nodeType === 1) {
					jQuery.cleanData(getAll(node));
				}

				if (node.parentNode) {
					if (keepData && jQuery.contains(node.ownerDocument, node)) {
						setGlobalEval(getAll(node, "script"));
					}
					node.parentNode.removeChild(node);
				}
			}

			return elem;
		}

		jQuery.extend({
			htmlPrefilter: function (html) {
				return html.replace(rxhtmlTag, "<$1></$2>");
			},

			clone: function (elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				// Fix IE cloning issues
				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

					// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				// Copy the events from the original to the clone
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				// Preserve script evaluation history
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				// Return the cloned set
				return clone;
			},

			cleanData: function (elems) {
				var data,
				    elem,
				    type,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (acceptData(elem)) {
						if (data = elem[dataPriv.expando]) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);

										// This is a shortcut to avoid jQuery.event.remove's overhead
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataPriv.expando] = undefined;
						}
						if (elem[dataUser.expando]) {

							// Support: Chrome <=35 - 45+
							// Assign undefined instead of using delete, see Data#remove
							elem[dataUser.expando] = undefined;
						}
					}
				}
			}
		});

		jQuery.fn.extend({
			detach: function (selector) {
				return remove(this, selector, true);
			},

			remove: function (selector) {
				return remove(this, selector);
			},

			text: function (value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function () {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function () {
				return domManip(this, arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function () {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function () {
				return domManip(this, arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			empty: function () {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {

						// Prevent memory leaks
						jQuery.cleanData(getAll(elem, false));

						// Remove any remaining nodes
						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function (dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function (value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					// See if we can take a shortcut and just use innerHTML
					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = jQuery.htmlPrefilter(value);

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								// Remove element nodes and prevent memory leaks
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;

							// If using innerHTML throws an exception, use the fallback method
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function () {
				var ignored = [];

				// Make the changes, replacing each non-ignored context element with the new content
				return domManip(this, arguments, function (elem) {
					var parent = this.parentNode;

					if (jQuery.inArray(this, ignored) < 0) {
						jQuery.cleanData(getAll(this));
						if (parent) {
							parent.replaceChild(elem, this);
						}
					}

					// Force callback invocation
				}, ignored);
			}
		});

		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					// Support: Android <=4.0 only, PhantomJS 1 only
					// .get() because push.apply(_, arraylike) throws on ancient WebKit
					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function (elem) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if (!view || !view.opener) {
				view = window;
			}

			return view.getComputedStyle(elem);
		};

		(function () {

			// Executing both pixelPosition & boxSizingReliable tests require only one layout
			// so they're executed at the same time to save the second computation.
			function computeStyleTests() {

				// This is a singleton, we need to execute it only once
				if (!div) {
					return;
				}

				div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
				div.innerHTML = "";
				documentElement.appendChild(container);

				var divStyle = window.getComputedStyle(div);
				pixelPositionVal = divStyle.top !== "1%";

				// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
				reliableMarginLeftVal = divStyle.marginLeft === "2px";
				boxSizingReliableVal = divStyle.width === "4px";

				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = divStyle.marginRight === "4px";

				documentElement.removeChild(container);

				// Nullify the div so it wouldn't be stored in the memory and
				// it will also be a sign that checks already performed
				div = null;
			}

			var pixelPositionVal,
			    boxSizingReliableVal,
			    pixelMarginRightVal,
			    reliableMarginLeftVal,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			// Finish early in limited (non-browser) environments
			if (!div.style) {
				return;
			}

			// Support: IE <=9 - 11 only
			// Style of cloned element affects source element cloned (#8908)
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
			container.appendChild(div);

			jQuery.extend(support, {
				pixelPosition: function () {
					computeStyleTests();
					return pixelPositionVal;
				},
				boxSizingReliable: function () {
					computeStyleTests();
					return boxSizingReliableVal;
				},
				pixelMarginRight: function () {
					computeStyleTests();
					return pixelMarginRightVal;
				},
				reliableMarginLeft: function () {
					computeStyleTests();
					return reliableMarginLeftVal;
				}
			});
		})();

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			// Support: IE <=9 only
			// getPropertyValue is only needed for .css('filter') (#12537)
			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				// A tribute to the "awesome hack by Dean Edwards"
				// Android Browser returns percentage for some values,
				// but width seems to be reliably pixels.
				// This is against the CSSOM draft spec:
				// https://drafts.csswg.org/cssom/#resolved-values
				if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {

			// Define the hook, we'll check on the first run if it's really needed.
			return {
				get: function () {
					if (conditionFn()) {

						// Hook not needed (or it's not possible to use it due
						// to missing dependency), remove it.
						delete this.get;
						return;
					}

					// Hook needed; redefine it so that the support test is not executed again.
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "Moz", "ms"],
		    emptyStyle = document.createElement("div").style;

		// Return a css property mapped to a potentially vendor prefixed property
		function vendorPropName(name) {

			// Shortcut for names that are not vendor prefixed
			if (name in emptyStyle) {
				return name;
			}

			// Check for vendor prefixed names
			var capName = name[0].toUpperCase() + name.slice(1),
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in emptyStyle) {
					return name;
				}
			}
		}

		function setPositiveNumber(elem, value, subtract) {

			// Any relative (+/-) values have already been
			// normalized at this point
			var matches = rcssNum.exec(value);
			return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i,
			    val = 0;

			// If we already have the right measurement, avoid augmentation
			if (extra === (isBorderBox ? "border" : "content")) {
				i = 4;

				// Otherwise initialize for horizontal or vertical properties
			} else {
				i = name === "width" ? 1 : 0;
			}

			for (; i < 4; i += 2) {

				// Both box models exclude margin, so add it if we want it
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {

					// border-box includes padding, so remove it if we want content
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					// At this point, extra isn't border nor margin, so remove border
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {

					// At this point, extra isn't content, so add padding
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					// At this point, extra isn't content nor padding, so add border
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {

			// Start with offset property, which is equivalent to the border-box value
			var val,
			    valueIsBorderBox = true,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			// Support: IE <=11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if (elem.getClientRects().length) {
				val = elem.getBoundingClientRect()[name];
			}

			// Some non-html elements return undefined for offsetWidth, so check for null/undefined
			// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
			// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
			if (val <= 0 || val == null) {

				// Fall back to computed then uncomputed css if necessary
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				// Computed unit is not pixels. Stop here and return.
				if (rnumnonpx.test(val)) {
					return val;
				}

				// Check for style in case a browser which returns unreliable values
				// for getComputedStyle silently falls back to the reliable elem.style
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				// Normalize "", auto, and prepare for extra
				val = parseFloat(val) || 0;
			}

			// Use the active box-sizing model to add/subtract irrelevant styles
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		jQuery.extend({

			// Add in style property hooks for overriding the default
			// behavior of getting and setting a style property
			cssHooks: {
				opacity: {
					get: function (elem, computed) {
						if (computed) {

							// We should always get a number back from opacity
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

			// Don't automatically add "px" to these possibly-unitless properties
			cssNumber: {
				"animationIterationCount": true,
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},

			// Add in properties whose names you wish to fix before
			// setting or getting the value
			cssProps: {
				"float": "cssFloat"
			},

			// Get and set the style property on a DOM Node
			style: function (elem, name, value, extra) {

				// Don't set styles on text and comment nodes
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				// Make sure that we're working with the right name
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Gets hook for the prefixed version, then unprefixed version
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// Check if we're setting a value
				if (value !== undefined) {
					type = typeof value;

					// Convert "+=" or "-=" to relative numbers (#7345)
					if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
						value = adjustCSS(elem, name, ret);

						// Fixes bug #9237
						type = "number";
					}

					// Make sure that null and NaN values aren't set (#7116)
					if (value == null || value !== value) {
						return;
					}

					// If a number was passed in, add the unit (except for certain CSS properties)
					if (type === "number") {
						value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
					}

					// background-* props affect original clone's values
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					// If a hook was provided, use that value, otherwise just set the specified value
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

						style[name] = value;
					}
				} else {

					// If a hook was provided get the non-computed value from there
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

						return ret;
					}

					// Otherwise just get the value from the style object
					return style[name];
				}
			},

			css: function (elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				// Make sure that we're working with the right name
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

				// Try prefixed name followed by the unprefixed name
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				// If a hook was provided get the computed value from there
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				// Otherwise, if a way to get the computed value exists, use that
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				// Convert "normal" to computed value
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				// Make numeric if forced or a qualifier was provided and val looks numeric
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || isFinite(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function (elem, computed, extra) {
					if (computed) {

						// Certain elements can have dimension info if we invisibly show them
						// but it must have a current display style that would benefit
						return rdisplayswap.test(jQuery.css(elem, "display")) && (

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function (elem, value, extra) {
					var matches,
					    styles = extra && getStyles(elem),
					    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

					// Convert to pixels if value adjustment is needed
					if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

						elem.style[name] = value;
						value = jQuery.css(elem, name);
					}

					return setPositiveNumber(elem, value, subtract);
				}
			};
		});

		jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
			if (computed) {
				return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
					return elem.getBoundingClientRect().left;
				})) + "px";
			}
		});

		// These hooks are used by animate to expand properties
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function (value) {
					var i = 0,
					    expanded = {},


					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function (name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function (elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || jQuery.easing._default;
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function () {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function (percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function (tween) {
					var result;

					// Use a property on the element directly when it is not a DOM element,
					// or when there is no matching style property that exists.
					if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
						return tween.elem[tween.prop];
					}

					// Passing an empty string as a 3rd parameter to .css will automatically
					// attempt a parseFloat and fallback to a string if the parse fails.
					// Simple values such as "10px" are parsed to Float;
					// complex values such as "rotate(1rad)" are returned as-is.
					result = jQuery.css(tween.elem, tween.prop, "");

					// Empty strings, null, undefined and "auto" are converted to 0.
					return !result || result === "auto" ? 0 : result;
				},
				set: function (tween) {

					// Use step hook for back compat.
					// Use cssHook if its there.
					// Use .style if available and use plain properties where available.
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		// Support: IE <=9 only
		// Panic based approach to setting things on disconnected nodes
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function (tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function (p) {
				return p;
			},
			swing: function (p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			},
			_default: "swing"
		};

		jQuery.fx = Tween.prototype.init;

		// Back compat <1.8 extension point
		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rrun = /queueHooks$/;

		function raf() {
			if (timerId) {
				window.requestAnimationFrame(raf);
				jQuery.fx.tick();
			}
		}

		// Animations created synchronously will run synchronously
		function createFxNow() {
			window.setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		// Generate parameters to create a standard animation
		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			// If we include width, step value is 1 to do all cssExpand values,
			// otherwise step value is 2 to skip over Left and Right
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {

					// We're done with this property
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    hooks,
			    oldfire,
			    propTween,
			    restoreDisplay,
			    display,
			    isBox = "width" in props || "height" in props,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHiddenWithinTree(elem),
			    dataShow = dataPriv.get(elem, "fxshow");

			// Queue-skipping animations hijack the fx hooks
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {

					// Ensure the complete handler is called before this completes
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			// Detect show/hide animations
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.test(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {

						// Pretend to be hidden if this is a "show" and
						// there is still data from a stopped show/hide
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;

							// Ignore all other no-op show/hide data
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				}
			}

			// Bail out if this is a no-op like .hide().hide()
			propTween = !jQuery.isEmptyObject(props);
			if (!propTween && jQuery.isEmptyObject(orig)) {
				return;
			}

			// Restrict "overflow" and "display" styles during box animations
			if (isBox && elem.nodeType === 1) {

				// Support: IE <=9 - 11, Edge 12 - 13
				// Record all 3 overflow attributes because IE does not infer the shorthand
				// from identically-valued overflowX and overflowY
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				// Identify a display type, preferring old show/hide data over the CSS cascade
				restoreDisplay = dataShow && dataShow.display;
				if (restoreDisplay == null) {
					restoreDisplay = dataPriv.get(elem, "display");
				}
				display = jQuery.css(elem, "display");
				if (display === "none") {
					if (restoreDisplay) {
						display = restoreDisplay;
					} else {

						// Get nonempty value(s) by temporarily forcing visibility
						showHide([elem], true);
						restoreDisplay = elem.style.display || restoreDisplay;
						display = jQuery.css(elem, "display");
						showHide([elem]);
					}
				}

				// Animate inline elements as inline-block
				if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
					if (jQuery.css(elem, "float") === "none") {

						// Restore the original display value at the end of pure show/hide animations
						if (!propTween) {
							anim.done(function () {
								style.display = restoreDisplay;
							});
							if (restoreDisplay == null) {
								display = style.display;
								restoreDisplay = display === "none" ? "" : display;
							}
						}
						style.display = "inline-block";
					}
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			// Implement show/hide animations
			propTween = false;
			for (prop in orig) {

				// General show/hide setup for this element animation
				if (!propTween) {
					if (dataShow) {
						if ("hidden" in dataShow) {
							hidden = dataShow.hidden;
						}
					} else {
						dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
					}

					// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
					if (toggle) {
						dataShow.hidden = !hidden;
					}

					// Show elements before animating them
					if (hidden) {
						showHide([elem], true);
					}

					/* eslint-disable no-loop-func */

					anim.done(function () {

						/* eslint-enable no-loop-func */

						// The final step of a "hide" animation is actually hiding the element
						if (!hidden) {
							showHide([elem]);
						}
						dataPriv.remove(elem, "fxshow");
						for (prop in orig) {
							jQuery.style(elem, prop, orig[prop]);
						}
					});
				}

				// Per-property setup
				propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
				if (!(prop in dataShow)) {
					dataShow[prop] = propTween.start;
					if (hidden) {
						propTween.end = propTween.start;
						propTween.start = 0;
					}
				}
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			// camelCase, specialEasing and expand cssHook pass
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					// Not quite $.extend, this won't overwrite existing keys.
					// Reusing 'index' because we have the correct "name"
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = Animation.prefilters.length,
			    deferred = jQuery.Deferred().always(function () {

				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			    tick = function () {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function (prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function (gotoEnd) {
					var index = 0,


					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					// Resolve when we played the last frame; otherwise, reject
					if (gotoEnd) {
						deferred.notifyWith(elem, [animation, 1, 0]);
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					if (jQuery.isFunction(result.stop)) {
						jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
					}
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			// attach callbacks from options
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweeners: {
				"*": [function (prop, value) {
					var tween = this.createTween(prop, value);
					adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
					return tween;
				}]
			},

			tweener: function (props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.match(rnothtmlwhite);
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					Animation.tweeners[prop] = Animation.tweeners[prop] || [];
					Animation.tweeners[prop].unshift(callback);
				}
			},

			prefilters: [defaultPrefilter],

			prefilter: function (callback, prepend) {
				if (prepend) {
					Animation.prefilters.unshift(callback);
				} else {
					Animation.prefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			// Go to the end state if fx are off or if document is hidden
			if (jQuery.fx.off || document.hidden) {
				opt.duration = 0;
			} else {
				if (typeof opt.duration !== "number") {
					if (opt.duration in jQuery.fx.speeds) {
						opt.duration = jQuery.fx.speeds[opt.duration];
					} else {
						opt.duration = jQuery.fx.speeds._default;
					}
				}
			}

			// Normalize opt.queue - true/undefined/null -> "fx"
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			// Queueing
			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function (speed, to, easing, callback) {

				// Show any hidden elements after setting opacity to 0
				return this.filter(isHiddenWithinTree).css("opacity", 0).show()

				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function (prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function () {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					// Empty animations, or finishing resolves immediately
					if (empty || dataPriv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function (type, clearQueue, gotoEnd) {
				var stopQueue = function (hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = dataPriv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					// Start the next in the queue if the last step wasn't forced.
					// Timers currently will call their complete callbacks, which
					// will dequeue but only if they were gotoEnd.
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function (type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = dataPriv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					// Enable finishing flag on private data
					data.finish = true;

					// Empty the queue first
					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					// Look for any active animations, and finish them
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					// Look for any animations in the old queue and finish them
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					// Turn off finishing flag
					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		// Generate shortcuts for custom animations
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				// Checks the timer has not already been removed
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			if (window.cancelAnimationFrame) {
				window.cancelAnimationFrame(timerId);
			} else {
				window.clearInterval(timerId);
			}

			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			// Default speed
			_default: 400
		};

		// Based off of the plugin by Clint Helfers, with permission.
		// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = window.setTimeout(next, time);
				hooks.stop = function () {
					window.clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			// Support: Android <=4.3 only
			// Default value for a checkbox should be "on"
			support.checkOn = input.value !== "";

			// Support: IE <=11 only
			// Must access selectedIndex to make default options select
			support.optSelected = opt.selected;

			// Support: IE <=11 only
			// An input loses its value after becoming a radio
			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function (name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function (name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function (elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set attributes on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				// Fallback to prop when attributes are not supported
				if (typeof elem.getAttribute === "undefined") {
					return jQuery.prop(elem, name, value);
				}

				// Attribute hooks are determined by the lowercase version
				// Grab necessary hook if one is defined
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
				}

				if (value !== undefined) {
					if (value === null) {
						jQuery.removeAttr(elem, name);
						return;
					}

					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					elem.setAttribute(name, value + "");
					return value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			},

			attrHooks: {
				type: {
					set: function (elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			},

			removeAttr: function (elem, value) {
				var name,
				    i = 0,


				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match(rnothtmlwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						elem.removeAttribute(name);
					}
				}
			}
		});

		// Hooks for boolean attributes
		boolHook = {
			set: function (elem, value, name) {
				if (value === false) {

					// Remove boolean attributes when set to false
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};

		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret,
				    handle,
				    lowercaseName = name.toLowerCase();

				if (!isXML) {

					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[lowercaseName];
					attrHandle[lowercaseName] = ret;
					ret = getter(elem, name, isXML) != null ? lowercaseName : null;
					attrHandle[lowercaseName] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i,
		    rclickable = /^(?:a|area)$/i;

		jQuery.fn.extend({
			prop: function (name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function (name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			prop: function (elem, name, value) {
				var ret,
				    hooks,
				    nType = elem.nodeType;

				// Don't get/set properties on text, comment and attribute nodes
				if (nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

					// Fix name and attach hooks
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					}

					return elem[name] = value;
				}

				if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				}

				return elem[name];
			},

			propHooks: {
				tabIndex: {
					get: function (elem) {

						// Support: IE <=9 - 11 only
						// elem.tabIndex doesn't always return the
						// correct value when it hasn't been explicitly set
						// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
						// Use proper attribute retrieval(#12072)
						var tabindex = jQuery.find.attr(elem, "tabindex");

						if (tabindex) {
							return parseInt(tabindex, 10);
						}

						if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
							return 0;
						}

						return -1;
					}
				}
			},

			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		});

		// Support: IE <=11 only
		// Accessing the selectedIndex property
		// forces the browser to respect setting selected
		// on the option
		// The getter ensures a default option is selected
		// when in an optgroup
		// eslint rule "no-unused-expressions" is disabled for this code
		// since it considers such accessions noop
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function (elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				},
				set: function (elem) {

					/* eslint no-unused-expressions: "off" */

					var parent = elem.parentNode;
					if (parent) {
						parent.selectedIndex;

						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse(value) {
			var tokens = value.match(rnothtmlwhite) || [];
			return tokens.join(" ");
		}

		function getClass(elem) {
			return elem.getAttribute && elem.getAttribute("class") || "";
		}

		jQuery.fn.extend({
			addClass: function (value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, getClass(this)));
					});
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			removeClass: function (value) {
				var classes,
				    elem,
				    cur,
				    curValue,
				    clazz,
				    j,
				    finalValue,
				    i = 0;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, getClass(this)));
					});
				}

				if (!arguments.length) {
					return this.attr("class", "");
				}

				if (typeof value === "string" && value) {
					classes = value.match(rnothtmlwhite) || [];

					while (elem = this[i++]) {
						curValue = getClass(elem);

						// This expression is here for better compressibility (see addClass)
						cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {

								// Remove *all* instances
								while (cur.indexOf(" " + clazz + " ") > -1) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							// Only assign if different to avoid unneeded rendering.
							finalValue = stripAndCollapse(cur);
							if (curValue !== finalValue) {
								elem.setAttribute("class", finalValue);
							}
						}
					}
				}

				return this;
			},

			toggleClass: function (value, stateVal) {
				var type = typeof value;

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
					});
				}

				return this.each(function () {
					var className, i, self, classNames;

					if (type === "string") {

						// Toggle individual class names
						i = 0;
						self = jQuery(this);
						classNames = value.match(rnothtmlwhite) || [];

						while (className = classNames[i++]) {

							// Check each className given, space separated list
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}

						// Toggle whole class name
					} else if (value === undefined || type === "boolean") {
						className = getClass(this);
						if (className) {

							// Store className if set
							dataPriv.set(this, "__className__", className);
						}

						// If the element has a class name or if we're passed `false`,
						// then remove the whole classname (if there was one, the above saved it).
						// Otherwise bring back whatever was previously saved (if anything),
						// falling back to the empty string if nothing was stored.
						if (this.setAttribute) {
							this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
						}
					}
				});
			},

			hasClass: function (selector) {
				var className,
				    elem,
				    i = 0;

				className = " " + selector + " ";
				while (elem = this[i++]) {
					if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function (value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						// Handle most common string cases
						if (typeof ret === "string") {
							return ret.replace(rreturn, "");
						}

						// Handle cases where value is null/undef or number
						return ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					// Treat null/undefined as ""; convert numbers to string
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					// If set returns undefined, fall back to normal setting
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function (elem) {

						var val = jQuery.find.attr(elem, "value");
						return val != null ? val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse(jQuery.text(elem));
					}
				},
				select: {
					get: function (elem) {
						var value,
						    option,
						    i,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one",
						    values = one ? null : [],
						    max = one ? index + 1 : options.length;

						if (index < 0) {
							i = max;
						} else {
							i = one ? index : 0;
						}

						// Loop through all the selected options
						for (; i < max; i++) {
							option = options[i];

							// Support: IE <=9 only
							// IE8-9 doesn't update selected after form reset (#2551)
							if ((option.selected || i === index) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

								// Get the specific value for the option
								value = jQuery(option).val();

								// We don't need an array for one selects
								if (one) {
									return value;
								}

								// Multi-Selects return an array
								values.push(value);
							}
						}

						return values;
					},

					set: function (elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];

							/* eslint-disable no-cond-assign */

							if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
								optionSet = true;
							}

							/* eslint-enable no-cond-assign */
						}

						// Force browsers to behave consistently when non-matching value is set
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		// Radios and checkboxes getter/setter
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function (elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		// Return jQuery for attributes-only inclusion


		var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

		jQuery.extend(jQuery.event, {

			trigger: function (event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				// Don't do events on text and comment nodes
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				// focus/blur morphs to focusin/out; ensure we're not firing them right now
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") > -1) {

					// Namespaced trigger; create a regexp to match event type in handle()
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				// Caller can pass in a jQuery.Event object, Object, or just an event type string
				event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

				// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				// Clean up the event in case it is being reused
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				// Clone any incoming data and prepend the event, creating the handler arg list
				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				// Allow special events to draw outside the lines
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				// Determine event propagation path in advance, per W3C events spec (#9951)
				// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					// Only add window if we got to document (e.g., not plain obj or detached DOM)
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				// Fire handlers on the event path
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					// jQuery handler
					handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					// Native handler
					handle = ontype && cur[ontype];
					if (handle && handle.apply && acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				// If nobody prevented the default action, do it now
				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

						// Call a native DOM method on the target with the same name as the event.
						// Don't do default actions on window, that's where global variables be (#6170)
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

							// Don't re-trigger an onFOO event when we call its FOO() method
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							// Prevent re-triggering of the same event, since we already bubbled it above
							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			// Piggyback on a donor event to simulate a different one
			// Used only for `focus(in | out)` events
			simulate: function (type, elem, event) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true
				});

				jQuery.event.trigger(e, null, elem);
			}

		});

		jQuery.fn.extend({

			trigger: function (type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function (type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

			// Handle event binding
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function (fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			}
		});

		support.focusin = "onfocusin" in window;

		// Support: Firefox <=44
		// Firefox doesn't have focus(in | out) events
		// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
		//
		// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
		// focus(in | out) events fire after focus & blur events,
		// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
		// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
		if (!support.focusin) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

				// Attach a single capturing handler on the document while someone wants focusin/focusout
				var handler = function (event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
				};

				jQuery.event.special[fix] = {
					setup: function () {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						dataPriv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function () {
						var doc = this.ownerDocument || this,
						    attaches = dataPriv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							dataPriv.remove(doc, fix);
						} else {
							dataPriv.access(doc, fix, attaches);
						}
					}
				};
			});
		}
		var location = window.location;

		var nonce = jQuery.now();

		var rquery = /\?/;

		// Cross-browser xml parsing
		jQuery.parseXML = function (data) {
			var xml;
			if (!data || typeof data !== "string") {
				return null;
			}

			// Support: IE 9 - 11 only
			// IE throws on parseFromString with invalid input.
			try {
				xml = new window.DOMParser().parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {

				// Serialize array item.
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {

						// Treat each array item as a scalar.
						add(prefix, v);
					} else {

						// Item is non-scalar (array or object), encode its numeric index.
						buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {

				// Serialize object item.
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {

				// Serialize scalar item.
				add(prefix, obj);
			}
		}

		// Serialize an array of form elements or a set of
		// key/values into a query string
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function (key, valueOrFunction) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
			};

			// If an array was passed in, assume that it is an array of form elements.
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

				// Serialize the form elements
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {

				// If traditional, encode the "old" way (the way 1.3.2 or older
				// did it), otherwise encode params recursively.
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			// Return the resulting serialization
			return s.join("&");
		};

		jQuery.fn.extend({
			serialize: function () {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {

					// Can add propHook for "elements" to filter or add form elements
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					// Use .is( ":disabled" ) so that fieldset[disabled] works
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					if (val == null) {
						return null;
					}

					if (jQuery.isArray(val)) {
						return jQuery.map(val, function (val) {
							return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
						});
					}

					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		var r20 = /%20/g,
		    rhash = /#.*$/,
		    rantiCache = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,


		/* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
		prefilters = {},


		/* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
		transports = {},


		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat("*"),


		// Anchor tag for parsing the document origin
		originAnchor = document.createElement("a");
		originAnchor.href = location.href;

		// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
		function addToPrefiltersOrTransports(structure) {

			// dataTypeExpression is optional and defaults to "*"
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

				if (jQuery.isFunction(func)) {

					// For each dataType in the dataTypeExpression
					while (dataType = dataTypes[i++]) {

						// Prepend if requested
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);

							// Otherwise append
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		// Base inspection function for prefilters and transports
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		// A special extend for ajax options
		// that takes "flat" options (not to be deep extended)
		// Fixes #9887
		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		/* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			// Remove auto dataType and get content-type in the process
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			// Check if we're dealing with a known content-type
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			// Check to see if we have a response for the expected dataType
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {

				// Try convertible dataTypes
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				// Or just use first one
				finalDataType = finalDataType || firstDataType;
			}

			// If we found a dataType
			// We add the dataType to the list if needed
			// and return the corresponding response
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		/* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},


			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

			// Create converters map with lowercased keys
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			// Convert to each sequential dataType
			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				// Apply the dataFilter if provided
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {

					// There's only work to do if current dataType is non-auto
					if (current === "*") {

						current = prev;

						// Convert response if prev dataType is non-auto and differs from current
					} else if (prev !== "*" && prev !== current) {

						// Seek a direct converter
						conv = converters[prev + " " + current] || converters["* " + current];

						// If none found, seek a pair
						if (!conv) {
							for (conv2 in converters) {

								// If conv2 outputs current
								tmp = conv2.split(" ");
								if (tmp[1] === current) {

									// If prev can be converted to accepted input
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {

										// Condense equivalence converters
										if (conv === true) {
											conv = converters[conv2];

											// Otherwise, insert the intermediate dataType
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						// Apply converter (if not an equivalence)
						if (conv !== true) {

							// Unless errors are allowed to bubble, catch and return them
							if (conv && s.throws) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return {
										state: "parsererror",
										error: conv ? e : "No conversion from " + prev + " to " + current
									};
								}
							}
						}
					}
				}
			}

			return { state: "success", data: response };
		}

		jQuery.extend({

			// Counter for holding the number of active queries
			active: 0,

			// Last-Modified header cache for next request
			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: location.href,
				type: "GET",
				isLocal: rlocalProtocol.test(location.protocol),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",

				/*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},

				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},

				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},

				// Data converters
				// Keys separate source (or catchall "*") and destination types with a single space
				converters: {

					// Convert anything to text
					"* text": String,

					// Text to html (true = no transformation)
					"text html": true,

					// Evaluate text as a json expression
					"text json": JSON.parse,

					// Parse text as xml
					"text xml": jQuery.parseXML
				},

				// For options that shouldn't be deep extended:
				// you can add your own custom options here if
				// and when you create one that shouldn't be
				// deep extended (see ajaxExtend)
				flatOptions: {
					url: true,
					context: true
				}
			},

			// Creates a full fledged settings object into target
			// with both ajaxSettings and settings fields.
			// If target is omitted, writes into ajaxSettings.
			ajaxSetup: function (target, settings) {
				return settings ?

				// Building a settings object
				ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

				// Extending ajaxSettings
				ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			// Main method
			ajax: function (url, options) {

				// If url is an object, simulate pre-1.5 signature
				if (typeof url === "object") {
					options = url;
					url = undefined;
				}

				// Force options to be an object
				options = options || {};

				var transport,


				// URL without anti-cache param
				cacheURL,


				// Response headers
				responseHeadersString,
				    responseHeaders,


				// timeout handle
				timeoutTimer,


				// Url cleanup var
				urlAnchor,


				// Request state (becomes false upon send and true upon completion)
				completed,


				// To know if global events are to be dispatched
				fireGlobals,


				// Loop variable
				i,


				// uncached part of the url
				uncached,


				// Create the final options object
				s = jQuery.ajaxSetup({}, options),


				// Callbacks context
				callbackContext = s.context || s,


				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


				// Deferreds
				deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),


				// Status-dependent callbacks
				statusCode = s.statusCode || {},


				// Headers (they are sent all at once)
				requestHeaders = {},
				    requestHeadersNames = {},


				// Default abort message
				strAbort = "canceled",


				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function (key) {
						var match;
						if (completed) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function () {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function (name, value) {
						if (completed == null) {
							name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function (type) {
						if (completed == null) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function (map) {
						var code;
						if (map) {
							if (completed) {

								// Execute the appropriate callbacks
								jqXHR.always(map[jqXHR.status]);
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for (code in map) {
									statusCode[code] = [statusCode[code], map[code]];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function (statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				// Attach deferreds
				deferred.promise(jqXHR);

				// Add protocol if not provided (prefilters might expect it)
				// Handle falsy url in the settings object (#10093: consistency with old signature)
				// We also use the url parameter if available
				s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

				// Alias method option to type as per ticket #12004
				s.type = options.method || options.type || s.method || s.type;

				// Extract dataTypes list
				s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

				// A cross-domain request is in order when the origin doesn't match the current origin.
				if (s.crossDomain == null) {
					urlAnchor = document.createElement("a");

					// Support: IE <=8 - 11, Edge 12 - 13
					// IE throws exception on accessing the href property if url is malformed,
					// e.g. http://example.com:80x/
					try {
						urlAnchor.href = s.url;

						// Support: IE <=8 - 11 only
						// Anchor's host property isn't correctly set when s.url is relative
						urlAnchor.href = urlAnchor.href;
						s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
					} catch (e) {

						// If there is an error parsing the URL, assume it is crossDomain,
						// it can be rejected by the transport if it is invalid
						s.crossDomain = true;
					}
				}

				// Convert data if not already a string
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				// Apply prefilters
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				// If request was aborted inside a prefilter, stop there
				if (completed) {
					return jqXHR;
				}

				// We can fire global events as of now if asked to
				// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
				fireGlobals = jQuery.event && s.global;

				// Watch for a new set of requests
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				// Uppercase the type
				s.type = s.type.toUpperCase();

				// Determine if request has content
				s.hasContent = !rnoContent.test(s.type);

				// Save the URL in case we're toying with the If-Modified-Since
				// and/or If-None-Match header later on
				// Remove hash to simplify url manipulation
				cacheURL = s.url.replace(rhash, "");

				// More options handling for requests with no content
				if (!s.hasContent) {

					// Remember the hash so we can put it back
					uncached = s.url.slice(cacheURL.length);

					// If data is available, append data to url
					if (s.data) {
						cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						// #9682: remove data so that it's not used in an eventual retry
						delete s.data;
					}

					// Add or update anti-cache param if needed
					if (s.cache === false) {
						cacheURL = cacheURL.replace(rantiCache, "$1");
						uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
					}

					// Put hash and anti-cache on the URL that will be requested (gh-1732)
					s.url = cacheURL + uncached;

					// Change '%20' to '+' if this is encoded form body content (gh-2658)
				} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
					s.data = s.data.replace(r20, "+");
				}

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				// Set the correct header, if data is being sent
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				// Set the Accepts header for the server, depending on the dataType
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				// Check for headers option
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				// Allow custom headers/mimetypes and early abort
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

					// Abort if not done already and return
					return jqXHR.abort();
				}

				// Aborting is no longer a cancellation
				strAbort = "abort";

				// Install callbacks on deferreds
				completeDeferred.add(s.complete);
				jqXHR.done(s.success);
				jqXHR.fail(s.error);

				// Get transport
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				// If no transport, we auto-abort
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					// Send global event
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					// If request was aborted inside ajaxSend, stop there
					if (completed) {
						return jqXHR;
					}

					// Timeout
					if (s.async && s.timeout > 0) {
						timeoutTimer = window.setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						completed = false;
						transport.send(requestHeaders, done);
					} catch (e) {

						// Rethrow post-completion exceptions
						if (completed) {
							throw e;
						}

						// Propagate others as results
						done(-1, e);
					}
				}

				// Callback for when everything is done
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					// Ignore repeat invocations
					if (completed) {
						return;
					}

					completed = true;

					// Clear timeout if it exists
					if (timeoutTimer) {
						window.clearTimeout(timeoutTimer);
					}

					// Dereference transport for early garbage collection
					// (no matter how long the jqXHR object will be used)
					transport = undefined;

					// Cache response headers
					responseHeadersString = headers || "";

					// Set readyState
					jqXHR.readyState = status > 0 ? 4 : 0;

					// Determine if successful
					isSuccess = status >= 200 && status < 300 || status === 304;

					// Get response data
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					// Convert no matter what (that way responseXXX fields are always set)
					response = ajaxConvert(s, response, jqXHR, isSuccess);

					// If successful, handle type chaining
					if (isSuccess) {

						// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						// if no content
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";

							// if not modified
						} else if (status === 304) {
							statusText = "notmodified";

							// If we have data, let's convert it
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {

						// Extract error from statusText and normalize for non-aborts
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					// Set data for the fake xhr object
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					// Success/Error
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					// Status-dependent callbacks
					jqXHR.statusCode(statusCode);
					statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					// Complete
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						// Handle the global AJAX counter
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function (url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function (url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {

				// Shift arguments if data argument was omitted
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}

				// The url can be an options object (which then must have .url)
				return jQuery.ajax(jQuery.extend({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				}, jQuery.isPlainObject(url) && url));
			};
		});

		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,

				// Make this explicit, since user can override this through ajaxSetup (#11264)
				type: "GET",
				dataType: "script",
				cache: true,
				async: false,
				global: false,
				"throws": true
			});
		};

		jQuery.fn.extend({
			wrapAll: function (html) {
				var wrap;

				if (this[0]) {
					if (jQuery.isFunction(html)) {
						html = html.call(this[0]);
					}

					// The elements to wrap the target around
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function (html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function (html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function (selector) {
				this.parent(selector).not("body").each(function () {
					jQuery(this).replaceWith(this.childNodes);
				});
				return this;
			}
		});

		jQuery.expr.pseudos.hidden = function (elem) {
			return !jQuery.expr.pseudos.visible(elem);
		};
		jQuery.expr.pseudos.visible = function (elem) {
			return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
		};

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		};

		var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var callback, errorCallback;

			// Cross domain only allowed if supported through XMLHttpRequest
			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function (headers, complete) {
						var i,
						    xhr = options.xhr();

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						// Apply custom fields if provided
						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						// Override mime type if needed
						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						// Set headers
						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						// Callback
						callback = function (type) {
							return function () {
								if (callback) {
									callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {

										// Support: IE <=9 only
										// On a manual native abort, IE9 throws
										// errors on any property access that is not readyState
										if (typeof xhr.status !== "number") {
											complete(0, "error");
										} else {
											complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status, xhr.statusText);
										}
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						// Listen to events
						xhr.onload = callback();
						errorCallback = xhr.onerror = callback("error");

						// Support: IE 9 only
						// Use onreadystatechange to replace onabort
						// to handle uncaught aborts
						if (xhr.onabort !== undefined) {
							xhr.onabort = errorCallback;
						} else {
							xhr.onreadystatechange = function () {

								// Check readyState before timeout as it changes
								if (xhr.readyState === 4) {

									// Allow onerror to be called first,
									// but that will not handle a native abort
									// Also, save errorCallback to a variable
									// as xhr.onerror cannot be accessed
									window.setTimeout(function () {
										if (callback) {
											errorCallback();
										}
									});
								}
							};
						}

						// Create the abort callback
						callback = callback("abort");

						try {

							// Do send the request (this may raise an exception)
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {

							// #14683: Only rethrow if this hasn't been notified as an error yet
							if (callback) {
								throw e;
							}
						}
					},

					abort: function () {
						if (callback) {
							callback();
						}
					}
				};
			}
		});

		// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
		jQuery.ajaxPrefilter(function (s) {
			if (s.crossDomain) {
				s.contents.script = false;
			}
		});

		// Install script dataType
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		// Handle cache's special case and crossDomain
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		// Bind script tag hack transport
		jQuery.ajaxTransport("script", function (s) {

			// This transport only deals with cross domain requests
			if (s.crossDomain) {
				var script, callback;
				return {
					send: function (_, complete) {
						script = jQuery("<script>").prop({
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", callback = function (evt) {
							script.remove();
							callback = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});

						// Use native DOM manipulation to avoid our domManip AJAX trickery
						document.head.appendChild(script[0]);
					},
					abort: function () {
						if (callback) {
							callback();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		// Default jsonp settings
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		// Detect, normalize options and install callbacks for jsonp requests
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

			// Handle iff the expected data type is "jsonp" or we have a parameter to set
			if (jsonProp || s.dataTypes[0] === "jsonp") {

				// Get callback name, remembering preexisting value associated with it
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				// Insert callback into url or form data
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				// Use data converter to retrieve json after script execution
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				// Force json dataType
				s.dataTypes[0] = "json";

				// Install callback
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				// Clean-up function (fires after converters)
				jqXHR.always(function () {

					// If previous value didn't exist - remove it
					if (overwritten === undefined) {
						jQuery(window).removeProp(callbackName);

						// Otherwise restore preexisting value
					} else {
						window[callbackName] = overwritten;
					}

					// Save back as free
					if (s[callbackName]) {

						// Make sure that re-using the options doesn't screw things around
						s.jsonpCallback = originalSettings.jsonpCallback;

						// Save the callback name for future use
						oldCallbacks.push(callbackName);
					}

					// Call if it was a function and we have a response
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				// Delegate to script
				return "script";
			}
		});

		// Support: Safari 8 only
		// In Safari 8 documents created via document.implementation.createHTMLDocument
		// collapse sibling forms: the second one becomes a child of the first one.
		// Because of that, this security measure has to be disabled in Safari 8.
		// https://bugs.webkit.org/show_bug.cgi?id=137337
		support.createHTMLDocument = function () {
			var body = document.implementation.createHTMLDocument("").body;
			body.innerHTML = "<form></form><form></form>";
			return body.childNodes.length === 2;
		}();

		// Argument "data" should be string of html
		// context (optional): If specified, the fragment will be created in this context,
		// defaults to document
		// keepScripts (optional): If true, will include scripts passed in the html string
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (typeof data !== "string") {
				return [];
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}

			var base, parsed, scripts;

			if (!context) {

				// Stop scripts or inline event handlers from being executed immediately
				// by using document.implementation
				if (support.createHTMLDocument) {
					context = document.implementation.createHTMLDocument("");

					// Set the base href for the created document
					// so any parsed elements with URLs
					// are based on the document's URL (gh-2965)
					base = context.createElement("base");
					base.href = document.location.href;
					context.head.appendChild(base);
				} else {
					context = document;
				}
			}

			parsed = rsingleTag.exec(data);
			scripts = !keepScripts && [];

			// Single tag
			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		/**
   * Load a url into a page
   */
		jQuery.fn.load = function (url, params, callback) {
			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off > -1) {
				selector = stripAndCollapse(url.slice(off));
				url = url.slice(0, off);
			}

			// If it's a function
			if (jQuery.isFunction(params)) {

				// We assume that it's the callback
				callback = params;
				params = undefined;

				// Otherwise, build a param string
			} else if (params && typeof params === "object") {
				type = "POST";
			}

			// If we have elements to modify, make the request
			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					// If "type" variable is undefined, then "GET" method will be used.
					// Make value of this field explicit since
					// user can override it through ajaxSetup method
					type: type || "GET",
					dataType: "html",
					data: params
				}).done(function (responseText) {

					// Save response for use in complete callback
					response = arguments;

					self.html(selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

					// Otherwise use the full result
					responseText);

					// If the request succeeds, this function gets "data", "status", "jqXHR"
					// but they are ignored because response was set above.
					// If it fails, this function gets "jqXHR", "status", "error"
				}).always(callback && function (jqXHR, status) {
					self.each(function () {
						callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
					});
				});
			}

			return this;
		};

		// Attach a bunch of functions for handling common AJAX events
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.pseudos.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		/**
   * Gets a window from an element
   */
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function (elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				// Set position first, in-case top/left are set even on static elem
				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				// Need to be able to calculate position if either
				// top or left is auto and position is either absolute or fixed
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {

					// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
					options = options.call(elem, i, jQuery.extend({}, curOffset));
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function (options) {

				// Preserve chaining for setter
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    rect,
				    doc,
				    elem = this[0];

				if (!elem) {
					return;
				}

				// Support: IE <=11 only
				// Running getBoundingClientRect on a
				// disconnected node in IE throws an error
				if (!elem.getClientRects().length) {
					return { top: 0, left: 0 };
				}

				rect = elem.getBoundingClientRect();

				// Make sure element is not hidden (display: none)
				if (rect.width || rect.height) {
					doc = elem.ownerDocument;
					win = getWindow(doc);
					docElem = doc.documentElement;

					return {
						top: rect.top + win.pageYOffset - docElem.clientTop,
						left: rect.left + win.pageXOffset - docElem.clientLeft
					};
				}

				// Return zeros for disconnected and hidden elements (gh-2310)
				return rect;
			},

			position: function () {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
				// because it is its only offset parent
				if (jQuery.css(elem, "position") === "fixed") {

					// Assume getBoundingClientRect is there when computed position is fixed
					offset = elem.getBoundingClientRect();
				} else {

					// Get *real* offsetParent
					offsetParent = this.offsetParent();

					// Get correct offsets
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					// Add offsetParent borders
					parentOffset = {
						top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
						left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
					};
				}

				// Subtract parent offsets and element margins
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			// This method will return documentElement in the following cases:
			// 1) For the element inside the iframe without offsetParent, this method will return
			//    documentElement of the parent window
			// 2) For the hidden or detached element
			// 3) For body or html element, i.e. in case of the html node - it will return itself
			//
			// but those exceptions were never presented as a real life use-cases
			// and might be considered as more preferable results.
			//
			// This logic, however, is not guaranteed and can change at any point in the future
			offsetParent: function () {
				return this.map(function () {
					var offsetParent = this.offsetParent;

					while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || documentElement;
				});
			}
		});

		// Create scrollLeft and scrollTop methods
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length);
			};
		});

		// Support: Safari <=7 - 9.1, Chrome <=37 - 49
		// Add the top/left cssHooks using jQuery.fn.position
		// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
		// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
		// getComputedStyle returns percent when specified for top/left/bottom/right;
		// rather than make the css module depend on the offset module, just check for it here
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

				// Margin is only for outerHeight, outerWidth
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {

							// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
							return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
						}

						// Get document width or height
						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
							// whichever is greatest
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css(elem, type, extra) :

						// Set width or height on the element
						jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable);
				};
			});
		});

		jQuery.fn.extend({

			bind: function (types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function (types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function (selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function (selector, types, fn) {

				// ( namespace ) or ( selector, types [, fn] )
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		jQuery.parseJSON = JSON.parse;

		// Register as a named AMD module, since jQuery can be concatenated with other
		// files that may use define, but not via a proper concatenation script that
		// understands anonymous AMD modules. A named AMD is safest and most robust
		// way to register. Lowercase jquery is used because AMD module names are
		// derived from file names, and jQuery is normally delivered in a lowercase
		// file name. Do this after creating the global so that if an AMD module wants
		// to call noConflict to hide this version of jQuery, it will work.

		// Note that for maximum portability, libraries that are not jQuery should
		// declare themselves as anonymous modules, and avoid setting a global if an
		// AMD loader is present. jQuery is a special case. For more information, see
		// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

		if (typeof undefined === "function" && undefined.amd) {
			undefined("jquery", [], function () {
				return jQuery;
			});
		}

		var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,


		// Map over the $ in case of overwrite
		_$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		// Expose jQuery and $ identifiers, even in AMD
		// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
		// and CommonJS for browser emulators (#13566)
		if (!noGlobal) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
});

window.$ = jquery;
window.jQuery = jquery;

// Automatically inject livereload code on a .dev domain
var host = location.host.split('.');
var tld = host[host.length - 1];
if (tld == 'dev') {
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
}

// Site specific imports

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIiwiLi4vLi4vLi4vc3JjL2pzL3BhcnRpYWxzL2pxdWVyeS1nbG9iYWwuanMiLCIuLi8uLi8uLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjMuMS4xXG4gKiBodHRwczovL2pxdWVyeS5jb20vXG4gKlxuICogSW5jbHVkZXMgU2l6emxlLmpzXG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTYtMDktMjJUMjI6MzBaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmRvY3VtZW50ID9cblx0XHRcdGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcblx0XHRcdGZ1bmN0aW9uKCB3ICkge1xuXHRcdFx0XHRpZiAoICF3LmRvY3VtZW50ICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFjdG9yeSggdyApO1xuXHRcdFx0fTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KCBnbG9iYWwgKTtcblx0fVxuXG4vLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxufSApKCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XG5cbi8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuLy8gdGhyb3cgZXhjZXB0aW9ucyB3aGVuIG5vbi1zdHJpY3QgY29kZSAoZS5nLiwgQVNQLk5FVCA0LjUpIGFjY2Vzc2VzIHN0cmljdCBtb2RlXG4vLyBhcmd1bWVudHMuY2FsbGVlLmNhbGxlciAodHJhYy0xMzMzNSkuIEJ1dCBhcyBvZiBqUXVlcnkgMy4wICgyMDE2KSwgc3RyaWN0IG1vZGUgc2hvdWxkIGJlIGNvbW1vblxuLy8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFyciA9IFtdO1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxudmFyIHNsaWNlID0gYXJyLnNsaWNlO1xuXG52YXIgY29uY2F0ID0gYXJyLmNvbmNhdDtcblxudmFyIHB1c2ggPSBhcnIucHVzaDtcblxudmFyIGluZGV4T2YgPSBhcnIuaW5kZXhPZjtcblxudmFyIGNsYXNzMnR5cGUgPSB7fTtcblxudmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxudmFyIGhhc093biA9IGNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBmblRvU3RyaW5nID0gaGFzT3duLnRvU3RyaW5nO1xuXG52YXIgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoIE9iamVjdCApO1xuXG52YXIgc3VwcG9ydCA9IHt9O1xuXG5cblxuXHRmdW5jdGlvbiBET01FdmFsKCBjb2RlLCBkb2MgKSB7XG5cdFx0ZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG5cdFx0dmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCBcInNjcmlwdFwiICk7XG5cblx0XHRzY3JpcHQudGV4dCA9IGNvZGU7XG5cdFx0ZG9jLmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdCApLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHNjcmlwdCApO1xuXHR9XG4vKiBnbG9iYWwgU3ltYm9sICovXG4vLyBEZWZpbmluZyB0aGlzIGdsb2JhbCBpbiAuZXNsaW50cmMuanNvbiB3b3VsZCBjcmVhdGUgYSBkYW5nZXIgb2YgdXNpbmcgdGhlIGdsb2JhbFxuLy8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGRlZmluZSBnbG9iYWwgb25seSBmb3IgdGhpcyBtb2R1bGVcblxuXG5cbnZhclxuXHR2ZXJzaW9uID0gXCIzLjEuMVwiLFxuXG5cdC8vIERlZmluZSBhIGxvY2FsIGNvcHkgb2YgalF1ZXJ5XG5cdGpRdWVyeSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblxuXHRcdC8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuXHRcdC8vIE5lZWQgaW5pdCBpZiBqUXVlcnkgaXMgY2FsbGVkIChqdXN0IGFsbG93IGVycm9yIHRvIGJlIHRocm93biBpZiBub3QgaW5jbHVkZWQpXG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdCggc2VsZWN0b3IsIGNvbnRleHQgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG5cdHJ0cmltID0gL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFxuXG5cdC8vIE1hdGNoZXMgZGFzaGVkIHN0cmluZyBmb3IgY2FtZWxpemluZ1xuXHRybXNQcmVmaXggPSAvXi1tcy0vLFxuXHRyZGFzaEFscGhhID0gLy0oW2Etel0pL2csXG5cblx0Ly8gVXNlZCBieSBqUXVlcnkuY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuXHRmY2FtZWxDYXNlID0gZnVuY3Rpb24oIGFsbCwgbGV0dGVyICkge1xuXHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0fTtcblxualF1ZXJ5LmZuID0galF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuXHQvLyBUaGUgY3VycmVudCB2ZXJzaW9uIG9mIGpRdWVyeSBiZWluZyB1c2VkXG5cdGpxdWVyeTogdmVyc2lvbixcblxuXHRjb25zdHJ1Y3RvcjogalF1ZXJ5LFxuXG5cdC8vIFRoZSBkZWZhdWx0IGxlbmd0aCBvZiBhIGpRdWVyeSBvYmplY3QgaXMgMFxuXHRsZW5ndGg6IDAsXG5cblx0dG9BcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0fSxcblxuXHQvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG5cdC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG5cdGdldDogZnVuY3Rpb24oIG51bSApIHtcblxuXHRcdC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGluIGEgY2xlYW4gYXJyYXlcblx0XHRpZiAoIG51bSA9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4ganVzdCB0aGUgb25lIGVsZW1lbnQgZnJvbSB0aGUgc2V0XG5cdFx0cmV0dXJuIG51bSA8IDAgPyB0aGlzWyBudW0gKyB0aGlzLmxlbmd0aCBdIDogdGhpc1sgbnVtIF07XG5cdH0sXG5cblx0Ly8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuXHQvLyAocmV0dXJuaW5nIHRoZSBuZXcgbWF0Y2hlZCBlbGVtZW50IHNldClcblx0cHVzaFN0YWNrOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cblx0XHQvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuXHRcdHZhciByZXQgPSBqUXVlcnkubWVyZ2UoIHRoaXMuY29uc3RydWN0b3IoKSwgZWxlbXMgKTtcblxuXHRcdC8vIEFkZCB0aGUgb2xkIG9iamVjdCBvbnRvIHRoZSBzdGFjayAoYXMgYSByZWZlcmVuY2UpXG5cdFx0cmV0LnByZXZPYmplY3QgPSB0aGlzO1xuXG5cdFx0Ly8gUmV0dXJuIHRoZSBuZXdseS1mb3JtZWQgZWxlbWVudCBzZXRcblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdC8vIEV4ZWN1dGUgYSBjYWxsYmFjayBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuXG5cdGVhY2g6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmVhY2goIHRoaXMsIGNhbGxiYWNrICk7XG5cdH0sXG5cblx0bWFwOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkubWFwKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKCBlbGVtLCBpLCBlbGVtICk7XG5cdFx0fSApICk7XG5cdH0sXG5cblx0c2xpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggc2xpY2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApICk7XG5cdH0sXG5cblx0Zmlyc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAwICk7XG5cdH0sXG5cblx0bGFzdDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXEoIC0xICk7XG5cdH0sXG5cblx0ZXE6IGZ1bmN0aW9uKCBpICkge1xuXHRcdHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdGogPSAraSArICggaSA8IDAgPyBsZW4gOiAwICk7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqID49IDAgJiYgaiA8IGxlbiA/IFsgdGhpc1sgaiBdIF0gOiBbXSApO1xuXHR9LFxuXG5cdGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJldk9iamVjdCB8fCB0aGlzLmNvbnN0cnVjdG9yKCk7XG5cdH0sXG5cblx0Ly8gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuXHQvLyBCZWhhdmVzIGxpa2UgYW4gQXJyYXkncyBtZXRob2QsIG5vdCBsaWtlIGEgalF1ZXJ5IG1ldGhvZC5cblx0cHVzaDogcHVzaCxcblx0c29ydDogYXJyLnNvcnQsXG5cdHNwbGljZTogYXJyLnNwbGljZVxufTtcblxualF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sgMCBdIHx8IHt9LFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKCB0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXG5cdFx0Ly8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sgaSBdIHx8IHt9O1xuXHRcdGkrKztcblx0fVxuXG5cdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFsgbmFtZSBdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1sgbmFtZSBdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IGpRdWVyeS5pc0FycmF5KCBjb3B5ICkgKSApICkge1xuXG5cdFx0XHRcdFx0aWYgKCBjb3B5SXNBcnJheSApIHtcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBqUXVlcnkuaXNBcnJheSggc3JjICkgPyBzcmMgOiBbXTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2Vcblx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuXHRpc1JlYWR5OiB0cnVlLFxuXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggbXNnICk7XG5cdH0sXG5cblx0bm9vcDogZnVuY3Rpb24oKSB7fSxcblxuXHRpc0Z1bmN0aW9uOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHJldHVybiBqUXVlcnkudHlwZSggb2JqICkgPT09IFwiZnVuY3Rpb25cIjtcblx0fSxcblxuXHRpc0FycmF5OiBBcnJheS5pc0FycmF5LFxuXG5cdGlzV2luZG93OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH0sXG5cblx0aXNOdW1lcmljOiBmdW5jdGlvbiggb2JqICkge1xuXG5cdFx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0XHQvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG5cdFx0Ly8gdGhhdCBjYW4gYmUgY29lcmNlZCB0byBmaW5pdGUgbnVtYmVycyAoZ2gtMjY2Milcblx0XHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0XHRyZXR1cm4gKCB0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIgKSAmJlxuXG5cdFx0XHQvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAoXCJcIilcblx0XHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHRcdC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuXHRcdFx0IWlzTmFOKCBvYmogLSBwYXJzZUZsb2F0KCBvYmogKSApO1xuXHR9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblxuXHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cdFx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy82MTI1XG5cdFx0dmFyIG5hbWU7XG5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0dHlwZTogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRpZiAoIG9iaiA9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIG9iaiArIFwiXCI7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5IChmdW5jdGlvbmlzaCBSZWdFeHApXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwoIG9iaiApIF0gfHwgXCJvYmplY3RcIiA6XG5cdFx0XHR0eXBlb2Ygb2JqO1xuXHR9LFxuXG5cdC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIGdsb2JhbCBjb250ZXh0XG5cdGdsb2JhbEV2YWw6IGZ1bmN0aW9uKCBjb2RlICkge1xuXHRcdERPTUV2YWwoIGNvZGUgKTtcblx0fSxcblxuXHQvLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTNcblx0Ly8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKCM5NTcyKVxuXHRjYW1lbENhc2U6IGZ1bmN0aW9uKCBzdHJpbmcgKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCBybXNQcmVmaXgsIFwibXMtXCIgKS5yZXBsYWNlKCByZGFzaEFscGhhLCBmY2FtZWxDYXNlICk7XG5cdH0sXG5cblx0bm9kZU5hbWU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdHRyaW06IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdHJldHVybiB0ZXh0ID09IG51bGwgP1xuXHRcdFx0XCJcIiA6XG5cdFx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiXCIgKTtcblx0fSxcblxuXHQvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1ha2VBcnJheTogZnVuY3Rpb24oIGFyciwgcmVzdWx0cyApIHtcblx0XHR2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuXHRcdGlmICggYXJyICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGlzQXJyYXlMaWtlKCBPYmplY3QoIGFyciApICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggcmV0LFxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcblx0XHR2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG5cdFx0XHRqID0gMCxcblx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaiBdO1xuXHRcdH1cblxuXHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH0sXG5cblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xuXHRcdHZhciBjYWxsYmFja0ludmVyc2UsXG5cdFx0XHRtYXRjaGVzID0gW10sXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcblx0XHQvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpICk7XG5cdFx0XHRpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaGVzO1xuXHR9LFxuXG5cdC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGFyZyApIHtcblx0XHR2YXIgbGVuZ3RoLCB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXHRcdGlmICggaXNBcnJheUxpa2UoIGVsZW1zICkgKSB7XG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0cmV0dXJuIGNvbmNhdC5hcHBseSggW10sIHJldCApO1xuXHR9LFxuXG5cdC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuXHRndWlkOiAxLFxuXG5cdC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuXHQvLyBhcmd1bWVudHMuXG5cdHByb3h5OiBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG5cdFx0dmFyIHRtcCwgYXJncywgcHJveHk7XG5cblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dG1wID0gZm5bIGNvbnRleHQgXTtcblx0XHRcdGNvbnRleHQgPSBmbjtcblx0XHRcdGZuID0gdG1wO1xuXHRcdH1cblxuXHRcdC8vIFF1aWNrIGNoZWNrIHRvIGRldGVybWluZSBpZiB0YXJnZXQgaXMgY2FsbGFibGUsIGluIHRoZSBzcGVjXG5cdFx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0XHRhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAyICk7XG5cdFx0cHJveHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHRcdH07XG5cblx0XHQvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcblx0XHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRcdHJldHVybiBwcm94eTtcblx0fSxcblxuXHRub3c6IERhdGUubm93LFxuXG5cdC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuXHRzdXBwb3J0OiBzdXBwb3J0XG59ICk7XG5cbmlmICggdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRqUXVlcnkuZm5bIFN5bWJvbC5pdGVyYXRvciBdID0gYXJyWyBTeW1ib2wuaXRlcmF0b3IgXTtcbn1cblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5qUXVlcnkuZWFjaCggXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KCBcIiBcIiApLFxuZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xufSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXG5cdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHxcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xufVxudmFyIFNpenpsZSA9XG4vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuM1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTYtMDgtMDhcbiAqL1xuKGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbnZhciBpLFxuXHRzdXBwb3J0LFxuXHRFeHByLFxuXHRnZXRUZXh0LFxuXHRpc1hNTCxcblx0dG9rZW5pemUsXG5cdGNvbXBpbGUsXG5cdHNlbGVjdCxcblx0b3V0ZXJtb3N0Q29udGV4dCxcblx0c29ydElucHV0LFxuXHRoYXNEdXBsaWNhdGUsXG5cblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuXHRzZXREb2N1bWVudCxcblx0ZG9jdW1lbnQsXG5cdGRvY0VsZW0sXG5cdGRvY3VtZW50SXNIVE1MLFxuXHRyYnVnZ3lRU0EsXG5cdHJidWdneU1hdGNoZXMsXG5cdG1hdGNoZXMsXG5cdGNvbnRhaW5zLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZXhwYW5kbyA9IFwic2l6emxlXCIgKyAxICogbmV3IERhdGUoKSxcblx0cHJlZmVycmVkRG9jID0gd2luZG93LmRvY3VtZW50LFxuXHRkaXJydW5zID0gMCxcblx0ZG9uZSA9IDAsXG5cdGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHR0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9LFxuXG5cdC8vIEluc3RhbmNlIG1ldGhvZHNcblx0aGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcblx0YXJyID0gW10sXG5cdHBvcCA9IGFyci5wb3AsXG5cdHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG5cdHB1c2ggPSBhcnIucHVzaCxcblx0c2xpY2UgPSBhcnIuc2xpY2UsXG5cdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuXHQvLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG5cdGluZGV4T2YgPSBmdW5jdGlvbiggbGlzdCwgZWxlbSApIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRsZW4gPSBsaXN0Lmxlbmd0aDtcblx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGlmICggbGlzdFtpXSA9PT0gZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2Vcblx0d2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcblxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjdmFsdWUtZGVmLWlkZW50aWZpZXJcblx0aWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCIqXFxcXF1cIixcblxuXHRwc2V1ZG9zID0gXCI6KFwiICsgaWRlbnRpZmllciArIFwiKSg/OlxcXFwoKFwiICtcblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuXHRcdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcdFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblx0XHQvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cdFx0XCIuKlwiICtcblx0XHRcIilcXFxcKXwpXCIsXG5cblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRyd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIgKSxcblx0cnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblxuXHRyYXR0cmlidXRlUXVvdGVzID0gbmV3IFJlZ0V4cCggXCI9XCIgKyB3aGl0ZXNwYWNlICsgXCIqKFteXFxcXF0nXFxcIl0qPylcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLCBcImdcIiApLFxuXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSB7XG5cdFx0XCJJRFwiOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0XCJDTEFTU1wiOiBuZXcgUmVnRXhwKCBcIl5cXFxcLihcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiVEFHXCI6IG5ldyBSZWdFeHAoIFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIgKSxcblx0XHRcIkFUVFJcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0XCJQU0VVRE9cIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBwc2V1ZG9zICksXG5cdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRcImJvb2xcIjogbmV3IFJlZ0V4cCggXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIgKSxcblx0XHQvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcblx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0XCJuZWVkc0NvbnRleHRcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICtcblx0XHRcdHdoaXRlc3BhY2UgKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LFxuXG5cdHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyaGVhZGVyID0gL15oXFxkJC9pLFxuXG5cdHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuXHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0cnNpYmxpbmcgPSAvWyt+XS8sXG5cblx0Ly8gQ1NTIGVzY2FwZXNcblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xuXHRydW5lc2NhcGUgPSBuZXcgUmVnRXhwKCBcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiApLFxuXHRmdW5lc2NhcGUgPSBmdW5jdGlvbiggXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UgKSB7XG5cdFx0dmFyIGhpZ2ggPSBcIjB4XCIgKyBlc2NhcGVkIC0gMHgxMDAwMDtcblx0XHQvLyBOYU4gbWVhbnMgbm9uLWNvZGVwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcblx0XHQvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcblx0XHRyZXR1cm4gaGlnaCAhPT0gaGlnaCB8fCBlc2NhcGVkV2hpdGVzcGFjZSA/XG5cdFx0XHRlc2NhcGVkIDpcblx0XHRcdGhpZ2ggPCAwID9cblx0XHRcdFx0Ly8gQk1QIGNvZGVwb2ludFxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcblx0XHRcdFx0Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG5cdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9LFxuXG5cdC8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG5cdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xuXHRyY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFwwLVxceDFmXFx4N2YtXFx1RkZGRlxcdy1dL2csXG5cdGZjc3Nlc2NhcGUgPSBmdW5jdGlvbiggY2gsIGFzQ29kZVBvaW50ICkge1xuXHRcdGlmICggYXNDb2RlUG9pbnQgKSB7XG5cblx0XHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdFx0aWYgKCBjaCA9PT0gXCJcXDBcIiApIHtcblx0XHRcdFx0cmV0dXJuIFwiXFx1RkZGRFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXHRcdFx0cmV0dXJuIGNoLnNsaWNlKCAwLCAtMSApICsgXCJcXFxcXCIgKyBjaC5jaGFyQ29kZUF0KCBjaC5sZW5ndGggLSAxICkudG9TdHJpbmcoIDE2ICkgKyBcIiBcIjtcblx0XHR9XG5cblx0XHQvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cdFx0cmV0dXJuIFwiXFxcXFwiICsgY2g7XG5cdH0sXG5cblx0Ly8gVXNlZCBmb3IgaWZyYW1lc1xuXHQvLyBTZWUgc2V0RG9jdW1lbnQoKVxuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUVcblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0ZGlzYWJsZWRBbmNlc3RvciA9IGFkZENvbWJpbmF0b3IoXG5cdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gdHJ1ZSAmJiAoXCJmb3JtXCIgaW4gZWxlbSB8fCBcImxhYmVsXCIgaW4gZWxlbSk7XG5cdFx0fSxcblx0XHR7IGRpcjogXCJwYXJlbnROb2RlXCIsIG5leHQ6IFwibGVnZW5kXCIgfVxuXHQpO1xuXG4vLyBPcHRpbWl6ZSBmb3IgcHVzaC5hcHBseSggXywgTm9kZUxpc3QgKVxudHJ5IHtcblx0cHVzaC5hcHBseShcblx0XHQoYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcblx0Ly8gRGV0ZWN0IHNpbGVudGx5IGZhaWxpbmcgcHVzaC5hcHBseVxuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xufSBjYXRjaCAoIGUgKSB7XG5cdHB1c2ggPSB7IGFwcGx5OiBhcnIubGVuZ3RoID9cblxuXHRcdC8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0cHVzaF9uYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbChlbHMpICk7XG5cdFx0fSA6XG5cblx0XHQvLyBTdXBwb3J0OiBJRTw5XG5cdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHQvLyBDYW4ndCB0cnVzdCBOb2RlTGlzdC5sZW5ndGhcblx0XHRcdHdoaWxlICggKHRhcmdldFtqKytdID0gZWxzW2krK10pICkge31cblx0XHRcdHRhcmdldC5sZW5ndGggPSBqIC0gMTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblxuXHRcdGlmICggKCBjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MgKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdH1cblx0XHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuXHRcdGlmICggZG9jdW1lbnRJc0hUTUwgKSB7XG5cblx0XHRcdC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG5cdFx0XHQvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG5cdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkpICkge1xuXG5cdFx0XHRcdC8vIElEIHNlbGVjdG9yXG5cdFx0XHRcdGlmICggKG0gPSBtYXRjaFsxXSkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb2N1bWVudCBjb250ZXh0XG5cdFx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdGlmICggKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkpICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHRcdC8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG5cdFx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdFx0aWYgKCBlbGVtLmlkID09PSBtICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEVsZW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0aWYgKCBuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxuXHRcdFx0XHRcdFx0XHRjb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWzJdICkge1xuXHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0XHQvLyBDbGFzcyBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCAobSA9IG1hdGNoWzNdKSAmJiBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiZcblx0XHRcdFx0XHRjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblx0XHRcdGlmICggc3VwcG9ydC5xc2EgJiZcblx0XHRcdFx0IWNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXSAmJlxuXHRcdFx0XHQoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoIHNlbGVjdG9yICkpICkge1xuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuXHRcdFx0XHQvLyBxU0EgbG9va3Mgb3V0c2lkZSBFbGVtZW50IGNvbnRleHQsIHdoaWNoIGlzIG5vdCB3aGF0IHdlIHdhbnRcblx0XHRcdFx0Ly8gVGhhbmtzIHRvIEFuZHJldyBEdXBvbnQgZm9yIHRoaXMgd29ya2Fyb3VuZCB0ZWNobmlxdWVcblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0aWYgKCAobmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApKSApIHtcblx0XHRcdFx0XHRcdG5pZCA9IG5pZC5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIChuaWQgPSBleHBhbmRvKSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXHRcdFx0XHRcdGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0Z3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKCBcIixcIiApO1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBuZXdTZWxlY3RvciApIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fSBjYXRjaCAoIHFzYUVycm9yICkge1xuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRpZiAoIG5pZCA9PT0gZXhwYW5kbyApIHtcblx0XHRcdFx0XHRcdFx0Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXHRcdC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG5cdFx0aWYgKCBrZXlzLnB1c2goIGtleSArIFwiIFwiICkgPiBFeHByLmNhY2hlTGVuZ3RoICkge1xuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUpO1xuXHR9XG5cdHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhc3NlcnQoIGZuICkge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gISFmbiggZWwgKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRpZiAoIGVsLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBlbCApO1xuXHRcdH1cblx0XHQvLyByZWxlYXNlIG1lbW9yeSBpbiBJRVxuXHRcdGVsID0gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICovXG5mdW5jdGlvbiBhZGRIYW5kbGUoIGF0dHJzLCBoYW5kbGVyICkge1xuXHR2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuXHRcdGkgPSBhcnIubGVuZ3RoO1xuXG5cdHdoaWxlICggaS0tICkge1xuXHRcdEV4cHIuYXR0ckhhbmRsZVsgYXJyW2ldIF0gPSBoYW5kbGVyO1xuXHR9XG59XG5cbi8qKlxuICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICogQHBhcmFtIHtFbGVtZW50fSBhXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICovXG5mdW5jdGlvbiBzaWJsaW5nQ2hlY2soIGEsIGIgKSB7XG5cdHZhciBjdXIgPSBiICYmIGEsXG5cdFx0ZGlmZiA9IGN1ciAmJiBhLm5vZGVUeXBlID09PSAxICYmIGIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdGEuc291cmNlSW5kZXggLSBiLnNvdXJjZUluZGV4O1xuXG5cdC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuXHRpZiAoIGRpZmYgKSB7XG5cdFx0cmV0dXJuIGRpZmY7XG5cdH1cblxuXHQvLyBDaGVjayBpZiBiIGZvbGxvd3MgYVxuXHRpZiAoIGN1ciApIHtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIubmV4dFNpYmxpbmcpICkge1xuXHRcdFx0aWYgKCBjdXIgPT09IGIgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYSA/IDEgOiAtMTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgOmVuYWJsZWQvOmRpc2FibGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKCBkaXNhYmxlZCApIHtcblxuXHQvLyBLbm93biA6ZGlzYWJsZWQgZmFsc2UgcG9zaXRpdmVzOiBmaWVsZHNldFtkaXNhYmxlZF0gPiBsZWdlbmQ6bnRoLW9mLXR5cGUobisyKSA6Y2FuLWRpc2FibGVcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gT25seSBjZXJ0YWluIGVsZW1lbnRzIGNhbiBtYXRjaCA6ZW5hYmxlZCBvciA6ZGlzYWJsZWRcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZGlzYWJsZWRcblx0XHRpZiAoIFwiZm9ybVwiIGluIGVsZW0gKSB7XG5cblx0XHRcdC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcblx0XHRcdC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGlzdGVkXG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuXHRcdFx0Ly8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtb3B0aW9uLWRpc2FibGVkXG5cdFx0XHQvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLmRpc2FibGVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHQvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuXHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0XHRcdGlmICggXCJsYWJlbFwiIGluIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnBhcmVudE5vZGUuZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDExXG5cdFx0XHRcdC8vIFVzZSB0aGUgaXNEaXNhYmxlZCBzaG9ydGN1dCBwcm9wZXJ0eSB0byBjaGVjayBmb3IgZGlzYWJsZWQgZmllbGRzZXQgYW5jZXN0b3JzXG5cdFx0XHRcdHJldHVybiBlbGVtLmlzRGlzYWJsZWQgPT09IGRpc2FibGVkIHx8XG5cblx0XHRcdFx0XHQvLyBXaGVyZSB0aGVyZSBpcyBubyBpc0Rpc2FibGVkLCBjaGVjayBtYW51YWxseVxuXHRcdFx0XHRcdC8qIGpzaGludCAtVzAxOCAqL1xuXHRcdFx0XHRcdGVsZW0uaXNEaXNhYmxlZCAhPT0gIWRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRkaXNhYmxlZEFuY2VzdG9yKCBlbGVtICkgPT09IGRpc2FibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cblx0XHQvLyBUcnkgdG8gd2lubm93IG91dCBlbGVtZW50cyB0aGF0IGNhbid0IGJlIGRpc2FibGVkIGJlZm9yZSB0cnVzdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkuXG5cdFx0Ly8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG5cdFx0Ly8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG5cdFx0fSBlbHNlIGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIGFyZ3VtZW50ICkge1xuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuXHRcdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKGogPSBtYXRjaEluZGV4ZXNbaV0pIF0gKSB7XG5cdFx0XHRcdFx0c2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XG5cdHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG59XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuLyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL1xuaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0Ly8gZG9jdW1lbnRFbGVtZW50IGlzIHZlcmlmaWVkIGZvciBjYXNlcyB3aGVyZSBpdCBkb2Vzbid0IHlldCBleGlzdFxuXHQvLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcblx0dmFyIGRvY3VtZW50RWxlbWVudCA9IGVsZW0gJiYgKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG5cdHJldHVybiBkb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiIDogZmFsc2U7XG59O1xuXG4vKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqL1xuc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiggbm9kZSApIHtcblx0dmFyIGhhc0NvbXBhcmUsIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0aWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH1cblxuXHQvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuXHRkb2N1bWVudCA9IGRvYztcblx0ZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0ZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoIGRvY3VtZW50ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOS0xMSwgRWRnZVxuXHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5cdGlmICggcHJlZmVycmVkRG9jICE9PSBkb2N1bWVudCAmJlxuXHRcdChzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldykgJiYgc3ViV2luZG93LnRvcCAhPT0gc3ViV2luZG93ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTEsIEVkZ2Vcblx0XHRpZiAoIHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlICk7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuXHRcdH0gZWxzZSBpZiAoIHN1YldpbmRvdy5hdHRhY2hFdmVudCApIHtcblx0XHRcdHN1YldpbmRvdy5hdHRhY2hFdmVudCggXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyICk7XG5cdFx0fVxuXHR9XG5cblx0LyogQXR0cmlidXRlc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gU3VwcG9ydDogSUU8OFxuXHQvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcblx0Ly8gKGV4Y2VwdGluZyBJRTggYm9vbGVhbnMpXG5cdHN1cHBvcnQuYXR0cmlidXRlcyA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuY2xhc3NOYW1lID0gXCJpXCI7XG5cdFx0cmV0dXJuICFlbC5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIik7XG5cdH0pO1xuXG5cdC8qIGdldEVsZW1lbnQocylCeSpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSByZXR1cm5zIG9ubHkgZWxlbWVudHNcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikgKTtcblx0XHRyZXR1cm4gIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDlcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICk7XG5cblx0Ly8gU3VwcG9ydDogSUU8MTBcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG5cdC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuXHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0c3VwcG9ydC5nZXRCeUlkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlkID0gZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gSUQgZmlsdGVyIGFuZCBmaW5kXG5cdGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbIGVsZW0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDYgLSA3IG9ubHlcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0RXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgbm9kZSwgaSwgZWxlbXMsXG5cdFx0XHRcdFx0ZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0Ly8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcblx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbXNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmRbXCJUQUdcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID9cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHQvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cblx0XHRcdH0gZWxzZSBpZiAoIHN1cHBvcnQucXNhICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgKTtcblx0XHRcdH1cblx0XHR9IDpcblxuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0dG1wID0gW10sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHQvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG5cdFx0XHRcdHJlc3VsdHMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRmlsdGVyIG91dCBwb3NzaWJsZSBjb21tZW50c1xuXHRcdFx0aWYgKCB0YWcgPT09IFwiKlwiICkge1xuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHR0bXAucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0bXA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdC8vIENsYXNzXG5cdEV4cHIuZmluZFtcIkNMQVNTXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIGZ1bmN0aW9uKCBjbGFzc05hbWUsIGNvbnRleHQgKSB7XG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggY2xhc3NOYW1lICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcblxuXHQvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXHRyYnVnZ3lNYXRjaGVzID0gW107XG5cblx0Ly8gcVNhKDpmb2N1cykgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKENocm9tZSAyMSlcblx0Ly8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG5cdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcblx0Ly8gU28sIHdlIGFsbG93IDpmb2N1cyB0byBwYXNzIHRocm91Z2ggUVNBIGFsbCB0aGUgdGltZSB0byBhdm9pZCB0aGUgSUUgZXJyb3Jcblx0Ly8gU2VlIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM3OFxuXHRyYnVnZ3lRU0EgPSBbXTtcblxuXHRpZiAoIChzdXBwb3J0LnFzYSA9IHJuYXRpdmUudGVzdCggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCApKSApIHtcblx0XHQvLyBCdWlsZCBRU0EgcmVnZXhcblx0XHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIFNlbGVjdCBpcyBzZXQgdG8gZW1wdHkgc3RyaW5nIG9uIHB1cnBvc2Vcblx0XHRcdC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuXHRcdFx0Ly8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG5cdFx0XHQvLyBzaW5jZSBpdHMgcHJlc2VuY2Ugc2hvdWxkIGJlIGVub3VnaFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmlubmVySFRNTCA9IFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiICtcblx0XHRcdFx0XCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG5cdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG5cdFx0XHQvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcblx0XHRcdC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lPDI5LCBBbmRyb2lkPDQuNCwgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjgrXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIn49XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIjpjaGVja2VkXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCssIGlPUyA4K1xuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuXHRcdFx0Ly8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIuIy4rWyt+XVwiKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG5cdFx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRcdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApLnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiRFwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0Ly8gRW5mb3JjZSBjYXNlLXNlbnNpdGl2aXR5IG9mIG5hbWUgYXR0cmlidXRlXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIipbKl4kfCF+XT89XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRkYgMy41IC0gOmVuYWJsZWQvOmRpc2FibGVkIGFuZCBoaWRkZW4gZWxlbWVudHMgKGhpZGRlbiBlbGVtZW50cyBhcmUgc3RpbGwgZW5hYmxlZClcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHRcdFx0Ly8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3Ncblx0XHRcdGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpO1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCIsLio6XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCAoc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgPSBybmF0aXZlLnRlc3QoIChtYXRjaGVzID0gZG9jRWxlbS5tYXRjaGVzIHx8XG5cdFx0ZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ub01hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpICkpICkge1xuXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcblx0XHRcdHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoIGVsLCBcIipcIiApO1xuXG5cdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG5cdFx0XHQvLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG5cdFx0XHRtYXRjaGVzLmNhbGwoIGVsLCBcIltzIT0nJ106eFwiICk7XG5cdFx0XHRyYnVnZ3lNYXRjaGVzLnB1c2goIFwiIT1cIiwgcHNldWRvcyApO1xuXHRcdH0pO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcblx0cmJ1Z2d5TWF0Y2hlcyA9IHJidWdneU1hdGNoZXMubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneU1hdGNoZXMuam9pbihcInxcIikgKTtcblxuXHQvKiBDb250YWluc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuXHQvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcblx0Ly8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG5cdC8vIEFzIGluLCBhbiBlbGVtZW50IGRvZXMgbm90IGNvbnRhaW4gaXRzZWxmXG5cdGNvbnRhaW5zID0gaGFzQ29tcGFyZSB8fCBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29udGFpbnMgKSA/XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHR2YXIgYWRvd24gPSBhLm5vZGVUeXBlID09PSA5ID8gYS5kb2N1bWVudEVsZW1lbnQgOiBhLFxuXHRcdFx0XHRidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcblx0XHRcdHJldHVybiBhID09PSBidXAgfHwgISEoIGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRhZG93bi5jb250YWlucyA/XG5cdFx0XHRcdFx0YWRvd24uY29udGFpbnMoIGJ1cCApIDpcblx0XHRcdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGJ1cCApICYgMTZcblx0XHRcdCkpO1xuXHRcdH0gOlxuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0aWYgKCBiICkge1xuXHRcdFx0XHR3aGlsZSAoIChiID0gYi5wYXJlbnROb2RlKSApIHtcblx0XHRcdFx0XHRpZiAoIGIgPT09IGEgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gaGFzQ29tcGFyZSA/XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXG5cdFx0Ly8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuXHRcdHZhciBjb21wYXJlID0gIWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcblx0XHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0XHRyZXR1cm4gY29tcGFyZTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdFx0Y29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBrbm93IHRoZXkgYXJlIGRpc2Nvbm5lY3RlZFxuXHRcdFx0MTtcblxuXHRcdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcblx0XHRcdCghc3VwcG9ydC5zb3J0RGV0YWNoZWQgJiYgYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYSApID09PSBjb21wYXJlKSApIHtcblxuXHRcdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byBvdXIgcHJlZmVycmVkIGRvY3VtZW50XG5cdFx0XHRpZiAoIGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0fSA6XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXVwID0gYS5wYXJlbnROb2RlLFxuXHRcdFx0YnVwID0gYi5wYXJlbnROb2RlLFxuXHRcdFx0YXAgPSBbIGEgXSxcblx0XHRcdGJwID0gWyBiIF07XG5cblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXHRcdGlmICggIWF1cCB8fCAhYnVwICkge1xuXHRcdFx0cmV0dXJuIGEgPT09IGRvY3VtZW50ID8gLTEgOlxuXHRcdFx0XHRiID09PSBkb2N1bWVudCA/IDEgOlxuXHRcdFx0XHRhdXAgPyAtMSA6XG5cdFx0XHRcdGJ1cCA/IDEgOlxuXHRcdFx0XHRzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHQvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuXHRcdH0gZWxzZSBpZiAoIGF1cCA9PT0gYnVwICkge1xuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cdFx0Y3VyID0gYTtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRhcC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cdFx0Y3VyID0gYjtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRicC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cblx0XHQvLyBXYWxrIGRvd24gdGhlIHRyZWUgbG9va2luZyBmb3IgYSBkaXNjcmVwYW5jeVxuXHRcdHdoaWxlICggYXBbaV0gPT09IGJwW2ldICkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBpID9cblx0XHRcdC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuXHRcdFx0c2libGluZ0NoZWNrKCBhcFtpXSwgYnBbaV0gKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSBub2RlcyBpbiBvdXIgZG9jdW1lbnQgc29ydCBmaXJzdFxuXHRcdFx0YXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcblx0XHRcdGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDpcblx0XHRcdDA7XG5cdH07XG5cblx0cmV0dXJuIGRvY3VtZW50O1xufTtcblxuU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5TaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IGF0dHJpYnV0ZSBzZWxlY3RvcnMgYXJlIHF1b3RlZFxuXHRleHByID0gZXhwci5yZXBsYWNlKCByYXR0cmlidXRlUXVvdGVzLCBcIj0nJDEnXVwiICk7XG5cblx0aWYgKCBzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJlxuXHRcdCFjb21waWxlckNhY2hlWyBleHByICsgXCIgXCIgXSAmJlxuXHRcdCggIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdCggZXhwciApICkgJiZcblx0XHQoICFyYnVnZ3lRU0EgICAgIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cdFx0XHRcdFx0Ly8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cblx0cmV0dXJuIFNpenpsZSggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cblNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblx0cmV0dXJuIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XG59O1xuXG5TaXp6bGUuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXHRcdC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChqUXVlcnkgIzEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID9cblx0XHR2YWwgOlxuXHRcdHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKSA6XG5cdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcbn07XG5cblNpenpsZS5lc2NhcGUgPSBmdW5jdGlvbiggc2VsICkge1xuXHRyZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblNpenpsZS5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyApO1xufTtcblxuLyoqXG4gKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICovXG5TaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHR2YXIgZWxlbSxcblx0XHRkdXBsaWNhdGVzID0gW10sXG5cdFx0aiA9IDAsXG5cdFx0aSA9IDA7XG5cblx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzO1xuXHRzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoIDAgKTtcblx0cmVzdWx0cy5zb3J0KCBzb3J0T3JkZXIgKTtcblxuXHRpZiAoIGhhc0R1cGxpY2F0ZSApIHtcblx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0cmVzdWx0cy5zcGxpY2UoIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuXHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICogQHBhcmFtIHtBcnJheXxFbGVtZW50fSBlbGVtXG4gKi9cbmdldFRleHQgPSBTaXp6bGUuZ2V0VGV4dCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHR2YXIgbm9kZSxcblx0XHRyZXQgPSBcIlwiLFxuXHRcdGkgPSAwLFxuXHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRpZiAoICFub2RlVHlwZSApIHtcblx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuXHRcdHdoaWxlICggKG5vZGUgPSBlbGVtW2krK10pICkge1xuXHRcdFx0Ly8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcblx0XHRcdHJldCArPSBnZXRUZXh0KCBub2RlICk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuXHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRyZXQgKz0gZ2V0VGV4dCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQgKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuXHR9XG5cdC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cdHJldHVybiByZXQ7XG59O1xuXG5FeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbM10gPSAoIG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIgKS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzJdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzFdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWzNdICkge1xuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWzRdID0gKyggbWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAoIG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApICk7XG5cdFx0XHRcdG1hdGNoWzVdID0gKyggKCBtYXRjaFs3XSArIG1hdGNoWzhdICkgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKTtcblxuXHRcdFx0Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFswXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdHZhciBleGNlc3MsXG5cdFx0XHRcdHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwcltcIkNISUxEXCJdLnRlc3QoIG1hdGNoWzBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0bWF0Y2hbMl0gPSBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdChleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSkgJiZcblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdChleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGgpICkge1xuXG5cdFx0XHRcdC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG5cdFx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcblx0XHR9XG5cdH0sXG5cblx0ZmlsdGVyOiB7XG5cblx0XHRcIlRBR1wiOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9IDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDTEFTU1wiOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQocGF0dGVybiA9IG5ldyBSZWdFeHAoIFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgKyBcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkpICYmXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdCggdHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIgKTtcblx0XHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0ICs9IFwiXCI7XG5cblx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIj1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIkPVwiID8gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ8PVwiID8gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG5cdFx0XHRcdFx0ZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuXHRcdFx0XHRcdFx0ZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gbm9kZVsgZGlyIF0pICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0bm9kZSA9IHBhcmVudDtcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleCAmJiBjYWNoZVsgMiBdO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgbm9kZUluZGV4LCBkaWZmIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gdW5pcXVlQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdFx0ZGlmZiA9IG5vZGVJbmRleDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIHhtbCA6bnRoLWNoaWxkKC4uLilcblx0XHRcdFx0XHRcdFx0Ly8gb3IgOm50aC1sYXN0LWNoaWxkKC4uLikgb3IgOm50aCgtbGFzdCk/LW9mLXR5cGUoLi4uKVxuXHRcdFx0XHRcdFx0XHRpZiAoIGRpZmYgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsrZGlmZiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fCAobm9kZVsgZXhwYW5kbyBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQob3V0ZXJDYWNoZVsgbm9kZS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXHRcdFx0Ly8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHQvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuXHRcdFx0dmFyIGFyZ3MsXG5cdFx0XHRcdGZuID0gRXhwci5wc2V1ZG9zWyBwc2V1ZG8gXSB8fCBFeHByLnNldEZpbHRlcnNbIHBzZXVkby50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyApO1xuXG5cdFx0XHQvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG5cdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0Ly8ganVzdCBhcyBTaXp6bGUgZG9lc1xuXHRcdFx0aWYgKCBmblsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRyZXR1cm4gZm4oIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xuXHRcdFx0XHRhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcblx0XHRcdFx0cmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eSggcHNldWRvLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdFx0dmFyIGlkeCxcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCA9IGZuKCBzZWVkLCBhcmd1bWVudCApLFxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZiggc2VlZCwgbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0XHRzZWVkWyBpZHggXSA9ICEoIG1hdGNoZXNbIGlkeCBdID0gbWF0Y2hlZFtpXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmbiggZWxlbSwgMCwgYXJncyApO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmbjtcblx0XHR9XG5cdH0sXG5cblx0cHNldWRvczoge1xuXHRcdC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuXHRcdFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgZXhwYW5kbyBdID9cblx0XHRcdFx0bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdFx0XHRcdFx0c2VlZFtpXSA9ICEobWF0Y2hlc1tpXSA9IGVsZW0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkgOlxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WzBdID0gZWxlbTtcblx0XHRcdFx0XHRtYXRjaGVyKCBpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzICk7XG5cdFx0XHRcdFx0Ly8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdFx0XHRpbnB1dFswXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0XCJoYXNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIFNpenpsZSggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xuXHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiY29udGFpbnNcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS50ZXh0Q29udGVudCB8fCBlbGVtLmlubmVyVGV4dCB8fCBnZXRUZXh0KCBlbGVtICkgKS5pbmRleE9mKCB0ZXh0ICkgPiAtMTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBcIldoZXRoZXIgYW4gZWxlbWVudCBpcyByZXByZXNlbnRlZCBieSBhIDpsYW5nKCkgc2VsZWN0b3Jcblx0XHQvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuXHRcdC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG5cdFx0Ly8gb3IgYmVnaW5uaW5nIHdpdGggdGhlIGlkZW50aWZpZXIgQyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBcIi1cIi5cblx0XHQvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cblx0XHQvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuXHRcdFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBsYW5nICkge1xuXHRcdFx0Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuXHRcdFx0aWYgKCAhcmlkZW50aWZpZXIudGVzdChsYW5nIHx8IFwiXCIpICkge1xuXHRcdFx0XHRTaXp6bGUuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0XHRcdFx0ZWxlbS5sYW5nIDpcblx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0XCJ0YXJnZXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0XCJyb290XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY0VsZW07XG5cdFx0fSxcblxuXHRcdFwiZm9jdXNcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoIWRvY3VtZW50Lmhhc0ZvY3VzIHx8IGRvY3VtZW50Lmhhc0ZvY3VzKCkpICYmICEhKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXgpO1xuXHRcdH0sXG5cblx0XHQvLyBCb29sZWFuIHByb3BlcnRpZXNcblx0XHRcImVuYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGZhbHNlICksXG5cdFx0XCJkaXNhYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggdHJ1ZSApLFxuXG5cdFx0XCJjaGVja2VkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0dmFyIG5vZGVOYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIChub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmICEhZWxlbS5jaGVja2VkKSB8fCAobm9kZU5hbWUgPT09IFwib3B0aW9uXCIgJiYgISFlbGVtLnNlbGVjdGVkKTtcblx0XHR9LFxuXG5cdFx0XCJzZWxlY3RlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcblx0XHRcdC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG5cdFx0fSxcblxuXHRcdC8vIENvbnRlbnRzXG5cdFx0XCJlbXB0eVwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0XCJwYXJlbnRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gIUV4cHIucHNldWRvc1tcImVtcHR5XCJdKCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRcImhlYWRlclwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJpbnB1dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0XCJidXR0b25cIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCI7XG5cdFx0fSxcblxuXHRcdFwidGV4dFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG5cdFx0XHRcdGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRTw4XG5cdFx0XHRcdC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG5cdFx0XHRcdCggKGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09IG51bGwgfHwgYXR0ci50b0xvd2VyQ2FzZSgpID09PSBcInRleHRcIiApO1xuXHRcdH0sXG5cblx0XHQvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cdFx0XCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIFsgMCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJsYXN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIFsgbGVuZ3RoIC0gMSBdO1xuXHRcdH0pLFxuXG5cdFx0XCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSksXG5cblx0XHRcImV2ZW5cIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcIm9kZFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMTtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJndFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7ICsraSA8IGxlbmd0aDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pXG5cdH1cbn07XG5cbkV4cHIucHNldWRvc1tcIm50aFwiXSA9IEV4cHIucHNldWRvc1tcImVxXCJdO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlSW5wdXRQc2V1ZG8oIGkgKTtcbn1cbmZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlQnV0dG9uUHNldWRvKCBpICk7XG59XG5cbi8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuZnVuY3Rpb24gc2V0RmlsdGVycygpIHt9XG5zZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbkV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbnRva2VuaXplID0gU2l6emxlLnRva2VuaXplID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBwYXJzZU9ubHkgKSB7XG5cdHZhciBtYXRjaGVkLCBtYXRjaCwgdG9rZW5zLCB0eXBlLFxuXHRcdHNvRmFyLCBncm91cHMsIHByZUZpbHRlcnMsXG5cdFx0Y2FjaGVkID0gdG9rZW5DYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggY2FjaGVkICkge1xuXHRcdHJldHVybiBwYXJzZU9ubHkgPyAwIDogY2FjaGVkLnNsaWNlKCAwICk7XG5cdH1cblxuXHRzb0ZhciA9IHNlbGVjdG9yO1xuXHRncm91cHMgPSBbXTtcblx0cHJlRmlsdGVycyA9IEV4cHIucHJlRmlsdGVyO1xuXG5cdHdoaWxlICggc29GYXIgKSB7XG5cblx0XHQvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG5cdFx0aWYgKCAhbWF0Y2hlZCB8fCAobWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFswXS5sZW5ndGggKSB8fCBzb0Zhcjtcblx0XHRcdH1cblx0XHRcdGdyb3Vwcy5wdXNoKCAodG9rZW5zID0gW10pICk7XG5cdFx0fVxuXG5cdFx0bWF0Y2hlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gQ29tYmluYXRvcnNcblx0XHRpZiAoIChtYXRjaCA9IHJjb21iaW5hdG9ycy5leGVjKCBzb0ZhciApKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWzBdLnJlcGxhY2UoIHJ0cmltLCBcIiBcIiApXG5cdFx0XHR9KTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoIChtYXRjaCA9IG1hdGNoRXhwclsgdHlwZSBdLmV4ZWMoIHNvRmFyICkpICYmICghcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdChtYXRjaCA9IHByZUZpbHRlcnNbIHR5cGUgXSggbWF0Y2ggKSkpICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goe1xuXHRcdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0bWF0Y2hlczogbWF0Y2hcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCAhbWF0Y2hlZCApIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuXHQvLyBpZiB3ZSdyZSBqdXN0IHBhcnNpbmdcblx0Ly8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG5cdHJldHVybiBwYXJzZU9ubHkgP1xuXHRcdHNvRmFyLmxlbmd0aCA6XG5cdFx0c29GYXIgP1xuXHRcdFx0U2l6emxlLmVycm9yKCBzZWxlY3RvciApIDpcblx0XHRcdC8vIENhY2hlIHRoZSB0b2tlbnNcblx0XHRcdHRva2VuQ2FjaGUoIHNlbGVjdG9yLCBncm91cHMgKS5zbGljZSggMCApO1xufTtcblxuZnVuY3Rpb24gdG9TZWxlY3RvciggdG9rZW5zICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRzZWxlY3RvciA9IFwiXCI7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdHNlbGVjdG9yICs9IHRva2Vuc1tpXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXHRcdC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIHVuaXF1ZUNhY2hlLCBvdXRlckNhY2hlLFxuXHRcdFx0XHRuZXdDYWNoZSA9IFsgZGlycnVucywgZG9uZU5hbWUgXTtcblxuXHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKGVsZW1bIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuXHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSB8fCAob3V0ZXJDYWNoZVsgZWxlbS51bmlxdWVJRCBdID0ge30pO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraXAgJiYgc2tpcCA9PT0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIChvbGRDYWNoZSA9IHVuaXF1ZUNhY2hlWyBrZXkgXSkgJiZcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbaV0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSA6XG5cdFx0bWF0Y2hlcnNbMF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0U2l6emxlKCBzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sXG5cdFx0XHRwcmVNYXAgPSBbXSxcblx0XHRcdHBvc3RNYXAgPSBbXSxcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cblx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cblx0XHRcdC8vIFByZWZpbHRlciB0byBnZXQgbWF0Y2hlciBpbnB1dCwgcHJlc2VydmluZyBhIG1hcCBmb3Igc2VlZC1yZXN1bHRzIHN5bmNocm9uaXphdGlvblxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGNvbmRlbnNlKCBlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0ZWxlbXMsXG5cblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVyID9cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXIgb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdFx0cG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xuXG5cdFx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0W10gOlxuXG5cdFx0XHRcdFx0Ly8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG5cdFx0XHRcdFx0cmVzdWx0cyA6XG5cdFx0XHRcdG1hdGNoZXJJbjtcblxuXHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXHRcdFx0bWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwb3N0RmlsdGVyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xuXHRcdFx0dGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG5cdFx0XHRwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cblx0XHRcdC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIChlbGVtID0gdGVtcFtpXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlck91dFsgcG9zdE1hcFtpXSBdID0gIShtYXRjaGVySW5bIHBvc3RNYXBbaV0gXSA9IGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyIHx8IHByZUZpbHRlciApIHtcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gbWF0Y2hlck91dFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG5cdFx0XHRcdFx0XHRcdHRlbXAucHVzaCggKG1hdGNoZXJJbltpXSA9IGVsZW0pICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIChtYXRjaGVyT3V0ID0gW10pLCB0ZW1wLCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmXG5cdFx0XHRcdFx0XHQodGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbaV0pID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1swXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZiggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KGNoZWNrQ29udGV4dCA9IGNvbnRleHQpLm5vZGVUeXBlID9cblx0XHRcdFx0XHRtYXRjaENvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zW2ldLnR5cGUgXSkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlcikgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbaV0udHlwZSBdLmFwcGx5KCBudWxsLCB0b2tlbnNbaV0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3Rvcihcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxICkuY29uY2F0KHsgdmFsdWU6IHRva2Vuc1sgaSAtIDIgXS50eXBlID09PSBcIiBcIiA/IFwiKlwiIDogXCJcIiB9KVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKHRva2VucyA9IHRva2Vucy5zbGljZSggaiApKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdG1hdGNoZXJzLnB1c2goIG1hdGNoZXIgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApIHtcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRzdXBlck1hdGNoZXIgPSBmdW5jdGlvbiggc2VlZCwgY29udGV4dCwgeG1sLCByZXN1bHRzLCBvdXRlcm1vc3QgKSB7XG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcblx0XHRcdFx0bWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0aSA9IFwiMFwiLFxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuXHRcdFx0XHRzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PT0gZG9jdW1lbnQgfHwgY29udGV4dCB8fCBvdXRlcm1vc3Q7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTw5LCBTYWZhcmlcblx0XHRcdC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxuXHRcdFx0Zm9yICggOyBpICE9PSBsZW4gJiYgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdGlmICggIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCApIHtcblx0XHRcdFx0XHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdFx0XHRcdFx0XHR4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlICggKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCkgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG5cdFx0XHQvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuXHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0Ly8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG5cdFx0XHQvLyBudW1lcmljYWxseSB6ZXJvLlxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISh1bm1hdGNoZWRbaV0gfHwgc2V0TWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKCBtYXRjaFtpXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufTtcblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5zZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG5cdC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVsgdG9rZW5zWzFdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggRXhwci5maW5kW1wiSURcIl0oIHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksIGNvbnRleHQgKSB8fCBbXSApWzBdO1xuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcblx0XHRcdH0gZWxzZSBpZiAoIGNvbXBpbGVkICkge1xuXHRcdFx0XHRjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKCB0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cdFx0aSA9IG1hdGNoRXhwcltcIm5lZWRzQ29udGV4dFwiXS50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0b2tlbiA9IHRva2Vuc1tpXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyAodHlwZSA9IHRva2VuLnR5cGUpIF0gKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoZmluZCA9IEV4cHIuZmluZFsgdHlwZSBdKSApIHtcblx0XHRcdFx0Ly8gU2VhcmNoLCBleHBhbmRpbmcgY29udGV4dCBmb3IgbGVhZGluZyBzaWJsaW5nIGNvbWJpbmF0b3JzXG5cdFx0XHRcdGlmICggKHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0XHRyc2libGluZy50ZXN0KCB0b2tlbnNbMF0udHlwZSApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdFx0XHRcdCkpICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG5cbi8vIFNvcnQgc3RhYmlsaXR5XG5zdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KFwiXCIpLnNvcnQoIHNvcnRPcmRlciApLmpvaW4oXCJcIikgPT09IGV4cGFuZG87XG5cbi8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbi8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbnN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcyA9ICEhaGFzRHVwbGljYXRlO1xuXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7XG5cbi8vIFN1cHBvcnQ6IFdlYmtpdDw1MzcuMzIgLSBTYWZhcmkgNi4wLjMvQ2hyb21lIDI1IChmaXhlZCBpbiBDaHJvbWUgMjcpXG4vLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcbnN1cHBvcnQuc29ydERldGFjaGVkID0gYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpICkgJiAxO1xufSk7XG5cbi8vIFN1cHBvcnQ6IElFPDhcbi8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4vLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM2NDI5JTI4VlMuODUlMjkuYXNweFxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz48L2E+XCI7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiIDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMiApO1xuXHRcdH1cblx0fSk7XG59XG5cbi8vIFN1cHBvcnQ6IElFPDlcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcbmlmICggIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0ZWwuaW5uZXJIVE1MID0gXCI8aW5wdXQvPlwiO1xuXHRlbC5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XG5cdHJldHVybiBlbC5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInZhbHVlXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5pZiAoICFhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRyZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHZhbDtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtWyBuYW1lIF0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0XHRcdCh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIG5hbWUgKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcblx0XHR9XG5cdH0pO1xufVxuXG5yZXR1cm4gU2l6emxlO1xuXG59KSggd2luZG93ICk7XG5cblxuXG5qUXVlcnkuZmluZCA9IFNpenpsZTtcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xualF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xualF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gU2l6emxlLmVzY2FwZTtcblxuXG5cblxudmFyIGRpciA9IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdG1hdGNoZWQucHVzaCggbiApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxudmFyIHJzaW5nbGVUYWcgPSAoIC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pICk7XG5cblxuXG52YXIgcmlzU2ltcGxlID0gL14uW146I1xcW1xcLixdKiQvO1xuXG4vLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIFNpbmdsZSBlbGVtZW50XG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW1wbGUgc2VsZWN0b3IgdGhhdCBjYW4gYmUgZmlsdGVyZWQgZGlyZWN0bHksIHJlbW92aW5nIG5vbi1FbGVtZW50c1xuXHRpZiAoIHJpc1NpbXBsZS50ZXN0KCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG5cdH1cblxuXHQvLyBDb21wbGV4IHNlbGVjdG9yLCBjb21wYXJlIHRoZSB0d28gc2V0cywgcmVtb3Zpbmcgbm9uLUVsZW1lbnRzXG5cdHF1YWxpZmllciA9IGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMgKTtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdCAmJiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHR9ICk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRpZiAoIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW107XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZpbmQ6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgaSwgcmV0LFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkoIHNlbGVjdG9yICkuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSApO1xuXHRcdH1cblxuXHRcdHJldCA9IHRoaXMucHVzaFN0YWNrKCBbXSApO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCByZXQgKSA6IHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSApICk7XG5cdH0sXG5cdG5vdDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSApO1xuXG5cbi8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG5cblxuLy8gQSBjZW50cmFsIHJlZmVyZW5jZSB0byB0aGUgcm9vdCBqUXVlcnkoZG9jdW1lbnQpXG52YXIgcm9vdGpRdWVyeSxcblxuXHQvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuXHQvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICgjMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuXHQvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG5cdHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcblxuXHRpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QgKSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgaW5pdCgpIGFjY2VwdHMgYW4gYWx0ZXJuYXRlIHJvb3RqUXVlcnlcblx0XHQvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cdFx0cm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTtcblxuXHRcdC8vIEhhbmRsZSBIVE1MIHN0cmluZ3Ncblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGlmICggc2VsZWN0b3JbIDAgXSA9PT0gXCI8XCIgJiZcblx0XHRcdFx0c2VsZWN0b3JbIHNlbGVjdG9yLmxlbmd0aCAtIDEgXSA9PT0gXCI+XCIgJiZcblx0XHRcdFx0c2VsZWN0b3IubGVuZ3RoID49IDMgKSB7XG5cblx0XHRcdFx0Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcblx0XHRcdFx0bWF0Y2ggPSBbIG51bGwsIHNlbGVjdG9yLCBudWxsIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHRpZiAoIG1hdGNoICYmICggbWF0Y2hbIDEgXSB8fCAhY29udGV4dCApICkge1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuXHRcdFx0XHRpZiAoIG1hdGNoWyAxIF0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WyAwIF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsgMSBdLFxuXHRcdFx0XHRcdFx0Y29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCxcblx0XHRcdFx0XHRcdHRydWVcblx0XHRcdFx0XHQpICk7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cdFx0XHRcdFx0aWYgKCByc2luZ2xlVGFnLnRlc3QoIG1hdGNoWyAxIF0gKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29udGV4dCApICkge1xuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHR0aGlzWyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdCApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHNlbGVjdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdC5yZWFkeSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cm9vdC5yZWFkeSggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG5cdH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbmluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuO1xuXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5yb290alF1ZXJ5ID0galF1ZXJ5KCBkb2N1bWVudCApO1xuXG5cbnZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblxuXHQvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuXHRndWFyYW50ZWVkVW5pcXVlID0ge1xuXHRcdGNoaWxkcmVuOiB0cnVlLFxuXHRcdGNvbnRlbnRzOiB0cnVlLFxuXHRcdG5leHQ6IHRydWUsXG5cdFx0cHJldjogdHJ1ZVxuXHR9O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhhczogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR2YXIgdGFyZ2V0cyA9IGpRdWVyeSggdGFyZ2V0LCB0aGlzICksXG5cdFx0XHRsID0gdGFyZ2V0cy5sZW5ndGg7XG5cblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1sgaSBdICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRtYXRjaGVkID0gW10sXG5cdFx0XHR0YXJnZXRzID0gdHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBqUXVlcnkoIHNlbGVjdG9ycyApO1xuXG5cdFx0Ly8gUG9zaXRpb25hbCBzZWxlY3RvcnMgbmV2ZXIgbWF0Y2gsIHNpbmNlIHRoZXJlJ3Mgbm8gX3NlbGVjdGlvbl8gY29udGV4dFxuXHRcdGlmICggIXJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3JzICkgKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZvciAoIGN1ciA9IHRoaXNbIGkgXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cblx0XHRcdFx0XHQvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcblx0XHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA8IDExICYmICggdGFyZ2V0cyA/XG5cdFx0XHRcdFx0XHR0YXJnZXRzLmluZGV4KCBjdXIgKSA+IC0xIDpcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8gU2l6emxlXG5cdFx0XHRcdFx0XHRjdXIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBjdXIsIHNlbGVjdG9ycyApICkgKSB7XG5cblx0XHRcdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XG5cdH0sXG5cblx0Ly8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG5cdGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybiAoIHRoaXNbIDAgXSAmJiB0aGlzWyAwIF0ucGFyZW50Tm9kZSApID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcblx0XHR9XG5cblx0XHQvLyBJbmRleCBpbiBzZWxlY3RvclxuXHRcdGlmICggdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdGhpc1sgMCBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5cdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggdGhpcyxcblxuXHRcdFx0Ly8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG5cdFx0XHRlbGVtLmpxdWVyeSA/IGVsZW1bIDAgXSA6IGVsZW1cblx0XHQpO1xuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhcblx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRhZGRCYWNrOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoIHNlbGVjdG9yIClcblx0XHQpO1xuXHR9XG59ICk7XG5cbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuXHR3aGlsZSAoICggY3VyID0gY3VyWyBkaXIgXSApICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG5cdHJldHVybiBjdXI7XG59XG5cbmpRdWVyeS5lYWNoKCB7XG5cdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRyZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuXHR9LFxuXHRwYXJlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiApO1xuXHR9LFxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldkFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHNpYmxpbmdzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoICggZWxlbS5wYXJlbnROb2RlIHx8IHt9ICkuZmlyc3RDaGlsZCwgZWxlbSApO1xuXHR9LFxuXHRjaGlsZHJlbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCBlbGVtLmZpcnN0Q2hpbGQgKTtcblx0fSxcblx0Y29udGVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBlbGVtLmNvbnRlbnREb2N1bWVudCB8fCBqUXVlcnkubWVyZ2UoIFtdLCBlbGVtLmNoaWxkTm9kZXMgKTtcblx0fVxufSwgZnVuY3Rpb24oIG5hbWUsIGZuICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCB1bnRpbCwgc2VsZWN0b3IgKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBqUXVlcnkubWFwKCB0aGlzLCBmbiwgdW50aWwgKTtcblxuXHRcdGlmICggbmFtZS5zbGljZSggLTUgKSAhPT0gXCJVbnRpbFwiICkge1xuXHRcdFx0c2VsZWN0b3IgPSB1bnRpbDtcblx0XHR9XG5cblx0XHRpZiAoIHNlbGVjdG9yICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG1hdGNoZWQgPSBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgbWF0Y2hlZCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlc1xuXHRcdFx0aWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xuXHRcdFx0XHRqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXZlcnNlIG9yZGVyIGZvciBwYXJlbnRzKiBhbmQgcHJldi1kZXJpdmF0aXZlc1xuXHRcdFx0aWYgKCBycGFyZW50c3ByZXYudGVzdCggbmFtZSApICkge1xuXHRcdFx0XHRtYXRjaGVkLnJldmVyc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQgKTtcblx0fTtcbn0gKTtcbnZhciBybm90aHRtbHdoaXRlID0gKCAvW15cXHgyMFxcdFxcclxcblxcZl0rL2cgKTtcblxuXG5cbi8vIENvbnZlcnQgU3RyaW5nLWZvcm1hdHRlZCBvcHRpb25zIGludG8gT2JqZWN0LWZvcm1hdHRlZCBvbmVzXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zKCBvcHRpb25zICkge1xuXHR2YXIgb2JqZWN0ID0ge307XG5cdGpRdWVyeS5lYWNoKCBvcHRpb25zLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10sIGZ1bmN0aW9uKCBfLCBmbGFnICkge1xuXHRcdG9iamVjdFsgZmxhZyBdID0gdHJ1ZTtcblx0fSApO1xuXHRyZXR1cm4gb2JqZWN0O1xufVxuXG4vKlxuICogQ3JlYXRlIGEgY2FsbGJhY2sgbGlzdCB1c2luZyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG4gKlxuICpcdG9wdGlvbnM6IGFuIG9wdGlvbmFsIGxpc3Qgb2Ygc3BhY2Utc2VwYXJhdGVkIG9wdGlvbnMgdGhhdCB3aWxsIGNoYW5nZSBob3dcbiAqXHRcdFx0dGhlIGNhbGxiYWNrIGxpc3QgYmVoYXZlcyBvciBhIG1vcmUgdHJhZGl0aW9uYWwgb3B0aW9uIG9iamVjdFxuICpcbiAqIEJ5IGRlZmF1bHQgYSBjYWxsYmFjayBsaXN0IHdpbGwgYWN0IGxpa2UgYW4gZXZlbnQgY2FsbGJhY2sgbGlzdCBhbmQgY2FuIGJlXG4gKiBcImZpcmVkXCIgbXVsdGlwbGUgdGltZXMuXG4gKlxuICogUG9zc2libGUgb3B0aW9uczpcbiAqXG4gKlx0b25jZTpcdFx0XHR3aWxsIGVuc3VyZSB0aGUgY2FsbGJhY2sgbGlzdCBjYW4gb25seSBiZSBmaXJlZCBvbmNlIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdG1lbW9yeTpcdFx0XHR3aWxsIGtlZXAgdHJhY2sgb2YgcHJldmlvdXMgdmFsdWVzIGFuZCB3aWxsIGNhbGwgYW55IGNhbGxiYWNrIGFkZGVkXG4gKlx0XHRcdFx0XHRhZnRlciB0aGUgbGlzdCBoYXMgYmVlbiBmaXJlZCByaWdodCBhd2F5IHdpdGggdGhlIGxhdGVzdCBcIm1lbW9yaXplZFwiXG4gKlx0XHRcdFx0XHR2YWx1ZXMgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0dW5pcXVlOlx0XHRcdHdpbGwgZW5zdXJlIGEgY2FsbGJhY2sgY2FuIG9ubHkgYmUgYWRkZWQgb25jZSAobm8gZHVwbGljYXRlIGluIHRoZSBsaXN0KVxuICpcbiAqXHRzdG9wT25GYWxzZTpcdGludGVycnVwdCBjYWxsaW5ncyB3aGVuIGEgY2FsbGJhY2sgcmV0dXJucyBmYWxzZVxuICpcbiAqL1xualF1ZXJ5LkNhbGxiYWNrcyA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG5cdC8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcblx0Ly8gKHdlIGNoZWNrIGluIGNhY2hlIGZpcnN0KVxuXHRvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgP1xuXHRcdGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSA6XG5cdFx0alF1ZXJ5LmV4dGVuZCgge30sIG9wdGlvbnMgKTtcblxuXHR2YXIgLy8gRmxhZyB0byBrbm93IGlmIGxpc3QgaXMgY3VycmVudGx5IGZpcmluZ1xuXHRcdGZpcmluZyxcblxuXHRcdC8vIExhc3QgZmlyZSB2YWx1ZSBmb3Igbm9uLWZvcmdldHRhYmxlIGxpc3RzXG5cdFx0bWVtb3J5LFxuXG5cdFx0Ly8gRmxhZyB0byBrbm93IGlmIGxpc3Qgd2FzIGFscmVhZHkgZmlyZWRcblx0XHRmaXJlZCxcblxuXHRcdC8vIEZsYWcgdG8gcHJldmVudCBmaXJpbmdcblx0XHRsb2NrZWQsXG5cblx0XHQvLyBBY3R1YWwgY2FsbGJhY2sgbGlzdFxuXHRcdGxpc3QgPSBbXSxcblxuXHRcdC8vIFF1ZXVlIG9mIGV4ZWN1dGlvbiBkYXRhIGZvciByZXBlYXRhYmxlIGxpc3RzXG5cdFx0cXVldWUgPSBbXSxcblxuXHRcdC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IGFkZC9yZW1vdmUgYXMgbmVlZGVkKVxuXHRcdGZpcmluZ0luZGV4ID0gLTEsXG5cblx0XHQvLyBGaXJlIGNhbGxiYWNrc1xuXHRcdGZpcmUgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5mb3JjZSBzaW5nbGUtZmlyaW5nXG5cdFx0XHRsb2NrZWQgPSBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGFyZyAmJiBhcmcubGVuZ3RoICYmIGpRdWVyeS50eXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS5wcm9taXNlICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSApLmRvbmUoIHJlc29sdmUgKS5mYWlsKCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIHRoZW5hYmxlc1xuXHRcdH0gZWxzZSBpZiAoIHZhbHVlICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnRoZW4gKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlLCByZXNvbHZlLCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG5cdFx0XHQvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5cdFx0XHRyZXNvbHZlLmNhbGwoIHVuZGVmaW5lZCwgdmFsdWUgKTtcblx0XHR9XG5cblx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cblx0Ly8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblx0fSBjYXRjaCAoIHZhbHVlICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRyZWplY3QuY2FsbCggdW5kZWZpbmVkLCB2YWx1ZSApO1xuXHR9XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHREZWZlcnJlZDogZnVuY3Rpb24oIGZ1bmMgKSB7XG5cdFx0dmFyIHR1cGxlcyA9IFtcblxuXHRcdFx0XHQvLyBhY3Rpb24sIGFkZCBsaXN0ZW5lciwgY2FsbGJhY2tzLFxuXHRcdFx0XHQvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG5cdFx0XHRcdFsgXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLCAyIF0sXG5cdFx0XHRcdFsgXCJyZXNvbHZlXCIsIFwiZG9uZVwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMCwgXCJyZXNvbHZlZFwiIF0sXG5cdFx0XHRcdFsgXCJyZWplY3RcIiwgXCJmYWlsXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAxLCBcInJlamVjdGVkXCIgXVxuXHRcdFx0XSxcblx0XHRcdHN0YXRlID0gXCJwZW5kaW5nXCIsXG5cdFx0XHRwcm9taXNlID0ge1xuXHRcdFx0XHRzdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbHdheXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRlZmVycmVkLmRvbmUoIGFyZ3VtZW50cyApLmZhaWwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRcImNhdGNoXCI6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZS50aGVuKCBudWxsLCBmbiApO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcblx0XHRcdFx0cGlwZTogZnVuY3Rpb24oIC8qIGZuRG9uZSwgZm5GYWlsLCBmblByb2dyZXNzICovICkge1xuXHRcdFx0XHRcdHZhciBmbnMgPSBhcmd1bWVudHM7XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG5cdFx0XHRcdFx0XHRcdHZhciBmbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCBmbnNbIHR1cGxlWyA0IF0gXSApICYmIGZuc1sgdHVwbGVbIDQgXSBdO1xuXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLnByb2dyZXNzKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLm5vdGlmeSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5kb25lKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlc29sdmUgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAxIF0gXSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkID0gZm4gJiYgZm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIHJldHVybmVkLnByb21pc2UgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnByb21pc2UoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucHJvZ3Jlc3MoIG5ld0RlZmVyLm5vdGlmeSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5kb25lKCBuZXdEZWZlci5yZXNvbHZlIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmZhaWwoIG5ld0RlZmVyLnJlamVjdCApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlclsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZuID8gWyByZXR1cm5lZCBdIDogYXJndW1lbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0Zm5zID0gbnVsbDtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiggb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0dmFyIG1heERlcHRoID0gMDtcblx0XHRcdFx0XHRmdW5jdGlvbiByZXNvbHZlKCBkZXB0aCwgZGVmZXJyZWQsIGhhbmRsZXIsIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdFx0XHRcdFx0XHRhcmdzID0gYXJndW1lbnRzLFxuXHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCwgdGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjNcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgZG91YmxlLXJlc29sdXRpb24gYXR0ZW1wdHNcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggZGVwdGggPCBtYXhEZXB0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCA9IGhhbmRsZXIuYXBwbHkoIHRoYXQsIGFyZ3MgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDhcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgPT09IGRlZmVycmVkLnByb21pc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9ucyAyLjMuMy4xLCAzLjVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC03NVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmV0cmlldmUgYHRoZW5gIG9ubHkgb25jZVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhlbiA9IHJldHVybmVkICYmXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuNFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIG9iamVjdHMgYW5kIGZ1bmN0aW9ucyBmb3IgdGhlbmFiaWxpdHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCB0eXBlb2YgcmV0dXJuZWQgPT09IFwib2JqZWN0XCIgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgcmV0dXJuZWQgPT09IFwiZnVuY3Rpb25cIiApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhIHJldHVybmVkIHRoZW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB0aGVuICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3BlY2lhbCBwcm9jZXNzb3JzIChub3RpZnkpIGp1c3Qgd2FpdCBmb3IgcmVzb2x1dGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4RGVwdGgrKztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gSWRlbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyByZXR1cm5lZCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gUHJvY2VzcyB0aGUgdmFsdWUocylcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCBzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoICkoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBub3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgY2F0Y2ggYW5kIHJlamVjdCBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcyA9IHNwZWNpYWwgP1xuXHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKCBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLnN0YWNrVHJhY2UgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuNC4xXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgcG9zdC1yZXNvbHV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICsgMSA+PSBtYXhEZXB0aCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IFRocm93ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIGUgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuXHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuXHRcdFx0XHRcdFx0XHQvLyBSZS1yZXNvbHZlIHByb21pc2VzIGltbWVkaWF0ZWx5IHRvIGRvZGdlIGZhbHNlIHJlamVjdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgc3RhY2ssIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2luY2UgaXQncyBvdGhlcndpc2UgbG9zdCB3aGVuIGV4ZWN1dGlvbiBnb2VzIGFzeW5jXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlID0galF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggcHJvY2VzcyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblxuXHRcdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggb25Qcm9ncmVzcyApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUHJvZ3Jlc3MgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIubm90aWZ5V2l0aFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAxIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggb25GdWxmaWxsZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZ1bGZpbGxlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDIgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCBvblJlamVjdGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25SZWplY3RlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRUaHJvd2VyXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBHZXQgYSBwcm9taXNlIGZvciB0aGlzIGRlZmVycmVkXG5cdFx0XHRcdC8vIElmIG9iaiBpcyBwcm92aWRlZCwgdGhlIHByb21pc2UgYXNwZWN0IGlzIGFkZGVkIHRvIHRoZSBvYmplY3Rcblx0XHRcdFx0cHJvbWlzZTogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRcdFx0XHRyZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKCBvYmosIHByb21pc2UgKSA6IHByb21pc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWZlcnJlZCA9IHt9O1xuXG5cdFx0Ly8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuXHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblx0XHRcdHZhciBsaXN0ID0gdHVwbGVbIDIgXSxcblx0XHRcdFx0c3RhdGVTdHJpbmcgPSB0dXBsZVsgNSBdO1xuXG5cdFx0XHQvLyBwcm9taXNlLnByb2dyZXNzID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZG9uZSA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmZhaWwgPSBsaXN0LmFkZFxuXHRcdFx0cHJvbWlzZVsgdHVwbGVbIDEgXSBdID0gbGlzdC5hZGQ7XG5cblx0XHRcdC8vIEhhbmRsZSBzdGF0ZVxuXHRcdFx0aWYgKCBzdGF0ZVN0cmluZyApIHtcblx0XHRcdFx0bGlzdC5hZGQoXG5cdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZXNvbHZlZFwiIChpLmUuLCBmdWxmaWxsZWQpXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVqZWN0ZWRcIlxuXHRcdFx0XHRcdFx0c3RhdGUgPSBzdGF0ZVN0cmluZztcblx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfY2FsbGJhY2tzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDIgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfY2FsbGJhY2tzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMiBdLmxvY2tcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdGxpc3QuYWRkKCB0dXBsZVsgMyBdLmZpcmUgKTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlamVjdFdpdGgoLi4uKSB9XG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyB1bmRlZmluZWQgOiB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdID0gbGlzdC5maXJlV2l0aDtcblx0XHR9ICk7XG5cblx0XHQvLyBNYWtlIHRoZSBkZWZlcnJlZCBhIHByb21pc2Vcblx0XHRwcm9taXNlLnByb21pc2UoIGRlZmVycmVkICk7XG5cblx0XHQvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG5cdFx0aWYgKCBmdW5jICkge1xuXHRcdFx0ZnVuYy5jYWxsKCBkZWZlcnJlZCwgZGVmZXJyZWQgKTtcblx0XHR9XG5cblx0XHQvLyBBbGwgZG9uZSFcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH0sXG5cblx0Ly8gRGVmZXJyZWQgaGVscGVyXG5cdHdoZW46IGZ1bmN0aW9uKCBzaW5nbGVWYWx1ZSApIHtcblx0XHR2YXJcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG5cdFx0XHRyZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcblx0XHRcdGkgPSByZW1haW5pbmcsXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcblx0XHRcdHJlc29sdmVDb250ZXh0cyA9IEFycmF5KCBpICksXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG5cblx0XHRcdC8vIHRoZSBtYXN0ZXIgRGVmZXJyZWRcblx0XHRcdG1hc3RlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBjYWxsYmFjayBmYWN0b3J5XG5cdFx0XHR1cGRhdGVGdW5jID0gZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZUNvbnRleHRzWyBpIF0gPSB0aGlzO1xuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UuY2FsbCggYXJndW1lbnRzICkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoICEoIC0tcmVtYWluaW5nICkgKSB7XG5cdFx0XHRcdFx0XHRtYXN0ZXIucmVzb2x2ZVdpdGgoIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHQvLyBTaW5nbGUtIGFuZCBlbXB0eSBhcmd1bWVudHMgYXJlIGFkb3B0ZWQgbGlrZSBQcm9taXNlLnJlc29sdmVcblx0XHRpZiAoIHJlbWFpbmluZyA8PSAxICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggc2luZ2xlVmFsdWUsIG1hc3Rlci5kb25lKCB1cGRhdGVGdW5jKCBpICkgKS5yZXNvbHZlLCBtYXN0ZXIucmVqZWN0ICk7XG5cblx0XHRcdC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblx0XHRcdGlmICggbWFzdGVyLnN0YXRlKCkgPT09IFwicGVuZGluZ1wiIHx8XG5cdFx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0gJiYgcmVzb2x2ZVZhbHVlc1sgaSBdLnRoZW4gKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gbWFzdGVyLnRoZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggcmVzb2x2ZVZhbHVlc1sgaSBdLCB1cGRhdGVGdW5jKCBpICksIG1hc3Rlci5yZWplY3QgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFzdGVyLnByb21pc2UoKTtcblx0fVxufSApO1xuXG5cbi8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG52YXIgcmVycm9yTmFtZXMgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcblxualF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgPSBmdW5jdGlvbiggZXJyb3IsIHN0YWNrICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDggLSA5IG9ubHlcblx0Ly8gQ29uc29sZSBleGlzdHMgd2hlbiBkZXYgdG9vbHMgYXJlIG9wZW4sIHdoaWNoIGNhbiBoYXBwZW4gYXQgYW55IHRpbWVcblx0aWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoIGVycm9yLm5hbWUgKSApIHtcblx0XHR3aW5kb3cuY29uc29sZS53YXJuKCBcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiICsgZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2ssIHN0YWNrICk7XG5cdH1cbn07XG5cblxuXG5cbmpRdWVyeS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKCBlcnJvciApIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9ICk7XG59O1xuXG5cblxuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxualF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXG5cdHJlYWR5TGlzdFxuXHRcdC50aGVuKCBmbiApXG5cblx0XHQvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuXHRcdC8vIGhhcHBlbnMgYXQgdGhlIHRpbWUgb2YgZXJyb3IgaGFuZGxpbmcgaW5zdGVhZCBvZiBjYWxsYmFja1xuXHRcdC8vIHJlZ2lzdHJhdGlvbi5cblx0XHQuY2F0Y2goIGZ1bmN0aW9uKCBlcnJvciApIHtcblx0XHRcdGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiggZXJyb3IgKTtcblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0aXNSZWFkeTogZmFsc2UsXG5cblx0Ly8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuXHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuXHRyZWFkeVdhaXQ6IDEsXG5cblx0Ly8gSG9sZCAob3IgcmVsZWFzZSkgdGhlIHJlYWR5IGV2ZW50XG5cdGhvbGRSZWFkeTogZnVuY3Rpb24oIGhvbGQgKSB7XG5cdFx0aWYgKCBob2xkICkge1xuXHRcdFx0alF1ZXJ5LnJlYWR5V2FpdCsrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqUXVlcnkucmVhZHkoIHRydWUgKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XG5cblx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0alF1ZXJ5LmlzUmVhZHkgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblx0XHRpZiAoIHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47XG5cbi8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcblx0alF1ZXJ5LnJlYWR5KCk7XG59XG5cbi8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4vLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbi8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcblx0KCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XG5cblx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBqUXVlcnkucmVhZHkgKTtcblxufSBlbHNlIHtcblxuXHQvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblxuXHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xufVxuXG5cblxuXG4vLyBNdWx0aWZ1bmN0aW9uYWwgbWV0aG9kIHRvIGdldCBhbmQgc2V0IHZhbHVlcyBvZiBhIGNvbGxlY3Rpb25cbi8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxudmFyIGFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGVsZW1zLmxlbmd0aCxcblx0XHRidWxrID0ga2V5ID09IG51bGw7XG5cblx0Ly8gU2V0cyBtYW55IHZhbHVlc1xuXHRpZiAoIGpRdWVyeS50eXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdGZvciAoIGkgaW4ga2V5ICkge1xuXHRcdFx0YWNjZXNzKCBlbGVtcywgZm4sIGksIGtleVsgaSBdLCB0cnVlLCBlbXB0eUdldCwgcmF3ICk7XG5cdFx0fVxuXG5cdC8vIFNldHMgb25lIHZhbHVlXG5cdH0gZWxzZSBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblxuXHRcdGlmICggIWpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmF3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJ1bGsgKSB7XG5cblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0aWYgKCByYXcgKSB7XG5cdFx0XHRcdGZuLmNhbGwoIGVsZW1zLCB2YWx1ZSApO1xuXHRcdFx0XHRmbiA9IG51bGw7XG5cblx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1bGsgPSBmbjtcblx0XHRcdFx0Zm4gPSBmdW5jdGlvbiggZWxlbSwga2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGZuKFxuXHRcdFx0XHRcdGVsZW1zWyBpIF0sIGtleSwgcmF3ID9cblx0XHRcdFx0XHR2YWx1ZSA6XG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggZWxlbXNbIGkgXSwgaSwgZm4oIGVsZW1zWyBpIF0sIGtleSApIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIGNoYWluYWJsZSApIHtcblx0XHRyZXR1cm4gZWxlbXM7XG5cdH1cblxuXHQvLyBHZXRzXG5cdGlmICggYnVsayApIHtcblx0XHRyZXR1cm4gZm4uY2FsbCggZWxlbXMgKTtcblx0fVxuXG5cdHJldHVybiBsZW4gPyBmbiggZWxlbXNbIDAgXSwga2V5ICkgOiBlbXB0eUdldDtcbn07XG52YXIgYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHQvLyBBY2NlcHRzIG9ubHk6XG5cdC8vICAtIE5vZGVcblx0Ly8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuXHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHQvLyAgLSBPYmplY3Rcblx0Ly8gICAgLSBBbnlcblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufTtcblxuXG5cblxuZnVuY3Rpb24gRGF0YSgpIHtcblx0dGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xufVxuXG5EYXRhLnVpZCA9IDE7XG5cbkRhdGEucHJvdG90eXBlID0ge1xuXG5cdGNhY2hlOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgb3duZXIgb2JqZWN0IGFscmVhZHkgaGFzIGEgY2FjaGVcblx0XHR2YXIgdmFsdWUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHQvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblx0XHRpZiAoICF2YWx1ZSApIHtcblx0XHRcdHZhbHVlID0ge307XG5cblx0XHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cblx0XHRcdC8vIEFsd2F5cyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuXHRcdFx0aWYgKCBhY2NlcHREYXRhKCBvd25lciApICkge1xuXG5cdFx0XHRcdC8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcblx0XHRcdFx0Ly8gdXNlIHBsYWluIGFzc2lnbm1lbnRcblx0XHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB2YWx1ZTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcblx0XHRcdFx0Ly8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcblx0XHRcdFx0Ly8gZGVsZXRlZCB3aGVuIGRhdGEgaXMgcmVtb3ZlZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb3duZXIsIHRoaXMuZXhwYW5kbywge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uKCBvd25lciwgZGF0YSwgdmFsdWUgKSB7XG5cdFx0dmFyIHByb3AsXG5cdFx0XHRjYWNoZSA9IHRoaXMuY2FjaGUoIG93bmVyICk7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIGtleSwgdmFsdWUgXSBhcmdzXG5cdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRjYWNoZVsgalF1ZXJ5LmNhbWVsQ2FzZSggZGF0YSApIF0gPSB2YWx1ZTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVbIGpRdWVyeS5jYW1lbENhc2UoIHByb3AgKSBdID0gZGF0YVsgcHJvcCBdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FjaGU7XG5cdH0sXG5cdGdldDogZnVuY3Rpb24oIG93bmVyLCBrZXkgKSB7XG5cdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMuY2FjaGUoIG93bmVyICkgOlxuXG5cdFx0XHQvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5cdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gJiYgb3duZXJbIHRoaXMuZXhwYW5kbyBdWyBqUXVlcnkuY2FtZWxDYXNlKCBrZXkgKSBdO1xuXHR9LFxuXHRhY2Nlc3M6IGZ1bmN0aW9uKCBvd25lciwga2V5LCB2YWx1ZSApIHtcblxuXHRcdC8vIEluIGNhc2VzIHdoZXJlIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcblx0XHQvLyAgIDIuIEEgc3RyaW5nIGtleSB3YXMgc3BlY2lmaWVkLCBidXQgbm8gdmFsdWUgcHJvdmlkZWRcblx0XHQvL1xuXHRcdC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuXHRcdC8vIHdoaWNoIHZhbHVlIHRvIHJldHVybiwgcmVzcGVjdGl2ZWx5IGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcblx0XHQvLyAgIDIuIFRoZSBkYXRhIHN0b3JlZCBhdCB0aGUga2V5XG5cdFx0Ly9cblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdCggKCBrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiApICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSApIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KCBvd25lciwga2V5ICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcblx0XHQvLyBhcmUgc3BlY2lmaWVkLCBzZXQgb3IgZXh0ZW5kIChleGlzdGluZyBvYmplY3RzKSB3aXRoIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcblx0XHQvLyAgIDIuIEEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vXG5cdFx0dGhpcy5zZXQoIG93bmVyLCBrZXksIHZhbHVlICk7XG5cblx0XHQvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcblx0XHQvLyByZXR1cm4gdGhlIGV4cGVjdGVkIGRhdGEgYmFzZWQgb24gd2hpY2ggcGF0aCB3YXMgdGFrZW5bKl1cblx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHZhciBpLFxuXHRcdFx0Y2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHRpZiAoIGNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBrZXkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcblx0XHRcdGlmICggalF1ZXJ5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBqUXVlcnkuY2FtZWxDYXNlICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRrZXkgPSBqUXVlcnkuY2FtZWxDYXNlKCBrZXkgKTtcblxuXHRcdFx0XHQvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgY3JlYXRlIGFuIGFycmF5IGJ5IG1hdGNoaW5nIG5vbi13aGl0ZXNwYWNlXG5cdFx0XHRcdGtleSA9IGtleSBpbiBjYWNoZSA/XG5cdFx0XHRcdFx0WyBrZXkgXSA6XG5cdFx0XHRcdFx0KCBrZXkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpID0ga2V5Lmxlbmd0aDtcblxuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5WyBpIF0gXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG5cdFx0XHQvLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuXHRcdFx0Ly8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcblx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRoYXNEYXRhOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0dmFyIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKTtcblx0fVxufTtcbnZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cbnZhciBkYXRhVXNlciA9IG5ldyBEYXRhKCk7XG5cblxuXG4vL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuLy9cbi8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4vL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4vL1x0XHRwYXRocyB0byBhIHNpbmdsZSBtZWNoYW5pc20uXG4vL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbi8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4vL1x0NS4gQXZvaWQgZXhwb3NpbmcgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvbiB1c2VyIG9iamVjdHMgKGVnLiBleHBhbmRvIHByb3BlcnRpZXMpXG4vL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbnZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuZnVuY3Rpb24gZ2V0RGF0YSggZGF0YSApIHtcblx0aWYgKCBkYXRhID09PSBcInRydWVcIiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJmYWxzZVwiICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJudWxsXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRpZiAoIGRhdGEgPT09ICtkYXRhICsgXCJcIiApIHtcblx0XHRyZXR1cm4gK2RhdGE7XG5cdH1cblxuXHRpZiAoIHJicmFjZS50ZXN0KCBkYXRhICkgKSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoIGRhdGEgKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkYXRhQXR0ciggZWxlbSwga2V5LCBkYXRhICkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXHRpZiAoIGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJCZcIiApLnRvTG93ZXJDYXNlKCk7XG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGF0YSA9IGdldERhdGEoIGRhdGEgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhVXNlci5zZXQoIGVsZW0sIGtleSwgZGF0YSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuaGFzRGF0YSggZWxlbSApIHx8IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH0sXG5cblx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0Ly8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lLnNsaWNlKCA1ICkgKTtcblx0XHRcdFx0XHRcdFx0XHRkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcblx0XHRpZiAoIHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcblx0XHRcdC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG5cdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0Ly8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuXHRcdFx0Ly8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblx0XHRcdGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0Ly8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBcImRpc2NvdmVyXCIgdGhlIGRhdGEgaW5cblx0XHRcdFx0Ly8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuXHRcdFx0XHRkYXRhID0gZGF0YUF0dHIoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEuLi5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHN0b3JlIHRoZSBjYW1lbENhc2VkIGtleVxuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSwgdmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEsIG51bGwsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGF0YVVzZXIucmVtb3ZlKCB0aGlzLCBrZXkgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgcXVldWU7XG5cblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHR0eXBlID0gKCB0eXBlIHx8IFwiZnhcIiApICsgXCJxdWV1ZVwiO1xuXHRcdFx0cXVldWUgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBqUXVlcnkuaXNBcnJheSggZGF0YSApICkge1xuXHRcdFx0XHRcdHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KCBkYXRhICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWV1ZSB8fCBbXTtcblx0XHR9XG5cdH0sXG5cblx0ZGVxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCBlbGVtLCB0eXBlICksXG5cdFx0XHRzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKSxcblx0XHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCB0eXBlICksXG5cdFx0XHRuZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCBlbGVtLCB0eXBlICk7XG5cdFx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuXHRcdGlmICggZm4gPT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0c3RhcnRMZW5ndGgtLTtcblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXG5cdFx0XHQvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG5cdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiApIHtcblx0XHRcdFx0cXVldWUudW5zaGlmdCggXCJpbnByb2dyZXNzXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRmbi5jYWxsKCBlbGVtLCBuZXh0LCBob29rcyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXJ0TGVuZ3RoICYmIGhvb2tzICkge1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuXHRfcXVldWVIb29rczogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcblx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBlbGVtLCBrZXkgKSB8fCBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIGtleSwge1xuXHRcdFx0ZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLmFkZCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgWyB0eXBlICsgXCJxdWV1ZVwiLCBrZXkgXSApO1xuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBzZXR0ZXIgPSAyO1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGRhdGEgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdHNldHRlci0tO1xuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucXVldWUoIHRoaXNbIDAgXSwgdHlwZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcyA6XG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIGRhdGEgKTtcblxuXHRcdFx0XHQvLyBFbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVsgMCBdICE9PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdH0sXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHR9ICk7XG5cdH0sXG5cdGNsZWFyUXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0fSxcblxuXHQvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuXHRwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuXHRcdHZhciB0bXAsXG5cdFx0XHRjb3VudCA9IDEsXG5cdFx0XHRkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0ZWxlbWVudHMgPSB0aGlzLFxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0cmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICEoIC0tY291bnQgKSApIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRtcCA9IGRhdGFQcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdHRtcC5lbXB0eS5hZGQoIHJlc29sdmUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzb2x2ZSgpO1xuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcblx0fVxufSApO1xudmFyIHBudW0gPSAoIC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvICkuc291cmNlO1xuXG52YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoIFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiICk7XG5cblxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG52YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xuXG5cdFx0Ly8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG5cdFx0Ly8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG5cdFx0ZWxlbSA9IGVsIHx8IGVsZW07XG5cblx0XHQvLyBJbmxpbmUgc3R5bGUgdHJ1bXBzIGFsbFxuXHRcdHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiZcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcblx0XHRcdC8vIERpc2Nvbm5lY3RlZCBlbGVtZW50cyBjYW4gaGF2ZSBjb21wdXRlZCBkaXNwbGF5OiBub25lLCBzbyBmaXJzdCBjb25maXJtIHRoYXQgZWxlbSBpc1xuXHRcdFx0Ly8gaW4gdGhlIGRvY3VtZW50LlxuXHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSAmJlxuXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApID09PSBcIm5vbmVcIjtcblx0fTtcblxudmFyIHN3YXAgPSBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgY2FsbGJhY2ssIGFyZ3MgKSB7XG5cdHZhciByZXQsIG5hbWUsXG5cdFx0b2xkID0ge307XG5cblx0Ly8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRvbGRbIG5hbWUgXSA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvcHRpb25zWyBuYW1lIF07XG5cdH1cblxuXHRyZXQgPSBjYWxsYmFjay5hcHBseSggZWxlbSwgYXJncyB8fCBbXSApO1xuXG5cdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcblxuXG5cblxuZnVuY3Rpb24gYWRqdXN0Q1NTKCBlbGVtLCBwcm9wLCB2YWx1ZVBhcnRzLCB0d2VlbiApIHtcblx0dmFyIGFkanVzdGVkLFxuXHRcdHNjYWxlID0gMSxcblx0XHRtYXhJdGVyYXRpb25zID0gMjAsXG5cdFx0Y3VycmVudFZhbHVlID0gdHdlZW4gP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5jdXIoKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wLCBcIlwiICk7XG5cdFx0XHR9LFxuXHRcdGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcblx0XHR1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICksXG5cblx0XHQvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuXHRcdGluaXRpYWxJblVuaXQgPSAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK2luaXRpYWwgKSAmJlxuXHRcdFx0cmNzc051bS5leGVjKCBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wICkgKTtcblxuXHRpZiAoIGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFsgMyBdICE9PSB1bml0ICkge1xuXG5cdFx0Ly8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXHRcdHVuaXQgPSB1bml0IHx8IGluaXRpYWxJblVuaXRbIDMgXTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblx0XHR2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcblxuXHRcdC8vIEl0ZXJhdGl2ZWx5IGFwcHJveGltYXRlIGZyb20gYSBub256ZXJvIHN0YXJ0aW5nIHBvaW50XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cblx0XHRkbyB7XG5cblx0XHRcdC8vIElmIHByZXZpb3VzIGl0ZXJhdGlvbiB6ZXJvZWQgb3V0LCBkb3VibGUgdW50aWwgd2UgZ2V0ICpzb21ldGhpbmcqLlxuXHRcdFx0Ly8gVXNlIHN0cmluZyBmb3IgZG91Ymxpbmcgc28gd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IHNlZSBzY2FsZSBhcyB1bmNoYW5nZWQgYmVsb3dcblx0XHRcdHNjYWxlID0gc2NhbGUgfHwgXCIuNVwiO1xuXG5cdFx0XHQvLyBBZGp1c3QgYW5kIGFwcGx5XG5cdFx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAvIHNjYWxlO1xuXHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXG5cdFx0Ly8gVXBkYXRlIHNjYWxlLCB0b2xlcmF0aW5nIHplcm8gb3IgTmFOIGZyb20gdHdlZW4uY3VyKClcblx0XHQvLyBCcmVhayB0aGUgbG9vcCBpZiBzY2FsZSBpcyB1bmNoYW5nZWQgb3IgcGVyZmVjdCwgb3IgaWYgd2UndmUganVzdCBoYWQgZW5vdWdoLlxuXHRcdH0gd2hpbGUgKFxuXHRcdFx0c2NhbGUgIT09ICggc2NhbGUgPSBjdXJyZW50VmFsdWUoKSAvIGluaXRpYWwgKSAmJiBzY2FsZSAhPT0gMSAmJiAtLW1heEl0ZXJhdGlvbnNcblx0XHQpO1xuXHR9XG5cblx0aWYgKCB2YWx1ZVBhcnRzICkge1xuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwO1xuXG5cdFx0Ly8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG5cdFx0YWRqdXN0ZWQgPSB2YWx1ZVBhcnRzWyAxIF0gP1xuXHRcdFx0aW5pdGlhbEluVW5pdCArICggdmFsdWVQYXJ0c1sgMSBdICsgMSApICogdmFsdWVQYXJ0c1sgMiBdIDpcblx0XHRcdCt2YWx1ZVBhcnRzWyAyIF07XG5cdFx0aWYgKCB0d2VlbiApIHtcblx0XHRcdHR3ZWVuLnVuaXQgPSB1bml0O1xuXHRcdFx0dHdlZW4uc3RhcnQgPSBpbml0aWFsSW5Vbml0O1xuXHRcdFx0dHdlZW4uZW5kID0gYWRqdXN0ZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhZGp1c3RlZDtcbn1cblxuXG52YXIgZGVmYXVsdERpc3BsYXlNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKSB7XG5cdHZhciB0ZW1wLFxuXHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCxcblx0XHRub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUsXG5cdFx0ZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdO1xuXG5cdGlmICggZGlzcGxheSApIHtcblx0XHRyZXR1cm4gZGlzcGxheTtcblx0fVxuXG5cdHRlbXAgPSBkb2MuYm9keS5hcHBlbmRDaGlsZCggZG9jLmNyZWF0ZUVsZW1lbnQoIG5vZGVOYW1lICkgKTtcblx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIHRlbXAsIFwiZGlzcGxheVwiICk7XG5cblx0dGVtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0ZW1wICk7XG5cblx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRkaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9XG5cdGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdID0gZGlzcGxheTtcblxuXHRyZXR1cm4gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGUoIGVsZW1lbnRzLCBzaG93ICkge1xuXHR2YXIgZGlzcGxheSwgZWxlbSxcblx0XHR2YWx1ZXMgPSBbXSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG5cdC8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGVsZW0gPSBlbGVtZW50c1sgaW5kZXggXTtcblx0XHRpZiAoICFlbGVtLnN0eWxlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblx0XHRpZiAoIHNob3cgKSB7XG5cblx0XHRcdC8vIFNpbmNlIHdlIGZvcmNlIHZpc2liaWxpdHkgdXBvbiBjYXNjYWRlLWhpZGRlbiBlbGVtZW50cywgYW4gaW1tZWRpYXRlIChhbmQgc2xvdylcblx0XHRcdC8vIGNoZWNrIGlzIHJlcXVpcmVkIGluIHRoaXMgZmlyc3QgbG9vcCB1bmxlc3Mgd2UgaGF2ZSBhIG5vbmVtcHR5IGRpc3BsYXkgdmFsdWUgKGVpdGhlclxuXHRcdFx0Ly8gaW5saW5lIG9yIGFib3V0LXRvLWJlLXJlc3RvcmVkKVxuXHRcdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApIHx8IG51bGw7XG5cdFx0XHRcdGlmICggIXZhbHVlc1sgaW5kZXggXSApIHtcblx0XHRcdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCBkaXNwbGF5ICE9PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gXCJub25lXCI7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiZGlzcGxheVwiLCBkaXNwbGF5ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuXHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggdmFsdWVzWyBpbmRleCBdICE9IG51bGwgKSB7XG5cdFx0XHRlbGVtZW50c1sgaW5kZXggXS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzWyBpbmRleCBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50cztcbn1cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMsIHRydWUgKTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzICk7XG5cdH0sXG5cdHRvZ2dsZTogZnVuY3Rpb24oIHN0YXRlICkge1xuXHRcdGlmICggdHlwZW9mIHN0YXRlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGlzSGlkZGVuV2l0aGluVHJlZSggdGhpcyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG52YXIgcmNoZWNrYWJsZVR5cGUgPSAoIC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pICk7XG5cbnZhciBydGFnTmFtZSA9ICggLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pICk7XG5cbnZhciByc2NyaXB0VHlwZSA9ICggL14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSApO1xuXG5cblxuLy8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcbnZhciB3cmFwTWFwID0ge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdG9wdGlvbjogWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdLFxuXG5cdC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG5cdC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cblx0Ly8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuXHR0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG5cdGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG5cdHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcblx0dGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG5cdF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxufTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbndyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbjtcblxud3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbndyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG5cbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAoIzE1MTUxKVxuXHR2YXIgcmV0O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIGlmICggdHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSB7XG5cdFx0cmV0ID0gW107XG5cdH1cblxuXHRpZiAoIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBqUXVlcnkubm9kZU5hbWUoIGNvbnRleHQsIHRhZyApICkge1xuXHRcdHJldHVybiBqUXVlcnkubWVyZ2UoIFsgY29udGV4dCBdLCByZXQgKTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cblxuLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5mdW5jdGlvbiBzZXRHbG9iYWxFdmFsKCBlbGVtcywgcmVmRWxlbWVudHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRkYXRhUHJpdi5zZXQoXG5cdFx0XHRlbGVtc1sgaSBdLFxuXHRcdFx0XCJnbG9iYWxFdmFsXCIsXG5cdFx0XHQhcmVmRWxlbWVudHMgfHwgZGF0YVByaXYuZ2V0KCByZWZFbGVtZW50c1sgaSBdLCBcImdsb2JhbEV2YWxcIiApXG5cdFx0KTtcblx0fVxufVxuXG5cbnZhciByaHRtbCA9IC88fCYjP1xcdys7LztcblxuZnVuY3Rpb24gYnVpbGRGcmFnbWVudCggZWxlbXMsIGNvbnRleHQsIHNjcmlwdHMsIHNlbGVjdGlvbiwgaWdub3JlZCApIHtcblx0dmFyIGVsZW0sIHRtcCwgdGFnLCB3cmFwLCBjb250YWlucywgaixcblx0XHRmcmFnbWVudCA9IGNvbnRleHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdG5vZGVzID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1zWyBpIF07XG5cblx0XHRpZiAoIGVsZW0gfHwgZWxlbSA9PT0gMCApIHtcblxuXHRcdFx0Ly8gQWRkIG5vZGVzIGRpcmVjdGx5XG5cdFx0XHRpZiAoIGpRdWVyeS50eXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgZWxlbS5ub2RlVHlwZSA/IFsgZWxlbSBdIDogZWxlbSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IG5vbi1odG1sIGludG8gYSB0ZXh0IG5vZGVcblx0XHRcdH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XG5cdFx0XHRcdG5vZGVzLnB1c2goIGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoIGVsZW0gKSApO1xuXG5cdFx0XHQvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZCggY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKTtcblxuXHRcdFx0XHQvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG5cdFx0XHRcdHRhZyA9ICggcnRhZ05hbWUuZXhlYyggZWxlbSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHR3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcblx0XHRcdFx0dG1wLmlubmVySFRNTCA9IHdyYXBbIDEgXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKCBlbGVtICkgKyB3cmFwWyAyIF07XG5cblx0XHRcdFx0Ly8gRGVzY2VuZCB0aHJvdWdoIHdyYXBwZXJzIHRvIHRoZSByaWdodCBjb250ZW50XG5cdFx0XHRcdGogPSB3cmFwWyAwIF07XG5cdFx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRcdHRtcCA9IHRtcC5sYXN0Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCB0bXAuY2hpbGROb2RlcyApO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSB0b3AtbGV2ZWwgY29udGFpbmVyXG5cdFx0XHRcdHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIHRoZSBjcmVhdGVkIG5vZGVzIGFyZSBvcnBoYW5lZCAoIzEyMzkyKVxuXHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0ZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdGkgPSAwO1xuXHR3aGlsZSAoICggZWxlbSA9IG5vZGVzWyBpKysgXSApICkge1xuXG5cdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcblx0XHRcdGlmICggaWdub3JlZCApIHtcblx0XHRcdFx0aWdub3JlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb250YWlucyA9IGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cblx0XHQvLyBBcHBlbmQgdG8gZnJhZ21lbnRcblx0XHR0bXAgPSBnZXRBbGwoIGZyYWdtZW50LmFwcGVuZENoaWxkKCBlbGVtICksIFwic2NyaXB0XCIgKTtcblxuXHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRpZiAoIGNvbnRhaW5zICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggdG1wICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FwdHVyZSBleGVjdXRhYmxlc1xuXHRcdGlmICggc2NyaXB0cyApIHtcblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSB0bXBbIGorKyBdICkgKSB7XG5cdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggZWxlbS50eXBlIHx8IFwiXCIgKSApIHtcblx0XHRcdFx0XHRzY3JpcHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmcmFnbWVudDtcbn1cblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0ZGl2ID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApLFxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuXHQvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAoIzExMjE3KVxuXHQvLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG5cdC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAoIzE0OTAxKVxuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcInJhZGlvXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJ0XCIgKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG5cdC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXHRzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmNoZWNrZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG5cdGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcblx0c3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG59ICkoKTtcbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG52YXJcblx0cmtleUV2ZW50ID0gL15rZXkvLFxuXHRybW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxcblx0cnR5cGVuYW1lc3BhY2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFNlZSAjMTMzOTMgZm9yIG1vcmUgaW5mb1xuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuZnVuY3Rpb24gb24oIGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSApIHtcblx0dmFyIG9yaWdGbiwgdHlwZTtcblxuXHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG5cdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0b24oIGVsZW0sIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsICkge1xuXG5cdFx0Ly8gKCB0eXBlcywgZm4gKVxuXHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBzZWxlY3RvciwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyAoIHR5cGVzLCBkYXRhLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0fSBlbHNlIGlmICggIWZuICkge1xuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBvbmUgPT09IDEgKSB7XG5cdFx0b3JpZ0ZuID0gZm47XG5cdFx0Zm4gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0alF1ZXJ5KCkub2ZmKCBldmVudCApO1xuXHRcdFx0cmV0dXJuIG9yaWdGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fTtcblxuXHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8ICggb3JpZ0ZuLmd1aWQgPSBqUXVlcnkuZ3VpZCsrICk7XG5cdH1cblx0cmV0dXJuIGVsZW0uZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuXHR9ICk7XG59XG5cbi8qXG4gKiBIZWxwZXIgZnVuY3Rpb25zIGZvciBtYW5hZ2luZyBldmVudHMgLS0gbm90IHBhcnQgb2YgdGhlIHB1YmxpYyBpbnRlcmZhY2UuXG4gKiBQcm9wcyB0byBEZWFuIEVkd2FyZHMnIGFkZEV2ZW50IGxpYnJhcnkgZm9yIG1hbnkgb2YgdGhlIGlkZWFzLlxuICovXG5qUXVlcnkuZXZlbnQgPSB7XG5cblx0Z2xvYmFsOiB7fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgaGFuZGxlT2JqSW4sIGV2ZW50SGFuZGxlLCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXHRcdGlmICggIWVsZW1EYXRhICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcblx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yICk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cdFx0aWYgKCAhaGFuZGxlci5ndWlkICkge1xuXHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cdFx0aWYgKCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyA9IHt9O1xuXHRcdH1cblx0XHRpZiAoICEoIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlICkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiIClcblx0XHRcdH0sIGhhbmRsZU9iakluICk7XG5cblx0XHRcdC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cdFx0XHRpZiAoICEoIGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fFxuXHRcdFx0XHRcdHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZXZlbnRIYW5kbGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0alF1ZXJ5LmV2ZW50Lmdsb2JhbFsgdHlwZSBdID0gdHJ1ZTtcblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHRpZiAoICFlbGVtRGF0YSB8fCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSArIHR5cGVzWyB0IF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcblx0XHRcdHRtcCA9IHRtcFsgMiBdICYmXG5cdFx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcblx0XHRcdFx0XHRcdHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHxcblx0XHRcdFx0XHRzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBuYXRpdmVFdmVudCApIHtcblxuXHRcdC8vIE1ha2UgYSB3cml0YWJsZSBqUXVlcnkuRXZlbnQgZnJvbSB0aGUgbmF0aXZlIGV2ZW50IG9iamVjdFxuXHRcdHZhciBldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICk7XG5cblx0XHR2YXIgaSwgaiwgcmV0LCBtYXRjaGVkLCBoYW5kbGVPYmosIGhhbmRsZXJRdWV1ZSxcblx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkoIGFyZ3VtZW50cy5sZW5ndGggKSxcblx0XHRcdGhhbmRsZXJzID0gKCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gfHwgW10sXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcblxuXHRcdC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cdFx0YXJnc1sgMCBdID0gZXZlbnQ7XG5cblx0XHRmb3IgKCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGFyZ3NbIGkgXSA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdH1cblxuXHRcdGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGhpcztcblxuXHRcdC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblx0XHRpZiAoIHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblx0XHRoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCggdGhpcywgZXZlbnQsIGhhbmRsZXJzICk7XG5cblx0XHQvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBtYXRjaGVkID0gaGFuZGxlclF1ZXVlWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldCA9IG1hdGNoZWQuZWxlbTtcblxuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1sgaisrIF0gKSAmJlxuXHRcdFx0XHQhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyZWQgZXZlbnQgbXVzdCBlaXRoZXIgMSkgaGF2ZSBubyBuYW1lc3BhY2UsIG9yIDIpIGhhdmUgbmFtZXNwYWNlKHMpXG5cdFx0XHRcdC8vIGEgc3Vic2V0IG9yIGVxdWFsIHRvIHRob3NlIGluIHRoZSBib3VuZCBldmVudCAoYm90aCBjYW4gaGF2ZSBubyBuYW1lc3BhY2UpLlxuXHRcdFx0XHRpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGV2ZW50LnJuYW1lc3BhY2UudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcblxuXHRcdFx0XHRcdHJldCA9ICggKCBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30gKS5oYW5kbGUgfHxcblx0XHRcdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyICkuYXBwbHkoIG1hdGNoZWQuZWxlbSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCByZXQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdGlmICggKCBldmVudC5yZXN1bHQgPSByZXQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblx0XHRpZiAoIHNwZWNpYWwucG9zdERpc3BhdGNoICkge1xuXHRcdFx0c3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBpLCBoYW5kbGVPYmosIHNlbCwgbWF0Y2hlZEhhbmRsZXJzLCBtYXRjaGVkU2VsZWN0b3JzLFxuXHRcdFx0aGFuZGxlclF1ZXVlID0gW10sXG5cdFx0XHRkZWxlZ2F0ZUNvdW50ID0gaGFuZGxlcnMuZGVsZWdhdGVDb3VudCxcblx0XHRcdGN1ciA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIEZpbmQgZGVsZWdhdGUgaGFuZGxlcnNcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05XG5cdFx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAodHJhYy0xMzE4MClcblx0XHRcdGN1ci5ub2RlVHlwZSAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcblx0XHRcdC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExIG9ubHlcblx0XHRcdC8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0Mylcblx0XHRcdCEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBldmVudC5idXR0b24gPj0gMSApICkge1xuXG5cdFx0XHRmb3IgKCA7IGN1ciAhPT0gdGhpczsgY3VyID0gY3VyLnBhcmVudE5vZGUgfHwgdGhpcyApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjaGVjayBub24tZWxlbWVudHMgKCMxMzIwOClcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXG5cdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlID09PSAxICYmICEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBjdXIuZGlzYWJsZWQgPT09IHRydWUgKSApIHtcblx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzID0ge307XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuXHRcdFx0XHRcdFx0c2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID9cblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoIHNlbCwgdGhpcyApLmluZGV4KCBjdXIgKSA+IC0xIDpcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZCggc2VsLCB0aGlzLCBudWxsLCBbIGN1ciBdICkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRIYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBtYXRjaGVkSGFuZGxlcnMgfSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcblx0XHRjdXIgPSB0aGlzO1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IGhhbmRsZXJzLnNsaWNlKCBkZWxlZ2F0ZUNvdW50ICkgfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBoYW5kbGVyUXVldWU7XG5cdH0sXG5cblx0YWRkUHJvcDogZnVuY3Rpb24oIG5hbWUsIGhvb2sgKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCBqUXVlcnkuRXZlbnQucHJvdG90eXBlLCBuYW1lLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXG5cdFx0XHRnZXQ6IGpRdWVyeS5pc0Z1bmN0aW9uKCBob29rICkgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGhvb2soIHRoaXMub3JpZ2luYWxFdmVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50WyBuYW1lIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBuYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Zml4OiBmdW5jdGlvbiggb3JpZ2luYWxFdmVudCApIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxFdmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRvcmlnaW5hbEV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIG9yaWdpbmFsRXZlbnQgKTtcblx0fSxcblxuXHRzcGVjaWFsOiB7XG5cdFx0bG9hZDoge1xuXG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Zm9jdXM6IHtcblxuXHRcdFx0Ly8gRmlyZSBuYXRpdmUgZXZlbnQgaWYgcG9zc2libGUgc28gYmx1ci9mb2N1cyBzZXF1ZW5jZSBpcyBjb3JyZWN0XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzICE9PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuZm9jdXMgKSB7XG5cdFx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlbGVnYXRlVHlwZTogXCJmb2N1c2luXCJcblx0XHR9LFxuXHRcdGJsdXI6IHtcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMgPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiYgdGhpcy5ibHVyICkge1xuXHRcdFx0XHRcdHRoaXMuYmx1cigpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlbGVnYXRlVHlwZTogXCJmb2N1c291dFwiXG5cdFx0fSxcblx0XHRjbGljazoge1xuXG5cdFx0XHQvLyBGb3IgY2hlY2tib3gsIGZpcmUgbmF0aXZlIGV2ZW50IHNvIGNoZWNrZWQgc3RhdGUgd2lsbCBiZSByaWdodFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcy50eXBlID09PSBcImNoZWNrYm94XCIgJiYgdGhpcy5jbGljayAmJiBqUXVlcnkubm9kZU5hbWUoIHRoaXMsIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHRoaXMuY2xpY2soKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBkb24ndCBmaXJlIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5ub2RlTmFtZSggZXZlbnQudGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG5cdFx0XHRcdC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cblx0Ly8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG5cdGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlICk7XG5cdH1cbn07XG5cbmpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uKCBzcmMsIHByb3BzICkge1xuXG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuXHRpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBqUXVlcnkuRXZlbnQgKSApIHtcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gRXZlbnQgb2JqZWN0XG5cdGlmICggc3JjICYmIHNyYy50eXBlICkge1xuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHR0aGlzLnR5cGUgPSBzcmMudHlwZTtcblxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG5cdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBzcmMuZGVmYXVsdFByZXZlbnRlZCB8fFxuXHRcdFx0XHRzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5XG5cdFx0XHRcdHNyYy5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0cmV0dXJuVHJ1ZSA6XG5cdFx0XHRyZXR1cm5GYWxzZTtcblxuXHRcdC8vIENyZWF0ZSB0YXJnZXQgcHJvcGVydGllc1xuXHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcblx0XHQvLyBUYXJnZXQgc2hvdWxkIG5vdCBiZSBhIHRleHQgbm9kZSAoIzUwNCwgIzEzMTQzKVxuXHRcdHRoaXMudGFyZ2V0ID0gKCBzcmMudGFyZ2V0ICYmIHNyYy50YXJnZXQubm9kZVR5cGUgPT09IDMgKSA/XG5cdFx0XHRzcmMudGFyZ2V0LnBhcmVudE5vZGUgOlxuXHRcdFx0c3JjLnRhcmdldDtcblxuXHRcdHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuXHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IHNyYy5yZWxhdGVkVGFyZ2V0O1xuXG5cdC8vIEV2ZW50IHR5cGVcblx0fSBlbHNlIHtcblx0XHR0aGlzLnR5cGUgPSBzcmM7XG5cdH1cblxuXHQvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXHRpZiAoIHByb3BzICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRoaXMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuXHR0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IGpRdWVyeS5ub3coKTtcblxuXHQvLyBNYXJrIGl0IGFzIGZpeGVkXG5cdHRoaXNbIGpRdWVyeS5leHBhbmRvIF0gPSB0cnVlO1xufTtcblxuLy8galF1ZXJ5LkV2ZW50IGlzIGJhc2VkIG9uIERPTTMgRXZlbnRzIGFzIHNwZWNpZmllZCBieSB0aGUgRUNNQVNjcmlwdCBMYW5ndWFnZSBCaW5kaW5nXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAwMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwMzAzMzEvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG5qUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogalF1ZXJ5LkV2ZW50LFxuXHRpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXHRpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNTaW11bGF0ZWQ6IGZhbHNlLFxuXG5cdHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cbn07XG5cbi8vIEluY2x1ZGVzIGFsbCBjb21tb24gZXZlbnQgcHJvcHMgaW5jbHVkaW5nIEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50IHNwZWNpZmljIHByb3BzXG5qUXVlcnkuZWFjaCgge1xuXHRhbHRLZXk6IHRydWUsXG5cdGJ1YmJsZXM6IHRydWUsXG5cdGNhbmNlbGFibGU6IHRydWUsXG5cdGNoYW5nZWRUb3VjaGVzOiB0cnVlLFxuXHRjdHJsS2V5OiB0cnVlLFxuXHRkZXRhaWw6IHRydWUsXG5cdGV2ZW50UGhhc2U6IHRydWUsXG5cdG1ldGFLZXk6IHRydWUsXG5cdHBhZ2VYOiB0cnVlLFxuXHRwYWdlWTogdHJ1ZSxcblx0c2hpZnRLZXk6IHRydWUsXG5cdHZpZXc6IHRydWUsXG5cdFwiY2hhclwiOiB0cnVlLFxuXHRjaGFyQ29kZTogdHJ1ZSxcblx0a2V5OiB0cnVlLFxuXHRrZXlDb2RlOiB0cnVlLFxuXHRidXR0b246IHRydWUsXG5cdGJ1dHRvbnM6IHRydWUsXG5cdGNsaWVudFg6IHRydWUsXG5cdGNsaWVudFk6IHRydWUsXG5cdG9mZnNldFg6IHRydWUsXG5cdG9mZnNldFk6IHRydWUsXG5cdHBvaW50ZXJJZDogdHJ1ZSxcblx0cG9pbnRlclR5cGU6IHRydWUsXG5cdHNjcmVlblg6IHRydWUsXG5cdHNjcmVlblk6IHRydWUsXG5cdHRhcmdldFRvdWNoZXM6IHRydWUsXG5cdHRvRWxlbWVudDogdHJ1ZSxcblx0dG91Y2hlczogdHJ1ZSxcblxuXHR3aGljaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBidXR0b24gPSBldmVudC5idXR0b247XG5cblx0XHQvLyBBZGQgd2hpY2ggZm9yIGtleSBldmVudHNcblx0XHRpZiAoIGV2ZW50LndoaWNoID09IG51bGwgJiYgcmtleUV2ZW50LnRlc3QoIGV2ZW50LnR5cGUgKSApIHtcblx0XHRcdHJldHVybiBldmVudC5jaGFyQ29kZSAhPSBudWxsID8gZXZlbnQuY2hhckNvZGUgOiBldmVudC5rZXlDb2RlO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcblx0XHRpZiAoICFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCAmJiBybW91c2VFdmVudC50ZXN0KCBldmVudC50eXBlICkgKSB7XG5cdFx0XHRpZiAoIGJ1dHRvbiAmIDEgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGJ1dHRvbiAmIDIgKSB7XG5cdFx0XHRcdHJldHVybiAzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGJ1dHRvbiAmIDQgKSB7XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQud2hpY2g7XG5cdH1cbn0sIGpRdWVyeS5ldmVudC5hZGRQcm9wICk7XG5cbi8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbi8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4vL1xuLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NzAyNThcbi8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG5qUXVlcnkuZWFjaCgge1xuXHRtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuXHRtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG5cdHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuXHRwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG59LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgb3JpZyBdID0ge1xuXHRcdGRlbGVnYXRlVHlwZTogZml4LFxuXHRcdGJpbmRUeXBlOiBmaXgsXG5cblx0XHRoYW5kbGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXQsXG5cdFx0XHRcdHRhcmdldCA9IHRoaXMsXG5cdFx0XHRcdHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LFxuXHRcdFx0XHRoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7XG5cblx0XHRcdC8vIEZvciBtb3VzZWVudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG5cdFx0XHQvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0aWYgKCAhcmVsYXRlZCB8fCAoIHJlbGF0ZWQgIT09IHRhcmdldCAmJiAhalF1ZXJ5LmNvbnRhaW5zKCB0YXJnZXQsIHJlbGF0ZWQgKSApICkge1xuXHRcdFx0XHRldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuXHRcdFx0XHRyZXQgPSBoYW5kbGVPYmouaGFuZGxlci5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBmaXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdG9uOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0b25lOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gb24oIHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEgKTtcblx0fSxcblx0b2ZmOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBmbiApIHtcblx0XHR2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXHRcdGlmICggdHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqICkge1xuXG5cdFx0XHQvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG5cdFx0XHRoYW5kbGVPYmogPSB0eXBlcy5oYW5kbGVPYmo7XG5cdFx0XHRqUXVlcnkoIHR5cGVzLmRlbGVnYXRlVGFyZ2V0ICkub2ZmKFxuXHRcdFx0XHRoYW5kbGVPYmoubmFtZXNwYWNlID9cblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUgKyBcIi5cIiArIGhhbmRsZU9iai5uYW1lc3BhY2UgOlxuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSxcblx0XHRcdFx0aGFuZGxlT2JqLnNlbGVjdG9yLFxuXHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcblx0XHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRcdHRoaXMub2ZmKCB0eXBlLCBzZWxlY3RvciwgdHlwZXNbIHR5cGUgXSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggc2VsZWN0b3IgPT09IGZhbHNlIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzIFssIGZuXSApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCB0aGlzLCB0eXBlcywgZm4sIHNlbGVjdG9yICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxudmFyXG5cblx0LyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvMzIyOVxuXHRyeGh0bWxUYWcgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopW14+XSopXFwvPi9naSxcblxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExLCBFZGdlIDEyIC0gMTNcblx0Ly8gSW4gSUUvRWRnZSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cblx0Ly8gU2VlIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTczNjUxMi9cblx0cm5vSW5uZXJodG1sID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksXG5cblx0Ly8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG5cdHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcblx0cnNjcmlwdFR5cGVNYXNrZWQgPSAvXnRydWVcXC8oLiopLyxcblx0cmNsZWFuU2NyaXB0ID0gL15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO1xuXG5mdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG5cdGlmICggalF1ZXJ5Lm5vZGVOYW1lKCBlbGVtLCBcInRhYmxlXCIgKSAmJlxuXHRcdGpRdWVyeS5ub2RlTmFtZSggY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIgKSApIHtcblxuXHRcdHJldHVybiBlbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInRib2R5XCIgKVsgMCBdIHx8IGVsZW07XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuLy8gUmVwbGFjZS9yZXN0b3JlIHRoZSB0eXBlIGF0dHJpYnV0ZSBvZiBzY3JpcHQgZWxlbWVudHMgZm9yIHNhZmUgRE9NIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gZGlzYWJsZVNjcmlwdCggZWxlbSApIHtcblx0ZWxlbS50eXBlID0gKCBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSAhPT0gbnVsbCApICsgXCIvXCIgKyBlbGVtLnR5cGU7XG5cdHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcmVzdG9yZVNjcmlwdCggZWxlbSApIHtcblx0dmFyIG1hdGNoID0gcnNjcmlwdFR5cGVNYXNrZWQuZXhlYyggZWxlbS50eXBlICk7XG5cblx0aWYgKCBtYXRjaCApIHtcblx0XHRlbGVtLnR5cGUgPSBtYXRjaFsgMSBdO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBcInR5cGVcIiApO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG5cdGlmICggZGVzdC5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuXHRpZiAoIGRhdGFQcml2Lmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHBkYXRhT2xkID0gZGF0YVByaXYuYWNjZXNzKCBzcmMgKTtcblx0XHRwZGF0YUN1ciA9IGRhdGFQcml2LnNldCggZGVzdCwgcGRhdGFPbGQgKTtcblx0XHRldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cblx0XHRpZiAoIGV2ZW50cyApIHtcblx0XHRcdGRlbGV0ZSBwZGF0YUN1ci5oYW5kbGU7XG5cdFx0XHRwZGF0YUN1ci5ldmVudHMgPSB7fTtcblxuXHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gZXZlbnRzWyB0eXBlIF0ubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIDIuIENvcHkgdXNlciBkYXRhXG5cdGlmICggZGF0YVVzZXIuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0dWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3MoIHNyYyApO1xuXHRcdHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCgge30sIHVkYXRhT2xkICk7XG5cblx0XHRkYXRhVXNlci5zZXQoIGRlc3QsIHVkYXRhQ3VyICk7XG5cdH1cbn1cblxuLy8gRml4IElFIGJ1Z3MsIHNlZSBzdXBwb3J0IHRlc3RzXG5mdW5jdGlvbiBmaXhJbnB1dCggc3JjLCBkZXN0ICkge1xuXHR2YXIgbm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0Ly8gRmFpbHMgdG8gcGVyc2lzdCB0aGUgY2hlY2tlZCBzdGF0ZSBvZiBhIGNsb25lZCBjaGVja2JveCBvciByYWRpbyBidXR0b24uXG5cdGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiByY2hlY2thYmxlVHlwZS50ZXN0KCBzcmMudHlwZSApICkge1xuXHRcdGRlc3QuY2hlY2tlZCA9IHNyYy5jaGVja2VkO1xuXG5cdC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgfHwgbm9kZU5hbWUgPT09IFwidGV4dGFyZWFcIiApIHtcblx0XHRkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gZG9tTWFuaXAoIGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICkge1xuXG5cdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0YXJncyA9IGNvbmNhdC5hcHBseSggW10sIGFyZ3MgKTtcblxuXHR2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuXHRcdGlOb0Nsb25lID0gbCAtIDEsXG5cdFx0dmFsdWUgPSBhcmdzWyAwIF0sXG5cdFx0aXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG5cdC8vIFdlIGNhbid0IGNsb25lTm9kZSBmcmFnbWVudHMgdGhhdCBjb250YWluIGNoZWNrZWQsIGluIFdlYktpdFxuXHRpZiAoIGlzRnVuY3Rpb24gfHxcblx0XHRcdCggbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCggdmFsdWUgKSApICkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmVhY2goIGZ1bmN0aW9uKCBpbmRleCApIHtcblx0XHRcdHZhciBzZWxmID0gY29sbGVjdGlvbi5lcSggaW5kZXggKTtcblx0XHRcdGlmICggaXNGdW5jdGlvbiApIHtcblx0XHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHR9XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0bm9kZSA9IGZyYWdtZW50O1xuXG5cdFx0XHRcdGlmICggaSAhPT0gaU5vQ2xvbmUgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IGpRdWVyeS5jbG9uZSggbm9kZSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuXHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29sbGVjdGlvblsgaSBdLCBub2RlLCBpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHQvLyBSZWVuYWJsZSBzY3JpcHRzXG5cdFx0XHRcdGpRdWVyeS5tYXAoIHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQgKTtcblxuXHRcdFx0XHQvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrICkge1xuXHRcdFx0XHRcdG5vZGUgPSBzY3JpcHRzWyBpIF07XG5cdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBub2RlLnR5cGUgfHwgXCJcIiApICYmXG5cdFx0XHRcdFx0XHQhZGF0YVByaXYuYWNjZXNzKCBub2RlLCBcImdsb2JhbEV2YWxcIiApICYmXG5cdFx0XHRcdFx0XHRqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUuc3JjICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBqUXVlcnkuY29udGFpbnMoIG5vZGUub3duZXJEb2N1bWVudCwgbm9kZSApICkge1xuXHRcdFx0XHRzZXRHbG9iYWxFdmFsKCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBub2RlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aHRtbFByZWZpbHRlcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0cmV0dXJuIGh0bWwucmVwbGFjZSggcnhodG1sVGFnLCBcIjwkMT48LyQyPlwiICk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBlbGVtLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHR2YXIgaSwgbCwgc3JjRWxlbWVudHMsIGRlc3RFbGVtZW50cyxcblx0XHRcdGNsb25lID0gZWxlbS5jbG9uZU5vZGUoIHRydWUgKSxcblx0XHRcdGluUGFnZSA9IGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cblx0XHQvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblx0XHRpZiAoICFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkICYmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSApICYmXG5cdFx0XHRcdCFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gV2UgZXNjaGV3IFNpenpsZSBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOiBodHRwczovL2pzcGVyZi5jb20vZ2V0YWxsLXZzLXNpenpsZS8yXG5cdFx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lICk7XG5cdFx0XHRzcmNFbGVtZW50cyA9IGdldEFsbCggZWxlbSApO1xuXG5cdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zml4SW5wdXQoIHNyY0VsZW1lbnRzWyBpIF0sIGRlc3RFbGVtZW50c1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29weSB0aGUgZXZlbnRzIGZyb20gdGhlIG9yaWdpbmFsIHRvIHRoZSBjbG9uZVxuXHRcdGlmICggZGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdGlmICggZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRcdHNyY0VsZW1lbnRzID0gc3JjRWxlbWVudHMgfHwgZ2V0QWxsKCBlbGVtICk7XG5cdFx0XHRcdGRlc3RFbGVtZW50cyA9IGRlc3RFbGVtZW50cyB8fCBnZXRBbGwoIGNsb25lICk7XG5cblx0XHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIHNyY0VsZW1lbnRzWyBpIF0sIGRlc3RFbGVtZW50c1sgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsb25lQ29weUV2ZW50KCBlbGVtLCBjbG9uZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lLCBcInNjcmlwdFwiICk7XG5cdFx0aWYgKCBkZXN0RWxlbWVudHMubGVuZ3RoID4gMCApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoIGVsZW0sIFwic2NyaXB0XCIgKSApO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgY2xvbmVkIHNldFxuXHRcdHJldHVybiBjbG9uZTtcblx0fSxcblxuXHRjbGVhbkRhdGE6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblx0XHR2YXIgZGF0YSwgZWxlbSwgdHlwZSxcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbCxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT09IHVuZGVmaW5lZDsgaSsrICkge1xuXHRcdFx0aWYgKCBhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cdFx0XHRcdGlmICggKCBkYXRhID0gZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdGZvciAoIHR5cGUgaW4gZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbFsgdHlwZSBdICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBkYXRhLmhhbmRsZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhUHJpdi5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gKSB7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuXHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRldGFjaDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IgKTtcblx0fSxcblxuXHR0ZXh0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkudGV4dCggdGhpcyApIDpcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH0sXG5cblx0YXBwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0cHJlcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZSggZWxlbSwgdGFyZ2V0LmZpcnN0Q2hpbGQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YmVmb3JlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRhZnRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMubmV4dFNpYmxpbmcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7ICggZWxlbSA9IHRoaXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgYW55IHJlbWFpbmluZyBub2Rlc1xuXHRcdFx0XHRlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdGRhdGFBbmRFdmVudHMgPSBkYXRhQW5kRXZlbnRzID09IG51bGwgPyBmYWxzZSA6IGRhdGFBbmRFdmVudHM7XG5cdFx0ZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuXG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY2xvbmUoIHRoaXMsIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdGh0bWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbIDAgXSB8fCB7fSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdGwgPSB0aGlzLmxlbmd0aDtcblxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmlubmVySFRNTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiB0YWtlIGEgc2hvcnRjdXQgYW5kIGp1c3QgdXNlIGlubmVySFRNTFxuXHRcdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgIXJub0lubmVyaHRtbC50ZXN0KCB2YWx1ZSApICYmXG5cdFx0XHRcdCF3cmFwTWFwWyAoIHJ0YWdOYW1lLmV4ZWMoIHZhbHVlICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCkgXSApIHtcblxuXHRcdFx0XHR2YWx1ZSA9IGpRdWVyeS5odG1sUHJlZmlsdGVyKCB2YWx1ZSApO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdFx0ZWxlbSA9IHRoaXNbIGkgXSB8fCB7fTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIGVsZW1lbnQgbm9kZXMgYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtzXG5cdFx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuXHRcdFx0XHRcdFx0XHRlbGVtLmlubmVySFRNTCA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGVsZW0gPSAwO1xuXG5cdFx0XHRcdC8vIElmIHVzaW5nIGlubmVySFRNTCB0aHJvd3MgYW4gZXhjZXB0aW9uLCB1c2UgdGhlIGZhbGxiYWNrIG1ldGhvZFxuXHRcdFx0XHR9IGNhdGNoICggZSApIHt9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmFwcGVuZCggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdHJlcGxhY2VXaXRoOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaWdub3JlZCA9IFtdO1xuXG5cdFx0Ly8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYgKCBqUXVlcnkuaW5BcnJheSggdGhpcywgaWdub3JlZCApIDwgMCApIHtcblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCB0aGlzICkgKTtcblx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZCggZWxlbSwgdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBGb3JjZSBjYWxsYmFjayBpbnZvY2F0aW9uXG5cdFx0fSwgaWdub3JlZCApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCB7XG5cdGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuXHRwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuXHRpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG5cdGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG5cdHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIlxufSwgZnVuY3Rpb24oIG5hbWUsIG9yaWdpbmFsICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgZWxlbXMsXG5cdFx0XHRyZXQgPSBbXSxcblx0XHRcdGluc2VydCA9IGpRdWVyeSggc2VsZWN0b3IgKSxcblx0XHRcdGxhc3QgPSBpbnNlcnQubGVuZ3RoIC0gMSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyBpIDw9IGxhc3Q7IGkrKyApIHtcblx0XHRcdGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKCB0cnVlICk7XG5cdFx0XHRqUXVlcnkoIGluc2VydFsgaSBdIClbIG9yaWdpbmFsIF0oIGVsZW1zICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0Ly8gLmdldCgpIGJlY2F1c2UgcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0cHVzaC5hcHBseSggcmV0LCBlbGVtcy5nZXQoKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggcmV0ICk7XG5cdH07XG59ICk7XG52YXIgcm1hcmdpbiA9ICggL15tYXJnaW4vICk7XG5cbnZhciBybnVtbm9ucHggPSBuZXcgUmVnRXhwKCBcIl4oXCIgKyBwbnVtICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIgKTtcblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuXHRcdC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuXHRcdC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuXHRcdHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG5cdFx0aWYgKCAhdmlldyB8fCAhdmlldy5vcGVuZXIgKSB7XG5cdFx0XHR2aWV3ID0gd2luZG93O1xuXHRcdH1cblxuXHRcdHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcblx0fTtcblxuXG5cbiggZnVuY3Rpb24oKSB7XG5cblx0Ly8gRXhlY3V0aW5nIGJvdGggcGl4ZWxQb3NpdGlvbiAmIGJveFNpemluZ1JlbGlhYmxlIHRlc3RzIHJlcXVpcmUgb25seSBvbmUgbGF5b3V0XG5cdC8vIHNvIHRoZXkncmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgdGltZSB0byBzYXZlIHRoZSBzZWNvbmQgY29tcHV0YXRpb24uXG5cdGZ1bmN0aW9uIGNvbXB1dGVTdHlsZVRlc3RzKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBhIHNpbmdsZXRvbiwgd2UgbmVlZCB0byBleGVjdXRlIGl0IG9ubHkgb25jZVxuXHRcdGlmICggIWRpdiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9XG5cdFx0XHRcImJveC1zaXppbmc6Ym9yZGVyLWJveDtcIiArXG5cdFx0XHRcInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7XCIgK1xuXHRcdFx0XCJtYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O1wiICtcblx0XHRcdFwidG9wOjElO3dpZHRoOjUwJVwiO1xuXHRcdGRpdi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHR2YXIgZGl2U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZGl2ICk7XG5cdFx0cGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuXHRcdHJlbGlhYmxlTWFyZ2luTGVmdFZhbCA9IGRpdlN0eWxlLm1hcmdpbkxlZnQgPT09IFwiMnB4XCI7XG5cdFx0Ym94U2l6aW5nUmVsaWFibGVWYWwgPSBkaXZTdHlsZS53aWR0aCA9PT0gXCI0cHhcIjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0XHQvLyBTb21lIHN0eWxlcyBjb21lIGJhY2sgd2l0aCBwZXJjZW50YWdlIHZhbHVlcywgZXZlbiB0aG91Z2ggdGhleSBzaG91bGRuJ3Rcblx0XHRkaXYuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjUwJVwiO1xuXHRcdHBpeGVsTWFyZ2luUmlnaHRWYWwgPSBkaXZTdHlsZS5tYXJnaW5SaWdodCA9PT0gXCI0cHhcIjtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0Ly8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXHRcdGRpdiA9IG51bGw7XG5cdH1cblxuXHR2YXIgcGl4ZWxQb3NpdGlvblZhbCwgYm94U2l6aW5nUmVsaWFibGVWYWwsIHBpeGVsTWFyZ2luUmlnaHRWYWwsIHJlbGlhYmxlTWFyZ2luTGVmdFZhbCxcblx0XHRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdC8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXG5cdGlmICggIWRpdi5zdHlsZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O1wiICtcblx0XHRcInBhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXG5cdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcGl4ZWxQb3NpdGlvblZhbDtcblx0XHR9LFxuXHRcdGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG5cdFx0fSxcblx0XHRwaXhlbE1hcmdpblJpZ2h0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcGl4ZWxNYXJnaW5SaWdodFZhbDtcblx0XHR9LFxuXHRcdHJlbGlhYmxlTWFyZ2luTGVmdDogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHJlbGlhYmxlTWFyZ2luTGVmdFZhbDtcblx0XHR9XG5cdH0gKTtcbn0gKSgpO1xuXG5cbmZ1bmN0aW9uIGN1ckNTUyggZWxlbSwgbmFtZSwgY29tcHV0ZWQgKSB7XG5cdHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdGNvbXB1dGVkID0gY29tcHV0ZWQgfHwgZ2V0U3R5bGVzKCBlbGVtICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0Ly8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBvbmx5IG5lZWRlZCBmb3IgLmNzcygnZmlsdGVyJykgKCMxMjUzNylcblx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRyZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXTtcblxuXHRcdGlmICggcmV0ID09PSBcIlwiICYmICFqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApICkge1xuXHRcdFx0cmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuXHRcdC8vIEFuZHJvaWQgQnJvd3NlciByZXR1cm5zIHBlcmNlbnRhZ2UgZm9yIHNvbWUgdmFsdWVzLFxuXHRcdC8vIGJ1dCB3aWR0aCBzZWVtcyB0byBiZSByZWxpYWJseSBwaXhlbHMuXG5cdFx0Ly8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuXHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5waXhlbE1hcmdpblJpZ2h0KCkgJiYgcm51bW5vbnB4LnRlc3QoIHJldCApICYmIHJtYXJnaW4udGVzdCggbmFtZSApICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xuXHRcdFx0bWluV2lkdGggPSBzdHlsZS5taW5XaWR0aDtcblx0XHRcdG1heFdpZHRoID0gc3R5bGUubWF4V2lkdGg7XG5cblx0XHRcdC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcblx0XHRcdHJldCA9IGNvbXB1dGVkLndpZHRoO1xuXG5cdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cdFx0XHRzdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdFx0c3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcblx0XHRcdHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID9cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHQvLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxuXHRcdHJldCArIFwiXCIgOlxuXHRcdHJldDtcbn1cblxuXG5mdW5jdGlvbiBhZGRHZXRIb29rSWYoIGNvbmRpdGlvbkZuLCBob29rRm4gKSB7XG5cblx0Ly8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBjb25kaXRpb25GbigpICkge1xuXG5cdFx0XHRcdC8vIEhvb2sgbm90IG5lZWRlZCAob3IgaXQncyBub3QgcG9zc2libGUgdG8gdXNlIGl0IGR1ZVxuXHRcdFx0XHQvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmdldDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cblx0XHRcdHJldHVybiAoIHRoaXMuZ2V0ID0gaG9va0ZuICkuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH1cblx0fTtcbn1cblxuXG52YXJcblxuXHQvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG5cdC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuXHQvLyBTZWUgaGVyZSBmb3IgZGlzcGxheSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ1NTL2Rpc3BsYXlcblx0cmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuXHRjc3NTaG93ID0geyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfSxcblx0Y3NzTm9ybWFsVHJhbnNmb3JtID0ge1xuXHRcdGxldHRlclNwYWNpbmc6IFwiMFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCJcblx0fSxcblxuXHRjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiIF0sXG5cdGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkuc3R5bGU7XG5cbi8vIFJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKCBuYW1lICkge1xuXG5cdC8vIFNob3J0Y3V0IGZvciBuYW1lcyB0aGF0IGFyZSBub3QgdmVuZG9yIHByZWZpeGVkXG5cdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKSB7XG5cblx0Ly8gQW55IHJlbGF0aXZlICgrLy0pIHZhbHVlcyBoYXZlIGFscmVhZHkgYmVlblxuXHQvLyBub3JtYWxpemVkIGF0IHRoaXMgcG9pbnRcblx0dmFyIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICk7XG5cdHJldHVybiBtYXRjaGVzID9cblxuXHRcdC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXG5cdFx0TWF0aC5tYXgoIDAsIG1hdGNoZXNbIDIgXSAtICggc3VidHJhY3QgfHwgMCApICkgKyAoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSA6XG5cdFx0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSwgaXNCb3JkZXJCb3gsIHN0eWxlcyApIHtcblx0dmFyIGksXG5cdFx0dmFsID0gMDtcblxuXHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIHJpZ2h0IG1lYXN1cmVtZW50LCBhdm9pZCBhdWdtZW50YXRpb25cblx0aWYgKCBleHRyYSA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApICkge1xuXHRcdGkgPSA0O1xuXG5cdC8vIE90aGVyd2lzZSBpbml0aWFsaXplIGZvciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHByb3BlcnRpZXNcblx0fSBlbHNlIHtcblx0XHRpID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gMSA6IDA7XG5cdH1cblxuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgKSB7XG5cblx0XHQvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW4sIHNvIGFkZCBpdCBpZiB3ZSB3YW50IGl0XG5cdFx0aWYgKCBleHRyYSA9PT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBleHRyYSArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBib3JkZXItYm94IGluY2x1ZGVzIHBhZGRpbmcsIHNvIHJlbW92ZSBpdCBpZiB3ZSB3YW50IGNvbnRlbnRcblx0XHRcdGlmICggZXh0cmEgPT09IFwiY29udGVudFwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGJvcmRlciBub3IgbWFyZ2luLCBzbyByZW1vdmUgYm9yZGVyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcIm1hcmdpblwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50LCBzbyBhZGQgcGFkZGluZ1xuXHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50IG5vciBwYWRkaW5nLCBzbyBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKSB7XG5cblx0Ly8gU3RhcnQgd2l0aCBvZmZzZXQgcHJvcGVydHksIHdoaWNoIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGJvcmRlci1ib3ggdmFsdWVcblx0dmFyIHZhbCxcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gdHJ1ZSxcblx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblx0XHRpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCI7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0Ly8gaW4gSUUgdGhyb3dzIGFuIGVycm9yLlxuXHRpZiAoIGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0dmFsID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVsgbmFtZSBdO1xuXHR9XG5cblx0Ly8gU29tZSBub24taHRtbCBlbGVtZW50cyByZXR1cm4gdW5kZWZpbmVkIGZvciBvZmZzZXRXaWR0aCwgc28gY2hlY2sgZm9yIG51bGwvdW5kZWZpbmVkXG5cdC8vIHN2ZyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY0OTI4NVxuXHQvLyBNYXRoTUwgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00OTE2Njhcblx0aWYgKCB2YWwgPD0gMCB8fCB2YWwgPT0gbnVsbCApIHtcblxuXHRcdC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0aWYgKCB2YWwgPCAwIHx8IHZhbCA9PSBudWxsICkge1xuXHRcdFx0dmFsID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIENvbXB1dGVkIHVuaXQgaXMgbm90IHBpeGVscy4gU3RvcCBoZXJlIGFuZCByZXR1cm4uXG5cdFx0aWYgKCBybnVtbm9ucHgudGVzdCggdmFsICkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGZvciBzdHlsZSBpbiBjYXNlIGEgYnJvd3NlciB3aGljaCByZXR1cm5zIHVucmVsaWFibGUgdmFsdWVzXG5cdFx0Ly8gZm9yIGdldENvbXB1dGVkU3R5bGUgc2lsZW50bHkgZmFsbHMgYmFjayB0byB0aGUgcmVsaWFibGUgZWxlbS5zdHlsZVxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCAmJlxuXHRcdFx0KCBzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgdmFsID09PSBlbGVtLnN0eWxlWyBuYW1lIF0gKTtcblxuXHRcdC8vIE5vcm1hbGl6ZSBcIlwiLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcblx0XHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xuXHR9XG5cblx0Ly8gVXNlIHRoZSBhY3RpdmUgYm94LXNpemluZyBtb2RlbCB0byBhZGQvc3VidHJhY3QgaXJyZWxldmFudCBzdHlsZXNcblx0cmV0dXJuICggdmFsICtcblx0XHRhdWdtZW50V2lkdGhPckhlaWdodChcblx0XHRcdGVsZW0sXG5cdFx0XHRuYW1lLFxuXHRcdFx0ZXh0cmEgfHwgKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApLFxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcblx0XHRcdHN0eWxlc1xuXHRcdClcblx0KSArIFwicHhcIjtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuXHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0Y3NzSG9va3M6IHtcblx0XHRvcGFjaXR5OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHRcdC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG5cdFx0XHRcdFx0dmFyIHJldCA9IGN1ckNTUyggZWxlbSwgXCJvcGFjaXR5XCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gRG9uJ3QgYXV0b21hdGljYWxseSBhZGQgXCJweFwiIHRvIHRoZXNlIHBvc3NpYmx5LXVuaXRsZXNzIHByb3BlcnRpZXNcblx0Y3NzTnVtYmVyOiB7XG5cdFx0XCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiB0cnVlLFxuXHRcdFwiY29sdW1uQ291bnRcIjogdHJ1ZSxcblx0XHRcImZpbGxPcGFjaXR5XCI6IHRydWUsXG5cdFx0XCJmbGV4R3Jvd1wiOiB0cnVlLFxuXHRcdFwiZmxleFNocmlua1wiOiB0cnVlLFxuXHRcdFwiZm9udFdlaWdodFwiOiB0cnVlLFxuXHRcdFwibGluZUhlaWdodFwiOiB0cnVlLFxuXHRcdFwib3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwib3JkZXJcIjogdHJ1ZSxcblx0XHRcIm9ycGhhbnNcIjogdHJ1ZSxcblx0XHRcIndpZG93c1wiOiB0cnVlLFxuXHRcdFwiekluZGV4XCI6IHRydWUsXG5cdFx0XCJ6b29tXCI6IHRydWVcblx0fSxcblxuXHQvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG5cdC8vIHNldHRpbmcgb3IgZ2V0dGluZyB0aGUgdmFsdWVcblx0Y3NzUHJvcHM6IHtcblx0XHRcImZsb2F0XCI6IFwiY3NzRmxvYXRcIlxuXHR9LFxuXG5cdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdHN0eWxlOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhICkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0dmFyIHJldCwgdHlwZSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRcdG5hbWUgPSBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gfHxcblx0XHRcdCggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG9yaWdOYW1lICkgfHwgb3JpZ05hbWUgKTtcblxuXHRcdC8vIEdldHMgaG9vayBmb3IgdGhlIHByZWZpeGVkIHZlcnNpb24sIHRoZW4gdW5wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0XHQvLyBDb252ZXJ0IFwiKz1cIiBvciBcIi09XCIgdG8gcmVsYXRpdmUgbnVtYmVycyAoIzczNDUpXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgJiYgKCByZXQgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICkgKSAmJiByZXRbIDEgXSApIHtcblx0XHRcdFx0dmFsdWUgPSBhZGp1c3RDU1MoIGVsZW0sIG5hbWUsIHJldCApO1xuXG5cdFx0XHRcdC8vIEZpeGVzIGJ1ZyAjOTIzN1xuXHRcdFx0XHR0eXBlID0gXCJudW1iZXJcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICgjNzExNilcblx0XHRcdGlmICggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdHZhbHVlICs9IHJldCAmJiByZXRbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIG9yaWdOYW1lIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblx0XHRcdGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fFxuXHRcdFx0XHQoIHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIGZhbHNlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXHRcdFx0cmV0dXJuIHN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdGNzczogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMgKSB7XG5cdFx0dmFyIHZhbCwgbnVtLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0bmFtZSA9IGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSB8fFxuXHRcdFx0KCBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggb3JpZ05hbWUgKSB8fCBvcmlnTmFtZSApO1xuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZSggbnVtICkgPyBudW0gfHwgMCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImhlaWdodFwiLCBcIndpZHRoXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG5cdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCtcblx0XHRcdFx0XHQvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuXHRcdFx0XHRcdC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHVubGVzcyBkaXNwbGF5IGlzIGNoYW5nZWQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHRcdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuXHRcdFx0XHRcdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0XHRcdFx0XHQoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICkgP1xuXHRcdFx0XHRcdFx0c3dhcCggZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuXHRcdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBleHRyYSApIHtcblx0XHRcdHZhciBtYXRjaGVzLFxuXHRcdFx0XHRzdHlsZXMgPSBleHRyYSAmJiBnZXRTdHlsZXMoIGVsZW0gKSxcblx0XHRcdFx0c3VidHJhY3QgPSBleHRyYSAmJiBhdWdtZW50V2lkdGhPckhlaWdodChcblx0XHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0ZXh0cmEsXG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0XHRzdHlsZXNcblx0XHRcdFx0KTtcblxuXHRcdFx0Ly8gQ29udmVydCB0byBwaXhlbHMgaWYgdmFsdWUgYWRqdXN0bWVudCBpcyBuZWVkZWRcblx0XHRcdGlmICggc3VidHJhY3QgJiYgKCBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiZcblx0XHRcdFx0KCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgIT09IFwicHhcIiApIHtcblxuXHRcdFx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5yZWxpYWJsZU1hcmdpbkxlZnQsXG5cdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0cmV0dXJuICggcGFyc2VGbG9hdCggY3VyQ1NTKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiApICkgfHxcblx0XHRcdFx0ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdFx0XHRcdH0gKVxuXHRcdFx0XHQpICsgXCJweFwiO1xuXHRcdH1cblx0fVxuKTtcblxuLy8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xualF1ZXJ5LmVhY2goIHtcblx0bWFyZ2luOiBcIlwiLFxuXHRwYWRkaW5nOiBcIlwiLFxuXHRib3JkZXI6IFwiV2lkdGhcIlxufSwgZnVuY3Rpb24oIHByZWZpeCwgc3VmZml4ICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdID0ge1xuXHRcdGV4cGFuZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRleHBhbmRlZCA9IHt9LFxuXG5cdFx0XHRcdC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuXHRcdFx0XHRwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KCBcIiBcIiApIDogWyB2YWx1ZSBdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCA0OyBpKysgKSB7XG5cdFx0XHRcdGV4cGFuZGVkWyBwcmVmaXggKyBjc3NFeHBhbmRbIGkgXSArIHN1ZmZpeCBdID1cblx0XHRcdFx0XHRwYXJ0c1sgaSBdIHx8IHBhcnRzWyBpIC0gMiBdIHx8IHBhcnRzWyAwIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBleHBhbmRlZDtcblx0XHR9XG5cdH07XG5cblx0aWYgKCAhcm1hcmdpbi50ZXN0KCBwcmVmaXggKSApIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0Y3NzOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0dmFyIHN0eWxlcywgbGVuLFxuXHRcdFx0XHRtYXAgPSB7fSxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdGlmICggalF1ZXJ5LmlzQXJyYXkoIG5hbWUgKSApIHtcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICk7XG5cdFx0XHRcdGxlbiA9IG5hbWUubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdG1hcFsgbmFtZVsgaSBdIF0gPSBqUXVlcnkuY3NzKCBlbGVtLCBuYW1lWyBpIF0sIGZhbHNlLCBzdHlsZXMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lLCB2YWx1ZSApIDpcblx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuXHRcdH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9XG59ICk7XG5cblxuZnVuY3Rpb24gVHdlZW4oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICkge1xuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xufVxualF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cblR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IFR3ZWVuLFxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHR0aGlzLnByb3AgPSBwcm9wO1xuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHQ7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdH0sXG5cdGN1cjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdHJldHVybiBob29rcyAmJiBob29rcy5nZXQgP1xuXHRcdFx0aG9va3MuZ2V0KCB0aGlzICkgOlxuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xuXHR9LFxuXHRydW46IGZ1bmN0aW9uKCBwZXJjZW50ICkge1xuXHRcdHZhciBlYXNlZCxcblx0XHRcdGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmR1cmF0aW9uICkge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbIHRoaXMuZWFzaW5nIF0oXG5cdFx0XHRcdHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IHBlcmNlbnQ7XG5cdFx0fVxuXHRcdHRoaXMubm93ID0gKCB0aGlzLmVuZCAtIHRoaXMuc3RhcnQgKSAqIGVhc2VkICsgdGhpcy5zdGFydDtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnN0ZXAgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKCB0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBob29rcy5zZXQgKSB7XG5cdFx0XHRob29rcy5zZXQoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LnNldCggdGhpcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcblxuVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuXG5Ud2Vlbi5wcm9wSG9va3MgPSB7XG5cdF9kZWZhdWx0OiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0XHQvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuXHRcdFx0Ly8gb3Igd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBzdHlsZSBwcm9wZXJ0eSB0aGF0IGV4aXN0cy5cblx0XHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAhPT0gMSB8fFxuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gIT0gbnVsbCAmJiB0d2Vlbi5lbGVtLnN0eWxlWyB0d2Vlbi5wcm9wIF0gPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG5cdFx0XHQvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuXHRcdFx0Ly8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG5cdFx0XHQvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxuXHRcdFx0cmVzdWx0ID0galF1ZXJ5LmNzcyggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIiApO1xuXG5cdFx0XHQvLyBFbXB0eSBzdHJpbmdzLCBudWxsLCB1bmRlZmluZWQgYW5kIFwiYXV0b1wiIGFyZSBjb252ZXJ0ZWQgdG8gMC5cblx0XHRcdHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cblx0XHRcdC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuXHRcdFx0Ly8gVXNlIGNzc0hvb2sgaWYgaXRzIHRoZXJlLlxuXHRcdFx0Ly8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cblx0XHRcdGlmICggalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSApIHtcblx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcblx0XHRcdH0gZWxzZSBpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCB0d2Vlbi5lbGVtLnN0eWxlWyBqUXVlcnkuY3NzUHJvcHNbIHR3ZWVuLnByb3AgXSBdICE9IG51bGwgfHxcblx0XHRcdFx0XHRqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSApICkge1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIHR3ZWVuLm5vdyArIHR3ZWVuLnVuaXQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IHtcblx0c2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0aWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlICYmIHR3ZWVuLmVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5lYXNpbmcgPSB7XG5cdGxpbmVhcjogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIHA7XG5cdH0sXG5cdHN3aW5nOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gMC41IC0gTWF0aC5jb3MoIHAgKiBNYXRoLlBJICkgLyAyO1xuXHR9LFxuXHRfZGVmYXVsdDogXCJzd2luZ1wiXG59O1xuXG5qUXVlcnkuZnggPSBUd2Vlbi5wcm90b3R5cGUuaW5pdDtcblxuLy8gQmFjayBjb21wYXQgPDEuOCBleHRlbnNpb24gcG9pbnRcbmpRdWVyeS5meC5zdGVwID0ge307XG5cblxuXG5cbnZhclxuXHRmeE5vdywgdGltZXJJZCxcblx0cmZ4dHlwZXMgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXG5cdHJydW4gPSAvcXVldWVIb29rcyQvO1xuXG5mdW5jdGlvbiByYWYoKSB7XG5cdGlmICggdGltZXJJZCApIHtcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCByYWYgKTtcblx0XHRqUXVlcnkuZngudGljaygpO1xuXHR9XG59XG5cbi8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcbmZ1bmN0aW9uIGNyZWF0ZUZ4Tm93KCkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0ZnhOb3cgPSB1bmRlZmluZWQ7XG5cdH0gKTtcblx0cmV0dXJuICggZnhOb3cgPSBqUXVlcnkubm93KCkgKTtcbn1cblxuLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cbmZ1bmN0aW9uIGdlbkZ4KCB0eXBlLCBpbmNsdWRlV2lkdGggKSB7XG5cdHZhciB3aGljaCxcblx0XHRpID0gMCxcblx0XHRhdHRycyA9IHsgaGVpZ2h0OiB0eXBlIH07XG5cblx0Ly8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuXHQvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXHRpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcblx0Zm9yICggOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoICkge1xuXHRcdHdoaWNoID0gY3NzRXhwYW5kWyBpIF07XG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG5cdH1cblxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcblx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd2VlbiggdmFsdWUsIHByb3AsIGFuaW1hdGlvbiApIHtcblx0dmFyIHR3ZWVuLFxuXHRcdGNvbGxlY3Rpb24gPSAoIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdICkuY29uY2F0KCBBbmltYXRpb24udHdlZW5lcnNbIFwiKlwiIF0gKSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCAoIHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkgKSApIHtcblxuXHRcdFx0Ly8gV2UncmUgZG9uZSB3aXRoIHRoaXMgcHJvcGVydHlcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlciggZWxlbSwgcHJvcHMsIG9wdHMgKSB7XG5cdHZhciBwcm9wLCB2YWx1ZSwgdG9nZ2xlLCBob29rcywgb2xkZmlyZSwgcHJvcFR3ZWVuLCByZXN0b3JlRGlzcGxheSwgZGlzcGxheSxcblx0XHRpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuXHRcdGFuaW0gPSB0aGlzLFxuXHRcdG9yaWcgPSB7fSxcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGUsXG5cdFx0aGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSxcblx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJmeHNob3dcIiApO1xuXG5cdC8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuXHRpZiAoICFvcHRzLnF1ZXVlICkge1xuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcblx0XHRpZiAoIGhvb2tzLnVucXVldWVkID09IG51bGwgKSB7XG5cdFx0XHRob29rcy51bnF1ZXVlZCA9IDA7XG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhaG9va3MudW5xdWV1ZWQgKSB7XG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRob29rcy51bnF1ZXVlZCsrO1xuXG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuXHRcdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xuXHRcdFx0XHRpZiAoICFqUXVlcnkucXVldWUoIGVsZW0sIFwiZnhcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBEZXRlY3Qgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcblx0XHR2YWx1ZSA9IHByb3BzWyBwcm9wIF07XG5cdFx0aWYgKCByZnh0eXBlcy50ZXN0KCB2YWx1ZSApICkge1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XG5cdFx0XHR0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cdFx0XHRpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuXHRcdFx0XHQvLyBQcmV0ZW5kIHRvIGJlIGhpZGRlbiBpZiB0aGlzIGlzIGEgXCJzaG93XCIgYW5kXG5cdFx0XHRcdC8vIHRoZXJlIGlzIHN0aWxsIGRhdGEgZnJvbSBhIHN0b3BwZWQgc2hvdy9oaWRlXG5cdFx0XHRcdGlmICggdmFsdWUgPT09IFwic2hvd1wiICYmIGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSB0cnVlO1xuXG5cdFx0XHRcdC8vIElnbm9yZSBhbGwgb3RoZXIgbm8tb3Agc2hvdy9oaWRlIGRhdGFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXHRwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3BzICk7XG5cdGlmICggIXByb3BUd2VlbiAmJiBqUXVlcnkuaXNFbXB0eU9iamVjdCggb3JpZyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXHRpZiAoIGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG5cdFx0Ly8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1lcblx0XHRvcHRzLm92ZXJmbG93ID0gWyBzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1kgXTtcblxuXHRcdC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVNob3cgJiYgZGF0YVNob3cuZGlzcGxheTtcblx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHR9XG5cdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgKSB7XG5cdFx0XHRcdGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gR2V0IG5vbmVtcHR5IHZhbHVlKHMpIGJ5IHRlbXBvcmFyaWx5IGZvcmNpbmcgdmlzaWJpbGl0eVxuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcImZsb2F0XCIgKSA9PT0gXCJub25lXCIgKSB7XG5cblx0XHRcdFx0Ly8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSBhdCB0aGUgZW5kIG9mIHB1cmUgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0XHRcdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdGRpc3BsYXkgPSBzdHlsZS5kaXNwbGF5O1xuXHRcdFx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIG9wdHMub3ZlcmZsb3cgKSB7XG5cdFx0c3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sgMSBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEltcGxlbWVudCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRwcm9wVHdlZW4gPSBmYWxzZTtcblx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXG5cdFx0Ly8gR2VuZXJhbCBzaG93L2hpZGUgc2V0dXAgZm9yIHRoaXMgZWxlbWVudCBhbmltYXRpb25cblx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRpZiAoIGRhdGFTaG93ICkge1xuXHRcdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgXCJmeHNob3dcIiwgeyBkaXNwbGF5OiByZXN0b3JlRGlzcGxheSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXHRcdFx0aWYgKCB0b2dnbGUgKSB7XG5cdFx0XHRcdGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRcdC8vIFRoZSBmaW5hbCBzdGVwIG9mIGEgXCJoaWRlXCIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGhpZGluZyB0aGUgZWxlbWVudFxuXHRcdFx0XHRpZiAoICFoaWRkZW4gKSB7XG5cdFx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cdFx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gUGVyLXByb3BlcnR5IHNldHVwXG5cdFx0cHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XG5cdFx0aWYgKCAhKCBwcm9wIGluIGRhdGFTaG93ICkgKSB7XG5cdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHByb3BUd2Vlbi5lbmQgPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRcdHByb3BUd2Vlbi5zdGFydCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHByb3BGaWx0ZXIoIHByb3BzLCBzcGVjaWFsRWFzaW5nICkge1xuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xuXG5cdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcblx0XHRuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggaW5kZXggKTtcblx0XHRlYXNpbmcgPSBzcGVjaWFsRWFzaW5nWyBuYW1lIF07XG5cdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSApLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcblx0XHRcdFx0Ly8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAoIzEyNDk3KVxuXHRcdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YW5pbWF0aW9uID0gZGVmZXJyZWQucHJvbWlzZSgge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdHByb3BzOiBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcGVydGllcyApLFxuXHRcdFx0b3B0czogalF1ZXJ5LmV4dGVuZCggdHJ1ZSwge1xuXHRcdFx0XHRzcGVjaWFsRWFzaW5nOiB7fSxcblx0XHRcdFx0ZWFzaW5nOiBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0XG5cdFx0XHR9LCBvcHRpb25zICksXG5cdFx0XHRvcmlnaW5hbFByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG5cdFx0XHRvcmlnaW5hbE9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcblx0XHRcdHR3ZWVuczogW10sXG5cdFx0XHRjcmVhdGVUd2VlbjogZnVuY3Rpb24oIHByb3AsIGVuZCApIHtcblx0XHRcdFx0dmFyIHR3ZWVuID0galF1ZXJ5LlR3ZWVuKCBlbGVtLCBhbmltYXRpb24ub3B0cywgcHJvcCwgZW5kLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1sgcHJvcCBdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyApO1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH0sXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gMCxcblxuXHRcdFx0XHRcdC8vIElmIHdlIGFyZSBnb2luZyB0byB0aGUgZW5kLCB3ZSB3YW50IHRvIHJ1biBhbGwgdGhlIHR3ZWVuc1xuXHRcdFx0XHRcdC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuXHRcdFx0XHRcdGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XG5cdFx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0XHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggMSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3Rcblx0XHRcdFx0aWYgKCBnb3RvRW5kICkge1xuXHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9ICksXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0cHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG5cdFx0aWYgKCByZXN1bHQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXN1bHQuc3RvcCApICkge1xuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIGFuaW1hdGlvbi5lbGVtLCBhbmltYXRpb24ub3B0cy5xdWV1ZSApLnN0b3AgPVxuXHRcdFx0XHRcdGpRdWVyeS5wcm94eSggcmVzdWx0LnN0b3AsIHJlc3VsdCApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRqUXVlcnkubWFwKCBwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbiApO1xuXG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XG5cdH1cblxuXHRqUXVlcnkuZngudGltZXIoXG5cdFx0alF1ZXJ5LmV4dGVuZCggdGljaywge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcblx0XHRcdHF1ZXVlOiBhbmltYXRpb24ub3B0cy5xdWV1ZVxuXHRcdH0gKVxuXHQpO1xuXG5cdC8vIGF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXG5cdHJldHVybiBhbmltYXRpb24ucHJvZ3Jlc3MoIGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzIClcblx0XHQuZG9uZSggYW5pbWF0aW9uLm9wdHMuZG9uZSwgYW5pbWF0aW9uLm9wdHMuY29tcGxldGUgKVxuXHRcdC5mYWlsKCBhbmltYXRpb24ub3B0cy5mYWlsIClcblx0XHQuYWx3YXlzKCBhbmltYXRpb24ub3B0cy5hbHdheXMgKTtcbn1cblxualF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoIEFuaW1hdGlvbiwge1xuXG5cdHR3ZWVuZXJzOiB7XG5cdFx0XCIqXCI6IFsgZnVuY3Rpb24oIHByb3AsIHZhbHVlICkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2VlbiggcHJvcCwgdmFsdWUgKTtcblx0XHRcdGFkanVzdENTUyggdHdlZW4uZWxlbSwgcHJvcCwgcmNzc051bS5leGVjKCB2YWx1ZSApLCB0d2VlbiApO1xuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH0gXVxuXHR9LFxuXG5cdHR3ZWVuZXI6IGZ1bmN0aW9uKCBwcm9wcywgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcHJvcHMgKSApIHtcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XG5cdFx0XHRwcm9wcyA9IFsgXCIqXCIgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdHByb3AgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXS51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH1cblx0fSxcblxuXHRwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuXHRwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcblx0XHRpZiAoIHByZXBlbmQgKSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgZm4gKSB7XG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcblx0XHRjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuXHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIHNwZWVkICkgJiYgc3BlZWQsXG5cdFx0ZHVyYXRpb246IHNwZWVkLFxuXHRcdGVhc2luZzogZm4gJiYgZWFzaW5nIHx8IGVhc2luZyAmJiAhalF1ZXJ5LmlzRnVuY3Rpb24oIGVhc2luZyApICYmIGVhc2luZ1xuXHR9O1xuXG5cdC8vIEdvIHRvIHRoZSBlbmQgc3RhdGUgaWYgZnggYXJlIG9mZiBvciBpZiBkb2N1bWVudCBpcyBoaWRkZW5cblx0aWYgKCBqUXVlcnkuZngub2ZmIHx8IGRvY3VtZW50LmhpZGRlbiApIHtcblx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0aWYgKCBvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyApIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cdGlmICggb3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlICkge1xuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0fVxuXG5cdC8vIFF1ZXVlaW5nXG5cdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggb3B0Lm9sZCApICkge1xuXHRcdFx0b3B0Lm9sZC5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHQucXVldWUgKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgb3B0LnF1ZXVlICk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBvcHQ7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcblxuXHRcdC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggaXNIaWRkZW5XaXRoaW5UcmVlICkuY3NzKCBcIm9wYWNpdHlcIiwgMCApLnNob3coKVxuXG5cdFx0XHQvLyBBbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcblx0XHRcdC5lbmQoKS5hbmltYXRlKCB7IG9wYWNpdHk6IHRvIH0sIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH0sXG5cdGFuaW1hdGU6IGZ1bmN0aW9uKCBwcm9wLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHR2YXIgZW1wdHkgPSBqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcCApLFxuXHRcdFx0b3B0YWxsID0galF1ZXJ5LnNwZWVkKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApLFxuXHRcdFx0ZG9BbmltYXRpb24gPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuXHRcdFx0XHR2YXIgYW5pbSA9IEFuaW1hdGlvbiggdGhpcywgalF1ZXJ5LmV4dGVuZCgge30sIHByb3AgKSwgb3B0YWxsICk7XG5cblx0XHRcdFx0Ly8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdGlmICggZW1wdHkgfHwgZGF0YVByaXYuZ2V0KCB0aGlzLCBcImZpbmlzaFwiICkgKSB7XG5cdFx0XHRcdFx0YW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuXHRcdHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID9cblx0XHRcdHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XG5cdFx0XHR0aGlzLnF1ZXVlKCBvcHRhbGwucXVldWUsIGRvQW5pbWF0aW9uICk7XG5cdH0sXG5cdHN0b3A6IGZ1bmN0aW9uKCB0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kICkge1xuXHRcdHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiggaG9va3MgKSB7XG5cdFx0XHR2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdHN0b3AoIGdvdG9FbmQgKTtcblx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGdvdG9FbmQgPSBjbGVhclF1ZXVlO1xuXHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkZXF1ZXVlID0gdHJ1ZSxcblx0XHRcdFx0aW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICk7XG5cblx0XHRcdGlmICggaW5kZXggKSB7XG5cdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XG5cdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGluZGV4IGluIGRhdGEgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCAmJiBycnVuLnRlc3QoIGluZGV4ICkgKSB7XG5cdFx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJlxuXHRcdFx0XHRcdCggdHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApICkge1xuXG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggZ290b0VuZCApO1xuXHRcdFx0XHRcdGRlcXVldWUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG5cdFx0XHQvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG5cdFx0XHQvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cdFx0XHRpZiAoIGRlcXVldWUgfHwgIWdvdG9FbmQgKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXHRmaW5pc2g6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdGlmICggdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGluZGV4LFxuXHRcdFx0XHRkYXRhID0gZGF0YVByaXYuZ2V0KCB0aGlzICksXG5cdFx0XHRcdHF1ZXVlID0gZGF0YVsgdHlwZSArIFwicXVldWVcIiBdLFxuXHRcdFx0XHRob29rcyA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlSG9va3NcIiBdLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRsZW5ndGggPSBxdWV1ZSA/IHF1ZXVlLmxlbmd0aCA6IDA7XG5cblx0XHRcdC8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcblx0XHRcdGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuXHRcdFx0Ly8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5cdFx0XHRqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIFtdICk7XG5cblx0XHRcdGlmICggaG9va3MgJiYgaG9va3Muc3RvcCApIHtcblx0XHRcdFx0aG9va3Muc3RvcC5jYWxsKCB0aGlzLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApIHtcblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0aWYgKCBxdWV1ZVsgaW5kZXggXSAmJiBxdWV1ZVsgaW5kZXggXS5maW5pc2ggKSB7XG5cdFx0XHRcdFx0cXVldWVbIGluZGV4IF0uZmluaXNoLmNhbGwoIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuXHRcdFx0ZGVsZXRlIGRhdGEuZmluaXNoO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcInRvZ2dsZVwiLCBcInNob3dcIiwgXCJoaWRlXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0galF1ZXJ5Lm5vdygpO1xuXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcblx0XHR0aW1lciA9IHRpbWVyc1sgaSBdO1xuXG5cdFx0Ly8gQ2hlY2tzIHRoZSB0aW1lciBoYXMgbm90IGFscmVhZHkgYmVlbiByZW1vdmVkXG5cdFx0aWYgKCAhdGltZXIoKSAmJiB0aW1lcnNbIGkgXSA9PT0gdGltZXIgKSB7XG5cdFx0XHR0aW1lcnMuc3BsaWNlKCBpLS0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoICF0aW1lcnMubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5meC5zdG9wKCk7XG5cdH1cblx0ZnhOb3cgPSB1bmRlZmluZWQ7XG59O1xuXG5qUXVlcnkuZngudGltZXIgPSBmdW5jdGlvbiggdGltZXIgKSB7XG5cdGpRdWVyeS50aW1lcnMucHVzaCggdGltZXIgKTtcblx0aWYgKCB0aW1lcigpICkge1xuXHRcdGpRdWVyeS5meC5zdGFydCgpO1xuXHR9IGVsc2Uge1xuXHRcdGpRdWVyeS50aW1lcnMucG9wKCk7XG5cdH1cbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggIXRpbWVySWQgKSB7XG5cdFx0dGltZXJJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgP1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcmFmICkgOlxuXHRcdFx0d2luZG93LnNldEludGVydmFsKCBqUXVlcnkuZngudGljaywgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdH1cbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGlmICggd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lICkge1xuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSggdGltZXJJZCApO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKCB0aW1lcklkICk7XG5cdH1cblxuXHR0aW1lcklkID0gbnVsbDtcbn07XG5cbmpRdWVyeS5meC5zcGVlZHMgPSB7XG5cdHNsb3c6IDYwMCxcblx0ZmFzdDogMjAwLFxuXG5cdC8vIERlZmF1bHQgc3BlZWRcblx0X2RlZmF1bHQ6IDQwMFxufTtcblxuXG4vLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXG4vLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMDAzMjQwMTQ3NDcvaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fTtcblx0fSApO1xufTtcblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcblx0XHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG5cdFx0b3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9wdGlvblwiICkgKTtcblxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuXHQvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblx0c3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XG5cdGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbn0gKSgpO1xuXG5cbnZhciBib29sSG9vayxcblx0YXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCB0aGlzLCBuYW1lICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRpZiAoIHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucHJvcCggZWxlbSwgbmFtZSwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG5cdFx0Ly8gR3JhYiBuZWNlc3NhcnkgaG9vayBpZiBvbmUgaXMgZGVmaW5lZFxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXHRcdFx0aG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHQoIGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdCggbmFtZSApID8gYm9vbEhvb2sgOiB1bmRlZmluZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHQvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXHRcdHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcblx0fSxcblxuXHRhdHRySG9va3M6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiZcblx0XHRcdFx0XHRqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0dmFyIG5hbWUsXG5cdFx0XHRpID0gMCxcblxuXHRcdFx0Ly8gQXR0cmlidXRlIG5hbWVzIGNhbiBjb250YWluIG5vbi1IVE1MIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG5cdFx0XHRhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdHdoaWxlICggKCBuYW1lID0gYXR0ck5hbWVzWyBpKysgXSApICkge1xuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5ib29sSG9vayA9IHtcblx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIG5hbWUgKSB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2Vcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG59O1xuXG5qUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHJldCwgaGFuZGxlLFxuXHRcdFx0bG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICggIWlzWE1MICkge1xuXG5cdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG5cdFx0XHRoYW5kbGUgPSBhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF07XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSByZXQ7XG5cdFx0XHRyZXQgPSBnZXR0ZXIoIGVsZW0sIG5hbWUsIGlzWE1MICkgIT0gbnVsbCA/XG5cdFx0XHRcdGxvd2VyY2FzZU5hbWUgOlxuXHRcdFx0XHRudWxsO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gaGFuZGxlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufSApO1xuXG5cblxuXG52YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdHJjbGlja2FibGUgPSAvXig/OmF8YXJlYSkkL2k7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVQcm9wOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB0aGlzWyBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUgXTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuXHRcdFx0bmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcblx0XHRcdGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoIGVsZW1bIG5hbWUgXSA9IHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1bIG5hbWUgXTtcblx0fSxcblxuXHRwcm9wSG9va3M6IHtcblx0XHR0YWJJbmRleDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0XHRcdC8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuXHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0Ly8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTQxMTE2MjMzMzQ3L2h0dHA6Ly9mbHVpZHByb2plY3Qub3JnL2Jsb2cvMjAwOC8wMS8wOS9nZXR0aW5nLXNldHRpbmctYW5kLXJlbW92aW5nLXRhYmluZGV4LXZhbHVlcy13aXRoLWphdmFzY3JpcHQvXG5cdFx0XHRcdC8vIFVzZSBwcm9wZXIgYXR0cmlidXRlIHJldHJpZXZhbCgjMTIwNzIpXG5cdFx0XHRcdHZhciB0YWJpbmRleCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidGFiaW5kZXhcIiApO1xuXG5cdFx0XHRcdGlmICggdGFiaW5kZXggKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KCB0YWJpbmRleCwgMTAgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRyZm9jdXNhYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSB8fFxuXHRcdFx0XHRcdHJjbGlja2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApICYmXG5cdFx0XHRcdFx0ZWxlbS5ocmVmXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm9wRml4OiB7XG5cdFx0XCJmb3JcIjogXCJodG1sRm9yXCIsXG5cdFx0XCJjbGFzc1wiOiBcImNsYXNzTmFtZVwiXG5cdH1cbn0gKTtcblxuLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcbi8vIGZvcmNlcyB0aGUgYnJvd3NlciB0byByZXNwZWN0IHNldHRpbmcgc2VsZWN0ZWRcbi8vIG9uIHRoZSBvcHRpb25cbi8vIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uIGlzIHNlbGVjdGVkXG4vLyB3aGVuIGluIGFuIG9wdGdyb3VwXG4vLyBlc2xpbnQgcnVsZSBcIm5vLXVudXNlZC1leHByZXNzaW9uc1wiIGlzIGRpc2FibGVkIGZvciB0aGlzIGNvZGVcbi8vIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcFxuaWYgKCAhc3VwcG9ydC5vcHRTZWxlY3RlZCApIHtcblx0alF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRcdHBhcmVudC5zZWxlY3RlZEluZGV4O1xuXG5cdFx0XHRcdGlmICggcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxualF1ZXJ5LmVhY2goIFtcblx0XCJ0YWJJbmRleFwiLFxuXHRcInJlYWRPbmx5XCIsXG5cdFwibWF4TGVuZ3RoXCIsXG5cdFwiY2VsbFNwYWNpbmdcIixcblx0XCJjZWxsUGFkZGluZ1wiLFxuXHRcInJvd1NwYW5cIixcblx0XCJjb2xTcGFuXCIsXG5cdFwidXNlTWFwXCIsXG5cdFwiZnJhbWVCb3JkZXJcIixcblx0XCJjb250ZW50RWRpdGFibGVcIlxuXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS5wcm9wRml4WyB0aGlzLnRvTG93ZXJDYXNlKCkgXSA9IHRoaXM7XG59ICk7XG5cblxuXG5cblx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2UgYWNjb3JkaW5nIHRvIEhUTUwgc3BlY1xuXHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UoIHZhbHVlICkge1xuXHRcdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRcdHJldHVybiB0b2tlbnMuam9pbiggXCIgXCIgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NlcywgZWxlbSwgY3VyLCBjdXJWYWx1ZSwgY2xhenosIGosIGZpbmFsVmFsdWUsXG5cdFx0XHRpID0gMDtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICkge1xuXHRcdFx0Y2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBjdXJWYWx1ZSApICsgXCIgXCIgKTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggY2xhenogPSBjbGFzc2VzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPCAwICkge1xuXHRcdFx0XHRcdFx0XHRjdXIgKz0gY2xhenogKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgKSB7XG5cdFx0XHRjbGFzc2VzID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCBlbGVtICk7XG5cblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGF6eiArIFwiIFwiICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0Y3VyID0gY3VyLnJlcGxhY2UoIFwiIFwiICsgY2xhenogKyBcIiBcIiwgXCIgXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUsIHN0YXRlVmFsICkge1xuXHRcdHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKFxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIHRoaXMsIGksIGdldENsYXNzKCB0aGlzICksIHN0YXRlVmFsICksXG5cdFx0XHRcdFx0c3RhdGVWYWxcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbGFzc05hbWUsIGksIHNlbGYsIGNsYXNzTmFtZXM7XG5cblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHQvLyBUb2dnbGUgaW5kaXZpZHVhbCBjbGFzcyBuYW1lc1xuXHRcdFx0XHRpID0gMDtcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXHRcdFx0XHRjbGFzc05hbWVzID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0XHR3aGlsZSAoICggY2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSsrIF0gKSApIHtcblxuXHRcdFx0XHRcdC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuXHRcdFx0XHRcdGlmICggc2VsZi5oYXNDbGFzcyggY2xhc3NOYW1lICkgKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5hZGRDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIFRvZ2dsZSB3aG9sZSBjbGFzcyBuYW1lXG5cdFx0XHR9IGVsc2UgaWYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0XHRjbGFzc05hbWUgPSBnZXRDbGFzcyggdGhpcyApO1xuXHRcdFx0XHRpZiAoIGNsYXNzTmFtZSApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGNsYXNzTmFtZSBpZiBzZXRcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCBjbGFzc05hbWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIGNsYXNzIG5hbWUgb3IgaWYgd2UncmUgcGFzc2VkIGBmYWxzZWAsXG5cdFx0XHRcdC8vIHRoZW4gcmVtb3ZlIHRoZSB3aG9sZSBjbGFzc25hbWUgKGlmIHRoZXJlIHdhcyBvbmUsIHRoZSBhYm92ZSBzYXZlZCBpdCkuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBicmluZyBiYWNrIHdoYXRldmVyIHdhcyBwcmV2aW91c2x5IHNhdmVkIChpZiBhbnl0aGluZyksXG5cdFx0XHRcdC8vIGZhbGxpbmcgYmFjayB0byB0aGUgZW1wdHkgc3RyaW5nIGlmIG5vdGhpbmcgd2FzIHN0b3JlZC5cblx0XHRcdFx0aWYgKCB0aGlzLnNldEF0dHJpYnV0ZSApIHtcblx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lIHx8IHZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRcdFx0XHRcIlwiIDpcblx0XHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIgKSB8fCBcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUsIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcblx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGdldENsYXNzKCBlbGVtICkgKSArIFwiIFwiICkuaW5kZXhPZiggY2xhc3NOYW1lICkgPiAtMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIHJyZXR1cm4gPSAvXFxyL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0dmFsOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGhvb2tzLCByZXQsIGlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0dmFyIHZhbDtcblxuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggalF1ZXJ5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHR2YWwgPSBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCI7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIHRoaXMudHlwZSBdIHx8IGpRdWVyeS52YWxIb29rc1sgdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHwgaG9va3Muc2V0KCB0aGlzLCB2YWwsIFwidmFsdWVcIiApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0dmFsSG9va3M6IHtcblx0XHRvcHRpb246IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0dmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidmFsdWVcIiApO1xuXHRcdFx0XHRyZXR1cm4gdmFsICE9IG51bGwgP1xuXHRcdFx0XHRcdHZhbCA6XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEgb25seVxuXHRcdFx0XHRcdC8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICgjMTQ2ODYsICMxNDg1OClcblx0XHRcdFx0XHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdFx0XHRcdFx0c3RyaXBBbmRDb2xsYXBzZSggalF1ZXJ5LnRleHQoIGVsZW0gKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbiwgaSxcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRcdG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG5cdFx0XHRcdFx0dmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuXHRcdFx0XHRcdG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmICggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdGkgPSBtYXg7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpID0gb25lID8gaW5kZXggOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdC8vIElFOC05IGRvZXNuJ3QgdXBkYXRlIHNlbGVjdGVkIGFmdGVyIGZvcm0gcmVzZXQgKCMyNTUxKVxuXHRcdFx0XHRcdGlmICggKCBvcHRpb24uc2VsZWN0ZWQgfHwgaSA9PT0gaW5kZXggKSAmJlxuXG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdFx0XHRcdFx0IW9wdGlvbi5kaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0XHQoICFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fFxuXHRcdFx0XHRcdFx0XHRcdCFqUXVlcnkubm9kZU5hbWUoIG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHQvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGpRdWVyeSggb3B0aW9uICkudmFsKCk7XG5cblx0XHRcdFx0XHRcdC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cdFx0XHRcdFx0XHRpZiAoIG9uZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgb3B0aW9uU2V0LCBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHR2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KCB2YWx1ZSApLFxuXHRcdFx0XHRcdGkgPSBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb24uc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIGpRdWVyeS52YWxIb29rcy5vcHRpb24uZ2V0KCBvcHRpb24gKSwgdmFsdWVzICkgPiAtMVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0b3B0aW9uU2V0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuXHRcdFx0XHRpZiAoICFvcHRpb25TZXQgKSB7XG5cdFx0XHRcdFx0ZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIGdldHRlci9zZXR0ZXJcbmpRdWVyeS5lYWNoKCBbIFwicmFkaW9cIiwgXCJjaGVja2JveFwiIF0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXSA9IHtcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdGlmICggalF1ZXJ5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87XG5cbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5ldmVudCwge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCBldmVudCwgZGF0YSwgZWxlbSwgb25seUhhbmRsZXJzICkge1xuXG5cdFx0dmFyIGksIGN1ciwgdG1wLCBidWJibGVUeXBlLCBvbnR5cGUsIGhhbmRsZSwgc3BlY2lhbCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7XG5cblx0XHQvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuXHRcdGlmICggcmZvY3VzTW9ycGgudGVzdCggdHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGUuaW5kZXhPZiggXCIuXCIgKSA+IC0xICkge1xuXG5cdFx0XHQvLyBOYW1lc3BhY2VkIHRyaWdnZXI7IGNyZWF0ZSBhIHJlZ2V4cCB0byBtYXRjaCBldmVudCB0eXBlIGluIGhhbmRsZSgpXG5cdFx0XHRuYW1lc3BhY2VzID0gdHlwZS5zcGxpdCggXCIuXCIgKTtcblx0XHRcdHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG5cdFx0XHRuYW1lc3BhY2VzLnNvcnQoKTtcblx0XHR9XG5cdFx0b250eXBlID0gdHlwZS5pbmRleE9mKCBcIjpcIiApIDwgMCAmJiBcIm9uXCIgKyB0eXBlO1xuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cdFx0ZXZlbnQgPSBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRldmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCB0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQgKTtcblxuXHRcdC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblx0XHRldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcblx0XHRldmVudC5uYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiICk7XG5cdFx0ZXZlbnQucm5hbWVzcGFjZSA9IGV2ZW50Lm5hbWVzcGFjZSA/XG5cdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKSA6XG5cdFx0XHRudWxsO1xuXG5cdFx0Ly8gQ2xlYW4gdXAgdGhlIGV2ZW50IGluIGNhc2UgaXQgaXMgYmVpbmcgcmV1c2VkXG5cdFx0ZXZlbnQucmVzdWx0ID0gdW5kZWZpbmVkO1xuXHRcdGlmICggIWV2ZW50LnRhcmdldCApIHtcblx0XHRcdGV2ZW50LnRhcmdldCA9IGVsZW07XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgYW55IGluY29taW5nIGRhdGEgYW5kIHByZXBlbmQgdGhlIGV2ZW50LCBjcmVhdGluZyB0aGUgaGFuZGxlciBhcmcgbGlzdFxuXHRcdGRhdGEgPSBkYXRhID09IG51bGwgP1xuXHRcdFx0WyBldmVudCBdIDpcblx0XHRcdGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEsIFsgZXZlbnQgXSApO1xuXG5cdFx0Ly8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuXHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiBzcGVjaWFsLnRyaWdnZXIgJiYgc3BlY2lhbC50cmlnZ2VyLmFwcGx5KCBlbGVtLCBkYXRhICkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIERldGVybWluZSBldmVudCBwcm9wYWdhdGlvbiBwYXRoIGluIGFkdmFuY2UsIHBlciBXM0MgZXZlbnRzIHNwZWMgKCM5OTUxKVxuXHRcdC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAoIzk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0YnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cdFx0XHRpZiAoICFyZm9jdXNNb3JwaC50ZXN0KCBidWJibGVUeXBlICsgdHlwZSApICkge1xuXHRcdFx0XHRjdXIgPSBjdXIucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGZvciAoIDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIGN1ciApO1xuXHRcdFx0XHR0bXAgPSBjdXI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuXHRcdFx0aWYgKCB0bXAgPT09ICggZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50ICkgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIGN1ciA9IGV2ZW50UGF0aFsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0ZXZlbnQudHlwZSA9IGkgPiAxID9cblx0XHRcdFx0YnViYmxlVHlwZSA6XG5cdFx0XHRcdHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTtcblxuXHRcdFx0Ly8galF1ZXJ5IGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9ICggZGF0YVByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gJiZcblx0XHRcdFx0ZGF0YVByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcblx0XHRcdGlmICggaGFuZGxlICkge1xuXHRcdFx0XHRoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBOYXRpdmUgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gb250eXBlICYmIGN1clsgb250eXBlIF07XG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YSggY3VyICkgKSB7XG5cdFx0XHRcdGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xuXG5cdFx0Ly8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XG5cblx0XHRcdGlmICggKCAhc3BlY2lhbC5fZGVmYXVsdCB8fFxuXHRcdFx0XHRzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UgKSAmJlxuXHRcdFx0XHRhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKCM2MTcwKVxuXHRcdFx0XHRpZiAoIG9udHlwZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdC8vIFBpZ2d5YmFjayBvbiBhIGRvbm9yIGV2ZW50IHRvIHNpbXVsYXRlIGEgZGlmZmVyZW50IG9uZVxuXHQvLyBVc2VkIG9ubHkgZm9yIGBmb2N1cyhpbiB8IG91dClgIGV2ZW50c1xuXHRzaW11bGF0ZTogZnVuY3Rpb24oIHR5cGUsIGVsZW0sIGV2ZW50ICkge1xuXHRcdHZhciBlID0galF1ZXJ5LmV4dGVuZChcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoKSxcblx0XHRcdGV2ZW50LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRpc1NpbXVsYXRlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggZSwgbnVsbCwgZWxlbSApO1xuXHR9XG5cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIHRoaXMgKTtcblx0XHR9ICk7XG5cdH0sXG5cdHRyaWdnZXJIYW5kbGVyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgZWxlbSA9IHRoaXNbIDAgXTtcblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIGVsZW0sIHRydWUgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZWFjaCggKCBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIFwiICtcblx0XCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArXG5cdFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiICkuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXG5cdC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XG5cdFx0XHR0aGlzLm9uKCBuYW1lLCBudWxsLCBkYXRhLCBmbiApIDpcblx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZWVudGVyKCBmbk92ZXIgKS5tb3VzZWxlYXZlKCBmbk91dCB8fCBmbk92ZXIgKTtcblx0fVxufSApO1xuXG5cblxuXG5zdXBwb3J0LmZvY3VzaW4gPSBcIm9uZm9jdXNpblwiIGluIHdpbmRvdztcblxuXG4vLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcbi8vIEZpcmVmb3ggZG9lc24ndCBoYXZlIGZvY3VzKGluIHwgb3V0KSBldmVudHNcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG4vL1xuLy8gU3VwcG9ydDogQ2hyb21lIDw9NDggLSA0OSwgU2FmYXJpIDw9OS4wIC0gOS4xXG4vLyBmb2N1cyhpbiB8IG91dCkgZXZlbnRzIGZpcmUgYWZ0ZXIgZm9jdXMgJiBibHVyIGV2ZW50cyxcbi8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDk4NTdcbmlmICggIXN1cHBvcnQuZm9jdXNpbiApIHtcblx0alF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblxuXHRcdC8vIEF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0XG5cdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIGZpeCwgZXZlbnQudGFyZ2V0LCBqUXVlcnkuZXZlbnQuZml4KCBldmVudCApICk7XG5cdFx0fTtcblxuXHRcdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBmaXggXSA9IHtcblx0XHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG5cdFx0XHR9LFxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoIGRvYywgZml4ICkgLSAxO1xuXG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCwgYXR0YWNoZXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0gKTtcbn1cbnZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxudmFyIG5vbmNlID0galF1ZXJ5Lm5vdygpO1xuXG52YXIgcnF1ZXJ5ID0gKCAvXFw/LyApO1xuXG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWw7XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblx0dHJ5IHtcblx0XHR4bWwgPSAoIG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkgKS5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHR4bWwgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoICF4bWwgfHwgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInBhcnNlcmVycm9yXCIgKS5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXJcblx0cmJyYWNrZXQgPSAvXFxbXFxdJC8sXG5cdHJDUkxGID0gL1xccj9cXG4vZyxcblx0cnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuXHRyc3VibWl0dGFibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcblx0dmFyIG5hbWU7XG5cblx0aWYgKCBqUXVlcnkuaXNBcnJheSggb2JqICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRqUXVlcnkuZWFjaCggb2JqLCBmdW5jdGlvbiggaSwgdiApIHtcblx0XHRcdGlmICggdHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdCggcHJlZml4ICkgKSB7XG5cblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyhcblx0XHRcdFx0XHRwcmVmaXggKyBcIltcIiArICggdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIgKSArIFwiXVwiLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0dHJhZGl0aW9uYWwsXG5cdFx0XHRcdFx0YWRkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiBqUXVlcnkudHlwZSggb2JqICkgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4ICsgXCJbXCIgKyBuYW1lICsgXCJdXCIsIG9ialsgbmFtZSBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG5cdFx0YWRkKCBwcmVmaXgsIG9iaiApO1xuXHR9XG59XG5cbi8vIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzIG9yIGEgc2V0IG9mXG4vLyBrZXkvdmFsdWVzIGludG8gYSBxdWVyeSBzdHJpbmdcbmpRdWVyeS5wYXJhbSA9IGZ1bmN0aW9uKCBhLCB0cmFkaXRpb25hbCApIHtcblx0dmFyIHByZWZpeCxcblx0XHRzID0gW10sXG5cdFx0YWRkID0gZnVuY3Rpb24oIGtleSwgdmFsdWVPckZ1bmN0aW9uICkge1xuXG5cdFx0XHQvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCBpbnZva2UgaXQgYW5kIHVzZSBpdHMgcmV0dXJuIHZhbHVlXG5cdFx0XHR2YXIgdmFsdWUgPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWVPckZ1bmN0aW9uICkgP1xuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb24oKSA6XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbjtcblxuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSApO1xuXHRcdH07XG5cblx0Ly8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblx0aWYgKCBqUXVlcnkuaXNBcnJheSggYSApIHx8ICggYS5qcXVlcnkgJiYgIWpRdWVyeS5pc1BsYWluT2JqZWN0KCBhICkgKSApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xuXHRcdGpRdWVyeS5lYWNoKCBhLCBmdW5jdGlvbigpIHtcblx0XHRcdGFkZCggdGhpcy5uYW1lLCB0aGlzLnZhbHVlICk7XG5cdFx0fSApO1xuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuXHRcdC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuXHRcdGZvciAoIHByZWZpeCBpbiBhICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCwgYVsgcHJlZml4IF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5cdHJldHVybiBzLmpvaW4oIFwiJlwiICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHNlcmlhbGl6ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5wYXJhbSggdGhpcy5zZXJpYWxpemVBcnJheSgpICk7XG5cdH0sXG5cdHNlcmlhbGl6ZUFycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBDYW4gYWRkIHByb3BIb29rIGZvciBcImVsZW1lbnRzXCIgdG8gZmlsdGVyIG9yIGFkZCBmb3JtIGVsZW1lbnRzXG5cdFx0XHR2YXIgZWxlbWVudHMgPSBqUXVlcnkucHJvcCggdGhpcywgXCJlbGVtZW50c1wiICk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KCBlbGVtZW50cyApIDogdGhpcztcblx0XHR9IClcblx0XHQuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0eXBlID0gdGhpcy50eXBlO1xuXG5cdFx0XHQvLyBVc2UgLmlzKCBcIjpkaXNhYmxlZFwiICkgc28gdGhhdCBmaWVsZHNldFtkaXNhYmxlZF0gd29ya3Ncblx0XHRcdHJldHVybiB0aGlzLm5hbWUgJiYgIWpRdWVyeSggdGhpcyApLmlzKCBcIjpkaXNhYmxlZFwiICkgJiZcblx0XHRcdFx0cnN1Ym1pdHRhYmxlLnRlc3QoIHRoaXMubm9kZU5hbWUgKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QoIHR5cGUgKSAmJlxuXHRcdFx0XHQoIHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCggdHlwZSApICk7XG5cdFx0fSApXG5cdFx0Lm1hcCggZnVuY3Rpb24oIGksIGVsZW0gKSB7XG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbCApIHtcblx0XHRcdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0fSApLmdldCgpO1xuXHR9XG59ICk7XG5cblxudmFyXG5cdHIyMCA9IC8lMjAvZyxcblx0cmhhc2ggPSAvIy4qJC8sXG5cdHJhbnRpQ2FjaGUgPSAvKFs/Jl0pXz1bXiZdKi8sXG5cdHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcblxuXHQvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cblx0cmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcblx0cm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG5cdHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcblxuXHQvKiBQcmVmaWx0ZXJzXG5cdCAqIDEpIFRoZXkgYXJlIHVzZWZ1bCB0byBpbnRyb2R1Y2UgY3VzdG9tIGRhdGFUeXBlcyAoc2VlIGFqYXgvanNvbnAuanMgZm9yIGFuIGV4YW1wbGUpXG5cdCAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XG5cdCAqICAgIC0gQkVGT1JFIGFza2luZyBmb3IgYSB0cmFuc3BvcnRcblx0ICogICAgLSBBRlRFUiBwYXJhbSBzZXJpYWxpemF0aW9uIChzLmRhdGEgaXMgYSBzdHJpbmcgaWYgcy5wcm9jZXNzRGF0YSBpcyB0cnVlKVxuXHQgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDQpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogNSkgZXhlY3V0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gY29udGludWUgZG93biB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHByZWZpbHRlcnMgPSB7fSxcblxuXHQvKiBUcmFuc3BvcnRzIGJpbmRpbmdzXG5cdCAqIDEpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiAzKSBzZWxlY3Rpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBnbyB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHRyYW5zcG9ydHMgPSB7fSxcblxuXHQvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cblx0YWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG5cdC8vIEFuY2hvciB0YWcgZm9yIHBhcnNpbmcgdGhlIGRvY3VtZW50IG9yaWdpblxuXHRvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXHRvcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggZnVuYyApICkge1xuXG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS51bnNoaWZ0KCBmdW5jICk7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBjYWxsYmFja0NvbnRleHQgKSA6XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LFxuXG5cdFx0XHQvLyBEZWZlcnJlZHNcblx0XHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcblxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuXHRcdFx0Ly8gRmFrZSB4aHJcblx0XHRcdGpxWEhSID0ge1xuXHRcdFx0XHRyZWFkeVN0YXRlOiAwLFxuXG5cdFx0XHRcdC8vIEJ1aWxkcyBoZWFkZXJzIGhhc2h0YWJsZSBpZiBuZWVkZWRcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnNbIG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKSBdID0gbWF0Y2hbIDIgXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBtYXRjaCA9PSBudWxsID8gbnVsbCA6IG1hdGNoO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFJhdyBzdHJpbmdcblx0XHRcdFx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gY29tcGxldGVkID8gcmVzcG9uc2VIZWFkZXJzU3RyaW5nIDogbnVsbDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYWNoZXMgdGhlIGhlYWRlclxuXHRcdFx0XHRzZXRSZXF1ZXN0SGVhZGVyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSA9XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdIHx8IG5hbWU7XG5cdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG5cdFx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRzLm1pbWVUeXBlID0gdHlwZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdFx0c3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcblx0XHRcdFx0XHR2YXIgY29kZTtcblx0XHRcdFx0XHRpZiAoIG1hcCApIHtcblx0XHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdFx0XHRqcVhIUi5hbHdheXMoIG1hcFsganFYSFIuc3RhdHVzIF0gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcblx0XHRcdFx0XHRcdFx0Zm9yICggY29kZSBpbiBtYXAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzQ29kZVsgY29kZSBdID0gWyBzdGF0dXNDb2RlWyBjb2RlIF0sIG1hcFsgY29kZSBdIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSByZXF1ZXN0XG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbiggc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHR2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcblx0XHRcdFx0XHRpZiAoIHRyYW5zcG9ydCApIHtcblx0XHRcdFx0XHRcdHRyYW5zcG9ydC5hYm9ydCggZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbmUoIDAsIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xuXHRcdGRlZmVycmVkLnByb21pc2UoIGpxWEhSICk7XG5cblx0XHQvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkIChwcmVmaWx0ZXJzIG1pZ2h0IGV4cGVjdCBpdClcblx0XHQvLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmICkgKyBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCAjMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDEzXG5cdFx0XHQvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuXHRcdFx0Ly8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSBzLnVybDtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICgjMTUxMTgpXG5cdFx0ZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cblx0XHQvLyBXYXRjaCBmb3IgYSBuZXcgc2V0IG9mIHJlcXVlc3RzXG5cdFx0aWYgKCBmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDAgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RhcnRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXHRcdHMudHlwZSA9IHMudHlwZS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcblx0XHRzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KCBzLnR5cGUgKTtcblxuXHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuXHRcdC8vIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciBsYXRlciBvblxuXHRcdC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cblx0XHRjYWNoZVVSTCA9IHMudXJsLnJlcGxhY2UoIHJoYXNoLCBcIlwiICk7XG5cblx0XHQvLyBNb3JlIG9wdGlvbnMgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbm8gY29udGVudFxuXHRcdGlmICggIXMuaGFzQ29udGVudCApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG5cdFx0XHR1bmNhY2hlZCA9IHMudXJsLnNsaWNlKCBjYWNoZVVSTC5sZW5ndGggKTtcblxuXHRcdFx0Ly8gSWYgZGF0YSBpcyBhdmFpbGFibGUsIGFwcGVuZCBkYXRhIHRvIHVybFxuXHRcdFx0aWYgKCBzLmRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxuXHRcdFx0XHRkZWxldGUgcy5kYXRhO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb3IgdXBkYXRlIGFudGktY2FjaGUgcGFyYW0gaWYgbmVlZGVkXG5cdFx0XHRpZiAoIHMuY2FjaGUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRjYWNoZVVSTCA9IGNhY2hlVVJMLnJlcGxhY2UoIHJhbnRpQ2FjaGUsIFwiJDFcIiApO1xuXHRcdFx0XHR1bmNhY2hlZCA9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBcIl89XCIgKyAoIG5vbmNlKysgKSArIHVuY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5cdFx0XHRzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cblx0XHQvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcblx0XHR9IGVsc2UgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJlxuXHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgKSB7XG5cdFx0XHRzLmRhdGEgPSBzLmRhdGEucmVwbGFjZSggcjIwLCBcIitcIiApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5oYXNDb250ZW50ICYmIHMuY29udGVudFR5cGUgIT09IGZhbHNlIHx8IG9wdGlvbnMuY29udGVudFR5cGUgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuXHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcIkFjY2VwdFwiLFxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcblx0XHRcdFx0XHQoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuXHRcdFx0XHRzLmFjY2VwdHNbIFwiKlwiIF1cblx0XHQpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBzLmhlYWRlcnNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcblx0XHRpZiAoIHMuYmVmb3JlU2VuZCAmJlxuXHRcdFx0KCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBjb21wbGV0ZWQgKSApIHtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGNvbXBsZXRlRGVmZXJyZWQuYWRkKCBzLmNvbXBsZXRlICk7XG5cdFx0anFYSFIuZG9uZSggcy5zdWNjZXNzICk7XG5cdFx0anFYSFIuZmFpbCggcy5lcnJvciApO1xuXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxuXHRcdHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5cdFx0aWYgKCAhdHJhbnNwb3J0ICkge1xuXHRcdFx0ZG9uZSggLTEsIFwiTm8gVHJhbnNwb3J0XCIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IDE7XG5cblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4U2VuZFwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoIFwidGltZW91dFwiICk7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dHJhbnNwb3J0LnNlbmQoIHJlcXVlc3RIZWFkZXJzLCBkb25lICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cdFx0XHRyZXNwb25zZSA9IGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApO1xuXG5cdFx0XHQvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRcdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJMYXN0LU1vZGlmaWVkXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcImV0YWdcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIG5vIGNvbnRlbnRcblx0XHRcdFx0aWYgKCBzdGF0dXMgPT09IDIwNCB8fCBzLnR5cGUgPT09IFwiSEVBRFwiICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vY29udGVudFwiO1xuXG5cdFx0XHRcdC8vIGlmIG5vdCBtb2RpZmllZFxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzdGF0dXMgPT09IDMwNCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiO1xuXG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgZGF0YSwgbGV0J3MgY29udmVydCBpdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0ZTtcblx0XHRcdFx0XHRzdWNjZXNzID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdFx0XHRlcnJvciA9IHJlc3BvbnNlLmVycm9yO1xuXHRcdFx0XHRcdGlzU3VjY2VzcyA9ICFlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG5cdFx0XHRcdGVycm9yID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0aWYgKCBzdGF0dXMgfHwgIXN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcblx0XHRcdFx0XHRpZiAoIHN0YXR1cyA8IDAgKSB7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuXHRcdFx0anFYSFIuc3RhdHVzID0gc3RhdHVzO1xuXHRcdFx0anFYSFIuc3RhdHVzVGV4dCA9ICggbmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0ICkgKyBcIlwiO1xuXG5cdFx0XHQvLyBTdWNjZXNzL0Vycm9yXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBzdWNjZXNzLCBzdGF0dXNUZXh0LCBqcVhIUiBdICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQsIGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdGpxWEhSLnN0YXR1c0NvZGUoIHN0YXR1c0NvZGUgKTtcblx0XHRcdHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBpc1N1Y2Nlc3MgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLFxuXHRcdFx0XHRcdFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBsZXRlXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQgXSApO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4Q29tcGxldGVcIiwgWyBqcVhIUiwgcyBdICk7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXG5cdFx0XHRcdGlmICggISggLS1qUXVlcnkuYWN0aXZlICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0b3BcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpxWEhSO1xuXHR9LFxuXG5cdGdldEpTT046IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIGRhdGEsIGNhbGxiYWNrLCBcImpzb25cIiApO1xuXHR9LFxuXG5cdGdldFNjcmlwdDogZnVuY3Rpb24oIHVybCwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgdW5kZWZpbmVkLCBjYWxsYmFjaywgXCJzY3JpcHRcIiApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiZ2V0XCIsIFwicG9zdFwiIF0sIGZ1bmN0aW9uKCBpLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblxuXHRcdC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggZGF0YSApICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG5cdFx0XHRjYWxsYmFjayA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFRoZSB1cmwgY2FuIGJlIGFuIG9wdGlvbnMgb2JqZWN0ICh3aGljaCB0aGVuIG11c3QgaGF2ZSAudXJsKVxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggalF1ZXJ5LmV4dGVuZCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiBtZXRob2QsXG5cdFx0XHRkYXRhVHlwZTogdHlwZSxcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRzdWNjZXNzOiBjYWxsYmFja1xuXHRcdH0sIGpRdWVyeS5pc1BsYWluT2JqZWN0KCB1cmwgKSAmJiB1cmwgKSApO1xuXHR9O1xufSApO1xuXG5cbmpRdWVyeS5fZXZhbFVybCA9IGZ1bmN0aW9uKCB1cmwgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcblx0XHRjYWNoZTogdHJ1ZSxcblx0XHRhc3luYzogZmFsc2UsXG5cdFx0Z2xvYmFsOiBmYWxzZSxcblx0XHRcInRocm93c1wiOiB0cnVlXG5cdH0gKTtcbn07XG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0XHRodG1sID0gaHRtbC5jYWxsKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcblx0XHRcdHdyYXAgPSBqUXVlcnkoIGh0bWwsIHRoaXNbIDAgXS5vd25lckRvY3VtZW50ICkuZXEoIDAgKS5jbG9uZSggdHJ1ZSApO1xuXG5cdFx0XHRpZiAoIHRoaXNbIDAgXS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR3cmFwLmluc2VydEJlZm9yZSggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHdyYXAubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzO1xuXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcblx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtO1xuXHRcdFx0fSApLmFwcGVuZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdyYXBJbm5lcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBJbm5lciggaHRtbC5jYWxsKCB0aGlzLCBpICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGVudHMud3JhcEFsbCggaHRtbCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHR3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgaXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBBbGwoIGlzRnVuY3Rpb24gPyBodG1sLmNhbGwoIHRoaXMsIGkgKSA6IGh0bWwgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0dW53cmFwOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5wYXJlbnQoIHNlbGVjdG9yICkubm90KCBcImJvZHlcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlKCBlbGVtICk7XG59O1xualF1ZXJ5LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhISggZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICk7XG59O1xuXG5cblxuXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG5cdH0gY2F0Y2ggKCBlICkge31cbn07XG5cbnZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG5cdFx0Ly8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcblx0XHQwOiAyMDAsXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiYWJvcnRcIiApIHtcblx0XHRcdFx0XHRcdFx0XHR4aHIuYWJvcnQoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdHlwZSA9PT0gXCJlcnJvclwiICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHQvLyBPbiBhIG1hbnVhbCBuYXRpdmUgYWJvcnQsIElFOSB0aHJvd3Ncblx0XHRcdFx0XHRcdFx0XHQvLyBlcnJvcnMgb24gYW55IHByb3BlcnR5IGFjY2VzcyB0aGF0IGlzIG5vdCByZWFkeVN0YXRlXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlb2YgeGhyLnN0YXR1cyAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCAwLCBcImVycm9yXCIgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHRcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCxcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElFOSBoYXMgbm8gWEhSMiBidXQgdGhyb3dzIG9uIGJpbmFyeSAodHJhYy0xMTQyNilcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG5cdFx0XHRcdFx0XHRcdFx0XHQoIHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIgKSAhPT0gXCJ0ZXh0XCIgIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgYmluYXJ5OiB4aHIucmVzcG9uc2UgfSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gTGlzdGVuIHRvIGV2ZW50c1xuXHRcdFx0XHR4aHIub25sb2FkID0gY2FsbGJhY2soKTtcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0gY2FsbGJhY2soIFwiZXJyb3JcIiApO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdFx0XHQvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuXHRcdFx0XHQvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG5cdFx0XHRcdGlmICggeGhyLm9uYWJvcnQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcblx0XHRcdFx0XHRcdGlmICggeGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG5cdFx0XHRcdFx0XHRcdC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuXHRcdFx0XHRcdFx0XHQvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuXHRcdFx0XHRcdFx0XHQvLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcblx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvckNhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgYWJvcnQgY2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cblx0XHRcdFx0dHJ5IHtcblxuXHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0Ly8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApLnByb3AoIHtcblx0XHRcdFx0XHRjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG5cdFx0XHRcdFx0c3JjOiBzLnVybFxuXHRcdFx0XHR9ICkub24oXG5cdFx0XHRcdFx0XCJsb2FkIGVycm9yXCIsXG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggZXZ0ICkge1xuXHRcdFx0XHRcdFx0c2NyaXB0LnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBudWxsO1xuXHRcdFx0XHRcdFx0aWYgKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCBldnQudHlwZSA9PT0gXCJlcnJvclwiID8gNDA0IDogMjAwLCBldnQudHlwZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBVc2UgbmF0aXZlIERPTSBtYW5pcHVsYXRpb24gdG8gYXZvaWQgb3VyIGRvbU1hbmlwIEFKQVggdHJpY2tlcnlcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0WyAwIF0gKTtcblx0XHRcdH0sXG5cdFx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuXHRyanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGpzb25wOiBcImNhbGxiYWNrXCIsXG5cdGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCAoIGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyAoIG5vbmNlKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSApO1xuXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb24ganNvbnBcIiwgZnVuY3Rpb24oIHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSICkge1xuXG5cdHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcblx0XHRqc29uUHJvcCA9IHMuanNvbnAgIT09IGZhbHNlICYmICggcmpzb25wLnRlc3QoIHMudXJsICkgP1xuXHRcdFx0XCJ1cmxcIiA6XG5cdFx0XHR0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiIClcblx0XHRcdFx0XHQuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICYmXG5cdFx0XHRcdHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuXHRcdCk7XG5cblx0Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXHRpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuXHRcdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBqUXVlcnkuaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBvdmVyd3JpdHRlbiApICkge1xuXHRcdFx0XHRvdmVyd3JpdHRlbiggcmVzcG9uc2VDb250YWluZXJbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuXHRcdH0gKTtcblxuXHRcdC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXHRcdHJldHVybiBcInNjcmlwdFwiO1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA4IG9ubHlcbi8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbi8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGlzIHNlY3VyaXR5IG1lYXN1cmUgaGFzIHRvIGJlIGRpc2FibGVkIGluIFNhZmFyaSA4LlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgPSAoIGZ1bmN0aW9uKCkge1xuXHR2YXIgYm9keSA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApLmJvZHk7XG5cdGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuXHRyZXR1cm4gYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMjtcbn0gKSgpO1xuXG5cbi8vIEFyZ3VtZW50IFwiZGF0YVwiIHNob3VsZCBiZSBzdHJpbmcgb2YgaHRtbFxuLy8gY29udGV4dCAob3B0aW9uYWwpOiBJZiBzcGVjaWZpZWQsIHRoZSBmcmFnbWVudCB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhpcyBjb250ZXh0LFxuLy8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcbmpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiggZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMgKSB7XG5cdGlmICggdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGtlZXBTY3JpcHRzID0gY29udGV4dDtcblx0XHRjb250ZXh0ID0gZmFsc2U7XG5cdH1cblxuXHR2YXIgYmFzZSwgcGFyc2VkLCBzY3JpcHRzO1xuXG5cdGlmICggIWNvbnRleHQgKSB7XG5cblx0XHQvLyBTdG9wIHNjcmlwdHMgb3IgaW5saW5lIGV2ZW50IGhhbmRsZXJzIGZyb20gYmVpbmcgZXhlY3V0ZWQgaW1tZWRpYXRlbHlcblx0XHQvLyBieSB1c2luZyBkb2N1bWVudC5pbXBsZW1lbnRhdGlvblxuXHRcdGlmICggc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQgKSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICk7XG5cblx0XHRcdC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuXHRcdFx0Ly8gc28gYW55IHBhcnNlZCBlbGVtZW50cyB3aXRoIFVSTHNcblx0XHRcdC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5cdFx0XHRiYXNlID0gY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImJhc2VcIiApO1xuXHRcdFx0YmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRcdGNvbnRleHQuaGVhZC5hcHBlbmRDaGlsZCggYmFzZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZXh0ID0gZG9jdW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKCBkYXRhICk7XG5cdHNjcmlwdHMgPSAha2VlcFNjcmlwdHMgJiYgW107XG5cblx0Ly8gU2luZ2xlIHRhZ1xuXHRpZiAoIHBhcnNlZCApIHtcblx0XHRyZXR1cm4gWyBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIHBhcnNlZFsgMSBdICkgXTtcblx0fVxuXG5cdHBhcnNlZCA9IGJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XG5cblx0aWYgKCBzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoICkge1xuXHRcdGpRdWVyeSggc2NyaXB0cyApLnJlbW92ZSgpO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIHBhcnNlZC5jaGlsZE5vZGVzICk7XG59O1xuXG5cbi8qKlxuICogTG9hZCBhIHVybCBpbnRvIGEgcGFnZVxuICovXG5qUXVlcnkuZm4ubG9hZCA9IGZ1bmN0aW9uKCB1cmwsIHBhcmFtcywgY2FsbGJhY2sgKSB7XG5cdHZhciBzZWxlY3RvciwgdHlwZSwgcmVzcG9uc2UsXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0b2ZmID0gdXJsLmluZGV4T2YoIFwiIFwiICk7XG5cblx0aWYgKCBvZmYgPiAtMSApIHtcblx0XHRzZWxlY3RvciA9IHN0cmlwQW5kQ29sbGFwc2UoIHVybC5zbGljZSggb2ZmICkgKTtcblx0XHR1cmwgPSB1cmwuc2xpY2UoIDAsIG9mZiApO1xuXHR9XG5cblx0Ly8gSWYgaXQncyBhIGZ1bmN0aW9uXG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHBhcmFtcyApICkge1xuXG5cdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRjYWxsYmFjayA9IHBhcmFtcztcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHR0eXBlID0gXCJQT1NUXCI7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXHRpZiAoIHNlbGYubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cblx0XHRcdC8vIElmIFwidHlwZVwiIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgdGhlbiBcIkdFVFwiIG1ldGhvZCB3aWxsIGJlIHVzZWQuXG5cdFx0XHQvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2Vcblx0XHRcdC8vIHVzZXIgY2FuIG92ZXJyaWRlIGl0IHRocm91Z2ggYWpheFNldHVwIG1ldGhvZFxuXHRcdFx0dHlwZTogdHlwZSB8fCBcIkdFVFwiLFxuXHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0ZGF0YTogcGFyYW1zXG5cdFx0fSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZVRleHQgKSB7XG5cblx0XHRcdC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0cmVzcG9uc2UgPSBhcmd1bWVudHM7XG5cblx0XHRcdHNlbGYuaHRtbCggc2VsZWN0b3IgP1xuXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuXHRcdFx0XHQvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcblx0XHRcdFx0alF1ZXJ5KCBcIjxkaXY+XCIgKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcblx0XHRcdFx0cmVzcG9uc2VUZXh0ICk7XG5cblx0XHQvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcblx0XHQvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG5cdFx0Ly8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuXHRcdH0gKS5hbHdheXMoIGNhbGxiYWNrICYmIGZ1bmN0aW9uKCBqcVhIUiwgc3RhdHVzICkge1xuXHRcdFx0c2VsZi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMsIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuXG5cbi8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5qUXVlcnkuZWFjaCggW1xuXHRcImFqYXhTdGFydFwiLFxuXHRcImFqYXhTdG9wXCIsXG5cdFwiYWpheENvbXBsZXRlXCIsXG5cdFwiYWpheEVycm9yXCIsXG5cdFwiYWpheFN1Y2Nlc3NcIixcblx0XCJhamF4U2VuZFwiXG5dLCBmdW5jdGlvbiggaSwgdHlwZSApIHtcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG5cdH07XG59ICk7XG5cblxuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuYW5pbWF0ZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBqUXVlcnkudGltZXJzLCBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG5cdH0gKS5sZW5ndGg7XG59O1xuXG5cblxuXG4vKipcbiAqIEdldHMgYSB3aW5kb3cgZnJvbSBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKCBcImF1dG9cIiApID4gLTE7XG5cblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuXHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdGlmICggY2FsY3VsYXRlUG9zaXRpb24gKSB7XG5cdFx0XHRjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcblx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1clRvcCA9IHBhcnNlRmxvYXQoIGN1ckNTU1RvcCApIHx8IDA7XG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggb3B0aW9ucyApICkge1xuXG5cdFx0XHQvLyBVc2UgalF1ZXJ5LmV4dGVuZCBoZXJlIHRvIGFsbG93IG1vZGlmaWNhdGlvbiBvZiBjb29yZGluYXRlcyBhcmd1bWVudCAoZ2gtMTg0OClcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoIGVsZW0sIGksIGpRdWVyeS5leHRlbmQoIHt9LCBjdXJPZmZzZXQgKSApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0aW9ucy50b3AgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLnRvcCA9ICggb3B0aW9ucy50b3AgLSBjdXJPZmZzZXQudG9wICkgKyBjdXJUb3A7XG5cdFx0fVxuXHRcdGlmICggb3B0aW9ucy5sZWZ0ICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy5sZWZ0ID0gKCBvcHRpb25zLmxlZnQgLSBjdXJPZmZzZXQubGVmdCApICsgY3VyTGVmdDtcblx0XHR9XG5cblx0XHRpZiAoIFwidXNpbmdcIiBpbiBvcHRpb25zICkge1xuXHRcdFx0b3B0aW9ucy51c2luZy5jYWxsKCBlbGVtLCBwcm9wcyApO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1ckVsZW0uY3NzKCBwcm9wcyApO1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRvZmZzZXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG5cdFx0Ly8gUHJlc2VydmUgY2hhaW5pbmcgZm9yIHNldHRlclxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBvcHRpb25zID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHR0aGlzIDpcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0XHRqUXVlcnkub2Zmc2V0LnNldE9mZnNldCggdGhpcywgb3B0aW9ucywgaSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0dmFyIGRvY0VsZW0sIHdpbiwgcmVjdCwgZG9jLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXHRcdGlmICggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHRyZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSBlbGVtZW50IGlzIG5vdCBoaWRkZW4gKGRpc3BsYXk6IG5vbmUpXG5cdFx0aWYgKCByZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0ICkge1xuXHRcdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdFx0d2luID0gZ2V0V2luZG93KCBkb2MgKTtcblx0XHRcdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG5cdFx0XHRcdGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChnaC0yMzEwKVxuXHRcdHJldHVybiByZWN0O1xuXHR9LFxuXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICF0aGlzWyAwIF0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHQvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LFxuXHRcdC8vIGJlY2F1c2UgaXQgaXMgaXRzIG9ubHkgb2Zmc2V0IHBhcmVudFxuXHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICkgPT09IFwiZml4ZWRcIiApIHtcblxuXHRcdFx0Ly8gQXNzdW1lIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyB0aGVyZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG5cdFx0XHRvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcblx0XHRcdG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCk7XG5cblx0XHRcdC8vIEdldCBjb3JyZWN0IG9mZnNldHNcblx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cdFx0XHRpZiAoICFqUXVlcnkubm9kZU5hbWUoIG9mZnNldFBhcmVudFsgMCBdLCBcImh0bWxcIiApICkge1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuXHRcdFx0cGFyZW50T2Zmc2V0ID0ge1xuXHRcdFx0XHR0b3A6IHBhcmVudE9mZnNldC50b3AgKyBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICksXG5cdFx0XHRcdGxlZnQ6IHBhcmVudE9mZnNldC5sZWZ0ICsgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUgKVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlICksXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIsIHRydWUgKVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gZG9jdW1lbnRFbGVtZW50IGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG5cdC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cblx0Ly8gICAgZG9jdW1lbnRFbGVtZW50IG9mIHRoZSBwYXJlbnQgd2luZG93XG5cdC8vIDIpIEZvciB0aGUgaGlkZGVuIG9yIGRldGFjaGVkIGVsZW1lbnRcblx0Ly8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuXHQvL1xuXHQvLyBidXQgdGhvc2UgZXhjZXB0aW9ucyB3ZXJlIG5ldmVyIHByZXNlbnRlZCBhcyBhIHJlYWwgbGlmZSB1c2UtY2FzZXNcblx0Ly8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG5cdC8vXG5cdC8vIFRoaXMgbG9naWMsIGhvd2V2ZXIsIGlzIG5vdCBndWFyYW50ZWVkIGFuZCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCBpbiB0aGUgZnV0dXJlXG5cdG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudDtcblxuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiYgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQ7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbi8vIENyZWF0ZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AgbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLCBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBwcm9wICkge1xuXHR2YXIgdG9wID0gXCJwYWdlWU9mZnNldFwiID09PSBwcm9wO1xuXG5cdGpRdWVyeS5mblsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdmFsICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBtZXRob2QsIHZhbCApIHtcblx0XHRcdHZhciB3aW4gPSBnZXRXaW5kb3coIGVsZW0gKTtcblxuXHRcdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbiA/IHdpblsgcHJvcCBdIDogZWxlbVsgbWV0aG9kIF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICggd2luICkge1xuXHRcdFx0XHR3aW4uc2Nyb2xsVG8oXG5cdFx0XHRcdFx0IXRvcCA/IHZhbCA6IHdpbi5wYWdlWE9mZnNldCxcblx0XHRcdFx0XHR0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXRcblx0XHRcdFx0KTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbVsgbWV0aG9kIF0gPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fTtcbn0gKTtcblxuLy8gU3VwcG9ydDogU2FmYXJpIDw9NyAtIDkuMSwgQ2hyb21lIDw9MzcgLSA0OVxuLy8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cbi8vIFdlYmtpdCBidWc6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTA4NFxuLy8gQmxpbmsgYnVnOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01ODkzNDdcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxualF1ZXJ5LmVhY2goIFsgXCJ0b3BcIiwgXCJsZWZ0XCIgXSwgZnVuY3Rpb24oIGksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LFxuXHRcdGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXG5cdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoIGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiApLFxuXHRcdFx0XHRleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAoIG1hcmdpbiA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdHJ1ZSA/IFwibWFyZ2luXCIgOiBcImJvcmRlclwiICk7XG5cblx0XHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRpZiAoIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cblx0XHRcdHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOlxuXHRcdFx0dGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LnBhcnNlSlNPTiA9IEpTT04ucGFyc2U7XG5cblxuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG5cblxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAoIzcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4vLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICgjMTM1NjYpXG5pZiAoICFub0dsb2JhbCApIHtcblx0d2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xufVxuXG5cblxuXG5cbnJldHVybiBqUXVlcnk7XG59ICk7XG4iLCJpbXBvcnQganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG53aW5kb3cuJCA9IGpxdWVyeTtcbndpbmRvdy5qUXVlcnkgPSBqcXVlcnk7XG4iLCIvLyBBdXRvbWF0aWNhbGx5IGluamVjdCBsaXZlcmVsb2FkIGNvZGUgb24gYSAuZGV2IGRvbWFpblxudmFyIGhvc3QgPSBsb2NhdGlvbi5ob3N0LnNwbGl0KCcuJyk7XG52YXIgdGxkID0gaG9zdFtob3N0Lmxlbmd0aCAtIDFdO1xuaWYgKHRsZCA9PSAnZGV2Jykge1xuICAgIGRvY3VtZW50LndyaXRlKFxuICAgICAgICAnPHNjcmlwdCBzcmM9XCJodHRwOi8vJyArIChsb2NhdGlvbi5ob3N0IHx8ICdsb2NhbGhvc3QnKS5zcGxpdCgnOicpWzBdICtcbiAgICAgICAgJzozNTcyOS9saXZlcmVsb2FkLmpzP3NuaXB2ZXI9MVwiPjwvJyArICdzY3JpcHQ+J1xuICAgICk7XG59XG5cbi8vIFNpdGUgc3BlY2lmaWMgaW1wb3J0c1xuaW1wb3J0ICcuL3BhcnRpYWxzL2pxdWVyeS1nbG9iYWwuanMnO1xuLy8gaW1wb3J0IGluaXROYXYgZnJvbSAnLi9wYXJ0aWFscy9uYXZpZ2F0aW9uLmpzJztcblxuLy8gSW52b2tlIGltcG9ydGVkIGZ1bnRpb25zIGluc2lkZSB0aGlzIElJRkVcbihmdW5jdGlvbigpIHtcbiAgLy8gaW5pdE5hdigpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZG9jdW1lbnQiLCJ3IiwiRXJyb3IiLCJ3aW5kb3ciLCJ0aGlzIiwibm9HbG9iYWwiLCJhcnIiLCJnZXRQcm90byIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwic2xpY2UiLCJjb25jYXQiLCJwdXNoIiwiaW5kZXhPZiIsImNsYXNzMnR5cGUiLCJ0b1N0cmluZyIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZm5Ub1N0cmluZyIsIk9iamVjdEZ1bmN0aW9uU3RyaW5nIiwiY2FsbCIsInN1cHBvcnQiLCJET01FdmFsIiwiY29kZSIsImRvYyIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidmVyc2lvbiIsInNlbGVjdG9yIiwiY29udGV4dCIsImpRdWVyeSIsImZuIiwiaW5pdCIsInJkYXNoQWxwaGEiLCJhbGwiLCJsZXR0ZXIiLCJ0b1VwcGVyQ2FzZSIsInByb3RvdHlwZSIsIm51bSIsImxlbmd0aCIsImVsZW1zIiwicmV0IiwibWVyZ2UiLCJjb25zdHJ1Y3RvciIsInByZXZPYmplY3QiLCJjYWxsYmFjayIsImVhY2giLCJwdXNoU3RhY2siLCJtYXAiLCJlbGVtIiwiaSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXEiLCJsZW4iLCJqIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsIm9wdGlvbnMiLCJuYW1lIiwic3JjIiwiY29weSIsImNvcHlJc0FycmF5IiwiY2xvbmUiLCJ0YXJnZXQiLCJkZWVwIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwidW5kZWZpbmVkIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJtc2ciLCJvYmoiLCJ0eXBlIiwiQXJyYXkiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJwcm90byIsIkN0b3IiLCJzdHJpbmciLCJybXNQcmVmaXgiLCJmY2FtZWxDYXNlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsImlzQXJyYXlMaWtlIiwicnRyaW0iLCJyZXN1bHRzIiwiZmlyc3QiLCJzZWNvbmQiLCJpbnZlcnQiLCJjYWxsYmFja0ludmVyc2UiLCJtYXRjaGVzIiwiY2FsbGJhY2tFeHBlY3QiLCJhcmciLCJ2YWx1ZSIsInRtcCIsImFyZ3MiLCJwcm94eSIsImd1aWQiLCJEYXRlIiwibm93IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJzcGxpdCIsImlzV2luZG93IiwiU2l6emxlIiwiRXhwciIsImdldFRleHQiLCJpc1hNTCIsInRva2VuaXplIiwiY29tcGlsZSIsInNlbGVjdCIsIm91dGVybW9zdENvbnRleHQiLCJzb3J0SW5wdXQiLCJoYXNEdXBsaWNhdGUiLCJkb2NFbGVtIiwiZG9jdW1lbnRJc0hUTUwiLCJyYnVnZ3lRU0EiLCJyYnVnZ3lNYXRjaGVzIiwiY29udGFpbnMiLCJwcmVmZXJyZWREb2MiLCJkaXJydW5zIiwiZG9uZSIsImNsYXNzQ2FjaGUiLCJjcmVhdGVDYWNoZSIsInRva2VuQ2FjaGUiLCJjb21waWxlckNhY2hlIiwic29ydE9yZGVyIiwiYSIsImIiLCJwb3AiLCJwdXNoX25hdGl2ZSIsImxpc3QiLCJib29sZWFucyIsIndoaXRlc3BhY2UiLCJpZGVudGlmaWVyIiwicHNldWRvcyIsImF0dHJpYnV0ZXMiLCJSZWdFeHAiLCJyY29tbWEiLCJyY29tYmluYXRvcnMiLCJyYXR0cmlidXRlUXVvdGVzIiwicnBzZXVkbyIsInJpZGVudGlmaWVyIiwibWF0Y2hFeHByIiwicmlucHV0cyIsInJoZWFkZXIiLCJybmF0aXZlIiwicnNpYmxpbmciLCJmdW5lc2NhcGUiLCJfIiwiZXNjYXBlZCIsImVzY2FwZWRXaGl0ZXNwYWNlIiwiaGlnaCIsImZyb21DaGFyQ29kZSIsImZjc3Nlc2NhcGUiLCJjaCIsImFzQ29kZVBvaW50IiwiY2hhckNvZGVBdCIsImRpc2FibGVkQW5jZXN0b3IiLCJhZGRDb21iaW5hdG9yIiwiZGlzYWJsZWQiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsIm5vZGVUeXBlIiwiZSIsImVscyIsInNlZWQiLCJtIiwibmlkIiwibWF0Y2giLCJncm91cHMiLCJuZXdTZWxlY3RvciIsIm5ld0NvbnRleHQiLCJvd25lckRvY3VtZW50IiwicnF1aWNrRXhwciIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsImdldEF0dHJpYnV0ZSIsInJjc3Nlc2NhcGUiLCJzZXRBdHRyaWJ1dGUiLCJleHBhbmRvIiwidG9TZWxlY3RvciIsImpvaW4iLCJ0ZXN0Q29udGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxc2FFcnJvciIsInJlbW92ZUF0dHJpYnV0ZSIsImtleXMiLCJjYWNoZSIsImtleSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJtYXJrRnVuY3Rpb24iLCJhc3NlcnQiLCJlbCIsImFkZEhhbmRsZSIsImF0dHJzIiwiaGFuZGxlciIsImF0dHJIYW5kbGUiLCJzaWJsaW5nQ2hlY2siLCJjdXIiLCJkaWZmIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsImNyZWF0ZUlucHV0UHNldWRvIiwiY3JlYXRlQnV0dG9uUHNldWRvIiwiY3JlYXRlRGlzYWJsZWRQc2V1ZG8iLCJpc0Rpc2FibGVkIiwiY3JlYXRlUG9zaXRpb25hbFBzZXVkbyIsImFyZ3VtZW50IiwibWF0Y2hJbmRleGVzIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0RG9jdW1lbnQiLCJub2RlIiwiaGFzQ29tcGFyZSIsInN1YldpbmRvdyIsImRlZmF1bHRWaWV3IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVubG9hZEhhbmRsZXIiLCJhdHRhY2hFdmVudCIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaWx0ZXIiLCJhdHRySWQiLCJydW5lc2NhcGUiLCJmaW5kIiwiZ2V0QXR0cmlidXRlTm9kZSIsInRhZyIsImlubmVySFRNTCIsImlucHV0IiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImFkb3duIiwiYnVwIiwiY29tcGFyZSIsInNvcnREZXRhY2hlZCIsImF1cCIsImFwIiwiYnAiLCJ1bnNoaWZ0IiwiZXhwciIsImVsZW1lbnRzIiwiYXR0ciIsInZhbCIsInNwZWNpZmllZCIsImVzY2FwZSIsInNlbCIsImVycm9yIiwidW5pcXVlU29ydCIsImR1cGxpY2F0ZXMiLCJkZXRlY3REdXBsaWNhdGVzIiwic29ydFN0YWJsZSIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImV4Y2VzcyIsInVucXVvdGVkIiwibm9kZU5hbWVTZWxlY3RvciIsInBhdHRlcm4iLCJvcGVyYXRvciIsImNoZWNrIiwicmVzdWx0IiwicndoaXRlc3BhY2UiLCJ3aGF0IiwibGFzdCIsInNpbXBsZSIsImZvcndhcmQiLCJvZlR5cGUiLCJ4bWwiLCJ1bmlxdWVDYWNoZSIsIm91dGVyQ2FjaGUiLCJub2RlSW5kZXgiLCJzdGFydCIsInBhcmVudCIsInVzZUNhY2hlIiwibGFzdENoaWxkIiwidW5pcXVlSUQiLCJwc2V1ZG8iLCJzZXRGaWx0ZXJzIiwiaWR4IiwibWF0Y2hlZCIsIm1hdGNoZXIiLCJ1bm1hdGNoZWQiLCJpbm5lclRleHQiLCJsYW5nIiwiZWxlbUxhbmciLCJoYXNoIiwibG9jYXRpb24iLCJhY3RpdmVFbGVtZW50IiwiaGFzRm9jdXMiLCJocmVmIiwidGFiSW5kZXgiLCJjaGVja2VkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJmaWx0ZXJzIiwicGFyc2VPbmx5IiwidG9rZW5zIiwic29GYXIiLCJwcmVGaWx0ZXJzIiwiY2FjaGVkIiwicHJlRmlsdGVyIiwiY29tYmluYXRvciIsImJhc2UiLCJza2lwIiwiY2hlY2tOb25FbGVtZW50cyIsImRvbmVOYW1lIiwib2xkQ2FjaGUiLCJuZXdDYWNoZSIsImVsZW1lbnRNYXRjaGVyIiwibWF0Y2hlcnMiLCJtdWx0aXBsZUNvbnRleHRzIiwiY29udGV4dHMiLCJjb25kZW5zZSIsIm5ld1VubWF0Y2hlZCIsIm1hcHBlZCIsInNldE1hdGNoZXIiLCJwb3N0RmlsdGVyIiwicG9zdEZpbmRlciIsInBvc3RTZWxlY3RvciIsInRlbXAiLCJwcmVNYXAiLCJwb3N0TWFwIiwicHJlZXhpc3RpbmciLCJtYXRjaGVyT3V0IiwibWF0Y2hlckluIiwibWF0Y2hlckZyb21Ub2tlbnMiLCJjaGVja0NvbnRleHQiLCJsZWFkaW5nUmVsYXRpdmUiLCJyZWxhdGl2ZSIsImltcGxpY2l0UmVsYXRpdmUiLCJtYXRjaEFueUNvbnRleHQiLCJtYXRjaENvbnRleHQiLCJtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMiLCJlbGVtZW50TWF0Y2hlcnMiLCJzZXRNYXRjaGVycyIsImJ5U2V0IiwiYnlFbGVtZW50Iiwic3VwZXJNYXRjaGVyIiwib3V0ZXJtb3N0IiwibWF0Y2hlZENvdW50Iiwic2V0TWF0Y2hlZCIsImNvbnRleHRCYWNrdXAiLCJkaXJydW5zVW5pcXVlIiwidG9rZW4iLCJjb21waWxlZCIsImRlZmF1bHRWYWx1ZSIsInVuaXF1ZSIsImlzWE1MRG9jIiwiZXNjYXBlU2VsZWN0b3IiLCJ1bnRpbCIsInRydW5jYXRlIiwiaXMiLCJzaWJsaW5ncyIsIm4iLCJybmVlZHNDb250ZXh0IiwibmVlZHNDb250ZXh0IiwicnNpbmdsZVRhZyIsInJpc1NpbXBsZSIsIndpbm5vdyIsInF1YWxpZmllciIsIm5vdCIsImdyZXAiLCJzZWxmIiwicm9vdGpRdWVyeSIsInJvb3QiLCJwYXJzZUhUTUwiLCJqcXVlcnkiLCJyZWFkeSIsIm1ha2VBcnJheSIsInJwYXJlbnRzcHJldiIsInRhcmdldHMiLCJsIiwiaW5kZXgiLCJwcmV2QWxsIiwiZ2V0IiwiYWRkIiwic2libGluZyIsImNvbnRlbnREb2N1bWVudCIsImd1YXJhbnRlZWRVbmlxdWUiLCJyZXZlcnNlIiwicm5vdGh0bWx3aGl0ZSIsImNyZWF0ZU9wdGlvbnMiLCJvYmplY3QiLCJmbGFnIiwiQ2FsbGJhY2tzIiwib25jZSIsImZpcmluZyIsInF1ZXVlIiwiZmlyaW5nSW5kZXgiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsImxvY2tlZCIsImhhcyIsImluQXJyYXkiLCJmaXJlV2l0aCIsImZpcmVkIiwiSWRlbnRpdHkiLCJ2IiwiVGhyb3dlciIsImV4IiwiYWRvcHRWYWx1ZSIsInJlc29sdmUiLCJyZWplY3QiLCJtZXRob2QiLCJwcm9taXNlIiwiZmFpbCIsInRoZW4iLCJmdW5jIiwidHVwbGVzIiwic3RhdGUiLCJmbnMiLCJEZWZlcnJlZCIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInByb2dyZXNzIiwibm90aWZ5Iiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwib25Qcm9ncmVzcyIsIm1heERlcHRoIiwiZGVwdGgiLCJkZWZlcnJlZCIsInNwZWNpYWwiLCJ0aGF0IiwibWlnaHRUaHJvdyIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJwcm9jZXNzIiwic3RhY2tUcmFjZSIsInJlamVjdFdpdGgiLCJnZXRTdGFja0hvb2siLCJzZXRUaW1lb3V0Iiwic3RhdGVTdHJpbmciLCJkaXNhYmxlIiwibG9jayIsImZpcmUiLCJzaW5nbGVWYWx1ZSIsInJlbWFpbmluZyIsInJlc29sdmVWYWx1ZXMiLCJyZXNvbHZlQ29udGV4dHMiLCJtYXN0ZXIiLCJ1cGRhdGVGdW5jIiwicmVycm9yTmFtZXMiLCJzdGFjayIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlMaXN0IiwiY2F0Y2giLCJob2xkIiwicmVhZHlXYWl0Iiwid2FpdCIsImlzUmVhZHkiLCJjb21wbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwiYWNjZXNzIiwiY2hhaW5hYmxlIiwiZW1wdHlHZXQiLCJyYXciLCJidWxrIiwiYWNjZXB0RGF0YSIsIm93bmVyIiwiRGF0YSIsInVpZCIsImRlZmluZVByb3BlcnR5IiwiZGF0YSIsInByb3AiLCJjYW1lbENhc2UiLCJzZXQiLCJpc0VtcHR5T2JqZWN0IiwiZGF0YVByaXYiLCJkYXRhVXNlciIsInJicmFjZSIsInJtdWx0aURhc2giLCJnZXREYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YUF0dHIiLCJoYXNEYXRhIiwicmVtb3ZlIiwic3RhcnRMZW5ndGgiLCJob29rcyIsIl9xdWV1ZUhvb2tzIiwiZGVxdWV1ZSIsInN0b3AiLCJlbXB0eSIsInNldHRlciIsImNvdW50IiwiZGVmZXIiLCJwbnVtIiwic291cmNlIiwicmNzc051bSIsImNzc0V4cGFuZCIsImlzSGlkZGVuV2l0aGluVHJlZSIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsInN3YXAiLCJvbGQiLCJhZGp1c3RDU1MiLCJ2YWx1ZVBhcnRzIiwidHdlZW4iLCJhZGp1c3RlZCIsInNjYWxlIiwibWF4SXRlcmF0aW9ucyIsImN1cnJlbnRWYWx1ZSIsImluaXRpYWwiLCJ1bml0IiwiY3NzTnVtYmVyIiwiaW5pdGlhbEluVW5pdCIsImVuZCIsImRlZmF1bHREaXNwbGF5TWFwIiwiZ2V0RGVmYXVsdERpc3BsYXkiLCJib2R5Iiwic2hvd0hpZGUiLCJzaG93IiwidmFsdWVzIiwiaGlkZSIsInJjaGVja2FibGVUeXBlIiwicnRhZ05hbWUiLCJyc2NyaXB0VHlwZSIsIndyYXBNYXAiLCJvcHRncm91cCIsIm9wdGlvbiIsInRib2R5IiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aGVhZCIsInRoIiwidGQiLCJnZXRBbGwiLCJzZXRHbG9iYWxFdmFsIiwicmVmRWxlbWVudHMiLCJyaHRtbCIsImJ1aWxkRnJhZ21lbnQiLCJzY3JpcHRzIiwic2VsZWN0aW9uIiwiaWdub3JlZCIsIndyYXAiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJub2RlcyIsImNyZWF0ZVRleHROb2RlIiwiX2RlZmF1bHQiLCJodG1sUHJlZmlsdGVyIiwiZGl2IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwicmtleUV2ZW50Iiwicm1vdXNlRXZlbnQiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsInNhZmVBY3RpdmVFbGVtZW50IiwiZXJyIiwib24iLCJ0eXBlcyIsIm9uZSIsIm9yaWdGbiIsImV2ZW50Iiwib2ZmIiwiaGFuZGxlT2JqSW4iLCJldmVudEhhbmRsZSIsImV2ZW50cyIsInQiLCJoYW5kbGVPYmoiLCJoYW5kbGVycyIsIm5hbWVzcGFjZXMiLCJvcmlnVHlwZSIsImVsZW1EYXRhIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJkZWxlZ2F0ZVR5cGUiLCJiaW5kVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsIm1hcHBlZFR5cGVzIiwib3JpZ0NvdW50IiwibmFtZXNwYWNlIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsIm5hdGl2ZUV2ZW50IiwiZml4IiwiaGFuZGxlclF1ZXVlIiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY3VycmVudFRhcmdldCIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwibWF0Y2hlZEhhbmRsZXJzIiwibWF0Y2hlZFNlbGVjdG9ycyIsImJ1dHRvbiIsImhvb2siLCJFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJmb2N1cyIsImJsdXIiLCJjbGljayIsInJldHVyblZhbHVlIiwicHJvcHMiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwicmVsYXRlZFRhcmdldCIsInRpbWVTdGFtcCIsImlzU2ltdWxhdGVkIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJhZGRQcm9wIiwib3JpZyIsInJlbGF0ZWQiLCJyc2NyaXB0VHlwZU1hc2tlZCIsInJjbGVhblNjcmlwdCIsIm1hbmlwdWxhdGlvblRhcmdldCIsImNvbnRlbnQiLCJkaXNhYmxlU2NyaXB0IiwicmVzdG9yZVNjcmlwdCIsImNsb25lQ29weUV2ZW50IiwiZGVzdCIsInBkYXRhT2xkIiwicGRhdGFDdXIiLCJ1ZGF0YU9sZCIsInVkYXRhQ3VyIiwiZml4SW5wdXQiLCJkb21NYW5pcCIsImNvbGxlY3Rpb24iLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJyY2hlY2tlZCIsImh0bWwiLCJfZXZhbFVybCIsImtlZXBEYXRhIiwiY2xlYW5EYXRhIiwicnhodG1sVGFnIiwiZGF0YUFuZEV2ZW50cyIsImRlZXBEYXRhQW5kRXZlbnRzIiwic3JjRWxlbWVudHMiLCJkZXN0RWxlbWVudHMiLCJpblBhZ2UiLCJpbnNlcnRCZWZvcmUiLCJybm9Jbm5lcmh0bWwiLCJhcHBlbmQiLCJyZXBsYWNlQ2hpbGQiLCJvcmlnaW5hbCIsImluc2VydCIsInJtYXJnaW4iLCJybnVtbm9ucHgiLCJnZXRTdHlsZXMiLCJ2aWV3Iiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbXB1dGVTdHlsZVRlc3RzIiwiY3NzVGV4dCIsImNvbnRhaW5lciIsImRpdlN0eWxlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJwaXhlbFBvc2l0aW9uVmFsIiwiYm94U2l6aW5nUmVsaWFibGVWYWwiLCJwaXhlbE1hcmdpblJpZ2h0VmFsIiwicmVsaWFibGVNYXJnaW5MZWZ0VmFsIiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJjdXJDU1MiLCJjb21wdXRlZCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicGl4ZWxNYXJnaW5SaWdodCIsImFkZEdldEhvb2tJZiIsImNvbmRpdGlvbkZuIiwiaG9va0ZuIiwiY3NzU2hvdyIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsImNzc05vcm1hbFRyYW5zZm9ybSIsImNzc1ByZWZpeGVzIiwiZW1wdHlTdHlsZSIsInZlbmRvclByb3BOYW1lIiwiY2FwTmFtZSIsInNldFBvc2l0aXZlTnVtYmVyIiwic3VidHJhY3QiLCJtYXgiLCJhdWdtZW50V2lkdGhPckhlaWdodCIsImV4dHJhIiwiaXNCb3JkZXJCb3giLCJzdHlsZXMiLCJnZXRXaWR0aE9ySGVpZ2h0IiwidmFsdWVJc0JvcmRlckJveCIsImdldENsaWVudFJlY3RzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm94U2l6aW5nUmVsaWFibGUiLCJvcmlnTmFtZSIsImNzc1Byb3BzIiwiY3NzSG9va3MiLCJpc0Zpbml0ZSIsInJkaXNwbGF5c3dhcCIsInJlbGlhYmxlTWFyZ2luTGVmdCIsImxlZnQiLCJwcmVmaXgiLCJzdWZmaXgiLCJleHBhbmRlZCIsInBhcnRzIiwiVHdlZW4iLCJlYXNpbmciLCJwcm9wSG9va3MiLCJwZXJjZW50IiwiZWFzZWQiLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJwIiwiY29zIiwiUEkiLCJmeE5vdyIsInRpbWVySWQiLCJyZnh0eXBlcyIsInJydW4iLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0aWNrIiwiY3JlYXRlRnhOb3ciLCJnZW5GeCIsImluY2x1ZGVXaWR0aCIsImhlaWdodCIsIm9wYWNpdHkiLCJjcmVhdGVUd2VlbiIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInR3ZWVuZXJzIiwiZGVmYXVsdFByZWZpbHRlciIsIm9wdHMiLCJ0b2dnbGUiLCJvbGRmaXJlIiwicHJvcFR3ZWVuIiwicmVzdG9yZURpc3BsYXkiLCJpc0JveCIsImFuaW0iLCJoaWRkZW4iLCJkYXRhU2hvdyIsInVucXVldWVkIiwiYWx3YXlzIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJwcm9wRmlsdGVyIiwic3BlY2lhbEVhc2luZyIsImV4cGFuZCIsInByb3BlcnRpZXMiLCJzdG9wcGVkIiwicHJlZmlsdGVycyIsImN1cnJlbnRUaW1lIiwic3RhcnRUaW1lIiwidHdlZW5zIiwicnVuIiwiZ290b0VuZCIsInRpbWVyIiwiY29tcGxldGUiLCJwcmVwZW5kIiwic3BlZWQiLCJvcHQiLCJzcGVlZHMiLCJ0byIsImFuaW1hdGUiLCJvcHRhbGwiLCJkb0FuaW1hdGlvbiIsImZpbmlzaCIsImNsZWFyUXVldWUiLCJzdG9wUXVldWUiLCJ0aW1lcnMiLCJjc3NGbiIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFySW50ZXJ2YWwiLCJkZWxheSIsInRpbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwicmFkaW9WYWx1ZSIsImJvb2xIb29rIiwicmVtb3ZlQXR0ciIsIm5UeXBlIiwiYXR0ckhvb2tzIiwiYm9vbCIsImF0dHJOYW1lcyIsImdldHRlciIsImxvd2VyY2FzZU5hbWUiLCJyZm9jdXNhYmxlIiwicmNsaWNrYWJsZSIsInByb3BGaXgiLCJ0YWJpbmRleCIsInBhcnNlSW50Iiwic3RyaXBBbmRDb2xsYXBzZSIsImdldENsYXNzIiwiY2xhc3NlcyIsImN1clZhbHVlIiwiY2xhenoiLCJmaW5hbFZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInN0YXRlVmFsIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc05hbWVzIiwiaGFzQ2xhc3MiLCJycmV0dXJuIiwidmFsSG9va3MiLCJvcHRpb25TZXQiLCJyZm9jdXNNb3JwaCIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJldmVudFBhdGgiLCJpc1RyaWdnZXIiLCJ0cmlnZ2VyIiwibm9CdWJibGUiLCJwYXJlbnRXaW5kb3ciLCJmbk92ZXIiLCJmbk91dCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiZm9jdXNpbiIsInNpbXVsYXRlIiwiYXR0YWNoZXMiLCJub25jZSIsInJxdWVyeSIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmJyYWNrZXQiLCJyQ1JMRiIsInJzdWJtaXR0ZXJUeXBlcyIsInJzdWJtaXR0YWJsZSIsImJ1aWxkUGFyYW1zIiwidHJhZGl0aW9uYWwiLCJwYXJhbSIsInMiLCJ2YWx1ZU9yRnVuY3Rpb24iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemVBcnJheSIsInIyMCIsInJoYXNoIiwicmFudGlDYWNoZSIsInJoZWFkZXJzIiwicm5vQ29udGVudCIsInJwcm90b2NvbCIsImFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyIsInN0cnVjdHVyZSIsImRhdGFUeXBlRXhwcmVzc2lvbiIsImRhdGFUeXBlIiwiZGF0YVR5cGVzIiwiaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJvcmlnaW5hbE9wdGlvbnMiLCJqcVhIUiIsImluc3BlY3RlZCIsInNlZWtpbmdUcmFuc3BvcnQiLCJ0cmFuc3BvcnRzIiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwicmVzcG9uc2VzIiwiY3QiLCJmaW5hbERhdGFUeXBlIiwiZmlyc3REYXRhVHlwZSIsImNvbnRlbnRzIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJhamF4Q29udmVydCIsInJlc3BvbnNlIiwiaXNTdWNjZXNzIiwiY29udjIiLCJjdXJyZW50IiwiY29udiIsInByZXYiLCJyZXNwb25zZUZpZWxkcyIsImRhdGFGaWx0ZXIiLCJ0aHJvd3MiLCJybG9jYWxQcm90b2NvbCIsInByb3RvY29sIiwiYWxsVHlwZXMiLCJTdHJpbmciLCJzZXR0aW5ncyIsInVybCIsInRyYW5zcG9ydCIsInJlc3BvbnNlSGVhZGVycyIsImFqYXhTZXR1cCIsImNhbGxiYWNrQ29udGV4dCIsImNvbXBsZXRlRGVmZXJyZWQiLCJzdGF0dXNDb2RlIiwicmVxdWVzdEhlYWRlcnNOYW1lcyIsInJlc3BvbnNlSGVhZGVyc1N0cmluZyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJmaW5hbFRleHQiLCJzdHJBYm9ydCIsImFib3J0IiwiY3Jvc3NEb21haW4iLCJ1cmxBbmNob3IiLCJvcmlnaW5BbmNob3IiLCJob3N0IiwicHJvY2Vzc0RhdGEiLCJmaXJlR2xvYmFscyIsImFjdGl2ZSIsImhhc0NvbnRlbnQiLCJjYWNoZVVSTCIsInVuY2FjaGVkIiwiY29udGVudFR5cGUiLCJpZk1vZGlmaWVkIiwibGFzdE1vZGlmaWVkIiwic2V0UmVxdWVzdEhlYWRlciIsImV0YWciLCJhY2NlcHRzIiwiaGVhZGVycyIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiYXN5bmMiLCJzZW5kIiwicmVxdWVzdEhlYWRlcnMiLCJuYXRpdmVTdGF0dXNUZXh0IiwibW9kaWZpZWQiLCJ0aW1lb3V0VGltZXIiLCJhamF4IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJ3cmFwQWxsIiwicmVwbGFjZVdpdGgiLCJ2aXNpYmxlIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInhoclN1Y2Nlc3NTdGF0dXMiLCJ4aHJTdXBwb3J0ZWQiLCJjb3JzIiwiYWpheFRyYW5zcG9ydCIsImVycm9yQ2FsbGJhY2siLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvdmVycmlkZU1pbWVUeXBlIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJhamF4UHJlZmlsdGVyIiwiZ2xvYmFsRXZhbCIsInNjcmlwdENoYXJzZXQiLCJldnQiLCJvbGRDYWxsYmFja3MiLCJyanNvbnAiLCJvcmlnaW5hbFNldHRpbmdzIiwiY2FsbGJhY2tOYW1lIiwib3ZlcndyaXR0ZW4iLCJyZXNwb25zZUNvbnRhaW5lciIsImpzb25Qcm9wIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwicmVtb3ZlUHJvcCIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwia2VlcFNjcmlwdHMiLCJwYXJzZWQiLCJsb2FkIiwicGFyYW1zIiwiYW5pbWF0ZWQiLCJnZXRXaW5kb3ciLCJvZmZzZXQiLCJjdXJQb3NpdGlvbiIsImN1ckxlZnQiLCJjdXJDU1NUb3AiLCJjdXJUb3AiLCJjdXJPZmZzZXQiLCJjdXJDU1NMZWZ0IiwiY2FsY3VsYXRlUG9zaXRpb24iLCJjdXJFbGVtIiwidXNpbmciLCJzZXRPZmZzZXQiLCJ3aW4iLCJyZWN0IiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJvZmZzZXRQYXJlbnQiLCJwYXJlbnRPZmZzZXQiLCJzY3JvbGxUbyIsInBpeGVsUG9zaXRpb24iLCJIZWlnaHQiLCJXaWR0aCIsInBhZGRpbmciLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsIm1hcmdpbiIsInBhcnNlSlNPTiIsImRlZmluZSIsImFtZCIsIiQiLCJub0NvbmZsaWN0IiwiXyQiLCJfalF1ZXJ5IiwidGxkIiwid3JpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWFFLFVBQVVBLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTRCOzs7O0VBSXhCLEFBQUwsQUFBd0U7Ozs7Ozs7OztpQkFTdkUsR0FBaUJELE9BQU9FLFFBQVAsR0FDaEJELFFBQVNELE1BQVQsRUFBaUIsSUFBakIsQ0FEZ0IsR0FFaEIsVUFBVUcsQ0FBVixFQUFjO1FBQ1IsQ0FBQ0EsRUFBRUQsUUFBUixFQUFtQjtXQUNaLElBQUlFLEtBQUosQ0FBVywwQ0FBWCxDQUFOOztXQUVNSCxRQUFTRSxDQUFULENBQVA7SUFORjtHQVREOzs7RUFKRCxFQTBCSyxPQUFPRSxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q0MsY0ExQjlDLEVBMEJvRCxVQUFVRCxNQUFWLEVBQWtCRSxRQUFsQixFQUE2Qjs7Ozs7Ozs7TUFRN0VDLE1BQU0sRUFBVjs7TUFFSU4sV0FBV0csT0FBT0gs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
