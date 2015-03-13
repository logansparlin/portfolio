Meteor.publish('work', function() {
	return Work.find();
});