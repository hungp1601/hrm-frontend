import { ServiceLocator } from "./base/service-locator";
import { ServiceName } from "./service.name";
import * as Services from "./services";
export * from "./services";

const serviceLocator = new ServiceLocator(ServiceName);

Object.keys(Services).forEach((key) => {
  if (key.endsWith("Service") && key !== "BaseService") {
    serviceLocator.registerService(new (Services as any)[key]());
  }
});

export { serviceLocator, ServiceName };
