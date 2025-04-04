/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'modo-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dapi.kakao.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.daumcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' *.kakao.com *.daumcdn.net; script-src 'self' 'unsafe-inline' 'unsafe-eval' dapi.kakao.com *.kakao.com *.daumcdn.net *.youtube.com; connect-src 'self' dapi.kakao.com *.kakao.com *.daumcdn.net *.youtube.com https://dapi.kakao.com; img-src 'self' data: blob: *.kakao.com *.daumcdn.net *.youtube.com img.youtube.com; style-src 'self' 'unsafe-inline' *.kakao.com *.daumcdn.net; frame-src 'self' *.kakao.com *.daumcdn.net www.youtube.com youtube.com;"
          }
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800'
          }
        ],
      },
      {
        source: '/v2/maps/sdk.js',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Accept'
          },
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ],
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: "/dapi.kakao.com/:path*",
        destination: "https://dapi.kakao.com/:path*"
      },
      {
        source: "/v2/maps/sdk.js",
        destination: "https://dapi.kakao.com/v2/maps/sdk.js"
      },
      {
        source: "/v2/maps/:path*",
        destination: "https://dapi.kakao.com/v2/maps/:path*"
      },
      {
        source: "/v2/:path*",
        destination: "https://dapi.kakao.com/v2/:path*"
      }
    ];
  },
}

module.exports = nextConfig 