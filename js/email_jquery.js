$(document).ready(function() {
$("#email_submit").click(function() {
var name = $("#email_name").val();
var email = $("#email_id").val();
var message = $("#email_message").val();
var contact = $("#contact").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || contact == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("php/contact_form.php", {
name1: name,
email1: email,
message1: message,
contact1: contact
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your Email has been received, We will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});