import React from "react"

interface IFormInput {
    label?:string,
    type: string,
    placehorder?:string,
    onChange?: (e:any) => void
}

const FormInput: React.FC<IFormInput> = ({type, label, placehorder, onChange})=>{
    return (
    <div className="flex flex-col gap-2">
        <label className="font-bold">{label}</label>
        <input 
        type={type}
        placeholder={placehorder}
        className="border border-gray-300 p-2 rounded-md shadow-md"
        onChange={onChange}
        />
    </div>
    )
}

export default FormInput;