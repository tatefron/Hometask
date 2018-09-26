// Home №3
var name = prompt("Your name",  );
var years = prompt("How old are you", 18 );

if (confirm("Do you have a pet")) {
 var pet_name = prompt("What's pet's name", );
  console.log("Hello " + name + " How is " + pet_name + " do?");
}
else{
	console.log("Hello " + name + " Is it sad to live without a pet?");
}