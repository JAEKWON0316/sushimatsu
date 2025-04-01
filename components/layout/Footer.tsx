"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold mr-2">스시마츠</div>
              <div className="text-sm bg-red-600 px-2 py-1 rounded">SUSHI MATSU</div>
            </div>
            <p className="text-gray-400">최고의 재료로 만든 프리미엄 스시 브랜드</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">회사 정보</h3>
            <p className="text-gray-400 mb-2">상호명: 스시마츠</p>
            <p className="text-gray-400 mb-2">대표: 이일</p>
            <p className="text-gray-400 mb-2">주소: 충남 홍성군 홍북읍 청사로174번길 25 2층</p>
            <p className="text-gray-400">전화: 0507-1380-5336</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const home = document.getElementById('home')
                    if (home) home.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const about = document.getElementById('about')
                    if (about) about.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  브랜드 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const menu = document.getElementById('menu')
                    if (menu) menu.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  메뉴 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const franchise = document.getElementById('franchise')
                    if (franchise) franchise.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  가맹 문의
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} 스시마츠. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
