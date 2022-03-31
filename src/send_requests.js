import axios from 'axios'

const getRequest = async () => {
  const response = await axios.get('http://127.0.0.1:3001/api')

  console.log(response.data.message)
}

for (let i = 0; i < 15000; i++) {
  getRequest()
}