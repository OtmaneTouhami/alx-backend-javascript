import { createUser, uploadPhoto } from "./utils.js";

export default async function asyncUploadUser() {
  let res = {};

  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res = { photo, user };
  } catch (error) {
    res = { photo: null, user: null };
  }
  return res;
}
