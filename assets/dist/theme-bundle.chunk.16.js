(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);

  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Cart.prototype;

  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  };

  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;

    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1; // Does not quality for min/max quantity

    if (newQty < minQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();

      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;

        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };

  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this2 = this;

    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this2.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };

  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this3 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);

      _this3.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $changedOption = $(currentTarget);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};

        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }

        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }

        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };

  _proto.refreshContent = function refreshContent(remove) {
    var _this4 = this;

    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show(); // Remove last item from cart? Reload

    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, function (err, response) {
      _this4.$cartContent.html(response.content);

      _this4.$cartTotals.html(response.totals);

      _this4.$cartMessages.html(response.statusMessages);

      $cartPageTitle.replaceWith(response.pageTitle);

      _this4.bindEvents();

      _this4.$overlay.hide();

      var quantity = $('[data-cart-quantity]', _this4.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };

  _proto.bindCartEvents = function bindCartEvents() {
    var _this5 = this;

    var debounceTimeout = 400;

    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);

    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this); // cart update


    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault(); // update cart quantity

      cartUpdate($target);
    }); // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when manually input quality input on the cart page
    // don't update
    // --------------------------------------------------------------------

    $('input[name^="qty-"]').on('change', function (event) {
      var $el = $(event.currentTarget);
      var itemId = $el.attr('name').replace('qty-', '');
      var oldQty = parseInt($el.data('oldValue'), 10);
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = parseInt($el.val(), 10);
      event.preventDefault(); // Does not quality for min/max quantity

      if (newQty < minQty) {
        $el.val(oldQty);
        return alert(minError);
      } else if (newQty > maxQty) {
        $el.val(oldQty);
        return alert(maxError);
      }

      _this5.$overlay.show();

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this5.$overlay.hide();

        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;

          _this5.refreshContent(remove);
        } else {
          $el.val(oldQty);
          alert(response.data.errors.join('\n'));
        }
      });
    }).on('focusin', function (event) {
      var $el = $(event.currentTarget);
      $el.data('oldValue', $el.val());
    }); // --------------------------------------------------------------------

    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault(); // edit item in cart

      _this5.cartEditOptions(itemId);
    });
  };

  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this6 = this;

    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show().focus(); // papathemes-beautify mod

      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show().focus(); // papathemes-beautify mod
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault(); // Empty code

      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this6.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this7 = this;

    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
      $('.gift-certificate-cancel:visible').focus(); // papathemes-beautify
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
      $('.gift-certificate-add:visible').focus(); // papathemes-beautify
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();

      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $certInput.data('error'),
          icon: 'error'
        });
      }

      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };

  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this8 = this;

    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);

        _this8.bindGiftWrappingForm();
      });
    });
  };

  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');

      if (!id) {
        return;
      }

      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();

      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');

    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');

      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }

    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };

  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents(); // initiate shipping estimator module

    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__["default"]($('[data-shipping-estimator]'));
  };

  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");







var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }

  var _proto = ShippingEstimator.prototype;

  _proto.initFormValidation = function initFormValidation() {
    var _this = this;

    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }

      if (_this.shippingValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };

  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };

  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;

    this.shippingValidator.add([{
      selector: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.shippingEstimator + " select[name=\"shipping-state\"]");

        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }

        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }
  /**
   * Toggle between default shipping and ups shipping rates
   */
  ;

  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--ups');
      var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };

  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;

    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }

      var $field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(field);

      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }

      if ($last) {
        _this3.shippingValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;

        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["Validators"].cleanUpStateValidation(field);
      } // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us


      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };

  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimator');
    var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-country"]', $estimatorForm).val(),
        state_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-state"]', $estimatorForm).val(),
        city: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quotes').html(response.content); // bind the select button

        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').show().focus();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').show().focus();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').hide();
    });
  };

  return ShippingEstimator;
}();



/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */

function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');

  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }

  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }

  return $newElement;
}
/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */


function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });

  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');

  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }

  return $newElement;
}
/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */


function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });

    $selectElement.html(container.join(' '));
  }
}
/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */


/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }

  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val(); // console.log($('select[data-field-type="Country"]').val())

    if (countryName === '') {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });

  if ($('select[data-field-type="Country"]').val() === 'Canada') {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName('Canada', function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }

      var $currentInput = $('[data-field-type="State"]');

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
        $('#FormField_12_input').val('Ontario');
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }

      console.log($currentInput);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVXcmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yZXBsYWNlSG9sZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JpbmQuanMiXSwibmFtZXMiOlsiQ2FydCIsIm9uUmVhZHkiLCIkY2FydENvbnRlbnQiLCIkIiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJG92ZXJsYXkiLCJoaWRlIiwiYmluZEV2ZW50cyIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiaXRlbUlkIiwiZGF0YSIsIiRlbCIsIm9sZFF0eSIsInBhcnNlSW50IiwidmFsIiwibWF4UXR5IiwibWluUXR5IiwibWluRXJyb3IiLCJtYXhFcnJvciIsIm5ld1F0eSIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93IiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsImF0dHIiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwibGVuZ3RoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiYmluZENhcnRFdmVudHMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2UiLCJhbGVydCIsInN0cmluZyIsInNob3dDYW5jZWxCdXR0b24iLCJ0aGVuIiwidmFsdWUiLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImZvY3VzIiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJnaWZ0Q2VydENoZWNrIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJmaW5kIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0VzdGltYXRvciIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiUGFnZU1hbmFnZXIiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJOdW1iZXIiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0IiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJjbGFzcyIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicHJldiIsImFwcGVuZCIsInJlcXVpcmVkIiwibWFrZVN0YXRlT3B0aW9uYWwiLCJ0eXBlIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHVzaCIsInByZWZpeCIsInN0YXRlcyIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImNvdW50cnkiLCJnZXRCeU5hbWUiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0lBQ04sS0FBS0MsWUFBTCxHQUFvQkMsQ0FBQyxDQUFDLHFCQUFELENBQXJCO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQkQsQ0FBQyxDQUFDLG9CQUFELENBQXRCO0lBQ0EsS0FBS0UsV0FBTCxHQUFtQkYsQ0FBQyxDQUFDLG9CQUFELENBQXBCO0lBQ0EsS0FBS0csUUFBTCxHQUFnQkgsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FDWEksSUFEVyxFQUFoQixDQUpNLENBS087O0lBRWIsS0FBS0MsVUFBTDtFQUNILEM7O1NBRURDLFUsR0FBQSxvQkFBV0MsT0FBWCxFQUFvQjtJQUFBOztJQUNoQixJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFlBQWIsQ0FBZjtJQUNBLElBQU1DLEdBQUcsR0FBR1YsQ0FBQyxXQUFTUSxNQUFULENBQWI7SUFDQSxJQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRyxHQUFKLEVBQUQsRUFBWSxFQUFaLENBQXZCO0lBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXRpbHMuaG9va3Mub24oJ3Byb2R1Y3Qtb3B0aW9uLWNoYW5nZScsIChldmVudCwgY3VycmVudFRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcblxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBHaWFvIC0gc3VwZXJtYXJrZXQ6XG4gICAgICAgIC8vIEZpeCBwcm9ibGVtIHdoZW4gbWFudWFsbHkgaW5wdXQgcXVhbGl0eSBpbnB1dCBvbiB0aGUgY2FydCBwYWdlXG4gICAgICAgIC8vIGRvbid0IHVwZGF0ZVxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgICQoJ2lucHV0W25hbWVePVwicXR5LVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJGVsLmF0dHIoJ25hbWUnKS5yZXBsYWNlKCdxdHktJywgJycpO1xuICAgICAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ29sZFZhbHVlJyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KG1pbkVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChtYXhFcnJvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5vbignZm9jdXNpbicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICRlbC5kYXRhKCdvbGRWYWx1ZScsICRlbC52YWwoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUVkaXQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpLmZvY3VzKCk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgbW9kXG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpLmZvY3VzKCk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgbW9kXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNlcnRGb3JtID0gJCgnLmNhcnQtZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWw6dmlzaWJsZScpLmZvY3VzKCk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZDp2aXNpYmxlJykuZm9jdXMoKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWdpZnRDZXJ0Q2hlY2soY29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNlcnRJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCkuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuLyoqXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XG5cbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xuXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcblxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xuICAgICAgICBfLmVhY2goc3RhdGVzQXJyYXkuc3RhdGVzLCAoc3RhdGVPYmopID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5uYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkc2VsZWN0RWxlbWVudC5odG1sKGNvbnRhaW5lci5qb2luKCcgJykpO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtqUXVlcnl9IHN0YXRlRWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGVFbGVtZW50LCBjb250ZXh0ID0ge30sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgLyoqXG4gICAgICogQmFja3dhcmRzIGNvbXBhdGlibGUgZm9yIHRocmVlIHBhcmFtZXRlcnMgaW5zdGVhZCBvZiBmb3VyXG4gICAgICpcbiAgICAgKiBBdmFpbGFibGUgb3B0aW9uczpcbiAgICAgKlxuICAgICAqIHVzZUlkRm9yU3RhdGVzIHtCb29sfSAtIEdlbmVyYXRlcyBzdGF0ZXMgZHJvcGRvd24gdXNpbmcgaWQgZm9yIHZhbHVlcyBpbnN0ZWFkIG9mIHN0cmluZ3NcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS52YWwoKSlcbiAgICAgICAgXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoY291bnRyeU5hbWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG4gICAgaWYgKCAkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLnZhbCgpID09PSAnQ2FuYWRhJykge1xuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoJ0NhbmFkYScsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoY29udGV4dC5zdGF0ZV9lcnJvcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGN1cnJlbnRJbnB1dCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHJlcGxhY2VkIHdpdGggYSBzZWxlY3QsIHJlc2VsZWN0IGl0XG4gICAgICAgICAgICAgICAgY29uc3QgJHNlbGVjdEVsZW1lbnQgPSBtYWtlU3RhdGVSZXF1aXJlZCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbnMocmVzcG9uc2UuZGF0YSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICRzZWxlY3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAkKCcjRm9ybUZpZWxkXzEyX2lucHV0JykudmFsKCdPbnRhcmlvJylcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRjdXJyZW50SW5wdXQpXG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaW5zdGFuY2Ugb2YgYEN0b3JgIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgaXQgd2FzIGludm9rZWQgYXMgcGFydCBvZiBhIGBuZXdgIGV4cHJlc3Npb24gb3IgYnkgYGNhbGxgIG9yIGBhcHBseWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IEN0b3IgVGhlIGNvbnN0cnVjdG9yIHRvIHdyYXAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdG9yKEN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZSBhIGBzd2l0Y2hgIHN0YXRlbWVudCB0byB3b3JrIHdpdGggY2xhc3MgY29uc3RydWN0b3JzLiBTZWVcbiAgICAvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWZ1bmN0aW9uLW9iamVjdHMtY2FsbC10aGlzYXJndW1lbnQtYXJndW1lbnRzbGlzdFxuICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEN0b3I7XG4gICAgICBjYXNlIDE6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICBjYXNlIDQ6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSk7XG4gICAgICBjYXNlIDc6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdKTtcbiAgICB9XG4gICAgdmFyIHRoaXNCaW5kaW5nID0gYmFzZUNyZWF0ZShDdG9yLnByb3RvdHlwZSksXG4gICAgICAgIHJlc3VsdCA9IEN0b3IuYXBwbHkodGhpc0JpbmRpbmcsIGFyZ3MpO1xuXG4gICAgLy8gTWltaWMgdGhlIGNvbnN0cnVjdG9yJ3MgYHJldHVybmAgYmVoYXZpb3IuXG4gICAgLy8gU2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDEzLjIuMiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogdGhpc0JpbmRpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ3RvcjtcbiIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5JyksXG4gICAgY3JlYXRlQ3RvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUN0b3InKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd3JhcHMgYGZ1bmNgIHRvIGludm9rZSBpdCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZ1xuICogb2YgYHRoaXNBcmdgIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gcGFydGlhbHMgVGhlIGFyZ3VtZW50cyB0byBwcmVwZW5kIHRvIHRob3NlIHByb3ZpZGVkIHRvXG4gKiAgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWwoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMpIHtcbiAgdmFyIGlzQmluZCA9IGJpdG1hc2sgJiBXUkFQX0JJTkRfRkxBRyxcbiAgICAgIEN0b3IgPSBjcmVhdGVDdG9yKGZ1bmMpO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3NJbmRleCA9IC0xLFxuICAgICAgICBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgbGVmdEluZGV4ID0gLTEsXG4gICAgICAgIGxlZnRMZW5ndGggPSBwYXJ0aWFscy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZWZ0TGVuZ3RoICsgYXJnc0xlbmd0aCksXG4gICAgICAgIGZuID0gKHRoaXMgJiYgdGhpcyAhPT0gcm9vdCAmJiB0aGlzIGluc3RhbmNlb2Ygd3JhcHBlcikgPyBDdG9yIDogZnVuYztcblxuICAgIHdoaWxlICgrK2xlZnRJbmRleCA8IGxlZnRMZW5ndGgpIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4XSA9IHBhcnRpYWxzW2xlZnRJbmRleF07XG4gICAgfVxuICAgIHdoaWxlIChhcmdzTGVuZ3RoLS0pIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4KytdID0gYXJndW1lbnRzWysrYXJnc0luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZuLCBpc0JpbmQgPyB0aGlzQXJnIDogdGhpcywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFydGlhbDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBjcmVhdGVXcmFwID0gcmVxdWlyZSgnLi9fY3JlYXRlV3JhcCcpLFxuICAgIGdldEhvbGRlciA9IHJlcXVpcmUoJy4vX2dldEhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfUEFSVElBTF9GTEFHID0gMzI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgXG4gKiBhbmQgYHBhcnRpYWxzYCBwcmVwZW5kZWQgdG8gdGhlIGFyZ3VtZW50cyBpdCByZWNlaXZlcy5cbiAqXG4gKiBUaGUgYF8uYmluZC5wbGFjZWhvbGRlcmAgdmFsdWUsIHdoaWNoIGRlZmF1bHRzIHRvIGBfYCBpbiBtb25vbGl0aGljIGJ1aWxkcyxcbiAqIG1heSBiZSB1c2VkIGFzIGEgcGxhY2Vob2xkZXIgZm9yIHBhcnRpYWxseSBhcHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIG5hdGl2ZSBgRnVuY3Rpb24jYmluZGAsIHRoaXMgbWV0aG9kIGRvZXNuJ3Qgc2V0IHRoZSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBvZiBib3VuZCBmdW5jdGlvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0gey4uLip9IFtwYXJ0aWFsc10gVGhlIGFyZ3VtZW50cyB0byBiZSBwYXJ0aWFsbHkgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJvdW5kIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBncmVldChncmVldGluZywgcHVuY3R1YXRpb24pIHtcbiAqICAgcmV0dXJuIGdyZWV0aW5nICsgJyAnICsgdGhpcy51c2VyICsgcHVuY3R1YXRpb247XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgJ2hpJyk7XG4gKiBib3VuZCgnIScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICpcbiAqIC8vIEJvdW5kIHdpdGggcGxhY2Vob2xkZXJzLlxuICogdmFyIGJvdW5kID0gXy5iaW5kKGdyZWV0LCBvYmplY3QsIF8sICchJyk7XG4gKiBib3VuZCgnaGknKTtcbiAqIC8vID0+ICdoaSBmcmVkISdcbiAqL1xudmFyIGJpbmQgPSBiYXNlUmVzdChmdW5jdGlvbihmdW5jLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgYml0bWFzayA9IFdSQVBfQklORF9GTEFHO1xuICBpZiAocGFydGlhbHMubGVuZ3RoKSB7XG4gICAgdmFyIGhvbGRlcnMgPSByZXBsYWNlSG9sZGVycyhwYXJ0aWFscywgZ2V0SG9sZGVyKGJpbmQpKTtcbiAgICBiaXRtYXNrIHw9IFdSQVBfUEFSVElBTF9GTEFHO1xuICB9XG4gIHJldHVybiBjcmVhdGVXcmFwKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzLCBob2xkZXJzKTtcbn0pO1xuXG4vLyBBc3NpZ24gZGVmYXVsdCBwbGFjZWhvbGRlcnMuXG5iaW5kLnBsYWNlaG9sZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=