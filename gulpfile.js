const { src, dest, watch, parallel } = require('gulp');

// CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

// Imagenes
const imagemin = require('gulp-imagemin');

// JavaScript
// const terser = require('gulp-terser-js');

function css( done ) {
    src('src/scss/**/*.scss')
        .pipe( sourcemaps.init() )
        .pipe( plumber()) // Plumber
        .pipe( sass() )
        .pipe( postcss([ autoprefixer(), cssnano() ]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css') )

    done();
}

function imagenes(done) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3 }) )
        .pipe( dest('build/img') )

    done()
}


function javascript( done ) {
    src('src/js/**/*.js')
        // .pipe( sourcemaps.init() )
        // .pipe(terser())
        // .pipe( sourcemaps.write('.'))
        .pipe(dest('build/js'))

    done();
}

function dev( done ) {
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/img/**/*', imagenes );
    watch('src/js/**/*.js', javascript);
    done()
}



exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.dev = parallel(imagenes, javascript,  dev);