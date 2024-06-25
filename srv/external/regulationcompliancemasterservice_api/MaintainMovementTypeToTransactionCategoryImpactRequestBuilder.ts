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
import { MaintainMovementTypeToTransactionCategoryImpact } from './MaintainMovementTypeToTransactionCategoryImpact';

/**
 * Request builder class for operations supported on the {@link MaintainMovementTypeToTransactionCategoryImpact} entity.
 */
export class MaintainMovementTypeToTransactionCategoryImpactRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  MaintainMovementTypeToTransactionCategoryImpact<T>,
  T
> {
  /**
   * Returns a request builder for querying all `MaintainMovementTypeToTransactionCategoryImpact` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainMovementTypeToTransactionCategoryImpact` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainMovementTypeToTransactionCategoryImpact` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   */
  create(
    entity: MaintainMovementTypeToTransactionCategoryImpact<T>
  ): CreateRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  > {
    return new CreateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainMovementTypeToTransactionCategoryImpact` entity based on its keys.
   * @param id Key property. See {@link MaintainMovementTypeToTransactionCategoryImpact.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementTypeToTransactionCategoryImpact.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainMovementTypeToTransactionCategoryImpact` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   */
  update(
    entity: MaintainMovementTypeToTransactionCategoryImpact<T>
  ): UpdateRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  > {
    return new UpdateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   * @param id Key property. See {@link MaintainMovementTypeToTransactionCategoryImpact.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementTypeToTransactionCategoryImpact.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementTypeToTransactionCategoryImpact`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementTypeToTransactionCategoryImpact` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainMovementTypeToTransactionCategoryImpact<T>
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  >;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryImpact<T>,
    T
  > {
    return new DeleteRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainMovementTypeToTransactionCategoryImpact
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
