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
        host:'http://127.0.0.1',
        port: 3033
    });
    // 监听某一个文件夹下的所有scss文件，执行sass任务
    gulp.watch('./app/*.html').on('change', reload);;
    gulp.watch('./app/less/*.less', ['less']);
});


gulp.task('less', function() {
    return gulp.src('./app/less/*.less') // 源文件
            .pipe(less()) // 执行方法
            .pipe(gulp.dest('./app/')) // 输出
            .pipe(reload({stream: true})) // 当scss文件更新后触发页面更新
})

gulp.task('default', ['serve']);