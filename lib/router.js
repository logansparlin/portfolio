Router.configure({
	notFoundTemplate: 'notFound',
	// loadingTemplate: 'loading',
	layoutTemplate: 'layout'
});

Router.route('/', {
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
	yieldTemplates: {
		'landingHeader': {to: 'header'}
	}
});