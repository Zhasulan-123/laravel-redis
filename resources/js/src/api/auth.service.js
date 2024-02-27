import httpClient from "@/api/http.service";
import router from "@/router";

const authService = {
  currentUser: null,
  isLoggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN') // sessionStorage
  },
  getToken() {
    return localStorage.getItem('ACCESS_TOKEN')
  },
};

export default authService;
