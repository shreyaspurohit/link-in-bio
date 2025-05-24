// Disable access to the root path
export async function GET() {
  return new Response('', {
    status: 503,
    headers: { 'Connection': 'close' }
  });
}
