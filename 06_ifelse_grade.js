function voteEligiblity(age) {

    if (age == null || age == undefined) {
        console.log(`age ${age}: Invalid data`);

    } else {
        if (age <= 0 || age > 120) {
            console.log(`age ${age}: Invalid data`);

        } else {
            if (age < 18) {
                console.log(`age ${age}: not eligible for vote`);
            } else {
                console.log(`age ${age}: You are eligible`);
            }
        }

    }
}
voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(8);
voteEligiblity(20);
voteEligiblity(-10);
voteEligiblity(200);
voteEligiblity(0);
voteEligiblity(undefined);
voteEligiblity(null);