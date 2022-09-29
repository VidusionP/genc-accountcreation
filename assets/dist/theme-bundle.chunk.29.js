(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 // Supermarket Mod
// import compareProducts from './global/compare-products';







 // Papathemes - Supermarket



var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__["createTranslationDictionary"])(context);
    return _this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this2 = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this2.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this3 = this;

    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content'); // Papathemes - Bulk Order

    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);
    }

    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Papathemes - Supermarket
    // Init faceted search

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this3.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this3.showContent();
    });

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this3.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
  } // Supermarket
  ;

  _proto.destroy = function destroy() {
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    }
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this4 = this;

    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this4.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this5 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this5.categoryTreeData);
          } else {
            // Lazy loaded children
            _this5.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions); // papathemes-beautify: fix accessibility

    $container.on('ready.jstree, redraw.jstree', function () {
      return $container.find('.jstree-node').removeAttr('aria-selected');
    });
    $container.on('changed.jstree', function (event, node) {
      node.event.currentTarget.closest('.jstree-node').removeAttr('aria-selected');
    });
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this6 = this;

    var _this$validationDicti = this.validationDictionary,
        onMinPriceError = _this$validationDicti.price_min_evaluation,
        onMaxPriceError = _this$validationDicti.price_max_evaluation,
        minPriceNotEntered = _this$validationDicti.price_min_not_entered,
        maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
        onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      $('body').triggerHandler('compareReset'); // Papathemes - Bulk Order

      if (_this6.bulkOrder) {
        _this6.bulkOrder.reinit();
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

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiZmluZCIsIlVybCIsInBhcnNlIiwidHJlZURhdGEiLCJzaG93X2J1bGtfb3JkZXJfbW9kZSIsInVzZUJ1bGtPcmRlciIsImJ1bGtPcmRlciIsImJ1bGtPcmRlckZhY3RvcnkiLCJhY3Rpb25CYXJGYWN0b3J5IiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJjYXRlZ29yeUlkIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwiZGVzdHJveSIsImZhY2V0ZWRTZWFyY2giLCJvZmYiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCJyZW1vdmVBdHRyIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsInJlaW5pdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwibm9kIiwic3VibWl0IiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ3lEOztBQUN6RDs7SUFFcUJBLE07OztFQUNqQixnQkFBWUMsT0FBWixFQUFxQjtJQUFBOztJQUNqQixnQ0FBTUEsT0FBTjtJQUNBLE1BQUtDLG9CQUFMLEdBQTRCQywwR0FBMkIsQ0FBQ0YsT0FBRCxDQUF2RDtJQUZpQjtFQUdwQjs7OztTQUVERywyQixHQUFBLHFDQUE0QkMsSUFBNUIsRUFBa0M7SUFBQTs7SUFDOUIsSUFBTUMsUUFBUSxHQUFHO01BQ2JDLElBQUksRUFBRUYsSUFBSSxDQUFDRyxJQURFO01BRWJDLEVBQUUsRUFBRUosSUFBSSxDQUFDSyxRQUFMLENBQWNELEVBRkw7TUFHYkUsS0FBSyxFQUFFO1FBQ0hDLFFBQVEsRUFBRVAsSUFBSSxDQUFDTztNQURaO0lBSE0sQ0FBakI7O0lBUUEsSUFBSVAsSUFBSSxDQUFDTSxLQUFULEVBQWdCO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlRSxNQUFmLEdBQXdCUixJQUFJLENBQUNNLEtBQUwsS0FBZSxNQUF2QztNQUNBTCxRQUFRLENBQUNRLFFBQVQsR0FBb0IsSUFBcEI7SUFDSDs7SUFFRCxJQUFJVCxJQUFJLENBQUNTLFFBQVQsRUFBbUI7TUFDZlIsUUFBUSxDQUFDUSxRQUFULEdBQW9CLEVBQXBCO01BQ0FULElBQUksQ0FBQ1MsUUFBTCxDQUFjQyxPQUFkLENBQXNCLFVBQUNDLFNBQUQsRUFBZTtRQUNqQ1YsUUFBUSxDQUFDUSxRQUFULENBQWtCRyxJQUFsQixDQUF1QixNQUFJ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QW9CO01BQ2hCLEtBQUtBLFNBQUwsQ0FBZThFLEdBQWYsQ0FBbUI7UUFDZkMsUUFBUSxFQUFFRixRQURLO1FBRWZHLFFBQVEsRUFBRSxVQUZLO1FBR2ZDLFlBQVksRUFBRUosUUFBUSxDQUFDOUgsSUFBVCxDQUFjLGNBQWQ7TUFIQyxDQUFuQjtJQUtIOztJQUVELE9BQU8sSUFBUDtFQUNILEM7O1NBRUQwRCxLLEdBQUEsaUJBQVE7SUFDSixJQUFJLEtBQUtULFNBQVQsRUFBb0I7TUFDaEIsS0FBS0EsU0FBTCxDQUFla0YsWUFBZjtNQUNBLE9BQU8sS0FBS2xGLFNBQUwsQ0FBZW1GLE1BQWYsQ0FBc0IsT0FBdEIsQ0FBUDtJQUNIOztJQUVELE9BQU8sS0FBUDtFQUNILEM7OztFQWxTK0JDLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbmltcG9ydCBidWxrT3JkZXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYnVsay1vcmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMod2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIHNlY3Rpb246ICdwcm9kdWN0JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMod2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIHNlY3Rpb246ICdjb250ZW50JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEJ1bGsgT3JkZXJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCAmJiAodGhpcy5jb250ZXh0LnNob3dfYnVsa19vcmRlcl9tb2RlIHx8IHRoaXMuY29udGV4dC51c2VCdWxrT3JkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1bGtPcmRlciA9IGJ1bGtPcmRlckZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2guZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5OiBmaXggYWNjZXNzaWJpbGl0eVxuICAgICAgICAkY29udGFpbmVyLm9uKCdyZWFkeS5qc3RyZWUsIHJlZHJhdy5qc3RyZWUnLCAoKSA9PiAkY29udGFpbmVyLmZpbmQoJy5qc3RyZWUtbm9kZScpLnJlbW92ZUF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSk7XG4gICAgICAgICRjb250YWluZXIub24oJ2NoYW5nZWQuanN0cmVlJywgKGV2ZW50LCBub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLmpzdHJlZS1ub2RlJykucmVtb3ZlQXR0cignYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xuICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVsa09yZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIucmVpbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==