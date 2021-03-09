function browserHistory(obj, strArr) {
    let history = obj;
    let actions = strArr;
    for (let line of actions) {
        if (line.includes("Open")) {
            let application = line.split(" ")[1];
            history["Open Tabs"].push(application);
            if (!history["Browser Logs"].includes(application)) {
                history["Browser Logs"].push(line);
            }
        }
        else if (line.includes("Close")) {
            let application = line.split(" ")[1];
            if (history["Open Tabs"].includes(application)) {
                history["Open Tabs"].splice(application, 1);
                history["Recently Closed"].push(application);
                if (!history["Browser Logs"].includes(application)) {
                    history["Browser Logs"].push(line);
                }
            }
        }
        else if (line.includes("Clear History and Cache")){
            history["Open Tabs"] = [];
            history["Recently Closed"] = [];
            history["Browser Logs"] = [];
        }
    }
        console.log(`${history["Browser Name"]}`);
        console.log(`Open Tabs: ${history["Open Tabs"].join(", ")}`);
        console.log(`Recently Closed: ${history["Recently Closed"].join(", ")}`);
        console.log(`Browser Logs: ${history["Browser Logs"].join(", ")}`);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],

    "Recently Closed": ["Yahoo", "Gmail"],

    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)
// console.log('-----------------');
// browserHistory({"Browser Name":"Mozilla Firefox",
// "Open Tabs":["YouTube"],
// "Recently Closed":["Gmail", "Dropbox"],
// "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
// ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
// )