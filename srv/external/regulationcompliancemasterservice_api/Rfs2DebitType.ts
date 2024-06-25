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
import type { Rfs2DebitTypeApi } from './Rfs2DebitTypeApi';

/**
 * This class represents the entity "RFS2DebitType" of service "RegulationComplianceMasterService".
 */
export class Rfs2DebitType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Rfs2DebitTypeType<T>
{
  /**
   * Technical entity name for Rfs2DebitType.
   */
  static _entityName = 'RFS2DebitType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Rfs2DebitType entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 3.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Rfs2DebitTypeApi<T>) {
    super(_entityApi);
  }
}

export interface Rfs2DebitTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
