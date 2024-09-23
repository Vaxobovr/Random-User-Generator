let elDetails = document.querySelector('.details');
let elImgContainer = document.querySelector('.img-container');
let elGetUserBtn = document.getElementById('get-user-btn');

fetch('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
	.then(response => {
		response.json();
	})
	.then(data => {
		console.log(data);
	});
