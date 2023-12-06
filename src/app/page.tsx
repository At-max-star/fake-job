import Image from 'next/image'
import Header from './Header'
import Article from '@/components/Article'
import { Data_Article } from '@/data/Articles'
import Title from './Title'
import { Provider } from 'react-redux'
import store from '@/store'

export default function Home() {

  return (
    <>
    {/* 縦方向 中央寄せ */}
    <main className="flex flex-col items-center px-5 lg:px-36">


      <Title/>

      {/* 記事を横に1,2個並べる */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {
          Data_Article.map(article => 
            <div key={article.articleId}>
              <Article {...article}/>
            </div>
          )
        }
      </div>

    </main>
    </>
  )
}
