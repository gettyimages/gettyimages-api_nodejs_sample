var api = require("gettyimages-api");
// Specifying only the API Key and Secret will force the SDK to use the
// Client Credentials grant 
// https://developers.gettyimages.com/docs/authorization/#client-credentials-grant

async function demo() {
    var creds = { apiKey: process.env.GETTY_API_KEY, apiSecret: process.env.GETTY_API_SECRET };
    var client = new api(creds);
    const searchResponse = await client.searchimagescreative().withPage(1).withPageSize(1).withSafeSearch(true).withPhrase("beach")
        .execute();
    console.log(JSON.stringify(searchResponse.images[0]));
    const detailResponse = await client.images().withId(searchResponse.images[0].id).withResponseField("detail_set").execute();
    console.log(JSON.stringify(detailResponse.images[0], null, 2));
}

demo();