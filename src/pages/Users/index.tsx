import ActiveUsersIcon from 'components/Icons/ActiveUsersIcon';
import UserLoansIcon from 'components/Icons/UserLoansIcon';
import UserSavings from 'components/Icons/UserSavings';
import UsersIcon from 'components/Icons/UsersIcon';
import UserCards from 'components/UserCards/index'
import { useAppDispatch, useAppSelector } from 'app/hooks';
import '../Users/users.scss'
import { useEffect } from 'react';
import { getAllUsers } from 'features/users/usersSlice';
import UsersTable from './UsersTable';




const Index = () => {
  const dispatch = useAppDispatch()
  const { allUsers, isError, message } = useAppSelector((state: any) => state.users)


  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const cardInfo: { title: string; data: string; icon: any }[] = [
    {
      title: 'users',
      icon: <UsersIcon />,
      data: allUsers?.length || 0
    },
    {
      title: 'active users',
      icon: <ActiveUsersIcon />,
      data: '200'
    },
    {
      title: 'users with loan',
      icon: <UserLoansIcon />,
      data: '200'
    },
    {
      title: 'users with savings',
      icon: <UserSavings />,
      data: '200'
    },
  ]

  const renderCards = cardInfo.map((card, i) => (
    <UserCards key={i} card={card} />
  ))

  return (
    <section>
      <div className='users__wrapper'>
        <h1 className='heading'>Users</h1>
        <div className='cards__wrapper'>
          {renderCards}
        </div>
          <UsersTable tableData={allUsers}/>
      </div>
    </section>
  )
}

export default Index