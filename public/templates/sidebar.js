define(function(){return function(t){var n=[],r=t||{},i=r.loggedIn;return n.push('<div class="sidebar-nav"><ul class="nav nav-list">'),i&&n.push('<img width="30" data-src="me:profileImage &lt; .handle" class="img-rounded"/>&nbsp;<span data-text="me.handle"></span><br/><br/>'),n.push('<li data-page="index"><a href="/">Home</a></li><li data-page="users"><a href="/users/">Users</a></li>'),i&&n.push('<li class="divider"></li><li class="logout"><a href="#">Logout</a></li>'),n.push("</ul></div>"),n.join("")}})