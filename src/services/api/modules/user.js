import axios from "axios";

export default {
  register: async (newUser) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/users`,
      newUser
    )
  },
  login: async (data) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/login`,
      data
    )
  },
  update: async (userId, data) => {
    return await axios.patch(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/${userId}`,
      data
    )
  },
  updateAvatar: async (userId, formData) => {
    return await axios.patch(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/${userId}/avatar`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )
  },
  authenToken: async (data) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/authen-token`,
      data
    )
  },
  resend: async (data) => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/resend`,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    )
    .then(res => res)
    .catch(err => err)
  },
  changePassword: async (data) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/users/change-password`,
      data,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    )
    .then(res => res)
    .catch(err => err)
  },
  find: async () => {
    return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/users`);
  },
};
