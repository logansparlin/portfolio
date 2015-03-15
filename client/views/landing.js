Template.landing.events({
	'click .menu--closed': function() {
		var header = $('.main-header'),
			top = $('.menu-icon .bar:first-of-type'),
			middle = $('.menu-icon .bar:nth-child(2)'),
			bottom = $('.menu-icon .bar:last-of-type');

		TweenMax.to(header, 0.5, {visibility: 'visible', opacity: 1, autoRound: false, ease: Quart.easeOut});
		TweenMax.to(middle, 0.4, {x:-50, autoRound: false, ease: Quart.easeOut});
		TweenMax.to(top, 0.5, {rotation: 45, y: 6, autoRound: false, ease: Quart.easeOut});
		TweenMax.to(bottom, 0.5, {rotation: -45, y: -7, autoRound: false, ease: Quart.easeOut});
		$('body').removeClass('menu--closed').addClass('menu--open')
		$('.menu-icon').removeClass('menu--closed').addClass('menu--open');
	},
	'click .menu--open': function() {
		var header = $('.main-header'),
			top = $('.menu-icon .bar:first-of-type'),
			middle = $('.menu-icon .bar:nth-child(2)')
			bottom = $('.menu-icon .bar:last-of-type');
		function hide() {
			header.css('visibility', 'hidden')
		}
		TweenMax.to(header, 0.5, {opacity: 0, autoRound: false, ease: Quart.easeOut, onComplete: hide});
		TweenMax.to(middle, 0.3, {x:0, autoRound: false, ease: Quart.easeOut});
		TweenMax.to(top, 0.5, {rotation: 0, y: 0, autoRound: false, ease: Quart.easeOut});
		TweenMax.to(bottom, 0.5, {rotation: 0, y: 0, autoRound: false, ease: Quart.easeOut});
		$('body').removeClass('menu--open').addClass('menu--closed')
		$('.menu-icon').removeClass('menu--open').addClass('menu--closed');
	},
	'click .pager-link:not(.link--active)': function(ev) {
		ev.preventDefault()
		var changeData = function() {
			var work = $('.work-container.active')
			$('.pager-link').removeClass('link--active')
			$(ev.target).addClass('link--active')
			var currentIndex = Session.get('selectedIndex')
			var selectedIndex = parseInt($(ev.target).attr('data-index'))
			$('.work-container').removeClass('active')
			$('body').next(work, showNew);
			function showNew() {
				var newSlide = $('.work-container[data-index="' + selectedIndex + '"')
					newSlide.addClass('active')
					TweenMax.fromTo(newSlide, 0.5, {opacity:0, y:'-40%', display:'block'}, {opacity: 1, y:'-50%', autoRound: false, ease: Expo.ease})
			}
			Session.set('selectedIndex', selectedIndex)
		}
		changeData()
	}
});

Template.landing.helpers({
	work : function() {
		var work = Work.find()
		return work
	}
});

Template.landing.rendered = function() {
	$()
}

Template.landing.rendered = function() {
	$('.pager-link:first-of-type').addClass('link--active')
	Session.set('selectedIndex', 1);
	var index = Session.get('selectedIndex')
	$('.work-container').each(function() {
		if($(this).attr('data-index') == index) {
			var _this = $(this)
			_this.addClass('active')
			_this.css('opacity', 1)

		}
	});
	$('.pager-link').each(function() {
		var width = $(window).width()
		var half = (width / 2)
		var left = $(this).offset().left
		if(left >= half) {
			$(this).addClass('dark')
		}
	});
	this.autorun(function() {
		var data = Session.get('selectedIndex')
		index = parseInt(Session.get('selectedIndex'))
	});


	// Previous and Next
	var detectDirection = function(event, delta) {
		var length = Work.find().count()
		if(delta < 0) {
			// next
			Session.set('selectedIndex', (index + 1))
			if(index <= (length - 1)) {
				newIndex = (index + 1)
			} else {
				Session.set('selectedIndex', 1)
				newIndex = 1
			}
			var currentSlide = $('.work-container.active')
			$('body').next(currentSlide, showNew)
			function showNew() {
				$('.link--active').removeClass('link--active')
				$('.pager-link[data-index="' + newIndex + '"').addClass('link--active')
				var newSlide = $('.work-container[data-index="' + newIndex + '"')
				newSlide.addClass('active')
				TweenMax.fromTo(newSlide, 0.5, {opacity:0, y:'-40%', display:'block'}, {opacity: 1, y:'-50%', autoRound: false, ease: Expo.ease})
			}
		}
		if(delta > 0) {
			// previous
			Session.set('selectedIndex', (index - 1))
			if(index >= 2) {
				newIndex = (index - 1)
			} else {
				Session.set('selectedIndex', length)
				newIndex = length
			}
			var currentSlide = $('.work-container.active')
			$('body').next(currentSlide, showNew)
			function showNew() {
				$('.link--active').removeClass('link--active')
				$('.pager-link[data-index="' + newIndex + '"').addClass('link--active')
				var newSlide = $('.work-container[data-index="' + newIndex + '"')
				newSlide.addClass('active')
				TweenMax.fromTo(newSlide, 0.5, {opacity:0, y:'-40%', display:'block'}, {opacity: 1, y:'-50%', autoRound: false, ease: Expo.ease})
			}
		}
	}
	var changeData = _.debounce(detectDirection, 50, true);
	$('body').on('mousewheel', changeData)
}

Meteor.startup(function() {
	$.fn.extend({
		next: function(el, callback) {
			TweenMax.fromTo(el, 0.5, {opacity:1,  y:'-50%'}, {opacity:0, y:'-60%', autoRound: false, force3D:true, ease: Expo.ease, display:'none', onComplete:callback})
		},
		previous: function() {

		}
	})
})