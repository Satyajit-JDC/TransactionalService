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
import type { ActionApi } from './ActionApi';

/**
 * This class represents the entity "Action" of service "RegulationComplianceMasterService".
 */
export class Action<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActionType<T>
{
  /**
   * Technical entity name for Action.
   */
  static _entityName = 'Action';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Action entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 10.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ActionApi<T>) {
    super(_entityApi);
  }
}

export interface ActionType<T extends DeSerializers = DefaultDeSerializers> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
