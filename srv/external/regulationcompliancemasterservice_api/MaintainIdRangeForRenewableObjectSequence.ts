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
import {
  RegulationSubCategory,
  RegulationSubCategoryType
} from './RegulationSubCategory';

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
   * One-to-one navigation property to the {@link RegulationSubCategory} entity.
   */
  declare regulationSubScenario?: RegulationSubCategory<T> | null;

  constructor(_entityApi: MaintainIdRangeForRenewableObjectSequenceApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIdRangeForRenewableObjectSequenceType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  currentSeqence?: DeserializedType<T, 'Edm.Int32'> | null;
  regulationSubScenario?: RegulationSubCategoryType<T> | null;
}
