const headers = {
    "Access-Control-Allow-Origin": "https://lafeedescailloux.fr",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json"
}

async function handleRequest(request) {
    if (request.method === "POST") {
        const form_data = await request.json();

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

                "subject": form_data.subject,
                "content": [{
                    "type": "text/plain",
                    "value": form_data.message,
                }],
            }),
        });

        const response = await fetch(send_email);
        return new Response(null, {
            headers: {
                ...headers
            },
            status: response.status,
            statusText: response.statusText
        });
    }

    return new Response(null, {
        headers: {
            ...headers
        },
    });
}

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})
