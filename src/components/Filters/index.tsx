import Input from 'components/Shared/Input'
import Select from 'components/Shared/Select'
import Button from 'components/Shared/Button/Index'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useRef } from 'react'
import '../Filters/filters.scss'

interface IFilter {
    setIsFilterModal: any
}

const Index = ({ setIsFilterModal }: IFilter) => {
    const filterModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setIsFilterModal(false) };
    useOnClickOutside(filterModalRef, clickOutsidehandler);

    return (
        <span ref={filterModalRef} className='filters__wrapper'>
            <Select label={'Organisation'} input__class={'select__class'} label__class={'label__class'} />
            <Input label={'Username'} input__class={'input__class'} label__class={'label__class'} />
            <Input label={'Email'} input__class={'input__class'} label__class={'label__class'} />
            <Input type={'date'} label={'Date'} input__class={'input__class'} label__class={'label__class'} />
            <Input label={'Phone Number'} input__class={'input__class'} label__class={'label__class'} />
            <Select label={'Status'} input__class={'select__class'} label__class={'label__class'} />
            <div className='filter__cta'>
                <Button background='reset__styles' children={'Reset'} />
                <Button background='filter__styles' children={'Filter'} />
            </div>
        </span>
    )
}

export default Index;