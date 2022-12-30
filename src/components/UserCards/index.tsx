import '../UserCards/usercard.scss'

interface Props {
  card: any
}
const index = ({ card }: Props) => {
  return (
    <div className='card__wrapper'>
      <div>{card.icon}</div>
      <h1>{card.title}</h1>
      <h2>{card.data}</h2>
    </div>
  )
}

export default index