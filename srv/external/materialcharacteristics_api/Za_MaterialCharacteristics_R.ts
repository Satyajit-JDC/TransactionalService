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
import type { Za_MaterialCharacteristics_RApi } from './Za_MaterialCharacteristics_RApi';

/**
 * This class represents the entity "ZA_MaterialCharacteristics_R" of service "com.sap.gateway.srvd_a2x.zmaterialcharacteristics_r.v0001".
 */
export class Za_MaterialCharacteristics_R<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Za_MaterialCharacteristics_RType<T>
{
  /**
   * Technical entity name for Za_MaterialCharacteristics_R.
   */
  static _entityName = 'ZA_MaterialCharacteristics_R';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata4/sap/zapi_materialcharcs_r_o4/srvd_a2x/sap/zmaterialcharacteristics_r/0001';
  /**
   * All key fields of the Za_MaterialCharacteristics_R entity
   */
  static _keys = [
    'ObjectKey',
    'InternalCharacteristic',
    'CharacteristicValueCounter',
    'IdentifierObjectClass',
    'ClassType',
    'InternalCounter'
  ];
  /**
   * Object Key.
   * Maximum length: 90.
   */
  declare objectKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Characteristic.
   * Maximum length: 10.
   */
  declare internalCharacteristic: DeserializedType<T, 'Edm.String'>;
  /**
   * Characteristic Value Counter.
   * Maximum length: 3.
   */
  declare characteristicValueCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Identifier Object Class.
   * Maximum length: 1.
   */
  declare identifierObjectClass: DeserializedType<T, 'Edm.String'>;
  /**
   * Class Type.
   * Maximum length: 3.
   */
  declare classType: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Counter.
   * Maximum length: 4.
   */
  declare internalCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Regulation Group.
   * Maximum length: 70.
   */
  declare regulationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Regulation Material Group.
   * Maximum length: 70.
   */
  declare regulationMaterialGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Fuel Category.
   * Maximum length: 70.
   */
  declare fuelCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Description.
   * Maximum length: 40.
   */
  declare materialDescription: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Za_MaterialCharacteristics_RApi<T>) {
    super(_entityApi);
  }
}

export interface Za_MaterialCharacteristics_RType<
  T extends DeSerializers = DefaultDeSerializers
> {
  objectKey: DeserializedType<T, 'Edm.String'>;
  internalCharacteristic: DeserializedType<T, 'Edm.String'>;
  characteristicValueCounter: DeserializedType<T, 'Edm.String'>;
  identifierObjectClass: DeserializedType<T, 'Edm.String'>;
  classType: DeserializedType<T, 'Edm.String'>;
  internalCounter: DeserializedType<T, 'Edm.String'>;
  regulationGroup: DeserializedType<T, 'Edm.String'>;
  regulationMaterialGroup: DeserializedType<T, 'Edm.String'>;
  fuelCategory: DeserializedType<T, 'Edm.String'>;
  materialDescription: DeserializedType<T, 'Edm.String'>;
}
