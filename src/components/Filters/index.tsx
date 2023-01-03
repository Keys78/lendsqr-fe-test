import Input from 'components/Shared/Input'
import Button from 'components/Shared/Button/Index'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useRef, useState } from 'react'
import '../Filters/filters.scss'
import { useAppDispatch } from 'app/hooks'
import { getAllUsers, filterByUsername, filterByEmail, filterByDateJoined, filterByPhoneNumber, filterByOrgName } from 'features/users/usersSlice'
import CaretDownIcon from 'components/Icons/CaretDownIcon'

interface IFilter {
    setIsFilterModal: any,
    currentUsers: any,
}

const Index = ({ setIsFilterModal, currentUsers }: IFilter) => {
    const filterModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setIsFilterModal(false) };
    useOnClickOutside(filterModalRef, clickOutsidehandler);
    const [showDrop, setShowDrop] = useState<boolean>(false)
    const [selected, setSelcted] = useState<string>('Select')
    const dispatch = useAppDispatch();


    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);

    const filterByUsernameAction = () => { dispatch(filterByUsername(usernameRef.current?.value)) };
    const filterByEmailAction = () => { dispatch(filterByEmail(emailRef.current?.value)) };
    const filterByDateJoinedAction = () => { dispatch(filterByDateJoined(dateRef.current?.value)) };
    const filterByPhoneNumberAction = () => { dispatch(filterByPhoneNumber(phoneRef.current?.value)) };


    const updateVal = (val: any) => {
        setSelcted(prev => val.orgName)
        dispatch(filterByOrgName(val.orgName))
        setShowDrop(!showDrop)
    }


    const resetAction = () => {
        dispatch(getAllUsers())
        setSelcted('Select')
        setIsFilterModal(false)
    }

    return (
        <span ref={filterModalRef} className='filters__wrapper'>
            <div className='dropbox'>
                <div onClick={() => setShowDrop(!showDrop)} className='selected'>
                    <div>{selected}</div>
                    <p><CaretDownIcon /></p>
                </div>
                {
                    showDrop &&
                    <div className='options'>
                        {currentUsers?.map((val: any, i: number) =>
                            <p key={i} onClick={() => updateVal(val)}>{val.orgName}</p>
                        )}
                    </div>
                }
            </div>
            <Input label={'Username'} input__class={'input__class'} label__class={'label__class'} myRef={usernameRef} onHandleInputChange={filterByUsernameAction} />
            <Input label={'Email'} input__class={'input__class'} label__class={'label__class'} myRef={emailRef} onHandleInputChange={filterByEmailAction} />
            <Input type={'text'} label={'Date'} input__class={'input__class'} label__class={'label__class'} myRef={dateRef} onHandleInputChange={filterByDateJoinedAction} />
            <Input label={'Phone Number'} input__class={'input__class'} label__class={'label__class'} myRef={phoneRef} onHandleInputChange={filterByPhoneNumberAction} />
            <Input label={'Status'} input__class={'input__class'} label__class={'label__class'} disabled={true} />
            <div className='filter__cta'>
                <Button background='reset__styles' children={'Reset'} onClick={resetAction} />
                {/* <Button background='filter__styles' children={'Filter'} onClick={filterAction} /> */}
            </div>
        </span>
    )
}

export default Index;