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
import type { MaintainFuelMappingApi } from './MaintainFuelMappingApi';
import { FuelCategory, FuelCategoryType } from './FuelCategory';
import { FuelSubCategory, FuelSubCategoryType } from './FuelSubCategory';

/**
 * This class represents the entity "MaintainFuelMapping" of service "RegulationComplianceMasterService".
 */
export class MaintainFuelMapping<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaintainFuelMappingType<T>
{
  /**
   * Technical entity name for MaintainFuelMapping.
   */
  static _entityName = 'MaintainFuelMapping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainFuelMapping entity
   */
  static _keys = ['ID', 'IsActiveEntity'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified At.
   * @nullable
   */
  declare modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Modified By.
   * Maximum length: 255.
   * @nullable
   */
  declare modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fuel Type Category.
   * Maximum length: 3.
   * @nullable
   */
  declare fuelTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fuel Sub Type Category.
   * Maximum length: 3.
   * @nullable
   */
  declare fuelSubTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Active Entity.
   */
  declare isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Active Entity.
   */
  declare hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Draft Entity.
   */
  declare hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-one navigation property to the {@link FuelCategory} entity.
   */
  declare fuelType?: FuelCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link FuelSubCategory} entity.
   */
  declare fuelSubType?: FuelSubCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainFuelMapping} entity.
   */
  declare siblingEntity?: MaintainFuelMapping<T> | null;

  constructor(_entityApi: MaintainFuelMappingApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainFuelMappingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  fuelTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  fuelSubTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  fuelType?: FuelCategoryType<T> | null;
  fuelSubType?: FuelSubCategoryType<T> | null;
  siblingEntity?: MaintainFuelMappingType<T> | null;
}
