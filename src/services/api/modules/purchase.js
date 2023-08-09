import axios from "axios";

export default {
findCart: async (userId) => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_HOST_API}/purchase/${userId}`
    )
  },
};
