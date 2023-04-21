// Example: src/pages/api/profile.js
export async function post(params, request) {

    console.log("hi")

	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
