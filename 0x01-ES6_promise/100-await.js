import { createUser, uploadPhoto } from "./utils.js";

const asyncUploadUser = async () => {
  let res = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { photo, user };
  } catch (error) {
    res = { photo: null, user: null };
  }
  return res;
};

export default asyncUploadUser;
