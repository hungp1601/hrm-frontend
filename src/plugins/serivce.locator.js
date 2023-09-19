import { serviceLocator } from "@/services";
import { log } from "@/utils";

export default function (context, inject) {
  log("%c** plugin:serviceLocator", "color:blue", serviceLocator);
  inject("getService", (name) =>
    serviceLocator.getService.call(serviceLocator, name)
  );
}
