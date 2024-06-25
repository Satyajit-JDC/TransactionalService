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
import type { MaintainRegulationGroupViewApi } from './MaintainRegulationGroupViewApi';
import {
  MaintainRegulationGroup,
  MaintainRegulationGroupType
} from './MaintainRegulationGroup';

/**
 * This class represents the entity "MaintainRegulationGroupView" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationGroupView<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationGroupViewType<T>
{
  /**
   * Technical entity name for MaintainRegulationGroupView.
   */
  static _entityName = 'MaintainRegulationGroupView';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationGroupView entity
   */
  static _keys: any = [];
  /**
   * Regulation Type.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Group Id.
   * @nullable
   */
  declare regulationGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Regulation Group Regulation Group.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationGroupRegulationGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * Maximum length: 50.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationGroup} entity.
   */
  declare regulationGroup?: MaintainRegulationGroup<T> | null;

  constructor(_entityApi: MaintainRegulationGroupViewApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationGroupViewType<
  T extends DeSerializers = DefaultDeSerializers
> {
  regulationType?: DeserializedType<T, 'Edm.String'> | null;
  regulationGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationGroupRegulationGroup?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  regulationGroup?: MaintainRegulationGroupType<T> | null;
}
