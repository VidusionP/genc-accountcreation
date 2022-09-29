(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./assets/js/papathemes/dropdown-swatches.js":
/*!***************************************************!*\
  !*** ./assets/js/papathemes/dropdown-swatches.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! selectize */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var selectize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selectize-css */ "./node_modules/selectize/dist/css/selectize.css");


/* harmony default export */ __webpack_exports__["default"] = (function (product, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$swatchFieldSelec = _ref.swatchFieldSelector,
      swatchFieldSelector = _ref$swatchFieldSelec === void 0 ? 'form[data-cart-item-add] [data-product-option-change] [data-product-attribute="swatch"]' : _ref$swatchFieldSelec,
      _ref$getSwatchLabelFr = _ref.getSwatchLabelFromInput,
      getSwatchLabelFromInput = _ref$getSwatchLabelFr === void 0 ? function (inputEl) {
    return $(inputEl).next().children().first().attr('title');
  } : _ref$getSwatchLabelFr,
      _ref$getSwatchImageHT = _ref.getSwatchImageHTMLFromInput,
      getSwatchImageHTMLFromInput = _ref$getSwatchImageHT === void 0 ? function (inputEl) {
    return $(inputEl).next().html();
  } : _ref$getSwatchImageHT,
      _ref$isSwatchHidden = _ref.isSwatchHidden,
      isSwatchHidden = _ref$isSwatchHidden === void 0 ? function (inputEl) {
    return $(inputEl).next().is(':hidden');
  } : _ref$isSwatchHidden,
      _ref$isSwatchUnavaila = _ref.isSwatchUnavailable,
      isSwatchUnavailable = _ref$isSwatchUnavaila === void 0 ? function (inputEl) {
    return $(inputEl).next().hasClass('unavailable');
  } : _ref$isSwatchUnavaila,
      _ref$renderSelect = _ref.renderSelect,
      renderSelect = _ref$renderSelect === void 0 ? function ($formField, $select) {
    return $formField.find('.form-label').first().after($select);
  } : _ref$renderSelect,
      _ref$hideOriginalSwat = _ref.hideOriginalSwatches,
      hideOriginalSwatches = _ref$hideOriginalSwat === void 0 ? false : _ref$hideOriginalSwat,
      _ref$hideOriginalSwat2 = _ref.hideOriginalSwatchesFunc,
      hideOriginalSwatchesFunc = _ref$hideOriginalSwat2 === void 0 ? function ($formField) {
    return $formField.children('.form-option-swatch, .form-radio').css({
      position: 'absolute',
      visibility: 'hidden',
      height: 0,
      width: 0,
      overflow: 'hidden',
      margin: 0
    });
  } : _ref$hideOriginalSwat2;

  product.$scope.find(swatchFieldSelector).not('._dropdownSwatchesLoaded').addClass('_dropdownSwatchesLoaded').get().map(function (el) {
    return $(el);
  }).forEach(function ($formField) {
    var $inputs = $formField.find('input');
    var selectId = "chiara__dropdownSwatches-" + String($inputs.first().attr('name')).replace(/attribute\[(.*)\]/, 'attribute_$1'); // Hidden select for initializing Selectize

    var $select = $("<select class=\"chiara__dropdownSwatches\" id=\"" + selectId + "\"><option value=\"\">" + product.context.txtSelectOne + "</option></select>").hide().on('change', function (event) {
      // Stop the form's change event
      event.preventDefault();
      event.stopPropagation();
    }); // Populate the hidden select options

    $inputs.each(function (i, el) {
      var label = getSwatchLabelFromInput(el);
      $select.append("<option value=\"" + $(el).attr('value') + "\" title=\"" + label + "\" " + (el.checked ? 'selected' : '') + ">" + label + "</option>");
    }); // Insert the hidden select to the form field

    renderSelect($formField, $select); // Hide the original swatches if specified

    if (hideOriginalSwatches) {
      hideOriginalSwatchesFunc($formField);
    } // Add label for accessibility compliance


    $select.after("<label class=\"is-srOnly\" for=\"" + selectId + "-selectized\">" + product.context.txtSelectOne + "</label>"); // Initialize 'Selectize' select box

    $select.selectize({
      copyClassesToDropdown: true,
      render: {
        item: function item(_item, escape) {
          var $input = $inputs.filter("[value=\"" + _item.value + "\"]");
          return "\n                            <div class=\"_item " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(_item.text) + "</span>\n                            </div>\n                        ";
        },
        option: function option(item, escape) {
          var $input = $inputs.filter("[value=\"" + item.value + "\"]");
          return "\n                            <div class=\"_option " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(item.text) + "</span>\n                            </div>\n                        ";
        }
      }
    });
    var selectize = $select[0].selectize; // Select the original swatch when the dropdown swatch selected

    selectize.on('change', function () {
      // console.log('selectize change');
      $inputs.filter("[value=\"" + $select.val() + "\"]").trigger('click');
    }); // Select the dropdown swatch when the original swatch selected

    product.$scope.find('[data-product-option-change]').on('change', function (event) {
      // console.log('data-product-option-change change');
      var value = $inputs.filter(':checked').val();
      selectize.setValue(value, true);
    }); // Update 'Selectize' options when the availablity of the original swatches changed

    product.$scope.first().on('updateProductAttributes', function () {
      // console.log('updateProductAttributes');
      var value = $inputs.filter(':checked').val();
      selectize.clearCache();
      selectize.clear(true);
      selectize.setValue(value, true);
      selectize.refreshOptions(false);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9kcm9wZG93bi1zd2F0Y2hlcy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Iiwic3dhdGNoRmllbGRTZWxlY3RvciIsImdldFN3YXRjaExhYmVsRnJvbUlucHV0IiwiaW5wdXRFbCIsIiQiLCJuZXh0IiwiY2hpbGRyZW4iLCJmaXJzdCIsImF0dHIiLCJnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQiLCJodG1sIiwiaXNTd2F0Y2hIaWRkZW4iLCJpcyIsImlzU3dhdGNoVW5hdmFpbGFibGUiLCJoYXNDbGFzcyIsInJlbmRlclNlbGVjdCIsIiRmb3JtRmllbGQiLCIkc2VsZWN0IiwiZmluZCIsImFmdGVyIiwiaGlkZU9yaWdpbmFsU3dhdGNoZXMiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMiLCJjc3MiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWFyZ2luIiwiJHNjb3BlIiwibm90IiwiYWRkQ2xhc3MiLCJnZXQiLCJtYXAiLCJlbCIsImZvckVhY2giLCIkaW5wdXRzIiwic2VsZWN0SWQiLCJTdHJpbmciLCJyZXBsYWNlIiwiY29udGV4dCIsInR4dFNlbGVjdE9uZSIsImhpZGUiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlYWNoIiwiaSIsImxhYmVsIiwiYXBwZW5kIiwiY2hlY2tlZCIsInNlbGVjdGl6ZSIsImNvcHlDbGFzc2VzVG9Ecm9wZG93biIsInJlbmRlciIsIml0ZW0iLCJlc2NhcGUiLCIkaW5wdXQiLCJmaWx0ZXIiLCJ2YWx1ZSIsInRleHQiLCJvcHRpb24iLCJ2YWwiLCJ0cmlnZ2VyIiwic2V0VmFsdWUiLCJjbGVhckNhY2hlIiwiY2xlYXIiLCJyZWZyZXNoT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHlFQUFT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LENBQUNhLFVBQVY7TUFDQWIsU0FBUyxDQUFDYyxLQUFWLENBQWdCLElBQWhCO01BQ0FkLFNBQVMsQ0FBQ1ksUUFBVixDQUFtQkwsS0FBbkIsRUFBMEIsSUFBMUI7TUFDQVAsU0FBUyxDQUFDZSxjQUFWLENBQXlCLEtBQXpCO0lBQ0gsQ0FQRDtFQVFILENBbkZMO0FBb0ZILEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzZWxlY3RpemUnO1xuaW1wb3J0ICdzZWxlY3RpemUtY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvZHVjdCwge1xuICAgIHN3YXRjaEZpZWxkU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdIFtkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nLFxuICAgIGdldFN3YXRjaExhYmVsRnJvbUlucHV0ID0gaW5wdXRFbCA9PiAkKGlucHV0RWwpLm5leHQoKS5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cigndGl0bGUnKSxcbiAgICBnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQgPSBpbnB1dEVsID0+ICQoaW5wdXRFbCkubmV4dCgpLmh0bWwoKSxcbiAgICBpc1N3YXRjaEhpZGRlbiA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuaXMoJzpoaWRkZW4nKSxcbiAgICBpc1N3YXRjaFVuYXZhaWxhYmxlID0gaW5wdXRFbCA9PiAkKGlucHV0RWwpLm5leHQoKS5oYXNDbGFzcygndW5hdmFpbGFibGUnKSxcbiAgICByZW5kZXJTZWxlY3QgPSAoJGZvcm1GaWVsZCwgJHNlbGVjdCkgPT4gJGZvcm1GaWVsZC5maW5kKCcuZm9ybS1sYWJlbCcpLmZpcnN0KCkuYWZ0ZXIoJHNlbGVjdCksXG4gICAgaGlkZU9yaWdpbmFsU3dhdGNoZXMgPSBmYWxzZSxcbiAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMgPSAkZm9ybUZpZWxkID0+ICRmb3JtRmllbGQuY2hpbGRyZW4oJy5mb3JtLW9wdGlvbi1zd2F0Y2gsIC5mb3JtLXJhZGlvJykuY3NzKHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICB9KSxcbn0gPSB7fSkge1xuICAgIHByb2R1Y3QuJHNjb3BlLmZpbmQoc3dhdGNoRmllbGRTZWxlY3Rvcikubm90KCcuX2Ryb3Bkb3duU3dhdGNoZXNMb2FkZWQnKVxuICAgICAgICAuYWRkQ2xhc3MoJ19kcm9wZG93blN3YXRjaGVzTG9hZGVkJylcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC5tYXAoZWwgPT4gJChlbCkpXG4gICAgICAgIC5mb3JFYWNoKCRmb3JtRmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0cyA9ICRmb3JtRmllbGQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdElkID0gYGNoaWFyYV9fZHJvcGRvd25Td2F0Y2hlcy0ke1N0cmluZygkaW5wdXRzLmZpcnN0KCkuYXR0cignbmFtZScpKS5yZXBsYWNlKC9hdHRyaWJ1dGVcXFsoLiopXFxdLywgJ2F0dHJpYnV0ZV8kMScpfWA7XG5cbiAgICAgICAgICAgIC8vIEhpZGRlbiBzZWxlY3QgZm9yIGluaXRpYWxpemluZyBTZWxlY3RpemVcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGA8c2VsZWN0IGNsYXNzPVwiY2hpYXJhX19kcm9wZG93blN3YXRjaGVzXCIgaWQ9XCIke3NlbGVjdElkfVwiPjxvcHRpb24gdmFsdWU9XCJcIj4ke3Byb2R1Y3QuY29udGV4dC50eHRTZWxlY3RPbmV9PC9vcHRpb24+PC9zZWxlY3Q+YClcbiAgICAgICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIGZvcm0ncyBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHRoZSBoaWRkZW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgICAgICRpbnB1dHMuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGdldFN3YXRjaExhYmVsRnJvbUlucHV0KGVsKTtcbiAgICAgICAgICAgICAgICAkc2VsZWN0LmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7JChlbCkuYXR0cigndmFsdWUnKX1cIiB0aXRsZT1cIiR7bGFiZWx9XCIgJHtlbC5jaGVja2VkID8gJ3NlbGVjdGVkJyA6ICcnfT4ke2xhYmVsfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEluc2VydCB0aGUgaGlkZGVuIHNlbGVjdCB0byB0aGUgZm9ybSBmaWVsZFxuICAgICAgICAgICAgcmVuZGVyU2VsZWN0KCRmb3JtRmllbGQsICRzZWxlY3QpO1xuXG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBvcmlnaW5hbCBzd2F0Y2hlcyBpZiBzcGVjaWZpZWRcbiAgICAgICAgICAgIGlmIChoaWRlT3JpZ2luYWxTd2F0Y2hlcykge1xuICAgICAgICAgICAgICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzRnVuYygkZm9ybUZpZWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGxhYmVsIGZvciBhY2Nlc3NpYmlsaXR5IGNvbXBsaWFuY2VcbiAgICAgICAgICAgICRzZWxlY3QuYWZ0ZXIoYDxsYWJlbCBjbGFzcz1cImlzLXNyT25seVwiIGZvcj1cIiR7c2VsZWN0SWR9LXNlbGVjdGl6ZWRcIj4ke3Byb2R1Y3QuY29udGV4dC50eHRTZWxlY3RPbmV9PC9sYWJlbD5gKTtcblxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSAnU2VsZWN0aXplJyBzZWxlY3QgYm94XG4gICAgICAgICAgICAkc2VsZWN0LnNlbGVjdGl6ZSh7XG4gICAgICAgICAgICAgICAgY29weUNsYXNzZXNUb0Ryb3Bkb3duOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiAoaXRlbSwgZXNjYXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRzLmZpbHRlcihgW3ZhbHVlPVwiJHtpdGVtLnZhbHVlfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2l0ZW0gJHtpc1N3YXRjaFVuYXZhaWxhYmxlKCRpbnB1dCkgPyAndW5hdmFpbGFibGUnIDogJyd9XCIgJHtpc1N3YXRjaEhpZGRlbigkaW5wdXQpID8gJ3N0eWxlPVwiZGlzcGxheTpub25lXCInIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIl9pbWdcIj4ke2dldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCgkaW5wdXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfdGV4dFwiPiR7ZXNjYXBlKGl0ZW0udGV4dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uOiAoaXRlbSwgZXNjYXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkaW5wdXRzLmZpbHRlcihgW3ZhbHVlPVwiJHtpdGVtLnZhbHVlfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX29wdGlvbiAke2lzU3dhdGNoVW5hdmFpbGFibGUoJGlucHV0KSA/ICd1bmF2YWlsYWJsZScgOiAnJ31cIiAke2lzU3dhdGNoSGlkZGVuKCRpbnB1dCkgPyAnc3R5bGU9XCJkaXNwbGF5Om5vbmVcIicgOiAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiX2ltZ1wiPiR7Z2V0U3dhdGNoSW1hZ2VIVE1MRnJvbUlucHV0KCRpbnB1dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIl90ZXh0XCI+JHtlc2NhcGUoaXRlbS50ZXh0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aXplID0gJHNlbGVjdFswXS5zZWxlY3RpemU7XG5cbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgb3JpZ2luYWwgc3dhdGNoIHdoZW4gdGhlIGRyb3Bkb3duIHN3YXRjaCBzZWxlY3RlZFxuICAgICAgICAgICAgc2VsZWN0aXplLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGl6ZSBjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXRzLmZpbHRlcihgW3ZhbHVlPVwiJHskc2VsZWN0LnZhbCgpfVwiXWApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU2VsZWN0IHRoZSBkcm9wZG93biBzd2F0Y2ggd2hlbiB0aGUgb3JpZ2luYWwgc3dhdGNoIHNlbGVjdGVkXG4gICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5maW5kKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2UgY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkaW5wdXRzLmZpbHRlcignOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSAnU2VsZWN0aXplJyBvcHRpb25zIHdoZW4gdGhlIGF2YWlsYWJsaXR5IG9mIHRoZSBvcmlnaW5hbCBzd2F0Y2hlcyBjaGFuZ2VkXG4gICAgICAgICAgICBwcm9kdWN0LiRzY29wZS5maXJzdCgpLm9uKCd1cGRhdGVQcm9kdWN0QXR0cmlidXRlcycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICRpbnB1dHMuZmlsdGVyKCc6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5jbGVhckNhY2hlKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLmNsZWFyKHRydWUpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5zZXRWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLnJlZnJlc2hPcHRpb25zKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=