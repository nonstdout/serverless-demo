addEventListener("fetch", (event) => {
    const response = new Response(
        JSON.stringify({ message: "Hi!" }),
        {
            status: 200,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "*"
            },
        },
    );
    event.respondWith(response);
});
