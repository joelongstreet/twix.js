// Generated by CoffeeScript 1.6.3
(function() {
  var lang;

  lang = function(Twix) {
    Twix.registerLang("fr-ca", {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format("" + options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    });
    return Twix.registerLang("fr", {
      twentyFourHour: true,
      allDayMonth: {
        fn: function(options) {
          return function(date) {
            return date.format("" + options.dayFormat + " " + options.monthFormat);
          };
        },
        slot: 3
      },
      month: {
        slot: 3
      },
      date: {
        slot: 2
      }
    });
  };

  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
    module.exports = lang;
  }

  if (typeof define === "function" && define.amd) {
    define(["twix"], function(Twix) {
      return lang(Twix);
    });
  }

  if (this.Twix) {
    lang(Twix);
  }

}).call(this);
