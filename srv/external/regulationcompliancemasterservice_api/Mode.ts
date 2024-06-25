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
import type { ModeApi } from './ModeApi';
import { Mode_Texts, Mode_TextsType } from './Mode_Texts';

/**
 * This class represents the entity "Mode" of service "RegulationComplianceMasterService".
 */
export class Mode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ModeType<T>
{
  /**
   * Technical entity name for Mode.
   */
  static _entityName = 'Mode';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Mode entity
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
   * Maximum length: 1.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link Mode_Texts} entity.
   */
  declare texts: Mode_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link Mode_Texts} entity.
   */
  declare localized?: Mode_Texts<T> | null;

  constructor(_entityApi: ModeApi<T>) {
    super(_entityApi);
  }
}

export interface ModeType<T extends DeSerializers = DefaultDeSerializers> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  texts: Mode_TextsType<T>[];
  localized?: Mode_TextsType<T> | null;
}
