(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Supermarket Mod
// import compareProducts from './global/compare-products';



var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);

  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Compare.prototype;

  _proto.onReady = function onReady() {
    var _this = this;

    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_1__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };

  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21wYXJlLmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwiYW5pbWF0aW9uVGltZSIsIiRib2R5IiwiJCIsInByb2R1Y3RzIiwibG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSIsIiRzY29wZSIsIk11c3RhY2hlIiwicmVuZGVyIiwiY29tcGFyZSIsImNvbXBhcmVBZGRvbkxhbmdfY29tcGFyZSIsImNsZWFyX2FsbCIsImNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsIiwicmVuZGVySXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicmVuZGVySXRlbSIsImpvaW4iLCJsZW5ndGgiLCJhZGRDbGFzcyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsInNob3ciLCJhcHBlbmQiLCIkcHJvZHVjdExpc3QiLCJmaW5kIiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwiYmluZEV2ZW50cyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInMiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZSIsInNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRlbCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIk51bWJlciIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiYWRkUHJvZHVjdCIsImltYWdlIiwiYWx0IiwicmVtb3ZlUHJvZHVjdCIsInRvZ2dsZUNsYXNzIiwiY2xlYXJBbGxQcm9kdWN0cyIsInB1c2giLCJmYWRlSW4iLCJmYWRlT3V0IiwicmVtb3ZlIiwicGF0aCIsImF0dHIiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiQ29tcGFyZSIsIm9uUmVhZHkiLCJtZXNzYWdlIiwiY29tcGFyZVJlbW92ZU1lc3NhZ2UiLCJjb21wYXJpc29ucyIsInNob3dBbGVydE1vZGFsIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSUEsU0FBSjtBQUVBLElBQU1DLGVBQWUsbW5DQUFyQjtBQWdCQSxJQUFNQyxtQkFBbUIsb21CQUF6Qjs7SUFRTUMsZTtFQUNGLHlCQUFZQyxPQUFaLEVBQXFCO0lBQUE7O0lBQ2pCLEtBQUtBLE9BQUwsR0FBZUEsT0FBZjtJQUNBLEtBQUtDLGFBQUwsR0FBcUIsR0FBckI7SUFDQSxLQUFLQyxLQUFMLEdBQWFDLENBQUMsQ0FBQyxNQUFELENBQWQ7SUFFQSxLQUFLQyxRQUFMLEdBQWdCLEtBQUtDLDRCQUFMLE1BQXVDLEVBQXZEO0lBRUEsS0FBS0MsTUFBTCxHQUFjSCxDQUFDLENBQUNJLCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JYLGVBQWhCLEVBQWlDO01BQzdDWSxPQUFPLEVBQUVULE9BQU8sQ0FBQ1Usd0JBRDRCO01BRTdDQyxTQUFTLEVBQUVYLE9BQU8sQ0FBQ1ksMEJBRjBCO01BRzdDQyxXQUFXLEVBQUU7UUFBQSxPQUFNLEtBQUksQ0FBQ1QsUUFBTCxDQUFjVSxHQUFkLENBQWtCLFVBQUFDLE9BQU87VUFBQSxPQUFJLEtBQUksQ0FBQ0MsVUFBTCxDQUFnQkQsT0FBaEIsQ0FBSjtRQUFBLENBQXpCLEVBQXVERSxJQUF2RCxDQUE0RCxFQUE1RCxDQUFOO01BQUE7SUFIZ0MsQ0FBakMsQ0FBRCxDQUFmOztJQU1BLElBQUksS0FBS2IsUUFBTCxDQUFjYyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO01BQzVCLEtBQUtaLE1BQUwsQ0FBWWEsUUFBWixDQUFxQixVQUFyQixFQUFpQ0Ms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TUFFSGMsVUFBVSxFQUFFLEtBQUs5RCxPQUFMLENBQWErRCwyQkFGdEI7TUFHSEwsTUFBTSxFQUFFLEtBQUsxRCxPQUFMLENBQWFnRTtJQUhsQixHQUFQO0VBS0gsQzs7Ozs7QUFHVSxTQUFTQyxlQUFULENBQXlCakUsT0FBekIsRUFBa0M7RUFDN0MsSUFBSSxDQUFDSixTQUFMLEVBQWdCO0lBQ1pBLFNBQVMsR0FBRyxJQUFJRyxlQUFKLENBQW9CQyxPQUFwQixDQUFaO0VBQ0g7O0VBQ0QsT0FBT0osU0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTEQ7Q0FFQTtBQUNBOztBQUNBOztJQUVxQnNFLE87Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0lBQUE7O0lBQ047SUFDQTtJQUNBRiw0RUFBZSxDQUFDLEtBQUtqRSxPQUFOLENBQWY7SUFFQSxJQUFNb0UsT0FBTyxHQUFHLEtBQUtwRSxPQUFMLENBQWFxRSxvQkFBN0I7SUFFQWxFLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLDBCQUF0QixFQUFrRCxVQUFBQyxLQUFLLEVBQUk7TUFDdkQsSUFBSSxLQUFJLENBQUN4QyxPQUFMLENBQWFzRSxXQUFiLENBQXlCcEQsTUFBekIsSUFBbUMsQ0FBdkMsRUFBMEM7UUFDdENxRCxvRUFBYyxDQUFDSCxPQUFELENBQWQ7UUFDQTVCLEtBQUssQ0FBQ0MsY0FBTjtNQUNIO0lBQ0osQ0FMRDtFQU1ILEM7OztFQWRnQytCLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5sZXQgc2luZ2xldG9uO1xuXG5jb25zdCBjb21wYXJlTGlzdFRtcGwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsLXdyYXBwZXIgaXMtZW1wdHlcIiBpZD1cInN1cGVybWFya2V0Q29tcGFyZUxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3Q+e3t7cmVuZGVySXRlbXN9fX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3tjb21wYXJlX3VybH19XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jb21wYXJlXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uPnt7Y29tcGFyZX19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXBsYWluIGJ1dHRvbi0tc21hbGwgYnV0dG9uLS1jbGVhckFsbFwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWNsZWFyYWxsPnt7Y2xlYXJfYWxsfX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1jbG9zZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZT48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkNsb3NlPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1vcGVuXCIgZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi11cFwiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPk9wZW48L3NwYW4+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuY29uc3QgY29tcGFyZUxpc3RJdGVtVG1wbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtaXRlbVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09XCJ7e2lkfX1cIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWltZ1wiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7YWx0fX1cIiB0aXRsZT1cInt7YWx0fX1cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1xdWlja3ZpZXcgcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwie3tpZH19XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1c1wiPjwvaT48c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPnt7cXVpY2tfdmlld319PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXJlbW92ZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZT1cInt7aWR9fVwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3JlbW92ZX19PC9zcGFuPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuYDtcblxuY2xhc3MgQ29tcGFyZVByb2R1Y3RzIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZSA9IDMwMDtcbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5sb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG5cbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkKE11c3RhY2hlLnJlbmRlcihjb21wYXJlTGlzdFRtcGwsIHtcbiAgICAgICAgICAgIGNvbXBhcmU6IGNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlLFxuICAgICAgICAgICAgY2xlYXJfYWxsOiBjb250ZXh0LmNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsLFxuICAgICAgICAgICAgcmVuZGVySXRlbXM6ICgpID0+IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gdGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5qb2luKCcnKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUuYWRkQ2xhc3MoJ2lzLWVtcHR5JykuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0ID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWxpc3RdJyk7XG4gICAgICAgIHRoaXMuJGNvbXBhcmVCdXR0b24gPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtYnV0dG9uXScpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGlmICghd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFyZVByb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdWN0cykpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcigkZWwuZGF0YSgnY29tcGFyZUlkJykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0KHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICRlbC5kYXRhKCdjb21wYXJlSW1hZ2UnKSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiAkZWwuZGF0YSgnY29tcGFyZVRpdGxlJyksXG4gICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLXByb2R1Y3QtcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVQcm9kdWN0UmVtb3ZlJykpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcm9kdWN0KGlkKTtcblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS50b2dnbGVDbGFzcygnaXMtY2xvc2VkJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckFsbFByb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2R1Y3QocHJvZHVjdCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJCh0aGlzLnJlbmRlckl0ZW0ocHJvZHVjdCkpLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdC5hcHBlbmQoJGVsKTtcblxuICAgICAgICAkZWwuc2hvdyh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLmZhZGVJbih0aGlzLmFuaW1hdGlvblRpbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9kdWN0KGlkKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbT0ke2lkfV1gKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGxQcm9kdWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtXScpO1xuICAgICAgICAkZWwuZmFkZU91dCh0aGlzLmFuaW1hdGlvblRpbWUsICgpID0+IHtcbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ29tcGFyZVVybCgpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHRoaXMucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCkuam9pbignLycpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uLmF0dHIoJ2hyZWYnLCBgJHt0aGlzLmNvbnRleHQudXJscy5jb21wYXJlfS8ke3BhdGh9YCk7XG4gICAgfVxuXG4gICAgcmVuZGVySXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiBNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RJdGVtVG1wbCwge1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHF1aWNrX3ZpZXc6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3F1aWNrX3ZpZXcsXG4gICAgICAgICAgICByZW1vdmU6IHRoaXMuY29udGV4dC5jb21wYXJlQWRkb25MYW5nX3JlbW92ZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlUHJvZHVjdHMoY29udGV4dCkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBDb21wYXJlUHJvZHVjdHMoY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG59XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuLy8gU3VwZXJtYXJrZXQgTW9kXG4vLyBpbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuLi9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYXJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIFN1cGVybWFya2V0IE1vZFxuICAgICAgICAvLyBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jb250ZXh0LmNvbXBhcmVSZW1vdmVNZXNzYWdlO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyaXNvbi1yZW1vdmVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jb21wYXJpc29ucy5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=