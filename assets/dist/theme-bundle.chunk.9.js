(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/beautify/shop-by-price-slider.js":
/*!****************************************************!*\
  !*** ./assets/js/beautify/shop-by-price-slider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var ShopByPriceSlider = /*#__PURE__*/function () {
  function ShopByPriceSlider($scope) {
    var _this = this;

    if ($scope.data('beautifyShopByPriceSliderInstance')) {
      return;
    }

    $scope.data('beautifyShopByPriceSliderInstance', this);
    this.onPriceInput = this.onPriceInput.bind(this);
    this.$scope = $scope;
    this.$slider = $('[data-slider]', $scope);
    this.$min = $('input[name="min_price"], input[data-input-min]', $scope);
    this.$max = $('input[name="max_price"], input[data-input-max]', $scope);
    this.$cancel = $('[data-cancel]', $scope);
    this.$clear = $('[data-clear]', $scope);
    this.$form = $('form', $scope).not('[data-faceted-search-range]'); // exclude faceted form

    this.$apply = $('[data-apply]', $scope);
    this.shopByPrice = $scope.data('beautifyShopByPrice');
    var min = this.shopByPrice[0].low.value;
    var max = this.shopByPrice[this.shopByPrice.length - 1].high.value;
    var params = new URLSearchParams(window.location.search);
    var values = [params.get('price_min') || params.get('min_price') || min, params.get('price_max') || params.get('max_price') || max];

    if (params.has('price_min') || params.has('min_price') || params.has('price_max') || params.has('max_price')) {
      this.$clear.show();
    } else {
      this.$clear.hide();
    }

    this.originalValues = values;
    this.$slider.slider({
      range: true,
      min: min,
      max: max,
      values: values,
      slide: function slide(event, ui) {
        _this.$min.val(ui.values[0]);

        _this.$max.val(ui.values[1]);

        if (ui.values[0] != _this.originalValues[0] || ui.values[1] != _this.originalValues[1]) {
          _this.$cancel.show();
        }
      }
    });
    this.$min.attr({
      min: min,
      max: max,
      value: params.get('price_min') || params.get('min_price') || ''
    }).on('input', this.onPriceInput);
    this.$max.attr({
      min: min,
      max: max,
      value: params.get('price_max') || params.get('max_price') || ''
    }).on('input', this.onPriceInput);
    this.$cancel.on('click', function () {
      event.preventDefault();

      _this.$slider.slider('values', _this.originalValues);

      _this.$min.val(_this.originalValues[0]);

      _this.$max.val(_this.originalValues[1]);

      _this.$cancel.hide();
    });
    this.$form.on('submit', function (event) {
      event.preventDefault();

      _this.apply();
    });
    this.$apply.on('click', function (event) {
      event.preventDefault();

      _this.apply();
    });
  }

  var _proto = ShopByPriceSlider.prototype;

  _proto.apply = function apply() {
    var _this$$slider$slider = this.$slider.slider('values'),
        slideMin = _this$$slider$slider[0],
        slideMax = _this$$slider$slider[1];

    var min = Number(this.$min.val()) || slideMin;
    var max = Number(this.$max.val()) || slideMax;
    var params = new URLSearchParams(window.location.search);
    params.set('price_min', min);
    params.set('price_max', max);
    window.location = window.location.pathname + "?" + params.toString();
  };

  _proto.onPriceInput = function onPriceInput(event) {
    var val = Number(event.target.value) || 0;
    var min = Number(this.$min.prop('min')) || 0;
    var max = Number(this.$min.prop('max')) || 0;
    var curMin = Number(this.$min.val()) || this.originalValues[0];
    var curMax = Number(this.$max.val()) || this.originalValues[1];

    if (val < min) {
      val = min;
    }

    if (val > max) {
      val = max;
    }

    if (this.$min.is(event.target) && curMax > 0 && val > curMax) {
      val = curMax;
    }

    if (this.$max.is(event.target) && curMin > 0 && val < curMin) {
      val = curMin;
    }

    event.target.value = val;
    var newMin = Number(this.$min.val()) || this.originalValues[0];
    var newMax = Number(this.$max.val()) || this.originalValues[1];
    this.$slider.slider('values', [newMin, newMax]);

    if (newMin != this.originalValues[0] || newMax != this.originalValues[1]) {
      this.$cancel.show();
    } else {
      this.$cancel.hide();
    }
  };

  return ShopByPriceSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (selector) {
  if (selector === void 0) {
    selector = '[data-beautify-shop-by-price]';
  }

  $(selector).each(function (i, el) {
    return new ShopByPriceSlider($(el));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/papathemes/action-bar.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/action-bar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionBarFactory; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");



var instantloadBinded = false;
var actionBar;

function removeModeClass(index, className) {
  return (className.match(/(^|\s)mode-\S+/g) || []).join(' ');
}

var ActionBar = /*#__PURE__*/function () {
  function ActionBar(options) {
    if (options === void 0) {
      options = {};
    }

    // console.log('actionbar constructor');
    this.onModeChange = this.onModeChange.bind(this);
    this.options = options;
    this.init();
  }

  var _proto = ActionBar.prototype;

  _proto.init = function init() {
    this.$sortBy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-sort-by]');

    if (!this.$sortBy.length) {
      return;
    }

    var $limit = this.$sortBy.find('[name=limit]');
    var $mode = this.$sortBy.find('input[name=mode]');
    var url = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.href, true);

    if (url.query.limit) {
      $limit.val(url.query.limit);
    }

    if (url.query.mode) {
      $mode.prop('checked', false).filter("[value=" + url.query.mode + "]").prop('checked', true);
    } // Stop action bar if the page is category bulk order custom template


    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');

    if ($body.hasClass('supermarket-page--pages-custom-category-bulk-order') || $body.hasClass('supermarket-page--pages-custom-brand-bulk-order')) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + $mode.filter(':checked').val());
    this.unbindEvents();
    this.bindEvents();
  };

  _proto.reinit = function reinit(newOptions) {
    // console.log('actionbar reinit');
    if (newOptions) {
      this.options = newOptions;
    }

    this.init();
  };

  _proto.destroy = function destroy() {
    // console.log('actionbar destroyed');
    this.unbindEvents();
  };

  _proto.bindEvents = function bindEvents() {
    this.$sortBy.find('input[name=mode]').on('change', this.onModeChange);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$sortBy.find('input[name=mode]').off('change', this.onModeChange);
  };

  _proto.onModeChange = function onModeChange(event) {
    event.preventDefault();
    var mode = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + mode);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .pagination-link').each(function (i, el) {
      var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceParams($a.attr('href'), {
        mode: mode
      });
      $a.attr('href', url);
    });
    var url = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.href, true);
    url.query.mode = mode;
    window.history.pushState({}, document.title, url__WEBPACK_IMPORTED_MODULE_1___default.a.format({
      pathname: url.pathname,
      search: _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query)
    }));
  };

  return ActionBar;
}();
/**
 * Call this function when:
 * - Page is loaded
 * - Ajax page returned
 */


function actionBarFactory(options) {
  if (actionBar) {
    actionBar.reinit(options);
  } else {
    actionBar = new ActionBar(options);
  } // Destroy actionBar when loading new page


  if (!instantloadBinded) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      if (actionBar) {
        actionBar.destroy();
        actionBar = null;
      }
    });
    instantloadBinded = true;
  }
}

/***/ }),

/***/ "./assets/js/papathemes/bulk-order.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/bulk-order.js ***!
  \********************************************/
/*! exports provided: BulkOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrder", function() { return BulkOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bulkOrderFactory; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



 //
// https://javascript.info/task/delay-promise
//

function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
} //
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//


function promiseSerial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
}

var BulkOrder = /*#__PURE__*/function () {
  function BulkOrder(context, $scope) {
    var _this = this;

    this.context = context || {};
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    this.$scope = $scope;
    this.itemCount = 0;
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onQuantityButtonClick = this.onQuantityButtonClick.bind(this);
    this.onProductAdded = this.onProductAdded.bind(this);
    this.onAddAllClick = this.onAddAllClick.bind(this);
    this.onCartQtyChange = this.onCartQtyChange.bind(this);
    this.onProgressPopupCloseClick = this.onProgressPopupCloseClick.bind(this);
    this.reinit(); // Supermarket

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
  }

  var _proto = BulkOrder.prototype;

  _proto.reinit = function reinit() {
    this.$progressPopup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal', this.$scope);
    this.$progressBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.progressBar', this.$progressPopup);
    this.$progressPopupCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-current', this.$scope);
    this.$progressPopupActions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-actions', this.$scope);
    this.$progressPopupClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-close]', this.$scope);
    this.unbindEvents();
    this.bindEvents();
    this.calculate();

    if (this.context.cartId) {
      this.updateQtyInCart();
    }
  };

  _proto.bindEvents = function bindEvents() {
    this.$scope.on('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.on('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.on('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.on('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.on('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.on('click', this.onProgressPopupCloseClick);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$scope.off('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.off('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.off('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.off('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.off('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.off('click', this.onProgressPopupCloseClick);
  };

  _proto.onProgressPopupCloseClick = function onProgressPopupCloseClick(event) {
    event.preventDefault();
    this.hideProgressPopup();
  };

  _proto.onCartQtyChange = function onCartQtyChange() {
    this.updateQtyInCart();
  };

  _proto.showProgressPopup = function showProgressPopup() {
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.addClass('is-open');
  };

  _proto.hideProgressPopup = function hideProgressPopup() {
    this.$progressPopupCurrent.css('width', 0);
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.removeClass('is-open');
  };

  _proto.updateProgressPopup = function updateProgressPopup() {
    if (this.progressTotal > 0) {
      this.$progressPopupCurrent.css('width', this.progressCurrent / this.progressTotal * 100 + "%");
    } else {
      this.$progressPopupCurrent.css('width', 0);
    }
  };

  _proto.showProgressPopupActions = function showProgressPopupActions() {
    this.$progressPopupActions.removeClass('u-hiddenVisually');
  };

  _proto.showProgressBar = function showProgressBar() {
    this.$progressBar.removeClass('u-hiddenVisually');
  };

  _proto.hideProgressBar = function hideProgressBar() {
    this.$progressBar.addClass('u-hiddenVisually');
  };

  _proto.onAddAllClick = function onAddAllClick(event) {
    event.preventDefault();

    if (this.itemCount === 0) {
      _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].fire({
        text: this.context.bulkOrderEnterQty || 'Please enter product quantity',
        icon: 'error'
      });
      return;
    }

    this.addAllProducts();
  };

  _proto.onProductAdded = function onProductAdded(event, productId) {
    this.$scope.find("[data-bulkorder-qty-id='" + productId + "']").val(0);
    this.calculate();
  };

  _proto.onQuantityButtonClick = function onQuantityButtonClick(event) {
    event.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var $input = $target.closest('[data-quantity-change]').find('input');
    var quantityMin = parseInt($input.data('quantityMin'), 10);
    var quantityMax = parseInt($input.data('quantityMax'), 10);
    var qty = parseInt($input.val(), 10); // If action is incrementing

    if ($target.data('action') === 'inc') {
      // If quantity max option is set
      if (quantityMax > 0) {
        // Check quantity does not exceed max
        if (qty + 1 <= quantityMax) {
          qty++;
        }
      } else {
        qty++;
      }
    } else if (qty > 0) {
      // If quantity min option is set
      if (quantityMin > 0) {
        // Check quantity does not fall below min
        if (qty - 1 >= quantityMin) {
          qty--;
        } else {
          qty = 0;
        }
      } else {
        qty--;
      }
    }

    $input.val(qty);
    this.calculate();
  };

  _proto.onQuantityChange = function onQuantityChange() {
    this.calculate();
  };

  _proto.calculate = function calculate() {
    var _this2 = this;

    var format = '';
    var total = 0;
    var count = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');

      var $price = _this2.$scope.find("[data-bulkorder-price-id='" + productId + "']");

      var priceVal = parseFloat($price.data('bulkorderPriceValue'));
      var priceFmt = "" + $price.data('bulkorderPriceFormatted');
      var subtotal = Math.round(priceVal * qty * 100) / 100;

      var $subtotal = _this2.$scope.find("[data-bulkorder-subtotal-id='" + productId + "']");

      $subtotal.html(priceFmt.replace(/[0-9.,]+/, subtotal));
      format = priceFmt;
      total += subtotal;
      count += qty;
    });
    this.itemCount = count;
    this.$scope.find('[data-bulkorder-total-count]').html(count);
    this.$scope.find('[data-bulkorder-total-amount]').html(format.replace(/[0-9.,]+/, Math.round(total * 100) / 100));
  };

  _proto.addAllProducts = function addAllProducts() {
    var _this3 = this;

    var promises = [];
    this.progressCurrent = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');

      if (qty > 0) {
        promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this3.progressCurrent++;

                  _this3.updateProgressPopup();

                  _context.next = 4;
                  return _this3.addProduct(productId, qty);

                case 4:
                  // eslint-disable-line no-unused-expressions
                  $input.val(0);

                  _this3.calculate(); // wait 1s before adding to cart a new item in order to avoid request failed.


                  _context.next = 8;
                  return delay(1000);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    });
    this.progressTotal = promises.length;
    this.showProgressPopup();
    this.showProgressBar();
    promiseSerial(promises).then(function () {
      _this3.showProgressPopupActions();

      _this3.hideProgressBar(); // this.updateQtyInCart();


      _this3.updateCartCounter();
    });
  };

  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId, qty) {
      var formData, promise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.FormData === undefined)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              formData = new FormData();
              formData.append('product_id', productId);
              formData.append('qty[]', qty);
              promise = new Promise(function (resolve) {
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(formData, function (err, response) {
                  var errorMessage = err || response.data.error; // Guard statement

                  if (errorMessage) {
                    // Strip the HTML from the error message
                    var tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;
                    alert(tmp.textContent || tmp.innerText);
                  }

                  resolve();
                });
              });
              _context2.next = 8;
              return promise;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function addProduct(_x, _x2) {
      return _addProduct.apply(this, arguments);
    }

    return addProduct;
  }();

  _proto.updateQtyInCart = function updateQtyInCart() {
    var _this4 = this;

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/storefront/cart', function (data) {
      if (!data.length) {
        return;
      }

      var qtys = {};
      data[0].lineItems.physicalItems.forEach(function (item) {
        if (typeof qtys[item.productId] !== 'undefined') {
          qtys[item.productId] += item.quantity;
        } else {
          qtys[item.productId] = item.quantity;
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-bulkorder-cart-qty-id]', _this4.$scope).each(function (i, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var productId = parseInt($el.data('bulkorderCartQtyId'), 10);

        if (qtys[productId]) {
          $el.html(qtys[productId]);
          $el.closest('._qtyInCartWrapper').show();
        } else {
          $el.html('0');
          $el.closest('._qtyInCartWrapper').hide();
        }
      });
    });
  };

  _proto.updateCartCounter = function updateCartCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent({
      template: 'cart/preview'
    }, function (err, resp) {
      if (err) {
        return;
      } // Update cart counter


      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-quantity]', resp);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cart-quantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
    });
  };

  return BulkOrder;
}();
function bulkOrderFactory(context, selector) {
  if (context === void 0) {
    context = null;
  }

  if (selector === void 0) {
    selector = '#product-listing-container';
  }

  var $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
  var bulkOrder = $selector.data('bulkOrderInstance');

  if (!(bulkOrder instanceof BulkOrder)) {
    bulkOrder = new BulkOrder(context, $selector);
    $selector.data('bulkOrderInstance', bulkOrder);
  }

  return bulkOrder;
}

/***/ }),

/***/ "./assets/js/papathemes/compare-products.js":
/*!**************************************************!*\
  !*** ./assets/js/papathemes/compare-products.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareProducts; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);

var singleton;
var compareListTmpl = "\n    <div class=\"supermarket-compareList-panel-wrapper is-empty\" id=\"supermarketCompareList\">\n        <div class=\"supermarket-compareList-panel\">\n            <div class=\"supermarket-compareList-panel-body\">\n                <div class=\"supermarket-compareList\" data-compare-product-list>{{{renderItems}}}</div>\n                <div class=\"supermarket-compareList-actions\">\n                    <a href=\"{{compare_url}}\" class=\"button button--primary button--small button--compare\" data-compare-product-button>{{compare}}</a>\n                    <button type=\"button\" class=\"button button--plain button--small button--clearAll\" data-compare-product-clearall>{{clear_all}}</button>\n                </div>\n            </div>\n            <button type=\"button\" class=\"button button--close\" data-compare-product-toggle><i class=\"fa fa-chevron-down\"></i><span class=\"is-srOnly\">Close</span></button>\n            <button type=\"button\" class=\"button button--open\" data-compare-product-toggle><i class=\"fa fa-chevron-up\"></i><span class=\"is-srOnly\">Open</span></button>\n        </div>\n    </div>\n";
var compareListItemTmpl = "\n    <div class=\"supermarket-compareList-item\" data-compare-product-item=\"{{id}}\">\n        <img class=\"supermarket-compareList-img\" src=\"{{image}}\" alt=\"{{alt}}\" title=\"{{alt}}\">\n        <button type=\"button\" class=\"supermarket-compareList-quickview quickview\" data-product-id=\"{{id}}\"><i class=\"fa fa-search-plus\"></i><span class=\"is-srOnly\">{{quick_view}}</span></button>\n        <button type=\"button\" class=\"supermarket-compareList-remove\" data-compare-product-remove=\"{{id}}\"><i class=\"fa fa-trash\"></i><span class=\"is-srOnly\">{{remove}}</span></button>\n    </div>\n";

var CompareProducts = /*#__PURE__*/function () {
  function CompareProducts(context) {
    var _this = this;

    this.context = context;
    this.animationTime = 300;
    this.$body = $('body');
    this.products = this.loadProductsFromLocalStorage() || [];
    this.$scope = $(mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(compareListTmpl, {
      compare: context.compareAddonLang_compare,
      clear_all: context.compareAddonLang_clear_all,
      renderItems: function renderItems() {
        return _this.products.map(function (product) {
          return _this.renderItem(product);
        }).join('');
      }
    }));

    if (this.products.length === 0) {
      this.$scope.addClass('is-empty').hide();
    } else {
      this.$scope.removeClass('is-empty').show();
    }

    this.$body.append(this.$scope);
    this.$productList = this.$scope.find('[data-compare-product-list]');
    this.$compareButton = this.$scope.find('[data-compare-product-button]');
    this.updateCompareUrl();
    this.bindEvents();
  }

  var _proto = CompareProducts.prototype;

  _proto.loadProductsFromLocalStorage = function loadProductsFromLocalStorage() {
    if (!window.localStorage) {
      return;
    }

    var s = window.localStorage.getItem('compareProducts');

    if (s) {
      try {
        return JSON.parse(s);
      } catch (e) {
        return null;
      }
    } else {
      return null;
    }
  };

  _proto.saveProductsToLocalStorage = function saveProductsToLocalStorage() {
    if (!window.localStorage) {
      return;
    }

    window.localStorage.setItem('compareProducts', JSON.stringify(this.products));
  };

  _proto.bindEvents = function bindEvents() {
    var _this2 = this;

    this.$body.on('click', '[data-compare-id]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareId'));

      if (_this2.products.filter(function (item) {
        return item.id === id;
      }).length === 0) {
        _this2.addProduct({
          image: $el.data('compareImage'),
          alt: $el.data('compareTitle'),
          id: id
        });
      }

      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.on('click', '[data-compare-product-remove]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareProductRemove'));

      _this2.removeProduct(id);

      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.find('[data-compare-product-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.$scope.toggleClass('is-closed');
    });
    this.$scope.find('[data-compare-product-clearall]').on('click', function (event) {
      event.preventDefault();

      _this2.clearAllProducts();
    });
  };

  _proto.addProduct = function addProduct(product) {
    var _this3 = this;

    this.products.push(product);
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = $(this.renderItem(product)).hide();
    this.$productList.append($el);
    $el.show(this.animationTime, function () {
      _this3.$scope.removeClass('is-empty').fadeIn(_this3.animationTime);
    });
  };

  _proto.removeProduct = function removeProduct(id) {
    var _this4 = this;

    this.products = this.products.filter(function (item) {
      return item.id !== id;
    });
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find("[data-compare-product-item=" + id + "]");
    $el.fadeOut(this.animationTime, function () {
      $el.remove();

      if (_this4.products.length === 0) {
        _this4.$scope.addClass('is-empty').fadeOut(_this4.animationTime);
      }
    });
  };

  _proto.clearAllProducts = function clearAllProducts() {
    var _this5 = this;

    this.products = [];
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find('[data-compare-product-item]');
    $el.fadeOut(this.animationTime, function () {
      $el.remove();

      _this5.$scope.addClass('is-empty').fadeOut(_this5.animationTime);
    });
  };

  _proto.updateCompareUrl = function updateCompareUrl() {
    var path = this.products.map(function (product) {
      return product.id;
    }).join('/');
    this.$compareButton.attr('href', this.context.urls.compare + "/" + path);
  };

  _proto.renderItem = function renderItem(item) {
    return mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(compareListItemTmpl, Object.assign({}, item, {
      quick_view: this.context.compareAddonLang_quick_view,
      remove: this.context.compareAddonLang_remove
    }));
  };

  return CompareProducts;
}();

function compareProducts(context) {
  if (!singleton) {
    singleton = new CompareProducts(context);
  }

  return singleton;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */

    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */

    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true;
    /* eslint-disable-line */
    // papathemes-supermarket: quickfix stop stencil-utils SortByHook submitting the form when select changed

    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");











 // Papathemes - Supermarket


/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker, #beautify__findGate-sidebar .blocker',
      // papathemes-beautify edited
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch ._accordion-content .toggleLink',
      // papathemes-beautify edited
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // papathemes-beautify

    this.initPriceSlider(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onPopState = this.onPopState.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents(); // Supermarket

    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    }); // papathemes-beautify

    this.initFindGate();
  } // papathemes-beautify


  var _proto = FacetedSearch.prototype;

  _proto.initFindGate = function initFindGate() {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);

    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      this.findGate(width);
    }
  };

  _proto.findGate = function findGate(width) {
    var _this2 = this;

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);
    delete url.query._bs_width;
    delete url.query['Minimum Gate Width'];
    delete url.query['Minimum Gate Width[]'];
    delete url.query['Maximum Gate Width'];
    delete url.query['Maximum Gate Width[]'];

    if (width) {
      var showMoreUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      });
      var minWidthPromise = new Promise(function (resolve) {
        var findMinWidthValues = function findMinWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse($(el).attr('href'), true);

            return Number(_url.query['Minimum Gate Width']);
          });
        };

        var $minWidth = $('#facetedSearch [data-facet="Minimum Gate Width"]');

        if ($minWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(showMoreUrl, {
            template: _this2.requestOptions.showMore,
            params: {
              list_all: 'Minimum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMinWidthValues($(resp)));
          });
        } else {
          resolve(findMinWidthValues($minWidth));
        }
      });
      var maxWidthPromise = new Promise(function (resolve) {
        var findMaxWidthValues = function findMaxWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse($(el).attr('href'), true);

            return Number(_url.query['Maximum Gate Width']);
          });
        };

        var $maxWidth = $('#facetedSearch [data-facet="Maximum Gate Width"]');

        if ($maxWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(showMoreUrl, {
            template: _this2.requestOptions.showMore,
            params: {
              list_all: 'Maximum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMaxWidthValues($(resp)));
          });
        } else {
          resolve(findMaxWidthValues($maxWidth));
        }
      });
      Promise.all([minWidthPromise, maxWidthPromise]).then(function (_ref) {
        var minWidthArr = _ref[0],
            maxWidthArr = _ref[1];
        url.query._bs_width = width;
        url.query['Minimum Gate Width[]'] = minWidthArr.filter(function (val) {
          return val <= width;
        });
        url.query['Maximum Gate Width[]'] = maxWidthArr.filter(function (val) {
          return val >= width;
        });

        if (url.query['Minimum Gate Width[]'].length === minWidthArr.length) {
          delete url.query['Minimum Gate Width[]'];
        }

        if (url.query['Maximum Gate Width[]'].length === maxWidthArr.length) {
          delete url.query['Maximum Gate Width[]'];
        }

        _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
          pathname: url.pathname,
          search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
        }));
      });
    } else {
      _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      }));
    }
  } // Supermarket
  ;

  _proto.destroy = function destroy() {
    this.unbindEvents();
  } // Public methods
  ;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Papathemes - Supermarket
    // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // papathemes-beautify

    this.initPriceSlider(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this3 = this;

    // Supermarket
    if (this.updateViewCallback) {
      return this.updateViewCallback();
    }

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this3.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this3.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this4 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this4.options.modal.open();

        _this4.options.modalOpen = true;

        _this4.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this6 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this6.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this7 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this7.collapseFacetItems($navList);
      } else {
        _this7.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this8 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this8.collapsedFacets, id);

      if (shouldCollapse) {
        _this8.collapseFacet($accordionToggle);
      } else {
        _this8.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    var _this9 = this;

    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // papathemes-beautify {{{

    var $minMaxFacets = $('#facetedSearch-navList--maximum-gate-width, #facetedSearch-content--minimum-gate-width');

    if ($minMaxFacets.length > 0) {
      $('.sidebarBlock--findGate').show();
      $minMaxFacets.closest('._accordion-block').hide();
    } else {
      $('.sidebarBlock--findGate').hide();
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);

    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      $('#beautify__findGate-sidebar form [name=_bs_width]').val(width);
    }

    $('#beautify__findGate-sidebar form').off('submit').on('submit', function (event) {
      event.preventDefault();

      _this9.findGate($(event.target).find('[name=_bs_width]').val());
    }); // }}}
    // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */

    var winUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(url, true);

    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }

    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */

    var winUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(url, true);

    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }

    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */

    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */

    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true; // papathemes-supermarket: quick-fixed stencil-utils for sorting ajax request

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }
    /* MOD by papathemes - supermarket
    ---
    const url = Url.parse(window.location.href);
    const queryParams = decodeURI($(currentTarget).serialize());
    ---
    */


    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParamsArray = $(currentTarget).serializeArray();
    queryParamsArray.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    var queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query);
    /* END MOD */

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');

      if (linkUrl) {
        // Supermarket Fix undefined
        var re = /page=[0-9]+/i;
        var updatedLinkUrl = linkUrl.replace(re, 'page=1');
        window.history.replaceState({}, document.title, updatedLinkUrl);
      }
    }

    $(window).trigger('statechange');
  } // papathemes-beautify
  ;

  _proto.initPriceSlider = function initPriceSlider() {
    $('#facetedSearch[data-beautify-faceted-shop-by-price]').get().map(function (el) {
      return $(el);
    }).forEach(function ($facetedSearch) {
      var $shopByPrice = $facetedSearch.find('#facetedSearch-content--price');
      $shopByPrice.data('beautifyShopByPrice', $facetedSearch.data('beautifyFacetedShopByPrice'));
      Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__["default"])($shopByPrice);
    });
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    } // supermarket: Fix url encode RFC 3986


    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }

    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  // Supermarket
  removeParams: function removeParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true); // Let the formatter use the query object to build the new url

    parsed.search = null;

    if (typeof params === 'string') {
      if (parsed.query.hasOwnProperty(params)) {
        parsed.query[params] = null;
        delete parsed.query[params];
      }
    } else if (typeof params === 'object') {
      params.forEach(function (param) {
        if (parsed.query.hasOwnProperty(param)) {
          parsed.query[param] = null;
          delete parsed.query[param];
        }
      });
    } // supermarket: Fix url encode RFC 3986


    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }

    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  // supermarket: Fix faceted value contains both + and a spacing character (ie. "DVD+R DL")
  encodeParam: function encodeParam(val) {
    return encodeURIComponent(val).split('%20').join('+').replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key][ndx]); // supermarket mod
            }
          }
        } else {
          out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key]); // supermarket mod
        }
      }
    }

    return out.substring(1);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmVhdXRpZnkvc2hvcC1ieS1wcmljZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvYWN0aW9uLWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9idWxrLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscy5qcyJdLCJuYW1lcyI6WyJTaG9wQnlQcmljZVNsaWRlciIsIiRzY29wZSIsImRhdGEiLCJvblByaWNlSW5wdXQiLCJiaW5kIiwiJHNsaWRlciIsIiQiLCIkbWluIiwiJG1heCIsIiRjYW5jZWwiLCIkY2xlYXIiLCIkZm9ybSIsIm5vdCIsIiRhcHBseSIsInNob3BCeVByaWNlIiwibWluIiwibG93IiwidmFsdWUiLCJtYXgiLCJsZW5ndGgiLCJoaWdoIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ2YWx1ZXMiLCJnZXQiLCJoYXMiLCJzaG93IiwiaGlkZSIsIm9yaWdpbmFsVmFsdWVzIiwic2xpZGVyIiwicmFuZ2UiLCJzbGlkZSIsImV2ZW50IiwidWkiLCJ2YWwiLCJhdHRyIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFwcGx5Iiwic2xpZGVNaW4iLCJzbGlkZU1heCIsIk51bWJlciIsInNldCIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJ0YXJnZXQiLCJwcm9wIiwiY3VyTWluIiwiY3VyTWF4IiwiaXMiLCJuZXdNaW4iLCJuZXdNYXgiLCJzZWxlY3RvciIsImVhY2giLCJpIiwiZWwiLCJpbnN0YW50bG9hZEJpbmRlZCIsImFjdGlvbkJhciIsInJlbW92ZU1vZGVDbGFzcyIsImluZGV4IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJqb2luIiwiQWN0aW9uQmFyIiwib3B0aW9ucyIsIm9uTW9kZUNoYW5nZSIsImluaXQiLCIkc29ydEJ5IiwiJGxpbWl0IiwiZmluZCIsIiRtb2RlIiwidXJsIiwiVXJsIiwicGFyc2UiLCJocmVmIiwicXVlcnkiLCJsaW1pdCIsIm1vZGUiLCJmaWx0ZXIiLCIkYm9keSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJyZWluaXQiLCJuZXdPcHRpb25zIiwiZGVzdHJveSIsIm9mZiIsIiRhIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJmb3JtYXQiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiYWN0aW9uQmFyRmFjdG9yeSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9taXNlU2VyaWFsIiwiZnVuY3MiLCJyZWR1Y2UiLCJwcm9taXNlIiwiZnVuYyIsInRoZW4iLCJyZXN1bHQiLCJBcnJheSIsInByb3RvdHlwZSIsImNvbmNhdCIsIkJ1bGtPcmRlciIsImNvbnRleHQiLCJpdGVtQ291bnQiLCJwcm9ncmVzc0N1cnJlbnQiLCJwcm9ncmVzc1RvdGFsIiwib25RdWFudGl0eUNoYW5nZSIsIm9uUXVhbnRpdHlCdXR0b25DbGljayIsIm9uUHJvZHVjdEFkZGVkIiwib25BZGRBbGxDbGljayIsIm9uQ2FydFF0eUNoYW5nZSIsIm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2siLCIkcHJvZ3Jlc3NQb3B1cCIsIiRwcm9ncmVzc0JhciIsIiRwcm9ncmVzc1BvcHVwQ3VycmVudCIsIiRwcm9ncmVzc1BvcHVwQWN0aW9ucyIsIiRwcm9ncmVzc1BvcHVwQ2xvc2UiLCJjYWxjdWxhdGUiLCJjYXJ0SWQiLCJ1cGRhdGVRdHlJbkNhcnQiLCJoaWRlUHJvZ3Jlc3NQb3B1cCIsInNob3dQcm9ncmVzc1BvcHVwIiwiY3NzIiwidXBkYXRlUHJvZ3Jlc3NQb3B1cCIsInNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucyIsInNob3dQcm9ncmVzc0JhciIsImhpZGVQcm9ncmVzc0JhciIsInN3YWwiLCJmaXJlIiwidGV4dCIsImJ1bGtPcmRlckVudGVyUXR5IiwiaWNvbiIsImFkZEFsbFByb2R1Y3RzIiwicHJvZHVjdElkIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCIkaW5wdXQiLCJjbG9zZXN0IiwicXVhbnRpdHlNaW4iLCJwYXJzZUludCIsInF1YW50aXR5TWF4IiwicXR5IiwidG90YWwiLCJjb3VudCIsIiRwcmljZSIsInByaWNlVmFsIiwicGFyc2VGbG9hdCIsInByaWNlRm10Iiwic3VidG90YWwiLCJNYXRoIiwicm91bmQiLCIkc3VidG90YWwiLCJodG1sIiwicmVwbGFjZSIsInByb21pc2VzIiwicHVzaCIsImFkZFByb2R1Y3QiLCJ1cGRhdGVDYXJ0Q291bnRlciIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJ1dGlscyIsImFwaSIsImNhcnQiLCJpdGVtQWRkIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhbGVydCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwicXR5cyIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiJGVsIiwiZ2V0Q29udGVudCIsInRlbXBsYXRlIiwicmVzcCIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJ0cmlnZ2VyIiwiYnVsa09yZGVyRmFjdG9yeSIsIiRzZWxlY3RvciIsImJ1bGtPcmRlciIsInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJhbmltYXRpb25UaW1lIiwicHJvZHVjdHMiLCJsb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiTXVzdGFjaGUiLCJyZW5kZXIiLCJjb21wYXJlIiwiY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlIiwiY2xlYXJfYWxsIiwiY29tcGFyZUFkZG9uTGFuZ19jbGVhcl9hbGwiLCJyZW5kZXJJdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJyZW5kZXJJdGVtIiwiJHByb2R1Y3RMaXN0IiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwibG9jYWxTdG9yYWdlIiwicyIsImdldEl0ZW0iLCJKU09OIiwiZSIsInNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlkIiwiaW1hZ2UiLCJhbHQiLCJyZW1vdmVQcm9kdWN0IiwidG9nZ2xlQ2xhc3MiLCJjbGVhckFsbFByb2R1Y3RzIiwiZmFkZUluIiwiZmFkZU91dCIsInJlbW92ZSIsInBhdGgiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsInF1ZXJ5UGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJwYXJhbSIsIm5hbWUiLCJwYWdlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImluaXRQcmljZVZhbGlkYXRvciIsImluaXRQcmljZVNsaWRlciIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwib25Qb3BTdGF0ZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwib25lIiwiaW5pdEZpbmRHYXRlIiwiZ2V0VXJsIiwiX2JzX3dpZHRoIiwid2lkdGgiLCJmaW5kR2F0ZSIsInNob3dNb3JlVXJsIiwibWluV2lkdGhQcm9taXNlIiwiZmluZE1pbldpZHRoVmFsdWVzIiwiX3VybCIsIiRtaW5XaWR0aCIsImdldFBhZ2UiLCJzaG93TW9yZSIsImxpc3RfYWxsIiwibWF4V2lkdGhQcm9taXNlIiwiZmluZE1heFdpZHRoVmFsdWVzIiwiJG1heFdpZHRoIiwiYWxsIiwibWluV2lkdGhBcnIiLCJtYXhXaWR0aEFyciIsImdvVG9VcmwiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlVmlld0NhbGxiYWNrIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJoYXNNb3JlUmVzdWx0cyIsInRvZ2dsZUZhY2V0SXRlbXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiZmFjZXQiLCJmYWNldFVybCIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiJG1pbk1heEZhY2V0cyIsImhvb2tzIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5VcmwiLCIkdG9nZ2xlIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJxdWVyeVBhcmFtc0FycmF5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZVN0YXRlIiwiJGZhY2V0ZWRTZWFyY2giLCIkc2hvcEJ5UHJpY2UiLCJpbml0U2hvcEJ5UHJpY2VTbGlkZXIiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJzcGxpdCIsInBvcCIsImFjYyIsInBhcnNlZCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUGFyYW1zIiwiZW5jb2RlUGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJjIiwiY2hhckNvZGVBdCIsInF1ZXJ5RGF0YSIsIm91dCIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzZDQUFNQSxpQjtFQUNGLDJCQUFZQyxNQUFaLEVBQW9CO0lBQUE7O0lBQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1DQUFaLENBQUosRUFBc0Q7TUFDbEQ7SUFDSDs7SUFFREQsTUFBTSxDQUFDQyxJQUFQLENBQVksbUNBQVosRUFBaUQsSUFBakQ7SUFFQSxLQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0lBRUEsS0FBS0gsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0ksT0FBTCxHQUFlQyxDQUFDLENBQUMsZUFBRCxFQUFrQkwsTUFBbEIsQ0FBaEI7SUFDQSxLQUFLTSxJQUFMLEdBQVlELENBQUMsQ0FBQyxnREFBRCxFQUFtREwsTUFBbkQsQ0FBYjtJQUNBLEtBQUtPLElBQUwsR0FBWUYsQ0FBQyxDQUFDLGdEQUFELEVBQW1ETCxNQUFuRCxDQUFiO0lBQ0EsS0FBS1EsT0FBTCxHQUFlSCxDQUFDLENBQUMsZUFBRCxFQUFrQkwsTUFBbEIsQ0FBaEI7SUFDQSxLQUFLUyxNQUFMLEdBQWNKLENBQUMsQ0FBQyxjQUFELEVB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QUNrVCxXQUFULENBQXFCSSxTQUFTLENBQUNYLEdBQUQsQ0FBVCxDQUFlYyxHQUFmLENBQXJCLENBQXhDLENBRG9DLENBQ2lEO1lBQ3hGO1VBQ0o7UUFDSixDQVJELE1BUU87VUFDSEYsR0FBRyxVQUFRdlQsUUFBUSxDQUFDa1QsV0FBVCxDQUFxQlAsR0FBckIsQ0FBUixTQUFxQzNTLFFBQVEsQ0FBQ2tULFdBQVQsQ0FBcUJJLFNBQVMsQ0FBQ1gsR0FBRCxDQUE5QixDQUF4QyxDQURHLENBQzZFO1FBQ25GO01BQ0o7SUFDSjs7SUFFRCxPQUFPWSxHQUFHLENBQUNHLFNBQUosQ0FBYyxDQUFkLENBQVA7RUFDSDtBQW5GWSxDQUFqQjtBQXNGZTFULHVFQUFmLEUiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaG9wQnlQcmljZVNsaWRlciB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlKSB7XG4gICAgICAgIGlmICgkc2NvcGUuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZVNsaWRlckluc3RhbmNlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRzY29wZS5kYXRhKCdiZWF1dGlmeVNob3BCeVByaWNlU2xpZGVySW5zdGFuY2UnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uUHJpY2VJbnB1dCA9IHRoaXMub25QcmljZUlucHV0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuJHNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRtaW4gPSAkKCdpbnB1dFtuYW1lPVwibWluX3ByaWNlXCJdLCBpbnB1dFtkYXRhLWlucHV0LW1pbl0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRtYXggPSAkKCdpbnB1dFtuYW1lPVwibWF4X3ByaWNlXCJdLCBpbnB1dFtkYXRhLWlucHV0LW1heF0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRjYW5jZWwgPSAkKCdbZGF0YS1jYW5jZWxdJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kY2xlYXIgPSAkKCdbZGF0YS1jbGVhcl0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLiRmb3JtID0gJCgnZm9ybScsICRzY29wZSkubm90KCdbZGF0YS1mYWNldGVkLXNlYXJjaC1yYW5nZV0nKTsgLy8gZXhjbHVkZSBmYWNldGVkIGZvcm1cbiAgICAgICAgdGhpcy4kYXBwbHkgPSAkKCdbZGF0YS1hcHBseV0nLCAkc2NvcGUpO1xuICAgICAgICB0aGlzLnNob3BCeVByaWNlID0gJHNjb3BlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2UnKTtcblxuICAgICAgICBjb25zdCBtaW4gPSB0aGlzLnNob3BCeVByaWNlWzBdLmxvdy52YWx1ZTtcbiAgICAgICAgY29uc3QgbWF4ID0gdGhpcy5zaG9wQnlQcmljZVt0aGlzLnNob3BCeVByaWNlLmxlbmd0aCAtIDFdLmhpZ2gudmFsdWU7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW1xuICAgICAgICAgICAgcGFyYW1zLmdldCgncHJpY2VfbWluJykgfHwgcGFyYW1zLmdldCgnbWluX3ByaWNlJykgfHwgbWluLFxuICAgICAgICAgICAgcGFyYW1zLmdldCgncHJpY2VfbWF4JykgfHwgcGFyYW1zLmdldCgnbWF4X3ByaWNlJykgfHwgbWF4LFxuICAgICAgICBdO1xuXG4gICAgICAgIGlmIChwYXJhbXMuaGFzKCdwcmljZV9taW4nKSB8fCBwYXJhbXMuaGFzKCdtaW5fcHJpY2UnKSB8fCBwYXJhbXMuaGFzKCdwcmljZV9tYXgnKSB8fCBwYXJhbXMuaGFzKCdtYXhfcHJpY2UnKSkge1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcmlnaW5hbFZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoe1xuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICBtYXgsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBzbGlkZTogKGV2ZW50LCB1aSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG1pbi52YWwodWkudmFsdWVzWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRtYXgudmFsKHVpLnZhbHVlc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKHVpLnZhbHVlc1swXSAhPSB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdIHx8IHVpLnZhbHVlc1sxXSAhPSB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhbmNlbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRtaW4uYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWluJykgfHwgcGFyYW1zLmdldCgnbWluX3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuICAgICAgICB0aGlzLiRtYXguYXR0cih7IG1pbiwgbWF4LCB2YWx1ZTogcGFyYW1zLmdldCgncHJpY2VfbWF4JykgfHwgcGFyYW1zLmdldCgnbWF4X3ByaWNlJykgfHwgJycgfSkub24oJ2lucHV0JywgdGhpcy5vblByaWNlSW5wdXQpO1xuXG4gICAgICAgIHRoaXMuJGNhbmNlbC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcigndmFsdWVzJywgdGhpcy5vcmlnaW5hbFZhbHVlcyk7XG4gICAgICAgICAgICB0aGlzLiRtaW4udmFsKHRoaXMub3JpZ2luYWxWYWx1ZXNbMF0pO1xuICAgICAgICAgICAgdGhpcy4kbWF4LnZhbCh0aGlzLm9yaWdpbmFsVmFsdWVzWzFdKTtcbiAgICAgICAgICAgIHRoaXMuJGNhbmNlbC5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGFwcGx5Lm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGx5KCkge1xuICAgICAgICBjb25zdCBbc2xpZGVNaW4sIHNsaWRlTWF4XSA9IHRoaXMuJHNsaWRlci5zbGlkZXIoJ3ZhbHVlcycpO1xuICAgICAgICBjb25zdCBtaW4gPSBOdW1iZXIodGhpcy4kbWluLnZhbCgpKSB8fCBzbGlkZU1pbjtcbiAgICAgICAgY29uc3QgbWF4ID0gTnVtYmVyKHRoaXMuJG1heC52YWwoKSkgfHwgc2xpZGVNYXg7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3ByaWNlX21pbicsIG1pbik7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3ByaWNlX21heCcsIG1heCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICAgIH1cblxuICAgIG9uUHJpY2VJbnB1dChldmVudCkge1xuICAgICAgICBsZXQgdmFsID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSkgfHwgMDtcbiAgICAgICAgY29uc3QgbWluID0gTnVtYmVyKHRoaXMuJG1pbi5wcm9wKCdtaW4nKSkgfHwgMDtcbiAgICAgICAgY29uc3QgbWF4ID0gTnVtYmVyKHRoaXMuJG1pbi5wcm9wKCdtYXgnKSkgfHwgMDtcblxuICAgICAgICBjb25zdCBjdXJNaW4gPSBOdW1iZXIodGhpcy4kbWluLnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdO1xuICAgICAgICBjb25zdCBjdXJNYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdO1xuXG4gICAgICAgIGlmICh2YWwgPCBtaW4pIHtcbiAgICAgICAgICAgIHZhbCA9IG1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsID4gbWF4KSB7XG4gICAgICAgICAgICB2YWwgPSBtYXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kbWluLmlzKGV2ZW50LnRhcmdldCkgJiYgY3VyTWF4ID4gMCAmJiB2YWwgPiBjdXJNYXgpIHtcbiAgICAgICAgICAgIHZhbCA9IGN1ck1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRtYXguaXMoZXZlbnQudGFyZ2V0KSAmJiBjdXJNaW4gPiAwICYmIHZhbCA8IGN1ck1pbikge1xuICAgICAgICAgICAgdmFsID0gY3VyTWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gdmFsO1xuXG4gICAgICAgIGNvbnN0IG5ld01pbiA9IE51bWJlcih0aGlzLiRtaW4udmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMF07XG4gICAgICAgIGNvbnN0IG5ld01heCA9IE51bWJlcih0aGlzLiRtYXgudmFsKCkpIHx8IHRoaXMub3JpZ2luYWxWYWx1ZXNbMV07XG5cbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcigndmFsdWVzJywgW25ld01pbiwgbmV3TWF4XSk7XG5cbiAgICAgICAgaWYgKG5ld01pbiAhPSB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdIHx8IG5ld01heCAhPSB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdKSB7XG4gICAgICAgICAgICB0aGlzLiRjYW5jZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNlbGVjdG9yID0gJ1tkYXRhLWJlYXV0aWZ5LXNob3AtYnktcHJpY2VdJykge1xuICAgICQoc2VsZWN0b3IpLmVhY2goKGksIGVsKSA9PiBuZXcgU2hvcEJ5UHJpY2VTbGlkZXIoJChlbCkpKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmxldCBpbnN0YW50bG9hZEJpbmRlZCA9IGZhbHNlO1xubGV0IGFjdGlvbkJhcjtcblxuZnVuY3Rpb24gcmVtb3ZlTW9kZUNsYXNzKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gKGNsYXNzTmFtZS5tYXRjaCgvKF58XFxzKW1vZGUtXFxTKy9nKSB8fCBbXSkuam9pbignICcpO1xufVxuXG5jbGFzcyBBY3Rpb25CYXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIGNvbnN0cnVjdG9yJyk7XG4gICAgICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gdGhpcy5vbk1vZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kc29ydEJ5ID0gJCgnW2RhdGEtc29ydC1ieV0nKTtcblxuICAgICAgICBpZiAoIXRoaXMuJHNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRsaW1pdCA9IHRoaXMuJHNvcnRCeS5maW5kKCdbbmFtZT1saW1pdF0nKTtcbiAgICAgICAgY29uc3QgJG1vZGUgPSB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuXG4gICAgICAgIGlmICh1cmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgICRsaW1pdC52YWwodXJsLnF1ZXJ5LmxpbWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgJG1vZGUucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoYFt2YWx1ZT0ke3VybC5xdWVyeS5tb2RlfV1gKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIGFjdGlvbiBiYXIgaWYgdGhlIHBhZ2UgaXMgY2F0ZWdvcnkgYnVsayBvcmRlciBjdXN0b20gdGVtcGxhdGVcbiAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIGlmICgkYm9keS5oYXNDbGFzcygnc3VwZXJtYXJrZXQtcGFnZS0tcGFnZXMtY3VzdG9tLWNhdGVnb3J5LWJ1bGstb3JkZXInKSB8fCAkYm9keS5oYXNDbGFzcygnc3VwZXJtYXJrZXQtcGFnZS0tcGFnZXMtY3VzdG9tLWJyYW5kLWJ1bGstb3JkZXInKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHJlbW92ZU1vZGVDbGFzcylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhgbW9kZS0keyRtb2RlLmZpbHRlcignOmNoZWNrZWQnKS52YWwoKX1gKTtcblxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWluaXQobmV3T3B0aW9ucykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIHJlaW5pdCcpO1xuICAgICAgICBpZiAobmV3T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gbmV3T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWN0aW9uYmFyIGRlc3Ryb3llZCcpO1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdpbnB1dFtuYW1lPW1vZGVdJykub24oJ2NoYW5nZScsIHRoaXMub25Nb2RlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeS5maW5kKCdpbnB1dFtuYW1lPW1vZGVdJykub2ZmKCdjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgb25Nb2RlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kZSA9ICQoZXZlbnQudGFyZ2V0KS52YWwoKTtcblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MocmVtb3ZlTW9kZUNsYXNzKVxuICAgICAgICAgICAgLmFkZENsYXNzKGBtb2RlLSR7bW9kZX1gKTtcblxuICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucGFnaW5hdGlvbi1saW5rJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChlbCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKCRhLmF0dHIoJ2hyZWYnKSwgeyBtb2RlIH0pO1xuICAgICAgICAgICAgJGEuYXR0cignaHJlZicsIHVybCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHVybC5xdWVyeS5tb2RlID0gbW9kZTtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW46XG4gKiAtIFBhZ2UgaXMgbG9hZGVkXG4gKiAtIEFqYXggcGFnZSByZXR1cm5lZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3Rpb25CYXJGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICBpZiAoYWN0aW9uQmFyKSB7XG4gICAgICAgIGFjdGlvbkJhci5yZWluaXQob3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uQmFyID0gbmV3IEFjdGlvbkJhcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IGFjdGlvbkJhciB3aGVuIGxvYWRpbmcgbmV3IHBhZ2VcbiAgICBpZiAoIWluc3RhbnRsb2FkQmluZGVkKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb25CYXIpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25CYXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGFjdGlvbkJhciA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnN0YW50bG9hZEJpbmRlZCA9IHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICcuLi90aGVtZS9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG4vL1xuLy8gaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vdGFzay9kZWxheS1wcm9taXNlXG4vL1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8vXG4vLyBodHRwczovL2hhY2tlcm5vb24uY29tL2Z1bmN0aW9uYWwtamF2YXNjcmlwdC1yZXNvbHZpbmctcHJvbWlzZXMtc2VxdWVudGlhbGx5LTdhYWMxOGM0NDMxZVxuLy9cbmZ1bmN0aW9uIHByb21pc2VTZXJpYWwoZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKFxuICAgICAgICAocHJvbWlzZSwgZnVuYykgPT4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBmdW5jKCkudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSkpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGtPcmRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgJHNjb3BlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1RvdGFsID0gMDtcblxuICAgICAgICB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UgPSB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2sgPSB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZHVjdEFkZGVkID0gdGhpcy5vblByb2R1Y3RBZGRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWRkQWxsQ2xpY2sgPSB0aGlzLm9uQWRkQWxsQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhcnRRdHlDaGFuZ2UgPSB0aGlzLm9uQ2FydFF0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2sgPSB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnJlaW5pdCgpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgICQoJ2JvZHknKS5vbignYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsICgpID0+IHRoaXMudW5iaW5kRXZlbnRzKCkpO1xuICAgIH1cblxuICAgIHJlaW5pdCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cCA9ICQoJy5idWxrT3JkZXItcHJvZ3Jlc3NNb2RhbCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NCYXIgPSAkKCcucHJvZ3Jlc3NCYXInLCB0aGlzLiRwcm9ncmVzc1BvcHVwKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtY3VycmVudCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwtYWN0aW9ucycsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlID0gJCgnW2RhdGEtY2xvc2VdJywgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2FydElkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVF0eUluQ2FydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NoYW5nZScsICdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScsIHRoaXMub25RdWFudGl0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2FqYXgtYWRkdG9jYXJ0LWl0ZW0tYWRkZWQnLCB0aGlzLm9uUHJvZHVjdEFkZGVkKTtcbiAgICAgICAgdGhpcy4kYm9keS5vbignY2FydC1xdWFudGl0eS11cGRhdGUnLCB0aGlzLm9uQ2FydFF0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDbG9zZS5vbignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjaGFuZ2UnLCAnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nLCB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLiRzY29wZS5vZmYoJ2NsaWNrJywgJ1tkYXRhLWJ1bGtvcmRlci1hZGQtYWxsXScsIHRoaXMub25BZGRBbGxDbGljayk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdhamF4LWFkZHRvY2FydC1pdGVtLWFkZGVkJywgdGhpcy5vblByb2R1Y3RBZGRlZCk7XG4gICAgICAgIHRoaXMuJGJvZHkub2ZmKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHRoaXMub25DYXJ0UXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cENsb3NlLm9mZignY2xpY2snLCB0aGlzLm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2spO1xuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NQb3B1cCgpO1xuICAgIH1cblxuICAgIG9uQ2FydFF0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NQb3B1cCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cC5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgIH1cblxuICAgIGhpZGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudC5jc3MoJ3dpZHRoJywgMCk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9ncmVzc1BvcHVwKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1RvdGFsID4gMCkge1xuICAgICAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQuY3NzKCd3aWR0aCcsIGAke3RoaXMucHJvZ3Jlc3NDdXJyZW50IC8gdGhpcy5wcm9ncmVzc1RvdGFsICogMTAwfSVgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50LmNzcygnd2lkdGgnLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEFjdGlvbnMucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQmFyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgfVxuXG4gICAgaGlkZVByb2dyZXNzQmFyKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0Jhci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgIH1cblxuICAgIG9uQWRkQWxsQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5pdGVtQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmJ1bGtPcmRlckVudGVyUXR5IHx8ICdQbGVhc2UgZW50ZXIgcHJvZHVjdCBxdWFudGl0eScsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRBbGxQcm9kdWN0cygpO1xuICAgIH1cblxuICAgIG9uUHJvZHVjdEFkZGVkKGV2ZW50LCBwcm9kdWN0SWQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXF0eS1pZD0nJHtwcm9kdWN0SWR9J11gKS52YWwoMCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0nKS5maW5kKCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG5cbiAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1heCBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgIGlmICgocXR5ICsgMSkgPD0gcXVhbnRpdHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGZhbGwgYmVsb3cgbWluXG4gICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkaW5wdXQudmFsKHF0eSk7XG5cbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBvblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZSgpIHtcbiAgICAgICAgbGV0IGZvcm1hdCA9ICcnO1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkaW5wdXQuZGF0YSgnYnVsa29yZGVyUXR5SWQnKTtcbiAgICAgICAgICAgIGNvbnN0ICRwcmljZSA9IHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLWJ1bGtvcmRlci1wcmljZS1pZD0nJHtwcm9kdWN0SWR9J11gKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlVmFsID0gcGFyc2VGbG9hdCgkcHJpY2UuZGF0YSgnYnVsa29yZGVyUHJpY2VWYWx1ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRm10ID0gYCR7JHByaWNlLmRhdGEoJ2J1bGtvcmRlclByaWNlRm9ybWF0dGVkJyl9YDtcbiAgICAgICAgICAgIGNvbnN0IHN1YnRvdGFsID0gTWF0aC5yb3VuZChwcmljZVZhbCAqIHF0eSAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICBjb25zdCAkc3VidG90YWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1idWxrb3JkZXItc3VidG90YWwtaWQ9JyR7cHJvZHVjdElkfSddYCk7XG4gICAgICAgICAgICAkc3VidG90YWwuaHRtbChwcmljZUZtdC5yZXBsYWNlKC9bMC05LixdKy8sIHN1YnRvdGFsKSk7XG5cbiAgICAgICAgICAgIGZvcm1hdCA9IHByaWNlRm10O1xuICAgICAgICAgICAgdG90YWwgKz0gc3VidG90YWw7XG4gICAgICAgICAgICBjb3VudCArPSBxdHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbUNvdW50ID0gY291bnQ7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXRvdGFsLWNvdW50XScpLmh0bWwoY291bnQpO1xuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItdG90YWwtYW1vdW50XScpLmh0bWwoZm9ybWF0LnJlcGxhY2UoL1swLTkuLF0rLywgTWF0aC5yb3VuZCh0b3RhbCAqIDEwMCkgLyAxMDApKTtcbiAgICB9XG5cbiAgICBhZGRBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0N1cnJlbnQgPSAwO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkaW5wdXQuZGF0YSgnYnVsa29yZGVyUXR5SWQnKTtcblxuICAgICAgICAgICAgaWYgKHF0eSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0N1cnJlbnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc1BvcHVwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRQcm9kdWN0KHByb2R1Y3RJZCwgcXR5KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgMXMgYmVmb3JlIGFkZGluZyB0byBjYXJ0IGEgbmV3IGl0ZW0gaW4gb3JkZXIgdG8gYXZvaWQgcmVxdWVzdCBmYWlsZWQuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2dyZXNzVG90YWwgPSBwcm9taXNlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzUG9wdXAoKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3NCYXIoKTtcblxuICAgICAgICBwcm9taXNlU2VyaWFsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzUG9wdXBBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzc0JhcigpO1xuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvdW50ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkUHJvZHVjdChwcm9kdWN0SWQsIHF0eSkge1xuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvZHVjdF9pZCcsIHByb2R1Y3RJZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncXR5W10nLCBxdHkpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmb3JtRGF0YSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHByb21pc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgfVxuXG4gICAgdXBkYXRlUXR5SW5DYXJ0KCkge1xuICAgICAgICAkLmdldCgnL2FwaS9zdG9yZWZyb250L2NhcnQnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHF0eXMgPSB7fTtcblxuICAgICAgICAgICAgZGF0YVswXS5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcXR5c1tpdGVtLnByb2R1Y3RJZF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eXNbaXRlbS5wcm9kdWN0SWRdICs9IGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5c1tpdGVtLnByb2R1Y3RJZF0gPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1idWxrb3JkZXItY2FydC1xdHktaWRdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcGFyc2VJbnQoJGVsLmRhdGEoJ2J1bGtvcmRlckNhcnRRdHlJZCcpLCAxMCk7XG4gICAgICAgICAgICAgICAgaWYgKHF0eXNbcHJvZHVjdElkXSkge1xuICAgICAgICAgICAgICAgICAgICAkZWwuaHRtbChxdHlzW3Byb2R1Y3RJZF0pO1xuICAgICAgICAgICAgICAgICAgICAkZWwuY2xvc2VzdCgnLl9xdHlJbkNhcnRXcmFwcGVyJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC5odG1sKCcwJyk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5jbG9zZXN0KCcuX3F0eUluQ2FydFdyYXBwZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUNhcnRDb3VudGVyKCkge1xuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KHsgdGVtcGxhdGU6ICdjYXJ0L3ByZXZpZXcnIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgcmVzcCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0LXF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVsa09yZGVyRmFjdG9yeShjb250ZXh0ID0gbnVsbCwgc2VsZWN0b3IgPSAnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKSB7XG4gICAgY29uc3QgJHNlbGVjdG9yID0gJChzZWxlY3Rvcik7XG4gICAgbGV0IGJ1bGtPcmRlciA9ICRzZWxlY3Rvci5kYXRhKCdidWxrT3JkZXJJbnN0YW5jZScpO1xuXG4gICAgaWYgKCEoYnVsa09yZGVyIGluc3RhbmNlb2YgQnVsa09yZGVyKSkge1xuICAgICAgICBidWxrT3JkZXIgPSBuZXcgQnVsa09yZGVyKGNvbnRleHQsICRzZWxlY3Rvcik7XG4gICAgICAgICRzZWxlY3Rvci5kYXRhKCdidWxrT3JkZXJJbnN0YW5jZScsIGJ1bGtPcmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1bGtPcmRlcjtcbn1cbiIsImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5sZXQgc2luZ2xldG9uO1xuXG5jb25zdCBjb21wYXJlTGlzdFRtcGwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsLXdyYXBwZXIgaXMtZW1wdHlcIiBpZD1cInN1cGVybWFya2V0Q29tcGFyZUxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3Q+e3t7cmVuZGVySXRlbXN9fX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3tjb21wYXJlX3VybH19XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jb21wYXJlXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uPnt7Y29tcGFyZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXBsYWluIGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jbGVhckFsbFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWNsZWFyYWxsPnt7Y2xlYXJfYWxsfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1jbG9zZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZT48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vcGVuXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cFwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk9wZW48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuY29uc3QgY29tcGFyZUxpc3RJdGVtVG1wbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtaXRlbVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09XCJ7e2lkfX1cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWltZ1wiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7YWx0fX1cIiB0aXRsZT1cInt7YWx0fX1cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1xdWlja3ZpZXcgcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwie3tpZH19XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPnt7cXVpY2tfdmlld319PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXJlbW92ZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZT1cInt7aWR9fVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3JlbW92ZX19PC9zcGFuPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuYDtcblxuY2xhc3MgQ29tcGFyZVByb2R1Y3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDMwMDtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5sb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKE11c3RhY2hlLnJlbmRlcihjb21wYXJlTGlzdFRtcGwsIHtcbiAgICAgICAgICAgIGNvbXBhcmU6IGNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlLFxuICAgICAgICAgICAgY2xlYXJfYWxsOiBjb250ZXh0LmNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsLFxuICAgICAgICAgICAgcmVuZGVySXRlbXM6ICgpID0+IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gdGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5qb2luKCcnKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2lzLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3RdJyk7XG4gICAgICAgIHRoaXMuJGNvbXBhcmVCdXR0b24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uXScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFyZVByb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigkZWwuZGF0YSgnY29tcGFyZUlkJykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0KHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICRlbC5kYXRhKCdjb21wYXJlSW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAkZWwuZGF0YSgnY29tcGFyZVRpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLXByb2R1Y3QtcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVQcm9kdWN0UmVtb3ZlJykpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcm9kdWN0KGlkKTtcblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS50b2dnbGVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckFsbFByb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2R1Y3QocHJvZHVjdCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdC5hcHBlbmQoJGVsKTtcblxuICAgICAgICAkZWwuc2hvdyh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLmZhZGVJbih0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9kdWN0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT0ke2lkfV1gKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtXScpO1xuICAgICAgICAkZWwuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29tcGFyZVVybCgpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCkuam9pbignLycpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uLmF0dHIoJ2hyZWYnLCBgJHt0aGlzLmNvbnRleHQudXJscy5jb21wYXJlfS8ke3BhdGh9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RJdGVtVG1wbCwge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHF1aWNrX3ZpZXc6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3F1aWNrX3ZpZXcsXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3JlbW92ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlUHJvZHVjdHMoY29udGV4dCkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBDb21wYXJlUHJvZHVjdHMoY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IC8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi8gLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldDogcXVpY2tmaXggc3RvcCBzdGVuY2lsLXV0aWxzIFNvcnRCeUhvb2sgc3VibWl0dGluZyB0aGUgZm9ybSB3aGVuIHNlbGVjdCBjaGFuZ2VkXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvYWN0aW9uLWJhcic7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuaW1wb3J0IGluaXRTaG9wQnlQcmljZVNsaWRlciBmcm9tICcuLi8uLi9iZWF1dGlmeS9zaG9wLWJ5LXByaWNlLXNsaWRlcic7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyBmb3IgdGhlIGFqYXggcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICogICAgICB0ZW1wbGF0ZXM6IHtcbiAgICAgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXIsICNiZWF1dGlmeV9fZmluZEdhdGUtc2lkZWJhciAuYmxvY2tlcicsIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgZWRpdGVkXG4gICAgICAgICAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgICAgICAgICAgY29tcG9uZW50U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaC1uYXZMaXN0JyxcbiAgICAgICAgICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0tZmllbGRzZXQnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nLFxuICAgICAgICAgICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5fYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGVkaXRlZFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIHRoaXMuaW5pdFByaWNlU2xpZGVyKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG4gICAgICAgIC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5jb21wb25lbnRTZWxlY3RvcikuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxGYWNldHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuICAgICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSB0aGlzLm9uU3RhdGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgICQoJ2JvZHknKS5vbmUoJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCAoKSA9PiB0aGlzLnVuYmluZEV2ZW50cygpKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIHRoaXMuaW5pdEZpbmRHYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRGaW5kR2F0ZSgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHVybFV0aWxzLmdldFVybCgpLCB0cnVlKTtcblxuICAgICAgICBpZiAodXJsLnF1ZXJ5Ll9ic193aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBOdW1iZXIodXJsLnF1ZXJ5Ll9ic193aWR0aCk7XG4gICAgICAgICAgICB0aGlzLmZpbmRHYXRlKHdpZHRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRHYXRlKHdpZHRoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh1cmxVdGlscy5nZXRVcmwoKSwgdHJ1ZSk7XG5cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5fYnNfd2lkdGg7XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aCddO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGgnXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoW10nXTtcblxuICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dNb3JlVXJsID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pXG4gICAgXG4gICAgICAgICAgICBjb25zdCBtaW5XaWR0aFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kTWluV2lkdGhWYWx1ZXMgPSAkc2NvcGUgPT4gJHNjb3BlLmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpLmdldCgpLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF91cmwgPSBVcmwucGFyc2UoJChlbCkuYXR0cignaHJlZicpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihfdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGgnXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgJG1pbldpZHRoID0gJCgnI2ZhY2V0ZWRTZWFyY2ggW2RhdGEtZmFjZXQ9XCJNaW5pbXVtIEdhdGUgV2lkdGhcIl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJG1pbldpZHRoLmRhdGEoJ2hhc01vcmVSZXN1bHRzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldFBhZ2Uoc2hvd01vcmVVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6ICdNaW5pbXVtIEdhdGUgV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNaW5XaWR0aFZhbHVlcygkKHJlc3ApKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZE1pbldpZHRoVmFsdWVzKCRtaW5XaWR0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtYXhXaWR0aFByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kTWF4V2lkdGhWYWx1ZXMgPSAkc2NvcGUgPT4gJHNjb3BlLmZpbmQoJ1tkYXRhLWZhY2V0ZWQtc2VhcmNoLWZhY2V0XScpLmdldCgpLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF91cmwgPSBVcmwucGFyc2UoJChlbCkuYXR0cignaHJlZicpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihfdXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGgnXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgJG1heFdpZHRoID0gJCgnI2ZhY2V0ZWRTZWFyY2ggW2RhdGEtZmFjZXQ9XCJNYXhpbXVtIEdhdGUgV2lkdGhcIl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoJG1heFdpZHRoLmRhdGEoJ2hhc01vcmVSZXN1bHRzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBpLmdldFBhZ2Uoc2hvd01vcmVVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6ICdNYXhpbXVtIEdhdGUgV2lkdGgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNYXhXaWR0aFZhbHVlcygkKHJlc3ApKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmluZE1heFdpZHRoVmFsdWVzKCRtYXhXaWR0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW21pbldpZHRoUHJvbWlzZSwgbWF4V2lkdGhQcm9taXNlXSkudGhlbigoW21pbldpZHRoQXJyLCBtYXhXaWR0aEFycl0pID0+IHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnkuX2JzX3dpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddID0gbWluV2lkdGhBcnIuZmlsdGVyKHZhbCA9PiB2YWwgPD0gd2lkdGgpO1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoW10nXSA9IG1heFdpZHRoQXJyLmZpbHRlcih2YWwgPT4gdmFsID49IHdpZHRoKTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddLmxlbmd0aCA9PT0gbWluV2lkdGhBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01pbmltdW0gR2F0ZSBXaWR0aFtdJ107XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmICh1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ10ubGVuZ3RoID09PSBtYXhXaWR0aEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoW10nXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIHRoaXMuaW5pdFByaWNlU2xpZGVyKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgLy8gU3VwZXJtYXJrZXRcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlVmlld0NhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVWaWV3Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMsIHRoaXMub3B0aW9ucy52YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyk7XG5cbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yID0gdmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuICAgICAgICBjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gUmVzdG9yZSBjb2xsYXBzZWQgc3RhdGUgZm9yIGVhY2ggZmFjZXRcbiAgICAgICAgJG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gQ2xlYW4tdXBcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IHt7e1xuICAgICAgICBjb25zdCAkbWluTWF4RmFjZXRzID0gJCgnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdC0tbWF4aW11bS1nYXRlLXdpZHRoLCAjZmFjZXRlZFNlYXJjaC1jb250ZW50LS1taW5pbXVtLWdhdGUtd2lkdGgnKTtcbiAgICAgICAgaWYgKCRtaW5NYXhGYWNldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLnNpZGViYXJCbG9jay0tZmluZEdhdGUnKS5zaG93KCk7XG4gICAgICAgICAgICAkbWluTWF4RmFjZXRzLmNsb3Nlc3QoJy5fYWNjb3JkaW9uLWJsb2NrJykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnNpZGViYXJCbG9jay0tZmluZEdhdGUnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh1cmxVdGlscy5nZXRVcmwoKSwgdHJ1ZSk7XG4gICAgICAgIGlmICh1cmwucXVlcnkuX2JzX3dpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE51bWJlcih1cmwucXVlcnkuX2JzX3dpZHRoKTtcbiAgICAgICAgICAgICQoJyNiZWF1dGlmeV9fZmluZEdhdGUtc2lkZWJhciBmb3JtIFtuYW1lPV9ic193aWR0aF0nKS52YWwod2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgICQoJyNiZWF1dGlmeV9fZmluZEdhdGUtc2lkZWJhciBmb3JtJykub2ZmKCdzdWJtaXQnKS5vbignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5maW5kR2F0ZSgkKGV2ZW50LnRhcmdldCkuZmluZCgnW25hbWU9X2JzX3dpZHRoXScpLnZhbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIH19fVxuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHdpblVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubW9kZSkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubW9kZSA9IHdpblVybC5xdWVyeS5tb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5VcmwucXVlcnkubGltaXQpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5LmxpbWl0ID0gd2luVXJsLnF1ZXJ5LmxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiBmYWNldFVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKGZhY2V0VXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCB3aW5VcmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5Lm1vZGUgPSB3aW5VcmwucXVlcnkubW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5saW1pdCA9IHdpblVybC5xdWVyeS5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiBmYWNldFVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKGZhY2V0VXJsLnF1ZXJ5KSB9KSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHRydWU7IC8vIHBhcGF0aGVtZXMtc3VwZXJtYXJrZXQ6IHF1aWNrLWZpeGVkIHN0ZW5jaWwtdXRpbHMgZm9yIHNvcnRpbmcgYWpheCByZXF1ZXN0XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIE1PRCBieSBwYXBhdGhlbWVzIC0gc3VwZXJtYXJrZXRcbiAgICAgICAgLS0tXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXNBcnJheSA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgcXVlcnlQYXJhbXNBcnJheS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIHVybC5xdWVyeVtwYXJhbS5uYW1lXSA9IHBhcmFtLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSk7XG4gICAgICAgIC8qIEVORCBNT0QgKi9cblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRVcmwpO1xuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxuICAgICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAobGlua1VybCkgeyAvLyBTdXBlcm1hcmtldCBGaXggdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgY29uc3QgcmUgPSAvcGFnZT1bMC05XSsvaTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlua1VybCA9IGxpbmtVcmwucmVwbGFjZShyZSwgJ3BhZ2U9MScpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdFByaWNlU2xpZGVyKCkge1xuICAgICAgICAkKCcjZmFjZXRlZFNlYXJjaFtkYXRhLWJlYXV0aWZ5LWZhY2V0ZWQtc2hvcC1ieS1wcmljZV0nKS5nZXQoKS5tYXAoZWwgPT4gJChlbCkpXG4gICAgICAgICAgICAuZm9yRWFjaCgkZmFjZXRlZFNlYXJjaCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJHNob3BCeVByaWNlID0gJGZhY2V0ZWRTZWFyY2guZmluZCgnI2ZhY2V0ZWRTZWFyY2gtY29udGVudC0tcHJpY2UnKTtcbiAgICAgICAgICAgICAgICAkc2hvcEJ5UHJpY2UuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZScsICRmYWNldGVkU2VhcmNoLmRhdGEoJ2JlYXV0aWZ5RmFjZXRlZFNob3BCeVByaWNlJykpO1xuICAgICAgICAgICAgICAgIGluaXRTaG9wQnlQcmljZVNsaWRlcigkc2hvcEJ5UHJpY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cGVybWFya2V0OiBGaXggdXJsIGVuY29kZSBSRkMgMzk4NlxuICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5KSB7XG4gICAgICAgICAgICBwYXJzZWQuc2VhcmNoID0gdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhwYXJzZWQucXVlcnkpO1xuICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgcmVtb3ZlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5Lmhhc093blByb3BlcnR5KHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1zXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeVtwYXJhbXNdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnlbcGFyYW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCB1cmwgZW5jb2RlIFJGQyAzOTg2XG4gICAgICAgIGlmIChwYXJzZWQucXVlcnkpIHtcbiAgICAgICAgICAgIHBhcnNlZC5zZWFyY2ggPSB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHBhcnNlZC5xdWVyeSk7XG4gICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgLy8gc3VwZXJtYXJrZXQ6IEZpeCBmYWNldGVkIHZhbHVlIGNvbnRhaW5zIGJvdGggKyBhbmQgYSBzcGFjaW5nIGNoYXJhY3RlciAoaWUuIFwiRFZEK1IgRExcIilcbiAgICBlbmNvZGVQYXJhbTogKHZhbCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuc3BsaXQoJyUyMCcpLmpvaW4oJysnKS5yZXBsYWNlKC9bIScoKSpdL2csIGMgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCksXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke3VybFV0aWxzLmVuY29kZVBhcmFtKGtleSl9PSR7dXJsVXRpbHMuZW5jb2RlUGFyYW0ocXVlcnlEYXRhW2tleV1bbmR4XSl9YDsgLy8gc3VwZXJtYXJrZXQgbW9kXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke3VybFV0aWxzLmVuY29kZVBhcmFtKGtleSl9PSR7dXJsVXRpbHMuZW5jb2RlUGFyYW0ocXVlcnlEYXRhW2tleV0pfWA7IC8vIHN1cGVybWFya2V0IG1vZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=