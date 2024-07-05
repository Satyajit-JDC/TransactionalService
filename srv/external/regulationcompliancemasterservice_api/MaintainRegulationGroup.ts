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
import type { MaintainRegulationGroupApi } from './MaintainRegulationGroupApi';
import {
  ManageRegulationTypeAndActive,
  ManageRegulationTypeAndActiveType
} from './ManageRegulationTypeAndActive';

/**
 * This class represents the entity "MaintainRegulationGroup" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationGroup<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationGroupType<T>
{
  /**
   * Technical entity name for MaintainRegulationGroup.
   */
  static _entityName = 'MaintainRegulationGroup';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationGroup entity
   */
  static _keys = ['regulationGroup', 'IsActiveEntity'];
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
   * Regulation Group.
   * Maximum length: 5.
   */
  declare regulationGroup: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link ManageRegulationTypeAndActive} entity.
   */
  declare manageRegulationTypeAndActive: ManageRegulationTypeAndActive<T>[];
  /**
   * One-to-one navigation property to the {@link MaintainRegulationGroup} entity.
   */
  declare siblingEntity?: MaintainRegulationGroup<T> | null;

  constructor(_entityApi: MaintainRegulationGroupApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationGroupType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationGroup: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  manageRegulationTypeAndActive: ManageRegulationTypeAndActiveType<T>[];
  siblingEntity?: MaintainRegulationGroupType<T> | null;
}
