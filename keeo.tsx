

// interface Props {
//     tableData: any
// }

// const UsersTable = ({ tableData }: Props) => {
//     const headings: { title: string; }[] = [
//         { title: "Organisation" },
//         { title: "Username" },
//         { title: "Email" },
//         { title: "Phone Number" },
//         { title: "Date Joined" },
//         { title: "Status" }
//     ]

//     const renderTableHeadings = headings.map((val: any, i: number) => (
//         <th key={i}> {val.title} </th>
//     ))

//     const renderUsers = tableData.map((user: any ,  i: number) => (
//         <tr key={i}>
//             <td>{ user.orgName}</td>
//             <td>{ user.userName}</td>
//             <td>{ user.email}</td>
//             <td>{ user.phoneNumber}</td>
//             <td>{ user.createdAt}</td>
//         </tr>
//     ))

//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         {renderTableHeadings}
//                     </tr>
//                 </thead>
//                 <tbody>
//                    { renderUsers }
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default UsersTable