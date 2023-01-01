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
const getUserById = async (id: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const response = await axios.get(`${USERS_API_URL + `users/${id}`}`, config)
  console.log('user', response)
  return response
}

const usersService = {
  getAllUsers,
  getUserById
}

export default usersService