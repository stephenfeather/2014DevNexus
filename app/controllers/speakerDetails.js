var args = arguments[0] || {};

function closeWindow(){
	$.navWindow.close();
}

$.speakerImage.image = '/images/speakers/'+args.image;
$.speakerName.text = args.first+ ' ' +args.last;
$.bio.text = args.bio;

if (args.twitter){
	var twitter = Ti.UI.createImageView({height: 32, width: 32, right: 5, image: '/images/twitter.jpg'});
	$.socialContainer.add(twitter);
}

if (args.linkedin){
	var linkedin = Ti.UI.createImageView({height: 32, width: 32, right: 5, image: '/images/linkedin.jpg'});
	$.socialContainer.add(linkedin);
}

if (args.google){
	var google = Ti.UI.createImageView({height: 32, width: 32, right: 5, image: '/images/google.jpg'});
	$.socialContainer.add(google);
}
