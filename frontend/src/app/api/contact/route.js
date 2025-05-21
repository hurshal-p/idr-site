export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    // Replace with your Django backend API URL
    const djangoApiUrl = 'http://localhost:8000/api/contact/';

    const djangoResponse = await fetch(djangoApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (!djangoResponse.ok) {
      const errorData = await djangoResponse.json();
      return new Response(JSON.stringify({ error: 'Django API error', details: errorData }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), { status: 500 });
  }
}
