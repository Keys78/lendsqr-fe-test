import Ellipsis from 'components/Icons/Ellipsis';
import SortIcon from 'components/Icons/SortIcon';
import { formatDate } from 'utils/helpers';
import '../Users/users.scss'


interface Props {
    tableData: any
}

const UsersTable = ({ tableData }: Props) => {
    const headings: { title: string; }[] = [
        { title: "Organisation" },
        { title: "Username" },
        { title: "Email" },
        { title: "Phone Number" },
        { title: "Date Joined" },
        { title: "Status" }
    ]

    const renderTableHeadings = headings.map((val: any, i: number) => (
        <th key={i}> <span className='table__headings'>{val.title}&nbsp;<SortIcon /></span> </th>
    ))

    const renderUsers = tableData.map((user: any ,  i: number) => (
        <tr key={i}>
            <td>{ user.orgName} </td>
            <td>{ user.userName}</td>
            <td>{ user.email}</td>
            <td>{ user.phoneNumber}</td>
            <td>{formatDate(user.createdAt)}</td>
            <td>Active</td>
            <td><Ellipsis /></td>
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
                   { renderUsers }
                </tbody>
            </table>
        </section>
    )
}

export default UsersTable






