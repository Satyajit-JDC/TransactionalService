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
import { TransactionSourceScenario } from './TransactionSourceScenario';

/**
 * Request builder class for operations supported on the {@link TransactionSourceScenario} entity.
 */
export class TransactionSourceScenarioRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionSourceScenario<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionSourceScenario` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionSourceScenario` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionSourceScenario<T>, T> {
    return new GetAllRequestBuilder<TransactionSourceScenario<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionSourceScenario` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionSourceScenario`.
   */
  create(
    entity: TransactionSourceScenario<T>
  ): CreateRequestBuilder<TransactionSourceScenario<T>, T> {
    return new CreateRequestBuilder<TransactionSourceScenario<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionSourceScenario` entity based on its keys.
   * @param category Key property. See {@link TransactionSourceScenario.category}.
   * @returns A request builder for creating requests to retrieve one `TransactionSourceScenario` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionSourceScenario<T>, T> {
    return new GetByKeyRequestBuilder<TransactionSourceScenario<T>, T>(
      this.entityApi,
      { category: category }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionSourceScenario`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionSourceScenario`.
   */
  update(
    entity: TransactionSourceScenario<T>
  ): UpdateRequestBuilder<TransactionSourceScenario<T>, T> {
    return new UpdateRequestBuilder<TransactionSourceScenario<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionSourceScenario`.
   * @param category Key property. See {@link TransactionSourceScenario.category}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionSourceScenario`.
   */
  delete(
    category: string
  ): DeleteRequestBuilder<TransactionSourceScenario<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionSourceScenario`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionSourceScenario` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionSourceScenario<T>
  ): DeleteRequestBuilder<TransactionSourceScenario<T>, T>;
  delete(
    categoryOrEntity: any
  ): DeleteRequestBuilder<TransactionSourceScenario<T>, T> {
    return new DeleteRequestBuilder<TransactionSourceScenario<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof TransactionSourceScenario
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
