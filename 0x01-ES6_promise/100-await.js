import { createUser, uploadPhoto } from "./utils.js";

const asyncUploadUser = async () => {
  const user = await createUser(),
    photo = await uploadPhoto();
  try {
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploadUser;
