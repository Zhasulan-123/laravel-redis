import httpPublic from "@/api/http.service";

const user = {
  get() {
    return httpPublic.get('home')
  },
};

export default user;
