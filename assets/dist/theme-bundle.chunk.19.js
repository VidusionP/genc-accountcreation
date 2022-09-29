(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









 // Supermarket Mod
// import compareProducts from './global/compare-products';



var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);

  function Account(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }

  var _proto = Account.prototype;

  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]'); // Supermarket Mod
    // compareProducts(this.context.urls);

    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context); // Injected via template

    this.passwordRequirements = this.context.passwordRequirements; // Instantiates wish list JS

    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);

    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }

    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);

      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }

    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }

    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }

    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }

    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }

    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }
  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */
  ;

  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');

      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };

  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;

    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });

      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };

  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;

    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);

    if ($stateElement) {
      var $last; // Requests the states for a country with AJAX

      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }

        var $field = $(field);

        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }

        if ($last) {
          addressValidator.remove($last);
        }

        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }

    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();

      if (addressValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false; // Iterate until we find a non-zero value in the dropdown for quantity

      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true; // Exit out of loop if we found at least one return

          return true;
        }
      });

      if (formSubmit) {
        return true;
      }

      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };

  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;

    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last; // Requests the states for a country with AJAX

    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }

      var $field = $(field);

      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }

      if ($last) {
        paymentMethodValidator.remove($last);
      }

      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    }); // Use credit card number input listener to highlight credit card type

    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);

      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    }); // Set of credit card validation

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    }); // Set of credit card format

    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]"); // Billing address validation

    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault(); // Perform final form validation

      paymentMethodValidator.performCheck();

      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {}); // Assign country and state code


        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });

        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });

        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state; // Default Instrument

        data.default_instrument = !!data.default_instrument; // Store credit card

        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };

  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector); // This only handles the custom fields, standard fields are added below

    editValidator.add(validationModel);

    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }

    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
          enterPassword = _this$validationDicti.password,
          matchPassword = _this$validationDicti.password_match,
          invalidPassword = _this$validationDicti.invalid_password;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword), true);
    }

    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;

          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }

          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }

    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();

      if (editValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();

      if (inboxValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */

var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};
/**
 * Get credit card type from credit card number
 * @param {string} value
 */


var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(value), true);
};
/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */

var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
      shopperId = _ref.shopperId,
      storeHash = _ref.storeHash,
      vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
      currency_code = _ref2.currency_code,
      credit_card_number = _ref2.credit_card_number,
      expiration = _ref2.expiration,
      name_on_card = _ref2.name_on_card,
      cvv = _ref2.cvv,
      default_instrument = _ref2.default_instrument,
      address1 = _ref2.address1,
      address2 = _ref2.address2,
      city = _ref2.city,
      postal_code = _ref2.postal_code,
      state_or_province_code = _ref2.state_or_province_code,
      country_code = _ref2.country_code,
      company = _ref2.company,
      first_name = _ref2.first_name,
      last_name = _ref2.last_name,
      email = _ref2.email,
      phone = _ref2.phone;
  var expiry = expiration.split('/');
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(target.value));
      });
    }
  },

  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
            which = _ref4.which;
        var refTarget = target;

        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },

  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcGF5bWVudC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwiYW5pbWF0aW9uVGltZSIsIiRib2R5IiwiJCIsInByb2R1Y3RzIiwibG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSIsIiRzY29wZSIsIk11c3RhY2hlIiwicmVuZGVyIiwiY29tcGFyZSIsImNvbXBhcmVBZGRvbkxhbmdfY29tcGFyZSIsImNsZWFyX2FsbCIsImNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsIiwicmVuZGVySXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicmVuZGVySXRlbSIsImpvaW4iLCJsZW5ndGgiLCJhZGRDbGFzcyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsInNob3ciLCJhcHBlbmQiLCIkcHJvZHVjdExpc3QiLCJmaW5kIiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwiYmluZEV2ZW50cyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInMiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZSIsInNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRlbCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIk51bWJlciIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiYWRkUHJvZHVjdCIsImltYWdlIiwiYWx0IiwicmVtb3ZlUHJvZHVjdCIsInRvZ2dsZUNsYXNzIiwiY2xlYXJBbGxQcm9kdWN0cyIsInB1c2giLCJmYWRlSW4iLCJmYWRlT3V0IiwicmVtb3ZlIiwicGF0aCIsImF0dHIiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiQWNjb3VudCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJtZXNzYWdlIiwiY29uZmlybSIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInN3YWwiLCJmaXJlIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJpY29uIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwiaW52YWxpZFBhc3N3b3JkIiwiaW52YWxpZF9wYXNzd29yZCIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsInNwbGl0IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiV2lzaExpc3QiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwiJGFkZFdpc2hMaXN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFJQSxTQUFKO0FBRUEsSUFBTUMsZUFBZSxtbkNBQXJCO0FBZ0JBLElBQU1DLG1CQUFtQixvbUJBQXpCOztJQVFNQyxlO0VBQ0YseUJBQVlDLE9BQVosRUFBcUI7SUFBQTs7SUFDakIsS0FBS0EsT0FBTCxHQUFlQSxPQUFmO0lBQ0EsS0FBS0MsYUFBTCxHQUFxQixHQUFyQjtJQUNBLEtBQUtDLEtBQUwsR0FBYUMsQ0FBQyxDQUFDLE1BQUQsQ0FBZDtJQUVBLEtBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsNEJB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QkFBTCxDQUEwQmpKLFlBQTFCOztNQUVBLElBQUksTUFBSSxDQUFDaUosb0JBQUwsQ0FBMEJoSixNQUExQixDQUFpQyxPQUFqQyxDQUFKLEVBQStDO1FBQzNDO01BQ0g7O01BRURuRyxLQUFLLENBQUNDLGNBQU47SUFDSCxDQVJEO0VBU0gsQzs7U0FFRDZCLE8sR0FBQSxtQkFBVTtJQUNOLElBQU1zTixnQkFBZ0IsR0FBR3pSLENBQUMsQ0FBQyxnQkFBRCxDQUExQjs7SUFFQSxJQUFJeVIsZ0JBQWdCLENBQUMxUSxNQUFyQixFQUE2QjtNQUN6QixLQUFLdVEsNkJBQUwsQ0FBbUNHLGdCQUFuQztJQUNIOztJQUVELEtBQUtOLHFCQUFMO0VBQ0gsQzs7O0VBOURpQ3hELHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5sZXQgc2luZ2xldG9uO1xuXG5jb25zdCBjb21wYXJlTGlzdFRtcGwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsLXdyYXBwZXIgaXMtZW1wdHlcIiBpZD1cInN1cGVybWFya2V0Q29tcGFyZUxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3Q+e3t7cmVuZGVySXRlbXN9fX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3tjb21wYXJlX3VybH19XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jb21wYXJlXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uPnt7Y29tcGFyZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXBsYWluIGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jbGVhckFsbFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWNsZWFyYWxsPnt7Y2xlYXJfYWxsfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1jbG9zZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZT48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vcGVuXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cFwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk9wZW48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuY29uc3QgY29tcGFyZUxpc3RJdGVtVG1wbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtaXRlbVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09XCJ7e2lkfX1cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWltZ1wiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7YWx0fX1cIiB0aXRsZT1cInt7YWx0fX1cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1xdWlja3ZpZXcgcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwie3tpZH19XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPnt7cXVpY2tfdmlld319PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXJlbW92ZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZT1cInt7aWR9fVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3JlbW92ZX19PC9zcGFuPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuYDtcblxuY2xhc3MgQ29tcGFyZVByb2R1Y3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDMwMDtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5sb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKE11c3RhY2hlLnJlbmRlcihjb21wYXJlTGlzdFRtcGwsIHtcbiAgICAgICAgICAgIGNvbXBhcmU6IGNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlLFxuICAgICAgICAgICAgY2xlYXJfYWxsOiBjb250ZXh0LmNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsLFxuICAgICAgICAgICAgcmVuZGVySXRlbXM6ICgpID0+IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gdGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5qb2luKCcnKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2lzLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3RdJyk7XG4gICAgICAgIHRoaXMuJGNvbXBhcmVCdXR0b24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uXScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFyZVByb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigkZWwuZGF0YSgnY29tcGFyZUlkJykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0KHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICRlbC5kYXRhKCdjb21wYXJlSW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAkZWwuZGF0YSgnY29tcGFyZVRpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLXByb2R1Y3QtcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVQcm9kdWN0UmVtb3ZlJykpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcm9kdWN0KGlkKTtcblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS50b2dnbGVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckFsbFByb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2R1Y3QocHJvZHVjdCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdC5hcHBlbmQoJGVsKTtcblxuICAgICAgICAkZWwuc2hvdyh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLmZhZGVJbih0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9kdWN0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT0ke2lkfV1gKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtXScpO1xuICAgICAgICAkZWwuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29tcGFyZVVybCgpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCkuam9pbignLycpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uLmF0dHIoJ2hyZWYnLCBgJHt0aGlzLmNvbnRleHQudXJscy5jb21wYXJlfS8ke3BhdGh9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RJdGVtVG1wbCwge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHF1aWNrX3ZpZXc6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3F1aWNrX3ZpZXcsXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3JlbW92ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlUHJvZHVjdHMoY29udGV4dCkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBDb21wYXJlUHJvZHVjdHMoY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi93aXNobGlzdCc7XG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tICcuL2NvbW1vbi9mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHN0YXRlQ291bnRyeSBmcm9tICcuL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCB7XG4gICAgY2xhc3NpZnlGb3JtLFxuICAgIFZhbGlkYXRvcnMsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLFxuICAgIGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHsgY3JlZGl0Q2FyZFR5cGUsIHN0b3JlSW5zdHJ1bWVudCwgVmFsaWRhdG9ycyBhcyBDQ1ZhbGlkYXRvcnMsIEZvcm1hdHRlcnMgYXMgQ0NGb3JtYXR0ZXJzIH0gZnJvbSAnLi9jb21tb24vcGF5bWVudC1tZXRob2QnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuLy8gU3VwZXJtYXJrZXQgTW9kXG4vLyBpbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuLi9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldCBNb2RcbiAgICAgICAgLy8gY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIHRlbXBsYXRlXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgLy8gSW5zdGFudGlhdGVzIHdpc2ggbGlzdCBKU1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCRlZGl0QWNjb3VudEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGludm9pY2VCdXR0b24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAkaW52b2ljZUJ1dHRvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCAvIDIgLSA0NTA7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodCAvIDIgLSAzMjA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJGludm9pY2VCdXR0b24uZGF0YSgncHJpbnRJbnZvaWNlJyk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdvcmRlckludm9pY2UnLCBgd2lkdGg9OTAwLGhlaWdodD02NTAsbGVmdD0ke2xlZnR9LHRvcD0ke3RvcH0sc2Nyb2xsYmFycz0xYCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkcmVzc0Zvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuJHN0YXRlLmlzKCdpbnB1dCcpKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGluYm94Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjY291bnRSZXR1cm5Gb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBheW1lbnRNZXRob2RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHJlb3JkZXJGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZERlbGV0ZUFkZHJlc3MoKTtcbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGEgc3VibWl0IGhvb2sgdG8gZW5zdXJlIHRoZSBjdXN0b21lciByZWNlaXZlcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYmVmb3JlIGRlbGV0aW5nIGFuIGFkZHJlc3NcbiAgICAgKi9cbiAgICBiaW5kRGVsZXRlQWRkcmVzcygpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLWFkZHJlc3NdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZUFkZHJlc3MnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmREZWxldGVQYXltZW50TWV0aG9kKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtcGF5bWVudC1tZXRob2RdJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2RlbGV0ZVBheW1lbnRNZXRob2QnKTtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShtZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pIHtcbiAgICAgICAgJHJlb3JkZXJGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzID0gJCgnLmFjY291bnQtbGlzdEl0ZW0gLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgbGV0IHN1Ym1pdEZvcm0gPSBmYWxzZTtcblxuICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmZpbmQoJ1tuYW1lXj1cInJlb3JkZXJpdGVtXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMuZWFjaCgoaW5kZXgsIHByb2R1Y3RDaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQocHJvZHVjdENoZWNrYm94KS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYHJlb3JkZXJpdGVtWyR7cHJvZHVjdElkfV1gLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJzEnLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAkcmVvcmRlckZvcm0uYXBwZW5kKCRpbnB1dCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdWJtaXRGb3JtKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuc2VsZWN0SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkYWRkcmVzc0Zvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJGFjY291bnRSZXR1cm5Gb3JtLmRhdGEoJ2FjY291bnRSZXR1cm5Gb3JtRXJyb3InKTtcblxuICAgICAgICAkYWNjb3VudFJldHVybkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtU3VibWl0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdW50aWwgd2UgZmluZCBhIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBkcm9wZG93biBmb3IgcXVhbnRpdHlcbiAgICAgICAgICAgICQoJ1tuYW1lXj1cInJldHVybl9xdHlcIl0nLCAkYWNjb3VudFJldHVybkZvcm0pLmVhY2goKGksIGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKGVsZSkudmFsKCksIDEwKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtU3VibWl0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBFeGl0IG91dCBvZiBsb29wIGlmIHdlIGZvdW5kIGF0IGxlYXN0IG9uZSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb3JtU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKSB7XG4gICAgICAgIC8vIEluamVjdCB2YWxpZGF0aW9ucyBpbnRvIGZvcm0gZmllbGRzIGJlZm9yZSB2YWxpZGF0aW9uIHJ1bnNcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNmaXJzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5maXJzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNsYXN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0Lmxhc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY29tcGFueS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY29tcGFueUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwaG9uZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucGhvbmVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczEuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MxTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjYWRkcmVzczIuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmFkZHJlc3MyTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NpdHkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNpdHlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb3VudHJ5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVzZWxlY3RcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvdW50cnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBwcmVmaXg6IFwiJHt0aGlzLmNvbnRleHQuY2hvb3NlQ291bnRyeUxhYmVsfVwiIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNzdGF0ZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuc3RhdGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNwb3N0YWxfY29kZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQucG9zdGFsQ29kZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXWApO1xuXG4gICAgICAgIGxldCAkbGFzdDtcbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkoJHN0YXRlRWxlbWVudCwgdGhpcy5jb250ZXh0LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHBheW1lbnRNZXRob2RWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucmVtb3ZlKCRzdGF0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XG5cbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgZm9ybUVkaXRTZWxlY3RvciA9ICdmb3JtW2RhdGEtZWRpdC1hY2NvdW50LWZvcm1dJztcbiAgICAgICAgY29uc3QgZWRpdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJFbWFpbEFkZHJlc3NcIl1gO1xuICAgICAgICBjb25zdCAkZW1haWxFbGVtZW50ID0gJChlbWFpbFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJQYXNzd29yZFwiXWA7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZEVsZW1lbnQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDb25maXJtUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFzc3dvcmRTZWxlY3RvciA9IGAke2Zvcm1FZGl0U2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9XCJDdXJyZW50UGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkY3VycmVudFBhc3N3b3JkID0gJChjdXJyZW50UGFzc3dvcmRTZWxlY3Rvcik7XG5cbiAgICAgICAgLy8gVGhpcyBvbmx5IGhhbmRsZXMgdGhlIGN1c3RvbSBmaWVsZHMsIHN0YW5kYXJkIGZpZWxkcyBhcmUgYWRkZWQgYmVsb3dcbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihlZGl0VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCwgaW52YWxpZF9wYXNzd29yZDogaW52YWxpZFBhc3N3b3JkIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgaW52YWxpZFBhc3N3b3JkKSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBjcmVkaXRjYXJkcyBmcm9tICdjcmVkaXRjYXJkcyc7XG5cbi8qKlxuICogT21pdCBudWxsIG9yIGVtcHR5IHN0cmluZyBwcm9wZXJ0aWVzIG9mIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3Qgb21pdE51bGxTdHJpbmcgPSBvYmogPT4ge1xuICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcblxuICAgICQuZWFjaChyZWZPYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZWZPYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlZk9iajtcbn07XG5cbi8qKlxuICogR2V0IGNyZWRpdCBjYXJkIHR5cGUgZnJvbSBjcmVkaXQgY2FyZCBudW1iZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgY3JlZGl0Q2FyZFR5cGUgPSB2YWx1ZSA9PiBjcmVkaXRjYXJkcy5jYXJkLnR5cGUoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWx1ZSksIHRydWUpO1xuXG4vKipcbiAqIFdyYXBwZXIgZm9yIGFqYXggcmVxdWVzdCB0byBzdG9yZSBhIG5ldyBpbnN0cnVtZW50IGluIGJpZ3BheVxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBoZWFkZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgYm9keVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZG9uZSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgc3VjY2Vzc2Z1bCByZXNwb25zZVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZmFpbCBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGEgdW5zdWNjZXNzZnVsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBzdG9yZUluc3RydW1lbnQgPSAoe1xuICAgIC8vIEhvc3RuYW1lLCBJZHMgJiBUb2tlblxuICAgIHBheW1lbnRzVXJsLFxuICAgIHNob3BwZXJJZCxcbiAgICBzdG9yZUhhc2gsXG4gICAgdmF1bHRUb2tlbixcbn0sIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIC8vIFByb3ZpZGVyIEluZm9cbiAgICBwcm92aWRlcl9pZCxcbiAgICBjdXJyZW5jeV9jb2RlLFxuXG4gICAgLy8gSW5zdHJ1bWVudCBEZXRhaWxzXG4gICAgY3JlZGl0X2NhcmRfbnVtYmVyLFxuICAgIGV4cGlyYXRpb24sXG4gICAgbmFtZV9vbl9jYXJkLFxuICAgIGN2dixcbiAgICBkZWZhdWx0X2luc3RydW1lbnQsXG5cbiAgICAvLyBCaWxsaW5nIEFkZHJlc3NcbiAgICBhZGRyZXNzMSxcbiAgICBhZGRyZXNzMixcbiAgICBjaXR5LFxuICAgIHBvc3RhbF9jb2RlLFxuICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgY291bnRyeV9jb2RlLFxuICAgIGNvbXBhbnksXG4gICAgZmlyc3RfbmFtZSxcbiAgICBsYXN0X25hbWUsXG4gICAgZW1haWwsXG4gICAgcGhvbmUsXG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufSwgZG9uZSwgZmFpbCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IGV4cGlyYXRpb24uc3BsaXQoJy8nKTtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYCR7cGF5bWVudHNVcmx9L3N0b3Jlcy8ke3N0b3JlSGFzaH0vY3VzdG9tZXJzLyR7c2hvcHBlcklkfS9zdG9yZWRfaW5zdHJ1bWVudHNgLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB2YXVsdFRva2VuLFxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGluc3RydW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICAgICAgICAgICAgY2FyZGhvbGRlcl9uYW1lOiBuYW1lX29uX2NhcmQsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKGNyZWRpdF9jYXJkX251bWJlciksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksXG4gICAgICAgICAgICAgICAgZXhwaXJ5X3llYXI6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpLFxuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbl92YWx1ZTogY3Z2LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzczogb21pdE51bGxTdHJpbmcoe1xuICAgICAgICAgICAgICAgIGFkZHJlc3MxLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICAgICAgICAgICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2NvZGUsXG4gICAgICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcHJvdmlkZXJfaWQsXG4gICAgICAgICAgICBkZWZhdWx0X2luc3RydW1lbnQsXG4gICAgICAgICAgICBjdXJyZW5jeV9jb2RlLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgICAgICAuZG9uZShkb25lKVxuICAgICAgICAuZmFpbChmYWlsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJGb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSBjcmVkaXRjYXJkcy5jYXJkLmZvcm1hdChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHRhcmdldC52YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvbkZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCwgd2hpY2ggfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZlRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAod2hpY2ggPT09IDggJiYgLy4qKFxcLykkLy50ZXN0KHRhcmdldC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC52YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCA1KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoICE9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzEtOV1cXC98WzItOV0pJC9nLCAnMCQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKSQvZywgJyQxLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMC0xXSkoWzMtOV0pJC9nLCAnMCQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pKFswLTldezJ9KSQvZywgJyQxLyQyJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswXSspXFwvfFswXSskL2csICcwJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZFxcL118XltcXC9dKiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGNyZWRpdCBjYXJkIG51bWJlclxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlclZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY2FyZC5pc1ZhbGlkKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25WYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBpcnkgPSB2YWwuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgL14oMFsxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC8udGVzdCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgJiYgIWNyZWRpdGNhcmRzLmV4cGlyYXRpb24uaXNQYXN0KGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSwgY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgbmFtZSBvbiBjYXJkXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXROYW1lT25DYXJkVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gISF2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3Z2XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge2FueX0gY2FyZFR5cGUgVGhlIGNyZWRpdCBjYXJkIG51bWJlciB0eXBlXG4gICAgICovXG4gICAgc2V0Q3Z2VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSwgY2FyZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgY2FyZFR5cGUgPT09ICdmdW5jdGlvbicgPyBjYXJkVHlwZSgpIDogY2FyZFR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggJiYgY3JlZGl0Y2FyZHMuY3ZjLmlzVmFsaWQodmFsLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxufTtcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2hMaXN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvdW50L2FkZC13aXNobGlzdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvbmZpcm0gYm94IGJlZm9yZSBkZWxldGluZyBhbGwgd2lzaCBsaXN0c1xuICAgICAqL1xuICAgIHdpc2hsaXN0RGVsZXRlQ29uZmlybSgpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS13aXNobGlzdC1kZWxldGVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaGxpc3RGb3JtKSB7XG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB3aXNobGlzdCBuYW1lLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==