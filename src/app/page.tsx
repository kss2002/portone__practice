import Link from 'next/link';
import Image from 'next/image';

export default function Homepage() {
  return (
    <>
      <div className="container">
        <Image src="/favicon.png" alt="logo" width="60" height="60" />
        <h1 className="title">포트원 결제</h1>
        <p className="sub_title">포트원 결제 샘플입니다.</p>
        <button>
          <Link href="/ui">결제하러 가볼까요?</Link>
        </button>
      </div>
    </>
  );
}
