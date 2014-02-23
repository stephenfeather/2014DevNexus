
var tableData = []

// Load our presenter data from a file
var presenters = require('speakers');

// Lets load up some tablerows
for (var x=0, max=presenters.speakers.length; x< max; x++){
	var tableViewRow = Alloy.createController('speakerRow', presenters.speakers[x]).getView();
	tableData.push(tableViewRow);
}

$.table.setData(tableData);

function tableClick(e){
	var speakerDetailWindow = Alloy.createController('speakerDetails', e.row.data).getView();
	speakerDetailWindow.open();
}

$.index.open();
