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
import { MaintainIdRangeForRenewableObject } from './MaintainIdRangeForRenewableObject';

/**
 * Request builder class for operations supported on the {@link MaintainIdRangeForRenewableObject} entity.
 */
export class MaintainIdRangeForRenewableObjectRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIdRangeForRenewableObject` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIdRangeForRenewableObject` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
    return new GetAllRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainIdRangeForRenewableObject` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIdRangeForRenewableObject`.
   */
  create(
    entity: MaintainIdRangeForRenewableObject<T>
  ): CreateRequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
    return new CreateRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainIdRangeForRenewableObject` entity based on its keys.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObject.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForRenewableObject.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainIdRangeForRenewableObject` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
    return new GetByKeyRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIdRangeForRenewableObject`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIdRangeForRenewableObject`.
   */
  update(
    entity: MaintainIdRangeForRenewableObject<T>
  ): UpdateRequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
    return new UpdateRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObject`.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObject.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForRenewableObject.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObject`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObject`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObject` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIdRangeForRenewableObject<T>
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObject<T>, T> {
    return new DeleteRequestBuilder<MaintainIdRangeForRenewableObject<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainIdRangeForRenewableObject
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
