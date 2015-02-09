$(document).ready(function() {

// initialization
	$('section,header,nav,#betaAlert').hide();
	$('#login').show();

/* all modals
	$('.modalClose').click(function(){
		$('.modal').hide();
	});	
*/

// login
	$('#register').click(function(){
		$('#betaAlert').show();
	});	
	$('#betaAlertClose').click(function() {
		$('#betaAlert').hide();
	});
	$('#signIn').click(function(){
		$('#login').hide();
		showNewsfeed();
	});		

// search 
	$('#headerSearch').click(function(){
		$('.search,.filter,#composeMessage').toggle();
	});
	$('.searchSubmit').click(function(){
		$('.searchResults,#newsBack,#libraryBack,#inboxBack').show();
		$('.search,.filter,#headerSearch').hide();
	});

// show individual posts
	$('.item h2, .item img').click(function() {
		$('html, body').animate({scrollTop:0},0);
		$('h2').css('color', '#333')
		$(this).parent().siblings().hide();
		$('#newsBack,#libraryBack,.itemText,.itemDescription').show();
	});

// newsfeed
	$('#newsNav,#newsBack,#newsMessageSentClose').click(function(){
		showNewsfeed();
	});

	// contact form
	$('.contactIcon').click(function() {
		$(this).siblings().toggle().removeClass('contactCurrent');
		$('.message').hide();
	});
	$('.contactMessage').click(function() {
		$(this).addClass('contactCurrent').siblings().removeClass('contactCurrent');
		$(this).parent().next().show().find('textarea[name$="message"]').attr('placeholder', 'Enter your message.');
	});
	$('.contactEditRequest').click(function() {
		$(this).addClass('contactCurrent').siblings().removeClass('contactCurrent');
		$(this).parent().next().show().find('textarea[name$="message"]').attr('placeholder', 'John Doe asked for permission to edit this item.');
	});
	$('.contactFollowRequest').click(function() {
		$(this).addClass('contactCurrent').siblings().removeClass('contactCurrent');
		$(this).parent().next().show().find('textarea[name$="message"]').attr('placeholder', 'John Doe would like to follow your work.');
	});
	$('.messageAddUser').click(function() {
		$('input[name$="user"]').attr('placeholder', 'Bob Smith');
		$(this).parent().next().show();
	});
	$('.messageSend').click(function() {
		$('html, body').animate({scrollTop:0},0);
		$('#newsMessageSent').show();
	});

// library
	$('#libraryNav,#libraryBack').click(function(){
		showLibrary();
	});	

// create
	$('#createNav,#createBack,.cancel,#noteAddedClose,#photoAddedClose,#fileAddedClose').click(function(){
		showCreate();
	});	
	$('.noteLink').click(function(){
		$('.createLink').hide();
		$('#createNote,#createBack').show();
		$('h1').text('Create: Note');	
	});		
	$('.photoLink').click(function(){
		$('.createLink').hide();
		$('#createPhoto,#createBack').show();
		$('h1').text('Create: Photo');	
	});	
	$('.fileLink').click(function(){
		$('.createLink').hide();
		$('#createFile,#createBack').show();
		$('h1').text('Create: File');	
	});
	$('.submit').click(function(){
		$('html, body').animate({scrollTop:0},0);
		$('.modal').show();
	});	

// inbox
	$('#inboxNav,#inboxBack,#inboxMessageSentClose').click(function(){
		showInbox();
	});	
	$('#composeMessage').click(function() {
		$('.item,#composeMessage,#headerSearch').hide();
		$('#newMessage,#inboxBack').show();
		$('h1').text('New Message');	
	});
	$('#inbox .search').click(function() {
		$('h1').text('Inbox');			
	});

// profile
	$('#profileNav,#profileBack').click(function(){
		showProfile();
	});	
	$('#logout').click(function() {
		$('section,header,nav,#betaAlert').hide();
		$('#login').show();
	});

// functions

	// newsfeed initialization
	function showNewsfeed() {
		$('section,.search,.searchResults,#newsBack,.itemDescription,.message,.modal').hide();
		$('header,nav,#headerSearch,#news,.filter,.item').show();
		$('.navItem').removeClass('current');
		$('#newsNav').addClass('current');
		$('li.contactIcon').siblings().hide();
		$('h1').text('Newsfeed');	
		$('.item h2').css('color', '#0072bc')
	}

	// library initialization
	function showLibrary() {
		$('section,.search,.searchResults,#libraryBack,.itemDescription').hide();
		$('header,nav,#headerSearch,#library,.filter,.item').show();
		$('.navItem').removeClass('current');
		$('#libraryNav').addClass('current');
		$('h1').text('Library');	
		$('.item h2').css('color', '#0072bc')
	}

	// library initialization
	function showCreate() {
		$('section,#headerSearch,.modal,#createNote,#createPhoto,#createFile,#createBack').hide();
		$('header,nav,#create,.createLink').show();
		$('.navItem').removeClass('current');
		$('#createNav').addClass('current');
		$('h1').text('Create');	
	}

	// inbox initialization
	function showInbox() {
		$('section,.search,.searchResults,#libraryBack,#newMessage,#inboxBack,#inboxMessageSent').hide();
		$('header,nav,#headerSearch,#inbox,#composeMessage,.item').show();
		$('.navItem').removeClass('current');
		$('#inboxNav').addClass('current');
		$('h1').text('Inbox (2)');	
	}

	// profile initialization
	function showProfile() {
		$('section,.search,#headerSearch,.searchResults,#libraryBack').hide();
		$('header,nav,#profile,.filter').show();
		$('.navItem').removeClass('current');
		$('#profileNav').addClass('current');
		$('h1').text('Profile');	
	}
});