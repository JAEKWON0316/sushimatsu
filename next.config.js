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
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.kakao.com *.daumcdn.net; connect-src 'self' *.kakao.com *.daumcdn.net; img-src 'self' data: blob: *.kakao.com *.daumcdn.net; style-src 'self' 'unsafe-inline' *.kakao.com *.daumcdn.net; frame-src 'self' *.kakao.com *.daumcdn.net;"
          }
        ],
      },
    ];
  },
}

module.exports = nextConfig 