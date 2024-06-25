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
import { PassRetainIndicator } from './PassRetainIndicator';

/**
 * Request builder class for operations supported on the {@link PassRetainIndicator} entity.
 */
export class PassRetainIndicatorRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PassRetainIndicator<T>, T> {
  /**
   * Returns a request builder for querying all `PassRetainIndicator` entities.
   * @returns A request builder for creating requests to retrieve all `PassRetainIndicator` entities.
   */
  getAll(): GetAllRequestBuilder<PassRetainIndicator<T>, T> {
    return new GetAllRequestBuilder<PassRetainIndicator<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PassRetainIndicator` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PassRetainIndicator`.
   */
  create(
    entity: PassRetainIndicator<T>
  ): CreateRequestBuilder<PassRetainIndicator<T>, T> {
    return new CreateRequestBuilder<PassRetainIndicator<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PassRetainIndicator` entity based on its keys.
   * @param category Key property. See {@link PassRetainIndicator.category}.
   * @returns A request builder for creating requests to retrieve one `PassRetainIndicator` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PassRetainIndicator<T>, T> {
    return new GetByKeyRequestBuilder<PassRetainIndicator<T>, T>(
      this.entityApi,
      { category: category }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PassRetainIndicator`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PassRetainIndicator`.
   */
  update(
    entity: PassRetainIndicator<T>
  ): UpdateRequestBuilder<PassRetainIndicator<T>, T> {
    return new UpdateRequestBuilder<PassRetainIndicator<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PassRetainIndicator`.
   * @param category Key property. See {@link PassRetainIndicator.category}.
   * @returns A request builder for creating requests that delete an entity of type `PassRetainIndicator`.
   */
  delete(category: string): DeleteRequestBuilder<PassRetainIndicator<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PassRetainIndicator`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PassRetainIndicator` by taking the entity as a parameter.
   */
  delete(
    entity: PassRetainIndicator<T>
  ): DeleteRequestBuilder<PassRetainIndicator<T>, T>;
  delete(
    categoryOrEntity: any
  ): DeleteRequestBuilder<PassRetainIndicator<T>, T> {
    return new DeleteRequestBuilder<PassRetainIndicator<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof PassRetainIndicator
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
