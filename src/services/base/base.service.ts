import { NuxtAxiosInstance } from "@nuxtjs/axios";
import {
  ParamsActionList,
  ParamsActionDeleteByIds,
  ParamsActionFind,
} from "./base.dto";
import { FindCondition, ResponseActionList } from "./base.interface";

export class BaseService<Entity = any> {
  endpoint: string;
  name: string;
  baseOptions = {
    progress: false,
  };

  get options() {
    return {
      progress: false,
      headers: {
        "x-service-name": this.name,
      },
    };
  }

  constructor(name: string, endpoint: string) {
    this.name = name;
    this.endpoint = endpoint;
  }

  defaultQueryList:
    | ParamsActionList<FindCondition<Entity>>
    | ((payload: ParamsActionList<FindCondition<Entity>>) => any) = {};

  defaultQueryFind:
    | ParamsActionFind<FindCondition<Entity>>
    | ((payload: ParamsActionList<FindCondition<Entity>>) => any) = {};

  async list(
    axios: any,
    payload: ParamsActionList<FindCondition<Entity>>,
    options: any,
    cachedCallback: any
  ): Promise<ResponseActionList<Entity>> {
    options = options || this.options;
    const { data } = await axios.post(
      this.endpoint + "/list",
      payload,
      options
    );

    return data;
  }

  async count(
    axios: any,
    payload: ParamsActionList<FindCondition<Entity>>,
    options = this.options,
    cachedCallback: any
  ): Promise<ResponseActionList<Entity>> {
    options = { ...this.baseOptions, ...options };

    const { data } = await axios.post(
      this.endpoint + "/count",
      payload,
      options
    );

    return data;
  }

  async find(
    axios: any,
    payload: ParamsActionFind<FindCondition<Entity>>,
    options = this.options,
    cachedCallback: any
  ): Promise<Entity[]> {
    options = { ...this.baseOptions, ...options };

    const { data } = await axios.post(
      this.endpoint + "/find",
      payload,
      options
    );

    return data;
  }

  async findOne(
    axios: any,
    payload: ParamsActionFind<FindCondition<Entity>>,
    options = this.options,
    cachedCallback: any
  ): Promise<Entity> {
    options = { ...this.baseOptions, ...options };

    const { data } = await axios.post(
      this.endpoint + "/find-one",
      payload,
      options
    );

    return data;
  }

  async create(
    axios: NuxtAxiosInstance,
    payload: Entity,
    options = this.options
  ): Promise<Entity> {
    options = { ...this.baseOptions, ...options };
    const { data } = await axios.post(this.endpoint, payload, options);
    return data;
  }

  async update(
    axios: NuxtAxiosInstance,
    payload: Entity & { id: string },
    options = this.options
  ): Promise<Entity> {
    options = { ...this.baseOptions, ...options };
    const { data } = await axios.put(
      this.endpoint + "/" + payload.id,
      payload,
      options
    );
    return data;
  }

  async deleteByIds(
    axios: NuxtAxiosInstance,
    payload: ParamsActionDeleteByIds,
    options = this.options
  ): Promise<Entity[]> {
    options = { ...this.baseOptions, ...options };
    const { data } = await axios.post(
      this.endpoint + "/delete",
      payload,
      options
    );
    return data;
  }

  async countByStatus(
    axios: any,
    payload: ParamsActionFind,
    options = this.options,
    cachedCallback: any
  ): Promise<{ [x: string]: number }> {
    options = { ...this.baseOptions, ...options };

    const { data } = await axios.post(
      this.endpoint + "/count-by-status",
      payload,
      options
    );

    return data;
  }
}
