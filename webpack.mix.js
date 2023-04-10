/* eslint-disable no-undef */
// require('mix-html-builder')
const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.extract({
//     to: 'public/' + output_js + '/vendor.js',
// })
// mix.extract(['vue', 'vue-i18n', 'vue-router', 'vuex'], output_js + '/vue-pkg')
// mix.extract(['vue-toastr'], output_js + '/vue-toastr')
// mix.extract(['vue-tour'], output_js + '/vue-tour')
// mix.extract(['vuelidate'], output_js + '/vuelidate')
// mix.extract(['element-ui'], output_js + '/element-ui')
// mix.options({ runtimeChunkPath: output_js })

mix.js('resources/app/app.js', 'public/app/js').vue()
mix.sass('resources/app/sass/app.scss', 'public/app/css')
mix.version()
mix.sourceMaps()
