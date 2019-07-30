// gulpfile.js

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var reload = browserSync.reload;

// 静态服务器 + 监听css文件
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3033
    });
    // 监听某一个文件夹下的所有scss文件，执行sass任务
    gulp.watch('./src/*.html').on('change', reload);;
    gulp.watch('./src/css/*.less', ['less']);
});


gulp.task('less', function() {
    return gulp.src('./src/css/*.less') // 源文件
            .pipe(less()) // 执行方法
            .pipe(gulp.dest('./src/css')) // 输出
            .pipe(reload({stream: true})) // 当scss文件更新后触发页面更新
})

gulp.task('default', ['serve']);