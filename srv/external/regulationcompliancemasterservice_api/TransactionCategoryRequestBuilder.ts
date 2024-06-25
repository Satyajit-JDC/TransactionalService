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
import { TransactionCategory } from './TransactionCategory';

/**
 * Request builder class for operations supported on the {@link TransactionCategory} entity.
 */
export class TransactionCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionCategory<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionCategory` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionCategory` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionCategory<T>, T> {
    return new GetAllRequestBuilder<TransactionCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransactionCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionCategory`.
   */
  create(
    entity: TransactionCategory<T>
  ): CreateRequestBuilder<TransactionCategory<T>, T> {
    return new CreateRequestBuilder<TransactionCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionCategory` entity based on its keys.
   * @param category Key property. See {@link TransactionCategory.category}.
   * @returns A request builder for creating requests to retrieve one `TransactionCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionCategory<T>, T> {
    return new GetByKeyRequestBuilder<TransactionCategory<T>, T>(
      this.entityApi,
      { category: category }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionCategory`.
   */
  update(
    entity: TransactionCategory<T>
  ): UpdateRequestBuilder<TransactionCategory<T>, T> {
    return new UpdateRequestBuilder<TransactionCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionCategory`.
   * @param category Key property. See {@link TransactionCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCategory`.
   */
  delete(category: string): DeleteRequestBuilder<TransactionCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionCategory` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionCategory<T>
  ): DeleteRequestBuilder<TransactionCategory<T>, T>;
  delete(
    categoryOrEntity: any
  ): DeleteRequestBuilder<TransactionCategory<T>, T> {
    return new DeleteRequestBuilder<TransactionCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof TransactionCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
