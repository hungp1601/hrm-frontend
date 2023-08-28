import { BaseService } from "./base.service";

export function getEndpoint(serviceName: string) {
  let apiPath: string, endpoint;
  const isAdmin = serviceName.startsWith("#admin#");
  if (isAdmin) {
    endpoint = process.env.ADMIN_ENDPOINT;
    apiPath = serviceName.replace(/^#admin#/, "");
  } else {
    endpoint = process.env.API_ENDPOINT;
    apiPath = serviceName;
  }
  return endpoint + apiPath;
}

export class ServiceLocator {
  services: { [x: string]: BaseService } = {};

  constructor(names: { [x: string]: string } = {}) {
    Object.values(names).forEach((name) => {
      this.services[name] = new BaseService(name, getEndpoint(name));
    });
  }

  registerService(service: BaseService) {
    if (service.name === undefined) {
      console.log(service);
    }
    this.services[service.name] = service;
  }

  getService(name: string | BaseService): BaseService {
    if (name instanceof BaseService) {
      return name as any;
    }
    try {
      if (!this.services[name]) {
        throw new Error(`Service ${name} does not exist`);
      }
    } catch (error) {
      console.error(error);
    }
    return this.services[name] as any;
  }
}
