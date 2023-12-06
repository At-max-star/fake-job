import Link from "next/link"

const Header = () => {
  return (
    <div className='flex justify-end bg-green-400 space-x-10 pe-12 py-4'>



      <Link href='/postjob' className='text-white text-xl font-bold animate-text-shadow-drop-br'>
        求人を投稿する
      </Link>
      
      <Link href='/login' className='text-white text-xl font-bold animate-text-shadow-drop-br'>
        ログイン
      </Link>

    </div>
  )
}

export default Header
