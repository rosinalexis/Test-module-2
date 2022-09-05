import Http from "@/services/http/Http";

export class UserService {
  static user_base_url = process.env.APP_VUE_API_URL;

  static async getUser(id) {
    return await Http.get(this.user_base_url + id);
  }

  static async getAllUsers() {
    return await Http.get(this.user_base_url);
  }
}
