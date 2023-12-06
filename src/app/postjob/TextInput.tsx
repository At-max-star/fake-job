import { Dispatch, SetStateAction } from "react";

interface TextInputProps {
    id ?: string;
    label: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const TextInput = ({id, label, value, setValue}: TextInputProps) => {
  return (
    <>
    
    <label htmlFor={id} className="block mb-2 w-full text-lg font-medium text-gray-900 dark:text-white">{label}</label>
    <input type="text" id={id} value={value} onChange={(e) => setValue(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    </>
  )
}

export default TextInput
