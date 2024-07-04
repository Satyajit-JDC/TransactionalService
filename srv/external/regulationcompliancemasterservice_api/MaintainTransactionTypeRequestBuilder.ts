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
import { MaintainTransactionType } from './MaintainTransactionType';

/**
 * Request builder class for operations supported on the {@link MaintainTransactionType} entity.
 */
export class MaintainTransactionTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainTransactionType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainTransactionType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainTransactionType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainTransactionType<T>, T> {
    return new GetAllRequestBuilder<MaintainTransactionType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainTransactionType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainTransactionType`.
   */
  create(
    entity: MaintainTransactionType<T>
  ): CreateRequestBuilder<MaintainTransactionType<T>, T> {
    return new CreateRequestBuilder<MaintainTransactionType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainTransactionType` entity based on its keys.
   * @param transactionType Key property. See {@link MaintainTransactionType.transactionType}.
   * @param isActiveEntity Key property. See {@link MaintainTransactionType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainTransactionType` entity based on its keys.
   */
  getByKey(
    transactionType: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainTransactionType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainTransactionType<T>, T>(
      this.entityApi,
      {
        transactionType: transactionType,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainTransactionType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainTransactionType`.
   */
  update(
    entity: MaintainTransactionType<T>
  ): UpdateRequestBuilder<MaintainTransactionType<T>, T> {
    return new UpdateRequestBuilder<MaintainTransactionType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainTransactionType`.
   * @param transactionType Key property. See {@link MaintainTransactionType.transactionType}.
   * @param isActiveEntity Key property. See {@link MaintainTransactionType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainTransactionType`.
   */
  delete(
    transactionType: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainTransactionType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainTransactionType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainTransactionType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainTransactionType<T>
  ): DeleteRequestBuilder<MaintainTransactionType<T>, T>;
  delete(
    transactionTypeOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainTransactionType<T>, T> {
    return new DeleteRequestBuilder<MaintainTransactionType<T>, T>(
      this.entityApi,
      transactionTypeOrEntity instanceof MaintainTransactionType
        ? transactionTypeOrEntity
        : {
            transactionType: transactionTypeOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
