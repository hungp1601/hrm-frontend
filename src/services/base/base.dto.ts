import { GenericObject } from "./base.interface";

export class PopulateItemObject {
  name?: string;
  query?: any;
  fields?: string[];
  sort?: string[];
  populates?: PopulateItem[];
}

export type PopulateItem = string | PopulateItemObject;

export class GeneralFindOptions<Q = GenericObject> {
  populates?: PopulateItem[];
  fields?: string[];
  sort?: string[];
  search?: string;
  searchFields?: string[];
  query?: Q;
}

export class ParamsActionFind<Q = GenericObject> extends GeneralFindOptions<Q> {
  limit?: number;
  offset?: number;
}

export class ParamsActionFindOne<
  Q = GenericObject
> extends GeneralFindOptions<Q> {}

export class ParamsActionList<Q = GenericObject> extends GeneralFindOptions<Q> {
  page?: number;
  pageSize?: number;
}

export class ParamsActionDelete {
  id?: number;
}

export class ParamsActionSoftDelete {
  project_id?: number;
  id?: string;
}



export class ParamsActionDeleteByIds {
  ids?: any[];
  company_id?: number;
}




