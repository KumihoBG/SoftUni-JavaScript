function emails(input) {
    let emailPattern = /((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/gi;

    for (let line of input) {
        if (line === "end") {
            break;
        }
        let match = line.match(emailPattern);
        if (match !== null) {
            for (let i = 0; i < match.length; i++) {
                let currentMail = match[i];
                console.log(currentMail);
            }
        }
    }
}

emails(['Please contact us at: support@github.com.', 'end']);
emails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);
emails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.']);