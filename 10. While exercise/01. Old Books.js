function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index++];
    let currentBook = input[index++];
    let bookCount = 0;
    let isFound = false;

    while (currentBook !== "No More Books") {

        if (currentBook === favoriteBook) {
            isFound = true;
            break;
        }
        bookCount++;
        currentBook = input[index++];
    }

    if (isFound) {
        console.log(`You checked ${bookCount} books and found it.`);
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCount} books.`);
    }
}

// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// oldBooks(["The Spot",
//     "Hunger Games",
//     "Harry Potter",
//     "Torronto",
//     "Spotify",
//     "No More Books"
// ]);
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
]);