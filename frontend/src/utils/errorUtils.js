export const MessageErrorUttils = (error) => {
  if (!error) return null;

  if (error.response?.data) {
    const data = error.response.data;
    console.log(error.response.data);

    if (data.error && Array.isArray(data.error)) {
      return data.error.map((err) => err.message).join(" , ");
    }
    if (data.error) {
      return data.error;
    }
    if (data.message) {
      return data.message;
    }
  }

  if (error.response && !error.response) {
    return "Network error, please check your connection";
  }

  if (error.message) {
    return error.message;
  }

  return "Somthing wants wrong please try again";
};
