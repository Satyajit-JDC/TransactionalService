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
import type { MaintainIncotermsImpactForImportOrExportApi } from './MaintainIncotermsImpactForImportOrExportApi';
import { Impact, ImpactType } from './Impact';

/**
 * This class represents the entity "MaintainIncotermsImpactForImportOrExport" of service "RegulationComplianceMasterService".
 */
export class MaintainIncotermsImpactForImportOrExport<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainIncotermsImpactForImportOrExportType<T>
{
  /**
   * Technical entity name for MaintainIncotermsImpactForImportOrExport.
   */
  static _entityName = 'MaintainIncotermsImpactForImportOrExport';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainIncotermsImpactForImportOrExport entity
   */
  static _keys = ['incoTerm', 'IsActiveEntity'];
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
   * Inco Term.
   * Maximum length: 4.
   */
  declare incoTerm: DeserializedType<T, 'Edm.String'>;
  /**
   * Impact Category.
   * Maximum length: 2.
   * @nullable
   */
  declare impactCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Impact} entity.
   */
  declare impact?: Impact<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainIncotermsImpactForImportOrExport} entity.
   */
  declare siblingEntity?: MaintainIncotermsImpactForImportOrExport<T> | null;

  constructor(_entityApi: MaintainIncotermsImpactForImportOrExportApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIncotermsImpactForImportOrExportType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  incoTerm: DeserializedType<T, 'Edm.String'>;
  impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  impact?: ImpactType<T> | null;
  siblingEntity?: MaintainIncotermsImpactForImportOrExportType<T> | null;
}
