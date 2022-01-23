/*

    Marco Diaz Moore, 2022

*/

/*
    Todo:
    - Capture Downloaded file path
    - Run hashing algorithms over file and present to user
    - Copy Hash to Clipboard button on notification

*/

function sendNotification(titleInput, messageInput){
    chrome.notifications.create({
        type: 'basic',
        iconUrl: './content/DemoIcon.jpg',
        title: titleInput,
        message: messageInput,
        priority: 2
    })
}

let downloadNames = {};
downloadNames.push
function receivedFile(downloadItem){
    sendNotification(downloadNames[downloadItem.id][0], `MD5 Hash: 12345678`);
    console.log(`Downloaded file: ${downloadNames[downloadItem.id][0]} with the path ${downloadNames[downloadItem.id][1]}`);
}

function init(){
    console.log("Chrome Hash Computing extension loaded!");
    sendNotification("Chrome Hash Computing", "Loaded!");
    chrome.downloads.onChanged.addListener(function(downloadItem){
        if(downloadItem["state"] && downloadItem["state"]["current"] == "complete"){
            receivedFile(downloadItem);
        }else if(downloadItem["totalBytes"]){
            downloadNames[downloadItem.id].push(downloadItem["filename"]["current"]);
        }
    });

    chrome.downloads.onDeterminingFilename.addListener(
        function(downloadItem){
            console.log(downloadItem);
            downloadNames[downloadItem.id] = [downloadItem["filename"]]
        }
    )

}

init();