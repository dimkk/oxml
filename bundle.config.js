/**
 * Created by Dima on 05.05.2015.
 */
module.exports = {
    bundle: {
        oxml: {
            scripts: [
                './src/**/*js'
            ],
            options: {
                uglify: true,
                rev: false,
                fileName:'oxml'
            }
        }
    }
};