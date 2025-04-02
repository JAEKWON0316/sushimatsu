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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.kakao.com *.daumcdn.net *.youtube.com; connect-src 'self' *.kakao.com *.daumcdn.net *.youtube.com; img-src 'self' data: blob: *.kakao.com *.daumcdn.net *.youtube.com img.youtube.com; style-src 'self' 'unsafe-inline' *.kakao.com *.daumcdn.net; frame-src 'self' *.kakao.com *.daumcdn.net www.youtube.com youtube.com;"
          }
        ],
      },
    ];
  },
}

module.exports = nextConfig 