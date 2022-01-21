/*

    Marco Diaz Moore, 2022

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

function init(){
    console.log("Chrome Hash Computing extension loaded!");
    sendNotification("Chrome Hash Computing", "Loaded!");
}

init();