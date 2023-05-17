function maleMarriageEligiblity(gender, age, boyName) {
    var name = boyName;
    console.log("Hey", name);
    var eligiblity = gender == "Male" && age >= 21 ? "you are eligible" : "You are not eligible";
    console.log(eligiblity);
}
maleMarriageEligiblity("Male", 25, "Billgates");
maleMarriageEligiblity("Male", 17, "Stew Jobs");

function femaleMarriageEligiblity(gender, age, girlName) {
    var name = girlName;
    console.log("Hey", name);
    var eligiblity = gender == "Female" && age >= 18 ? "you are eligible" : "You are not eligible";
    console.log(eligiblity);
}
femaleMarriageEligiblity("Female", 16, "Jenifer");
femaleMarriageEligiblity("Female", 27, "Malinda Gates");