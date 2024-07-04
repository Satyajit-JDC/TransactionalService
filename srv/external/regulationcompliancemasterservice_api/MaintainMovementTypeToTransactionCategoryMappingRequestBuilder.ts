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
import { MaintainMovementTypeToTransactionCategoryMapping } from './MaintainMovementTypeToTransactionCategoryMapping';

/**
 * Request builder class for operations supported on the {@link MaintainMovementTypeToTransactionCategoryMapping} entity.
 */
export class MaintainMovementTypeToTransactionCategoryMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  MaintainMovementTypeToTransactionCategoryMapping<T>,
  T
> {
  /**
   * Returns a request builder for querying all `MaintainMovementTypeToTransactionCategoryMapping` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainMovementTypeToTransactionCategoryMapping` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainMovementTypeToTransactionCategoryMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   */
  create(
    entity: MaintainMovementTypeToTransactionCategoryMapping<T>
  ): CreateRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  > {
    return new CreateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainMovementTypeToTransactionCategoryMapping` entity based on its keys.
   * @param id Key property. See {@link MaintainMovementTypeToTransactionCategoryMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementTypeToTransactionCategoryMapping.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainMovementTypeToTransactionCategoryMapping` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   */
  update(
    entity: MaintainMovementTypeToTransactionCategoryMapping<T>
  ): UpdateRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  > {
    return new UpdateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   * @param id Key property. See {@link MaintainMovementTypeToTransactionCategoryMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementTypeToTransactionCategoryMapping.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementTypeToTransactionCategoryMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementTypeToTransactionCategoryMapping` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainMovementTypeToTransactionCategoryMapping<T>
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  >;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<
    MaintainMovementTypeToTransactionCategoryMapping<T>,
    T
  > {
    return new DeleteRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainMovementTypeToTransactionCategoryMapping
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
