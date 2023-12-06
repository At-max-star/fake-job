import { Article } from "@/types";
import Rating from "./Rating";

const Article = ({
  articleId,
  companyName,
  title,
  salary,
  description,
  review
}: Article) => {

  //descriptionを表示する個数
  const limit_description = 2;

  return (
    <>
      <div className="flex flex-col p-4 bg-white w-full h-48 rounded shadow-lg transition duration-200 hover:scale-105">

            <div className="flex justify-between">
              <h5 className="font-bold text-sm truncate">
                {companyName}
              </h5>

              <Rating rate={review}/>
            </div>
            

          <p className="font-semibold text-xl truncate">
            {title}
          </p>

          <p className="truncate">
            {salary}
          </p>


          <div className="text-md mt-4">
            {
              description.map((des, index)=>{
                if(index < limit_description){
                  return (
                  <div key={des.caption} className="truncate">
                    <strong>
                    {`${des.caption}:`}
                    </strong>
                    {des.content}
                  </div>
                  )
                }

                return<></>
              })
            }
          </div>
      </div>
    </>
  );
}

export default Article
