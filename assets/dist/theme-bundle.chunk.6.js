(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/papathemes/also-bought.js":
/*!*********************************************!*\
  !*** ./assets/js/papathemes/also-bought.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlsoBought; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_to_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_8__);


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

function reportFormValidity(form) {
  var valid = true;

  if (form && form.checkValidity) {
    valid = form.checkValidity();

    if (!valid) {
      if (form.reportValidity) {
        form.reportValidity();
      } else {
        valid = true;
      }
    }
  }

  return valid;
}

var AlsoBought = /*#__PURE__*/function () {
  function AlsoBought(parentProductDetails, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$thumbnailTemplat = _ref.thumbnailTemplate,
        thumbnailTemplate = _ref$thumbnailTemplat === void 0 ? "\n            <div class=\"productView-alsoBought-thumbnail-item {{#checked}}is-checked{{/checked}}\" data-thumbnail-product-id=\"{{id}}\">\n                <div class=\"productView-alsoBought-item-image\">\n                    <a class=\"productView-alsoBought-thumbnail-label\" href=\"{{url}}\" target=\"_blank\"><img class=\"lazyload\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\"></a>\n                </div>\n            </div>\n        " : _ref$thumbnailTemplat,
        _ref$productDetailsTe = _ref.productDetailsTemplate,
        productDetailsTemplate = _ref$productDetailsTe === void 0 ? "\n            <div class=\"productView-alsoBought-item-inner\">\n                <div class=\"productView-alsoBought-item-check\">\n                    <div class=\"form-field\">\n                        <input\n                            class=\"form-checkbox\"\n                            type=\"checkbox\" \n                            name=\"productView-alsoBought-item-checkbox\"\n                            id=\"productView-alsoBought-item-checkbox-{{id}}\"\n                            value=\"{{id}}\"\n                            {{#checked}}checked{{/checked}}\n                            data-also-bought-checkbox>\n                        <label class=\"form-label {{#checked}}is-checked{{/checked}}\" for=\"productView-alsoBought-item-checkbox-{{id}}\">\n                            <div class=\"productView-alsoBought-item-title\">{{name}}</div>\n                            <div class=\"productView-alsoBought-item-price\">\n                                {{&loginPriceHtml}}\n                                {{&priceHtml}}\n                                {{&priceRangeHtml}}\n                            </div>\n\n                            {{&optionsToggleHtml}}\n                        </label>\n                    </div>\n                </div>\n                <div class=\"productView-alsoBought-item-form\" id=\"productView-alsoBought-item-form-{{id}}\" data-product-content>\n                    {{&formHtml}}\n                </div>\n            </div>\n        " : _ref$productDetailsTe,
        _ref$priceTemplate = _ref.priceTemplate,
        priceTemplate = _ref$priceTemplate === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <!-- Sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\" {{#nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{priceLabel}}\n                    </span>\n                    <span class=\"price-now-label\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{salePriceLabel}}\n                    </span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{price.formatted}}</span>\n                </div>\n                <!-- Non-sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                <!-- Retail price -->\n                {{&retailPriceHtml}}\n                {{&taxLabelHtml}}\n            </div>\n        " : _ref$priceTemplate,
        _ref$priceRangeTempla = _ref.priceRangeTemplate,
        priceRangeTemplate = _ref$priceRangeTempla === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\">{{priceLabel}}</span>\n                    <span class=\"price-now-label\" style=\"display: none;\">{{salePriceLabel}}</span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{priceRange.min.formatted}} - {{priceRange.max.formatted}}</span>\n                    {{&taxLabelHtml}}\n                </div>\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" style=\"display: none;\">\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                {{&retailPriceRangeHtml}}\n                {{&retailPriceHtml}}\n            </div>\n        " : _ref$priceRangeTempla,
        _ref$taxLabelTemplate = _ref.taxLabelTemplate,
        taxLabelTemplate = _ref$taxLabelTemplate === void 0 ? "\n            <abbr title=\"{{title}}\">{{text}}</abbr>\n        " : _ref$taxLabelTemplate,
        _ref$retailPriceRange = _ref.retailPriceRangeTemplate,
        retailPriceRangeTemplate = _ref$retailPriceRange === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-price-{{taxDataPrefix}} class=\"price price--rrp\">{{retailPriceRange.min.with_tax.formatted}} - {{retailPriceRange.max.with_tax.formatted}}</span>\n            </div>\n        " : _ref$retailPriceRange,
        _ref$retailPriceTempl = _ref.retailPriceTemplate,
        retailPriceTemplate = _ref$retailPriceTempl === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\" {{^retailPrice}}style=\"display: none;{{/retailPrice}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-{{taxDataPrefix}} class=\"price price--rrp\">\n                    {{retailPrice.formatted}}\n                </span>\n            </div>\n        " : _ref$retailPriceTempl,
        _ref$loginPriceTempla = _ref.loginPriceTemplate,
        loginPriceTemplate = _ref$loginPriceTempla === void 0 ? "\n            <a class=\"price--login\" href=\"{{loginUrl}}\" translate>{{loginForPriceTxt}}</a>\n        " : _ref$loginPriceTempla,
        _ref$optionsToggleTem = _ref.optionsToggleTemplate,
        optionsToggleTemplate = _ref$optionsToggleTem === void 0 ? "\n            <div class=\"productView-alsoBought-item-formToggle\"><a href=\"#productView-alsoBought-item-form-{{id}}\" data-options-collapsible>{{chooseOptionsTxt}} <i aria-hidden=\"true\" class=\"icon\"><svg><use xlink:href=\"#icon-chevron-down\"></use></svg></i></a></div>\n        " : _ref$optionsToggleTem,
        _ref$simpleFormTempla = _ref.simpleFormTemplate,
        simpleFormTemplate = _ref$simpleFormTempla === void 0 ? "\n            <form class=\"form form--addToCart\" method=\"post\" action=\"{{addToCartUrl}}\" enctype=\"multipart/form-data\" data-cart-item-add>\n                <input type=\"hidden\" name=\"action\" value=\"add\">\n                <input type=\"hidden\" name=\"product_id\" value=\"{{id}}\"/>\n                <input type=\"hidden\" name=\"qty[]\" value=\"{{qty}}\"/>\n            </form>\n        " : _ref$simpleFormTempla,
        _ref$loadingTemplate = _ref.loadingTemplate,
        loadingTemplate = _ref$loadingTemplate === void 0 ? "\n            <div class=\"loading\"><img src=\"{{loadingImg}}\" alt=\"loading\"/></div>\n        " : _ref$loadingTemplate,
        _ref$templateCustomTa = _ref.templateCustomTags,
        templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa;

    this.parentProductDetails = parentProductDetails;
    this.thumbnailTemplate = thumbnailTemplate;
    this.productDetailsTemplate = productDetailsTemplate;
    this.priceTemplate = priceTemplate;
    this.priceRangeTemplate = priceRangeTemplate;
    this.taxLabelTemplate = taxLabelTemplate;
    this.retailPriceRangeTemplate = retailPriceRangeTemplate;
    this.retailPriceTemplate = retailPriceTemplate;
    this.loginPriceTemplate = loginPriceTemplate;
    this.optionsToggleTemplate = optionsToggleTemplate;
    this.simpleFormTemplate = simpleFormTemplate;
    this.loadingTemplate = loadingTemplate;
    this.templateCustomTags = templateCustomTags;
    this.context = this.parentProductDetails.context;
    this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
    this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
    this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
    this.config = this.$alsoBoughtEl.data('alsoBought') || {};
    this.moneyWithTax = this.config.samplePriceWithTax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(this.config.samplePriceWithTax, this.context.money) : null;
    this.moneyWithoutTax = this.config.samplePriceWithoutTax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(this.config.samplePriceWithoutTax, this.context.money) : null; // try to guess any price on the page

    this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax // is default currency?
    || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null) // any price on the page
    || $('[data-product-price-without-tax], [data-product-price-with-tax]').get().reduce(function (_money, el) {
      return _money || Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])($(el).text());
    }, null) // use currency code
    || (this.context.activeCurrencyCode ? Object.assign({}, this.context.money, {
      currency_token: " " + this.context.activeCurrencyCode + " "
    }) : this.context.money);
    this.products = [];
    this.productNodes = [];
    this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
    this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);
    var thumbSize = this.context.alsobought_thumbnail_size.split('x');
    this.thumbnailWidth = Number(thumbSize[0]) || 100;
    this.thumbnailHeight = Number(thumbSize[1]) || 100;
    this.retrieveAlsoBoughtProducts();
    $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
    $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
  }

  var _proto = AlsoBought.prototype;

  _proto.currencyFormat = function currencyFormat(value) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(value, (this.config.includeTax ? this.moneyWithTax : this.moneyWithoutTax) || this.moneyFallback);
  };

  _proto.retrieveAlsoBoughtProducts = function retrieveAlsoBoughtProducts() {
    var _this = this;

    var $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
    var options = {
      template: {
        details: 'papathemes/also-bought/product-details',
        thumbnail: 'papathemes/also-bought/product-thumbnail'
      }
    };
    var $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
    var productIds = $productEls.get().map(function (el) {
      return $(el).data('productId');
    });

    if ($productEls.length > 0) {
      this.$alsoBoughtEl.removeClass('u-hiddenVisually');
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query (\n                            $productIds: [Int!],\n                            $productsCount: Int,\n                            " + (!this.config.requireLogin ? "\n                                $includeTax: Boolean,\n                                $currencyCode: currencyCode,\n                            " : '') + "\n                                $imgWidth: Int!,\n                            $imgHeight: Int!\n                        ) {\n                            site {\n                                products (\n                                    entityIds: $productIds,\n                                    first: $productsCount,\n                                    hideOutOfStock: true\n                                ) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            path\n                                            addToCartUrl\n                                            minPurchaseQuantity\n                                            defaultImage {\n                                                url (\n                                                    width: $imgWidth,\n                                                    height: $imgHeight\n                                                )\n                                            }\n                                            availabilityV2 {\n                                                status\n                                                ... on ProductUnavailable {\n                                                    message\n                                                }\n                                            }\n                                            " + (!this.config.requireLogin ? "\n                                                prices (\n                                                    includeTax: $includeTax,\n                                                    currencyCode: $currencyCode\n                                                ) {\n                                                    price {\n                                                        ...MoneyFields\n                                                    }\n                                                    salePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    basePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    retailPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    mapPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    priceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                    retailPriceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                }\n                                            " : '') + "\n                                            productOptions (\n                                                first: 1\n                                            ) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                        " + (!this.config.requireLogin ? "\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment MoneyRangeFields on MoneyRange {\n                                min {\n                                    ...MoneyFields\n                                }\n                                max {\n                                    ...MoneyFields\n                                }\n                            }\n                        " : '') + "\n                    ",
          variables: {
            productIds: productIds,
            productsCount: productIds.length,
            includeTax: this.config.includeTax,
            currencyCode: this.context.activeCurrencyCode,
            imgWidth: this.thumbnailWidth,
            imgHeight: this.thumbnailHeight
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + this.context.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          resp.data.site.products.edges.forEach(function (_ref2) {
            var node = _ref2.node;

            // Don't show this product if it's unavailable
            if (node.availabilityV2 && node.availabilityV2.status === 'Unavailable') {
              return;
            }

            _this.productNodes.push(node);

            var id = node.entityId;
            var name = node.name;
            var url = node.path;
            var addToCartUrl = node.addToCartUrl;
            var qty = node.minPurchaseQuantity || 1;
            var loadingImg = _this.context.loadingImg;
            var img = node.defaultImage.url || _this.context.defaultProductImage;
            var $productEl = $productEls.filter("[data-product-id=\"" + id + "\"]");
            var taxClassPrefix = _this.config.includeTax ? 'withTax' : 'withoutTax';
            var taxDataPrefix = _this.config.includeTax ? 'with-tax' : 'without-tax';
            var priceLabel = _this.context.pdp_price_label;
            var salePriceLabel = _this.context.pdp_sale_price_label;
            var nonSalePriceLabel = _this.context.pdp_non_sale_price_label;
            var retailPriceLabel = _this.context.pdp_retail_price_label;
            var chooseOptionsTxt = _this.context.chooseOptionsTxt;
            var loginForPriceTxt = _this.context.loginForPriceTxt;
            var loginUrl = _this.context.loginUrl || '/login.php';
            var checked = _this.context.alsobought_checked;
            var price = !_this.config.requireLogin && node.prices.price ? {
              formatted: _this.currencyFormat(node.prices.price.value)
            } : null;
            var nonSalePrice = !_this.config.requireLogin && node.prices.basePrice && node.prices.price && node.prices.basePrice.value !== node.prices.price.value ? {
              formatted: _this.currencyFormat(node.prices.basePrice.value)
            } : null;
            var retailPrice = !_this.config.requireLogin && node.prices.retailPrice ? {
              formatted: _this.currencyFormat(node.prices.retailPrice.value)
            } : null;
            var priceRange = !_this.config.requireLogin && node.prices.priceRange && node.prices.priceRange.min.value != node.prices.priceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.priceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.priceRange.max.value)
              }
            } : null;
            var retailPriceRange = !_this.config.requireLogin && node.prices.retailPriceRange && node.prices.retailPriceRange.min.value != node.prices.retailPriceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.max.value)
              }
            } : null;
            var loginPriceHtml = _this.config.requireLogin ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.loginPriceTemplate, {
              loginUrl: loginUrl,
              loginForPriceTxt: loginForPriceTxt
            }, null, _this.templateCustomTags) : '';
            var taxLabelHtml = _this.config.showTaxLabel ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.taxLabelTemplate, {
              title: _this.config.includeTax ? _this.context.includingTaxTxt : _this.context.excludingTaxTxt,
              text: _this.config.includeTax ? _this.context.priceWithTaxTxt : _this.context.priceWithoutTaxTxt
            }, null, _this.templateCustomTags) : '';
            var retailPriceRangeHtml = retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.retailPriceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPriceRange: retailPriceRange
            }, null, _this.templateCustomTags) : '';
            var retailPriceHtml = !retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.retailPriceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPrice: retailPrice
            }, null, _this.templateCustomTags) : '';
            var priceRangeHtml = priceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.priceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              priceRange: priceRange,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceRangeHtml: retailPriceRangeHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var optionsToggleHtml = node.productOptions.edges.length > 0 ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.optionsToggleTemplate, {
              id: id,
              chooseOptionsTxt: chooseOptionsTxt
            }, null, _this.templateCustomTags) : '';
            var priceHtml = !_this.config.requireLogin && !priceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.priceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              price: price,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var formHtml = node.productOptions.edges.length === 0 ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.simpleFormTemplate, {
              id: id,
              addToCartUrl: addToCartUrl,
              qty: qty
            }, null, _this.templateCustomTags) : '';
            var detailsHtml = mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.productDetailsTemplate, {
              id: id,
              name: name,
              loginPriceHtml: loginPriceHtml,
              priceHtml: priceHtml,
              priceRangeHtml: priceRangeHtml,
              optionsToggleHtml: optionsToggleHtml,
              formHtml: formHtml,
              checked: checked
            }, null, _this.templateCustomTags);
            var thumbnailHtml = $(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.thumbnailTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              checked: checked
            }, null, _this.templateCustomTags));
            $productEl.append(detailsHtml);
            $thumbnails.append(thumbnailHtml); // load simple product details

            if (node.productOptions.edges.length === 0) {
              var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this.context, {
                enableAlsoBought: false
              })); // listen price change

              product.$scope.on('price-change', function () {
                return _this.updateTotalPrice();
              }); // store the product object for later use

              _this.products.push(product);

              $productEl.data('productDetails', product);
            } // init foundation collapsible


            Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
              $context: $productEl
            }); // bind events

            $productEl.find('[data-also-bought-checkbox]').on('change', _this.onAlsoBoughtCheckboxChange.bind(_this, $productEl));
            $productEl.find('[data-options-collapsible]').on(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].open, _this.onOptionsOpen.bind(_this, $productEl));

            _this.updateTotalPrice();

            _this.updateAddSelectedToCartButton();
          });
        }
      }); // init parent product item

      var $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
      Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
        $context: $parentProductEl
      });
      $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl)); // listen parent product price change

      this.parentProductDetails.$scope.on('price-change', function () {
        return _this.updateTotalPrice();
      });
    }
  };

  _proto.updateTotalPrice = function updateTotalPrice() {
    var _this2 = this;

    // stop showing total price if require login
    if (this.config.requireLogin) {
      return;
    }

    var productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
      return $(el).val();
    });
    var priceById = Object.assign({}, this.productNodes.filter(function (node) {
      return node.prices && node.prices.price;
    }).reduce(function (_priceById, node) {
      var _node$entityId, _Object$assign;

      return Object.assign({}, _priceById, (_Object$assign = {}, _Object$assign[node.entityId] = (_node$entityId = {}, _node$entityId[_this2.config.includeTax ? 'with_tax' : 'without_tax'] = {
        value: node.prices.price.value,
        formatted: _this2.currencyFormat(node.prices.price.value)
      }, _node$entityId), _Object$assign));
    }, {}), this.products.filter(function (product) {
      return product.price && product.productId;
    }).reduce(function (_priceById, product) {
      var _Object$assign2;

      return Object.assign({}, _priceById, (_Object$assign2 = {}, _Object$assign2[product.productId] = product.price, _Object$assign2));
    }, {})); // merge productNodes & product details objects

    var products = Object.keys(priceById).map(function (productId) {
      return {
        productId: productId,
        price: priceById[productId]
      };
    });
    var total = [this.parentProductDetails].concat(products).filter(function (product) {
      return productIds.indexOf(product.productId) > -1;
    }).reduce(function (_ref3, _ref4) {
      var _ref3$with_tax = _ref3.with_tax,
          with_tax = _ref3$with_tax === void 0 ? 0 : _ref3$with_tax,
          _ref3$without_tax = _ref3.without_tax,
          without_tax = _ref3$without_tax === void 0 ? 0 : _ref3$without_tax,
          money_with_tax = _ref3.money_with_tax,
          money_without_tax = _ref3.money_without_tax;
      var price = _ref4.price;
      return {
        with_tax: price && price.with_tax ? with_tax + price.with_tax.value : null,
        without_tax: price && price.without_tax ? without_tax + price.without_tax.value : null,
        money_with_tax: money_with_tax || (price && price.with_tax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(price.with_tax.formatted, _this2.context.money) : null),
        money_without_tax: money_without_tax || (price && price.without_tax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(price.without_tax.formatted, _this2.context.money) : null)
      };
    }, {});
    var $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
    var $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);

    if (total.with_tax) {
      $('[data-price]', $withTax).html(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(total.with_tax, total.money_with_tax));
      $withTax.show();

      if (total.without_tax) {
        $('[data-tax-label]', $withTax).show();
      } else {
        $('[data-tax-label]', $withTax).hide();
      }
    } else {
      $withTax.hide();
    }

    if (total.without_tax) {
      $('[data-price]', $withoutTax).html(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(total.without_tax, total.money_without_tax));
      $withoutTax.show();

      if (total.with_tax) {
        $('[data-tax-label]', $withoutTax).show();
      } else {
        $('[data-tax-label]', $withoutTax).hide();
      }
    } else {
      $withoutTax.hide();
    }
  };

  _proto.onAddAllButtonClick = function onAddAllButtonClick(e) {
    e.preventDefault();
    $('[data-also-bought-checkbox]', this.$alsoBoughtEl).prop('checked', true).trigger('change');
  };

  _proto.onAddSelectedButtonClick = function onAddSelectedButtonClick(e) {
    e.preventDefault();
    this.addSelectedProductsToCart();
  };

  _proto.onAlsoBoughtCheckboxChange = function onAlsoBoughtCheckboxChange($productEl, e) {
    var $cb = $(e.target);
    var $toggle = $productEl.find('[data-options-collapsible]').first();
    var $label = $("label[for=\"" + $cb.attr('id') + "\"]", this.$alsoBoughtEl);
    var $thumb = $("[data-thumbnail-product-id=\"" + $productEl.data('productId') + "\"]", this.$alsoBoughtEl); // open (close) product options form if checkbox is checked (unchecked)

    if ($cb.prop('checked')) {
      $label.addClass('is-checked');
      $thumb.addClass('is-checked');

      if (!$toggle.hasClass('is-open')) {
        $toggle.trigger('click');
      }
    } else {
      $label.removeClass('is-checked');
      $thumb.removeClass('is-checked');

      if ($toggle.hasClass('is-open')) {
        $toggle.trigger('click');
      }
    }

    this.updateTotalPrice();
    this.updateAddSelectedToCartButton();
  };

  _proto.onOptionsOpen = function onOptionsOpen($productEl) {
    if ($productEl.data('productDetails')) {
      return;
    }

    this.loadProductDetails($productEl);
  };

  _proto.loadProductDetails = /*#__PURE__*/function () {
    var _loadProductDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($productEl) {
      var _this3 = this;

      var productId, $content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productId = $productEl.data('productId');
              $content = $productEl.find('[data-product-content]');
              $content.html(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(this.loadingTemplate, {
                loadingImg: this.context.loadingImg
              }, null, this.templateCustomTags));
              _context.next = 5;
              return new Promise(function (resolve) {
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, {
                  template: 'papathemes/also-bought/product-details'
                }, function (err, resp) {
                  if (err || !resp) {
                    return;
                  }

                  $content.html($(resp).html());
                  var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context, {
                    enableAlsoBought: false
                  }), null, true); // listen price change

                  product.$scope.on('price-change', function () {
                    return _this3.updateTotalPrice();
                  }); // store the product object for later use

                  _this3.products.push(product);

                  $productEl.data('productDetails', product);

                  _this3.updateTotalPrice();

                  resolve();
                });
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadProductDetails(_x) {
      return _loadProductDetails.apply(this, arguments);
    }

    return loadProductDetails;
  }();

  _proto.updateAddSelectedToCartButton = function updateAddSelectedToCartButton() {
    var $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
    var $checked = $all.filter(':checked');
    var $btns = $('[data-buttons]', this.$alsoBoughtEl);

    if ($checked.length > 0) {
      var str = $checked.length === $all.length ? $checked.length <= this.allNumberTexts.length ? this.allNumberTexts[$checked.length - 1] : $checked.length : $checked.length <= this.numberTexts.length ? this.numberTexts[$checked.length - 1] : $checked.length;
      var $btn = $('[data-add-selected]', this.$alsoBoughtEl);
      var text = String($btn.data('originalText') || $btn.html());
      $btn.data('originalText', text).html(text.replace('%str%', str));
      $btns.addClass('show');
    } else {
      $btns.removeClass('show');
    }
  } // No longer used. Keep for other third-party scripts compatibility.

  /**
   * Promise to Call after the parent product is added to add also-bought products.
   */
  ;

  _proto.parentProductAddedToCart =
  /*#__PURE__*/
  function () {
    var _parentProductAddedToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this4 = this;

      var promises, success;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // console.log('parent product added');
              promises = [];
              success = true;
              this.products.forEach(function (product) {
                if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                  promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _this4.addProductToCart(product);

                          case 3:
                            _context2.next = 5;
                            return delay(1000);

                          case 5:
                            _context2.next = 10;
                            break;

                          case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](0);
                            success = false;

                          case 10:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[0, 7]]);
                  })));
                }
              });
              _context3.next = 5;
              return promiseSerial(promises);

            case 5:
              return _context3.abrupt("return", success);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function parentProductAddedToCart() {
      return _parentProductAddedToCart.apply(this, arguments);
    }

    return parentProductAddedToCart;
  }();

  _proto.addSelectedProductsToCart = /*#__PURE__*/function () {
    var _addSelectedProductsToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var productIds, results, success, _yield$this$parentPro, err, resp, errorMsg, $productEls, i, productId, $productEl, product, _yield$product$addPro, _err, _resp, _errorMsg, $toggle, _results$, _product, _resp2, modal;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
                return $(el).val();
              });
              results = [];
              success = true; // add parent product to cart

              if (!(productIds.indexOf(this.parentProductDetails.productId) > -1)) {
                _context4.next = 20;
                break;
              }

              success = reportFormValidity(this.parentProductDetails.$form.get(0));

              if (!success) {
                _context4.next = 20;
                break;
              }

              _context4.next = 8;
              return this.parentProductDetails.addProductToCartAsync();

            case 8:
              _yield$this$parentPro = _context4.sent;
              err = _yield$this$parentPro[0];
              resp = _yield$this$parentPro[1];
              errorMsg = err || resp.data.error;

              if (!errorMsg) {
                _context4.next = 18;
                break;
              }

              _context4.next = 15;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                text: errorMsg,
                type: 'error'
              });

            case 15:
              success = false;
              _context4.next = 20;
              break;

            case 18:
              results.push({
                product: this.parentProductDetails,
                resp: resp
              });
              $("[data-also-bought-checkbox][value=\"" + this.parentProductDetails.productId + "\"]", this.$alsoBoughtEl).prop('checked', false).trigger('change');

            case 20:
              $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
              i = 0;

            case 22:
              if (!(i < productIds.length && success)) {
                _context4.next = 61;
                break;
              }

              productId = productIds[i];

              if (!(!productId || productId == this.parentProductDetails.productId)) {
                _context4.next = 26;
                break;
              }

              return _context4.abrupt("continue", 58);

            case 26:
              $productEl = $productEls.filter("[data-product-id=\"" + productId + "\"]");

              if (!($productEl.length === 0)) {
                _context4.next = 29;
                break;
              }

              return _context4.abrupt("continue", 58);

            case 29:
              if ($productEl.data('productDetails')) {
                _context4.next = 32;
                break;
              }

              _context4.next = 32;
              return this.loadProductDetails($productEl);

            case 32:
              product = $productEl.data('productDetails');

              if (product) {
                _context4.next = 35;
                break;
              }

              return _context4.abrupt("continue", 58);

            case 35:
              success = reportFormValidity(product.$form.get(0));

              if (!success) {
                _context4.next = 56;
                break;
              }

              _context4.next = 39;
              return product.addProductToCartAsync();

            case 39:
              _yield$product$addPro = _context4.sent;
              _err = _yield$product$addPro[0];
              _resp = _yield$product$addPro[1];
              _errorMsg = _err || _resp.data.error;

              if (!_errorMsg) {
                _context4.next = 49;
                break;
              }

              _context4.next = 46;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                text: _errorMsg,
                type: 'error'
              });

            case 46:
              success = false;
              _context4.next = 54;
              break;

            case 49:
              results.push({
                product: product,
                resp: _resp
              });
              $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');

              if (!(i < productIds.length - 1)) {
                _context4.next = 54;
                break;
              }

              _context4.next = 54;
              return delay(200);

            case 54:
              _context4.next = 58;
              break;

            case 56:
              // open the product form
              $toggle = $('[data-options-collapsible]', product.$scope);

              if (!$toggle.hasClass('is-open')) {
                $toggle.trigger('click');
              }

            case 58:
              i++;
              _context4.next = 22;
              break;

            case 61:
              if (results.length > 0) {
                _results$ = results[0], _product = _results$.product, _resp2 = _results$.resp; // Open preview modal and update content

                if (_product.previewModal) {
                  // Supermarket OBPS Mod
                  modal = Object(_theme_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
                  modal.close();

                  if (this.context.add_to_cart_popup !== 'hide') {
                    _product.previewModal.open();
                  }

                  _product.updateCartContent(_product.previewModal, _resp2.data.cart_item.id);
                } else {
                  // if no modal, redirect to the cart page
                  this.redirectTo(_resp2.data.cart_item.cart_url || this.context.urls.cart);
                }
              }

            case 62:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function addSelectedProductsToCart() {
      return _addSelectedProductsToCart.apply(this, arguments);
    }

    return addSelectedProductsToCart;
  }();

  _proto.addProductToCart = function addProductToCart(product) {
    return new Promise(function (resolve, reject) {
      var form = $('form[data-cart-item-add]', product.$scope).get(0);
      var $addToCartBtn = $('#form-action-addToCart', product.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage');
      var $errorBox = $('[data-error-box]', product.$scope);
      var $errorMsg = $('[data-error-message]', product.$scope);
      var $checkbox = $('[data-also-bought-checkbox]', product.$scope); // Do not do AJAX if browser doesn't support FormData

      if (window.FormData === undefined) {
        resolve();
      }

      $addToCartBtn.val(waitMessage).prop('disabled', true);
      product.$overlay.show(); // Add item to cart

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error; // console.log(form);

        $addToCartBtn.val(originalBtnVal).prop('disabled', false);
        product.$overlay.hide(); // Guard statement

        if (errorMessage) {
          // console.log('reject add product');
          $errorMsg.html(errorMessage);
          $errorBox.removeClass('u-hiddenVisually');

          if ($errorBox.length > 0) {
            scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default()($errorBox.get(0));
          }

          reject();
          return;
        } // console.log('resolve add product');


        $errorMsg.empty();
        $errorBox.addClass('u-hiddenVisually');
        $checkbox.prop('checked', false).trigger('change');
        resolve();
      });
    });
  };

  return AlsoBought;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/banner-utils */ "./assets/js/theme/common/utils/banner-utils.js");
/* harmony import */ var _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../papathemes/also-bought */ "./assets/js/papathemes/also-bought.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* harmony import */ var _papathemes_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../papathemes/utils */ "./assets/js/papathemes/utils.js");





function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // Supermarket






 // Papathemes - AlsoBought

 // papathemes-beautify

 // papathemes-beautify

 // papathemes-inhealth

var mediumMediaQueryList = Object(_common_media_query_list__WEBPACK_IMPORTED_MODULE_14__["default"])('medium'); // papathemes-beautify
// Supermarket - OBPS Mod

/* eslint-disable */

function shake($el, settings) {
  if (typeof settings === 'undefined') {
    settings = {};
  }

  if (typeof settings.interval === 'undefined') {
    settings.interval = 100;
  }

  if (typeof settings.distance === 'undefined') {
    settings.distance = 10;
  }

  if (typeof settings.times === 'undefined') {
    settings.times = 4;
  }

  if (typeof settings.complete === 'undefined') {
    settings.complete = function () {};
  }

  $el.css('position', 'relative');

  for (var iter = 0; iter < settings.times + 1; iter++) {
    $el.animate({
      left: iter % 2 === 0 ? settings.distance : settings.distance * -1
    }, settings.interval);
  }

  $el.animate({
    left: 0
  }, settings.interval, settings.complete);
}
/* eslint-enable */
// Supermarket: Fix Price not update when a product option is checked


function supermarketSerialize($form) {
  var assoc = $form.serializeArray().reduce(function (_assoc, _ref) {
    var name = _ref.name,
        value = _ref.value;
    _assoc[name] = value;
    return _assoc;
  }, {});
  return $.param(assoc);
}

var ProductDetails = /*#__PURE__*/function () {
  function ProductDetails($scopeArg, context, productAttributesData) {
    var _this = this;

    if (productAttributesData === void 0) {
      productAttributesData = {};
    }

    // Papathemes Also Bought MOD
    // Papathemes Also Bought MOD {{{
    var $scope = context.enableAlsoBought ? $scopeArg.find('[data-also-bought-parent-scope]') : $scopeArg;
    this.$productViewScope = $scopeArg; // }}}

    this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    this.$scope = $scope;
    this.context = context;
    this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__["default"]($('[data-image-gallery]', this.$scope));
    this.imageGallery.init();
    this.listenQuantityChange();
    this.initRadioAttributes();
    Object(_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document)); // Supermarket

    this.initCustomTabs(); // Papathemes - Supermarket

    _wishlist__WEBPACK_IMPORTED_MODULE_11__["default"].load(this.context);
    this.getTabRequests(); // Papathemes - AlsoBought

    if (context.enableAlsoBought) {
      try {
        var _ref2 = window.supermarketThemeExtraConfig || {},
            alsoBoughtOptions = _ref2.alsoBoughtOptions;

        this.alsoBought = new _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_13__["default"](this, alsoBoughtOptions);
      } catch (err) {
        console.error(err);
      }
    }

    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = ($productOptionsElement.html() || '').trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length; // papathemes-chiara edited for also-bought

    this.price = null;
    this.productId = $('input[name="product_id"]', this.$scope).val();
    this.$form = $form; // Papathemes - Supermarket: Fix click reviews link open tab

    $('a[href*="#tab-reviews"]', $scope).on('click', function (event) {
      if (!$(event.target).is('.tab-title')) {
        $('[data-tab] a[href="#tab-reviews"]', $scope).click().scrollTop(0);
      }
    });
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);

      _this.setProductVariant();
    });
    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    }); // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view

    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange($productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};

        _this.updateProductAttributes(attributesData);

        if (hasDefaultOptions) {
          _this.updateView(attributesData, attributesContent);
        } else {
          _this.updateDefaultAttributesForOOS(attributesData);
        }
      });
    } else {
      this.updateProductAttributes(productAttributesData);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    }

    $productOptionsElement.show();
    this.previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#previewModal')[0]; // Supermarket

    if (this.previewModal) {
      this.previewModal.$modal.addClass('preview-modal').addClass("preview-modal--" + context.add_to_cart_popup);

      if (context.add_to_cart_popup === 'mini') {
        // unbind open/close event of the original modal
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].open, this.previewModal.onModalOpen);
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].close, this.previewModal.onModalClose); // bind open/class event for mini preview modal

        this.previewModal.onModalOpen = this.onMiniPreviewModalOpen.bind(this.previewModal);
        this.previewModal.onModalClose = this.onMiniPreviewModalClose.bind(this.previewModal);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].open, this.previewModal.onModalOpen);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].close, this.previewModal.onModalClose);
      }
    } // papathemes-beautify


    this.initTabScrollToViewport();
    this.initGoToTab(); // Need for papathemes-mqpo + alsobought v2 compliance

    this.$scope.data('productDetailsInstance', this);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.emit('product-productdetails-init', this); // Chiara: dropdown color swatches

    if (this.context.swatch_option_display_type === 'dropdown' || this.context.swatch_option_display_type === 'both') {
      Promise.all(/*! import() */[__webpack_require__.e(18), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../../papathemes/dropdown-swatches */ "./assets/js/papathemes/dropdown-swatches.js")).then(function (module) {
        return module.default(_this, {
          hideOriginalSwatches: _this.context.swatch_option_display_type === 'dropdown'
        });
      });
    }
  } // papathemes-beautify


  var _proto = ProductDetails.prototype;

  _proto.initTabScrollToViewport = function initTabScrollToViewport() {
    var _this2 = this;

    var $body = $('body');
    var $quickView = this.$scope.closest('.quickView').first();
    $quickView.css('position', 'relative');
    var resumeStickyHeader;

    var scrollToView = function scrollToView(el) {
      var $target = $($(el).attr('href'), _this2.$scope).first();

      if ($quickView.length > 0) {
        var h = $quickView.scrollTop();
        var $el = $target;
        var i = 0;

        while (!$el.is('.quickView') && $el.length > 0 && i++ < 20) {
          h += $el.position().top;
          $el = $el.offsetParent();
        }

        $quickView.animate({
          scrollTop: h - 50
        }, 300);
      } else {
        $('html, body').animate({
          scrollTop: $target.offset().top - 50
        }, {
          duration: 300,
          // skip sticky header while scrolling to the tab content
          start: function start() {
            clearTimeout(resumeStickyHeader);
            $body.addClass('_skipCheckScrollUpStickyHeader');
          },
          complete: function complete() {
            return $('html, body').clearQueue();
          },
          always: function always() {
            clearTimeout(resumeStickyHeader);
            resumeStickyHeader = setTimeout(function () {
              return $body.removeClass('_skipCheckScrollUpStickyHeader');
            }, 200);
          }
        });
      }
    };

    $('.productView-description .tab', this.$scope).on('opened', function (event) {
      if (mediumMediaQueryList.matches) {
        scrollToView($(event.target).find('a').get(0));
      }
    });
  } // papathemes-beautify
  ;

  _proto.initGoToTab = function initGoToTab() {
    var _this3 = this;

    $('[data-gototab]', this.$scope).on('click', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var href = $el.attr('href');

      if (mediumMediaQueryList.matches) {
        var $target = _this3.$scope.find('[data-tab]').find("a[href=\"" + href + "\"").first();

        $target.trigger('click');
      } else {
        var _$target = _this3.$scope.find(href).first();

        Object(_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_15__["scrollTop"])(_$target.offset().top - 100);
      }
    });
  }
  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */
  ;

  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  };

  _proto.setProductVariant = function setProductVariant() {
    if (this.context.isAMP) {
      return;
    }

    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');

      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }

      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });

        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;

        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }

      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector('input:checked'); // papathemes-beautify edited

        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels ? checked.labels[0].innerText : $("label[for=" + checked.id + "]").first().text();

            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }

          if (type === 'swatch') {
            var _label = checked.labels ? checked.labels[0].children[0] : $("label[for=" + checked.id + "]").children().get(0);

            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }

          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }

          return;
        }

        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }

        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');

    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;

      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText;
        var card = $("[data-name=" + JSON.stringify(productName) + "]"); // Fixed by PapaThemes

        card.attr('data-product-variant', productVariant);
      }
    }
  }
  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */
  ;

  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock, .productView-info-name--stock, .productView-info-value--stock', $scope),
        // papathemes-beautify edited
        $input: $('[data-product-stock]', $scope),
        $badge: $('.productView-stockLabel', $scope) // papathemes-beautify

      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      mpn: {
        $label: $('dt.mpn-label', $scope),
        $value: $('[data-product-mpn]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }
  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */
  ;

  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  /**
   *
   * Handle product options changes
   *
   */
  ;

  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this4 = this;

    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val(); // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData

    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    } // Supermarket: display selected swatch title


    if ($changedOption.data('productAttributeLabel')) {
      $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html($changedOption.data('productAttributeLabel'));
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};

      _this4.updateProductAttributes(productAttributesData);

      _this4.updateView(productAttributesData, productAttributesContent);

      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    });
  };

  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.zoom_size
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */
      );
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.product_size
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */
      );
      var mainImageSrcset = this.context.product_image_responsive ? _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data) : '';
      this.imageGallery.setAlternateImage({
        // mainImageUrl: `${mainImageUrl}?imbypass=on`,
        // zoomImageUrl: `${zoomImageUrl}?imbypass=on`,
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }
  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */
  ;

  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this5 = this;

    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);

      var viewModel = _this5.getViewModel(_this5.$scope);

      var $input = viewModel.quantity.$input;
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
      } else if (qty > 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      } // update hidden input


      viewModel.quantity.$input.val(qty); // update text

      viewModel.quantity.$text.text(qty);
    }); // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when enter on quantity box won't decrease 1 unit
    // --------------------------------------------------------------------

    this.getViewModel(this.$scope).quantity.$input.on('keypress', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    }); // --------------------------------------------------------------------
  } // papathemes-chiara added for also-bought
  ;

  _proto.addProductToCartAsync = function addProductToCartAsync() {
    var _this6 = this;

    return new Promise(function (resolve) {
      var $form = $('form[data-cart-item-add]', _this6.$scope);
      var form = $form.get(0);
      var $addToCartBtn = $('#form-action-addToCart', _this6.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData

      if (window.FormData === undefined) {
        return;
      }

      $addToCartBtn.val(waitMessage).prop('disabled', true);

      _this6.$overlay.show(); // Add item to cart


      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(_this6.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, response) {
          var errorMessage;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // AlsoBought Mod
                  errorMessage = err || response.data.error;
                  $addToCartBtn.val(originalBtnVal).prop('disabled', false);

                  _this6.$overlay.hide();

                  resolve([err, response]);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
  }
  /**
   *
   * Add a product to cart
   *
   */
  ;

  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this7 = this;

    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData

    if (window.FormData === undefined) {
      return;
    } // Supermarket:
    // Somehow Safari iOS doesn't work right with FormData,
    // so we submit the form as normal.


    if (this.context.isAMP) {
      $(form).attr('target', '_top');
      return;
    } // Prevent default


    event.preventDefault();
    $addToCartBtn.val(waitMessage).prop('disabled', true);
    this.$overlay.show(); // Add item to cart

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, response) {
        var errorMessage, tmp, modal, _modal;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                errorMessage = err || response.data.error;
                $addToCartBtn.val(originalBtnVal).prop('disabled', false);

                _this7.$overlay.hide(); // Guard statement


                if (!errorMessage) {
                  _context2.next = 7;
                  break;
                }

                // Strip the HTML from the error message
                tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;
                return _context2.abrupt("return", Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["showAlertModal"])(tmp.textContent || tmp.innerText));

              case 7:
                if (!_this7.context.redirect_cart) {
                  _context2.next = 10;
                  break;
                }

                _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);

                return _context2.abrupt("return");

              case 10:
                if (!(_this7.context.add_to_cart_popup === 'cart')) {
                  _context2.next = 14;
                  break;
                }

                // close quick-view modal
                modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();

                if (modal) {
                  modal.close();
                }

                return _context2.abrupt("return", Object(_papathemes_utils__WEBPACK_IMPORTED_MODULE_16__["openCartPreview"])(response.data.cart_item.id));

              case 14:
                // Open preview modal and update content
                if (_this7.previewModal) {
                  // Supermarket OBPS Mod
                  _modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();

                  _modal.close();

                  if (_this7.context.add_to_cart_popup !== 'hide') {
                    _this7.previewModal.open();
                  }

                  _this7.updateCartContent(_this7.previewModal, response.data.cart_item.id);
                } else {
                  _this7.$overlay.show(); // if no modal, redirect to the cart page


                  _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
                }

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */
  ;

  _proto.getCartContent = function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, onComplete);
  }
  /**
   * Redirect to url
   *
   * @param {String} url
   */
  ;

  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }
  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */
  ;

  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete) {
    var _this8 = this;

    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }

      modal.updateContent(response);

      _this8.applyModalAutoClose(modal); // Supermarket
      // Update cart counter


      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);

      if (onComplete) {
        onComplete(response);
      } // Supermarket - OBPS Mod


      shake($('.navUser-item--cart > .navUser-action'));
    });
  }
  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */
  ;

  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message', this.$scope); // Papathemes fix missing $scope

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */
  ;

  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted); // papathemes-beautify

      if (price.rrp_with_tax || price.non_sale_price_with_tax) {
        viewModel.$priceWithTax.addClass('_hasSale');
      } else {
        viewModel.$priceWithTax.removeClass('_hasSale');
      }
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted); // papathemes-beautify

      if (price.rrp_without_tax || price.non_sale_price_without_tax) {
        viewModel.$priceWithoutTax.addClass('_hasSale');
      } else {
        viewModel.$priceWithoutTax.removeClass('_hasSale');
      }
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }

    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    } // Set variation_id if it exists for adding to wishlist


    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    } // If SKU is available


    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    } // If UPC is available


    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    } // If MPN is available


    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else {
      if (viewModel.mpn.$value.data('originalMpn')) {
        viewModel.mpn.$value.text(viewModel.mpn.$value.data('originalMpn'));
        viewModel.mpn.$label.show();
      } else {
        viewModel.mpn.$label.hide();
        viewModel.mpn.$value.text('');
      }
    } // if stock view is on (CP settings)


    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } // papathemes-beautify: show / hide stock badge


    if (data.instock && data.purchasable) {
      viewModel.stock.$badge.removeClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('instockMessage'));
      });
    } else {
      // viewModel.stock.$badge.addClass('_outstock').text(data.stock_message || data.purchasing_message);
      viewModel.stock.$badge.addClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('outstockMessage'));
      });
    }

    this.updateDefaultAttributesForOOS(data); // If Bulk Pricing rendered HTML is available

    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }

    if (data.purchasable) {
      this.$scope.find('._addToCartVisibility').filter(':hidden').show();
    } else {
      this.$scope.find('._addToCartVisibility').hide();
    }
  };

  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);

    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  }
  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this9 = this;

    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")"; // papathemes-chiara edited for also-bought

    this.price = data.price;
    this.$scope.trigger('price-change');
    this.showProductImage(data.image);

    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }

    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);

      if (inStockIds.indexOf(attrId) !== -1) {
        _this9.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this9.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
    this.$scope.trigger('updateProductAttributes'); // papathemes-beautify for dropdown-swatches
  };

  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  };

  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();

    if (behavior === 'hide_option') {
      $attribute.toggleOption(false); // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)

      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };

  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };

  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };

  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  /**
   * Allow radio buttons to get deselected
   */
  ;

  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this10 = this;

    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio); // Only bind to click once

      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }

          _this10.initRadioAttributes();
        });
      }

      $radio.attr('data-state', $radio.prop('checked'));
    });
  }
  /**
   * Check for fragment identifier in URL requesting a specific tab
   */
  ;

  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);

      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }
  /**
   * Init custom tabs by parsing product description
   * (Added by Papathemes - Supermarket)
   */
  ;

  _proto.initCustomTabs = function initCustomTabs() {
    var $customTabs = $('[data-custom-tab]', this.$scope);

    if ($customTabs.length === 0) {
      return;
    }

    var $tabs = $('.productView-description > .tabs', this.$scope);
    var $tabsContent = $('.productView-description > .tabs-contents', this.$scope);

    if ($tabs.length === 0 || $tabsContent.length === 0) {
      return;
    }

    $customTabs.each(function (i, el) {
      var $el = $(el);
      var $title = $el.find('[data-custom-tab-title]');
      var title = $title.html();
      var expand = $title.data('expand');

      if (!expand) {
        expand = 'View All';
      }

      var close = $title.data('close');

      if (!close) {
        close = 'Close';
      }

      $title.remove();
      var content = $el.html();
      $el.remove();
      $tabs.append("<li class=\"tab tab--custom tab--custom-" + i + "\"><a class=\"tab-title\" href=\"#tab-custom-" + i + "\">" + title + "</a></li>");
      $tabsContent.append("<div class=\"tab-content tab-content--custom tab-content--custom-" + i + "\" id=\"tab-custom-" + i + "\" data-papathemes-mobile-collapse><h2 class=\"beautify__page-heading\">" + title + "</h2><div class=\"productView-custom-tabContent papathemes-mobile-collapse-content\" data-papathemes-mobile-collapse-content>" + content + "</div><a href=\"#\" class=\"papathemes-mobile-collapse-handle\" data-papathemes-mobile-collapse-handle><span class=\"on\">" + expand + "</span><span class=\"off\">" + close + "</span></a></div>");
    });
  } // Papathemes - Supermarket
  ;

  _proto.onMiniPreviewModalOpen = function onMiniPreviewModalOpen() {
    $('body').addClass('has-activeModal--miniPreview');
  } // Papathemes - Supermarket
  ;

  _proto.onMiniPreviewModalClose = function onMiniPreviewModalClose() {
    $('body').removeClass('has-activeModal--miniPreview');

    if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
      window.clearInterval(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
  } // Papathemes - Supermarket
  ;

  _proto.applyModalAutoClose = function applyModalAutoClose(modal) {
    var $autoCloseEl = modal.$modal.find('[data-auto-close]');

    if ($autoCloseEl.length > 0) {
      var sec = $autoCloseEl.data('autoClose') || 5;
      var $count = $autoCloseEl.find('.count');
      $count.html(sec);
      modal.autoCloseTimer = window.setInterval(function () {
        // eslint-disable-line
        if (sec > 1) {
          sec--;
          $count.html(sec);
        } else {
          window.clearInterval(modal.autoCloseTimer);
          modal.autoCloseTimer = null; // eslint-disable-line

          modal.close();
        }
      }, 1000);
    }
  };

  return ProductDetails;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/banner-utils.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/common/utils/banner-utils.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

var bannerUtils = {
  dispatchProductBannerEvent: function dispatchProductBannerEvent(productAttributes) {
    if (!productAttributes.price || _ie_helpers__WEBPACK_IMPORTED_MODULE_0__["isBrowserIE"]) return;
    var price = 0;

    if (!productAttributes.price.price_range) {
      if (productAttributes.price.without_tax) {
        price = productAttributes.price.without_tax.value;
      }

      if (productAttributes.price.with_tax) {
        price = productAttributes.price.with_tax.value;
      }
    }

    var evt = new CustomEvent('bigcommerce.productpricechange', {
      detail: {
        amount: price
      }
    });
    window.dispatchEvent(evt);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bannerUtils);

/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/*! exports provided: isBrowserIE, convertIntoArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserIE", function() { return isBrowserIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIntoArray", function() { return convertIntoArray; });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGallery; });
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baguettebox */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baguettebox__WEBPACK_IMPORTED_MODULE_4__);


// ============================================================================
// PAPATHEMES SARAHMARKET CUSTOMIZATION:
// - Using slick carousel for image thumbnails.
// - Using baguetteBox for image lightbox.
// ============================================================================




var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainCarousel = $gallery.find('[data-image-gallery-main]');
    this.$navCarousel = $gallery.find('[data-image-gallery-nav]');
    var $defSlide = this.$mainCarousel.find('.slick-current');
    var defSlideIdx = $defSlide.parent().children().index($defSlide);
    this.currentSlideIndex = defSlideIdx;

    var uid = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('');

    if (this.$mainCarousel.attr('id') === '') {
      this.$mainCarousel.attr('id', "imageGalleryMainCarousel" + uid);
    }

    if (this.$navCarousel.attr('id') === '') {
      this.$navCarousel.attr('id', "imageGalleryNavCarousel" + uid);
    }
  }

  var _proto = ImageGallery.prototype;

  _proto.init = function init() {
    this.bindEvents();
  };

  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(imgObj);
    this.swapMainImage();
  };

  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(this.currentImage);
    }

    this.setMainImage(imgObj);
  };

  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };

  _proto.setActiveThumb = function setActiveThumb() {
    var i = this.$mainCarousel.slick('slickCurrentSlide');
    this.$navCarousel.find('.slick-slide').removeClass('slick-current').eq(i).addClass('slick-current');
  };

  _proto.swapMainImage = function swapMainImage() {
    /*
    try {
        this.$mainCarousel.slick('slickGoTo', this.currentSlideIndex);
    } catch (e) {
        // ignore
    }
    */
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.slick-current', this.$navCarousel).removeClass('slick-current');
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('img').attr('src', this.currentImage.mainImageUrl);
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('img').attr('srcset', this.currentImage.mainImageSrcset);
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('a').attr('href', this.currentImage.zoomImageUrl); // empty lightbox contents of current galley so that it will be created again

    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#baguetteBox-slider').html('');
    baguettebox__WEBPACK_IMPORTED_MODULE_4___default.a.run("#" + this.$mainCarousel.attr('id')); // init again
  };

  _proto.bindEvents = function bindEvents() {
    var _this = this;

    this.$mainCarousel.on('init', function () {
      var $img = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-slick-index=\"" + _this.currentSlideIndex + "\"] img", _this.$mainCarousel);
      var $a = $img.closest('a');
      _this.currentImage = {
        mainImageUrl: $a.data('originalImg') || $img.attr('src'),
        zoomImageUrl: $a.data('originalZoom'),
        mainImageSrcset: $a.data('originalSrcset'),
        $selectedThumb: null
      };
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      _this.currentSlideIndex = nextSlide;
      var $img = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-slick-index=\"" + nextSlide + "\"] img", _this.$mainCarousel);
      var $a = $img.closest('a');
      _this.currentImage = {
        mainImageUrl: $a.data('originalImg') || $img.attr('src'),
        zoomImageUrl: $a.data('originalZoom'),
        mainImageSrcset: $a.data('originalSrcset'),
        $selectedThumb: null
      };

      _this.swapMainImage();

      _this.savedImage = null;
    }).on('afterChange', function () {
      _this.setActiveThumb();
    }).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      initialSlide: this.currentSlideIndex,
      asNavFor: this.$navCarousel.length > 0 ? "#" + this.$navCarousel.attr('id') : null,
      swipe: false,
      arrows: false,
      responsive: [{
        breakpoint: 800,
        settings: {
          swipe: true
        }
      }]
    }); // setTimeout(() => {

    this.$navCarousel.on('setPosition', function () {
      try {
        var slick = _this.$navCarousel.slick('getSlick');

        if (slick.options.slidesToShow >= slick.slideCount) {
          _this.$navCarousel.find('.slick-track').css('transform', 'none');
        }
      } catch (e) {// ignore
      }
    });
    this.$navCarousel.on('init', function () {
      _this.$navCarousel.find('.slick-slide').on('keypress', function (event) {
        var keyCode = event.keyCode || event.which;

        if (keyCode === 13 || keyCode === 32) {
          event.preventDefault();

          _this.$mainCarousel.slick('slickGoTo', jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).data('slickIndex'));
        }
      });
    });

    if (this.$navCarousel.data('imageGalleryNavHorizontal')) {
      this.$navCarousel.slick({
        slidesToShow: parseInt(this.$navCarousel.data('image-gallery-nav-slides'), 10),
        slidesToScroll: 1,
        infinite: false,
        initialSlide: this.currentSlideIndex,
        asNavFor: "#" + this.$mainCarousel.attr('id'),
        arrows: true,
        focusOnSelect: true,
        centerPadding: 0,
        adaptiveHeight: true,
        // variableWidth: true,
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 550,
          settings: {// arrows: false,
          }
        }]
      });
    } else {
      this.$navCarousel.slick({
        slidesToShow: parseInt(this.$navCarousel.data('image-gallery-nav-slides'), 10),
        slidesToScroll: 1,
        infinite: false,
        initialSlide: this.currentSlideIndex,
        asNavFor: "#" + this.$mainCarousel.attr('id'),
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        centerPadding: 0,
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 550,
          settings: {
            vertical: false,
            verticalSwiping: false // slidesToShow: 1,
            // arrows: false,
            // variableWidth: true,

          }
        }]
      });
    } // }, 200);


    baguettebox__WEBPACK_IMPORTED_MODULE_4___default.a.run("#" + this.$mainCarousel.attr('id'));
  };

  return ImageGallery;
}();



/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WishList; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);

  function WishList(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }
  /**
   * Creates a confirm box before deleting all wish lists
   */


  var _proto = WishList.prototype;

  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;

    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);

      if (confirmed) {
        return true;
      }

      event.preventDefault();
    });
  };

  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;

    this.addWishlistValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: 'You must enter a wishlist name.'
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();

      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');

    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }

    this.wishlistDeleteConfirm();
  };

  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9hbHNvLWJvdWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvd2lzaGxpc3QuanMiXSwibmFtZXMiOlsiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInByb21pc2VTZXJpYWwiLCJmdW5jcyIsInJlZHVjZSIsInByb21pc2UiLCJmdW5jIiwidGhlbiIsInJlc3VsdCIsIkFycmF5IiwicHJvdG90eXBlIiwiY29uY2F0IiwiYmluZCIsInJlcG9ydEZvcm1WYWxpZGl0eSIsImZvcm0iLCJ2YWxpZCIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIkFsc29Cb3VnaHQiLCJwYXJlbnRQcm9kdWN0RGV0YWlscyIsInRodW1ibmFpbFRlbXBsYXRlIiwicHJvZHVjdERldGFpbHNUZW1wbGF0ZSIsInByaWNlVGVtcGxhdGUiLCJwcmljZVJhbmdlVGVtcGxhdGUiLCJ0YXhMYWJlbFRlbXBsYXRlIiwicmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlIiwicmV0YWlsUHJpY2VUZW1wbGF0ZSIsImxvZ2luUHJpY2VUZW1wbGF0ZSIsIm9wdGlvbnNUb2dnbGVUZW1wbGF0ZSIsInNpbXBsZUZvcm1UZW1wbGF0ZSIsImxvYWRpbmdUZW1wbGF0ZSIsInRlbXBsYXRlQ3VzdG9tVGFncyIsImNvbnRleHQiLCJudW1iZXJUZXh0cyIsInR4dEFsc29Cb3VnaHROdW1iZXJBcnJheSIsInNwbGl0IiwiYWxsTnVtYmVyVGV4dHMiLCJ0eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkiLCIkYWxzb0JvdWdodEVsIiwiJCIsIiRwcm9kdWN0Vmlld1Njb3BlIiwiY29uZmlnIiwiZGF0YSIsIm1vbmV5V2l0aFRheCIsInNhbXBsZVByaWNlV2l0aFRheCIsImV4dHJhY3RNb25leSIsIm1vbmV5IiwibW9uZXlXaXRob3V0VGF4Iiwic2FtcGxlUHJpY2VXaXRob3V0VGF4IiwibW9uZXlGYWxsYmFjayIsImFjdGl2ZUN1cnJlbmN5Q29kZSIsImRlZmF1bHRDdXJyZW5jeUNvZGUiLCJnZXQiLCJfbW9uZXkiLCJlbCIsInRleHQiLCJjdXJyZW5jeV90b2tlbiIsInByb2R1Y3RzIiwicHJvZHVjdE5vZGVzIiwib25BZGRBbGxCdXR0b25DbGljayIsIm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayIsInRodW1iU2l6ZSIsImFsc29ib3VnaHRfdGh1bWJuYWlsX3NpemUiLCJ0aHVtYm5haWxXaWR0aCIsIk51bWJlciIsInRodW1ibmFpbEhlaWdodCIsInJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzIiwib24iLCJjdXJyZW5jeUZvcm1hdCIsInZhbHVlIiwiaW5jbHVkZVRheCIsIiR0aHVtYm5haWxzIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiZGV0YWlscyIsInRodW1ibmFpbCIsIiRwcm9kdWN0RWxzIiwibm90IiwicHJvZHVjdElkcyIsIm1hcCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYWpheCIsInVybCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcXVpcmVMb2dpbiIsInZhcmlhYmxlcyIsInByb2R1Y3RzQ291bnQiLCJjdXJyZW5jeUNvZGUiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImhlYWRlcnMiLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcCIsInNpdGUiLCJlZGdlcyIsImZvckVhY2giLCJub2RlIiwiYXZhaWxhYmlsaXR5VjIiLCJzdGF0dXMiLCJwdXNoIiwiaWQiLCJlbnRpdHlJZCIsIm5hbWUiLCJwYXRoIiwiYWRkVG9DYXJ0VXJsIiwicXR5IiwibWluUHVyY2hhc2VRdWFudGl0eSIsImxvYWRpbmdJbWciLCJpbWciLCJkZWZhdWx0SW1hZ2UiLCJkZWZhdWx0UHJvZHVjdEltYWdlIiwiJHByb2R1Y3RFbCIsImZpbHRlciIsInRheENsYXNzUHJlZml4IiwidGF4RGF0YVByZWZpeCIsInByaWNlTGFiZWwiLCJwZHBfcHJpY2VfbGFiZWwiLCJzYWxlUHJpY2VMYWJlbCIsInBkcF9zYWxlX3ByaWNlX2xhYmVsIiwibm9uU2FsZVByaWNlTGFiZWwiLCJwZHBfbm9uX3NhbGVfcHJpY2VfbGFiZWwiLCJyZXRhaWxQcmljZUxhYmVsIiwicGRwX3JldGFpbF9wcmljZV9sYWJlbCIsImNob29zZU9wdGlvbnNUeHQiLCJsb2dpbkZvclByaWNlVHh0IiwibG9naW5VcmwiLCJjaGVja2VkIiwiYWxzb2JvdWdodF9jaGVja2VkIiwicHJpY2UiLCJwcmljZXMiLCJmb3JtYXR0ZWQiLCJub25TYWxlUHJpY2UiLCJiYXNlUHJpY2UiLCJyZXRhaWxQcmljZSIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJyZXRhaWxQcmljZVJhbmdlIiwibG9naW5QcmljZUh0bWwiLCJNdXN0YWNoZSIsInJlbmRlciIsInRheExhYmVsSHRtbCIsInNob3dUYXhMYWJlbCIsInRpdGxlIiwiaW5jbHVkaW5nVGF4VHh0IiwiZXhjbHVkaW5nVGF4VHh0IiwicHJpY2VXaXRoVGF4VHh0IiwicHJpY2VXaXRob3V0VGF4VHh0IiwicmV0YWlsUHJpY2VSYW5nZUh0bWwiLCJyZXRhaWxQcmljZUh0bWwiLCJwcmljZVJhbmdlSHRtbCIsIm9wdGlvbnNUb2dnbGVIdG1sIiwicHJvZHVjdE9wdGlvbnMiLCJwcmljZUh0bWwiLCJmb3JtSHRtbCIsImRldGFpbHNIdG1sIiwidGh1bWJuYWlsSHRtbCIsImFwcGVuZCIsInByb2R1Y3QiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCIkc2NvcGUiLCJ1cGRhdGVUb3RhbFByaWNlIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGNvbnRleHQiLCJmaW5kIiwib25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIm9wZW4iLCJvbk9wdGlvbnNPcGVuIiwidXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24iLCIkcGFyZW50UHJvZHVjdEVsIiwidmFsIiwicHJpY2VCeUlkIiwiX3ByaWNlQnlJZCIsInByb2R1Y3RJZCIsIk9iamVjdCIsImtleXMiLCJ0b3RhbCIsImluZGV4T2YiLCJ3aXRoX3RheCIsIndpdGhvdXRfdGF4IiwibW9uZXlfd2l0aF90YXgiLCJtb25leV93aXRob3V0X3RheCIsIiR3aXRoVGF4IiwiJHdpdGhvdXRUYXgiLCJodG1sIiwic2hvdyIsImhpZGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidHJpZ2dlciIsImFkZFNlbGVjdGVkUHJvZHVjdHNUb0NhcnQiLCIkY2IiLCJ0YXJnZXQiLCIkdG9nZ2xlIiwiZmlyc3QiLCIkbGFiZWwiLCJhdHRyIiwiJHRodW1iIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImxvYWRQcm9kdWN0RGV0YWlscyIsIiRjb250ZW50IiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwiJGFsbCIsIiRjaGVja2VkIiwiJGJ0bnMiLCJzdHIiLCIkYnRuIiwiU3RyaW5nIiwicmVwbGFjZSIsInBhcmVudFByb2R1Y3RBZGRlZFRvQ2FydCIsInByb21pc2VzIiwiYWRkUHJvZHVjdFRvQ2FydCIsInJlc3VsdHMiLCIkZm9ybSIsImFkZFByb2R1Y3RUb0NhcnRBc3luYyIsImVycm9yTXNnIiwiZXJyb3IiLCJzd2FsIiwidHlwZSIsImkiLCJwcmV2aWV3TW9kYWwiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsImNsb3NlIiwiYWRkX3RvX2NhcnRfcG9wdXAiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsInJlZGlyZWN0VG8iLCJjYXJ0X3VybCIsInVybHMiLCJjYXJ0IiwicmVqZWN0IiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCIkZXJyb3JCb3giLCIkZXJyb3JNc2ciLCIkY2hlY2tib3giLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsInJlc3BvbnNlIiwiZXJyb3JNZXNzYWdlIiwic2Nyb2xsVG9FbGVtZW50IiwiZW1wdHkiLCJtZWRpdW1NZWRpYVF1ZXJ5TGlzdCIsIm1lZGlhUXVlcnlMaXN0RmFjdG9yeSIsInNoYWtlIiwiJGVsIiwic2V0dGluZ3MiLCJpbnRlcnZhbCIsImRpc3RhbmNlIiwidGltZXMiLCJjb21wbGV0ZSIsImNzcyIsIml0ZXIiLCJhbmltYXRlIiwibGVmdCIsInN1cGVybWFya2V0U2VyaWFsaXplIiwiYXNzb2MiLCJzZXJpYWxpemVBcnJheSIsIl9hc3NvYyIsInBhcmFtIiwiJHNjb3BlQXJnIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiaW1hZ2VHYWxsZXJ5IiwiSW1hZ2VHYWxsZXJ5IiwiaW5pdCIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImZvdW5kYXRpb24iLCJkb2N1bWVudCIsImluaXRDdXN0b21UYWJzIiwiV2lzaGxpc3QiLCJsb2FkIiwiZ2V0VGFiUmVxdWVzdHMiLCJzdXBlcm1hcmtldFRoZW1lRXh0cmFDb25maWciLCJhbHNvQm91Z2h0T3B0aW9ucyIsImFsc29Cb3VnaHQiLCJjb25zb2xlIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJldmVudCIsImlzIiwiY2xpY2siLCJzY3JvbGxUb3AiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsIiRwcm9kdWN0SWQiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJiYW5uZXJVdGlscyIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50IiwibW9kYWxGYWN0b3J5IiwiJG1vZGFsIiwib2ZmIiwiTW9kYWxFdmVudHMiLCJvbk1vZGFsT3BlbiIsIm9uTW9kYWxDbG9zZSIsIm9uTWluaVByZXZpZXdNb2RhbE9wZW4iLCJvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZSIsImluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0IiwiaW5pdEdvVG9UYWIiLCJob29rcyIsImVtaXQiLCJzd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSIsIm1vZHVsZSIsImRlZmF1bHQiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlcyIsIiRib2R5IiwiJHF1aWNrVmlldyIsImNsb3Nlc3QiLCJyZXN1bWVTdGlja3lIZWFkZXIiLCJzY3JvbGxUb1ZpZXciLCIkdGFyZ2V0IiwiaCIsInBvc2l0aW9uIiwidG9wIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0IiwiZHVyYXRpb24iLCJzdGFydCIsImNsZWFyVGltZW91dCIsImNsZWFyUXVldWUiLCJhbHdheXMiLCJtYXRjaGVzIiwiY3VycmVudFRhcmdldCIsImhyZWYiLCJmb3JtRGF0YSIsImtleSIsIkZpbGUiLCJzaXplIiwiZGVsZXRlIiwiaXNBTVAiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwiZWFjaCIsImluZGV4Iiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwieCIsImpvaW4iLCJsYWJlbCIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJnZXRWaWV3TW9kZWwiLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRiYWRnZSIsInNrdSIsIiR2YWx1ZSIsInVwYyIsIm1wbiIsInF1YW50aXR5IiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiaW1hZ2UiLCJ6b29tSW1hZ2VVcmwiLCJ0b29scyIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0Iiwiem9vbV9zaXplIiwibWFpbkltYWdlVXJsIiwicHJvZHVjdF9zaXplIiwibWFpbkltYWdlU3Jjc2V0IiwicHJvZHVjdF9pbWFnZV9yZXNwb25zaXZlIiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCJ2aWV3TW9kZWwiLCJxdWFudGl0eU1pbiIsInBhcnNlSW50IiwicXVhbnRpdHlNYXgiLCJrZXlDb2RlIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInNob3dBbGVydE1vZGFsIiwidGV4dENvbnRlbnQiLCJyZWRpcmVjdF9jYXJ0Iiwib3BlbkNhcnRQcmV2aWV3IiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInBhcmFtcyIsInN1Z2dlc3QiLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwiZ2V0Q29udGVudCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwidXBkYXRlQ29udGVudCIsImFwcGx5TW9kYWxBdXRvQ2xvc2UiLCIkY2FydFF1YW50aXR5IiwiJGNhcnRDb3VudGVyIiwic2hvd01lc3NhZ2VCb3giLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInVwZGF0ZVByaWNlVmlldyIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJzYXZlZCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJpbnN0b2NrIiwicHVyY2hhc2FibGUiLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJyYWRpbyIsIiRyYWRpbyIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJzaWJsaW5ncyIsIiRjdXN0b21UYWJzIiwiJHRhYnMiLCIkdGFic0NvbnRlbnQiLCIkdGl0bGUiLCJleHBhbmQiLCJyZW1vdmUiLCJhdXRvQ2xvc2VUaW1lciIsImNsZWFySW50ZXJ2YWwiLCIkYXV0b0Nsb3NlRWwiLCJzZWMiLCIkY291bnQiLCJzZXRJbnRlcnZhbCIsImlzQnJvd3NlcklFIiwicHJpY2VfcmFuZ2UiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImFtb3VudCIsImRpc3BhdGNoRXZlbnQiLCJkb2N1bWVudE1vZGUiLCJjb252ZXJ0SW50b0FycmF5IiwiY29sbGVjdGlvbiIsInNsaWNlIiwiY2FsbCIsIiRnYWxsZXJ5IiwiJG1haW5DYXJvdXNlbCIsIiRuYXZDYXJvdXNlbCIsIiRkZWZTbGlkZSIsImRlZlNsaWRlSWR4IiwiY3VycmVudFNsaWRlSW5kZXgiLCJ1aWQiLCJiaW5kRXZlbnRzIiwic2V0TWFpbkltYWdlIiwiaW1nT2JqIiwiY3VycmVudEltYWdlIiwic3dhcE1haW5JbWFnZSIsInNhdmVkSW1hZ2UiLCJzZXRBY3RpdmVUaHVtYiIsInNsaWNrIiwiZXEiLCJiYWd1ZXR0ZUJveCIsInJ1biIsIiRpbWciLCIkYSIsIiRzZWxlY3RlZFRodW1iIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImFzTmF2Rm9yIiwic3dpcGUiLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNsaWRlQ291bnQiLCJ3aGljaCIsImZvY3VzT25TZWxlY3QiLCJjZW50ZXJQYWRkaW5nIiwiYWRhcHRpdmVIZWlnaHQiLCJsYXp5TG9hZCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwiV2lzaExpc3QiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJjb25maXJtIiwid2lzaGxpc3REZWxldGUiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIm9uUmVhZHkiLCIkYWRkV2lzaExpc3RGb3JtIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxvSjs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxDQUFlQyxFQUFmLEVBQW1CO0VBQ2YsT0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztJQUFBLE9BQUlDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQWQ7RUFBQSxDQUFuQixDQUFQO0FBQ0gsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0ksYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7RUFDMUIsT0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQ0gsVUFBQ0MsT0FBRCxFQUFVQyxJQUFWO0lBQUEsT0FBbUJELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQUFDLE1BQU07TUFBQSxPQUFJRixJQUFJLEdBQUdDLElBQVAsQ0FBWUUsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsSUFBdkIsQ0FBNEJKLE1BQTVCLENBQVosQ0FBSjtJQUFBLENBQW5CLENBQW5CO0VBQUEsQ0FERyxFQUVIVCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FGRyxDQUFQO0FBSUg7O0FBRUQsU0FBU2Esa0JBQVQsQ0FBNEJDLElBQTVCLEVBQWtDO0VBQzlCLElBQUlDLEtBQUssR0FBRyxJQUFaOztFQUNBLElBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRSxhQUFqQixFQUFnQztJQUM1QkQsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGFBQUwsRUFBUjs7SUFDQSxJQUFJLENBQUNELEtBQUwsRUFBWTtNQUNSLElBQUlELElBQUksQ0FBQ0csY0FBVCxFQUF5QjtRQUNyQkgsSUFBSSxDQUFDRyxjQUFMO01BQ0gs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QyxnQkFBZ0IsR0FBRzdoQixDQUFDLENBQUMsZ0JBQUQsQ0FBMUI7O0lBRUEsSUFBSTZoQixnQkFBZ0IsQ0FBQ3BmLE1BQXJCLEVBQTZCO01BQ3pCLEtBQUt3ZSw2QkFBTCxDQUFtQ1ksZ0JBQW5DO0lBQ0g7O0lBRUQsS0FBS2hCLHFCQUFMO0VBQ0gsQzs7O0VBOURpQ2lCLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay42LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8sIHsgaW5kZXhPZiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSwgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgc2Nyb2xsVG9FbGVtZW50IGZyb20gJ3Njcm9sbC10by1lbGVtZW50JztcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0LCBleHRyYWN0TW9uZXkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuLy9cbi8vIGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3Rhc2svZGVsYXktcHJvbWlzZVxuLy9cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG4vL1xuLy8gaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9mdW5jdGlvbmFsLWphdmFzY3JpcHQtcmVzb2x2aW5nLXByb21pc2VzLXNlcXVlbnRpYWxseS03YWFjMThjNDQzMWVcbi8vXG5mdW5jdGlvbiBwcm9taXNlU2VyaWFsKGZ1bmNzKSB7XG4gICAgcmV0dXJuIGZ1bmNzLnJlZHVjZShcbiAgICAgICAgKHByb21pc2UsIGZ1bmMpID0+IHByb21pc2UudGhlbihyZXN1bHQgPT4gZnVuYygpLnRoZW4oQXJyYXkucHJvdG90eXBlLmNvbmNhdC5iaW5kKHJlc3VsdCkpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFtdKSxcbiAgICApO1xufVxuXG5mdW5jdGlvbiByZXBvcnRGb3JtVmFsaWRpdHkoZm9ybSkge1xuICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgaWYgKGZvcm0gJiYgZm9ybS5jaGVja1ZhbGlkaXR5KSB7XG4gICAgICAgIHZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtLnJlcG9ydFZhbGlkaXR5KSB7XG4gICAgICAgICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHNvQm91Z2h0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnRQcm9kdWN0RGV0YWlscywge1xuICAgICAgICB0aHVtYm5haWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LXRodW1ibmFpbC1pdGVtIHt7I2NoZWNrZWR9fWlzLWNoZWNrZWR7ey9jaGVja2VkfX1cIiBkYXRhLXRodW1ibmFpbC1wcm9kdWN0LWlkPVwie3tpZH19XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtdGh1bWJuYWlsLWxhYmVsXCIgaHJlZj1cInt7dXJsfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzPVwibGF6eWxvYWRcIiBzcmM9XCJ7e2xvYWRpbmdJbWd9fVwiIGRhdGEtc3JjPVwie3tpbWd9fVwiIGFsdD1cInt7bmFtZX19XCIgdGl0bGU9XCJ7e25hbWV9fVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcm9kdWN0RGV0YWlsc1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tib3gte3tpZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7aWR9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjY2hlY2tlZH19Y2hlY2tlZHt7L2NoZWNrZWR9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWxzby1ib3VnaHQtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIHt7I2NoZWNrZWR9fWlzLWNoZWNrZWR7ey9jaGVja2VkfX1cIiBmb3I9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tY2hlY2tib3gte3tpZH19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS10aXRsZVwiPnt7bmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyZsb2dpblByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JnByaWNlUmFuZ2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Jm9wdGlvbnNUb2dnbGVIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybVwiIGlkPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm0te3tpZH19XCIgZGF0YS1wcm9kdWN0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIHt7JmZvcm1IdG1sfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24tZ3JvdXAgcHJpY2Utc2VjdGlvbi1ncm91cC0te3t0YXhDbGFzc1ByZWZpeH19XCI+XG4gICAgICAgICAgICAgICAgPCEtLSBTYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS1zZWN0aW9uLS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIiB7eyNub25TYWxlUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTtcInt7L25vblNhbGVQcmljZX19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3twcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbFwiIHt7Xm5vblNhbGVQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svbm9uU2FsZVByaWNlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NhbGVQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLS1tYWluXCI+e3twcmljZS5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIE5vbi1zYWxlIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tebm9uU2FsZVByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJ7ey9ub25TYWxlUHJpY2V9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS13YXMtbGFiZWxcIj57e25vblNhbGVQcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tub25TYWxlUHJpY2UuZm9ybWF0dGVkfX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmV0YWlsIHByaWNlIC0tPlxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICAgICAge3smdGF4TGFiZWxIdG1sfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBwcmljZVJhbmdlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbi1ncm91cCBwcmljZS1zZWN0aW9uLWdyb3VwLS17e3RheENsYXNzUHJlZml4fX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2Utc2VjdGlvbi0tbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLWxhYmVsXCI+e3twcmljZUxhYmVsfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPnt7c2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS0tbWFpblwiPnt7cHJpY2VSYW5nZS5taW4uZm9ybWF0dGVkfX0gLSB7e3ByaWNlUmFuZ2UubWF4LmZvcm1hdHRlZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyZ0YXhMYWJlbEh0bWx9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBub24tc2FsZS1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLXdhcy1sYWJlbFwiPnt7bm9uU2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e25vblNhbGVQcmljZS5mb3JtYXR0ZWR9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3smcmV0YWlsUHJpY2VSYW5nZUh0bWx9fVxuICAgICAgICAgICAgICAgIHt7JnJldGFpbFByaWNlSHRtbH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGF4TGFiZWxUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhYmJyIHRpdGxlPVwie3t0aXRsZX19XCI+e3t0ZXh0fX08L2FiYnI+XG4gICAgICAgIGAsXG4gICAgICAgIHJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBycnAtcHJpY2UtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiPlxuICAgICAgICAgICAgICAgIHt7cmV0YWlsUHJpY2VMYWJlbH19XG4gICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXJycC1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS1ycnBcIj57e3JldGFpbFByaWNlUmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH19IC0ge3tyZXRhaWxQcmljZVJhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICByZXRhaWxQcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHJycC1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCIge3tecmV0YWlsUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTt7ey9yZXRhaWxQcmljZX19XCI+XG4gICAgICAgICAgICAgICAge3tyZXRhaWxQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcnJwLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycFwiPlxuICAgICAgICAgICAgICAgICAgICB7e3JldGFpbFByaWNlLmZvcm1hdHRlZH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIGxvZ2luUHJpY2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicHJpY2UtLWxvZ2luXCIgaHJlZj1cInt7bG9naW5Vcmx9fVwiIHRyYW5zbGF0ZT57e2xvZ2luRm9yUHJpY2VUeHR9fTwvYT5cbiAgICAgICAgYCxcbiAgICAgICAgb3B0aW9uc1RvZ2dsZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtVG9nZ2xlXCI+PGEgaHJlZj1cIiNwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS17e2lkfX1cIiBkYXRhLW9wdGlvbnMtY29sbGFwc2libGU+e3tjaG9vc2VPcHRpb25zVHh0fX0gPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uXCI+PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1jaGV2cm9uLWRvd25cIj48L3VzZT48L3N2Zz48L2k+PC9hPjwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICBzaW1wbGVGb3JtVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0gZm9ybS0tYWRkVG9DYXJ0XCIgbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cInt7YWRkVG9DYXJ0VXJsfX1cIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGRhdGEtY2FydC1pdGVtLWFkZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhY3Rpb25cIiB2YWx1ZT1cImFkZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByb2R1Y3RfaWRcIiB2YWx1ZT1cInt7aWR9fVwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdHlbXVwiIHZhbHVlPVwie3txdHl9fVwiLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgYCxcbiAgICAgICAgbG9hZGluZ1RlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmdcIj48aW1nIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgYWx0PVwibG9hZGluZ1wiLz48L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzID0gbnVsbCxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscyA9IHBhcmVudFByb2R1Y3REZXRhaWxzO1xuICAgICAgICB0aGlzLnRodW1ibmFpbFRlbXBsYXRlID0gdGh1bWJuYWlsVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHNUZW1wbGF0ZSA9IHByb2R1Y3REZXRhaWxzVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJpY2VUZW1wbGF0ZSA9IHByaWNlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVRlbXBsYXRlID0gcHJpY2VSYW5nZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnRheExhYmVsVGVtcGxhdGUgPSB0YXhMYWJlbFRlbXBsYXRlO1xuICAgICAgICB0aGlzLnJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSA9IHJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5yZXRhaWxQcmljZVRlbXBsYXRlID0gcmV0YWlsUHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2dpblByaWNlVGVtcGxhdGUgPSBsb2dpblByaWNlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMub3B0aW9uc1RvZ2dsZVRlbXBsYXRlID0gb3B0aW9uc1RvZ2dsZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnNpbXBsZUZvcm1UZW1wbGF0ZSA9IHNpbXBsZUZvcm1UZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2FkaW5nVGVtcGxhdGUgPSBsb2FkaW5nVGVtcGxhdGU7XG4gICAgICAgIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzID0gdGVtcGxhdGVDdXN0b21UYWdzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLmNvbnRleHQ7XG4gICAgICAgIHRoaXMubnVtYmVyVGV4dHMgPSB0aGlzLmNvbnRleHQudHh0QWxzb0JvdWdodE51bWJlckFycmF5LnNwbGl0KCcsJyk7XG4gICAgICAgIHRoaXMuYWxsTnVtYmVyVGV4dHMgPSB0aGlzLmNvbnRleHQudHh0QWxzb0JvdWdodEFsbE51bWJlckFycmF5LnNwbGl0KCcsJyk7XG4gICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbCA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0XScsIHBhcmVudFByb2R1Y3REZXRhaWxzLiRwcm9kdWN0Vmlld1Njb3BlKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLiRhbHNvQm91Z2h0RWwuZGF0YSgnYWxzb0JvdWdodCcpIHx8IHt9O1xuICAgICAgICB0aGlzLm1vbmV5V2l0aFRheCA9IHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aFRheCA/IGV4dHJhY3RNb25leSh0aGlzLmNvbmZpZy5zYW1wbGVQcmljZVdpdGhUYXgsIHRoaXMuY29udGV4dC5tb25leSkgOiBudWxsO1xuICAgICAgICB0aGlzLm1vbmV5V2l0aG91dFRheCA9IHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aG91dFRheCA/IGV4dHJhY3RNb25leSh0aGlzLmNvbmZpZy5zYW1wbGVQcmljZVdpdGhvdXRUYXgsIHRoaXMuY29udGV4dC5tb25leSkgOiBudWxsO1xuXG4gICAgICAgIC8vIHRyeSB0byBndWVzcyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgdGhpcy5tb25leUZhbGxiYWNrID0gdGhpcy5tb25leVdpdGhUYXggfHwgdGhpcy5tb25leVdpdGhvdXRUYXhcbiAgICAgICAgICAgIC8vIGlzIGRlZmF1bHQgY3VycmVuY3k/XG4gICAgICAgICAgICB8fCAodGhpcy5jb250ZXh0LmFjdGl2ZUN1cnJlbmN5Q29kZSAmJiB0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID09PSB0aGlzLmNvbnRleHQuZGVmYXVsdEN1cnJlbmN5Q29kZSA/IHRoaXMuY29udGV4dC5tb25leSA6IG51bGwpXG4gICAgICAgICAgICAvLyBhbnkgcHJpY2Ugb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIHx8ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdLCBbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScpLmdldCgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoX21vbmV5LCBlbCkgPT4gX21vbmV5IHx8IGV4dHJhY3RNb25leSgkKGVsKS50ZXh0KCkpLCBudWxsKVxuICAgICAgICAgICAgLy8gdXNlIGN1cnJlbmN5IGNvZGVcbiAgICAgICAgICAgIHx8ICh0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlID8gey4uLnRoaXMuY29udGV4dC5tb25leSwgY3VycmVuY3lfdG9rZW46IGAgJHt0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlfSBgIH0gOiB0aGlzLmNvbnRleHQubW9uZXkpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Tm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrID0gdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrID0gdGhpcy5vbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBjb25zdCB0aHVtYlNpemUgPSB0aGlzLmNvbnRleHQuYWxzb2JvdWdodF90aHVtYm5haWxfc2l6ZS5zcGxpdCgneCcpO1xuXG4gICAgICAgIHRoaXMudGh1bWJuYWlsV2lkdGggPSBOdW1iZXIodGh1bWJTaXplWzBdKSB8fCAxMDA7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsSGVpZ2h0ID0gTnVtYmVyKHRodW1iU2l6ZVsxXSkgfHwgMTAwO1xuXG4gICAgICAgIHRoaXMucmV0cmlldmVBbHNvQm91Z2h0UHJvZHVjdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1hZGQtYWxsXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkub24oJ2NsaWNrJywgdGhpcy5vbkFkZEFsbEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgJCgnW2RhdGEtYWRkLXNlbGVjdGVkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkub24oJ2NsaWNrJywgdGhpcy5vbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2spO1xuICAgIH1cblxuICAgIGN1cnJlbmN5Rm9ybWF0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW5jeUZvcm1hdCh2YWx1ZSwgKHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLm1vbmV5V2l0aFRheCA6IHRoaXMubW9uZXlXaXRob3V0VGF4KSB8fCB0aGlzLm1vbmV5RmFsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkdGh1bWJuYWlscyA9ICQoJ1tkYXRhLXRodW1ibmFpbHNdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsczogJ3BhcGF0aGVtZXMvYWxzby1ib3VnaHQvcHJvZHVjdC1kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWw6ICdwYXBhdGhlbWVzL2Fsc28tYm91Z2h0L3Byb2R1Y3QtdGh1bWJuYWlsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0RWxzID0gJCgnW2RhdGEtcHJvZHVjdC1pZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm5vdCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkcHJvZHVjdEVscy5nZXQoKS5tYXAoZWwgPT4gJChlbCkuZGF0YSgncHJvZHVjdElkJykpO1xuXG4gICAgICAgIGlmICgkcHJvZHVjdEVscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLiRhbHNvQm91Z2h0RWwucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0SWRzOiBbSW50IV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RzQ291bnQ6IEludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbmNsdWRlVGF4OiBCb29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1nV2lkdGg6IEludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGltZ0hlaWdodDogSW50IVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkczogJHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogJHByb2R1Y3RzQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlT3V0T2ZTdG9jazogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydFVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QdXJjaGFzZVF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaW1nV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaW1nSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5VjIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gUHJvZHVjdFVuYXZhaWxhYmxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlVGF4OiAkaW5jbHVkZVRheCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6ICRjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leVJhbmdlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7IXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiA/IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leVJhbmdlRmllbGRzIG9uIE1vbmV5UmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdElkcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlVGF4OiB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlOiB0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nV2lkdGg6IHRoaXMudGh1bWJuYWlsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQ6IHRoaXMudGh1bWJuYWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0aGlzLmNvbnRleHQuZ3JhcGhRTFRva2VufWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcC5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMuZm9yRWFjaCgoeyBub2RlIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHNob3cgdGhpcyBwcm9kdWN0IGlmIGl0J3MgdW5hdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmF2YWlsYWJpbGl0eVYyICYmIG5vZGUuYXZhaWxhYmlsaXR5VjIuc3RhdHVzID09PSAnVW5hdmFpbGFibGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3ROb2Rlcy5wdXNoKG5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IG5vZGUuZW50aXR5SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbm9kZS5wYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkVG9DYXJ0VXJsID0gbm9kZS5hZGRUb0NhcnRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSBub2RlLm1pblB1cmNoYXNlUXVhbnRpdHkgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdJbWcgPSB0aGlzLmNvbnRleHQubG9hZGluZ0ltZztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG5vZGUuZGVmYXVsdEltYWdlLnVybCB8fCB0aGlzLmNvbnRleHQuZGVmYXVsdFByb2R1Y3RJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkcHJvZHVjdEVscy5maWx0ZXIoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGF4Q2xhc3NQcmVmaXggPSB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gJ3dpdGhUYXgnIDogJ3dpdGhvdXRUYXgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGF4RGF0YVByZWZpeCA9IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyAnd2l0aC10YXgnIDogJ3dpdGhvdXQtdGF4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX3ByaWNlX2xhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2FsZVByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX3NhbGVfcHJpY2VfbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub25TYWxlUHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfbm9uX3NhbGVfcHJpY2VfbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9yZXRhaWxfcHJpY2VfbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaG9vc2VPcHRpb25zVHh0ID0gdGhpcy5jb250ZXh0LmNob29zZU9wdGlvbnNUeHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpbkZvclByaWNlVHh0ID0gdGhpcy5jb250ZXh0LmxvZ2luRm9yUHJpY2VUeHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpblVybCA9IHRoaXMuY29udGV4dC5sb2dpblVybCB8fCAnL2xvZ2luLnBocCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5jb250ZXh0LmFsc29ib3VnaHRfY2hlY2tlZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5wcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGVQcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXMuYmFzZVByaWNlICYmIG5vZGUucHJpY2VzLnByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMuYmFzZVByaWNlLnZhbHVlICE9PSBub2RlLnByaWNlcy5wcmljZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMuYmFzZVByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2UgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmIG5vZGUucHJpY2VzLnJldGFpbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VSYW5nZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXMucHJpY2VSYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlICE9IG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VSYW5nZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWluLnZhbHVlICE9IG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWF4LnZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5yZXRhaWxQcmljZVJhbmdlLm1pbi52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWF4LnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpblByaWNlSHRtbCA9IHRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiA/IE11c3RhY2hlLnJlbmRlcih0aGlzLmxvZ2luUHJpY2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRm9yUHJpY2VUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGF4TGFiZWxIdG1sID0gdGhpcy5jb25maWcuc2hvd1RheExhYmVsID8gTXVzdGFjaGUucmVuZGVyKHRoaXMudGF4TGFiZWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5jb250ZXh0LmluY2x1ZGluZ1RheFR4dCA6IHRoaXMuY29udGV4dC5leGNsdWRpbmdUYXhUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb25maWcuaW5jbHVkZVRheCA/IHRoaXMuY29udGV4dC5wcmljZVdpdGhUYXhUeHQgOiB0aGlzLmNvbnRleHQucHJpY2VXaXRob3V0VGF4VHh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlUmFuZ2VIdG1sID0gcmV0YWlsUHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnJldGFpbFByaWNlUmFuZ2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZVJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlSHRtbCA9ICFyZXRhaWxQcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucmV0YWlsUHJpY2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVJhbmdlSHRtbCA9IHByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5wcmljZVJhbmdlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhDbGFzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhEYXRhUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4TGFiZWxIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zVG9nZ2xlSHRtbCA9IG5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMubGVuZ3RoID4gMCA/IE11c3RhY2hlLnJlbmRlcih0aGlzLm9wdGlvbnNUb2dnbGVUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZU9wdGlvbnNUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VIdG1sID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiAhcHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnByaWNlVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhDbGFzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhEYXRhUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9uU2FsZVByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheExhYmVsSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUh0bWwgPSBub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA9PT0gMCA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnNpbXBsZUZvcm1UZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRvQ2FydFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0h0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy5wcm9kdWN0RGV0YWlsc1RlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1RvZ2dsZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsSHRtbCA9ICQoTXVzdGFjaGUucmVuZGVyKHRoaXMudGh1bWJuYWlsVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nSW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5hcHBlbmQoZGV0YWlsc0h0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRodW1ibmFpbHMuYXBwZW5kKHRodW1ibmFpbEh0bWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHNpbXBsZSBwcm9kdWN0IGRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCwgXy5leHRlbmQodGhpcy5jb250ZXh0LCB7IGVuYWJsZUFsc29Cb3VnaHQ6IGZhbHNlIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBwcmljZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5vbigncHJpY2UtY2hhbmdlJywgKCkgPT4gdGhpcy51cGRhdGVUb3RhbFByaWNlKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHByb2R1Y3Qgb2JqZWN0IGZvciBsYXRlciB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycsIHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbml0IGZvdW5kYXRpb24gY29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0OiAkcHJvZHVjdEVsIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScpLm9uKCdjaGFuZ2UnLCB0aGlzLm9uQWxzb0JvdWdodENoZWNrYm94Q2hhbmdlLmJpbmQodGhpcywgJHByb2R1Y3RFbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScpLm9uKENvbGxhcHNpYmxlRXZlbnRzLm9wZW4sIHRoaXMub25PcHRpb25zT3Blbi5iaW5kKHRoaXMsICRwcm9kdWN0RWwpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbFByaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gaW5pdCBwYXJlbnQgcHJvZHVjdCBpdGVtXG4gICAgICAgICAgICBjb25zdCAkcGFyZW50UHJvZHVjdEVsID0gJCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nLCB7ICRjb250ZXh0OiAkcGFyZW50UHJvZHVjdEVsIH0pO1xuICAgICAgICAgICAgJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgJHBhcmVudFByb2R1Y3RFbCkub24oJ2NoYW5nZScsIHRoaXMub25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UuYmluZCh0aGlzLCAkcGFyZW50UHJvZHVjdEVsKSk7XG5cbiAgICAgICAgICAgIC8vIGxpc3RlbiBwYXJlbnQgcHJvZHVjdCBwcmljZSBjaGFuZ2VcbiAgICAgICAgICAgIHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVUb3RhbFByaWNlKCkge1xuICAgICAgICAvLyBzdG9wIHNob3dpbmcgdG90YWwgcHJpY2UgaWYgcmVxdWlyZSBsb2dpblxuICAgICAgICBpZiAodGhpcy5jb25maWcucmVxdWlyZUxvZ2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9kdWN0SWRzID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdOmNoZWNrZWQnLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAuZ2V0KClcbiAgICAgICAgICAgIC5tYXAoZWwgPT4gJChlbCkudmFsKCkpO1xuXG4gICAgICAgIGNvbnN0IHByaWNlQnlJZCA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdE5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUucHJpY2VzICYmIG5vZGUucHJpY2VzLnByaWNlKS5yZWR1Y2UoKF9wcmljZUJ5SWQsIG5vZGUpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uX3ByaWNlQnlJZCxcbiAgICAgICAgICAgICAgICBbbm9kZS5lbnRpdHlJZF06IHtcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuY29uZmlnLmluY2x1ZGVUYXggPyAnd2l0aF90YXgnIDogJ3dpdGhvdXRfdGF4J106IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLnByaWNlcy5wcmljZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5wcmljZS52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LnByaWNlICYmIHByb2R1Y3QucHJvZHVjdElkKS5yZWR1Y2UoKF9wcmljZUJ5SWQsIHByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uX3ByaWNlQnlJZCxcbiAgICAgICAgICAgICAgICBbcHJvZHVjdC5wcm9kdWN0SWRdOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBtZXJnZSBwcm9kdWN0Tm9kZXMgJiBwcm9kdWN0IGRldGFpbHMgb2JqZWN0c1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IE9iamVjdC5rZXlzKHByaWNlQnlJZCkubWFwKHByb2R1Y3RJZCA9PiAoe1xuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgcHJpY2U6IHByaWNlQnlJZFtwcm9kdWN0SWRdLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgdG90YWwgPSBbdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscywgLi4ucHJvZHVjdHNdXG4gICAgICAgICAgICAuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdElkcy5pbmRleE9mKHByb2R1Y3QucHJvZHVjdElkKSA+IC0xKVxuICAgICAgICAgICAgLnJlZHVjZSgoeyB3aXRoX3RheCA9IDAsIHdpdGhvdXRfdGF4ID0gMCwgbW9uZXlfd2l0aF90YXgsIG1vbmV5X3dpdGhvdXRfdGF4IH0sIHsgcHJpY2UgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICB3aXRoX3RheDogcHJpY2UgJiYgcHJpY2Uud2l0aF90YXggPyB3aXRoX3RheCArIHByaWNlLndpdGhfdGF4LnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICB3aXRob3V0X3RheDogcHJpY2UgJiYgcHJpY2Uud2l0aG91dF90YXggPyB3aXRob3V0X3RheCArIHByaWNlLndpdGhvdXRfdGF4LnZhbHVlIDogbnVsbCxcbiAgICAgICAgICAgICAgICBtb25leV93aXRoX3RheDogbW9uZXlfd2l0aF90YXggfHwgKChwcmljZSAmJiBwcmljZS53aXRoX3RheCkgPyBleHRyYWN0TW9uZXkocHJpY2Uud2l0aF90YXguZm9ybWF0dGVkLCB0aGlzLmNvbnRleHQubW9uZXkpIDogbnVsbCksXG4gICAgICAgICAgICAgICAgbW9uZXlfd2l0aG91dF90YXg6IG1vbmV5X3dpdGhvdXRfdGF4IHx8ICgocHJpY2UgJiYgcHJpY2Uud2l0aG91dF90YXgpID8gZXh0cmFjdE1vbmV5KHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGwpLFxuICAgICAgICAgICAgfSksIHt9KTtcblxuICAgICAgICBjb25zdCAkd2l0aFRheCA9ICQoJ1tkYXRhLXRvdGFsLXdpdGgtdGF4XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICR3aXRob3V0VGF4ID0gJCgnW2RhdGEtdG90YWwtd2l0aG91dC10YXhdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcblxuICAgICAgICBpZiAodG90YWwud2l0aF90YXgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByaWNlXScsICR3aXRoVGF4KS5odG1sKGN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhfdGF4LCB0b3RhbC5tb25leV93aXRoX3RheCkpO1xuICAgICAgICAgICAgJHdpdGhUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRoVGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhUYXguaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvdGFsLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1wcmljZV0nLCAkd2l0aG91dFRheCkuaHRtbChjdXJyZW5jeUZvcm1hdCh0b3RhbC53aXRob3V0X3RheCwgdG90YWwubW9uZXlfd2l0aG91dF90YXgpKTtcbiAgICAgICAgICAgICR3aXRob3V0VGF4LnNob3coKTtcbiAgICAgICAgICAgIGlmICh0b3RhbC53aXRoX3RheCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aG91dFRheCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10YXgtbGFiZWxdJywgJHdpdGhvdXRUYXgpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR3aXRob3V0VGF4LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQWRkQWxsQnV0dG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cblxuICAgIG9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGRTZWxlY3RlZFByb2R1Y3RzVG9DYXJ0KCk7XG4gICAgfVxuXG4gICAgb25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UoJHByb2R1Y3RFbCwgZSkge1xuICAgICAgICBjb25zdCAkY2IgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZV0nKS5maXJzdCgpO1xuICAgICAgICBjb25zdCAkbGFiZWwgPSAkKGBsYWJlbFtmb3I9XCIkeyRjYi5hdHRyKCdpZCcpfVwiXWAsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICR0aHVtYiA9ICQoYFtkYXRhLXRodW1ibmFpbC1wcm9kdWN0LWlkPVwiJHskcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3RJZCcpfVwiXWAsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgLy8gb3BlbiAoY2xvc2UpIHByb2R1Y3Qgb3B0aW9ucyBmb3JtIGlmIGNoZWNrYm94IGlzIGNoZWNrZWQgKHVuY2hlY2tlZClcbiAgICAgICAgaWYgKCRjYi5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICRsYWJlbC5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgJHRodW1iLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICBpZiAoISR0b2dnbGUuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICR0b2dnbGUudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRsYWJlbC5yZW1vdmVDbGFzcygnaXMtY2hlY2tlZCcpO1xuICAgICAgICAgICAgJHRodW1iLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICBpZiAoJHRvZ2dsZS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgJHRvZ2dsZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbFByaWNlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24oKTtcbiAgICB9XG5cbiAgICBvbk9wdGlvbnNPcGVuKCRwcm9kdWN0RWwpIHtcbiAgICAgICAgaWYgKCRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRQcm9kdWN0RGV0YWlscygkcHJvZHVjdEVsKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdElkJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1wcm9kdWN0LWNvbnRlbnRdJyk7XG5cbiAgICAgICAgJGNvbnRlbnQuaHRtbChNdXN0YWNoZS5yZW5kZXIodGhpcy5sb2FkaW5nVGVtcGxhdGUsIHsgbG9hZGluZ0ltZzogdGhpcy5jb250ZXh0LmxvYWRpbmdJbWcgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpKTtcblxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCB7IHRlbXBsYXRlOiAncGFwYXRoZW1lcy9hbHNvLWJvdWdodC9wcm9kdWN0LWRldGFpbHMnIH0sIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIHx8ICFyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgJGNvbnRlbnQuaHRtbCgkKHJlc3ApLmh0bWwoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcHJvZHVjdEVsLCBfLmV4dGVuZCh0aGlzLmNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogZmFsc2UgfSksIG51bGwsIHRydWUpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbiBwcmljZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5vbigncHJpY2UtY2hhbmdlJywgKCkgPT4gdGhpcy51cGRhdGVUb3RhbFByaWNlKCkpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBwcm9kdWN0IG9iamVjdCBmb3IgbGF0ZXIgdXNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnLCBwcm9kdWN0KTtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBZGRTZWxlY3RlZFRvQ2FydEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgJGFsbCA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJGFsbC5maWx0ZXIoJzpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0ICRidG5zID0gJCgnW2RhdGEtYnV0dG9uc10nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuXG4gICAgICAgIGlmICgkY2hlY2tlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSAkY2hlY2tlZC5sZW5ndGggPT09ICRhbGwubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyAoJGNoZWNrZWQubGVuZ3RoIDw9IHRoaXMuYWxsTnVtYmVyVGV4dHMubGVuZ3RoID8gdGhpcy5hbGxOdW1iZXJUZXh0c1skY2hlY2tlZC5sZW5ndGggLSAxXSA6ICRjaGVja2VkLmxlbmd0aClcbiAgICAgICAgICAgICAgICA6ICgkY2hlY2tlZC5sZW5ndGggPD0gdGhpcy5udW1iZXJUZXh0cy5sZW5ndGggPyB0aGlzLm51bWJlclRleHRzWyRjaGVja2VkLmxlbmd0aCAtIDFdIDogJGNoZWNrZWQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0ICRidG4gPSAkKCdbZGF0YS1hZGQtc2VsZWN0ZWRdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBTdHJpbmcoJGJ0bi5kYXRhKCdvcmlnaW5hbFRleHQnKSB8fCAkYnRuLmh0bWwoKSk7XG4gICAgICAgICAgICAkYnRuLmRhdGEoJ29yaWdpbmFsVGV4dCcsIHRleHQpLmh0bWwodGV4dC5yZXBsYWNlKCclc3RyJScsIHN0cikpO1xuICAgICAgICAgICAgJGJ0bnMuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRidG5zLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBsb25nZXIgdXNlZC4gS2VlcCBmb3Igb3RoZXIgdGhpcmQtcGFydHkgc2NyaXB0cyBjb21wYXRpYmlsaXR5LlxuICAgIC8qKlxuICAgICAqIFByb21pc2UgdG8gQ2FsbCBhZnRlciB0aGUgcGFyZW50IHByb2R1Y3QgaXMgYWRkZWQgdG8gYWRkIGFsc28tYm91Z2h0IHByb2R1Y3RzLlxuICAgICAqL1xuICAgIGFzeW5jIHBhcmVudFByb2R1Y3RBZGRlZFRvQ2FydCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhcmVudCBwcm9kdWN0IGFkZGVkJyk7XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LiRzY29wZS5maW5kKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDEwMDApOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgcHJvbWlzZVNlcmlhbChwcm9taXNlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgIH1cblxuICAgIFxuXG4gICAgYXN5bmMgYWRkU2VsZWN0ZWRQcm9kdWN0c1RvQ2FydCgpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XTpjaGVja2VkJywgdGhpcy4kYWxzb0JvdWdodEVsKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAubWFwKGVsID0+ICQoZWwpLnZhbCgpKTtcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGxldCBzdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICAvLyBhZGQgcGFyZW50IHByb2R1Y3QgdG8gY2FydFxuICAgICAgICBpZiAocHJvZHVjdElkcy5pbmRleE9mKHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMucHJvZHVjdElkKSA+IC0xKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gcmVwb3J0Rm9ybVZhbGlkaXR5KHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuJGZvcm0uZ2V0KDApKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VyciwgcmVzcF0gPSBhd2FpdCB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLmFkZFByb2R1Y3RUb0NhcnRBc3luYygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyIHx8IHJlc3AuZGF0YS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgJChgW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdW3ZhbHVlPVwiJHt0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZH1cIl1gLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0RWxzID0gJCgnW2RhdGEtcHJvZHVjdC1pZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpLm5vdCgnW2RhdGEtcGFyZW50LXByb2R1Y3RdJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0SWRzLmxlbmd0aCAmJiBzdWNjZXNzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb2R1Y3RJZHNbaV07XG5cbiAgICAgICAgICAgIGlmICghcHJvZHVjdElkIHx8IHByb2R1Y3RJZCA9PSB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdEVsID0gJHByb2R1Y3RFbHMuZmlsdGVyKGBbZGF0YS1wcm9kdWN0LWlkPVwiJHtwcm9kdWN0SWR9XCJdYCk7XG5cbiAgICAgICAgICAgIGlmICgkcHJvZHVjdEVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdERldGFpbHMnKSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpO1xuXG4gICAgICAgICAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3VjY2VzcyA9IHJlcG9ydEZvcm1WYWxpZGl0eShwcm9kdWN0LiRmb3JtLmdldCgwKSk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtlcnIsIHJlc3BdID0gYXdhaXQgcHJvZHVjdC5hZGRQcm9kdWN0VG9DYXJ0QXN5bmMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1zZyA9IGVyciB8fCByZXNwLmRhdGEuZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNc2csXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBwcm9kdWN0SWRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG9wZW4gdGhlIHByb2R1Y3QgZm9ybVxuICAgICAgICAgICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgICAgICBpZiAoISR0b2dnbGUuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAkdG9nZ2xlLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgeyBwcm9kdWN0LCByZXNwIH0gPSByZXN1bHRzWzBdO1xuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBlcm1hcmtldCBPQlBTIE1vZFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwICE9PSAnaGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb2R1Y3QudXBkYXRlQ2FydENvbnRlbnQocHJvZHVjdC5wcmV2aWV3TW9kYWwsIHJlc3AuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8IHRoaXMuY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgcHJvZHVjdC4kc2NvcGUpLmdldCgwKTtcbiAgICAgICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgcHJvZHVjdC4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG4gICAgICAgICAgICBjb25zdCAkZXJyb3JCb3ggPSAkKCdbZGF0YS1lcnJvci1ib3hdJywgcHJvZHVjdC4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGVycm9yTXNnID0gJCgnW2RhdGEtZXJyb3ItbWVzc2FnZV0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkY2hlY2tib3ggPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCBwcm9kdWN0LiRzY29wZSk7XG5cbiAgICAgICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICBwcm9kdWN0LiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChwcm9kdWN0LmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybSk7XG5cbiAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3QuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVqZWN0IGFkZCBwcm9kdWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGVycm9yTXNnLmh0bWwoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJGVycm9yQm94LnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXJyb3JCb3gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9FbGVtZW50KCRlcnJvckJveC5nZXQoMCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzb2x2ZSBhZGQgcHJvZHVjdCcpO1xuICAgICAgICAgICAgICAgICRlcnJvck1zZy5lbXB0eSgpO1xuICAgICAgICAgICAgICAgICRlcnJvckJveC5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4uL2dsb2JhbC9mb3VuZGF0aW9uJzsgLy8gU3VwZXJtYXJrZXRcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuLi9wcm9kdWN0L2ltYWdlLWdhbGxlcnknO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBkZWZhdWx0TW9kYWwsIE1vZGFsRXZlbnRzLCBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgQWxzb0JvdWdodCBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2Fsc28tYm91Z2h0JzsgLy8gUGFwYXRoZW1lcyAtIEFsc29Cb3VnaHRcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL21lZGlhLXF1ZXJ5LWxpc3QnOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5pbXBvcnQgeyBzY3JvbGxUb3AgfSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL3RoZW1lLXV0aWxzJzsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuaW1wb3J0IHsgb3BlbkNhcnRQcmV2aWV3ICB9IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvdXRpbHMnOyAvLyBwYXBhdGhlbWVzLWluaGVhbHRoXG5cbmNvbnN0IG1lZGl1bU1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KCdtZWRpdW0nKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuXG4vLyBTdXBlcm1hcmtldCAtIE9CUFMgTW9kXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZnVuY3Rpb24gc2hha2UoJGVsLCBzZXR0aW5ncykge1xuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzID0ge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5pbnRlcnZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MuaW50ZXJ2YWwgPSAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5kaXN0YW5jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MuZGlzdGFuY2UgPSAxMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLnRpbWVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncy50aW1lcyA9IDQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5jb21wbGV0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgfVxuXG4gICAgJGVsLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblxuICAgIGZvciAobGV0IGl0ZXIgPSAwOyBpdGVyIDwgKHNldHRpbmdzLnRpbWVzICsgMSk7IGl0ZXIrKykge1xuICAgICAgICAkZWwuYW5pbWF0ZSh7IGxlZnQ6ICgoaXRlciAlIDIgPT09IDAgPyBzZXR0aW5ncy5kaXN0YW5jZSA6IHNldHRpbmdzLmRpc3RhbmNlICogLTEpKSB9LCBzZXR0aW5ncy5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgJGVsLmFuaW1hdGUoeyBsZWZ0OiAwIH0sIHNldHRpbmdzLmludGVydmFsLCBzZXR0aW5ncy5jb21wbGV0ZSk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbi8vIFN1cGVybWFya2V0OiBGaXggUHJpY2Ugbm90IHVwZGF0ZSB3aGVuIGEgcHJvZHVjdCBvcHRpb24gaXMgY2hlY2tlZFxuZnVuY3Rpb24gc3VwZXJtYXJrZXRTZXJpYWxpemUoJGZvcm0pIHtcbiAgICBjb25zdCBhc3NvYyA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCkucmVkdWNlKChfYXNzb2MsIHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgICAgICBfYXNzb2NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIF9hc3NvYztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuICQucGFyYW0oYXNzb2MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlQXJnLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkgeyAvLyBQYXBhdGhlbWVzIEFsc28gQm91Z2h0IE1PRFxuICAgICAgICAvLyBQYXBhdGhlbWVzIEFsc28gQm91Z2h0IE1PRCB7e3tcbiAgICAgICAgY29uc3QgJHNjb3BlID0gY29udGV4dC5lbmFibGVBbHNvQm91Z2h0ID8gJHNjb3BlQXJnLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LXBhcmVudC1zY29wZV0nKSA6ICRzY29wZUFyZztcbiAgICAgICAgdGhpcy4kcHJvZHVjdFZpZXdTY29wZSA9ICRzY29wZUFyZztcbiAgICAgICAgLy8gfX19XG5cblxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydC1pdGVtLWFkZF0gLmxvYWRpbmdPdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSkpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIGZvdW5kYXRpb24oJChkb2N1bWVudCkpOyAvLyBTdXBlcm1hcmtldFxuICAgICAgICB0aGlzLmluaXRDdXN0b21UYWJzKCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBBbHNvQm91Z2h0XG4gICAgICAgIGlmIChjb250ZXh0LmVuYWJsZUFsc29Cb3VnaHQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhbHNvQm91Z2h0T3B0aW9ucyB9ID0gd2luZG93LnN1cGVybWFya2V0VGhlbWVFeHRyYUNvbmZpZyB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsc29Cb3VnaHQgPSBuZXcgQWxzb0JvdWdodCh0aGlzLCBhbHNvQm91Z2h0T3B0aW9ucyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gKCRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpIHx8ICcnKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgZWRpdGVkIGZvciBhbHNvLWJvdWdodFxuICAgICAgICB0aGlzLnByaWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSAkKCdpbnB1dFtuYW1lPVwicHJvZHVjdF9pZFwiXScsIHRoaXMuJHNjb3BlKS52YWwoKTtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldDogRml4IGNsaWNrIHJldmlld3MgbGluayBvcGVuIHRhYlxuICAgICAgICAkKCdhW2hyZWYqPVwiI3RhYi1yZXZpZXdzXCJdJywgJHNjb3BlKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghJChldmVudC50YXJnZXQpLmlzKCcudGFiLXRpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10YWJdIGFbaHJlZj1cIiN0YWItcmV2aWV3c1wiXScsICRzY29wZSkuY2xpY2soKS5zY3JvbGxUb3AoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoXy5pc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoJHByb2R1Y3RJZCwgc3VwZXJtYXJrZXRTZXJpYWxpemUoJGZvcm0pLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5hZGRDbGFzcygncHJldmlldy1tb2RhbCcpLmFkZENsYXNzKGBwcmV2aWV3LW1vZGFsLS0ke2NvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXB9YCk7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5hZGRfdG9fY2FydF9wb3B1cCA9PT0gJ21pbmknKSB7XG4gICAgICAgICAgICAgICAgLy8gdW5iaW5kIG9wZW4vY2xvc2UgZXZlbnQgb2YgdGhlIG9yaWdpbmFsIG1vZGFsXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsT3Blbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbENsb3NlKTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgb3Blbi9jbGFzcyBldmVudCBmb3IgbWluaSBwcmV2aWV3IG1vZGFsXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbE9wZW4gPSB0aGlzLm9uTWluaVByZXZpZXdNb2RhbE9wZW4uYmluZCh0aGlzLnByZXZpZXdNb2RhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbENsb3NlID0gdGhpcy5vbk1pbmlQcmV2aWV3TW9kYWxDbG9zZS5iaW5kKHRoaXMucHJldmlld01vZGFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbiwgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbE9wZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5wcmV2aWV3TW9kYWwub25Nb2RhbENsb3NlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgdGhpcy5pbml0VGFiU2Nyb2xsVG9WaWV3cG9ydCgpO1xuICAgICAgICB0aGlzLmluaXRHb1RvVGFiKCk7XG5cbiAgICAgICAgLy8gTmVlZCBmb3IgcGFwYXRoZW1lcy1tcXBvICsgYWxzb2JvdWdodCB2MiBjb21wbGlhbmNlXG4gICAgICAgIHRoaXMuJHNjb3BlLmRhdGEoJ3Byb2R1Y3REZXRhaWxzSW5zdGFuY2UnLCB0aGlzKTtcbiAgICAgICAgdXRpbHMuaG9va3MuZW1pdCgncHJvZHVjdC1wcm9kdWN0ZGV0YWlscy1pbml0JywgdGhpcyk7XG5cbiAgICAgICAgLy8gQ2hpYXJhOiBkcm9wZG93biBjb2xvciBzd2F0Y2hlc1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlID09PSAnZHJvcGRvd24nIHx8IHRoaXMuY29udGV4dC5zd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSA9PT0gJ2JvdGgnKSB7XG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uL3BhcGF0aGVtZXMvZHJvcGRvd24tc3dhdGNoZXMnKVxuICAgICAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzOiB0aGlzLmNvbnRleHQuc3dhdGNoX29wdGlvbl9kaXNwbGF5X3R5cGUgPT09ICdkcm9wZG93bicsXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0KCkge1xuICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgJHF1aWNrVmlldyA9IHRoaXMuJHNjb3BlLmNsb3Nlc3QoJy5xdWlja1ZpZXcnKS5maXJzdCgpO1xuICAgICAgICAkcXVpY2tWaWV3LmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCByZXN1bWVTdGlja3lIZWFkZXI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzY3JvbGxUb1ZpZXcgPSBlbCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJCgkKGVsKS5hdHRyKCdocmVmJyksIHRoaXMuJHNjb3BlKS5maXJzdCgpO1xuICAgICAgICAgICAgaWYgKCRxdWlja1ZpZXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBoID0gJHF1aWNrVmlldy5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICBsZXQgJGVsID0gJHRhcmdldDtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKCEkZWwuaXMoJy5xdWlja1ZpZXcnKSAmJiAkZWwubGVuZ3RoID4gMCAmJiBpKysgPCAyMCkge1xuICAgICAgICAgICAgICAgICAgICBoICs9ICRlbC5wb3NpdGlvbigpLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgJGVsID0gJGVsLm9mZnNldFBhcmVudCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRxdWlja1ZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogaCAtIDUwLFxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDUwLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCBzdGlja3kgaGVhZGVyIHdoaWxlIHNjcm9sbGluZyB0byB0aGUgdGFiIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXN1bWVTdGlja3lIZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ19za2lwQ2hlY2tTY3JvbGxVcFN0aWNreUhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gJCgnaHRtbCwgYm9keScpLmNsZWFyUXVldWUoKSxcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzdW1lU3RpY2t5SGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdW1lU3RpY2t5SGVhZGVyID0gc2V0VGltZW91dCgoKSA9PiAkYm9keS5yZW1vdmVDbGFzcygnX3NraXBDaGVja1Njcm9sbFVwU3RpY2t5SGVhZGVyJyksIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gLnRhYicsIHRoaXMuJHNjb3BlKVxuICAgICAgICAgICAgLm9uKCdvcGVuZWQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9WaWV3KCQoZXZlbnQudGFyZ2V0KS5maW5kKCdhJykuZ2V0KDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdEdvVG9UYWIoKSB7XG4gICAgICAgICQoJ1tkYXRhLWdvdG90YWJdJywgdGhpcy4kc2NvcGUpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBocmVmID0gJGVsLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgaWYgKG1lZGl1bU1lZGlhUXVlcnlMaXN0Lm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtdGFiXScpLmZpbmQoYGFbaHJlZj1cIiR7aHJlZn1cImApLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gdGhpcy4kc2NvcGUuZmluZChocmVmKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCgkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gICAgICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICAgICAqL1xuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5pc0FNUCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dDpjaGVja2VkJyk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgZWRpdGVkXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVscyA/IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dCA6ICQoYGxhYmVsW2Zvcj0ke2NoZWNrZWQuaWR9XWApLmZpcnN0KCkudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzID8gY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF0gOiAkKGBsYWJlbFtmb3I9JHtjaGVja2VkLmlkfV1gKS5jaGlsZHJlbigpLmdldCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID0gcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPSR7SlNPTi5zdHJpbmdpZnkocHJvZHVjdE5hbWUpfV1gKTsgLy8gRml4ZWQgYnkgUGFwYVRoZW1lc1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrLCAucHJvZHVjdFZpZXctaW5mby1uYW1lLS1zdG9jaywgLnByb2R1Y3RWaWV3LWluZm8tdmFsdWUtLXN0b2NrJywgJHNjb3BlKSwgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkYmFkZ2U6ICQoJy5wcm9kdWN0Vmlldy1zdG9ja0xhYmVsJywgJHNjb3BlKSwgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtcG46IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0Lm1wbi1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LW1wbl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1cGVybWFya2V0OiBkaXNwbGF5IHNlbGVjdGVkIHN3YXRjaCB0aXRsZVxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJykpIHtcbiAgICAgICAgICAgICRjaGFuZ2VkT3B0aW9uXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpXG4gICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgIC5odG1sKCRjaGFuZ2VkT3B0aW9uLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVMYWJlbCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgc3VwZXJtYXJrZXRTZXJpYWxpemUoJGZvcm0pLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdEltYWdlKGltYWdlKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tX3NpemUgfSxcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0LnByb2R1Y3Rfc2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCBmYWxsYmFjayBpbWFnZSBzaXplIHVzZWQgZm9yIHRoZSBtYWluIHByb2R1Y3QgaW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuICAgICAgICAgICAgICAgICAgICBOb3RlIHRoYXQgdGhpcyB3aWxsIG9ubHkgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIGltYWdlIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHNyY3NldFxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB0aGlzLmNvbnRleHQucHJvZHVjdF9pbWFnZV9yZXNwb25zaXZlID8gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KGltYWdlLmRhdGEpIDogJyc7XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnNldEFsdGVybmF0ZUltYWdlKHtcbiAgICAgICAgICAgICAgICAvLyBtYWluSW1hZ2VVcmw6IGAke21haW5JbWFnZVVybH0/aW1ieXBhc3M9b25gLFxuICAgICAgICAgICAgICAgIC8vIHpvb21JbWFnZVVybDogYCR7em9vbUltYWdlVXJsfT9pbWJ5cGFzcz1vbmAsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlVXJsLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcblxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWF4IG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gR2lhbyAtIHN1cGVybWFya2V0OlxuICAgICAgICAvLyBGaXggcHJvYmxlbSB3aGVuIGVudGVyIG9uIHF1YW50aXR5IGJveCB3b24ndCBkZWNyZWFzZSAxIHVuaXRcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpLnF1YW50aXR5LiRpbnB1dC5vbigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgYWRkZWQgZm9yIGFsc28tYm91Z2h0XG4gICAgYWRkUHJvZHVjdFRvQ2FydEFzeW5jKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkZm9ybS5nZXQoMCk7XG4gICAgICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuICAgIFxuICAgICAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIGFzeW5jIChlcnIsIHJlc3BvbnNlKSA9PiB7IC8vIEFsc29Cb3VnaHQgTW9kXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG4gICAgXG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKFtlcnIsIHJlc3BvbnNlXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQ6XG4gICAgICAgIC8vIFNvbWVob3cgU2FmYXJpIGlPUyBkb2Vzbid0IHdvcmsgcmlnaHQgd2l0aCBGb3JtRGF0YSxcbiAgICAgICAgLy8gc28gd2Ugc3VibWl0IHRoZSBmb3JtIGFzIG5vcm1hbC5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5pc0FNUCkge1xuICAgICAgICAgICAgJChmb3JtKS5hdHRyKCd0YXJnZXQnLCAnX3RvcCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZCh0aGlzLmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybSkpLCBhc3luYyAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0OiBTdXBwb3J0IHJlZGlyZWN0IHRvIGNhcnQgcGFnZSBhZnRlciBhZGRlZCB0byBjYXJ0XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LnJlZGlyZWN0X2NhcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwYXBhdGhlbWVzLWluaGVhbHRoOiBTaG93IGNhcnQgcHJldmlldyBvbiB0aGUgcmlnaHQgc2lkZVxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5hZGRfdG9fY2FydF9wb3B1cCA9PT0gJ2NhcnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gY2xvc2UgcXVpY2stdmlldyBtb2RhbFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuQ2FydFByZXZpZXcocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aWV3TW9kYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBTdXBlcm1hcmtldCBPQlBTIE1vZFxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwICE9PSAnaGlkZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQodGhpcy5wcmV2aWV3TW9kYWwsIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG8ocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5TW9kYWxBdXRvQ2xvc2UobW9kYWwpOyAvLyBTdXBlcm1hcmtldFxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIG1vZGFsLiRjb250ZW50KTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0Q291bnRlciA9ICQoJy5uYXZVc2VyLWFjdGlvbiAuY2FydC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkY2FydFF1YW50aXR5LmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdXBlcm1hcmtldCAtIE9CUFMgTW9kXG4gICAgICAgICAgICBzaGFrZSgkKCcubmF2VXNlci1pdGVtLS1jYXJ0ID4gLm5hdlVzZXItYWN0aW9uJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IGFuIG1lc3NhZ2UgYm94IGlmIGEgbWVzc2FnZSBpcyBwYXNzZWRcbiAgICAgKiBIaWRlIHRoZSBib3ggaWYgdGhlIG1lc3NhZ2UgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKi9cbiAgICBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnLCB0aGlzLiRzY29wZSk7IC8vIFBhcGF0aGVtZXMgZml4IG1pc3NpbmcgJHNjb3BlXG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuXG4gICAgICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4IHx8IHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguYWRkQ2xhc3MoJ19oYXNTYWxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRoVGF4LnJlbW92ZUNsYXNzKCdfaGFzU2FsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXggfHwgcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5hZGRDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXgucmVtb3ZlQ2xhc3MoJ19oYXNTYWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVWaWV3KGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLndlaWdodCkpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2VpZ2h0Lmh0bWwoZGF0YS53ZWlnaHQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB2YXJpYXRpb25faWQgaWYgaXQgZXhpc3RzIGZvciBhZGRpbmcgdG8gd2lzaGxpc3RcbiAgICAgICAgaWYgKGRhdGEudmFyaWFudElkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdpc2hsaXN0VmFyaWF0aW9uLnZhbChkYXRhLnZhcmlhbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBTS1UgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnNrdSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dChkYXRhLnNrdSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFVQQyBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEudXBjKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KGRhdGEudXBjKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgTVBOIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5tcG4pIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQoZGF0YS5tcG4pO1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZpZXdNb2RlbC5tcG4uJHZhbHVlLmRhdGEoJ29yaWdpbmFsTXBuJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwubXBuLiR2YWx1ZS50ZXh0KHZpZXdNb2RlbC5tcG4uJHZhbHVlLmRhdGEoJ29yaWdpbmFsTXBuJykpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJGxhYmVsLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgXy5pc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5OiBzaG93IC8gaGlkZSBzdG9jayBiYWRnZVxuICAgICAgICBpZiAoZGF0YS5pbnN0b2NrICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kYmFkZ2UucmVtb3ZlQ2xhc3MoJ19vdXRzdG9jaycpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgJChlbCkudGV4dCgkKGVsKS5kYXRhKCdpbnN0b2NrTWVzc2FnZScpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdmlld01vZGVsLnN0b2NrLiRiYWRnZS5hZGRDbGFzcygnX291dHN0b2NrJykudGV4dChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRiYWRnZS5hZGRDbGFzcygnX291dHN0b2NrJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAkKGVsKS50ZXh0KCQoZWwpLmRhdGEoJ291dHN0b2NrTWVzc2FnZScpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcblxuICAgICAgICAvLyBJZiBCdWxrIFByaWNpbmcgcmVuZGVyZWQgSFRNTCBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcyAmJiBjb250ZW50KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCcuX2FkZFRvQ2FydFZpc2liaWxpdHknKS5maWx0ZXIoJzpoaWRkZW4nKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5maW5kKCcuX2FkZFRvQ2FydFZpc2liaWxpdHknKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1jaGlhcmEgZWRpdGVkIGZvciBhbHNvLWJvdWdodFxuICAgICAgICB0aGlzLnByaWNlID0gZGF0YS5wcmljZTtcbiAgICAgICAgdGhpcy4kc2NvcGUudHJpZ2dlcigncHJpY2UtY2hhbmdlJyk7XG5cbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdEltYWdlKGRhdGEuaW1hZ2UpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS50cmlnZ2VyKCd1cGRhdGVQcm9kdWN0QXR0cmlidXRlcycpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGZvciBkcm9wZG93bi1zd2F0Y2hlc1xuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjdXN0b20gdGFicyBieSBwYXJzaW5nIHByb2R1Y3QgZGVzY3JpcHRpb25cbiAgICAgKiAoQWRkZWQgYnkgUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0KVxuICAgICAqL1xuICAgIGluaXRDdXN0b21UYWJzKCkge1xuICAgICAgICBjb25zdCAkY3VzdG9tVGFicyA9ICQoJ1tkYXRhLWN1c3RvbS10YWJdJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoJGN1c3RvbVRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkdGFicyA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiA+IC50YWJzJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICBjb25zdCAkdGFic0NvbnRlbnQgPSAkKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gPiAudGFicy1jb250ZW50cycsIHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoJHRhYnMubGVuZ3RoID09PSAwIHx8ICR0YWJzQ29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRjdXN0b21UYWJzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0ICR0aXRsZSA9ICRlbC5maW5kKCdbZGF0YS1jdXN0b20tdGFiLXRpdGxlXScpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSAkdGl0bGUuaHRtbCgpO1xuXG4gICAgICAgICAgICBsZXQgZXhwYW5kID0gJHRpdGxlLmRhdGEoJ2V4cGFuZCcpO1xuXG4gICAgICAgICAgICBpZiAoIWV4cGFuZCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZCA9ICdWaWV3IEFsbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjbG9zZSA9ICR0aXRsZS5kYXRhKCdjbG9zZScpO1xuXG4gICAgICAgICAgICBpZiAoIWNsb3NlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2UgPSAnQ2xvc2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkdGl0bGUucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSAkZWwuaHRtbCgpO1xuXG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICR0YWJzLmFwcGVuZChgPGxpIGNsYXNzPVwidGFiIHRhYi0tY3VzdG9tIHRhYi0tY3VzdG9tLSR7aX1cIj48YSBjbGFzcz1cInRhYi10aXRsZVwiIGhyZWY9XCIjdGFiLWN1c3RvbS0ke2l9XCI+JHt0aXRsZX08L2E+PC9saT5gKTtcbiAgICAgICAgICAgICR0YWJzQ29udGVudC5hcHBlbmQoYDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCB0YWItY29udGVudC0tY3VzdG9tIHRhYi1jb250ZW50LS1jdXN0b20tJHtpfVwiIGlkPVwidGFiLWN1c3RvbS0ke2l9XCIgZGF0YS1wYXBhdGhlbWVzLW1vYmlsZS1jb2xsYXBzZT48aDIgY2xhc3M9XCJiZWF1dGlmeV9fcGFnZS1oZWFkaW5nXCI+JHt0aXRsZX08L2gyPjxkaXYgY2xhc3M9XCJwcm9kdWN0Vmlldy1jdXN0b20tdGFiQ29udGVudCBwYXBhdGhlbWVzLW1vYmlsZS1jb2xsYXBzZS1jb250ZW50XCIgZGF0YS1wYXBhdGhlbWVzLW1vYmlsZS1jb2xsYXBzZS1jb250ZW50PiR7Y29udGVudH08L2Rpdj48YSBocmVmPVwiI1wiIGNsYXNzPVwicGFwYXRoZW1lcy1tb2JpbGUtY29sbGFwc2UtaGFuZGxlXCIgZGF0YS1wYXBhdGhlbWVzLW1vYmlsZS1jb2xsYXBzZS1oYW5kbGU+PHNwYW4gY2xhc3M9XCJvblwiPiR7ZXhwYW5kfTwvc3Bhbj48c3BhbiBjbGFzcz1cIm9mZlwiPiR7Y2xvc2V9PC9zcGFuPjwvYT48L2Rpdj5gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgb25NaW5pUHJldmlld01vZGFsT3BlbigpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtYWN0aXZlTW9kYWwtLW1pbmlQcmV2aWV3Jyk7XG4gICAgfVxuXG4gICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgb25NaW5pUHJldmlld01vZGFsQ2xvc2UoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLWFjdGl2ZU1vZGFsLS1taW5pUHJldmlldycpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0b0Nsb3NlVGltZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuYXV0b0Nsb3NlVGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuYXV0b0Nsb3NlVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICBhcHBseU1vZGFsQXV0b0Nsb3NlKG1vZGFsKSB7XG4gICAgICAgIGNvbnN0ICRhdXRvQ2xvc2VFbCA9IG1vZGFsLiRtb2RhbC5maW5kKCdbZGF0YS1hdXRvLWNsb3NlXScpO1xuICAgICAgICBpZiAoJGF1dG9DbG9zZUVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzZWMgPSAkYXV0b0Nsb3NlRWwuZGF0YSgnYXV0b0Nsb3NlJykgfHwgNTtcbiAgICAgICAgICAgIGNvbnN0ICRjb3VudCA9ICRhdXRvQ2xvc2VFbC5maW5kKCcuY291bnQnKTtcbiAgICAgICAgICAgICRjb3VudC5odG1sKHNlYyk7XG5cbiAgICAgICAgICAgIG1vZGFsLmF1dG9DbG9zZVRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgIGlmIChzZWMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYy0tO1xuICAgICAgICAgICAgICAgICAgICAkY291bnQuaHRtbChzZWMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG1vZGFsLmF1dG9DbG9zZVRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuYXV0b0Nsb3NlVGltZXIgPSBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlcklFID0gISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmV4cG9ydCBjb25zdCBjb252ZXJ0SW50b0FycmF5ID0gY29sbGVjdGlvbiA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb2xsZWN0aW9uKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBBUEFUSEVNRVMgU0FSQUhNQVJLRVQgQ1VTVE9NSVpBVElPTjpcbi8vIC0gVXNpbmcgc2xpY2sgY2Fyb3VzZWwgZm9yIGltYWdlIHRodW1ibmFpbHMuXG4vLyAtIFVzaW5nIGJhZ3VldHRlQm94IGZvciBpbWFnZSBsaWdodGJveC5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbmltcG9ydCBiYWd1ZXR0ZUJveCBmcm9tICdiYWd1ZXR0ZWJveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1tYWluXScpO1xuICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbmF2XScpO1xuXG4gICAgICAgIGNvbnN0ICRkZWZTbGlkZSA9IHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xuICAgICAgICBjb25zdCBkZWZTbGlkZUlkeCA9ICRkZWZTbGlkZS5wYXJlbnQoKS5jaGlsZHJlbigpLmluZGV4KCRkZWZTbGlkZSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVJbmRleCA9IGRlZlNsaWRlSWR4O1xuXG4gICAgICAgIGNvbnN0IHVpZCA9IF8udW5pcXVlSWQoJycpO1xuXG4gICAgICAgIGlmICh0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcsIGBpbWFnZUdhbGxlcnlNYWluQ2Fyb3VzZWwke3VpZH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuYXR0cignaWQnLCBgaW1hZ2VHYWxsZXJ5TmF2Q2Fyb3VzZWwke3VpZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBfLmNsb25lKGltZ09iaik7XG5cbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuXG4gICAgc2V0QWx0ZXJuYXRlSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIGlmICghdGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSBfLmNsb25lKHRoaXMuY3VycmVudEltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuJG1haW5DYXJvdXNlbC5zbGljaygnc2xpY2tDdXJyZW50U2xpZGUnKTtcbiAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5lcShpKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgLypcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5zbGljaygnc2xpY2tHb1RvJywgdGhpcy5jdXJyZW50U2xpZGVJbmRleCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgICQoJy5zbGljay1jdXJyZW50JywgdGhpcy4kbmF2Q2Fyb3VzZWwpLnJlbW92ZUNsYXNzKCdzbGljay1jdXJyZW50Jyk7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stc2xpZGUnKS5lcSh0aGlzLmN1cnJlbnRTbGlkZUluZGV4KS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwpO1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEodGhpcy5jdXJyZW50U2xpZGVJbmRleCkuZmluZCgnaW1nJykuYXR0cignc3Jjc2V0JywgdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlU3Jjc2V0KTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKHRoaXMuY3VycmVudFNsaWRlSW5kZXgpLmZpbmQoJ2EnKS5hdHRyKCdocmVmJywgdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsKTtcblxuICAgICAgICAvLyBlbXB0eSBsaWdodGJveCBjb250ZW50cyBvZiBjdXJyZW50IGdhbGxleSBzbyB0aGF0IGl0IHdpbGwgYmUgY3JlYXRlZCBhZ2FpblxuICAgICAgICAkKCcjYmFndWV0dGVCb3gtc2xpZGVyJykuaHRtbCgnJyk7XG4gICAgICAgIGJhZ3VldHRlQm94LnJ1bihgIyR7dGhpcy4kbWFpbkNhcm91c2VsLmF0dHIoJ2lkJyl9YCk7IC8vIGluaXQgYWdhaW5cbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWxcbiAgICAgICAgICAgIC5vbignaW5pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW1nID0gJChgW2RhdGEtc2xpY2staW5kZXg9XCIke3RoaXMuY3VycmVudFNsaWRlSW5kZXh9XCJdIGltZ2AsIHRoaXMuJG1haW5DYXJvdXNlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkaW1nLmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsSW1nJykgfHwgJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkYS5kYXRhKCdvcmlnaW5hbFpvb20nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiAkYS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYmVmb3JlQ2hhbmdlJywgKGV2ZW50LCBzbGljaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gbmV4dFNsaWRlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJGltZyA9ICQoYFtkYXRhLXNsaWNrLWluZGV4PVwiJHtuZXh0U2xpZGV9XCJdIGltZ2AsIHRoaXMuJG1haW5DYXJvdXNlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGEgPSAkaW1nLmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge1xuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsSW1nJykgfHwgJGltZy5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICAgICAgem9vbUltYWdlVXJsOiAkYS5kYXRhKCdvcmlnaW5hbFpvb20nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0OiAkYS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVkSW1hZ2UgPSBudWxsO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignYWZ0ZXJDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IHRoaXMuY3VycmVudFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuJG5hdkNhcm91c2VsLmxlbmd0aCA+IDAgPyBgIyR7dGhpcy4kbmF2Q2Fyb3VzZWwuYXR0cignaWQnKX1gIDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDgwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwub24oJ3NldFBvc2l0aW9uJywgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljayA9IHRoaXMuJG5hdkNhcm91c2VsLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmIChzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdyA+PSBzbGljay5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmZpbmQoJy5zbGljay10cmFjaycpLmNzcygndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5vbignaW5pdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLm9uKCdrZXlwcmVzcycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMTMgfHwga2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdzbGlja0dvVG8nLCAkKGV2ZW50LnRhcmdldCkuZGF0YSgnc2xpY2tJbmRleCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG5hdkNhcm91c2VsLmRhdGEoJ2ltYWdlR2FsbGVyeU5hdkhvcml6b250YWwnKSkge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KHRoaXMuJG5hdkNhcm91c2VsLmRhdGEoJ2ltYWdlLWdhbGxlcnktbmF2LXNsaWRlcycpLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5jdXJyZW50U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KHRoaXMuJG5hdkNhcm91c2VsLmRhdGEoJ2ltYWdlLWdhbGxlcnktbmF2LXNsaWRlcycpLCAxMCksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5jdXJyZW50U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB9LCAyMDApO1xuXG4gICAgICAgIGJhZ3VldHRlQm94LnJ1bihgIyR7dGhpcy4kbWFpbkNhcm91c2VsLmF0dHIoJ2lkJyl9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHdpc2hsaXN0IG5hbWUuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNoTGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aXNobGlzdERlbGV0ZUNvbmZpcm0oKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9