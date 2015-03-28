Router.configure({
	notFoundTemplate: 'notFound',
	// loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'home',
	fastRender: true,
	waitOn: function() {
		return Meteor.subscribe('work')
	},
	onBeforeAction: function() {
		document.title = "Logan Sparlin"
		if(Meteor.user()) {
			this.render('home');
			this.render('mainHeader', {to: 'header'})
		}
		else {
			this.render('landing');
		}
	},
	action: function() {
		GAnalytics.pageview("Home")
	},
	yieldTemplates: {
		'landingHeader': {to: 'header'}
	}
});