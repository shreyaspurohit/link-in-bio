import {vCardGzip } from "@/*/../../shrey-link-in-bio";

export async function GET() {
    const binaryString = Buffer.from(vCardGzip, 'base64');
  return new Response(binaryString, {
    status: 200,
    headers: { 'Content-Type': 'application/zip', 'Content-Transfer-Encoding': 'binary', 'Content-Disposition': 'inline; filename="contact.vcf.zip"' }
  });
}
