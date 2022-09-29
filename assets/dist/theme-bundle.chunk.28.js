(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");

var _excluded = ["responsive"],
    _excluded2 = ["breakpoint"],
    _excluded3 = ["breakpoint"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * This file is added by Supermarket theme.
 */


var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    this.fixHomeBrandsCarousel();
    this.carouselOpen(); // papathemes-beautify

    $('#yotpo_testimonials_btn_copy').on('click', function (event) {
      event.preventDefault();
      $('#yotpo_testimonials_btn').trigger('click');
    });
  };

  _proto.fixHomeBrandsCarousel = function fixHomeBrandsCarousel() {
    var $slick = $('[data-home-brands-slick]');

    if ($slick.length === 0) {
      return;
    }

    var _$slick$data = $slick.data('homeBrandsSlick'),
        responsive = _$slick$data.responsive,
        data = _objectWithoutPropertiesLoose(_$slick$data, _excluded);

    var breakpoints = responsive.map(function (r) {
      return Object.assign({}, data, {
        breakpoint: r.breakpoint
      }, r.settings);
    });

    var getBreakpoint = function getBreakpoint() {
      var width = $(window).innerWidth();
      return breakpoints.reduce(function (prev, current) {
        return current.breakpoint >= width ? current : prev;
      }, data);
    };

    var _getBreakpoint = getBreakpoint(),
        currentBreakpoint = _getBreakpoint.breakpoint,
        currentData = _objectWithoutPropertiesLoose(_getBreakpoint, _excluded2);

    $slick.slick(currentData);
    $(window).on('resize', lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      var _getBreakpoint2 = getBreakpoint(),
          newBreakpoint = _getBreakpoint2.breakpoint,
          newData = _objectWithoutPropertiesLoose(_getBreakpoint2, _excluded3);

      if (newBreakpoint !== currentBreakpoint) {
        currentBreakpoint = newBreakpoint;
        currentData = newData;
        $slick.slick('unslick').slick(currentData);
      }
    }, 500));
  };

  _proto.carouselOpen = function carouselOpen() {
    var $homeCarousel = $($('[id^=bc-carousel]').children());
    var $homeRegion = $('[data-content-region=header_bottom]');

    if ($homeCarousel.length > 0) {
      $homeCarousel.first().addClass('homeCarousel');
      $homeRegion.first().addClass('homeRegion');
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwib25SZWFkeSIsImZpeEhvbWVCcmFuZHNDYXJvdXNlbCIsImNhcm91c2VsT3BlbiIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiJHNsaWNrIiwibGVuZ3RoIiwiZGF0YSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50cyIsIm1hcCIsInIiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJnZXRCcmVha3BvaW50Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJjdXJyZW50QnJlYWtwb2ludCIsImN1cnJlbnREYXRhIiwic2xpY2siLCJuZXdCcmVha3BvaW50IiwibmV3RGF0YSIsIiRob21lQ2Fyb3VzZWwiLCJjaGlsZHJlbiIsIiRob21lUmVnaW9uIiwiZmlyc3QiLCJhZGRDbGFzcyIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztJQUdxQkEsSTs7Ozs7Ozs7O1NBQ2pCQyxPLEdBQUEsbUJBQVU7SUFDTixLQUFLQyxxQkFBTDtJQUNBLEtBQUtDLFlBQUwsR0FGTSxDQUdOOztJQUNBQyxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0MsRUFBbEMsQ0FBcUMsT0FBckMsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO01BQ3JEQSxLQUFLLENBQUNDLGNBQU47TUFDQUgsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJJLE9BQTdCLENBQXFDLE9BQXJDO0lBQ0gsQ0FIRDtFQUlILEM7O1NBRUROLHFCLEdBQUEsaUNBQXdCO0lBQ3BCLElBQU1PLE1BQU0sR0FBR0wsQ0FBQyxDQUFDLDBCQUFELENBQWhCOztJQUVBLElBQUlLLE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtNQUNyQjtJQUNIOztJQUVELG1CQUFnQ0QsTUFBTSxDQUFDRSxJQUFQLENBQVksaUJBQVosQ0FBaEM7SUFBQSxJQUFRQyxVQUFSLGdCQUFRQSxVQUFSO0lBQUEsSUFBdUJELElBQXZCOztJQUNBLElBQU1FLFdBQVcsR0FBR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQUMsQ0FBQztNQUFBLHlCQUM3QkosSUFENkI7UUFFaENLLFVBQVUsRUFBRUQsQ0FBQyxDQUFDQztNQUZrQixHQUc3QkQsQ0FBQyxDQUFDRSxRQUgyQjtJQUFBLENBQWhCLENBQXBCOztJQU1BLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtNQUN4QixJQUFNQyxLQUFLLEdBQUdmLENBQUMsQ0FBQ2dCLE1BQUQsQ0FBRCxDQUFVQyxVQUFWLEVBQWQ7TUFDQSxPQUFPUixXQUFXLENBQUNTLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQO1FBQUEsT0FBb0JBLE9BQU8sQ0FBQ1IsVUFBUixJQUFzQkcsS0FBdEIsR0FBOEJLLE9BQTlCLEdBQXdDRCxJQUE1RDtNQUFBLENBQW5CLEVBQXNGWixJQUF0RixDQUFQO0lBQ0gsQ0FIRDs7SUFLQSxxQkFBd0RPLGFBQWEsRUFBckU7SUFBQSxJQUFrQk8saUJBQWxCLGtCQUFNVCxVQUFOO0lBQUEsSUFBd0NVLFdBQXhDOztJQUVBakIsTUFBTSxDQUFDa0IsS0FBUCxDQUFhRCxXQUFiO0lBRUF0QixDQUFDLENBQUNnQixNQUFELENBQUQsQ0FBVWYsRUFBVixDQUFhLFFBQWIsRUFBdUIsdURBQVMsWUFBTTtNQUNsQyxzQkFBa0RhLGFBQWEsRUFBL0Q7TUFBQSxJQUFvQlUsYUFBcEIsbUJBQVFaLFVBQVI7TUFBQSxJQUFzQ2EsT0FBdEM7O01BQ0EsSUFBSUQsYUFBYSxLQUFLSCxpQkFBdEIsRUFBeUM7UUFDckNBLGlCQUFpQixHQUFHRyxhQUFwQjtRQUNBRixXQUFXLEdBQUdHLE9BQWQ7UUFDQXBCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYSxTQUFiLEVBQXdCQSxLQUF4QixDQUE4QkQsV0FBOUI7TUFDSDtJQUNKLENBUHNCLEVBT3BCLEdBUG9CLENBQXZCO0VBUUgsQzs7U0FDRHZCLFksR0FBQSx3QkFBZTtJQUNYLElBQU0yQixhQUFhLEdBQUcxQixDQUFDLENBQUNBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCMkIsUUFBdkIsRUFBRCxDQUF2QjtJQUNBLElBQU1DLFdBQVcsR0FBRzVCLENBQUMsQ0FBQyxxQ0FBRCxDQUFyQjs7SUFDQSxJQUFJMEIsYUFBYSxDQUFDcEIsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtNQUMxQm9CLGFBQWEsQ0FBQ0csS0FBZCxHQUFzQkMsUUFBdEIsQ0FBK0IsY0FBL0I7TUFDQUYsV0FBVyxDQUFDQyxLQUFaLEdBQW9CQyxRQUFwQixDQUE2QixZQUE3QjtJQUNIO0VBQ0osQzs7O0VBbEQ2QkMscUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaXMgYWRkZWQgYnkgU3VwZXJtYXJrZXQgdGhlbWUuXG4gKi9cblxuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5maXhIb21lQnJhbmRzQ2Fyb3VzZWwoKTtcbiAgICAgICAgdGhpcy5jYXJvdXNlbE9wZW4oKTtcbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAkKCcjeW90cG9fdGVzdGltb25pYWxzX2J0bl9jb3B5Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJCgnI3lvdHBvX3Rlc3RpbW9uaWFsc19idG4nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXhIb21lQnJhbmRzQ2Fyb3VzZWwoKSB7XG4gICAgICAgIGNvbnN0ICRzbGljayA9ICQoJ1tkYXRhLWhvbWUtYnJhbmRzLXNsaWNrXScpO1xuXG4gICAgICAgIGlmICgkc2xpY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHJlc3BvbnNpdmUsIC4uLmRhdGEgfSA9ICRzbGljay5kYXRhKCdob21lQnJhbmRzU2xpY2snKTtcbiAgICAgICAgY29uc3QgYnJlYWtwb2ludHMgPSByZXNwb25zaXZlLm1hcChyID0+ICh7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgYnJlYWtwb2ludDogci5icmVha3BvaW50LFxuICAgICAgICAgICAgLi4uci5zZXR0aW5ncyxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGNvbnN0IGdldEJyZWFrcG9pbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9ICQod2luZG93KS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiAoY3VycmVudC5icmVha3BvaW50ID49IHdpZHRoID8gY3VycmVudCA6IHByZXYpLCBkYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgeyBicmVha3BvaW50OiBjdXJyZW50QnJlYWtwb2ludCwgLi4uY3VycmVudERhdGEgfSA9IGdldEJyZWFrcG9pbnQoKTtcblxuICAgICAgICAkc2xpY2suc2xpY2soY3VycmVudERhdGEpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBicmVha3BvaW50OiBuZXdCcmVha3BvaW50LCAuLi5uZXdEYXRhIH0gPSBnZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAobmV3QnJlYWtwb2ludCAhPT0gY3VycmVudEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IG5ld0JyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgY3VycmVudERhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgICAgICAgICRzbGljay5zbGljaygndW5zbGljaycpLnNsaWNrKGN1cnJlbnREYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKSk7XG4gICAgfVxuICAgIGNhcm91c2VsT3BlbigpIHtcbiAgICAgICAgY29uc3QgJGhvbWVDYXJvdXNlbCA9ICQoJCgnW2lkXj1iYy1jYXJvdXNlbF0nKS5jaGlsZHJlbigpKTtcbiAgICAgICAgY29uc3QgJGhvbWVSZWdpb24gPSAkKCdbZGF0YS1jb250ZW50LXJlZ2lvbj1oZWFkZXJfYm90dG9tXScpO1xuICAgICAgICBpZiAoJGhvbWVDYXJvdXNlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkaG9tZUNhcm91c2VsLmZpcnN0KCkuYWRkQ2xhc3MoJ2hvbWVDYXJvdXNlbCcpO1xuICAgICAgICAgICAgJGhvbWVSZWdpb24uZmlyc3QoKS5hZGRDbGFzcygnaG9tZVJlZ2lvbicpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==