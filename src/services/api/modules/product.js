import axios from "axios";

export default {
  create: async (formData) => {
    return await axios.post(
      `${process.env.REACT_APP_SERVER_HOST_API}/products`,
      formData,
      {
        headers: {
            "Content-Type": "multipart/form-data"
        }
      }
    )
  },
  findMany: async () => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_HOST_API}/products`
    )
  },
  findById: async (product_id) => {
    return await axios.get(
      `${process.env.REACT_APP_SERVER_HOST_API}/products/${product_id}`
    )
  },
};
