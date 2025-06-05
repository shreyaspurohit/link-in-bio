// Disable access to the root path
export async function GET() {
  return new Response('', {
    status: 307,
    headers: { 'location': process.env.ENC_IMMI_URL || 'https://shreyas.purohit.dev/', 'content-type': 'text/plain; charset=utf-8' }
  });
}
