/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { LogUtilityService } from './index';

/**
 * Batch builder for operations supported on the Logutilityservice Api.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadLogutilityserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadLogutilityserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadLogutilityserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadLogutilityserviceApiRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadLogutilityserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultLogutilityserviceApiPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Logutilityservice Api.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteLogutilityserviceApiRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteLogutilityserviceApiRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteLogutilityserviceApiRequestBuilder<DeSerializersT>
    | Array<WriteLogutilityserviceApiRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteLogutilityserviceApiRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultLogutilityserviceApiPath = '/odata/v4/log-utility';
export type ReadLogutilityserviceApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<LogUtilityService<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LogUtilityService<DeSerializersT>, DeSerializersT>;
export type WriteLogutilityserviceApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<LogUtilityService<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LogUtilityService<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LogUtilityService<DeSerializersT>, DeSerializersT>;
