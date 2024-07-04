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
import type { MaintainIdRangeForRenewableObjectSequenceApi } from './MaintainIdRangeForRenewableObjectSequenceApi';
import { RegulationSubType, RegulationSubTypeType } from './RegulationSubType';

/**
 * This class represents the entity "MaintainIdRangeForRenewableObjectSequence" of service "RegulationComplianceMasterService".
 */
export class MaintainIdRangeForRenewableObjectSequence<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainIdRangeForRenewableObjectSequenceType<T>
{
  /**
   * Technical entity name for MaintainIdRangeForRenewableObjectSequence.
   */
  static _entityName = 'MaintainIdRangeForRenewableObjectSequence';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainIdRangeForRenewableObjectSequence entity
   */
  static _keys = ['ID'];
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
   * Regulation Sub Scenario Category.
   * Maximum length: 20.
   * @nullable
   */
  declare regulationSubScenarioCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * In Active.
   * @nullable
   */
  declare inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Current Seqence.
   * @nullable
   */
  declare currentSeqence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link RegulationSubType} entity.
   */
  declare regulationSubScenario?: RegulationSubType<T> | null;

  constructor(_entityApi: MaintainIdRangeForRenewableObjectSequenceApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIdRangeForRenewableObjectSequenceType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  currentSeqence?: DeserializedType<T, 'Edm.Int32'> | null;
  regulationSubScenario?: RegulationSubTypeType<T> | null;
}
