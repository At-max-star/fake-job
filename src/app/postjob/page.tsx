'use client'
import { useState } from "react"
import TextInput from "./TextInput"
import { axios_api } from "@/lib/axios";
import { URL_ARTICLE_CREATE } from "@/config";
import { useRouter } from "next/navigation";

const PostJob = () => {

  const [company_name, setCompany_name] = useState('');
  const [job_name, setJob_name] = useState('');
  const [salary, setSalary] = useState('');
  const [job_content, setJob_content] = useState('');
  const [application_requirement, setApplication_requirement] = useState('');
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const onSubmit = () =>{
    axios_api
    .post(URL_ARTICLE_CREATE,{
        company_name: company_name,
        job_name: job_name,
        salary: salary,
        job_content: job_content,
        application_requirement: application_requirement
    })
    .then((res)=>{
          router.push('/')
    })
    .catch((err)=>{
        setIsError(true);
    });
}

  return (
    <div className="flex justify-center m-20 p-5 w-10/12 rounded shadow-lg">
        <div className="flex flex-col">
        
        <TextInput id="company_name" label="会社名" value={company_name} setValue={setCompany_name}/>
        <TextInput id="job_name" label="求人名" value={job_name} setValue={setJob_name}/>
        <TextInput id="salary" label="想定給料" value={salary} setValue={setSalary}/>
        <TextInput id="job_content" label="仕事内容" value={job_content} setValue={setJob_content}/>
        <TextInput id="application_requirement" label="応募要件" value={application_requirement} setValue={setApplication_requirement}/>

        <button onClick={onSubmit}>確定</button>
            {isError && <p className="text-red-600">送信に失敗しました。</p>}
        </div>
    </div>
  )
}

export default PostJob
