var client = new Dropbox.Client({ key: "4gzhxz1s5q22l0m" });
client.authDriver(new Dropbox.AuthDriver.Chrome({
    receiverPath: "html/dropbox/chrome_oauth_receiver.html"}));

function signin() {
    client.authenticate(function(error, client) {
        if (error) {
            // Replace with a call to your own error-handling code.
            //
            // Don't forget to return from the callback, so you don't execute the code
            // that assumes everything went well.
            return console.log(error);
        }

        handleSignedIn();
    });
}

function handleSignedIn() {
    client.getAccountInfo(function(error, accountInfo) {
        if (error) {
            return console.log(error);  // Something went wrong.
        }
        $("#signin").hide();
        $("#signout").show();
        $("#signout").html("Sign out " + accountInfo.email || accountInfo.name);
        console.log("Hello, " + accountInfo.name + "!");
    });
}

client.authenticate({interactive: false}, function(error, client) {
    if (error) {
        return handleError(error);
    }
    if (client.isAuthenticated()) {
        // Cached credentials are available, make Dropbox API calls.
        handleSignedIn();
    } else {
        // show and set up the "Sign into Dropbox" button
        $("#signin").show();
    }
});

console.log("started...");

if (client.isAuthenticated()) {
    $("#signout").prop("value", "Sign out " + client.dropboxUid());
    console.log(client.dropboxUid());
}

$("#signin").click(signin);
$("#signout").click(function() {
    client.signOut();
    $("#signin").show();
    $("#signout").hide();
});

$("#upload").click(function() {
    client.writeFile("hello_world.txt", "Hello, world!\n", function(error, stat) {
        if (error) {
            return console.log(error);  // Something went wrong.
        }

        console.log("File saved as revision " + stat.revisionTag);
    });
});
