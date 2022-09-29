(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */





 // import { autoExpandCategoryMenu } from '../papathemes/theme-utils'; // Supermarket

var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // autoExpandCategoryMenu(this.context); // Supermarket
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView-scope'), this.context, window.BCData.product_attributes); // Supermarket Mod

    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }

      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent); // papathemes-supermarket

    var anchor = $('#tab-reviews').length > 0 ? 'tab-reviews' : 'product-reviews';

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + "#" + anchor);
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + "#" + anchor);
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsImNvbnRleHQiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiQiLCIkYnVsa1ByaWNpbmdMaW5rIiwib25SZWFkeSIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwibm9kIiwic3VibWl0IiwiZmluZCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCJoYXNDbGFzcyIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiY2xpY2siLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwiYW5jaG9yIiwibGVuZ3RoIiwiYXR0ciIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsImNiIiwidmFsIiwicmVzdWx0IiwiZm9ybXMiLCJlbWFpbCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJkYXRhIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztJQUVxQkEsTzs7O0VBQ2pCLGlCQUFZQyxPQUFaLEVBQXFCO0lBQUE7O0lBQ2pCLGdDQUFNQSxPQUFOO0lBQ0EsTUFBS0MsR0FBTCxHQUFXQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTNCO0lBQ0EsTUFBS0MsV0FBTCxHQUFtQkMsQ0FBQyxDQUFDLHNDQUFELENBQXBCO0lBQ0EsTUFBS0MsZ0JBQUwsR0FBd0JELENBQUMsQ0FBQyx1Q0FBRCxDQUF6QjtJQUppQjtFQUtwQjs7OztTQUVERSxPLEdBQUEsbUJBQVU7SUFBQTs7SUFDTjtJQUVBO0lBQ0FGLENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEVBQVosQ0FBZSxvQkFBZixFQUFxQyxZQUFNO01BQ3ZDLElBQUksTUFBSSxDQUFDVCxHQUFMLENBQVNVLE9BQVQsQ0FBaUIsZUFBakIsTUFBc0MsQ0FBQyxDQUF2QyxJQUE0QyxPQUFPVCxNQUFNLENBQUNVLE9BQVAsQ0FBZUMs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QixDQUFwQjtFQUNILENBVEQ7QUFVSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL3Byb2R1Y3QvcmV2aWV3cyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0IHZpZGVvR2FsbGVyeSBmcm9tICcuL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbi8vIGltcG9ydCB7IGF1dG9FeHBhbmRDYXRlZ29yeU1lbnUgfSBmcm9tICcuLi9wYXBhdGhlbWVzL3RoZW1lLXV0aWxzJzsgLy8gU3VwZXJtYXJrZXRcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gYXV0b0V4cGFuZENhdGVnb3J5TWVudSh0aGlzLmNvbnRleHQpOyAvLyBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0Vmlldy1zY29wZScpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTsgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1zdXBlcm1hcmtldFxuICAgICAgICBjb25zdCBhbmNob3IgPSAkKCcjdGFiLXJldmlld3MnKS5sZW5ndGggPiAwID8gJ3RhYi1yZXZpZXdzJyA6ICdwcm9kdWN0LXJldmlld3MnO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9IyR7YW5jaG9yfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0jJHthbmNob3J9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==