import HttpException from "@/utilities/exceptions/HttpExceptions";
import axios from "axios";

export default class Http {
  static async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      //traitement dans la vue
      throw new HttpException(err.message);
    }
  }

  static async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (err) {
      //alert(err);
      throw new HttpException(err.message);
    }
  }

  static async update(url, data) {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (err) {
      throw new HttpException(err.message);
    }
  }

  static async delete(url) {
    try {
      const response = await axios.put(url);
      return response.data;
    } catch (err) {
      throw new HttpException(err.message);
    }
  }
}
