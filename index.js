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
                    "dkim_private_key": "MIIEowIBAAKCAQEAvgwWDZYokF0amVoZANOq5jO6ijmPeKb5ALf1L/ITsARzaQNDIHJooboroXRyPLF2AzdbmkquaLUNPn0VwgrV/rmUZLao00xZE2ugShGFgh9eT44xk4p5Oih2IMtOJDPDSfeaUp82/9NMSf1wlTLN5eBSKRsW3kz+V9fNsR0zOh4Ga4Pvm645qIC4i4Y8X3pZF7mez9QBq2KE8dxoL/C3EJh2WofN5ABNGeMDuhTlMBuF/5X0JCBt+LHxICzv43CxPe1joaHAuP5/Ng4AOpIJWJacJbXOiPKBZV4Pm1m7Hvjr8so3pAmO4+FmYtgttOC/IzcKWH+8Pv7MAnQNh9zSbQIDAQABAoIBAES4dhj/nTdmk0G0lKn54ChRuDhXTAvixNN/sYdez8OsOFdWuKU4+aDRgwlk5BISUYwkLlmCe8KdBWb9MCr0ZCEx1fj9G9scFnGxT0q5Pz+oPCAkWMTzI5bmHqEJIv5wQUOz5vfNXsPvEf0HSfiJYG6pSMxYYVKNIMN+44ASAP4YUbuI0gpHFcQFA5j3zxRKwgJcCqLR/+FSSHaeQolLgIW5YKQbONORS1mXtGvGDbANA6IKSgsejaK4ILFrHKR8abbIOi4/yyopoRqEm/5cs6qkWVHecupQ5p0vRmGtR229f0WbplXAEyhn78eQcaD3KtaV30E0PUFui80S+A/vH7kCgYEA49wNR6gqWm9wJFhY21bbD+oOHfVdPDPdzL1g8whgS/V0ZPwrJ/itnkualHUBIN3t3+fvjZEBcsn4lE8eHWGIVcsf82VlmrkBkVwTdgiznbKnCfB7K/9b1P72XdXaqJu0Rz3lS6O0gs/6kOZwz2mSOYn1odDID5SSRfbsx6tolUsCgYEA1YSRiZsNIRtZZH7udtUNZ4ABvZOG97pXb/gWgXPlF1RUuAPb9R2IO3IwsL09fgnFjvEbb2VgWbEHD6tb4yteD2gm2hh6h2sTjsPxyMDCEvzPZsHssk0Ng3qV5Bnu4428laLHc/gjsOuTFxWwtIFatZYi/WvqxAvM+j3szhgBvCcCgYEArw+OiGIz//0kDFhwFDxb25M4O14avrkejEFnbfEegt1XCosO4QvW4Ao3/h0Su9yl+GOqkXo5waZYvCE5Atu/MiL4LjjV4hSHltVGAmZXES6D1UgUac4sEK2+PIOkFexiimWMeBuTAPmnCZJyU3hJprlOpX7RZd8Aro4yhokztZcCgYBM6gxjPW9lVazF/tN4CxdhCUOXPuWHp6CHvR6eU1lbJg2+m+VITvMcNu5DPGhCVtLLwx7W6fXjWVnp0xiupJilhCc6uUaqMXBCJWObpZRDsr4jjgft0sPjcO091fmwDwa4AINIy0JQIQxDbJTS8SXz87l3AMD5Dicwnc4ID63QUQKBgBWf+YPsAeETP4PE6+EMkt5TRMBT9n1+TzwgsJLv7MssHilL4oavrmrRRtItuapzBJL7oS0xZAP7mtZnU/lGx1yvo/eAFc8cXqmCKVUMIqz0g56W/DIE+kx7xt7LOPcHwRxM0DNivhzQemPdnNP3Ovyb1S4xX/LIVfMY2PcPkGo+"
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
