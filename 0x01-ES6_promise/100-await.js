import { createUser, uploadPhoto } from "./utils.js";

async function asyncUploadUser () {
  let res = {};
  try {
    const user = await createUser(),
      photo = await uploadPhoto();
    res = {
      photo,
      user,
    };
  } catch (error) {
    res = {
      photo: null,
      user: null,
    };
  }
  return res;
};

export default asyncUploadUser;
