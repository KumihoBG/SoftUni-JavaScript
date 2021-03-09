function browserHistory() {
    let index = 0;
    let input = arguments;
    let history = input[index++];
    let actions = input[index++];
    for (let line of actions) {
        let command = line.split(" ")[0];
        let application = line.split(" ")[1];
        switch (command) {
            case "Open":
                history["Open Tabs"].push(application);
                history["Browser Logs"].push(line);
                break;
            case "Close":
                history["Open Tabs"].forEach((tab) => {
                    if (tab === application) {
                        history["Open Tabs"].splice(
                            history["Open Tabs"].indexOf(application),
                            1
                        );
                    }
                });
                history["Recently Closed"].push(application);
                history["Browser Logs"].push(line);
                break;
            case "Clear":
                history["Open Tabs"] = [];
                history["Recently Closed"] = [];
                history["Browser Logs"] = [];
                break;
        }
    }
    console.log(`${history["Browser Name"]}`);
    console.log(`Open Tabs: ${history["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${history["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${history["Browser Logs"].join(", ")}`);
}

browserHistory({
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],

        "Recently Closed": ["Yahoo", "Gmail"],

        "Browser Logs": [
            "Open YouTube",
            "Open Yahoo",
            "Open Google Translate",
            "Close Yahoo",
            "Open Gmail",
            "Close Gmail",
            "Open Facebook",
        ],
    },

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
console.log("-----------------");
browserHistory({
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": [
            "Open Gmail",
            "Close Gmail",
            "Open Dropbox",
            "Open YouTube",
            "Close Dropbox",
        ],
    },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);