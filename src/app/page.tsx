import Link from 'next/link';
import style from '../app/page.module.css';
import Image from 'next/image';

export default function Homepage() {
  return (
    <>
      <div className={style.container}>
        <Image src="/favicon.png" alt="logo" width="60" height="60" />
        <h1 className={style.title}>포트원 결제</h1>
        <p className={style.sub_title}>포트원 결제 샘플입니다.</p>
        <button>
          <Link className={style.link} href="/ui">
            결제하러 가볼까요?
          </Link>
        </button>
      </div>
    </>
  );
}
