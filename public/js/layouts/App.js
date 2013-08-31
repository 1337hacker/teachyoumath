var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["templates/appLayout"], function(templ) {
  var AppLayout, _ref;
  AppLayout = (function(_super) {
    __extends(AppLayout, _super);

    function AppLayout() {
      _ref = AppLayout.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppLayout.prototype.content = templ;

    AppLayout.prototype.regions = {
      "sidebar": "#sidebar",
      "main": "#main"
    };

    return AppLayout;

  })(dermis.Layout);
  return new AppLayout;
});
