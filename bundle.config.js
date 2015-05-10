/**
 * Created by Dima on 05.05.2015.
 */
module.exports = {
    bundle: {
        oxml: {
            scripts: [
                'src/linq.js',
                'src/ltxml.js',
                'src/ltxml-extensions.js',
                'src/jszip.js',
                'src/jszip-load.js',
                'src/jszip-inflate.js',
                'src/jszip-deflate.js',
                'src/fileSaver.js',
                'src/openxml.js'
            ],
            options: {
                uglify: true,
                rev: false,
                fileName:'oxml'
            }
        }
    }
};