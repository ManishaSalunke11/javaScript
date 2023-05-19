var interviewSelection = function selectionProcess(gradScore, hscScore, sscScore, candidateName) {
    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
        console.log(`Congtares ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`${candidateName} unfortunately you are not eligible for interview`);
    }
}
interviewSelection(80, 86, 90, "Manisha");
interviewSelection(70, 65, 55, "Vishakha");
interviewSelection(60, 79, 88, "Rahul");