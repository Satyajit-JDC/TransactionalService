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
import { Za_MaterialCharacteristics_R } from './index';

/**
 * Batch builder for operations supported on the Materialcharacteristics Api.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultMaterialcharacteristicsApiPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Materialcharacteristics Api.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteMaterialcharacteristicsApiRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteMaterialcharacteristicsApiRequestBuilder<DeSerializersT>
    | Array<WriteMaterialcharacteristicsApiRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteMaterialcharacteristicsApiRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultMaterialcharacteristicsApiPath =
  '/sap/opu/odata4/sap/zapi_materialcharcs_r_o4/srvd_a2x/sap/zmaterialcharacteristics_r/0001';
export type ReadMaterialcharacteristicsApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >;
export type WriteMaterialcharacteristicsApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >;
