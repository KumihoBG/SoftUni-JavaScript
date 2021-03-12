function extractFile(string) {
    let file = string.split('\\').pop();
    let end = file.lastIndexOf(".");
    let fileName = file.slice(0, end);
    let fileExtension = file.slice(end + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx');