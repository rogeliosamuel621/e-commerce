import { AxiosResponse } from 'axios';
import { IAllProducts, IProduct } from '../types/products';
import HttpRequest from './HttpRequest';

export default class ProductServices extends HttpRequest {
  private configGetAllProducts(): Promise<AxiosResponse> {
    this.configEnpoint('products');
    return this.get();
  }

  public async getAllProducts(): Promise<IAllProducts> {
    try {
      const response = await this.configGetAllProducts();

      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
}
