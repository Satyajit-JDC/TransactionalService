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
import type { LogUtilityServiceApi } from './LogUtilityServiceApi';

/**
 * This class represents the entity "LogUtilityService" of service "LogUtilityService".
 */
export class LogUtilityService<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LogUtilityServiceType<T>
{
  /**
   * Technical entity name for LogUtilityService.
   */
  static _entityName = 'LogUtilityService';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/odata/v4/log-utility';
  /**
   * All key fields of the LogUtilityService entity
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
   * Object.
   * Maximum length: 50.
   * @nullable
   */
  declare object?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message.
   * Maximum length: 500.
   * @nullable
   */
  declare message?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Type.
   * @nullable
   */
  declare messageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Type.
   * Maximum length: 10.
   * @nullable
   */
  declare regulationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Sub Object Type.
   * Maximum length: 10.
   * @nullable
   */
  declare regulationSubObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Module.
   * Maximum length: 50.
   * @nullable
   */
  declare applicationModule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Sub Module.
   * Maximum length: 50.
   * @nullable
   */
  declare applicationSubModule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Message.
   * Maximum length: 500.
   * @nullable
   */
  declare technicalMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LogUtilityServiceApi<T>) {
    super(_entityApi);
  }
}

export interface LogUtilityServiceType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  object?: DeserializedType<T, 'Edm.String'> | null;
  message?: DeserializedType<T, 'Edm.String'> | null;
  messageType?: DeserializedType<T, 'Edm.String'> | null;
  regulationType?: DeserializedType<T, 'Edm.String'> | null;
  regulationSubObjectType?: DeserializedType<T, 'Edm.String'> | null;
  applicationModule?: DeserializedType<T, 'Edm.String'> | null;
  applicationSubModule?: DeserializedType<T, 'Edm.String'> | null;
  technicalMessage?: DeserializedType<T, 'Edm.String'> | null;
}
