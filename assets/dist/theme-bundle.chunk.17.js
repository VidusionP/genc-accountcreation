(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./assets/js/theme/global/quick-view.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/quick-view.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // Supermarket - Instantload feature
  if (context.instantload) {
    return;
  }

  var modal = Object(_modal__WEBPACK_IMPORTED_MODULE_5__["defaultModal"])(); // supermarket add .quickview-alt to support Choose Options show quickview

  $('body').on('click', '.quickview, .quickview-alt', function (event) {
    event.preventDefault();
    var productId = $(event.currentTarget).data('productId'); // papathemes-inhealth

    var size = $(event.target).hasClass('quickview-alt') ? 'purchaseOptions' : 'large';
    modal.open({
      size: size
    }); // papathemes-beautify

    var config = {
      product: {
        videos: context.productpage_videos_count,
        reviews: context.productpage_reviews_count
      }
    }; // papathemes-inhealth

    var template = $(event.target).hasClass('quickview-alt') ? 'products/quick-view-alt' : 'products/quick-view';
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
      template: template,
      config: config
    }, function (err, response) {
      modal.updateContent(response);
      modal.$content.find('.productView').addClass('productView--quickView');
      modal.$content.find('[data-slick]').slick(); // Papathemes Also Bought MOD {{{

      var $quickView = modal.$content.find('.quickView');
      var product;

      if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
        product = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(context, {
          enableAlsoBought: true
        }));
      } else {
        product = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, context);
      }

      $('body').trigger('loaded.quickview', [product]);
      return product; // }}}
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3F1aWNrLXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOlsibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJjb250ZXh0IiwiaW5zdGFudGxvYWQiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RJZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwic2l6ZSIsInRhcmdldCIsImhhc0NsYXNzIiwib3BlbiIsImNvbmZpZyIsInByb2R1Y3QiLCJ2aWRlb3MiLCJwcm9kdWN0cGFnZV92aWRlb3NfY291bnQiLCJyZXZpZXdzIiwicHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCIsInRlbXBsYXRlIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50IiwiJGNvbnRlbnQiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsIiRxdWlja1ZpZXciLCJsZW5ndGgiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCJ0cmln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aW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gbWluTWF4VmFsaWRhdGUobWluSW5wdXRTZWxlY3RvciwgbWF4SW5wdXRTZWxlY3Rvcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGNiKSB7XG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gcGFyc2VGbG9hdCgkKG1pbklucHV0U2VsZWN0b3IpLnZhbCgpKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBwYXJzZUZsb2F0KCQobWF4SW5wdXRTZWxlY3RvcikudmFsKCkpO1xuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA+IG1pblZhbHVlIHx8IF8uaXNOYU4obWF4VmFsdWUpIHx8IF8uaXNOYU4obWluVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2IoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluTWF4VmFsaWRhdGU7XG4iLCJpbXBvcnQgbm9kIGZyb20gJ25vZC12YWxpZGF0ZSc7XG5pbXBvcnQgbWluTWF4VmFsaWRhdGUgZnJvbSAnLi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUnO1xuXG4vLyBIb29rIG91ciBTQ1NTIGZyYW1ld29yayBmb3JtIGZpZWxkIHN0YXR1cyBjbGFzc2VzIGludG8gdGhlIG5vZCB2YWxpZGF0aW9uIHN5c3RlbSBiZWZvcmUgdXNlXG5ub2QuY2xhc3Nlcy5lcnJvckNsYXNzID0gJ2Zvcm0tZmllbGQtLWVycm9yJztcbm5vZC5jbGFzc2VzLnN1Y2Nlc3NDbGFzcyA9ICdmb3JtLWZpZWxkLS1zdWNjZXNzJztcbm5vZC5jbGFzc2VzLmVycm9yTWVzc2FnZUNsYXNzID0gJ2Zvcm0taW5saW5lTWVzc2FnZSc7XG5cbi8vIFJlZ2lzdGVyIHZhbGlkYXRlIGZ1bmN0aW9uc1xubm9kLmNoZWNrRnVuY3Rpb25zWydtaW4tbWF4J10gPSBtaW5NYXhWYWxpZGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4uL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAvLyBTdXBlcm1hcmtldCAtIEluc3RhbnRsb2FkIGZlYXR1cmVcbiAgICBpZiAoY29udGV4dC5pbnN0YW50bG9hZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgIC8vIHN1cGVybWFya2V0IGFkZCAucXVpY2t2aWV3LWFsdCB0byBzdXBwb3J0IENob29zZSBPcHRpb25zIHNob3cgcXVpY2t2aWV3XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcucXVpY2t2aWV3LCAucXVpY2t2aWV3LWFsdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtaW5oZWFsdGhcbiAgICAgICAgY29uc3Qgc2l6ZSA9ICQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcygncXVpY2t2aWV3LWFsdCcpID8gJ3B1cmNoYXNlT3B0aW9ucycgOiAnbGFyZ2UnO1xuXG4gICAgICAgIG1vZGFsLm9wZW4oeyBzaXplIH0pO1xuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgcHJvZHVjdDoge1xuICAgICAgICAgICAgICAgIHZpZGVvczogY29udGV4dC5wcm9kdWN0cGFnZV92aWRlb3NfY291bnQsXG4gICAgICAgICAgICAgICAgcmV2aWV3czogY29udGV4dC5wcm9kdWN0cGFnZV9yZXZpZXdzX2NvdW50LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWluaGVhbHRoXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gJChldmVudC50YXJnZXQpLmhhc0NsYXNzKCdxdWlja3ZpZXctYWx0JykgPyAncHJvZHVjdHMvcXVpY2stdmlldy1hbHQnIDogJ3Byb2R1Y3RzL3F1aWNrLXZpZXcnO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCB7IHRlbXBsYXRlLCBjb25maWcgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICBtb2RhbC4kY29udGVudC5maW5kKCcucHJvZHVjdFZpZXcnKS5hZGRDbGFzcygncHJvZHVjdFZpZXctLXF1aWNrVmlldycpO1xuXG4gICAgICAgICAgICBtb2RhbC4kY29udGVudC5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xuXG4gICAgICAgICAgICAvLyBQYXBhdGhlbWVzIEFsc28gQm91Z2h0IE1PRCB7e3tcbiAgICAgICAgICAgIGNvbnN0ICRxdWlja1ZpZXcgPSBtb2RhbC4kY29udGVudC5maW5kKCcucXVpY2tWaWV3Jyk7XG4gICAgICAgICAgICBsZXQgcHJvZHVjdDtcbiAgICAgICAgICAgIGlmICgkKCdbZGF0YS1hbHNvLWJvdWdodF0gLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbScsICRxdWlja1ZpZXcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRxdWlja1ZpZXcsIF8uZXh0ZW5kKGNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogdHJ1ZSB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBuZXcgUHJvZHVjdERldGFpbHMoJHF1aWNrVmlldywgY29udGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdsb2FkZWQucXVpY2t2aWV3JywgW3Byb2R1Y3RdKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgICAgICAvLyB9fX1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiJdLCJzb3VyY2VSb290IjoiIn0=