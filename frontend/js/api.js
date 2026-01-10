const API_BASE_URL = 'http://localhost:5000';

export async function apiRequest(endpoint, method, body) {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(localStorage.getItem('token') && {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }),
        },
        body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'something went wrong');
    }

    return data;
}