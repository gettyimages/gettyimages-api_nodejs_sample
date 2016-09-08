var api = require("gettyimages-api");
// Specifying only the API Key and Secret will force the SDK to use the
// Client Credentials grant 
// http://developers.gettyimages.com/api/docs/v3/oauth2.html#client-credentials-flow


var creds = { apiKey: process.env.GETTY_API_KEY, apiSecret: process.env.GETTY_API_SECRET };
var client = new api(creds);
client.search().images().withPage(1).withPageSize(1).withPhrase('beach')
    .execute((err, response) => {
        if (err) throw err
        console.log(JSON.stringify(response.images[0]));
        client.images().withId(response.images[0].id).withResponseField("detail_set").execute((err, response) => {
            console.log(JSON.stringify(response.images[0], null, 2));
        });
    });