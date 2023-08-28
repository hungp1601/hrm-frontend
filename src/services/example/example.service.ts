import { BaseService } from "../base/base.service";
import { IExampleEntity } from "./example.interface";

export class ExampleService extends BaseService<IExampleEntity> {
  endpoint = process.env.API_ENDPOINT + "/test";
  name = "Example";
}
