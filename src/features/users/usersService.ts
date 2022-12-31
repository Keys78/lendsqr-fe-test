import axios from 'axios'
const USERS_API_URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/' //production



const getAllUsers = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const response = await axios.get(`${USERS_API_URL + 'users'}`, config)
  return response
}

const usersService = {
  getAllUsers
}

export default usersService