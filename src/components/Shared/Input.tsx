
interface Props {
    type?: string,
    label?: string,
    required?: boolean,
    name?: string,
    input__class?:string,
    label__class?:string,
    placeholder?:string,
    variable_x?: any
    component__wrap?:string;
    onHandleInputChange?: (event: React. ChangeEvent<HTMLInputElement>) => void
    onClick?: any
    value?: any
}


const Input = ({ type, label, required, name, input__class, label__class, placeholder, variable_x, component__wrap, onHandleInputChange, onClick, value }: Props) => {
    return (
        <span className={`${component__wrap}`}>
            <label className={label__class}>{label}</label>
            <input className={input__class} type={type} required={required} placeholder={placeholder} value={value} onChange={onHandleInputChange} name={name} />
            <span onClick={onClick}>{variable_x}</span>
        </span>
    )
}

export default Input;