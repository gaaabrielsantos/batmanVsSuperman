const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Tarefa para processar estilos
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa para construir o projeto
const build = gulp.parallel(styles, images);

// Exporta as tarefas
exports.default = build; // Tarefa padrão
exports.build = build; // Tarefa build
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
};
