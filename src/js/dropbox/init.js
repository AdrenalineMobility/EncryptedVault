var client = new Dropbox.Client({ key: "4gzhxz1s5q22l0m" });
client.authDriver(new Dropbox.AuthDriver.Chrome({
    receiverPath: "html/dropbox/chrome_oauth_receiver.html"}));

function signin() {
    console.log('Click!');
    client.authenticate(function(error, client) {
        if (error) {
            // Replace with a call to your own error-handling code.
            //
            // Don't forget to return from the callback, so you don't execute the code
            // that assumes everything went well.
            return console.log(error);
        }

        // Replace with a call to your own application code.
        //
        // The user authorized your app, and everything went well.
        // client is a Dropbox.Client instance that you can use to make API calls.
        console.log(client);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("signin").addEventListener('click', signin);
});
