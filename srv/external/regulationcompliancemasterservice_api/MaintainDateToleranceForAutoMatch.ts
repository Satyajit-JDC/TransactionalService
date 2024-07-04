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
import type { MaintainDateToleranceForAutoMatchApi } from './MaintainDateToleranceForAutoMatchApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';

/**
 * This class represents the entity "MaintainDateToleranceForAutoMatch" of service "RegulationComplianceMasterService".
 */
export class MaintainDateToleranceForAutoMatch<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainDateToleranceForAutoMatchType<T>
{
  /**
   * Technical entity name for MaintainDateToleranceForAutoMatch.
   */
  static _entityName = 'MaintainDateToleranceForAutoMatch';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainDateToleranceForAutoMatch entity
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
   * Number Of Days.
   * @nullable
   */
  declare numberOfDays?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * One-to-one navigation property to the {@link MaintainDateToleranceForAutoMatch} entity.
   */
  declare siblingEntity?: MaintainDateToleranceForAutoMatch<T> | null;

  constructor(_entityApi: MaintainDateToleranceForAutoMatchApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainDateToleranceForAutoMatchType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  numberOfDays?: DeserializedType<T, 'Edm.Int32'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  siblingEntity?: MaintainDateToleranceForAutoMatchType<T> | null;
}
