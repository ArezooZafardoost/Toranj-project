export async function apiCall(url, body, method = "GET") {
    try {
    const res = await fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : null,
    });
    const data = await res.json();
    return data;
    } catch (error) {
    return error;
    }
    }