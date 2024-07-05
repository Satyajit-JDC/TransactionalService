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
import type { MaintainCompanyIdOrPlantToFacilityIdMappingApi } from './MaintainCompanyIdOrPlantToFacilityIdMappingApi';

/**
 * This class represents the entity "MaintainCompanyIdOrPlantToFacilityIdMapping" of service "RegulationComplianceMasterService".
 */
export class MaintainCompanyIdOrPlantToFacilityIdMapping<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainCompanyIdOrPlantToFacilityIdMappingType<T>
{
  /**
   * Technical entity name for MaintainCompanyIdOrPlantToFacilityIdMapping.
   */
  static _entityName = 'MaintainCompanyIdOrPlantToFacilityIdMapping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainCompanyIdOrPlantToFacilityIdMapping entity
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
   * Company Id.
   * Maximum length: 5.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 5.
   * @nullable
   */
  declare plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Facility Id.
   * Maximum length: 5.
   * @nullable
   */
  declare facilityId?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link MaintainCompanyIdOrPlantToFacilityIdMapping} entity.
   */
  declare siblingEntity?: MaintainCompanyIdOrPlantToFacilityIdMapping<T> | null;

  constructor(_entityApi: MaintainCompanyIdOrPlantToFacilityIdMappingApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainCompanyIdOrPlantToFacilityIdMappingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  facilityId?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  siblingEntity?: MaintainCompanyIdOrPlantToFacilityIdMappingType<T> | null;
}
