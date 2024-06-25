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
import type { ObjectType_TextsApi } from './ObjectType_TextsApi';

/**
 * This class represents the entity "ObjectType_texts" of service "RegulationComplianceMasterService".
 */
export class ObjectType_Texts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ObjectType_TextsType<T>
{
  /**
   * Technical entity name for ObjectType_Texts.
   */
  static _entityName = 'ObjectType_texts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the ObjectType_Texts entity
   */
  static _keys = ['locale', 'code'];
  /**
   * Locale.
   * Maximum length: 14.
   */
  declare locale: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ObjectType_TextsApi<T>) {
    super(_entityApi);
  }
}

export interface ObjectType_TextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locale: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
}
