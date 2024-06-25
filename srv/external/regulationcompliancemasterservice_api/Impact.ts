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
import type { ImpactApi } from './ImpactApi';

/**
 * This class represents the entity "Impact" of service "RegulationComplianceMasterService".
 */
export class Impact<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ImpactType<T>
{
  /**
   * Technical entity name for Impact.
   */
  static _entityName = 'Impact';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Impact entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 2.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ImpactApi<T>) {
    super(_entityApi);
  }
}

export interface ImpactType<T extends DeSerializers = DefaultDeSerializers> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
