Package.describe({
  name: 'ondkloss:highstock',
  summary: 'Wrapper for Highstock with some additional modules',
  version: '0.0.1',
  git: 'https://github.com/Ondkloss/meteor-highstock.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use('jquery');

    api.addFiles([
    	// Core
    	'lib/highstock.js',
    	// Extra types
    	'lib/highcharts-more.js',
    	'lib/highcharts-solid-gauge.js',
    ], 'client');
});