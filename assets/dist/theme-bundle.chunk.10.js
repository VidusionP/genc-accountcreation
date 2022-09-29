(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCertificate; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);

  function GiftCertificate(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });

    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');

      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }

        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };

      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);

          if (!numberVal) {
            cb(false);
          }

          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }

    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);

    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);

      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();

        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }

    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        return;
      }

      var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["defaultModal"])();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }

        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }

  var _proto = GiftCertificate.prototype;

  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["announceInputErrorMessage"]
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: 'You must enter a certificate code.'
    });
    return balanceValidator;
  };

  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIiwiR2lmdENlcnRpZmljYXRlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCIkY2VydEJhbGFuY2VGb3JtIiwiJCIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwidmFsIiwicmVjaXBpZW50RW1haWwiLCJmb3JtTW9kZWwiLCJlbWFpbCIsInNlbmRlck5hbWUiLCJzZW5kZXJFbWFpbCIsImN1c3RvbUFtb3VudCIsInZhbHVlIiwibWluIiwibWF4Iiwic2V0QW1vdW50Iiwib3B0aW9ucyIsImZvdW5kIiwiZm9yRWFjaCIsIm9wdGlvbiIsIiRwdXJjaGFzZUZvcm0iLCIkY3VzdG9tQW1vdW50cyIsImZpbmQiLCJwdXJjaGFzZVZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImRlbGF5IiwidGFwIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFtb3VudFJhbmdlIiwiYW1vdW50UGxhY2Vob2xkZXJzIiwidXBkYXRlZEVycm9yVGV4dCIsInBsYWNlaG9sZGVyIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibnVtYmVyVmFsIiwiTnVtYmVyIiwiZXJyb3JNZXNzYWdlIiwiY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlIiwicmVzdWx0IiwidG9OYW1lIiwidG9FbWFpbCIsImZyb21OYW1lIiwiZnJvbUVtYWlsIiwidHJpZ2dlcmVkQnkiLCJjZXJ0VGhlbWUiLCJnZXQiLCJjaGVja2VkIiwiYWdyZWVUb1Rlcm1zIiwiYmFsYW5jZVZhbCIsImNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IiLCJvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicHJldmlld1VybCIsImN1cnJlbnRUYXJnZXQiLCJzZXJpYWxpemUiLCJvcGVuIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJ1cGRhdGVDb250ZW50IiwicHJldmlld0Vycm9yIiwid3JhcCIsIiRiYWxhbmNlRm9ybSIsImJhbGFuY2VWYWxpZGF0b3IiLCJnaWZ0Q2VydENoZWNrZXIiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUseUVBQVVBLElBQVYsRUFBZ0I7RUFDM0IsSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0lBQzFCLE9BQU8sS0FBUDtFQUNILENBSDBCLENBSzNCOzs7RUFDQSxPQUFP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QUFFdUQsWUFBWSxDQUFDMUQsSUFBYixDQUFrQixzQkFBbEIsQ0FEaUI7TUFFekJLLEdBQUcsRUFBRUMsa0ZBQXlCQTtJQUZMLENBQUQsQ0FBNUI7SUFLQXFELGdCQUFnQixDQUFDeEMsR0FBakIsQ0FBcUI7TUFDakJDLFFBQVEsRUFBRXNDLFlBQVksQ0FBQzFELElBQWIsQ0FBa0IsbUNBQWxCLENBRE87TUFFakJxQixRQUZpQixvQkFFUkMsRUFGUSxFQUVKdkMsR0FGSSxFQUVDO1FBQ2R1QyxFQUFFLENBQUNzQyxrRkFBZSxDQUFDN0UsR0FBRCxDQUFoQixDQUFGO01BQ0gsQ0FKZ0I7TUFLakIwQyxZQUFZLEVBQUU7SUFMRyxDQUFyQjtJQVFBLE9BQU9rQyxnQkFBUDtFQUNILEM7OztFQTNNd0NFLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrZXIgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IGZvcm1Nb2RlbCBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdENlcnRpZmljYXRlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGNlcnRCYWxhbmNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWJhbGFuY2UnKTtcblxuICAgICAgICBjb25zdCBwdXJjaGFzZU1vZGVsID0ge1xuICAgICAgICAgICAgcmVjaXBpZW50TmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWNpcGllbnRFbWFpbCguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kZXJOYW1lKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRlckVtYWlsKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUFtb3VudCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPj0gbWluICYmIHZhbHVlIDw9IG1heDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBbW91bnQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgJHB1cmNoYXNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGN1c3RvbUFtb3VudHMgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkY3VzdG9tQW1vdW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtZW50ID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSAkZWxlbWVudC5kYXRhKCdtaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbkZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21pbkZvcm1hdHRlZCcpO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gJGVsZW1lbnQuZGF0YSgnbWF4Jyk7XG4gICAgICAgICAgICBjb25zdCBtYXhGb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtYXhGb3JtYXR0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UsIC4uLmFtb3VudFJhbmdlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW1vdW50UGxhY2Vob2xkZXJzID0gWydbTUlOXScsICdbTUFYXSddO1xuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkRXJyb3JUZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBhbW91bnRQbGFjZWhvbGRlcnMuZm9yRWFjaCgocGxhY2Vob2xkZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEVycm9yVGV4dCA9IHVwZGF0ZWRFcnJvclRleHQuaW5jbHVkZXMocGxhY2Vob2xkZXIpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQucmVwbGFjZShwbGFjZWhvbGRlciwgYW1vdW50UmFuZ2VbaV0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRFcnJvclRleHQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyVmFsID0gTnVtYmVyKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFudW1iZXJWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKG51bWJlclZhbCA+PSBtaW4gJiYgbnVtYmVyVmFsIDw9IG1heCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlKHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuY2VydGlmaWNhdGVfYW1vdW50X3JhbmdlLCBtaW5Gb3JtYXR0ZWQsIG1heEZvcm1hdHRlZCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19uYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnROYW1lKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJ0b19lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50RW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudG9FbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJmcm9tX25hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlck5hbWUodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbU5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9lbWFpbFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyRW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZnJvbUVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmZpcnN0LW9mLXR5cGUnLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY2VydFRoZW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlXCJdJykuZ2V0KDApLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZTJcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJykuZ2V0KDApLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmFncmVlVG9UZXJtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGlmICgkY2VydEJhbGFuY2VGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZVZhbCA9IHRoaXMuY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkY2VydEJhbGFuY2VGb3JtKTtcblxuICAgICAgICAgICAgJGNlcnRCYWxhbmNlRm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJhbGFuY2VWYWwucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VWYWwuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwdXJjaGFzZUZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1wcmV2aWV3JykuY2xpY2soZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICAgICAgY29uc3QgcHJldmlld1VybCA9IGAkeyQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJldmlld1VybCcpfSYkeyRwdXJjaGFzZUZvcm0uc2VyaWFsaXplKCl9YDtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShwcmV2aWV3VXJsLCB7fSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGFsLnVwZGF0ZUNvbnRlbnQodGhpcy5jb250ZXh0LnByZXZpZXdFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXA6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkYmFsYW5jZUZvcm0pIHtcbiAgICAgICAgY29uc3QgYmFsYW5jZVZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJhbGFuY2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImdpZnRjZXJ0aWZpY2F0ZWNvZGVcIl0nKSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcbiAgICAgICAgICAgICAgICBjYihnaWZ0Q2VydENoZWNrZXIodmFsKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBjZXJ0aWZpY2F0ZSBjb2RlLicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBiYWxhbmNlVmFsaWRhdG9yO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=