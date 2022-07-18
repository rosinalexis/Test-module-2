import Http from "@/services/http/Http";

export class UserService {
  static user_base_url = "https://jsonplaceholder.typicode.com/users/";

  static async getUser(id) {
    return await Http.get(this.user_base_url + id);
  }

  static async getAllUsers() {
    return await Http.get(this.user_base_url);
  }
}
