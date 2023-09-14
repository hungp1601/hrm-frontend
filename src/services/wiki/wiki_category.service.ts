import { BaseService } from "../base";
import { ServiceName } from "../service.name";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

export class TestService extends BaseService<any> {
  endpoint = ServiceName.Test;
  name = ServiceName.Test;

  async test(axios: NuxtAxiosInstance) {
    console.log(process.env.FULL_API_URL, ServiceName.Test)
    const { data } = await axios.get(this.endpoint);
    return data;
  }
}
