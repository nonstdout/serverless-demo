addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});


async function handleRequest(request) {
    // return new Response({ status: 200 });
}

