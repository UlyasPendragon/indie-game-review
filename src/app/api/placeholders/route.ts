import { NextRequest, NextResponse } from 'next/server';

// This API route returns colored placeholder images for development
export async function GET(request: NextRequest) {
  // Get the image name from the URL
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name') || 'placeholder';
  const width = parseInt(searchParams.get('width') || '300');
  const height = parseInt(searchParams.get('height') || '200');
  
  // Create a simple SVG placeholder with the name
  const colors: Record<string, string> = {
    'hollow-knight': '#262B44',
    'celeste': '#4D65B4',
    'undertale': '#4B1D52',
    'stardew-valley': '#60AB9A',
    'default': '#1a1a2e', // Use the retro dark primary color
  };

  const bgColor = colors[name.split('.')[0]] || colors.default;
  const textColor = '#ffffff';
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="${textColor}">
        ${name.split('.')[0]}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
} 