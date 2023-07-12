import Link from "next/link"

const Header = () => {
  return (
    <div className='flex justify-end bg-green-400 space-x-10 pe-12 py-4'>

      <Link href='#' className='text-white text-xl font-bold'>
        求人を投稿する
      </Link>
      
      <Link href='#' className='text-white text-xl font-bold'>
        ログイン
      </Link>

    </div>
  )
}

export default Header
