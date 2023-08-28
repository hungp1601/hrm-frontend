export interface FindOperator<T> {
  $ne?: T;
  $not?: T;
  $gt?: T;
  $gte?: T;
  $lt?: T;
  $lte?: T;
  $between?: T[];
  $notBetween?: T[];
  $in?: T[];
  $notIn?: T[];
  $like?: T;
  $notLike?: T;
  $isNull?: boolean;
  $isNotNull?: boolean;
  $or?: T;
  $eq?: T;
}

type PrimitiveTypes = number | boolean | string | Date;
type SpecialObjectTypes = Date;

export type FindCondition<E> = {
  [K in keyof E]?: E[K] extends (infer U)[]
    ? U extends PrimitiveTypes
      ? U[] | FindOperator<U>
      : FindCondition<U>
    : E[K] extends object
    ? E[K] extends SpecialObjectTypes
      ? { [O in keyof FindOperator<E[K]>]?: FindOperator<E[K]>[O] } | E[K]
      : FindCondition<E[K]>
    : { [O in keyof FindOperator<E[K]>]?: FindOperator<E[K]>[O] } | E[K];
} & { $or?: FindCondition<E>[] };

export interface GenericObject {
  [index: string]: any;
}

export interface ResponseActionList<E> {
  data: E[];
  page: number;
  pageSize: number;
  totalPages: number;
  total: number;
}
