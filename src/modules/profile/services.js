import Http from "@/services/http/Http";

export class UserService {
  static async getUser(id) {
    return await Http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }

  static async getAllUsers() {
    return await Http.get("https://jsonplaceholder.typicode.com/usersAA");
  }
}
