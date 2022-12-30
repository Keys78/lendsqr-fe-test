import ActiveUsersIcon from 'components/Icons/ActiveUsersIcon';
import UserLoansIcon from 'components/Icons/UserLoansIcon';
import UserSavings from 'components/Icons/UserSavings';
import UsersIcon from 'components/Icons/UsersIcon';
import UserCards from '../../components/UserCards/index'
import '../Users/users.scss'



const index = () => {
  const cardInfo: { title: string; data: string; icon: any }[] = [
    {
      title: 'users',
      icon: <UsersIcon />,
      data: '200'
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
      </div>
    </section>
  )
}

export default index