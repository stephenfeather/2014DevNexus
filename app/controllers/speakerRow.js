var args = arguments[0] || {};
//console.log(args);

// Assign data to our objects
$.speakerImage.image = '/images/speakers/'+args.image;
$.speakerName.text = args.first+ ' ' +args.last;
$.bio.text = args.bio;
$.tableRow.data = args;