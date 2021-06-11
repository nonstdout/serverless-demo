addEventListener("fetch", (event) => {
    const response = new Response(
        JSON.stringify({ message: "couldn't process your request" }),
        {
            status: 200,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            },
        },
    );
    console.log(response)
    event.respondWith(response);
});
