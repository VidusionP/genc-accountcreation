(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Supermarket Mod
// import compareProducts from './global/compare-products';




 // Papathemes - Supermarket



var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);

  function Brand(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Brand.prototype;

  _proto.onReady = function onReady() {
    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    } // Supermarket Mod
    // compareProducts(this.context.urls);


    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Papathemes - Supermarket

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
  } // Supermarket
  ;

  _proto.destroy = function destroy() {
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;

    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset'); // Papathemes - Bulk Order

      if (_this2.bulkOrder) {
        _this2.bulkOrder.reinit();
      }

      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };

  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJvblJlYWR5Iiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJidWxrT3JkZXJGYWN0b3J5IiwiY29tcGFyZVByb2R1Y3RzIiwiYWN0aW9uQmFyRmFjdG9yeSIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwib24iLCJkZXN0cm95IiwiZmFjZXRlZFNlYXJjaCIsIm9mZiIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwicmVpbml0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiQ2F0YWxv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RUFFRyxHQUZIO0lBR0gsQ0Fkb0IsRUFjbEI7TUFDQ0MsdUJBQXVCLEVBQUU7UUFDckIvQixlQUFlLEVBQWZBLGVBRHFCO1FBRXJCRSxlQUFlLEVBQWZBLGVBRnFCO1FBR3JCRSxrQkFBa0IsRUFBbEJBLGtCQUhxQjtRQUlyQkUsa0JBQWtCLEVBQWxCQSxrQkFKcUI7UUFLckJFLGNBQWMsRUFBZEE7TUFMcUI7SUFEMUIsQ0Fka0IsQ0FBckI7RUF1QkgsQzs7O0VBcEY4QndCLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG4vLyBTdXBlcm1hcmtldCBNb2Rcbi8vIGltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4uL3BhcGF0aGVtZXMvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYWN0aW9uLWJhcic7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuaW1wb3J0IGJ1bGtPcmRlckZhY3RvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9idWxrLW9yZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0ICYmICh0aGlzLmNvbnRleHQuc2hvd19idWxrX29yZGVyX21vZGUgfHwgdGhpcy5jb250ZXh0LnVzZUJ1bGtPcmRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyID0gYnVsa09yZGVyRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2guZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdicmFuZC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGtPcmRlci5yZWluaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==