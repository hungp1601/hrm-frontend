import { BaseService } from "../base";
import { ServiceName } from "../service.name";

export class TestService extends BaseService<any> {
  endpoint = process.env.FULL_API_URL + ServiceName.Test;
  name = "test";
}
