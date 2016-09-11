module.exports = function (config) {
  config.set({

    basePath: '',

    files: [],

    proxies: {},

    jspm: {
      config: 'config.js',
      packaged: 'jspm_packages/system.js',
      serveFiles: [
        'src/*'
      ],
      loadFiles: [
        'src/*spec.js'
      ]
    },

    autoWatch: true,

    frameworks: ['jspm', 'jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jspm',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  })
}

