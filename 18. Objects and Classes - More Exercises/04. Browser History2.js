function browser() {
    let index = 0;
    let input = arguments;
    let currentBrowserState = input[index++];
    let procedures = input[index++];

    procedures.forEach((procedure) => {
        procedure = procedure.split(" ");
        let keyWord = procedure.shift();
        let remaining = procedure.join(" ");
        procedure.unshift(keyWord);

        switch (keyWord) {
            case "Open":
                currentBrowserState["Open Tabs"].push(remaining);
                currentBrowserState["Browser Logs"].push(procedure.join(" "));
                break;
            case "Close":
                currentBrowserState["Open Tabs"].forEach((tab) => {
                    if (tab === remaining) {
                        currentBrowserState["Open Tabs"].splice(
                            currentBrowserState["Open Tabs"].indexOf(remaining),
                            1
                        );
                        currentBrowserState["Recently Closed"].push(remaining);
                        currentBrowserState["Browser Logs"].push(procedure.join(" "));
                        return;
                    }
                });
                break;
            case "Clear":
                currentBrowserState["Open Tabs"] = [];
                currentBrowserState["Recently Closed"] = [];
                currentBrowserState["Browser Logs"] = [];
                break;
        }
    });

    console.log(`${currentBrowserState["Browser Name"]}`);
    console.log(`Open Tabs: ${currentBrowserState["Open Tabs"].join(", ")}`);
    console.log(
        `Recently Closed: ${currentBrowserState["Recently Closed"].join(", ")}`
    );
    console.log(
        `Browser Logs: ${currentBrowserState["Browser Logs"].join(", ")}`
    );
}

browser({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],

    "Recently Closed": ["Yahoo", "Gmail"],

    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)
console.log('-----------------');
browser({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)