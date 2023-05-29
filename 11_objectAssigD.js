let professor = {
    name: "Kirti",
    gender: "F",
    age: "40",
    college: "ISB&M COE",
    department: "AIML",
    degrees: {
        engineering: "CSE",
        PG: "MCS",
        PHD: "Adv Computing",
        Doctorate: "Philosophy"
    },

    getDegrees: function() {
        let str = `${this.degrees.engineering},${this.degrees.PG},${this.degrees.PHD},${this.degrees.Doctorate}`;
        console.log(`Teacher degrees are total degrees are: ${str}`);

    }
}
console.log(`Properties of object professor are: ${ professor.name }, ${ professor.gender }, ${ professor.age }, ${ professor.college }, ${ professor.department }`);
console.log("Nested object degree are:");
console.log(professor.degrees);

const certificates = ["Hacker Rank Participation", "Certificate in IFE Course", "certificate in Adv Programming"];
console.log("Array of certificates is:");
console.log(certificates);
professor.getDegrees();
professor.totalExperience = "14 years";
console.log(`Newly added property for object professor for experience is:${professor.totalExperience}`);
certificates.push("Oracle Certified");
var lastElement = certificates[certificates.length - 1];
console.log(`Last element of araay certificates is:${lastElement}`);