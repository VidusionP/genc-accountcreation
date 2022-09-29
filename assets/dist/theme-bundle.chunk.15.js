(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/papathemes/instant-load.js":
/*!**********************************************!*\
  !*** ./assets/js/papathemes/instant-load.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/delay */ "./node_modules/lodash/delay.js");
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/papathemes/theme-utils.js");




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var isTouchDevice = Object(_theme_utils__WEBPACK_IMPORTED_MODULE_9__["checkTouchDevice"])();
var history = window.history;
var Preloader = {
  cache: {},
  cacheLimit: 100,
  loading: {},

  /**
   * Wait until no other the same url loading
   * @param {String} cacheKey
   */
  waitLoading: function waitLoading(cacheKey) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Preloader.loading[cacheKey]) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return new Promise(function (resolve) {
                var check = function check() {
                  if (!Preloader.loading[cacheKey]) {
                    resolve();
                  } else {
                    lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(check, 300);
                  }
                };

                check();
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * @param {Function} request Promise function
   * @param {String} cacheKey
   * @return {Promise}
   */
  load: function load(request, cacheKey) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.waitLoading(cacheKey);

            case 2:
              if (!Preloader.getCache(cacheKey)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", Preloader.getCache(cacheKey));

            case 4:
              Preloader.loading[cacheKey] = true;
              _context2.prev = 5;
              _context2.next = 8;
              return request();

            case 8:
              response = _context2.sent;
              Preloader.saveCache(response, cacheKey);
              delete Preloader.loading[cacheKey];
              return _context2.abrupt("return", response);

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](5);
              delete Preloader.loading[cacheKey];
              throw _context2.t0;

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 14]]);
    }))();
  },
  getCache: function getCache(cacheKey) {
    if (cacheKey && Preloader.cache[cacheKey]) {
      return Preloader.cache[cacheKey];
    }

    return null;
  },
  saveCache: function saveCache(data, cacheKey) {
    if (cacheKey) {
      if (lodash_size__WEBPACK_IMPORTED_MODULE_1___default()(Preloader.cache) >= Preloader.cacheLimit) {
        for (var k in Preloader.cache) {
          if (Preloader.cache.hasOwnProperty(k)) {
            delete Preloader.cache[k];
            break;
          }
        }
      }

      Preloader.cache[cacheKey] = data;
    }
  }
};

var InstantQuickView = /*#__PURE__*/function () {
  function InstantQuickView(context) {
    this.context = context;
    this.modal = Object(_theme_global_modal__WEBPACK_IMPORTED_MODULE_4__["defaultModal"])();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }
  /**
   * Load a product quickview content
   * @param {String} productId
   * @return {Promise}
   */


  var _proto = InstantQuickView.prototype;

  _proto.loadProduct = function loadProduct(productId) {
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
          template: 'products/quick-view'
        }, function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };

    return Preloader.load(request, "quick-view|" + productId);
  };

  _proto.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    var _this2 = this;

    event.preventDefault();
    var $el = $(event.currentTarget);

    if (event.type === 'click') {
      this.modal.open({
        size: 'large'
      });
    }

    this.loadProduct($el.data('productId')).then(function (response) {
      if (event.type === 'click') {
        _this2.modal.updateContent(response);

        _this2.modal.$content.find('.productView').addClass('productView--quickView');

        _this2.modal.$content.find('[data-slick]').slick();

        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          var $quickView = _this2.modal.$content.find('.quickView');

          var product;

          if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this2.context, {
              enableAlsoBought: true
            }));
          } else {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, _this2.context);
          }

          $('body').trigger('loaded.quickview', [product]);
          return product;
        }, 200);

        if (window.addthis && typeof window.addthis.toolbox === 'function') {
          window.addthis.toolbox('.addthis_toolbox');
        }
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    $('body').on('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };

  _proto.unbindEvents = function unbindEvents() {
    $('body').off('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };

  return InstantQuickView;
}();

var InstantLoad = /*#__PURE__*/function () {
  function InstantLoad(context) {
    // Won't init on touch screen
    if (isTouchDevice) {
      return;
    }

    this.context = context;
    this.$head = $('head');
    this.$body = $('body');
    this.$pageBody = $('.body').first();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.onLoadPageManually = this.onLoadPageManually.bind(this);
    this.onPopstate = this.onPopstate.bind(this);

    if (!history.state) {
      history.replaceState({
        instantload: true,
        pageType: this.context.pageType
      }, document.title, window.location);
    }

    this.unbindEvents();
    this.bindEvents();
  }

  var _proto2 = InstantLoad.prototype;

  _proto2.initGlobal = function initGlobal($scope) {
    Object(_theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document));
    Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])('[data-collapsible]', {
      $context: $scope
    });
    $('[data-slick]', $scope).slick();

    if (window.addthis && typeof window.addthis.toolbox === 'function') {
      window.addthis.toolbox('.addthis_toolbox');
    }
  };

  _proto2.redirect = function redirect(url) {
    window.location = url;
  };

  _proto2.isUnsupportedPage = function isUnsupportedPage(response) {
    return response.trim() === 'UNSUPPORTED' || !$(response).first().is('#instantload-html-element');
  };

  _proto2.loadPage = function loadPage(url, show, pushState, pageType) {
    var _this3 = this;

    if (show) {
      this.$pageBody.addClass('instantload-loading');
    }

    if (pushState) {
      try {
        history.pushState({
          instantload: true,
          pageType: this.context.pageType
        }, null, url);
      } catch (e) {
        if (show) {
          return this.redirect(url);
        }

        return;
      }
    }

    var config;

    if (pageType === 'home') {
      config = {
        carousel: this.context.homepage_show_carousel,
        products: {
          new: {
            limit: this.context.product_new_count
          },
          featured: {
            limit: this.context.product_featured_count
          },
          top_sellers: {
            limit: this.context.product_top_count
          }
        },
        blog: {
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        customer: {
          recently_viewed_products: {
            limit: this.context.product_recently_viewed
          }
        },
        shop_by_brand: {
          limit: this.context.sidebar_shop_by_brand
        },
        categories: true,
        cart: true
      };
    } else {
      config = {
        product: {
          videos: {
            limit: this.context.productpage_videos_count
          },
          reviews: {
            limit: this.context.productpage_reviews_count
          },
          related_products: {
            limit: this.context.productpage_related_products_count
          },
          similar_by_views: {
            limit: this.context.productpage_similar_by_views_count
          }
        },
        category: {
          shop_by_price: true,
          products: {
            limit: this.context.categorypage_products_per_page
          }
        },
        blog: {
          posts: {
            limit: 5,
            pages: 3,
            summary: 500
          },
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        products: {
          new: {
            limit: 5
          }
        },
        brands: {
          limit: 100
        },
        brand: {
          products: {
            limit: this.context.brandpage_products_per_page
          }
        },
        shop_by_brand: {
          limit: 9
        },
        customer: {
          recently_viewed_products: {
            limit: this.context.product_recently_viewed
          }
        },
        categories: true,
        cart: true
      };
    }

    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
          config: config
        }, function (err, response) {
          if (err || !response) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };

    Preloader.load(request, "loadPage|" + url).then(function (response) {
      if (show) {
        if (_this3.isUnsupportedPage(response)) {
          return _this3.redirect(url);
        }

        _this3.$body.trigger('beforeload.instantload', [response]);

        var $response = $(response);
        var $respBody = $response.find('#instantload-body-element');
        $('html, body').scrollTop(0); // Remove the previous appended <head>'s child tags

        _this3.$head.children().each(function (i, el) {
          var $elm = $(el);

          if ($elm.is('[data-instantload-head-dynamic]')) {
            $elm.remove();
          }
        }); // Remove title, meta[property] ...


        _this3.$head.children('title, meta[property], link[rel=amphtml], link[rel=canonical]').remove(); // Append new <head>'s child tags


        $response.find('#instantload-head-element').children().each(function (i, el) {
          var $elm = $(el);
          $elm.attr('data-instantload-head-dynamic', '');

          _this3.$head.append($elm);
        }); // Replace <body>'s classes

        _this3.$body.attr('class', $respBody.attr('class')); // Replace '.body' element


        var $pageBody = $response.find('#instantload-page-body');

        if ($pageBody.length > 0) {
          _this3.$pageBody.empty().append($pageBody.children());

          _this3.initGlobal(_this3.$pageBody);
        } // Replace top & bottom banners


        _this3.$body.find('[data-banner-location=top]').empty().append($response.find('#instantload-banners-top').children());

        _this3.$body.find('[data-banner-location=bottom]').empty().append($response.find('#instantload-banners-bottom').children()); // Remove and append the new script #instantload-script


        _this3.$body.find('#instantload-script').remove();

        _this3.$body.append($response.find('#instantload-script')); // Remove and append new elements match [data-instantload-body-dynamic]
        // Useful for loading third-party scripts


        _this3.$body.children('[data-instantload-body-dynamic]').remove();

        _this3.$body.append($respBody.children('[data-instantload-body-dynamic]'));

        _this3.$pageBody.removeClass('instantload-loading').addClass('instantload-loaded');

        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          return _this3.$pageBody.removeClass('instantload-loaded');
        }, 300);

        _this3.$body.trigger('loaded.instantload', [response]);
      }
    }).catch(function () {
      if (show) {
        return _this3.redirect(url);
      }
    });
  };

  _proto2.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    event.preventDefault();
    var $el = $(event.currentTarget);
    var data = $el.data('instantload');
    var url = (typeof data === 'object' ? data.url : null) || $el.data('instantloadUrl') || $el.prop('href');
    var pageType = typeof data === 'object' ? data.page : null;

    if (!url) {
      return;
    }

    this.loadPage(url, event.type === 'click', event.type === 'click', pageType);
  };

  _proto2.onPopstate = function onPopstate() {
    // console.log('onPopstate - state:', history.state);
    if (!history.state) {
      return;
    } // console.log(history);


    if (history.state.instantload) {
      this.loadPage(window.location, true, false, history.state.pageType);
    } else {
      // Unsupported pages instantly at this stage - reload it
      window.location.reload();
    }
  };

  _proto2.onLoadPageManually = function onLoadPageManually(event, url, eventType, pageType) {
    if (eventType === void 0) {
      eventType = '';
    }

    if (pageType === void 0) {
      pageType = null;
    }

    this.loadPage(url, eventType === 'click', eventType === 'click', pageType);
  };

  _proto2.bindEvents = function bindEvents() {
    $('body, [data-menu]').on('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').on('loadPage.instantload', this.onLoadPageManually);
    $(window).on('popstate', this.onPopstate);
  };

  _proto2.unbindEvents = function unbindEvents() {
    $('body, [data-menu]').off('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').off('loadPage.instantload', this.onLoadPageManually);
    $(window).off('popstate', this.onPopstate);
  };

  return InstantLoad;
}();

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // eslint-disable-next-line no-new
  new InstantQuickView(context); // eslint-disable-next-line no-new

  new InstantLoad(context);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);


function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());

    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }

    return cb(false);
  }

  return validate;
}

/* harmony default export */ __webpack_exports__["default"] = (minMaxValidate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");

 // Hook our SCSS framework form field status classes into the nod validation system before use

nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorClass = 'form-field--error';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.successClass = 'form-field--success';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorMessageClass = 'form-inlineMessage'; // Register validate functions

nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.checkFunctions['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_baseDelay.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseDelay.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/delay.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/delay.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseDelay = __webpack_require__(/*! ./_baseDelay */ "./node_modules/lodash/_baseDelay.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

module.exports = delay;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/size.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/size.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9pbnN0YW50LWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VEZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOlsiaXNUb3VjaERldmljZSIsImNoZWNrVG91Y2hEZXZpY2UiLCJoaXN0b3J5Iiwid2luZG93IiwiUHJlbG9hZGVyIiwiY2FjaGUiLCJjYWNoZUxpbWl0IiwibG9hZGluZyIsIndhaXRMb2FkaW5nIiwiY2FjaGVLZXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrIiwibG9hZCIsInJlcXVlc3QiLCJnZXRDYWNoZSIsInJlc3BvbnNlIiwic2F2ZUNhY2hlIiwiZGF0YSIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIkluc3RhbnRRdWlja1ZpZXciLCJjb250ZXh0IiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvbk1vdXNlRW50ZXJPckNsaWNrIiwiYmluZCIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJsb2FkUHJvZHVjdCIsInByb2R1Y3RJZCIsInJlamVjdCIsInV0aWxzIiwiYXBpIiwicHJvZHVjdCIsImdldEJ5SWQiLCJ0ZW1wbGF0ZSIsImVyciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZWwiLCIkIiwiY3VycmVudFRhcmdldCIsInR5cGUiLCJvcGVuIiwic2l6ZSIsInRoZW4iLCJ1cGRhdGVDb250ZW50IiwiJGNvbnRlbnQiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsIiRxdWlja1ZpZXciLCJsZW5ndGgiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCJ0cmlnZ2VyIiwiYWRkdGhpcyIsInRvb2xib3giLCJvbiIsIm9mZiIsIkluc3RhbnRMb2FkIiwiJGhlYWQiLCIkYm9keSIsIiRwYWdlQm9keSIsImZpcnN0Iiwib25Mb2FkUGFnZU1hbnVhbGx5Iiwib25Qb3BzdGF0ZSIsInN0YXRlIiwicmVwbGFjZVN0YXRlIiwiaW5zdGFudGxvYWQiLCJwYWdlVHlwZSIsImRvY3VtZW50IiwidGl0bGUiLCJsb2NhdGlvbiIsImluaXRHbG9iYWwiLCIkc2NvcGUiLCJmb3VuZGF0aW9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGNvbnRleHQiLCJyZWRpcmVjdCIsInVybCIsImlzVW5zdXBwb3J0ZWRQYWdlIiwidHJpbSIsImlzIiwibG9hZFBhZ2UiLCJzaG93IiwicHVzaFN0YXRlIiwiZSIsImNvbmZpZyIsImNhcm91c2VsIiwiaG9tZXBhZ2Vfc2hvd19jYXJvdXNlbCIsInByb2R1Y3RzIiwibmV3IiwibGltaXQiLCJwcm9kdWN0X25ld19jb3VudCIsImZlYXR1cmVkIiwicHJvZHVjdF9mZWF0dXJlZF9jb3VudCIsInRvcF9zZWxsZXJzIiwicHJvZHVjdF90b3BfY291bnQiLCJibG9nIiwicmVjZW50X3Bvc3RzIiwiaG9tZXBhZ2VfYmxvZ19wb3N0c19jb3VudCIsImN1c3RvbWVyIiwicmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzIiwicHJvZHVjdF9yZWNlbnRseV92aWV3ZWQiLCJzaG9wX2J5X2JyYW5kIiwic2lkZWJhcl9zaG9wX2J5X2JyYW5kIiwiY2F0ZWdvcmllcyIsImNhcnQiLCJ2aWRlb3MiLCJwcm9kdWN0cGFnZV92aWRlb3NfY291bnQiLCJyZXZpZXdzIiwicHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCIsInJlbGF0ZWRfcHJvZHVjdHMiLCJwcm9kdWN0cGFnZV9yZWxhdGVkX3Byb2R1Y3RzX2NvdW50Iiwic2ltaWxhcl9ieV92aWV3cyIsInByb2R1Y3RwYWdlX3NpbWlsYXJfYnlfdmlld3NfY291bnQiLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJjYXRlZ29yeXBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UiLCJwb3N0cyIsInBhZ2VzIiwic3VtbWFyeSIsImJyYW5kcyIsImJyYW5kIiwiYnJhbmRwYWdlX3Byb2R1Y3RzX3Blcl9wYWdlIiwiZ2V0UGFnZSIsIiRyZXNwb25zZSIsIiRyZXNwQm9keSIsInNjcm9sbFRvcCIsImNoaWxkcmVuIiwiZWFjaCIsImkiLCJlbCIsIiRlbG0iLCJyZW1vdmUiLCJhdHRyIiwiYXBwZW5kIiwiZW1wdHkiLCJyZW1vdmVDbGFzcyIsImNhdGNoIiwicHJvcCIsInBhZ2UiLCJyZWxvYWQiLCJldmVudFR5cGUiLCJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm1pblZhbHVlIiwicGFyc2VGbG9hdCIsInZhbCIsIm1heFZhbHVlIiwibm9kIiwiY2xhc3NlcyIsImVycm9yQ2xhc3MiLCJzdWNjZXNzQ2xhc3MiLCJlcnJvck1lc3NhZ2VDbGFzcyIsImNo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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4uL3RoZW1lL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcbmltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4uL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi4vdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IGNoZWNrVG91Y2hEZXZpY2UgfSBmcm9tICcuL3RoZW1lLXV0aWxzJztcblxuY29uc3QgaXNUb3VjaERldmljZSA9IGNoZWNrVG91Y2hEZXZpY2UoKTtcbmNvbnN0IGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbmNvbnN0IFByZWxvYWRlciA9IHtcbiAgICBjYWNoZToge30sXG4gICAgY2FjaGVMaW1pdDogMTAwLFxuICAgIGxvYWRpbmc6IHt9LFxuXG4gICAgLyoqXG4gICAgICogV2FpdCB1bnRpbCBubyBvdGhlciB0aGUgc2FtZSB1cmwgbG9hZGluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYWNoZUtleVxuICAgICAqL1xuICAgIGFzeW5jIHdhaXRMb2FkaW5nKGNhY2hlS2V5KSB7XG4gICAgICAgIGlmICghUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmRlbGF5KGNoZWNrLCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWVzdCBQcm9taXNlIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhY2hlS2V5XG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBsb2FkKHJlcXVlc3QsIGNhY2hlS2V5KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgYXdhaXQgdGhpcy53YWl0TG9hZGluZyhjYWNoZUtleSk7XG5cbiAgICAgICAgaWYgKFByZWxvYWRlci5nZXRDYWNoZShjYWNoZUtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcmVsb2FkZXIuZ2V0Q2FjaGUoY2FjaGVLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldID0gdHJ1ZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCk7XG4gICAgICAgICAgICBQcmVsb2FkZXIuc2F2ZUNhY2hlKHJlc3BvbnNlLCBjYWNoZUtleSk7XG4gICAgICAgICAgICBkZWxldGUgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkZWxldGUgUHJlbG9hZGVyLmxvYWRpbmdbY2FjaGVLZXldO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRDYWNoZShjYWNoZUtleSkge1xuICAgICAgICBpZiAoY2FjaGVLZXkgJiYgUHJlbG9hZGVyLmNhY2hlW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIHNhdmVDYWNoZShkYXRhLCBjYWNoZUtleSkge1xuICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIGlmIChfLnNpemUoUHJlbG9hZGVyLmNhY2hlKSA+PSBQcmVsb2FkZXIuY2FjaGVMaW1pdCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBQcmVsb2FkZXIuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFByZWxvYWRlci5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5jYWNoZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJlbG9hZGVyLmNhY2hlW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuY2xhc3MgSW5zdGFudFF1aWNrVmlldyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLm1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayA9IHRoaXMub25Nb3VzZUVudGVyT3JDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGEgcHJvZHVjdCBxdWlja3ZpZXcgY29udGVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9kdWN0SWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwcm9kdWN0cy9xdWljay12aWV3JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJlbG9hZGVyLmxvYWQocmVxdWVzdCwgYHF1aWNrLXZpZXd8JHtwcm9kdWN0SWR9YCk7XG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyT3JDbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLm9wZW4oeyBzaXplOiAnbGFyZ2UnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdCgkZWwuZGF0YSgncHJvZHVjdElkJykpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC4kY29udGVudC5maW5kKCcucHJvZHVjdFZpZXcnKS5hZGRDbGFzcygncHJvZHVjdFZpZXctLXF1aWNrVmlldycpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soKTtcbiAgICAgICAgICAgICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHF1aWNrVmlldyA9IHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnLnF1aWNrVmlldycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLWFsc28tYm91Z2h0XSAucHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtJywgJHF1aWNrVmlldykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcXVpY2tWaWV3LCBfLmV4dGVuZCh0aGlzLmNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogdHJ1ZSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRxdWlja1ZpZXcsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2xvYWRlZC5xdWlja3ZpZXcnLCBbcHJvZHVjdF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkdGhpcyAmJiB0eXBlb2Ygd2luZG93LmFkZHRoaXMudG9vbGJveCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkdGhpcy50b29sYm94KCcuYWRkdGhpc190b29sYm94Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXIgY2xpY2snLCAnLnF1aWNrdmlldywgLnF1aWNrdmlldy1hbHQnLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keScpLm9mZignbW91c2VlbnRlciBjbGljaycsICcucXVpY2t2aWV3LCAucXVpY2t2aWV3LWFsdCcsIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayk7XG4gICAgfVxufVxuXG5jbGFzcyBJbnN0YW50TG9hZCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAvLyBXb24ndCBpbml0IG9uIHRvdWNoIHNjcmVlblxuICAgICAgICBpZiAoaXNUb3VjaERldmljZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy4kaGVhZCA9ICQoJ2hlYWQnKTtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy4kcGFnZUJvZHkgPSAkKCcuYm9keScpLmZpcnN0KCk7XG5cbiAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrID0gdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5ID0gdGhpcy5vbkxvYWRQYWdlTWFudWFsbHkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBvcHN0YXRlID0gdGhpcy5vblBvcHN0YXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKCFoaXN0b3J5LnN0YXRlKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGluc3RhbnRsb2FkOiB0cnVlLCBwYWdlVHlwZTogdGhpcy5jb250ZXh0LnBhZ2VUeXBlIH0sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEdsb2JhbCgkc2NvcGUpIHtcbiAgICAgICAgZm91bmRhdGlvbigkKGRvY3VtZW50KSk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgnW2RhdGEtY29sbGFwc2libGVdJywgeyAkY29udGV4dDogJHNjb3BlIH0pO1xuICAgICAgICAkKCdbZGF0YS1zbGlja10nLCAkc2NvcGUpLnNsaWNrKCk7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkdGhpcyAmJiB0eXBlb2Ygd2luZG93LmFkZHRoaXMudG9vbGJveCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgd2luZG93LmFkZHRoaXMudG9vbGJveCgnLmFkZHRoaXNfdG9vbGJveCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVkaXJlY3QodXJsKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICB9XG5cbiAgICBpc1Vuc3VwcG9ydGVkUGFnZShyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UudHJpbSgpID09PSAnVU5TVVBQT1JURUQnIHx8ICEkKHJlc3BvbnNlKS5maXJzdCgpLmlzKCcjaW5zdGFudGxvYWQtaHRtbC1lbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgbG9hZFBhZ2UodXJsLCBzaG93LCBwdXNoU3RhdGUsIHBhZ2VUeXBlKSB7XG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICB0aGlzLiRwYWdlQm9keS5hZGRDbGFzcygnaW5zdGFudGxvYWQtbG9hZGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHB1c2hTdGF0ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGluc3RhbnRsb2FkOiB0cnVlLCBwYWdlVHlwZTogdGhpcy5jb250ZXh0LnBhZ2VUeXBlIH0sIG51bGwsIHVybCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbmZpZztcbiAgICAgICAgaWYgKHBhZ2VUeXBlID09PSAnaG9tZScpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBjYXJvdXNlbDogdGhpcy5jb250ZXh0LmhvbWVwYWdlX3Nob3dfY2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RfbmV3X2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0X2ZlYXR1cmVkX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b3Bfc2VsbGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0X3RvcF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsb2c6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50X3Bvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmhvbWVwYWdlX2Jsb2dfcG9zdHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgICAgICAgICAgICByZWNlbnRseV92aWV3ZWRfcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdF9yZWNlbnRseV92aWV3ZWQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuc2lkZWJhcl9zaG9wX2J5X2JyYW5kLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0cGFnZV92aWRlb3NfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJldmlld3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlZF9wcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0cGFnZV9yZWxhdGVkX3Byb2R1Y3RzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzaW1pbGFyX2J5X3ZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RwYWdlX3NpbWlsYXJfYnlfdmlld3NfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5jYXRlZ29yeXBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogNTAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZWNlbnRfcG9zdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuaG9tZXBhZ2VfYmxvZ19wb3N0c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5ldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBicmFuZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmJyYW5kcGFnZV9wcm9kdWN0c19wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgICAgICAgICAgICByZWNlbnRseV92aWV3ZWRfcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdF9yZWNlbnRseV92aWV3ZWQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNhcnQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgeyBjb25maWcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIHx8ICFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJlbG9hZGVyLmxvYWQocmVxdWVzdCwgYGxvYWRQYWdlfCR7dXJsfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVW5zdXBwb3J0ZWRQYWdlKHJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYmVmb3JlbG9hZC5pbnN0YW50bG9hZCcsIFtyZXNwb25zZV0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgJHJlc3BvbnNlID0gJChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgJHJlc3BCb2R5ID0gJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1ib2R5LWVsZW1lbnQnKTtcblxuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3AoMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByZXZpb3VzIGFwcGVuZGVkIDxoZWFkPidzIGNoaWxkIHRhZ3NcbiAgICAgICAgICAgICAgICB0aGlzLiRoZWFkLmNoaWxkcmVuKCkuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGVsbSA9ICQoZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsbS5pcygnW2RhdGEtaW5zdGFudGxvYWQtaGVhZC1keW5hbWljXScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZWxtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGl0bGUsIG1ldGFbcHJvcGVydHldIC4uLlxuICAgICAgICAgICAgICAgIHRoaXMuJGhlYWQuY2hpbGRyZW4oJ3RpdGxlLCBtZXRhW3Byb3BlcnR5XSwgbGlua1tyZWw9YW1waHRtbF0sIGxpbmtbcmVsPWNhbm9uaWNhbF0nKS5yZW1vdmUoKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG5ldyA8aGVhZD4ncyBjaGlsZCB0YWdzXG4gICAgICAgICAgICAgICAgJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1oZWFkLWVsZW1lbnQnKS5jaGlsZHJlbigpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbG0gPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsbS5hdHRyKCdkYXRhLWluc3RhbnRsb2FkLWhlYWQtZHluYW1pYycsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaGVhZC5hcHBlbmQoJGVsbSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIDxib2R5PidzIGNsYXNzZXNcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmF0dHIoJ2NsYXNzJywgJHJlc3BCb2R5LmF0dHIoJ2NsYXNzJykpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSAnLmJvZHknIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBjb25zdCAkcGFnZUJvZHkgPSAkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLXBhZ2UtYm9keScpO1xuICAgICAgICAgICAgICAgIGlmICgkcGFnZUJvZHkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYWdlQm9keS5lbXB0eSgpLmFwcGVuZCgkcGFnZUJvZHkuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdsb2JhbCh0aGlzLiRwYWdlQm9keSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0b3AgJiBib3R0b20gYmFubmVyc1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuZmluZCgnW2RhdGEtYmFubmVyLWxvY2F0aW9uPXRvcF0nKS5lbXB0eSgpLmFwcGVuZCgkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWJhbm5lcnMtdG9wJykuY2hpbGRyZW4oKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5maW5kKCdbZGF0YS1iYW5uZXItbG9jYXRpb249Ym90dG9tXScpLmVtcHR5KCkuYXBwZW5kKCRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtYmFubmVycy1ib3R0b20nKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbmQgYXBwZW5kIHRoZSBuZXcgc2NyaXB0ICNpbnN0YW50bG9hZC1zY3JpcHRcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmZpbmQoJyNpbnN0YW50bG9hZC1zY3JpcHQnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmFwcGVuZCgkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLXNjcmlwdCcpKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbmQgYXBwZW5kIG5ldyBlbGVtZW50cyBtYXRjaCBbZGF0YS1pbnN0YW50bG9hZC1ib2R5LWR5bmFtaWNdXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBsb2FkaW5nIHRoaXJkLXBhcnR5IHNjcmlwdHNcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmNoaWxkcmVuKCdbZGF0YS1pbnN0YW50bG9hZC1ib2R5LWR5bmFtaWNdJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQoJHJlc3BCb2R5LmNoaWxkcmVuKCdbZGF0YS1pbnN0YW50bG9hZC1ib2R5LWR5bmFtaWNdJykpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFnZUJvZHkucmVtb3ZlQ2xhc3MoJ2luc3RhbnRsb2FkLWxvYWRpbmcnKS5hZGRDbGFzcygnaW5zdGFudGxvYWQtbG9hZGVkJyk7XG4gICAgICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB0aGlzLiRwYWdlQm9keS5yZW1vdmVDbGFzcygnaW5zdGFudGxvYWQtbG9hZGVkJyksIDMwMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2xvYWRlZC5pbnN0YW50bG9hZCcsIFtyZXNwb25zZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTW91c2VFbnRlck9yQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBkYXRhID0gJGVsLmRhdGEoJ2luc3RhbnRsb2FkJyk7XG4gICAgICAgIGNvbnN0IHVybCA9ICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhLnVybCA6IG51bGwpIHx8ICRlbC5kYXRhKCdpbnN0YW50bG9hZFVybCcpIHx8ICRlbC5wcm9wKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHBhZ2VUeXBlID0gdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnID8gZGF0YS5wYWdlIDogbnVsbDtcblxuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkUGFnZSh1cmwsIGV2ZW50LnR5cGUgPT09ICdjbGljaycsIGV2ZW50LnR5cGUgPT09ICdjbGljaycsIHBhZ2VUeXBlKTtcbiAgICB9XG5cbiAgICBvblBvcHN0YXRlKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25Qb3BzdGF0ZSAtIHN0YXRlOicsIGhpc3Rvcnkuc3RhdGUpO1xuICAgICAgICBpZiAoIWhpc3Rvcnkuc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoaXN0b3J5KTtcblxuICAgICAgICBpZiAoaGlzdG9yeS5zdGF0ZS5pbnN0YW50bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkUGFnZSh3aW5kb3cubG9jYXRpb24sIHRydWUsIGZhbHNlLCBoaXN0b3J5LnN0YXRlLnBhZ2VUeXBlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVuc3VwcG9ydGVkIHBhZ2VzIGluc3RhbnRseSBhdCB0aGlzIHN0YWdlIC0gcmVsb2FkIGl0XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWRQYWdlTWFudWFsbHkoZXZlbnQsIHVybCwgZXZlbnRUeXBlID0gJycsIHBhZ2VUeXBlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCwgZXZlbnRUeXBlID09PSAnY2xpY2snLCBldmVudFR5cGUgPT09ICdjbGljaycsIHBhZ2VUeXBlKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAkKCdib2R5LCBbZGF0YS1tZW51XScpLm9uKCdtb3VzZWVudGVyIGNsaWNrJywgJ1tkYXRhLWluc3RhbnRsb2FkXSwgW2RhdGEtaW5zdGFudGxvYWQtdXJsXScsIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayk7XG4gICAgICAgICQoJ2JvZHknKS5vbignbG9hZFBhZ2UuaW5zdGFudGxvYWQnLCB0aGlzLm9uTG9hZFBhZ2VNYW51YWxseSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wc3RhdGUpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keSwgW2RhdGEtbWVudV0nKS5vZmYoJ21vdXNlZW50ZXIgY2xpY2snLCAnW2RhdGEtaW5zdGFudGxvYWRdLCBbZGF0YS1pbnN0YW50bG9hZC11cmxdJywgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrKTtcbiAgICAgICAgJCgnYm9keScpLm9mZignbG9hZFBhZ2UuaW5zdGFudGxvYWQnLCB0aGlzLm9uTG9hZFBhZ2VNYW51YWxseSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcHN0YXRlKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IEluc3RhbnRRdWlja1ZpZXcoY29udGV4dCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgbmV3IEluc3RhbnRMb2FkKGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gbWluTWF4VmFsaWRhdGUobWluSW5wdXRTZWxlY3RvciwgbWF4SW5wdXRTZWxlY3Rvcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGNiKSB7XG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gcGFyc2VGbG9hdCgkKG1pbklucHV0U2VsZWN0b3IpLnZhbCgpKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBwYXJzZUZsb2F0KCQobWF4SW5wdXRTZWxlY3RvcikudmFsKCkpO1xuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA+IG1pblZhbHVlIHx8IF8uaXNOYU4obWF4VmFsdWUpIHx8IF8uaXNOYU4obWluVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2IoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluTWF4VmFsaWRhdGU7XG4iLCJpbXBvcnQgbm9kIGZyb20gJ25vZC12YWxpZGF0ZSc7XG5pbXBvcnQgbWluTWF4VmFsaWRhdGUgZnJvbSAnLi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUnO1xuXG4vLyBIb29rIG91ciBTQ1NTIGZyYW1ld29yayBmb3JtIGZpZWxkIHN0YXR1cyBjbGFzc2VzIGludG8gdGhlIG5vZCB2YWxpZGF0aW9uIHN5c3RlbSBiZWZvcmUgdXNlXG5ub2QuY2xhc3Nlcy5lcnJvckNsYXNzID0gJ2Zvcm0tZmllbGQtLWVycm9yJztcbm5vZC5jbGFzc2VzLnN1Y2Nlc3NDbGFzcyA9ICdmb3JtLWZpZWxkLS1zdWNjZXNzJztcbm5vZC5jbGFzc2VzLmVycm9yTWVzc2FnZUNsYXNzID0gJ2Zvcm0taW5saW5lTWVzc2FnZSc7XG5cbi8vIFJlZ2lzdGVyIHZhbGlkYXRlIGZ1bmN0aW9uc1xubm9kLmNoZWNrRnVuY3Rpb25zWydtaW4tbWF4J10gPSBtaW5NYXhWYWxpZGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYW4gQVNDSUkgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbnZhciBhc2NpaVNpemUgPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpU2l6ZTtcbiIsIi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZGVsYXlgIGFuZCBgXy5kZWZlcmAgd2hpY2ggYWNjZXB0cyBgYXJnc2BcbiAqIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3YWl0IFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IGludm9jYXRpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7bnVtYmVyfE9iamVjdH0gUmV0dXJucyB0aGUgdGltZXIgaWQgb3IgdGltZW91dCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEZWxheShmdW5jLCB3YWl0LCBhcmdzKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7IH0sIHdhaXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEZWxheTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZTtcbiIsInZhciBhc2NpaVNpemUgPSByZXF1aXJlKCcuL19hc2NpaVNpemUnKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHVuaWNvZGVTaXplID0gcmVxdWlyZSgnLi9fdW5pY29kZVNpemUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2Ygc3ltYm9scyBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzdHJpbmcgc2l6ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nU2l6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVNpemUoc3RyaW5nKVxuICAgIDogYXNjaWlTaXplKHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nU2l6ZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBhIFVuaWNvZGUgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVTaXplKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gcmVVbmljb2RlLmxhc3RJbmRleCA9IDA7XG4gIHdoaWxlIChyZVVuaWNvZGUudGVzdChzdHJpbmcpKSB7XG4gICAgKytyZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlU2l6ZTtcbiIsInZhciBiYXNlRGVsYXkgPSByZXF1aXJlKCcuL19iYXNlRGVsYXknKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKlxuICogSW52b2tlcyBgZnVuY2AgYWZ0ZXIgYHdhaXRgIG1pbGxpc2Vjb25kcy4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGFyZVxuICogcHJvdmlkZWQgdG8gYGZ1bmNgIHdoZW4gaXQncyBpbnZva2VkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdCBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSBpbnZvY2F0aW9uLlxuICogQHBhcmFtIHsuLi4qfSBbYXJnc10gVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lciBpZC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWxheShmdW5jdGlvbih0ZXh0KSB7XG4gKiAgIGNvbnNvbGUubG9nKHRleHQpO1xuICogfSwgMTAwMCwgJ2xhdGVyJyk7XG4gKiAvLyA9PiBMb2dzICdsYXRlcicgYWZ0ZXIgb25lIHNlY29uZC5cbiAqL1xudmFyIGRlbGF5ID0gYmFzZVJlc3QoZnVuY3Rpb24oZnVuYywgd2FpdCwgYXJncykge1xuICByZXR1cm4gYmFzZURlbGF5KGZ1bmMsIHRvTnVtYmVyKHdhaXQpIHx8IDAsIGFyZ3MpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsYXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKSxcbiAgICBzdHJpbmdTaXplID0gcmVxdWlyZSgnLi9fc3RyaW5nU2l6ZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogR2V0cyB0aGUgc2l6ZSBvZiBgY29sbGVjdGlvbmAgYnkgcmV0dXJuaW5nIGl0cyBsZW5ndGggZm9yIGFycmF5LWxpa2VcbiAqIHZhbHVlcyBvciB0aGUgbnVtYmVyIG9mIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIGZvciBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbGxlY3Rpb24gc2l6ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zaXplKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5zaXplKHsgJ2EnOiAxLCAnYic6IDIgfSk7XG4gKiAvLyA9PiAyXG4gKlxuICogXy5zaXplKCdwZWJibGVzJyk7XG4gKiAvLyA9PiA3XG4gKi9cbmZ1bmN0aW9uIHNpemUoY29sbGVjdGlvbikge1xuICBpZiAoY29sbGVjdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGNvbGxlY3Rpb24pID8gc3RyaW5nU2l6ZShjb2xsZWN0aW9uKSA6IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICB9XG4gIHZhciB0YWcgPSBnZXRUYWcoY29sbGVjdGlvbik7XG4gIGlmICh0YWcgPT0gbWFwVGFnIHx8IHRhZyA9PSBzZXRUYWcpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5zaXplO1xuICB9XG4gIHJldHVybiBiYXNlS2V5cyhjb2xsZWN0aW9uKS5sZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iXSwic291cmNlUm9vdCI6IiJ9