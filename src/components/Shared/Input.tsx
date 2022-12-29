
interface Props {
    type?: string,
    label?: string,
    required?: boolean,
    name?: string,
    input__class?:string,
    label__class?:string,
    placeholder?:string,
    onHandleInputChange: (event: React. ChangeEvent<HTMLInputElement>) => void
    value: any
}


const Input = ({ type, label, required, name, input__class, label__class, placeholder, onHandleInputChange, value }: Props) => {
    return (
        <>
            <label className={label__class}>{label}</label>
            <input className={input__class} type={type} required={required} placeholder={placeholder} value={value} onChange={onHandleInputChange} name={name} />
        </>
    )
}

export default Input;