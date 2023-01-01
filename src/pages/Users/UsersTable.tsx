import ActivateUserIcon from 'components/Icons/ActivateUserIcon';
import BlackListIcon from 'components/Icons/BlackListIcon';
import Ellipsis from 'components/Icons/Ellipsis';
import EyeIcon from 'components/Icons/EyeIcon';
import SortIcon from 'components/Icons/SortIcon';
import { useState, useEffect, useRef } from 'react';
import { headings } from 'utils/data';
import { characterLimit, formatDate } from 'utils/helpers';
import useOnClickOutside from 'hooks/useOnClickOutside';
import '../Users/users.scss'


interface Props {
    tableData: any
}

const UsersTable = ({ tableData }: Props) => {
    const [activeIndex, setActiveIndex] = useState<any>('')
    const promptModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setActiveIndex('') };
    useOnClickOutside(promptModalRef, clickOutsidehandler);
   


    const renderTableHeadings = headings.map((val: any, i: number) => (
        <th key={i}> <span className='table__headings'>{val.title}&nbsp;<SortIcon /></span> </th>
    ))

    const renderUsers = tableData.map((user: any, i: number) => (
        <tr key={i}>
            <td className='row__data'>{characterLimit(user.orgName, 24)} </td>
            <td>{user.userName}</td>
            <td>{characterLimit(user.email, 20)}</td>
            <td>{user.phoneNumber}</td>
            <td>{formatDate(user.createdAt)}</td>
            <td>Active</td>
            <td onClick={() => setActiveIndex(i)} className='action__group'><Ellipsis />
                {activeIndex === i &&
                    <div ref={promptModalRef} className='action__prompt'>
                        <a href={`users/${user.id}`}><div><EyeIcon /> View Details</div></a>
                        <div><BlackListIcon /> Blacklist User</div>
                        <div><ActivateUserIcon /> Activate User</div>
                    </div>
                }
            </td>
        </tr>
    ))

    return (
        <section className='table__container'>
            <table className="table__wrapper">
                <thead>
                    <tr>
                        {renderTableHeadings}
                    </tr>
                </thead>
                <tbody>
                    {renderUsers}
                </tbody>
            </table>
        </section>
    )
}

export default UsersTable






