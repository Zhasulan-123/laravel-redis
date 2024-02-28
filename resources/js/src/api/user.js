import httpPublic from "@/api/http.service";

const user = {
  get() {
    return httpPublic.get('home')
  },
  create() {
    return httpPublic.post('send')
  },
};

export default user;
