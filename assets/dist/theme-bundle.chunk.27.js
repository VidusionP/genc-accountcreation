(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);

  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Brands.prototype;

  _proto.onReady = function onReady() {
    this.showMoreBrands();
  };

  _proto.showMoreBrands = function showMoreBrands() {
    $('.button--showmore').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
          link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          if ($(data).find('#brand-listing-container').length > 0) {
            $('#brand-listing-container').append($(data).find('#brand-listing-container').children());
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();

            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }

            nextPage = $(".pagination-item--current").next();

            if (nextPage.length === 0) {
              $('#listing-showmoreBtn').addClass('pagination-disable').text('No more brands');
            }
          }
        }
      });
    });
  };

  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsIm9uUmVhZHkiLCJzaG93TW9yZUJyYW5kcyIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiZmluZCIsImF0dHIiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkYXRhIiwibGVuZ3RoIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwiTnVtYmVyIiwidGV4dCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsTTs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7SUFDTixLQUFLQyxjQUFMO0VBQ0gsQzs7U0FDREEsYyxHQUFBLDBCQUFpQjtJQUViQyxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkMsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsS0FBRCxFQUFXO01BQzFDQSxLQUFLLENBQUNDLGNBQU47TUFDQSxJQUFJQyxRQUFRLEdBQUdKLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxJQUEvQixFQUFmO01BQUEsSUFDSUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxHQUFkLEVBQW1CQyxJQUFuQixDQUF3QixNQUF4QixDQURYO01BRUFSLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCUyxRQUE5QixDQUF1QyxTQUF2QztNQUVBVCxDQUFDLENBQUNVLElBQUYsQ0FBTztRQUNIQyxJQUFJLEVBQUUsS0FESDtRQUVIQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sT0FBTCxDQUFhLFNBQWIsRUFBd0IsSUFBeEIsQ0FGRjtRQUdIQyxPQUFPLEVBQUUsaUJBQVNDLElBQVQsRUFBZTtVQUNwQixJQUFJZixDQUFDLENBQUNlLElBQUQsQ0FBRCxDQUFRUixJQUFSLENBQWEsMEJBQWIsRUFBeUNTLE1BQXpDLEdBQWtELENBQXRELEVBQXlEO1lBRXJEaEIsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJpQixNQUE5QixDQUFxQ2pCLENBQUMsQ0FBQ2UsSUFBRCxDQUFELENBQVFSLElBQVIsQ0FBYSwwQkFBYixFQUF5Q1csUUFBekMsRUFBckM7WUFFQWxCLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCbUIsSUFBdEIsQ0FBMkJuQixDQUFDLENBQUNlLElBQUQsQ0FBRCxDQUFRUixJQUFSLENBQWEsa0JBQWIsRUFBaUNZLElBQWpDLEVBQTNCO1lBRUFuQixDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm9CLFdBQTlCLENBQTBDLFNBQTFDLEVBQXFEQyxJQUFyRDs7WUFFQSxJQUFJQyxNQUFNLENBQUN0QixDQUFDLENBQUNlLElBQUQsQ0FBRCxDQUFRUixJQUFSLENBQWEsdUJBQWIsRUFBc0NnQixJQUF0QyxFQUFELENBQU4sSUFBd0RELE1BQU0sQ0FBQ3RCLENBQUMsQ0FBQ2UsSUFBRCxDQUFELENBQVFSLElBQVIsQ0FBYSx5QkFBYixFQUF3Q2dCLElBQXhDLEVBQUQsQ0FBbEUsRUFBb0g7Y0FDaEh2QixDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q3VCLElBQXZDLENBQTRDdkIsQ0FBQyxDQUFDZSxJQUFELENBQUQsQ0FBUVIsSUFBUixDQUFhLHVCQUFiLEVBQXNDZ0IsSUFBdEMsRUFBNUM7WUFDSCxDQUZELE1BRU87Y0FDSHZCLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDdUIsSUFBdkMsQ0FBNEN2QixDQUFDLENBQUNlLElBQUQsQ0FBRCxDQUFRUixJQUFSLENBQWEseUJBQWIsRUFBd0NnQixJQUF4QyxFQUE1QztZQUNIOztZQUVEbkIsUUFBUSxHQUFHSixDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkssSUFBL0IsRUFBWDs7WUFFQSxJQUFJRCxRQUFRLENBQUNZLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7Y0FDdkJoQixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlMsUUFBMUIsQ0FBbUMsb0JBQW5DLEVBQXlEYyxJQUF6RCxDQUE4RCxnQkFBOUQ7WUFDSDtVQUNKO1FBQ0o7TUF4QkUsQ0FBUDtJQTBCSCxDQWhDRDtFQWlDSCxDOzs7RUF2QytCQyxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TW9yZUJyYW5kcygpO1xyXG4gICAgfVxyXG4gICAgc2hvd01vcmVCcmFuZHMoKSB7XHJcblxyXG4gICAgICAgICQoJy5idXR0b24tLXNob3dtb3JlJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKSxcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZ2V0JyxcclxuICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNicmFuZC1saXN0aW5nLWNvbnRhaW5lcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNicmFuZC1saXN0aW5nLWNvbnRhaW5lcicpLmFwcGVuZCgkKGRhdGEpLmZpbmQoJyNicmFuZC1saXN0aW5nLWNvbnRhaW5lcicpLmNoaWxkcmVuKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24tbGlzdCcpLmh0bWwoJChkYXRhKS5maW5kKFwiLnBhZ2luYXRpb24tbGlzdFwiKS5odG1sKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8PSBOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0bicpLmFkZENsYXNzKCdwYWdpbmF0aW9uLWRpc2FibGUnKS50ZXh0KCdObyBtb3JlIGJyYW5kcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9