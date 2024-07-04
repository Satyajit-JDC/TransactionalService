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
import type { ActionInventoryApi } from './ActionInventoryApi';

/**
 * This class represents the entity "ActionInventory" of service "RegulationComplianceMasterService".
 */
export class ActionInventory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ActionInventoryType<T>
{
  /**
   * Technical entity name for ActionInventory.
   */
  static _entityName = 'ActionInventory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the ActionInventory entity
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

  constructor(_entityApi: ActionInventoryApi<T>) {
    super(_entityApi);
  }
}

export interface ActionInventoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
