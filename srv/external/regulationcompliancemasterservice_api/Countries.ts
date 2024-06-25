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
import type { CountriesApi } from './CountriesApi';
import { Countries_Texts, Countries_TextsType } from './Countries_Texts';

/**
 * This class represents the entity "Countries" of service "RegulationComplianceMasterService".
 */
export class Countries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CountriesType<T>
{
  /**
   * Technical entity name for Countries.
   */
  static _entityName = 'Countries';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Countries entity
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
   * Maximum length: 3.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link Countries_Texts} entity.
   */
  declare texts: Countries_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link Countries_Texts} entity.
   */
  declare localized?: Countries_Texts<T> | null;

  constructor(_entityApi: CountriesApi<T>) {
    super(_entityApi);
  }
}

export interface CountriesType<T extends DeSerializers = DefaultDeSerializers> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  texts: Countries_TextsType<T>[];
  localized?: Countries_TextsType<T> | null;
}
