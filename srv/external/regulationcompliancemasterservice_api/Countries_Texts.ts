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
import type { Countries_TextsApi } from './Countries_TextsApi';

/**
 * This class represents the entity "Countries_texts" of service "RegulationComplianceMasterService".
 */
export class Countries_Texts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Countries_TextsType<T>
{
  /**
   * Technical entity name for Countries_Texts.
   */
  static _entityName = 'Countries_texts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Countries_Texts entity
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
   * Maximum length: 3.
   */
  declare code: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Countries_TextsApi<T>) {
    super(_entityApi);
  }
}

export interface Countries_TextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locale: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
}
