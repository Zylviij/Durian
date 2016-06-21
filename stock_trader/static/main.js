$( function() {
	$( "#error-box" ).prop("checked", false);

	$( "#error-box" ).change( function() {
		if ( $( "#error-box" ).is( ":checked" ) ) {
			$( ".error-log" ).show() // .css("display", "inline");
		} else {
			$( ".error-log" ).hide() // .css("display", "none");
		}
	} )

	$( "#user-info-box" ).prop("checked", false);

	$( "#user-info-box" ).change( function() {
		if ( $( "#user-info-box" ).is( ":checked" ) ) {
			$( ".user-info-table" ).show() // .css("display", "inline");
		} else {
			$( ".user-info-table" ).hide() // .css("display", "none");
		}
	} )
} );

/*
var httpRequest;

function makeRequest(url) {
	httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('GET', 'static/test.html');
	httpRequest.send();
}

function alertContents() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		if (httpRequest.status === 200) {
			alert(httpRequest.responseText);
		} else {
			alert('There was a problem with the request.');
		}
	}
}
*/