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
import type { MaintainRenewableMovementTypeApi } from './MaintainRenewableMovementTypeApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectType, ObjectTypeType } from './ObjectType';
import {
  MaintainMovementType,
  MaintainMovementTypeType
} from './MaintainMovementType';

/**
 * This class represents the entity "MaintainRenewableMovementType" of service "RegulationComplianceMasterService".
 */
export class MaintainRenewableMovementType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRenewableMovementTypeType<T>
{
  /**
   * Technical entity name for MaintainRenewableMovementType.
   */
  static _entityName = 'MaintainRenewableMovementType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRenewableMovementType entity
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
   * Regulation Type Regulation Type.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationTypeRegulationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Object Type Code.
   * Maximum length: 4.
   * @nullable
   */
  declare objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Movement Type Id.
   * @nullable
   */
  declare inventoryMovementTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Contract Relevant.
   * @nullable
   */
  declare contractRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Side.
   * @nullable
   */
  declare contractSide?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant Movement Type.
   * Maximum length: 3.
   * @nullable
   */
  declare relevantMovementType?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link MaintainRegulationType} entity.
   */
  declare regulationType?: MaintainRegulationType<T> | null;
  /**
   * One-to-one navigation property to the {@link ObjectType} entity.
   */
  declare objectType?: ObjectType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainMovementType} entity.
   */
  declare inventoryMovementType?: MaintainMovementType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRenewableMovementType} entity.
   */
  declare siblingEntity?: MaintainRenewableMovementType<T> | null;

  constructor(_entityApi: MaintainRenewableMovementTypeApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRenewableMovementTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  inventoryMovementTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  contractRelevant?: DeserializedType<T, 'Edm.String'> | null;
  contractSide?: DeserializedType<T, 'Edm.String'> | null;
  relevantMovementType?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectType?: ObjectTypeType<T> | null;
  inventoryMovementType?: MaintainMovementTypeType<T> | null;
  siblingEntity?: MaintainRenewableMovementTypeType<T> | null;
}
