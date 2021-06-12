addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});


async function handleRequest(request) {

    const contentType = request.headers.get("content-type");
    console.log(await request)
    const responseInit = {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "Origin": "*"
        },
    };
    // Handle JSON data.
    // if (contentType.includes("application/json")) {
    //     console.log(json)
    // }
    // const json = await request.json();
    // console.log(json)
    return new Response({ status: 200, headers: { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "http://localhost:5000", } });
    // const response = new Response(
    //     JSON.stringify({ message: "Hi!" }),
    //     {
    //         status: 200,
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "*",
    //             "Access-Control-Allow-Headers": "*"
    //         },
    //     },
    // );
    // event.respondWith(response);
}
// );
