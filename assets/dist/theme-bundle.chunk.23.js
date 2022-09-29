(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./assets/js/papathemes/search-in-category.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/search-in-category.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInCategory; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");





var SearchInCategory = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * Should be constructed after FacetedSearch object constructed
   * so that FacetedSearch `statechange` event callback can be executed.
   *
   * `options` includes:
   * - (object) `context`: from PageManager.context.
   * - (object) `facetedSearch`
   * - (function) `searchCallback`: callback to re-render search results.
   *
   * @param {object} options
   */
  function SearchInCategory(options) {
    // console.log('search-in-category constructor');
    this.doSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.doSearch.bind(this), 500);
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.options = options;
    this.$body = $('body');
    this.$input = $('[data-search-in-category]');
    this.$form = this.$input.closest('form');
    this.$clear = this.$form.find('[data-clear]').hide();
    this.originalPathname = window.location.pathname;

    if (options && options.facetedSearch) {
      this.options.facetedSearch.updateViewCallback = this.updateViewFacetedSearch.bind(this);
    }

    this.bindEvents();
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), true);

    if (url.query.q) {
      this.$input.val(url.query.q);
      this.$clear.show();
      $(window).trigger('statechange');
    }
  }

  var _proto = SearchInCategory.prototype;

  _proto.destroy = function destroy() {
    // console.log('search-in-category destroy');
    this.unbindEvents();
  };

  _proto.bindEvents = function bindEvents() {
    this.$input.on('input', this.onInput);
    this.$form.on('submit', this.onFormSubmit);
    this.$clear.on('click', this.onClear);

    if ($('#facetedSearch').length === 0) {
      $(window).on('statechange', this.onStateChange);
    }
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$input.off('input', this.onInput);
    this.$form.off('submit', this.onFormSubmit);
    this.$clear.off('click', this.onClear);
    $(window).off('statechange', this.onStateChange);
  };

  _proto.onFormSubmit = function onFormSubmit() {
    return false;
  };

  _proto.onClear = function onClear(event) {
    event.preventDefault();
    this.$clear.hide();
    this.$input.val('').trigger('input');
  };

  _proto.onInput = function onInput(event) {
    this.doSearch($(event.target).val());
  };

  _proto.onStateChange = function onStateChange() {
    var _this = this;

    // console.log('search-in-category statechange');
    var searchUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(searchUrl, true);
    var searchQuery = url.query.search_query || url.query.search_query_adv || url.query.q;
    var requestOptions = {
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      config: {
        category: {
          shop_by_price: true
        }
      }
    };

    if (searchQuery) {
      url.query.search_query_adv = searchQuery;
      delete url.query.search_query;
      delete url.query.q;
      delete url.query.category;

      if (this.options.context.categoryId) {
        url.query['category[]'] = this.options.context.categoryId;
      } else {
        delete url.query['category[]'];
      }

      if (this.options.context.categorypage_search_subs) {
        url.query.searchsubs = 'ON';
      }

      searchUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    }

    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["api"].getPage(searchUrl, requestOptions, function (err, content) {
      _this.$form.removeClass('loading');

      if (err) {
        throw new Error(err);
      }

      _this.$body.trigger('beforeupdate.searchincategory');

      if (content && _this.options.searchCallback) {
        _this.options.searchCallback(content);
      }

      _this.$body.trigger('afterupdate.searchincategory');
    });
  };

  _proto.doSearch = function doSearch(searchQuery) {
    if (searchQuery.length === 0) {
      this.$clear.hide();
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'category', 'page']);
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(url);
    } else if (searchQuery.length >= 3) {
      this.$clear.show();

      var _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'page']);

      _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceParams(_url, {
        q: searchQuery
      });
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(_url);
    }
  };

  _proto.updateViewFacetedSearch = function updateViewFacetedSearch() {
    var _this2 = this;

    var facetedSearch = this.options.facetedSearch;
    var requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var requestOptions = facetedSearch.requestOptions;
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(requestUrl, true);
    var searchQuery = url.query.q || url.query.search_query; // Check if the URL is 'Clear All', then clear the search query as well

    var stdParams = ['_bc_fsnf', 'search_query', 'q', 'sort', 'limit', 'mode', 'page'];
    var filterParams = Object.keys(url.query).filter(function (key) {
      return stdParams.indexOf(key) === -1;
    });
    var isClearAll = window.location.pathname === '/search.php' && filterParams.length === 0;

    if (isClearAll) {
      this.$input.val('');
      this.$clear.hide();
      requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(requestUrl, [].concat(filterParams, ['search_query', 'q', '_bc_fsnf'])).replace('/search.php', this.originalPathname);
      window.history.replaceState({}, document.title, requestUrl);
    } else if (searchQuery) {
      // Show nice URL on the location bar
      if (window.location.pathname === '/search.php') {
        url.query.q = searchQuery;
        delete url.query.search_query;

        if (Number(url.query.category) === this.options.context.categoryId) {
          delete url.query.category;
        }

        window.history.replaceState({}, document.title, this.originalPathname + "?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query));
      }

      delete url.query.q;
      url.query.search_query = searchQuery;

      if (!url.query.category) {
        url.query.category = this.options.context.categoryId;
      }

      requestUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    } else {
      this.$input.val('');
    }

    $(facetedSearch.options.blockerSelector).show();
    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["api"].getPage(requestUrl, requestOptions, function (err, content) {
      // Supermarket MOD
      $(facetedSearch.options.blockerSelector).hide();

      _this2.$form.removeClass('loading');

      if (err) {
        throw new Error(err);
      }

      _this2.$body.trigger('beforeupdate.searchincategory'); // Refresh view with new content


      facetedSearch.refreshView(content);

      _this2.$body.trigger('afterupdate.searchincategory');
    });
  };

  return SearchInCategory;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
/* harmony import */ var _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../papathemes/search-in-category */ "./assets/js/papathemes/search-in-category.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Supermarket Mod
// import compareProducts from './global/compare-products';




 // Papathemes - Supermarket
// import { autoExpandCategoryMenu } from '../papathemes/theme-utils'; // Supermarket





var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);

  function Category(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Category.prototype;

  _proto.onReady = function onReady() {
    // console.log('category onReady');
    // autoExpandCategoryMenu(this.context); // Supermarket
    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    } // Supermarket Mod
    // compareProducts(this.context.urls);


    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit); // papathemes-beautify

      Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();

      if (this.context.categorypage_search === 'show') {
        $('body').on('afterupdate.searchincategory', function () {
          return Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
        });
      }
    } // Papathemes - Supermarket


    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Supermarket

    if (this.context.categorypage_search === 'show') {
      this.initSearchInCategory();
    } // papathemes-beautify


    $('#categories-navList .navList-action--checkbox').on('click', function (event) {
      return $(event.target).toggleClass('is-selected');
    });
  } // Supermarket
  ;

  _proto.destroy = function destroy() {
    if (this.searchInCategory) {
      this.searchInCategory.destroy();
    }

    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    }
  } // Supermarket
  ;

  _proto.initSearchInCategory = function initSearchInCategory() {
    var _this2 = this;

    this.searchInCategory = new _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__["default"]({
      context: this.context,
      facetedSearch: this.facetedSearch,
      searchCallback: function searchCallback(content) {
        $('#product-listing-container').html(content.productListing);

        if (_this2.bulkOrder) {
          _this2.bulkOrder.reinit();
        }

        Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])();
        $('body').triggerHandler('compareReset');
        $('html, body').animate({
          scrollTop: 0
        }, 100);
      }
    });
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this3 = this;

    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar); // Papathemes - Bulk Order

      if (_this3.bulkOrder) {
        _this3.bulkOrder.reinit();
      }

      $('body').triggerHandler('compareReset');
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

  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zZWFyY2gtaW4tY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlNlYXJjaEluQ2F0ZWdvcnkiLCJvcHRpb25zIiwiZG9TZWFyY2giLCJiaW5kIiwib25JbnB1dCIsIm9uRm9ybVN1Ym1pdCIsIm9uQ2xlYXIiLCJvblN0YXRlQ2hhbmdlIiwiJGJvZHkiLCIkIiwiJGlucHV0IiwiJGZvcm0iLCJjbG9zZXN0IiwiJGNsZWFyIiwiZmluZCIsImhpZGUiLCJvcmlnaW5hbFBhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImZhY2V0ZWRTZWFyY2giLCJ1cGRhdGVWaWV3Q2FsbGJhY2siLCJ1cGRhdGVWaWV3RmFjZXRlZFNlYXJjaCIsImJpbmRFdmVudHMiLCJ1cmwiLCJVcmwiLCJwYXJzZSIsInVybFV0aWxzIiwiZ2V0VXJsIiwicXVlcnkiLCJxIiwidmFsIiwic2hvdyIsInRyaWdnZXIiLCJkZXN0cm95IiwidW5iaW5kRXZlbnRzIiwib24iLCJsZW5ndGgiLCJvZmYiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic2VhcmNoVXJsIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hfcXVlcnkiLCJzZWFyY2hfcXVlcnlfYWR2IiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsImNvbnRleHQiLCJjYXRlZ29yeUlkIiwiY2F0ZWdvcnlwYWdlX3NlYXJjaF9zdWJzIiwic2VhcmNoc3VicyIsImJ1aWxkUXVlcnlTdHJpbmciLCJzaG93TW9yZSIsImFkZENsYXNzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJyZW1vdmVDbGFzcyIsIkVycm9yIiwic2VhcmNoQ2FsbGJhY2siLCJyZW1vdmVQYXJhbXMiLCJnb1RvVXJsIiwicmVwbGFjZVBhcmFtcyIsInJlcXVlc3RVcmwiLCJzdGRQYXJhbXMiLCJmaWx0ZXJQYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwiaW5kZXhPZiIsImlzQ2xlYXJBbGwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJOdW1iZXIiLCJibG9ja2VyU2VsZWN0b3IiLCJyZWZyZXNoVmlldyIsIkNhdGVnb3J5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJvblJlYWR5Iiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJidWxrT3JkZXJGYWN0b3J5IiwiY29tcGFyZVByb2R1Y3RzIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImhvb2tzIiwiaW5pdFNob3BCeVByaWNlU2xpZGVyIiwiY2F0ZWdvcnlwYWdlX3NlYXJjaCIsImFjdGlvbkJhckZhY3RvcnkiLCJpbml0U2VhcmNoSW5DYXRlZ29yeSIsInRvZ2dsZUNsYXNzIiwic2VhcmNoSW5DYXRlZ29yeSIsImh0bWwiLCJyZWluaXQiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInByb2R1Y3RzIiwibGltaXQiLCJGYWNldGVkU2VhcmNoIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7SUFFcUJBLGdCO0VBQ2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksMEJBQVlDLE9BQVosRUFBcUI7SUFDakI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCLHVEQUFTLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFULEVBQW1DLEdBQW5DLENBQWhCO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFmO0lBQ0EsS0FBS0UsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtJQUNBLEtBQUtHLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFILElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtJQUNBLEtBQUtJLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkosSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7SUFDQSxLQUFLRixPQUFMLEdBQWVBLE9BQWY7SUFDQSxLQUFLTyxLQUFMLEdBQWFDLENBQUMsQ0FBQyxNQUFELENBQWQ7SUFDQSxLQUFLQyxNQUFMLEdBQWNELENBQUMsQ0FBQywyQkFBRCxDQUFmO0lBQ0EsS0FBS0UsS0FBTCxHQUFhLEtBQUtELE1BQUwsQ0FBWUUsT0FBWixDQUFvQixNQUFwQixDQUFiO0lBQ0EsS0FBS0MsTUFBTCxHQUFjLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixjQUFoQixFQUFnQ0MsSUFBaEMsRUFBZDtJQUNBLEtBQUtDLGdCQUFMLEdBQXdCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQXhDOztJQUVBLElBQUlsQixPQUFPLElB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LGNBQXpCO01BRUFsRyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCbUcsT0FBaEIsQ0FBd0I7UUFDcEJDLFNBQVMsRUFBRTtNQURTLENBQXhCLEVBRUcsR0FGSDtJQUdILENBZG9CLEVBY2xCO01BQ0NrQix1QkFBdUIsRUFBRTtRQUNyQmpCLGVBQWUsRUFBZkEsZUFEcUI7UUFFckJFLGVBQWUsRUFBZkEsZUFGcUI7UUFHckJFLGtCQUFrQixFQUFsQkEsa0JBSHFCO1FBSXJCRSxrQkFBa0IsRUFBbEJBLGtCQUpxQjtRQUtyQkUsY0FBYyxFQUFkQTtNQUxxQjtJQUQxQixDQWRrQixDQUFyQjtFQXVCSCxDOzs7RUFqSWlDVSxnRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEluQ2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBTaG91bGQgYmUgY29uc3RydWN0ZWQgYWZ0ZXIgRmFjZXRlZFNlYXJjaCBvYmplY3QgY29uc3RydWN0ZWRcbiAgICAgKiBzbyB0aGF0IEZhY2V0ZWRTZWFyY2ggYHN0YXRlY2hhbmdlYCBldmVudCBjYWxsYmFjayBjYW4gYmUgZXhlY3V0ZWQuXG4gICAgICpcbiAgICAgKiBgb3B0aW9uc2AgaW5jbHVkZXM6XG4gICAgICogLSAob2JqZWN0KSBgY29udGV4dGA6IGZyb20gUGFnZU1hbmFnZXIuY29udGV4dC5cbiAgICAgKiAtIChvYmplY3QpIGBmYWNldGVkU2VhcmNoYFxuICAgICAqIC0gKGZ1bmN0aW9uKSBgc2VhcmNoQ2FsbGJhY2tgOiBjYWxsYmFjayB0byByZS1yZW5kZXIgc2VhcmNoIHJlc3VsdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlYXJjaC1pbi1jYXRlZ29yeSBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB0aGlzLmRvU2VhcmNoID0gZGVib3VuY2UodGhpcy5kb1NlYXJjaC5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkZvcm1TdWJtaXQgPSB0aGlzLm9uRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXIgPSB0aGlzLm9uQ2xlYXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJGlucHV0ID0gJCgnW2RhdGEtc2VhcmNoLWluLWNhdGVnb3J5XScpO1xuICAgICAgICB0aGlzLiRmb3JtID0gdGhpcy4kaW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICB0aGlzLiRjbGVhciA9IHRoaXMuJGZvcm0uZmluZCgnW2RhdGEtY2xlYXJdJykuaGlkZSgpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaC51cGRhdGVWaWV3Q2FsbGJhY2sgPSB0aGlzLnVwZGF0ZVZpZXdGYWNldGVkU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuICAgICAgICBpZiAodXJsLnF1ZXJ5LnEpIHtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0LnZhbCh1cmwucXVlcnkucSk7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5zaG93KCk7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWFyY2gtaW4tY2F0ZWdvcnkgZGVzdHJveScpO1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGlucHV0Lm9uKCdpbnB1dCcsIHRoaXMub25JbnB1dCk7XG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0KTtcbiAgICAgICAgdGhpcy4kY2xlYXIub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICQod2luZG93KS5vbignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRpbnB1dC5vZmYoJ2lucHV0JywgdGhpcy5vbklucHV0KTtcbiAgICAgICAgdGhpcy4kZm9ybS5vZmYoJ3N1Ym1pdCcsIHRoaXMub25Gb3JtU3VibWl0KTtcbiAgICAgICAgdGhpcy4kY2xlYXIub2ZmKCdjbGljaycsIHRoaXMub25DbGVhcik7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBvbkZvcm1TdWJtaXQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNsZWFyKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuJGNsZWFyLmhpZGUoKTtcbiAgICAgICAgdGhpcy4kaW5wdXQudmFsKCcnKS50cmlnZ2VyKCdpbnB1dCcpO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kb1NlYXJjaCgkKGV2ZW50LnRhcmdldCkudmFsKCkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWFyY2gtaW4tY2F0ZWdvcnkgc3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgbGV0IHNlYXJjaFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uoc2VhcmNoVXJsLCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1cmwucXVlcnkuc2VhcmNoX3F1ZXJ5IHx8IHVybC5xdWVyeS5zZWFyY2hfcXVlcnlfYWR2IHx8IHVybC5xdWVyeS5xO1xuICAgICAgICBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgICAgIHVybC5xdWVyeS5zZWFyY2hfcXVlcnlfYWR2ID0gc2VhcmNoUXVlcnk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnkuc2VhcmNoX3F1ZXJ5O1xuICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5xO1xuICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5jYXRlZ29yeTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZXh0LmNhdGVnb3J5SWQpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlbJ2NhdGVnb3J5W10nXSA9IHRoaXMub3B0aW9ucy5jb250ZXh0LmNhdGVnb3J5SWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ2NhdGVnb3J5W10nXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250ZXh0LmNhdGVnb3J5cGFnZV9zZWFyY2hfc3Vicykge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeS5zZWFyY2hzdWJzID0gJ09OJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VhcmNoVXJsID0gYC9zZWFyY2gucGhwPyR7dXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpfWA7XG5cbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnc3VwZXJtYXJrZXQvc2VhcmNoLWluLWNhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzdXBlcm1hcmtldC9zZWFyY2gtaW4tY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGZvcm0uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmVyZXF1ZXN0LnNlYXJjaGluY2F0ZWdvcnknKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZShzZWFyY2hVcmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRmb3JtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmV1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiB0aGlzLm9wdGlvbnMuc2VhcmNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VhcmNoQ2FsbGJhY2soY29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYWZ0ZXJ1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb1NlYXJjaChzZWFyY2hRdWVyeSkge1xuICAgICAgICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxVdGlscy5yZW1vdmVQYXJhbXModXJsVXRpbHMuZ2V0VXJsKCksIFsncScsICdzZWFyY2hfcXVlcnknLCAnc2VhcmNoX3F1ZXJ5X2FkdicsICdjYXRlZ29yeScsICdwYWdlJ10pO1xuICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5zaG93KCk7XG4gICAgICAgICAgICBsZXQgdXJsID0gdXJsVXRpbHMucmVtb3ZlUGFyYW1zKHVybFV0aWxzLmdldFVybCgpLCBbJ3EnLCAnc2VhcmNoX3F1ZXJ5JywgJ3NlYXJjaF9xdWVyeV9hZHYnLCAncGFnZSddKTtcbiAgICAgICAgICAgIHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXModXJsLCB7IHE6IHNlYXJjaFF1ZXJ5IH0pO1xuICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlVmlld0ZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ZWRTZWFyY2ggPSB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaDtcbiAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gZmFjZXRlZFNlYXJjaC5yZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHJlcXVlc3RVcmwsIHRydWUpO1xuICAgICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHVybC5xdWVyeS5xIHx8IHVybC5xdWVyeS5zZWFyY2hfcXVlcnk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIFVSTCBpcyAnQ2xlYXIgQWxsJywgdGhlbiBjbGVhciB0aGUgc2VhcmNoIHF1ZXJ5IGFzIHdlbGxcbiAgICAgICAgY29uc3Qgc3RkUGFyYW1zID0gWydfYmNfZnNuZicsICdzZWFyY2hfcXVlcnknLCAncScsICdzb3J0JywgJ2xpbWl0JywgJ21vZGUnLCAncGFnZSddO1xuICAgICAgICBjb25zdCBmaWx0ZXJQYXJhbXMgPSBPYmplY3Qua2V5cyh1cmwucXVlcnkpLmZpbHRlcihrZXkgPT4gc3RkUGFyYW1zLmluZGV4T2Yoa2V5KSA9PT0gLTEpO1xuICAgICAgICBjb25zdCBpc0NsZWFyQWxsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NlYXJjaC5waHAnICYmIGZpbHRlclBhcmFtcy5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKGlzQ2xlYXJBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gdXJsVXRpbHMucmVtb3ZlUGFyYW1zKHJlcXVlc3RVcmwsIFsuLi5maWx0ZXJQYXJhbXMsICdzZWFyY2hfcXVlcnknLCAncScsICdfYmNfZnNuZiddKS5yZXBsYWNlKCcvc2VhcmNoLnBocCcsIHRoaXMub3JpZ2luYWxQYXRobmFtZSk7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCByZXF1ZXN0VXJsKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgICAgICAgLy8gU2hvdyBuaWNlIFVSTCBvbiB0aGUgbG9jYXRpb24gYmFyXG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL3NlYXJjaC5waHAnKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5LnEgPSBzZWFyY2hRdWVyeTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeTtcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHVybC5xdWVyeS5jYXRlZ29yeSkgPT09IHRoaXMub3B0aW9ucy5jb250ZXh0LmNhdGVnb3J5SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5jYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgYCR7dGhpcy5vcmlnaW5hbFBhdGhuYW1lfT8ke3VybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5xO1xuICAgICAgICAgICAgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeSA9IHNlYXJjaFF1ZXJ5O1xuICAgICAgICAgICAgaWYgKCF1cmwucXVlcnkuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnkuY2F0ZWdvcnkgPSB0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0VXJsID0gYC9zZWFyY2gucGhwPyR7dXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpfWA7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3N1cGVybWFya2V0L3NlYXJjaC1pbi1jYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc3VwZXJtYXJrZXQvc2VhcmNoLWluLWNhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRpbnB1dC52YWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmYWNldGVkU2VhcmNoLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG4gICAgICAgIHRoaXMuJGZvcm0uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZXJlcXVlc3Quc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHJlcXVlc3RVcmwsIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7IC8vIFN1cGVybWFya2V0IE1PRFxuICAgICAgICAgICAgJChmYWNldGVkU2VhcmNoLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRmb3JtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmV1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaC5yZWZyZXNoVmlldyhjb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdhZnRlcnVwZGF0ZS5zZWFyY2hpbmNhdGVnb3J5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IG9uY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IGFjdGlvbkJhckZhY3RvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9hY3Rpb24tYmFyJzsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4vLyBpbXBvcnQgeyBhdXRvRXhwYW5kQ2F0ZWdvcnlNZW51IH0gZnJvbSAnLi4vcGFwYXRoZW1lcy90aGVtZS11dGlscyc7IC8vIFN1cGVybWFya2V0XG5pbXBvcnQgYnVsa09yZGVyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2J1bGstb3JkZXInO1xuaW1wb3J0IFNlYXJjaEluQ2F0ZWdvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9zZWFyY2gtaW4tY2F0ZWdvcnknO1xuaW1wb3J0IGluaXRTaG9wQnlQcmljZVNsaWRlciBmcm9tICcuLi9iZWF1dGlmeS9zaG9wLWJ5LXByaWNlLXNsaWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhdGVnb3J5IG9uUmVhZHknKTtcbiAgICAgICAgLy8gYXV0b0V4cGFuZENhdGVnb3J5TWVudSh0aGlzLmNvbnRleHQpOyAvLyBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQgJiYgKHRoaXMuY29udGV4dC5zaG93X2J1bGtfb3JkZXJfbW9kZSB8fCB0aGlzLmNvbnRleHQudXNlQnVsa09yZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIgPSBidWxrT3JkZXJGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBlcm1hcmtldCBNb2RcbiAgICAgICAgLy8gY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGluaXRTaG9wQnlQcmljZVNsaWRlcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jYXRlZ29yeXBhZ2Vfc2VhcmNoID09PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ2FmdGVydXBkYXRlLnNlYXJjaGluY2F0ZWdvcnknLCAoKSA9PiBpbml0U2hvcEJ5UHJpY2VTbGlkZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICAgICAgYWN0aW9uQmFyRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2F0ZWdvcnlwYWdlX3NlYXJjaCA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRTZWFyY2hJbkNhdGVnb3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICQoJyNjYXRlZ29yaWVzLW5hdkxpc3QgLm5hdkxpc3QtYWN0aW9uLS1jaGVja2JveCcpLm9uKCdjbGljaycsIGV2ZW50ID0+ICQoZXZlbnQudGFyZ2V0KS50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKSk7XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbkNhdGVnb3J5KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEluQ2F0ZWdvcnkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhY2V0ZWRTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaC5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgaW5pdFNlYXJjaEluQ2F0ZWdvcnkoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5DYXRlZ29yeSA9IG5ldyBTZWFyY2hJbkNhdGVnb3J5KHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dCxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2g6IHRoaXMuZmFjZXRlZFNlYXJjaCxcbiAgICAgICAgICAgIHNlYXJjaENhbGxiYWNrOiAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1bGtPcmRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1bGtPcmRlci5yZWluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3Rpb25CYXJGYWN0b3J5KCk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1bGtPcmRlci5yZWluaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==