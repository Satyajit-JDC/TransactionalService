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
import { MaintainIdRangeForRenewableObjects } from './MaintainIdRangeForRenewableObjects';

/**
 * Request builder class for operations supported on the {@link MaintainIdRangeForRenewableObjects} entity.
 */
export class MaintainIdRangeForRenewableObjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIdRangeForRenewableObjects` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIdRangeForRenewableObjects` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
    return new GetAllRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainIdRangeForRenewableObjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIdRangeForRenewableObjects`.
   */
  create(
    entity: MaintainIdRangeForRenewableObjects<T>
  ): CreateRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
    return new CreateRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainIdRangeForRenewableObjects` entity based on its keys.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObjects.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForRenewableObjects.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainIdRangeForRenewableObjects` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
    return new GetByKeyRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIdRangeForRenewableObjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIdRangeForRenewableObjects`.
   */
  update(
    entity: MaintainIdRangeForRenewableObjects<T>
  ): UpdateRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
    return new UpdateRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObjects`.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObjects.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForRenewableObjects.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObjects`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObjects` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIdRangeForRenewableObjects<T>
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T> {
    return new DeleteRequestBuilder<MaintainIdRangeForRenewableObjects<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainIdRangeForRenewableObjects
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
