(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");

/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */

function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}
/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */


function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}

function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}

function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}

function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');

  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);

    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";

      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }

      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }

  return fieldValidations;
}
/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */


/* harmony default export */ __webpack_exports__["default"] = (function ($form, context) {
  var validationsToPerform = [];

  var _createTranslationDic = Object(_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__["createTranslationDictionary"])(context),
      requiredFieldValidationText = _createTranslationDic.field_not_blank;

  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };

    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwibmFtZXMiOlsiYnVpbGREYXRlVmFsaWRhdGlvbiIsIiRmb3JtRmllbGQiLCJ2YWxpZGF0aW9uIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsImF0dHIiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJzZWxlY3RvciIsInRyaWdnZXJlZEJ5IiwidmFsaWRhdGUiLCJjYiIsInZhbCIsImRheSIsIk51bWJlciIsImZpbmQiLCJtb250aCIsInllYXIiLCJjaG9zZW5EYXRlIiwiZXJyb3JNZXNzYWdlIiwiYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbiIsImVycm9yVGV4dCIsImZvcm1GaWVsZElkIiwicHJpbWFyeVNlbGVjdG9yIiwic2Vjb25kYXJ5U2VsZWN0b3IiLCJyZXN1bHQiLCIkIiwiZWFjaCIsImluZGV4IiwiY2hlY2tib3giLCJjaGVja2VkIiwiYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24iLCJsZW5ndGgiLCJidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbiIsImZvcm1GaWVsZFNlbGVjdG9yIiwibGFiZWwiLCJtaW4iLCJtYXgiLCJuYW1lIiwibnVtYmVyVmFsIiwiYnVpbGRWYWxpZGF0aW9uIiwiJHZhbGlkYXRlYWJsZUVsZW1lbnQiLCJkYXRhIiwiZmllbGRWYWxpZGF0aW9ucyIsInR5cGUiLCJkYXRlVmFsaWRhdGlvbiIsInB1c2giLCJyZXF1aXJlZCIsImVsZW1lbnQiLCIkaW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImdldCIsImlucHV0TmFtZSIsImVsZW1lbnRTZWxlY3RvciIsIiRmb3JtIiwiY29udGV4dCIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiZmllbGRfbm90X2JsYW5rIiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJwcm9wIiwiaXRlbSIsInJldCIsInZhbHVlIiwicmVwbGFjZW1lbnRBdHRyaWJ1dGVzIiwiaWQiLCJjbGFzcyIsInJlcGxhY2VXaXRoIiwiJG5ld0VsZW1lbnQiLCIkaGlkZGVuSW5wdXQiLCJyZW1vdmUiLCJwcmV2IiwiYXBwZW5kIiwic2hvdyIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImhpZGUiLCJhZGRPcHRpb25zIiwic3RhdGVzQXJyYXkiLCIkc2VsZWN0RWxlbWVudCIsIm9wdGlvbnMiLCJjb250YWluZXIiLCJwcmVmaXgiLCJzdGF0ZXMiLCJzdGF0ZU9iaiIsInVzZUlkRm9yU3RhdGVzIiwiaHRtbCIsImpvaW4iLCJjYWxsYmFjayIsIm9uIiwiZXZlbnQiLCJjb3VudHJ5TmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ1dGlscyIsImFwaSIsImNvdW50cnkiLCJnZXRCeU5hbWUiLCJlcnIiLCJyZXNwb25zZSIsInNob3dBbGVydE1vZGFsIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q0MsVUFBekMsRUFBcUQ7RUFDakQ7RUFDQSxJQUFJQSxVQUFVLENBQUNDLFFBQVgsSUFBdUJELFVBQVUsQ0FBQ0UsUUFBdEMsRUFBZ0Q7SUFDNUMsSUFBTUMsY0FBYywyQ0FBeUNILFVBQVUsQ0FBQ0MsUUFBcEQsYUFBb0VELFVBQVUsQ0FBQ0UsUUFBL0UsTUFBcEI7SUFDQSxJQUFNRSxhQUFhLEdBQUdMLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQixJQUFoQixDQUF0QjtJQUNBLElBQU1DLFFBQVEsR0FBR04sVUFBVSxDQUFDQyxRQUFYLENBQW9CTSxLQUFwQixDQUEwQixHQUExQixDQUFqQjtJQUNBLElBQU1DLFFBQVEsR0FBR1IsVUFBVSxDQUFDRSxRQUFYLENBQW9CSyxLQUFwQixDQUEwQixHQUExQixDQUFqQjtJQUNBLElBQU1FLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVNKLFFBQVEsQ0FBQyxDQUFELENBQWpCLEVBQXNCQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWMsQ0FBcEMsRUFBdUNBLFFBQVEsQ0FBQyxDQUFELENBQS9DLENBQWhCO0lBQ0EsSUFBTUssT0FBTyxHQUFHLElBQUlELElBQUosQ0FBU0YsUUFBUSxDQUFDLENBQUQsQ0FBakIsRUFBc0JBLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBYyxDQUFwQyxFQUF1Q0EsUUFBUSxDQUFDLENBQUQsQ0FBL0MsQ0FBaEI7SUFF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RCxFQUFNSCxHQUFOLEVBQVdYLENBQVgsRUFBaUI7SUFDM0NjLEdBQUcsQ0FBQ0gsR0FBRCxDQUFILEdBQVdKLGFBQWEsQ0FBQ1AsQ0FBRCxDQUF4QjtJQUNBLE9BQU9jLEdBQVA7RUFDSCxDQUhNLEVBR0osRUFISSxDQUFQO0FBSUgsQ0FWTSxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICogQHBhcmFtIGVycm9yVGV4dCBwcm92aWRlcyBlcnJvciB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZENoZWNrYm94VmFsaWRhdGlvbih2YWxpZGF0aW9uLCAkZm9ybUZpZWxkLCBlcnJvclRleHQpIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIHNlbGVjdG9yLCBlcnJvclRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBmb3JtRmllbGRTZWxlY3Rvcikge1xuICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFRoZSB2YWx1ZSBmb3IgJHt2YWxpZGF0aW9uLmxhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbn0gYW5kICR7dmFsaWRhdGlvbi5tYXh9LmA7XG4gICAgY29uc3QgbWluID0gTnVtYmVyKHZhbGlkYXRpb24ubWluKTtcbiAgICBjb25zdCBtYXggPSBOdW1iZXIodmFsaWRhdGlvbi5tYXgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiJHt2YWxpZGF0aW9uLm5hbWV9XCJdYCxcbiAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcblxuICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIGJ1aWxkVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24odmFsaWRhdGlvbiwgJHZhbGlkYXRlYWJsZUVsZW1lbnQsIGVycm9yTWVzc2FnZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICR2YWxpZGF0ZWFibGVFbGVtZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dEVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dEVsZW1lbnQuZ2V0KDApLnRhZ05hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSAkaW5wdXRFbGVtZW50LmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRTZWxlY3RvciA9IGAke2Zvcm1GaWVsZFNlbGVjdG9yfSAke3RhZ05hbWV9W25hbWU9XCIke2lucHV0TmFtZX1cIl1gO1xuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyb25seScpIHtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25zLnB1c2goYnVpbGROdW1iZXJSYW5nZVZhbGlkYXRpb24odmFsaWRhdGlvbiwgZm9ybUZpZWxkU2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGVsZW1lbnRTZWxlY3RvciwgZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmaWVsZFZhbGlkYXRpb25zO1xufVxuXG4vKipcbiAqIEJ1aWxkcyB0aGUgdmFsaWRhdGlvbiBtb2RlbCBmb3IgZHluYW1pYyBmb3Jtc1xuICogQHBhcmFtICRmb3JtXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgZm9yIGVycm9yIG1lc3NhZ2VzIG9uIHJlcXVpcmVkIGZpZWxkcyB2YWxpZGF0aW9uXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZm9ybSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IFtdO1xuICAgIGNvbnN0IHsgZmllbGRfbm90X2JsYW5rOiByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQgfSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcblxuICAgICRmb3JtLmZpbmQoJ1tkYXRhLXZhbGlkYXRpb25dJykuZWFjaCgoaW5kZXgsIGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdldExhYmVsID0gJGVsID0+ICRlbC5maXJzdCgpLmRhdGEoJ3ZhbGlkYXRpb24nKS5sYWJlbDtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSA9IGdldExhYmVsKCQoaW5wdXQpKSArIHJlcXVpcmVkRmllbGRWYWxpZGF0aW9uVGV4dDtcblxuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCksIHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQoJ3NlbGVjdFtkYXRhLWZpZWxkLXR5cGU9XCJDb3VudHJ5XCJdJykudmFsKCkpXG4gICAgICAgIFxuICAgICAgICBpZiAoY291bnRyeU5hbWUgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50SW5wdXQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiByZXBsYWNlZCB3aXRoIGEgc2VsZWN0LCByZXNlbGVjdCBpdFxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBhZGRPcHRpb25zKHJlc3BvbnNlLmRhdGEsICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBtYWtlU3RhdGVPcHRpb25hbCgkY3VycmVudElucHV0LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuICAgIGlmICggJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS52YWwoKSA9PT0gJ0NhbmFkYScpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKCdDYW5hZGEnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50SW5wdXQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcblxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkocmVzcG9uc2UuZGF0YS5zdGF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiByZXBsYWNlZCB3aXRoIGEgc2VsZWN0LCByZXNlbGVjdCBpdFxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBhZGRPcHRpb25zKHJlc3BvbnNlLmRhdGEsICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgJCgnI0Zvcm1GaWVsZF8xMl9pbnB1dCcpLnZhbCgnT250YXJpbycpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG1ha2VTdGF0ZU9wdGlvbmFsKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygkY3VycmVudElucHV0KVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9