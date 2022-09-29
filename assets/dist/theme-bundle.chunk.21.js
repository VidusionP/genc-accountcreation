(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./assets/js/papathemes/card-swatches/Card.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/Card.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var $scope = _ref.$scope,
        $attributesContainer = _ref.$attributesContainer,
        productId = _ref.productId,
        productViewFile = _ref.productViewFile,
        attributesTemplate = _ref.attributesTemplate,
        templateCustomTags = _ref.templateCustomTags,
        addToCartFormSelector = _ref.addToCartFormSelector,
        $cardImage = _ref.$cardImage,
        imageSize = _ref.imageSize,
        inputFinderFunc = _ref.inputFinderFunc,
        swatchesLimit = _ref.swatchesLimit,
        imageReplacerFunc = _ref.imageReplacerFunc,
        includeOptions = _ref.includeOptions,
        displayInStockOnly = _ref.displayInStockOnly,
        autoSelectOptionValues = _ref.autoSelectOptionValues,
        _ref$autoInit = _ref.autoInit,
        autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
        graphQLNode = _ref.graphQLNode;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.imageSize = imageSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.includeOptions = includeOptions;
    this.displayInStockOnly = displayInStockOnly;
    this.autoSelectOptionValues = autoSelectOptionValues;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;

    if (this.autoInit) {
      this.init();
    }
  }

  var _proto = Card.prototype;

  _proto.init = function init() {
    if (this.displayInStockOnly) {
      this.requestInStockAttributes();
    } else {
      if (this.graphQLNode) {
        this.buildProductOptions();
      } else {
        this.requestProductOptions();
      }
    }
  };

  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;

    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};

        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };

  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;

    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };

  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;

    if (attributesData === void 0) {
      attributesData = {};
    }

    var data = {
      attributes: []
    };

    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;

        if (_this3.includeOptions.length > 0 && !_this3.includeOptions.includes(String(optionNode.displayName).toLocaleUpperCase())) {
          return _options;
        }

        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;

            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors || valueNode.label) {
                _values.push({
                  content: valueNode.imageUrl ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors ? valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join('') : "<span class=\"form-option-variant\">" + valueNode.label + "</span>",
                  label: valueNode.label,
                  type: valueNode.imageUrl || valueNode.hexColors ? 'swatch' : 'rectangle',
                  attributeId: optionNode.entityId,
                  attributeValue: valueNode.entityId
                });
              }
            }

            return _values;
          }, []);

          if (values.length > 0) {
            _options.push(values);
          }
        }

        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));

          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });

        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }

    if (data.attributes.length === 0) {
      return;
    }

    var html = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;

    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append("<input type=\"hidden\" name=\"action\" value=\"add\">");
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';

        if (optionNode.values) {
          defaultValue = _this3.autoSelectOptionValues && optionNode.values.edges.length > 0 ? optionNode.values.edges[0].node.entityId : '';
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, defaultValue);

          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }

        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
    } else {
      // build Form from AJAX request
      var _$form = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide(); // Remove all 'id' to avoid duplicated label.for in quick-view


      _$form.find('[id]').prop('id', null);
    }

    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');

      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);

      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);

      _this3.requestAttributesChange($form);
    });

    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');

        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }

        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };

  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;

    if (!window.FormData) {
      return;
    }

    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
            image = _resp$data.image,
            price = _resp$data.price;

        if (_this4.imageReplacerFunc) {
          var img = image ? image.data.replace('{:size}', _this4.imageSize) : null;

          _this4.imageReplacerFunc(_this4.$cardImage, img);
        } else {
          if (image) {
            var _img = image.data.replace('{:size}', _this4.imageSize);

            if (!_this4.$cardImage.data('originalSrc')) {
              _this4.$cardImage.data('originalSrc', _this4.$cardImage.attr('src')).data('originalSrcset', _this4.$cardImage.attr('srcset'));
            }

            _this4.$cardImage.attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
          } else if (_this4.$cardImage.data('originalSrc')) {
            _this4.$cardImage.attr('src', _this4.$cardImage.data('originalSrc')).attr('srcset', _this4.$cardImage.data('originalSrcset')).attr('data-srcset', _this4.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
          }
        }

        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);

          _this4.updatePriceView(viewModel, price);
        }
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
      }
    };
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
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
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
  };

  return Card;
}();

/* harmony default export */ __webpack_exports__["default"] = (Card);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/papathemes/card-swatches/ProductSwatches.js":
/*!***************************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/ProductSwatches.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./assets/js/papathemes/card-swatches/Card.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$cardSelector = _ref.cardSelector,
        cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card' : _ref$cardSelector,
        _ref$productIdSelecto = _ref.productIdSelector,
        productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
        _ref$findProductIdByI = _ref.findProductIdByImg,
        findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
        _ref$swatchesContaine = _ref.swatchesContainerSelector,
        swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
        _ref$cardImageSelecto = _ref.cardImageSelector,
        cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
        _ref$addToCartFormSel = _ref.addToCartFormSelector,
        addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
        _ref$productViewFile = _ref.productViewFile,
        productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
        _ref$attributesTempla = _ref.attributesTemplate,
        attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches>\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item productSwatches-swatches-item--{{type}}\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
        _ref$templateCustomTa = _ref.templateCustomTags,
        templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
        _ref$imageSize = _ref.imageSize,
        imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
        _ref$inputFinderFunc = _ref.inputFinderFunc,
        inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
        _ref$swatchesLimit = _ref.swatchesLimit,
        swatchesLimit = _ref$swatchesLimit === void 0 ? 5 : _ref$swatchesLimit,
        _ref$imageReplacerFun = _ref.imageReplacerFunc,
        imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
        _ref$includeOptions = _ref.includeOptions,
        includeOptions = _ref$includeOptions === void 0 ? [] : _ref$includeOptions,
        _ref$displayInStockOn = _ref.displayInStockOnly,
        displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
        _ref$autoSelectOption = _ref.autoSelectOptionValues,
        autoSelectOptionValues = _ref$autoSelectOption === void 0 ? true : _ref$autoSelectOption,
        _ref$graphQLToken = _ref.graphQLToken,
        graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken;

    this.config = {
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      includeOptions: includeOptions.map(function (s) {
        return String(s).trim().toLocaleUpperCase();
      }),
      displayInStockOnly: displayInStockOnly,
      autoSelectOptionValues: autoSelectOptionValues,
      graphQLToken: graphQLToken
    };
    this.bindEvents();
  }

  var _proto = ProductSwatches.prototype;

  _proto.bindEvents = function bindEvents() {
    var _this = this;

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this.onWindowScroll();
      }, 200));
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };

  _proto.unbindEvents = function unbindEvents() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };

  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;

    if ($body === void 0) {
      $body = null;
    }

    var cards = [];
    $(this.config.cardSelector, $body).not('.productSwatchesLoaded').each(function (i, el) {
      var $scope = $(el).addClass('productSwatchesLoaded');

      if ($scope.data('productSwatchesCard')) {
        return;
      }

      var productId = $scope.data('productId') || $scope.find(_this2.config.productIdSelector).data('productId');

      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }

        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }

          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);

        if (!productId) {
          return;
        }
      }

      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);

      if ($attributesContainer.length === 0) {
        return;
      }

      var _this2$config = _this2.config,
          productViewFile = _this2$config.productViewFile,
          attributesTemplate = _this2$config.attributesTemplate,
          templateCustomTags = _this2$config.templateCustomTags,
          addToCartFormSelector = _this2$config.addToCartFormSelector,
          imageSize = _this2$config.imageSize,
          inputFinderFunc = _this2$config.inputFinderFunc,
          swatchesLimit = _this2$config.swatchesLimit,
          imageReplacerFunc = _this2$config.imageReplacerFunc,
          includeOptions = _this2$config.includeOptions,
          displayInStockOnly = _this2$config.displayInStockOnly,
          autoSelectOptionValues = _this2$config.autoSelectOptionValues,
          graphQLToken = _this2$config.graphQLToken;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        imageSize: imageSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        includeOptions: includeOptions,
        displayInStockOnly: displayInStockOnly,
        autoSelectOptionValues: autoSelectOptionValues,
        autoInit: !graphQLToken
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
    });

    if (this.config.graphQLToken && cards.length > 0) {
      var ids = Array.from(new Set(cards.map(function (card) {
        return card.productId;
      })));
      this.fetchGraphQLProducts(ids).then(function (edges) {
        edges.forEach(function (edge) {
          cards.filter(function (card) {
            return card.productId == edge.node.entityId;
          }).forEach(function (card) {
            card.graphQLNode = edge.node;
            card.init();
          });
        });
      });
    }
  };

  _proto.fetchGraphQLProducts = /*#__PURE__*/function () {
    var _fetchGraphQLProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ids) {
      var edges, i, _ids, resp;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              edges = [];
              i = 0;

            case 2:
              if (!(i < ids.length)) {
                _context.next = 11;
                break;
              }

              _ids = ids.slice(i, i + 50);
              _context.next = 6;
              return $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                  query: "\n                        query {\n                            site {\n                                products (entityIds: " + JSON.stringify(_ids) + ", first: " + _ids.length + ") {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            minPurchaseQuantity\n                                            productOptions {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                        ... on CheckboxOption {\n                                                            checkedByDefault\n                                                        }\n                                                        ... on MultipleChoiceOption {\n                                                            values {\n                                                                edges {\n                                                                    node {\n                                                                        entityId\n                                                                        isDefault\n                                                                        ... on SwatchOptionValue {\n                                                                            label\n                                                                            hexColors\n                                                                            imageUrl(width: 100)\n                                                                        }\n                                                                        ... on MultipleChoiceOptionValue {\n                                                                            label\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    "
                }),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + this.config.graphQLToken
                },
                xhrFields: {
                  withCredentials: true
                }
              });

            case 6:
              resp = _context.sent;
              edges = edges.concat(resp.data.site.products.edges);

            case 8:
              i += 50;
              _context.next = 2;
              break;

            case 11:
              return _context.abrupt("return", edges);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function fetchGraphQLProducts(_x) {
      return _fetchGraphQLProducts.apply(this, arguments);
    }

    return fetchGraphQLProducts;
  }();

  return ProductSwatches;
}();

/* harmony default export */ __webpack_exports__["default"] = (ProductSwatches);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jYXJkLXN3YXRjaGVzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FyZC1zd2F0Y2hlcy9Qcm9kdWN0U3dhdGNoZXMuanMiXSwibmFtZXMiOlsiQ2FyZCIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdElkIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsImltYWdlU2l6ZSIsImlucHV0RmluZGVyRnVuYyIsInN3YXRjaGVzTGltaXQiLCJpbWFnZVJlcGxhY2VyRnVuYyIsImluY2x1ZGVPcHRpb25zIiwiZGlzcGxheUluU3RvY2tPbmx5IiwiYXV0b1NlbGVjdE9wdGlvblZhbHVlcyIsImF1dG9Jbml0IiwiZ3JhcGhRTE5vZGUiLCJpbml0IiwicmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzIiwiYnVpbGRQcm9kdWN0T3B0aW9ucyIsInJlcXVlc3RQcm9kdWN0T3B0aW9ucyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJoZWFkZXJzIiwid2luZG93IiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiYXR0cmlidXRlc0RhdGEiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwiaW5zdG9jayIsImF0dHJpYnV0ZXMiLCJwcm9kdWN0T3B0aW9ucyIsImVkZ2VzIiwicmVkdWNlIiwiX29wdGlvbnMiLCJvcHRpb25Ob2RlIiwibm9kZSIsImxlbmd0aCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiZGlzcGxheU5hbWUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInZhbHVlcyIsIl92YWx1ZXMiLCJ2YWx1ZU5vZGUiLCJpbmRleE9mIiwiZW50aXR5SWQiLCJpbWFnZVVybCIsImhleENvbG9ycyIsImxhYmVsIiwicHVzaCIsImNvbnRlbnQiLCJtYXAiLCJjb2xvciIsImpvaW4iLCJ0eXBlIiwiYXR0cmlidXRlSWQiLCJhdHRyaWJ1dGVWYWx1ZSIsImZpbmQiLCJlYWNoIiwiaSIsImVsIiwiJHN3YXRjaGVzIiwic3dhdGNoZXMiLCJsYWJlbEVsIiwiJGxhYmVsIiwiJGlucHV0IiwiYXR0ciIsIk51bWJlciIsInJlcGxhY2UiLCJodG1sIiwiTXVzdGFjaGUiLCJyZW5kZXIiLCJhcHBlbmQiLCIkZm9ybSIsImhpZGUiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwiZm9yRWFjaCIsImRlZmF1bHRWYWx1ZSIsIl9kZWZhdWx0VmFsdWUiLCJpc0RlZmF1bHQiLCJjaGVja2VkQnlEZWZhdWx0IiwiYWRkQ2xhc3MiLCJwcm9wIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInJlbW92ZUNsYXNzIiwidmFsIiwicmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UiLCJtb3JlRWwiLCIkbW9yZSIsIiRsaXN0IiwiY2xvc2VzdCIsIiRsZXNzIiwiJGl0ZW1zIiwiJGhpZGRlbkl0ZW1zIiwiZmlsdGVyIiwiaiIsInNob3ciLCJGb3JtRGF0YSIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImdldCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJpbWFnZSIsInByaWNlIiwiaW1nIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwidXBkYXRlUHJpY2VWaWV3IiwiZm9ybURhdGEiLCJrZXkiLCJGaWxlIiwibmFtZSIsInNpemUiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJQcm9kdWN0U3dhdGNoZXMiLCJjYXJkU2VsZWN0b3IiLCJwcm9kdWN0SWRTZWxlY3RvciIsImZpbmRQcm9kdWN0SWRCeUltZyIsInN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IiLCJjYXJkSW1hZ2VTZWxlY3RvciIsImdyYXBoUUxUb2tlbiIsImNvbmZpZyIsInMiLCJ0cmltIiwiYmluZEV2ZW50cyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIm9uV2luZG93U2Nyb2xsIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInVuYmluZEV2ZW50cyIsImRpc2Nvbm5lY3QiLCIkYm9keSIsImNhcmRzIiwibm90IiwibSIsInNyYyIsIm1hdGNoIiwiZmlyc3QiLCJjYXJkIiwiaWRzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmV0Y2hHcmFwaFFMUHJvZHVjdHMiLCJ0aGVuIiwiZWRnZSIsIl9pZHMiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImNvbmNhdCIsInNpdGUiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxJO0VBQ0Ysb0JBa0JHO0lBQUEsSUFqQkNDLE1BaUJELFFBakJDQSxNQWlCRDtJQUFBLElBaEJDQyxvQkFnQkQsUUFoQkNBLG9CQWdCRDtJQUFBLElBZkNDLFNBZUQsUUFmQ0EsU0FlRDtJQUFBLElB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QUc4REEsSUFBSSxDQUFDaEosTUFIbkU7Z0JBRFksQ0FBZixDQUhnQjtnQkFpRHRCbEIsT0FBTyxFQUFFO2tCQUNMLGdCQUFnQixrQkFEWDtrQkFFTCw2QkFBMkIsS0FBS29JLE1BQUwsQ0FBWUQ7Z0JBRmxDLENBakRhO2dCQXFEdEIvSCxTQUFTLEVBQUU7a0JBQ1BDLGVBQWUsRUFBRTtnQkFEVjtjQXJEVyxDQUFQLENBSjNCOztZQUFBO2NBSWNFLElBSmQ7Y0E2RFFNLEtBQUssR0FBR0EsS0FBSyxDQUFDMEosTUFBTixDQUFhaEssSUFBSSxDQUFDVixJQUFMLENBQVUySyxJQUFWLENBQWVDLFFBQWYsQ0FBd0I1SixLQUFyQyxDQUFSOztZQTdEUjtjQUVvQzRCLENBQUMsSUFBSSxFQUZ6QztjQUFBO2NBQUE7O1lBQUE7Y0FBQSxpQ0ErRFc1QixLQS9EWDs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDOzs7Ozs7Ozs7Ozs7QUFtRVdnSCw4RUFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XHJcblxyXG5jbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgJGF0dHJpYnV0ZXNDb250YWluZXIsXHJcbiAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXHJcbiAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxyXG4gICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcclxuICAgICAgICAkY2FyZEltYWdlLFxyXG4gICAgICAgIGltYWdlU2l6ZSxcclxuICAgICAgICBpbnB1dEZpbmRlckZ1bmMsXHJcbiAgICAgICAgc3dhdGNoZXNMaW1pdCxcclxuICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICBpbmNsdWRlT3B0aW9ucyxcclxuICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHksXHJcbiAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICBhdXRvSW5pdCA9IHRydWUsXHJcbiAgICAgICAgZ3JhcGhRTE5vZGUsXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSBwcm9kdWN0SWQ7XHJcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lciA9ICRhdHRyaWJ1dGVzQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdFZpZXdGaWxlID0gcHJvZHVjdFZpZXdGaWxlO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1RlbXBsYXRlID0gYXR0cmlidXRlc1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzID0gdGVtcGxhdGVDdXN0b21UYWdzO1xyXG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuJGNhcmRJbWFnZSA9ICRjYXJkSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZVNpemUgPSBpbWFnZVNpemU7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZpbmRlckZ1bmMgPSBpbnB1dEZpbmRlckZ1bmM7XHJcbiAgICAgICAgdGhpcy5zd2F0Y2hlc0xpbWl0ID0gc3dhdGNoZXNMaW1pdDtcclxuICAgICAgICB0aGlzLmltYWdlUmVwbGFjZXJGdW5jID0gaW1hZ2VSZXBsYWNlckZ1bmM7XHJcbiAgICAgICAgdGhpcy5pbmNsdWRlT3B0aW9ucyA9IGluY2x1ZGVPcHRpb25zO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUluU3RvY2tPbmx5ID0gZGlzcGxheUluU3RvY2tPbmx5O1xyXG4gICAgICAgIHRoaXMuYXV0b1NlbGVjdE9wdGlvblZhbHVlcyA9IGF1dG9TZWxlY3RPcHRpb25WYWx1ZXM7XHJcbiAgICAgICAgdGhpcy5hdXRvSW5pdCA9IGF1dG9Jbml0O1xyXG4gICAgICAgIHRoaXMuZ3JhcGhRTE5vZGUgPSBncmFwaFFMTm9kZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0luaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzcGxheUluU3RvY2tPbmx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRQcm9kdWN0T3B0aW9ucygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0SW5TdG9ja0F0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgL3JlbW90ZS92MS9wcm9kdWN0LWF0dHJpYnV0ZXMvJHt0aGlzLnByb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWRkJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMucHJvZHVjdElkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6ICd7fScsXHJcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3AuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRQcm9kdWN0T3B0aW9ucyhhdHRyaWJ1dGVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0UHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGAvcHJvZHVjdHMucGhwP3Byb2R1Y3RJZD0ke3RoaXMucHJvZHVjdElkfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLWNvbmZpZyc6ICd7fScsXHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogYHtcInJlbmRlcl93aXRoXCI6XCIke3RoaXMucHJvZHVjdFZpZXdGaWxlfVwifWAsXHJcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEsIHJlc3ApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEgPSB7fSwgcmVzcCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtdLFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xyXG4gICAgICAgICAgICAvLyBsb2FkIGF0dHJpYnV0ZXMgZnJvbSBncmFwaFFMXHJcbiAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcyA9IHRoaXMuZ3JhcGhRTE5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMucmVkdWNlKChfb3B0aW9ucywgeyBub2RlOiBvcHRpb25Ob2RlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluY2x1ZGVPcHRpb25zLmxlbmd0aCA+IDAgJiYgIXRoaXMuaW5jbHVkZU9wdGlvbnMuaW5jbHVkZXMoU3RyaW5nKG9wdGlvbk5vZGUuZGlzcGxheU5hbWUpLnRvTG9jYWxlVXBwZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbk5vZGUudmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfdmFsdWVzLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKHZhbHVlTm9kZS5lbnRpdHlJZCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzIHx8IHZhbHVlTm9kZS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92YWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHZhbHVlTm9kZS5pbWFnZVVybCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuXCIgdGl0bGU9XCIke3ZhbHVlTm9kZS5sYWJlbH1cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt2YWx1ZU5vZGUuaW1hZ2VVcmx9Jyk7XCI+PC9zcGFuPmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHZhbHVlTm9kZS5oZXhDb2xvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB2YWx1ZU5vZGUuaGV4Q29sb3JzLm1hcChjb2xvciA9PiBgPHNwYW4gY2xhc3M9J2Zvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3InIHRpdGxlPVwiJHt2YWx1ZU5vZGUubGFiZWx9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvc3Bhbj5gKS5qb2luKCcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGA8c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnRcIj4ke3ZhbHVlTm9kZS5sYWJlbH08L3NwYW4+YCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZU5vZGUubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbHVlTm9kZS5pbWFnZVVybCB8fCB2YWx1ZU5vZGUuaGV4Q29sb3JzID8gJ3N3YXRjaCcgOiAncmVjdGFuZ2xlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSWQ6IG9wdGlvbk5vZGUuZW50aXR5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlOiB2YWx1ZU5vZGUuZW50aXR5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfb3B0aW9ucy5wdXNoKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbG9hZCBhdHRyaWJ1dGVzIGZyb20gQUpBWCByZXF1ZXN0XHJcbiAgICAgICAgICAgICQocmVzcCkuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nKS5lYWNoKChpLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHN3YXRjaGVzID0gJChlbCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzd2F0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkc3dhdGNoZXMuZmluZCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJykuZWFjaCgoaSwgbGFiZWxFbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRsYWJlbCA9ICQobGFiZWxFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdGhpcy5pbnB1dEZpbmRlckZ1bmMgPyB0aGlzLmlucHV0RmluZGVyRnVuYygkc3dhdGNoZXMsICRsYWJlbCkgOiAkc3dhdGNoZXMuZmluZChgW2lkPVwiJHskbGFiZWwuYXR0cignZm9yJyl9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBOdW1iZXIoJGlucHV0LmF0dHIoJ3ZhbHVlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUlkID0gTnVtYmVyKCRpbnB1dC5hdHRyKCduYW1lJykucmVwbGFjZSgvYXR0cmlidXRlXFxbKFswLTldKylcXF0vLCAnJDEnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzICE9PSAnb2JqZWN0JyB8fCBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlVmFsdWUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dhdGNoZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAkbGFiZWwuaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICRpbnB1dC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlTGFiZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzd2F0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLnB1c2goc3dhdGNoZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBNdXN0YWNoZS5yZW5kZXIodGhpcy5hdHRyaWJ1dGVzVGVtcGxhdGUsIGRhdGEsIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKTtcclxuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICAgICAgbGV0ICRmb3JtO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xyXG4gICAgICAgICAgICAvLyBidWlsZCBGb3JtIGZyb20gZ3JhcGhRTFxyXG4gICAgICAgICAgICAkZm9ybSA9ICQoJzxmb3JtIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLWhpZGRlbkZvcm1cIj48L2Zvcm0+JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFjdGlvblwiIHZhbHVlPVwiYWRkXCI+YCk7XHJcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvZHVjdF9pZFwiIHZhbHVlPVwiJHt0aGlzLnByb2R1Y3RJZH1cIj5gKTtcclxuICAgICAgICAgICAgJGZvcm0uYXBwZW5kKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdHlbXVwiIHZhbHVlPVwiJHt0aGlzLmdyYXBoUUxOb2RlLm1pblB1cmNoYXNlUXVhbnRpdHkgfHwgMX1cIj5gKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaFFMTm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5mb3JFYWNoKCh7IG5vZGU6IG9wdGlvbk5vZGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbk5vZGUudmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gdGhpcy5hdXRvU2VsZWN0T3B0aW9uVmFsdWVzICYmIG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLmxlbmd0aCA+IDAgPyBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlc1swXS5ub2RlLmVudGl0eUlkIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXMucmVkdWNlKChfZGVmYXVsdFZhbHVlLCB7IG5vZGU6IHZhbHVlTm9kZSB9KSA9PiB2YWx1ZU5vZGUuaXNEZWZhdWx0ID8gdmFsdWVOb2RlLmVudGl0eUlkIDogX2RlZmF1bHRWYWx1ZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRWYWx1ZSAmJiBhdHRyaWJ1dGVzRGF0YSAmJiBhdHRyaWJ1dGVzRGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX2RlZmF1bHRWYWx1ZSwgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4gX2RlZmF1bHRWYWx1ZSB8fCAoYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKHZhbHVlTm9kZS5lbnRpdHlJZCkgPiAtMSA/IHZhbHVlTm9kZS5lbnRpdHlJZCA6ICcnKSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uTm9kZS5jaGVja2VkQnlEZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXR0cmlidXRlWyR7b3B0aW9uTm9kZS5lbnRpdHlJZH1dXCIgdmFsdWU9XCIke2RlZmF1bHRWYWx1ZX1cIj5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYnVpbGQgRm9ybSBmcm9tIEFKQVggcmVxdWVzdFxyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJzxkaXY+PC9kaXY+JykuYXBwZW5kKHJlc3ApLmZpbmQodGhpcy5hZGRUb0NhcnRGb3JtU2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtJylcclxuICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsICdpZCcgdG8gYXZvaWQgZHVwbGljYXRlZCBsYWJlbC5mb3IgaW4gcXVpY2stdmlld1xyXG4gICAgICAgICAgICAkZm9ybS5maW5kKCdbaWRdJykucHJvcCgnaWQnLCBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuYXBwZW5kKCRmb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5vbignY2xpY2snLCAnW2RhdGEtYXR0cmlidXRlLWlkXScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGEgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9ICRhLmRhdGEoJ2F0dHJpYnV0ZUlkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGEuZGF0YSgnYXR0cmlidXRlVmFsdWUnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgIC5maW5kKGBbZGF0YS1hdHRyaWJ1dGUtaWQ9JHtpZH1dYCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAkYS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICRmb3JtLmZpbmQoYFtuYW1lPVwiYXR0cmlidXRlWyR7aWR9XVwiXWApLnZhbChbdmFsdWVdKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UoJGZvcm0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zd2F0Y2hlc0xpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIuZmluZCgnW2RhdGEtbW9yZV0nKS5lYWNoKChpLCBtb3JlRWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRtb3JlID0gJChtb3JlRWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGxpc3QgPSAkbW9yZS5jbG9zZXN0KCdbZGF0YS1zd2F0Y2hlc10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsZXNzID0gJGxpc3QuZmluZCgnW2RhdGEtbGVzc10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGl0ZW1zLmxlbmd0aCA+IHRoaXMuc3dhdGNoZXNMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRoaWRkZW5JdGVtcyA9ICRpdGVtcy5maWx0ZXIoaiA9PiBqID49IHRoaXMuc3dhdGNoZXNMaW1pdCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRtb3JlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGhpZGRlbkl0ZW1zLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJG1vcmUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbGVzcy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxlc3Mub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaGlkZGVuSXRlbXMuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbGVzcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb3JlLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkbW9yZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGxlc3MuaGlkZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLW1vcmVdLCBbZGF0YS1sZXNzXScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlcXVlc3RBdHRyaWJ1dGVzQ2hhbmdlKCRmb3JtKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgL3JlbW90ZS92MS9wcm9kdWN0LWF0dHJpYnV0ZXMvJHt0aGlzLnByb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLWNvbmZpZyc6ICd7fScsXHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcclxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3ApID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaW1hZ2UsIHByaWNlIH0gPSByZXNwLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBpbWFnZSA/IGltYWdlLmRhdGEucmVwbGFjZSgnezpzaXplfScsIHRoaXMuaW1hZ2VTaXplKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZVJlcGxhY2VyRnVuYyh0aGlzLiRjYXJkSW1hZ2UsIGltZyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBpbWFnZS5kYXRhLnJlcGxhY2UoJ3s6c2l6ZX0nLCB0aGlzLmltYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhcmRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyYycsIHRoaXMuJGNhcmRJbWFnZS5hdHRyKCdzcmMnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuYXR0cignc3Jjc2V0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhcmRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNyY3NldCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2FyZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3JjJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCB0aGlzLiRjYXJkSW1hZ2UuZGF0YSgnb3JpZ2luYWxTcmNzZXQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFNyYycsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmNzZXQnLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaW1hZ2Utb3B0aW9uQ2hhbmdlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxyXG4gICAgICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcclxuICAgICAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxyXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAkc2NvcGVcclxuICAgICAqL1xyXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XHJcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxyXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxyXG4gICAgICovXHJcbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcclxuXHJcbmNsYXNzIFByb2R1Y3RTd2F0Y2hlcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgY2FyZFNlbGVjdG9yID0gJy5wcm9kdWN0IC5jYXJkLCAucHJvZHVjdENhcm91c2VsLXNsaWRlIC5jYXJkJyxcclxuICAgICAgICBwcm9kdWN0SWRTZWxlY3RvciA9ICdbZGF0YS1wcm9kdWN0LWlkXScsXHJcbiAgICAgICAgZmluZFByb2R1Y3RJZEJ5SW1nID0gZmFsc2UsXHJcbiAgICAgICAgc3dhdGNoZXNDb250YWluZXJTZWxlY3RvciA9ICcuY2FyZC10ZXh0LS1jb2xvcnN3YXRjaGVzJyxcclxuICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvciA9ICcuY2FyZC1pbWFnZScsXHJcbiAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsXHJcbiAgICAgICAgcHJvZHVjdFZpZXdGaWxlID0gJ3Byb2R1Y3RzL3Byb2R1Y3QtdmlldycsXHJcbiAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLWF0dHJpYnV0ZXNcIj5cclxuICAgICAgICAgICAgICAgIHt7I2F0dHJpYnV0ZXN9fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXNcIiBkYXRhLXN3YXRjaGVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyMufX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtaXRlbSBwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtaXRlbS0te3t0eXBlfX1cIiB0aXRsZT1cInt7bGFiZWx9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hdHRyaWJ1dGUtaWQ9XCJ7e2F0dHJpYnV0ZUlkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXR0cmlidXRlLXZhbHVlPVwie3thdHRyaWJ1dGVWYWx1ZX19XCI+e3smY29udGVudH19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ey8ufX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtbW9yZVwiIGRhdGEtbW9yZT4rIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwcm9kdWN0U3dhdGNoZXMtc3dhdGNoZXMtbGVzc1wiIGRhdGEtbGVzcz4tIExlc3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt7L2F0dHJpYnV0ZXN9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgLFxyXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyA9IG51bGwsXHJcbiAgICAgICAgaW1hZ2VTaXplID0gJzU5MHg1OTAnLFxyXG4gICAgICAgIGlucHV0RmluZGVyRnVuYyA9IG51bGwsXHJcbiAgICAgICAgc3dhdGNoZXNMaW1pdCA9IDUsXHJcbiAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMgPSBudWxsLFxyXG4gICAgICAgIGluY2x1ZGVPcHRpb25zID0gW10sXHJcbiAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5ID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyA9IHRydWUsXHJcbiAgICAgICAgZ3JhcGhRTFRva2VuID0gJydcclxuICAgIH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICAgICBjYXJkU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHByb2R1Y3RJZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBmaW5kUHJvZHVjdElkQnlJbWcsXHJcbiAgICAgICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIGNhcmRJbWFnZVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MsXHJcbiAgICAgICAgICAgIGltYWdlU2l6ZSxcclxuICAgICAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxyXG4gICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxyXG4gICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgaW5jbHVkZU9wdGlvbnM6IGluY2x1ZGVPcHRpb25zLm1hcChzID0+IFN0cmluZyhzKS50cmltKCkudG9Mb2NhbGVVcHBlckNhc2UoKSksXHJcbiAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICAgICAgZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgTXV0YXRpb25PYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xyXG4gICAgICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGRlYm91bmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwoKTtcclxuICAgICAgICAgICAgfSwgMjAwKSk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVuYmluZEV2ZW50cygpIHtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uV2luZG93U2Nyb2xsKCRib2R5ID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGNhcmRzID0gW107XHJcblxyXG4gICAgICAgICQodGhpcy5jb25maWcuY2FyZFNlbGVjdG9yLCAkYm9keSkubm90KCcucHJvZHVjdFN3YXRjaGVzTG9hZGVkJykuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHNjb3BlID0gJChlbCkuYWRkQ2xhc3MoJ3Byb2R1Y3RTd2F0Y2hlc0xvYWRlZCcpO1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEoJ3Byb2R1Y3RTd2F0Y2hlc0NhcmQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdElkID0gJHNjb3BlLmRhdGEoJ3Byb2R1Y3RJZCcpIHx8ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLnByb2R1Y3RJZFNlbGVjdG9yKS5kYXRhKCdwcm9kdWN0SWQnKTtcclxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIHByb2R1Y3QgSUQgYnkgaW1nIHNyY1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5maW5kUHJvZHVjdElkQnlJbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSAkc2NvcGUuZmluZCgnaW1nJykuZ2V0KCkucmVkdWNlKChpZCwgaW1nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IFN0cmluZyhpbWcuc3JjKS5tYXRjaCgvcHJvZHVjdHNcXC8oWzAtOV0rKVxcLy8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtID8gTnVtYmVyKG1bMV0pIDogaWQ7XHJcbiAgICAgICAgICAgICAgICB9LCBudWxsKTtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlc0NvbnRhaW5lciA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLnN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBpZiAoJGF0dHJpYnV0ZXNDb250YWluZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcclxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxyXG4gICAgICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgfSA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGNhcmRJbWFnZSA9ICRzY29wZS5maW5kKHRoaXMuY29uZmlnLmNhcmRJbWFnZVNlbGVjdG9yKS5maXJzdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcclxuICAgICAgICAgICAgICAgICRzY29wZSxcclxuICAgICAgICAgICAgICAgICRhdHRyaWJ1dGVzQ29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdFZpZXdGaWxlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgJGNhcmRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGltYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcclxuICAgICAgICAgICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVJlcGxhY2VyRnVuYyxcclxuICAgICAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxyXG4gICAgICAgICAgICAgICAgYXV0b1NlbGVjdE9wdGlvblZhbHVlcyxcclxuICAgICAgICAgICAgICAgIGF1dG9Jbml0OiAhZ3JhcGhRTFRva2VuLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FyZHMucHVzaChjYXJkKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXRhKCdwcm9kdWN0U3dhdGNoZXNDYXJkJywgY2FyZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW4gJiYgY2FyZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHMgPSBBcnJheS5mcm9tKG5ldyBTZXQoY2FyZHMubWFwKGNhcmQgPT4gY2FyZC5wcm9kdWN0SWQpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hHcmFwaFFMUHJvZHVjdHMoaWRzKS50aGVuKGVkZ2VzID0+IHtcclxuICAgICAgICAgICAgICAgIGVkZ2VzLmZvckVhY2goZWRnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZHMuZmlsdGVyKGNhcmQgPT4gY2FyZC5wcm9kdWN0SWQgPT0gZWRnZS5ub2RlLmVudGl0eUlkKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmdyYXBoUUxOb2RlID0gZWRnZS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmluaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaEdyYXBoUUxQcm9kdWN0cyhpZHMpIHtcclxuICAgICAgICBsZXQgZWRnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkgKz0gNTApIHtcclxuICAgICAgICAgICAgY29uc3QgX2lkcyA9IGlkcy5zbGljZShpLCBpICsgNTApO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6ICR7SlNPTi5zdHJpbmdpZnkoX2lkcyl9LCBmaXJzdDogJHtfaWRzLmxlbmd0aH0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUHVyY2hhc2VRdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBDaGVja2JveE9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRCeURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBTd2F0Y2hPcHRpb25WYWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvblZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3RoaXMuY29uZmlnLmdyYXBoUUxUb2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlZGdlcyA9IGVkZ2VzLmNvbmNhdChyZXNwLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlZGdlcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFN3YXRjaGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9