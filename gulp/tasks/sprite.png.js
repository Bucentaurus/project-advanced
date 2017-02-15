'use strict'

module.exports = function() {
    $.gulp.task('sprite:png', function() {
        var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            'sprites-comment': false
        }));
        var imgStream = spriteData.img
        // DEV: We must buffer our stream into a Buffer for `imagemin`
            //.pipe($.buffer())
            //.pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/img/icons'));

        // Pipe CSS stream through CSS optimizer and onto disk
        var cssStream = spriteData.css
            //.pipe($.gp.csso())
            //.pipe($.rename('sprite.scss'));
            .pipe($.gp.stripCssComments())
            .pipe($.gulp.dest('./source/style/common'));

        // Return a merged stream to handle both `end` events
        return (imgStream, cssStream);
    })
}