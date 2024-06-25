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
import type { MaintainRegulationMaterialGroupApi } from './MaintainRegulationMaterialGroupApi';
import {
  ManageRegulationTypeAndObjectCategory,
  ManageRegulationTypeAndObjectCategoryType
} from './ManageRegulationTypeAndObjectCategory';

/**
 * This class represents the entity "MaintainRegulationMaterialGroup" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationMaterialGroup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationMaterialGroupType<T>
{
  /**
   * Technical entity name for MaintainRegulationMaterialGroup.
   */
  static _entityName = 'MaintainRegulationMaterialGroup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationMaterialGroup entity
   */
  static _keys = ['ID', 'regulationMaterialGroup', 'IsActiveEntity'];
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
   * Regulation Material Group.
   * Maximum length: 5.
   */
  declare regulationMaterialGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 50.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ManageRegulationTypeAndObjectCategory} entity.
   */
  declare manageRegulationTypeAndObjectCategory: ManageRegulationTypeAndObjectCategory<T>[];
  /**
   * One-to-one navigation property to the {@link MaintainRegulationMaterialGroup} entity.
   */
  declare siblingEntity?: MaintainRegulationMaterialGroup<T> | null;

  constructor(_entityApi: MaintainRegulationMaterialGroupApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationMaterialGroupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationMaterialGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  manageRegulationTypeAndObjectCategory: ManageRegulationTypeAndObjectCategoryType<T>[];
  siblingEntity?: MaintainRegulationMaterialGroupType<T> | null;
}
