var checkEligiblity = function(gradScore, hscScore, sscScore, candidateName) {

    var result = ((gradScore >= 70) || (hscScore >= 80) || (sscScore >= 90)) ? `Congtares ${candidateName} you are eligible for TCS interview` : `${candidateName} unfortunately you are not eligible for interview`;
    console.log(`${result}`);
}
checkEligiblity(80, 86, 90, "Manisha");
checkEligiblity(70, 65, 55, "Shweta");
checkEligiblity(60, 79, 88, "Madhuri");