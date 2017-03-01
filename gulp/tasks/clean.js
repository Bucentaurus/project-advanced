'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
             $.del($.config.root, cb);
      return $.del('./source/style/common/sprite.css', cb);
  });
};

