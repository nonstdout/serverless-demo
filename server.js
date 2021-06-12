addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});


async function handleRequest(request) {

    const contentType = request.headers.get("content-type");
    console.log(request.headers)
    const responseInit = {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
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
    const json = await request.json();
    console.log(json)
    return new Response(JSON.stringify({ json }, null, 2), responseInit);
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
