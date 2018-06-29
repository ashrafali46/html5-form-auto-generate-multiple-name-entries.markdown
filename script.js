$(document).ready(function () {
	var labelPerson = "Delegate";
	var htmlFormSection = "<div id='FormSection{Person}'><h5 class='left-align teal-text' style='padding-top:20px;'> <span id='Label{Person}'>{labelPerson}</span></h5><div class='input-field col s12'> <i class='material-icons prefix'>account_circle</i> <input id='{Person}_Name' type='text' name='{Person}_Name' class='validate' required='' aria-required='true'> <label for='{Person}_Name'>Name</label></div><div class='input-field col s12'> <i class='material-icons prefix'>picture_in_picture</i> <input id='{Person}_Pid' type='text' name='{Person}_Pid' class='validate' required='' aria-required='true'> <label for='{Person}_Pid'>Personal ID</label></div><div class='input-field col s12'> <i class='material-icons prefix'>assignment_ind</i> <input id='{Person}_Oid' type='text' name='{Person}_Oid' class='validate' required='' aria-required='true'> <label for='{Person}_Oid'>Organization ID</label></div><div class='input-field col s12'> <i class='material-icons prefix'>work</i> <select id='{Person}_Position' name='{Person}_Position'><option value='' disabled selected>Position</option><option value='Head'>Head</option><option value='Vice'>Vice</option><option value='Deputy'>Deputy</option><option value='Secretary'>Secretary</option><option value='Others'>Others</option> </select></div><div class='file-field input-field col s12'><div class='btn yellow accent-4'> <span>Picture</span> <input id='{Person}_File' name='{Person}_File' type='file'></div><div class='file-path-wrapper'> <input class='file-path validate' type='text' placeholder='Select Picture'></div></div></div>";
	var totalPerson = 8;
	for (i = 1; i < totalPerson + 1; i++) { /*create a unique label*/
		var newLabelPerson = labelPerson.concat(" ", i); /*create unique id */
		var newIdPerson = "Person" + i; /*replace id placeholders */
		var regex = new RegExp('{Person}', 'g');
		var newHtmlFormSection = htmlFormSection;
		newHtmlFormSection = newHtmlFormSection.replace('{labelPerson}', newLabelPerson);
		newHtmlFormSection = newHtmlFormSection.replace(regex, newIdPerson);
		$('#FormPerson').append(newHtmlFormSection);
	}
	$('#FormPerson').append("<div class='btn btn-large waves-effect waves-light' id ='send' name='send'>Send<i class='material-icons right'>send</i></div>");
	$('select').material_select();
	$("#send").click(function (event) {
		var $inputs = $('#FormPerson').find("input, select");
		if (isEmpty($inputs)) {
			alert("Please fill all the fields.")
		} else {
			alert("Sending now...")
		}
	});
});

function isEmpty($inputs) {
	var check = false;
	$.each($inputs, function (key, item) {
		if (item.value == "") {
			check = true
		}
	});
	return check;
}