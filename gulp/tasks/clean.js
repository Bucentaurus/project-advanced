'use strict';

module.exports = function() {
  $.gulp.task('clean', function(cb) {
      return $.del($.config.root, cb);
             $.del('./source/style/common/sprite.css', cb);
  });
};

