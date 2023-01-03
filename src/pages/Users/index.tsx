import ActiveUsersIcon from 'components/Icons/ActiveUsersIcon';
import UserLoansIcon from 'components/Icons/UserLoansIcon';
import UserSavings from 'components/Icons/UserSavings';
import UsersIcon from 'components/Icons/UsersIcon';
import UserCards from 'components/UserCards/index'
import { useAppDispatch, useAppSelector } from 'app/hooks';
import '../Users/users.scss'
import { useEffect, useState } from 'react';
import { getAllUsers } from 'features/users/usersSlice';
import UsersTable from './UsersTable';
import { getYearsBetween } from 'utils/helpers';
import Loader from 'components/Loader/index';



const Index = () => {
  const dispatch = useAppDispatch()
  const { filteredUsers, isError, isLoading } = useAppSelector((state: any) => state.users)

  // gen-table-con-users info
  const activeUsers = filteredUsers.filter((val: any) => getYearsBetween(val.createdAt, val.lastActiveDate) < 40)
  const usersWithLoan = filteredUsers.filter((val:any) => (val?.education?.loanRepayment) > 0 )
  const getAllEarners = filteredUsers.map((val:any) => (val?.education?.monthlyIncome) )
  const xt = getAllEarners.map((val:any) => (Math.trunc(Number(val[1])) - Math.trunc(Number(val[0]))))
  const getUsersWithSaving = xt.filter((val:any) => val > -1);
    


  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const cardInfo: { title: string; data: string; icon: any }[] = [
    {
      title: 'users',
      icon: <UsersIcon />,
      data: filteredUsers?.length || 0
    },
    {
      title: 'active users',
      icon: <ActiveUsersIcon />,
      data: activeUsers.length || 0
    },
    {
      title: 'users with loan',
      icon: <UserLoansIcon />,
      data: usersWithLoan.length || 0
    },
    {
      title: 'users with savings',
      icon: <UserSavings />,
      data: getUsersWithSaving.length || 0
    },
  ]

  const renderCards = cardInfo.map((card, i) => (
    <UserCards  key={i} i={i} card={card} />
  ))

  return (
    <section>
      {isLoading && <Loader />}
      {!isError &&
        <div className='users__wrapper'>
        <h1 className='heading'>Users</h1>
        <div className='cards__wrapper'>
          {renderCards}
        </div>
          { <UsersTable tableData={filteredUsers}/> }
      </div>
      }
    </section>
  )
}

export default Index