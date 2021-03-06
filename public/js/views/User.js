var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["templates/user", "models/User"], function(templ, User) {
  var UserView, _ref;
  UserView = (function(_super) {
    __extends(UserView, _super);

    function UserView() {
      _ref = UserView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    UserView.prototype.className = "user-view";

    UserView.prototype.content = templ;

    UserView.prototype.render = function(_arg) {
      var handle, user;
      handle = _arg.handle;
      user = new User({
        handle: handle
      });
      user.fetch();
      this.bind(user);
      dermis.channel.emit("sidebar.page", "users");
      return this;
    };

    return UserView;

  })(dermis.View);
  return UserView;
});
