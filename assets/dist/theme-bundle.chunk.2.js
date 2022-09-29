(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^\S+@\S+\.\S+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

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

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/*! exports provided: createPasswordValidationErrorTextObject, classifyForm, Validators, insertStateHiddenField, announceInputErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPasswordValidationErrorTextObject", function() { return createPasswordValidationErrorTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announceInputErrorMessage", function() { return announceInputErrorMessage; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Set up Object with Error Messages on Password Validation. Please use messages in mentioned order
 * @param {string} empty defines error text for empty field
 * @param {string} confirm defines error text for empty confirmation field
 * @param {string} mismatch defines error text if confirm passford mismatches passford field
 * @param {string} invalid defines error text for invalid password charaters sequence
 * @return {object} messages or default texts if nothing is providing
 */

var createPasswordValidationErrorTextObject = function createPasswordValidationErrorTextObject(empty, confirm, mismatch, invalid) {
  return {
    onEmptyPasswordErrorText: empty,
    onConfirmPasswordErrorText: confirm,
    onMismatchPasswordErrorText: mismatch,
    onNotValidPasswordErrorText: invalid
  };
};
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
/**
 * Announce form input error message by screen reader
 * @param {params.element} dom input element where checking is happened
 * @param {params.result} result of validation check
 */


function announceInputErrorMessage(_ref) {
  var element = _ref.element,
      result = _ref.result;

  if (result) {
    return;
  }

  var activeInputContainer = $(element).parent(); // the reason for using span tag is nod-validate lib
  // which does not add error message class while initialising form

  var errorMessage = $(activeInputContainer).find('span');

  if (errorMessage.length) {
    var $errMessage = $(errorMessage[0]);

    if (!$errMessage.attr('role')) {
      $errMessage.attr('role', 'alert');
    }
  }
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   * @param {string} errorText describes errorMassage on email validation
   */
  setEmailValidation: function setEmailValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: errorText
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param {object} errorTextsObject
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, _ref2, isOptional) {
    var onEmptyPasswordErrorText = _ref2.onEmptyPasswordErrorText,
        onConfirmPasswordErrorText = _ref2.onConfirmPasswordErrorText,
        onMismatchPasswordErrorText = _ref2.onMismatchPasswordErrorText,
        onNotValidPasswordErrorText = _ref2.onNotValidPasswordErrorText;
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onEmptyPasswordErrorText
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onNotValidPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onConfirmPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: onMismatchPasswordErrorText
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors, priceValidationErrorTexts) {
    if (priceValidationErrorTexts === void 0) {
      priceValidationErrorTexts = {};
    }

    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector; // eslint-disable-next-line object-curly-newline

    var _priceValidationError = priceValidationErrorTexts,
        onMinPriceError = _priceValidationError.onMinPriceError,
        onMaxPriceError = _priceValidationError.onMaxPriceError,
        minPriceNotEntered = _priceValidationError.minPriceNotEntered,
        maxPriceNotEntered = _priceValidationError.maxPriceNotEntered,
        onInvalidPrice = _priceValidationError.onInvalidPrice;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: onMinPriceError,
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: onMaxPriceError,
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: maxPriceNotEntered,
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: minPriceNotEntered,
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: onInvalidPrice,
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: errorText
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMuanMiXSwibmFtZXMiOlsiZm9ybXMiLCJlbWFpbCIsInZhbHVlIiwicmUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJub3RFbXB0eSIsImxlbmd0aCIsIm1pbk1heFZhbGlkYXRlIiwibWluSW5wdXRTZWxlY3RvciIsIm1heElucHV0U2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwiJCIsInZhbCIsIm1heFZhbHVlIiwibm9kIiwiY2xhc3NlcyIsImVycm9yQ2xhc3MiLCJzdWNjZXNzQ2xhc3MiLCJlcnJvck1lc3NhZ2VDbGFzcyIsImNoZWNrRnVuY3Rpb25zIiwiaW5wdXRUYWdOYW1lcyIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsImVtcHR5IiwiY29uZmlybSIsIm1pc21hdGNoIiwiaW52YWxpZCIsIm9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCIsIm9uQ29uZmlybVBhc3N3b3JkRXJyb3JUZXh0Iiwib25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0Iiwib25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0IiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJhZnRlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJlbGVtZW50IiwicmVzdWx0IiwiYWN0aXZlSW5wdXRDb250YWluZXIiLCJlcnJvck1lc3NhZ2UiLCIkZXJyTWVzc2FnZSIsImF0dHIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJlcnJvclRleHQiLCJhZGQiLCJzZWxlY3RvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwicHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBRztFQUNWQyxLQURVLGlCQUNKQyxLQURJLEVBQ0c7SUFDVCxJQUFNQyxFQUFFLEdBQUcsZUFBWDtJQUNBLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRixLQUFSLENBQVA7RUFDSCxDQUpTOztFQU1WO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUcsUUFYVSxvQkFXREgsS0FYQyxFQVdNO0lBQ1osT0FBTyxLQUFLSSxRQUFMLENBQWNKLEtBQWQsQ0FBUDtFQUNILENBYlM7O0VBZVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lJLFFBckJVLG9CQXFCREosS0FyQkMsRUFxQk07SUFDWixPQUFPQSxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUF0QjtFQUNIO0FBdkJTLENBQWQ7QUEwQmVQLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLFNBQVNRLGNBQVQsQ0FBd0JDLGdCQUF4QixFQUEwQ0MsZ0JBQTFDLEVBQTREO0VBQ3hELFNBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0lBQ2xCLElBQU1DLFFBQVEsR0FBR0MsVUFBVSxDQUFDQyxDQUFDLENBQUNOLGdCQUFELENBQUQsQ0FBb0JPLEdBQXBCLEVBQUQsQ0FBM0I7SUFDQSxJQUFNQyxRQUFRLEdBQUdILFVBQVUsQ0FBQ0MsQ0FBQyxDQUFDTCxnQkFBRCxDQUFELENBQW9CTSxHQUFwQixFQUFELENBQTNCOztJQUVBLElBQUlDLFFBQVEsR0FBR0osUUFBWCxJQUF1QixvREFBUUksUUFBUixDQUF2QixJQUE0QyxvREFBUUosUUFBUixDQUFoRCxFQUFtRTtNQUMvRCxPQUFPRCxFQUFFLENBQUMsSUFBRCxDQUFUO0lBQ0g7O0lBRUQsT0FBT0EsRUFBRSxDQUFDLEtBQUQsQ0FBVDtFQUNIOztFQUVELE9BQU9ELFFBQVA7QUFDSDs7QUFFY0gsNkVBQWYsRTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0FVLG1EQUFHLENBQUNDLE9BQUosQ0FBWUMsVUFBWixHQUF5QixtQkFBekI7QUFDQUYsbURBQUcsQ0FBQ0MsT0FBSixDQUFZRSxZQUFaLEdBQTJCLHFCQUEzQjtBQUNBSCxtREFBRyxDQUFDQyxPQUFKLENBQVlHLGlCQUFaLEdBQWdDLG9CQUFoQyxDLENBRUE7O0FBQ0FKLG1EQUFHLENBQUNLLGNBQUosQ0FBbUIsU0FBbkIsSUFBZ0NmLHVFQUFoQztBQUVlVSxrSEFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFFQSxJQUFNTSxhQUFhLEdBQUcsQ0FDbEIsT0FEa0IsRUFFbEIsUUFGa0IsRUFHbEIsVUFIa0IsQ0FBdEI7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLHVDQUF1QyxHQUFHLFNBQTFDQSx1Q0FBMEMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxRQUFqQixFQUEyQkMsT0FBM0I7RUFBQSxPQUF3QztJQUMzRkMsd0JBQXdCLEVBQUVKLEtBRGlFO0lBRTNGSywwQkFBMEIsRUFBRUosT0FGK0Q7SUFHM0ZLLDJCQUEyQixFQUFFSixRQUg4RDtJQUkzRkssMkJBQTJCLEVBQUVKO0VBSjhELENBQXhDO0FBQUEsQ0FBaEQ7QUFRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0ssYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLGNBQTlCLEVBQThDO0VBQzFDLElBQU1DLE1BQU0sR0FBR3RCLENBQUMsQ0FBQ29CLEtBQUQsQ0FBaEI7RUFDQSxJQUFNRyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxPQUFrQkgsY0FBbEIsQ0FBbkI7RUFDQSxJQUFNSSxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFNBQVosRUFBdUJDLFdBQXZCLEVBQWhCO0VBRUEsSUFBSUMsU0FBUyxHQUFNUCxjQUFOLFVBQXlCSSxPQUF0QztFQUNBLElBQUlJLGlCQUFKLENBTjBDLENBUTFDOztFQUNBLElBQUlKLE9BQU8sS0FBSyxPQUFoQixFQUF5QjtJQUNyQixJQUFNSyxTQUFTLEdBQUdSLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLE1BQVosQ0FBbEI7O0lBRUEsSUFBSSx1REFBVyxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFFBQXRCLENBQVgsRUFBNENJLFNBQTVDLENBQUosRUFBNEQ7TUFDeEQ7TUFDQUYsU0FBUyxHQUFNUCxjQUFOLFVBQXlCLHdEQUFZUyxTQUFaLENBQWxDO0lBQ0gsQ0FIRCxNQUdPO01BQ0g7TUFDQUQsaUJBQWlCLFFBQU1ELFNBQU4sR0FBa0IseURBQWFFLFNBQWIsQ0FBbkM7SUFDSDtFQUNKLENBbkJ5QyxDQXFCMUM7OztFQUNBLE9BQU9QLFVBQVUsQ0FDWlEsUUFERSxDQUNPSCxTQURQLEVBRUZHLFFBRkUsQ0FFT0YsaUJBRlAsQ0FBUDtBQUdIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0csWUFBVCxDQUFzQkMsWUFBdEIsRUFBb0NDLE9BQXBDLEVBQWtEO0VBQUEsSUFBZEEsT0FBYztJQUFkQSxPQUFjLEdBQUosRUFBSTtFQUFBOztFQUNyRCxJQUFNQyxLQUFLLEdBQUduQyxDQUFDLENBQUNpQyxZQUFELENBQWY7RUFDQSxJQUFNRyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXNUIsYUFBYSxDQUFDNkIsSUFBZCxDQUFtQixJQUFuQixDQUFYLENBQWhCLENBRnFELENBSXJEOztFQUNBLGVBQTBDSixPQUExQztFQUFBLHFDQUFRYixjQUFSO0VBQUEsSUFBUUEsY0FBUixzQ0FBeUIsWUFBekIseUJBTHFELENBT3JEOztFQUNBZSxPQUFPLENBQUNHLElBQVIsQ0FBYSxVQUFDQyxFQUFELEVBQUtwQixLQUFMLEVBQWU7SUFDeEJELGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxjQUFSLENBQWI7RUFDSCxDQUZEO0VBSUEsT0FBT2MsS0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTTSxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtFQUN4QixJQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ2hCLElBQVAsQ0FBWSxNQUFaLEVBQW9Ca0IsS0FBcEIsQ0FBMEIsVUFBMUIsQ0FBaEI7O0VBRUEsSUFBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUNuRCxNQUFSLEtBQW1CLENBQWxDLEVBQXFDO0lBQ2pDLE9BQU9tRCxPQUFPLENBQUMsQ0FBRCxDQUFkO0VBQ0g7O0VBRUQsT0FBTyxFQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0Usc0JBQVQsQ0FBZ0NDLFdBQWhDLEVBQTZDO0VBQ3pDLElBQU1ILE9BQU8sR0FBR0YsVUFBVSxDQUFDSyxXQUFELENBQTFCO0VBQ0EsSUFBTUMsZUFBZSxHQUFHO0lBQ3BCQyxJQUFJLEVBQUUsUUFEYztJQUVwQkMsSUFBSSxzQkFBb0JOLE9BRko7SUFHcEJ4RCxLQUFLLEVBQUU7RUFIYSxDQUF4QjtFQU1BMkQsV0FBVyxDQUFDSSxLQUFaLENBQWtCbEQsQ0FBQyxDQUFDLFdBQUQsRUFBYytDLGVBQWQsQ0FBbkI7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNJLHlCQUFULE9BQXdEO0VBQUEsSUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtFQUFBLElBQVZDLE1BQVUsUUFBVkEsTUFBVTs7RUFDcEQsSUFBSUEsTUFBSixFQUFZO0lBQ1I7RUFDSDs7RUFDRCxJQUFNQyxvQkFBb0IsR0FBR3RELENBQUMsQ0FBQ29ELE9BQUQsQ0FBRCxDQUFXNUIsTUFBWCxFQUE3QixDQUpvRCxDQUtwRDtFQUNBOztFQUNBLElBQU0rQixZQUFZLEdBQUd2RCxDQUFDLENBQUNzRCxvQkFBRCxDQUFELENBQXdCakIsSUFBeEIsQ0FBNkIsTUFBN0IsQ0FBckI7O0VBRUEsSUFBSWtCLFlBQVksQ0FBQy9ELE1BQWpCLEVBQXlCO0lBQ3JCLElBQU1nRSxXQUFXLEdBQUd4RCxDQUFDLENBQUN1RCxZQUFZLENBQUMsQ0FBRCxDQUFiLENBQXJCOztJQUVBLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxJQUFaLENBQWlCLE1BQWpCLENBQUwsRUFBK0I7TUFDM0JELFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixNQUFqQixFQUF5QixPQUF6QjtJQUNIO0VBQ0o7QUFDSjs7QUFFRCxJQUFNQyxVQUFVLEdBQUc7RUFDZjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsa0JBQWtCLEVBQUUsNEJBQUNDLFNBQUQsRUFBWUMsS0FBWixFQUFtQkMsU0FBbkIsRUFBaUM7SUFDakQsSUFBSUQsS0FBSixFQUFXO01BQ1BELFNBQVMsQ0FBQ0csR0FBVixDQUFjO1FBQ1ZDLFFBQVEsRUFBRUgsS0FEQTtRQUVWakUsUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtJLEdBQUwsRUFBYTtVQUNuQixJQUFNb0QsTUFBTSxHQUFHcEUscURBQUssQ0FBQ0MsS0FBTixDQUFZZSxHQUFaLENBQWY7VUFFQUosRUFBRSxDQUFDd0QsTUFBRCxDQUFGO1FBQ0gsQ0FOUztRQU9WRSxZQUFZLEVBQUVPO01BUEosQ0FBZDtJQVNIO0VBQ0osQ0FuQmM7O0VBcUJmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJRyxxQkFBcUIsRUFBRSwrQkFBQ0wsU0FBRCxFQUFZTSxnQkFBWixFQUE4QkMsaUJBQTlCLEVBQWlEQyxZQUFqRCxTQUVwQkMsVUFGb0IsRUFFTDtJQUFBLElBRGR0RCx3QkFDYyxTQURkQSx3QkFDYztJQUFBLElBRFlDLDBCQUNaLFNBRFlBLDBCQUNaO0lBQUEsSUFEd0NDLDJCQUN4QyxTQUR3Q0EsMkJBQ3hDO0lBQUEsSUFEcUVDLDJCQUNyRSxTQURxRUEsMkJBQ3JFO0lBQ2QsSUFBTW9ELFNBQVMsR0FBR3RFLENBQUMsQ0FBQ2tFLGdCQUFELENBQW5CO0lBQ0EsSUFBTUssbUJBQW1CLEdBQUcsQ0FDeEI7TUFDSVAsUUFBUSxFQUFFRSxnQkFEZDtNQUVJdEUsUUFBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUtJLEdBQUwsRUFBYTtRQUNuQixJQUFNb0QsTUFBTSxHQUFHcEQsR0FBRyxDQUFDVCxNQUFuQjs7UUFFQSxJQUFJNkUsVUFBSixFQUFnQjtVQUNaLE9BQU94RSxFQUFFLENBQUMsSUFBRCxDQUFUO1FBQ0g7O1FBRURBLEVBQUUsQ0FBQ3dELE1BQUQsQ0FBRjtNQUNILENBVkw7TUFXSUUsWUFBWSxFQUFFeEM7SUFYbEIsQ0FEd0IsRUFjeEI7TUFDSWlELFFBQVEsRUFBRUUsZ0JBRGQ7TUFFSXRFLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLSSxHQUFMLEVBQWE7UUFDbkIsSUFBTW9ELE1BQU0sR0FBR3BELEdBQUcsQ0FBQzJDLEtBQUosQ0FBVSxJQUFJNEIsTUFBSixDQUFXSixZQUFZLENBQUNLLEtBQXhCLENBQVYsS0FDUnhFLEdBQUcsQ0FBQzJDLEtBQUosQ0FBVSxJQUFJNEIsTUFBSixDQUFXSixZQUFZLENBQUNNLE9BQXhCLENBQVYsQ0FEUSxJQUVSekUsR0FBRyxDQUFDVCxNQUFKLElBQWM0RSxZQUFZLENBQUNPLFNBRmxDLENBRG1CLENBS25COztRQUNBLElBQUlOLFVBQVUsSUFBSXBFLEdBQUcsQ0FBQ1QsTUFBSixLQUFlLENBQWpDLEVBQW9DO1VBQ2hDLE9BQU9LLEVBQUUsQ0FBQyxJQUFELENBQVQ7UUFDSDs7UUFFREEsRUFBRSxDQUFDd0QsTUFBRCxDQUFGO01BQ0gsQ0FiTDtNQWNJRSxZQUFZLEVBQUVyQztJQWRsQixDQWR3QixFQThCeEI7TUFDSThDLFFBQVEsRUFBRUcsaUJBRGQ7TUFFSXZFLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLSSxHQUFMLEVBQWE7UUFDbkIsSUFBTW9ELE1BQU0sR0FBR3BELEdBQUcsQ0FBQ1QsTUFBbkI7O1FBRUEsSUFBSTZFLFVBQUosRUFBZ0I7VUFDWixPQUFPeEUsRUFBRSxDQUFDLElBQUQsQ0FBVDtRQUNIOztRQUVEQSxFQUFFLENBQUN3RCxNQUFELENBQUY7TUFDSCxDQVZMO01BV0lFLFlBQVksRUFBRXZDO0lBWGxCLENBOUJ3QixFQTJDeEI7TUFDSWdELFFBQVEsRUFBRUcsaUJBRGQ7TUFFSXZFLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLSSxHQUFMLEVBQWE7UUFDbkIsSUFBTW9ELE1BQU0sR0FBR3BELEdBQUcsS0FBS3FFLFNBQVMsQ0FBQ3JFLEdBQVYsRUFBdkI7UUFFQUosRUFBRSxDQUFDd0QsTUFBRCxDQUFGO01BQ0gsQ0FOTDtNQU9JRSxZQUFZLEVBQUV0QztJQVBsQixDQTNDd0IsQ0FBNUI7SUFzREEyQyxTQUFTLENBQUNHLEdBQVYsQ0FBY1EsbUJBQWQ7RUFDSCxDQXpGYzs7RUEyRmY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUssd0JBQXdCLEVBQUUsa0NBQUNoQixTQUFELEVBQVlpQixTQUFaLEVBQXVCQyx5QkFBdkIsRUFBMEQ7SUFBQSxJQUFuQ0EseUJBQW1DO01BQW5DQSx5QkFBbUMsR0FBUCxFQUFPO0lBQUE7O0lBQ2hGLElBQ0lDLGFBREosR0FNSUYsU0FOSixDQUNJRSxhQURKO0lBQUEsSUFFSUMsZ0JBRkosR0FNSUgsU0FOSixDQUVJRyxnQkFGSjtJQUFBLElBR0kvQyxZQUhKLEdBTUk0QyxTQU5KLENBR0k1QyxZQUhKO0lBQUEsSUFJSWdELGdCQUpKLEdBTUlKLFNBTkosQ0FJSUksZ0JBSko7SUFBQSxJQUtJQyxnQkFMSixHQU1JTCxTQU5KLENBS0lLLGdCQUxKLENBRGdGLENBU2hGOztJQUNBLDRCQUFxR0oseUJBQXJHO0lBQUEsSUFBUUssZUFBUix5QkFBUUEsZUFBUjtJQUFBLElBQXlCQyxlQUF6Qix5QkFBeUJBLGVBQXpCO0lBQUEsSUFBMENDLGtCQUExQyx5QkFBMENBLGtCQUExQztJQUFBLElBQThEQyxrQkFBOUQseUJBQThEQSxrQkFBOUQ7SUFBQSxJQUFrRkMsY0FBbEYseUJBQWtGQSxjQUFsRjtJQUVBM0IsU0FBUyxDQUFDNEIsU0FBVixDQUFvQjtNQUNoQkMsSUFBSSxFQUFFeEQsWUFEVTtNQUVoQnlELGFBQWEsRUFBRSxJQUZDO01BR2hCcEYsWUFBWSxFQUFFLEdBSEUsQ0FHRzs7SUFISCxDQUFwQjtJQU1Bc0QsU0FBUyxDQUFDRyxHQUFWLENBQWM7TUFDVlIsWUFBWSxFQUFFNEIsZUFESjtNQUVWbkIsUUFBUSxFQUFFa0IsZ0JBRkE7TUFHVnRGLFFBQVEsZUFBYXNGLGdCQUFiLFNBQWlDRDtJQUgvQixDQUFkO0lBTUFyQixTQUFTLENBQUNHLEdBQVYsQ0FBYztNQUNWUixZQUFZLEVBQUU2QixlQURKO01BRVZwQixRQUFRLEVBQUVpQixnQkFGQTtNQUdWckYsUUFBUSxlQUFhc0YsZ0JBQWIsU0FBaUNEO0lBSC9CLENBQWQ7SUFNQXJCLFNBQVMsQ0FBQ0csR0FBVixDQUFjO01BQ1ZSLFlBQVksRUFBRStCLGtCQURKO01BRVZ0QixRQUFRLEVBQUVpQixnQkFGQTtNQUdWckYsUUFBUSxFQUFFO0lBSEEsQ0FBZDtJQU1BZ0UsU0FBUyxDQUFDRyxHQUFWLENBQWM7TUFDVlIsWUFBWSxFQUFFOEIsa0JBREo7TUFFVnJCLFFBQVEsRUFBRWtCLGdCQUZBO01BR1Z0RixRQUFRLEVBQUU7SUFIQSxDQUFkO0lBTUFnRSxTQUFTLENBQUNHLEdBQVYsQ0FBYztNQUNWUixZQUFZLEVBQUVnQyxjQURKO01BRVZ2QixRQUFRLEVBQUUsQ0FBQ2tCLGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FGQTtNQUdWckYsUUFBUSxFQUFFO0lBSEEsQ0FBZDtJQU1BZ0UsU0FBUyxDQUFDK0IsaUJBQVYsQ0FBNEI7TUFDeEIzQixRQUFRLEVBQUUsQ0FBQ2tCLGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FEYztNQUV4QnpELE1BQU0sRUFBRXdELGdCQUZnQjtNQUd4QlksU0FBUyxFQUFFYjtJQUhhLENBQTVCO0VBS0gsQ0ExSmM7O0VBNEpmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSWMseUJBQXlCLEVBQUUsbUNBQUNqQyxTQUFELEVBQVlDLEtBQVosRUFBbUJDLFNBQW5CLEVBQWlDO0lBQ3hELElBQUlELEtBQUosRUFBVztNQUNQRCxTQUFTLENBQUNHLEdBQVYsQ0FBYztRQUNWQyxRQUFRLEVBQUVILEtBREE7UUFFVmpFLFFBQVEsRUFBRSxVQUZBO1FBR1YyRCxZQUFZLEVBQUVPO01BSEosQ0FBZDtJQUtIO0VBQ0osQ0F6S2M7O0VBMktmO0FBQ0o7QUFDQTtBQUNBO0VBQ0lnQyxzQkFBc0IsRUFBRSxnQ0FBQ2pDLEtBQUQsRUFBVztJQUMvQixJQUFNa0Msa0JBQWtCLEdBQUcvRixDQUFDLG1CQUFpQjZELEtBQUssQ0FBQ21DLElBQU4sQ0FBVyxXQUFYLENBQWpCLFNBQTVCO0lBRUFDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZL0YsNENBQUcsQ0FBQ0MsT0FBaEIsRUFBeUIrRixPQUF6QixDQUFpQyxVQUFDaEgsS0FBRCxFQUFXO01BQ3hDLElBQUk0RyxrQkFBa0IsQ0FBQ0ssUUFBbkIsQ0FBNEJqRyw0Q0FBRyxDQUFDQyxPQUFKLENBQVlqQixLQUFaLENBQTVCLENBQUosRUFBcUQ7UUFDakQ0RyxrQkFBa0IsQ0FBQ00sV0FBbkIsQ0FBK0JsRyw0Q0FBRyxDQUFDQyxPQUFKLENBQVlqQixLQUFaLENBQS9CO01BQ0g7SUFDSixDQUpEO0VBS0g7QUF2TGMsQ0FBbkIiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcbi8qKlxuICogU2V0IHVwIE9iamVjdCB3aXRoIEVycm9yIE1lc3NhZ2VzIG9uIFBhc3N3b3JkIFZhbGlkYXRpb24uIFBsZWFzZSB1c2UgbWVzc2FnZXMgaW4gbWVudGlvbmVkIG9yZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wdHkgZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBmaWVsZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpcm0gZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBjb25maXJtYXRpb24gZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtaXNtYXRjaCBkZWZpbmVzIGVycm9yIHRleHQgaWYgY29uZmlybSBwYXNzZm9yZCBtaXNtYXRjaGVzIHBhc3Nmb3JkIGZpZWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gaW52YWxpZCBkZWZpbmVzIGVycm9yIHRleHQgZm9yIGludmFsaWQgcGFzc3dvcmQgY2hhcmF0ZXJzIHNlcXVlbmNlXG4gKiBAcmV0dXJuIHtvYmplY3R9IG1lc3NhZ2VzIG9yIGRlZmF1bHQgdGV4dHMgaWYgbm90aGluZyBpcyBwcm92aWRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCA9IChlbXB0eSwgY29uZmlybSwgbWlzbWF0Y2gsIGludmFsaWQpID0+ICh7XG4gICAgb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0OiBlbXB0eSxcbiAgICBvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dDogY29uZmlybSxcbiAgICBvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQ6IG1pc21hdGNoLFxuICAgIG9uTm90VmFsaWRQYXNzd29yZEVycm9yVGV4dDogaW52YWxpZCxcbn0pO1xuXG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG4vKipcbiAqIEFubm91bmNlIGZvcm0gaW5wdXQgZXJyb3IgbWVzc2FnZSBieSBzY3JlZW4gcmVhZGVyXG4gKiBAcGFyYW0ge3BhcmFtcy5lbGVtZW50fSBkb20gaW5wdXQgZWxlbWVudCB3aGVyZSBjaGVja2luZyBpcyBoYXBwZW5lZFxuICogQHBhcmFtIHtwYXJhbXMucmVzdWx0fSByZXN1bHQgb2YgdmFsaWRhdGlvbiBjaGVja1xuICovXG5mdW5jdGlvbiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlKHsgZWxlbWVudCwgcmVzdWx0IH0pIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlSW5wdXRDb250YWluZXIgPSAkKGVsZW1lbnQpLnBhcmVudCgpO1xuICAgIC8vIHRoZSByZWFzb24gZm9yIHVzaW5nIHNwYW4gdGFnIGlzIG5vZC12YWxpZGF0ZSBsaWJcbiAgICAvLyB3aGljaCBkb2VzIG5vdCBhZGQgZXJyb3IgbWVzc2FnZSBjbGFzcyB3aGlsZSBpbml0aWFsaXNpbmcgZm9ybVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICQoYWN0aXZlSW5wdXRDb250YWluZXIpLmZpbmQoJ3NwYW4nKTtcblxuICAgIGlmIChlcnJvck1lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0ICRlcnJNZXNzYWdlID0gJChlcnJvck1lc3NhZ2VbMF0pO1xuXG4gICAgICAgIGlmICghJGVyck1lc3NhZ2UuYXR0cigncm9sZScpKSB7XG4gICAgICAgICAgICAkZXJyTWVzc2FnZS5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yVGV4dCBkZXNjcmliZXMgZXJyb3JNYXNzYWdlIG9uIGVtYWlsIHZhbGlkYXRpb25cbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvclRleHQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvclRleHRzT2JqZWN0XG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIHtcbiAgICAgICAgb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0LCBvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dCwgb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0LCBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQsXG4gICAgfSwgaXNPcHRpb25hbCkgPT4ge1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQgPSAkKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbkVtcHR5UGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uTm90VmFsaWRQYXNzd29yZEVycm9yVGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwgPT09ICRwYXNzd29yZC52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQocGFzc3dvcmRWYWxpZGF0aW9ucyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB7Tm9kfSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5lcnJvclNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5maWVsZHNldFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5mb3JtU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1heFByaWNlU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLm1pblByaWNlU2VsZWN0b3JcbiAgICAgKi9cbiAgICBzZXRNaW5NYXhQcmljZVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHNlbGVjdG9ycywgcHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cyA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9iamVjdC1jdXJseS1uZXdsaW5lXG4gICAgICAgIGNvbnN0IHsgb25NaW5QcmljZUVycm9yLCBvbk1heFByaWNlRXJyb3IsIG1pblByaWNlTm90RW50ZXJlZCwgbWF4UHJpY2VOb3RFbnRlcmVkLCBvbkludmFsaWRQcmljZSB9ID0gcHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvclRleHQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGNsYXNzZXMgZnJvbSBkaXJ0eSBmb3JtIGlmIHByZXZpb3VzbHkgY2hlY2tlZFxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIGNsZWFuVXBTdGF0ZVZhbGlkYXRpb246IChmaWVsZCkgPT4ge1xuICAgICAgICBjb25zdCAkZmllbGRDbGFzc0VsZW1lbnQgPSAkKChgW2RhdGEtdHlwZT1cIiR7ZmllbGQuZGF0YSgnZmllbGRUeXBlJyl9XCJdYCkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG5vZC5jbGFzc2VzKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCRmaWVsZENsYXNzRWxlbWVudC5oYXNDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pKSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkQ2xhc3NFbGVtZW50LnJlbW92ZUNsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgeyBWYWxpZGF0b3JzLCBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9