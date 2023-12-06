'use client'
import { URL_LOGIN } from "@/config";
import { setInfo } from "@/features/authenticationInfoSlicer";
import { axios_api } from "@/lib/axios";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { useDispatch } from "react-redux";

const Login = () =>{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit = () =>{
        axios_api
        .post(URL_LOGIN,{
            email:name,
            password: password,
        })
        .then((res)=>{
            if(res.status === 200){
                dispatch(setInfo('authenticated'));
                router.push('/')
            }
        })
        .catch((err)=>{
            setIsError(true);
        });
    }
    
    return(
        <>
            {isError && <p className="text-red-600">メールアドレスもしくはパスワードが正しくありません</p>}

            <p>メールアドレス</p>
            <input type="text" onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            <p>パスワード</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            <button onClick={onSubmit}>ログイン</button>
        </>
    )
}

export default Login;