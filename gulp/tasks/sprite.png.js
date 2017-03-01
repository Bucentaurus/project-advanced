'use strict'

module.exports = function() {
    $.gulp.task('sprite:png', function() {
            var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
        }));
        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img/icons'));

        var cssStream = spriteData.css
            .pipe($.gp.stripCssComments())
            .pipe($.gulp.dest('./source/style/common'));

        return (imgStream, cssStream);
    })
}