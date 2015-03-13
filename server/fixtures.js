if(Work.find().count() === 0) {
	Work.insert({
		"index":1,
		"title":"Trendit",
		"type":"digital",
		"short_description":"This is the short description where there will be information about the project, the client, the type of work I did, etc.",
		"long_description":"long description",
		"year":"2013",
		"images": {
			"featuring_image":"",
			"thumbnail":""
		},
		"client":"self",
		"featured": true
	});
	Work.insert({
		"index":2,
		"title":"French's Inspirator",
		"type":"digital",
		"short_description":"This is the short description where there will be information about the project, the client, the type of work I did, etc.",
		"long_description":"long description",
		"year":"2015",
		"images": {
			"featuring_image":"",
			"thumbnail":""
		},
		"client":"French's Foodservice Compnay",
		"featured": true
	});
	Work.insert({
		"index":3,
		"title":"Starbucks Training Video",
		"type":"video",
		"short_description":"This is the short description where there will be information about the project, the client, the type of work I did, etc.",
		"long_description":"long description",
		"year":"2014",
		"images": {
			"featuring_image":"",
			"thumbnail":""
		},
		"client":"Starbucks",
		"featured": false
	});
	Work.insert({
		"index":4,
		"title":"Bailey & Morgan Hepler Wedding",
		"type":"photo",
		"short_description":"This is the short description where there will be information about the project, the client, the type of work I did, etc.",
		"long_description":"long description",
		"year":"2014",
		"images": {
			"featuring_image":"",
			"thumbnail":""
		},
		"client":"Bailey & Morgan Hepler",
		"featured": true
	});
}
