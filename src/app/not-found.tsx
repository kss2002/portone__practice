import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <h1>찾을 수 없는 페이지입니다.</h1>
      <div>
        <button>
          <Link href="/">메인으로 돌아가기</Link>
        </button>
      </div>
    </>
  );
}
