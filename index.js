addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    if (request.method === "POST") {
        let send_email = new Request("https://api.mailchannels.net/tx/v1/send", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify({
                "personalizations": [{
                    "to": [{
                        "email": TO_EMAIL,
                    }],
                    "dkim_domain": "lafeedescailloux.fr",
                    "dkim_selector": "mailchannels",
                    "dkim_private_key": DKIM_PRIVATE_KEY
                }],
                "from": {
                    "email": "contact@lafeedescailloux.fr",
                    "name": "Formulaire de contact",
                },

                "subject": "Test Subject",
                "content": [{
                    "type": "text/plain",
                    "value": "Test message content",
                }],
            }),
        });

        const response = await fetch(send_email);
        return new Response("", {
            status: response.status,
            statusText: response.statusText
        });
    }
    return Response.redirect("https://lafeedescailloux.fr/", 301);
}
