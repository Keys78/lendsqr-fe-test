import ActivateUserIcon from 'components/Icons/ActivateUserIcon';
import BlackListIcon from 'components/Icons/BlackListIcon';
import Ellipsis from 'components/Icons/Ellipsis';
import EyeIcon from 'components/Icons/EyeIcon';
import SortIcon from 'components/Icons/SortIcon';
import Filters from 'components/Filters/index'
import { useState, useEffect, useRef } from 'react';
import { headings } from 'utils/data';
import { characterLimit, formatDate } from 'utils/helpers';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { motion } from 'framer-motion';
import '../Users/users.scss'
import Pagination from 'components/Pagination/Pagination';


interface Props {
    tableData: []
}

const UsersTable = ({ tableData }: Props) => {
    const [activeIndex, setActiveIndex] = useState<any>('')
    const [isFilterModal, setIsFilterModal] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10)
    const indexOfLastUser = currentPage * 10;
    const indexOfFirstUser = indexOfLastUser - 10;
    const currentUsers = tableData && tableData.slice(indexOfFirstUser, indexOfLastUser)
    const promptModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setActiveIndex('') };
    useOnClickOutside(promptModalRef, clickOutsidehandler);



    const renderTableHeadings = headings.map((val: any, i: number) => (
        <th
            onClick={() => setIsFilterModal(!isFilterModal)} key={i}>
            <span className='table__headings'>{val.title}&nbsp;
                <span style={{ cursor: 'pointer' }}><SortIcon /></span>
            </span>
        </th>
    ))

    const renderUsers = currentUsers.map((user: any, i: number) => (
        <motion.tr key={i}
        >
            <td className='row__data'>{characterLimit(user.orgName, 24)} </td>
            <td>{user.userName}</td>
            <td>{characterLimit(user.email, 20)}</td>
            <td>{user.phoneNumber}</td>
            <td>{formatDate(user.createdAt)}</td>
            <td>Active</td>
            <td onClick={() => setActiveIndex(i)} className='action__group'><Ellipsis />
                {activeIndex === i &&
                    <motion.div ref={promptModalRef}
                        initial={{ opacity: 0, translateX: -50, zIndex: 99 }}
                        animate={{ opacity: 1, translateX: 0, zIndex: 99 }}
                        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96], delay: i * 0.1 }}
                        className='action__prompt'>
                        <a href={`users/${user.id}`}><div><EyeIcon /> View Details</div></a>
                        <div><BlackListIcon /> Blacklist User</div>
                        <div><ActivateUserIcon /> Activate User</div>
                    </motion.div>
                }
            </td>
        </motion.tr>
    ))

    return (
        <>
            <section className='table__container'>
                <table className="table__wrapper">
                    {isFilterModal && <Filters setIsFilterModal={setIsFilterModal} />}
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
            <div className='table__footer'>
                <div>&nbsp;</div>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        lastPage={tableData.length / usersPerPage}
                        maxLength={7}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </>
    )
}

export default UsersTable






