/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ObjectTypeApi } from './ObjectTypeApi';
import { ObjectType_Texts, ObjectType_TextsType } from './ObjectType_Texts';

/**
 * This class represents the entity "ObjectType" of service "RegulationComplianceMasterService".
 */
export class ObjectType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ObjectTypeType<T>
{
  /**
   * Technical entity name for ObjectType.
   */
  static _entityName = 'ObjectType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the ObjectType entity
   */
  static _keys = ['code'];
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Descr.
   * Maximum length: 1000.
   * @nullable
   */
  declare descr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * Maximum length: 4.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link ObjectType_Texts} entity.
   */
  declare texts: ObjectType_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link ObjectType_Texts} entity.
   */
  declare localized?: ObjectType_Texts<T> | null;

  constructor(_entityApi: ObjectTypeApi<T>) {
    super(_entityApi);
  }
}

export interface ObjectTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  texts: ObjectType_TextsType<T>[];
  localized?: ObjectType_TextsType<T> | null;
}
