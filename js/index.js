// Taken from
// https://github.com/evgeni/qifi
// Author: Evgeni Golov
// MIT License
function escape_string (string) {
		var to_escape = ['\\', ';', ',', ':', '"'];
		var hex_only = /^[0-9a-f]+$/i;
		var output = "";
		for (var i=0; i<string.length; i++) {
				if($.inArray(string[i], to_escape) != -1) {
						output += '\\'+string[i];
				}
				else {
						output += string[i];
				}
		}
		if (hex_only.test(output)) {
				output = '"'+output+'"';
		}
		return output;
};
        
function generate() {

		var Litecoin = $('#Litecoin').val();
		var address = $('#address').val();
		var scan = $('#scan').val();
		var key = $('#key').val();

		var qrstring = escape_string(address);

		$('.print .Litecoin .text').text(Litecoin);
		$('.print .key .text').text(key);

		$('#qrcode').empty();
		$('#qrcode').qrcode({
			width: 500,
			height: 500,
			text: qrstring
		});
		
		$('.print .address .text').text(address);
		$('.print .scan .text').text(scan);

		print(); 
};
