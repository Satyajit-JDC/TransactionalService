/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { MaintainAdjustmentReasonCode } from './MaintainAdjustmentReasonCode';

/**
 * Request builder class for operations supported on the {@link MaintainAdjustmentReasonCode} entity.
 */
export class MaintainAdjustmentReasonCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainAdjustmentReasonCode` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainAdjustmentReasonCode` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
    return new GetAllRequestBuilder<MaintainAdjustmentReasonCode<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainAdjustmentReasonCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainAdjustmentReasonCode`.
   */
  create(
    entity: MaintainAdjustmentReasonCode<T>
  ): CreateRequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
    return new CreateRequestBuilder<MaintainAdjustmentReasonCode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainAdjustmentReasonCode` entity based on its keys.
   * @param id Key property. See {@link MaintainAdjustmentReasonCode.id}.
   * @param reasonCode Key property. See {@link MaintainAdjustmentReasonCode.reasonCode}.
   * @param isActiveEntity Key property. See {@link MaintainAdjustmentReasonCode.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainAdjustmentReasonCode` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    reasonCode: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
    return new GetByKeyRequestBuilder<MaintainAdjustmentReasonCode<T>, T>(
      this.entityApi,
      {
        ID: id,
        reasonCode: reasonCode,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainAdjustmentReasonCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainAdjustmentReasonCode`.
   */
  update(
    entity: MaintainAdjustmentReasonCode<T>
  ): UpdateRequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
    return new UpdateRequestBuilder<MaintainAdjustmentReasonCode<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainAdjustmentReasonCode`.
   * @param id Key property. See {@link MaintainAdjustmentReasonCode.id}.
   * @param reasonCode Key property. See {@link MaintainAdjustmentReasonCode.reasonCode}.
   * @param isActiveEntity Key property. See {@link MaintainAdjustmentReasonCode.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainAdjustmentReasonCode`.
   */
  delete(
    id: string,
    reasonCode: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainAdjustmentReasonCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainAdjustmentReasonCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainAdjustmentReasonCode` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainAdjustmentReasonCode<T>
  ): DeleteRequestBuilder<MaintainAdjustmentReasonCode<T>, T>;
  delete(
    idOrEntity: any,
    reasonCode?: string,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainAdjustmentReasonCode<T>, T> {
    return new DeleteRequestBuilder<MaintainAdjustmentReasonCode<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainAdjustmentReasonCode
        ? idOrEntity
        : {
            ID: idOrEntity!,
            reasonCode: reasonCode!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
