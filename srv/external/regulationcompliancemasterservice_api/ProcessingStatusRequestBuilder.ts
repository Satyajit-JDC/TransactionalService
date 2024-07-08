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
import { ProcessingStatus } from './ProcessingStatus';

/**
 * Request builder class for operations supported on the {@link ProcessingStatus} entity.
 */
export class ProcessingStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessingStatus<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessingStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessingStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessingStatus<T>, T> {
    return new GetAllRequestBuilder<ProcessingStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessingStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessingStatus`.
   */
  create(
    entity: ProcessingStatus<T>
  ): CreateRequestBuilder<ProcessingStatus<T>, T> {
    return new CreateRequestBuilder<ProcessingStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessingStatus` entity based on its keys.
   * @param category Key property. See {@link ProcessingStatus.category}.
   * @returns A request builder for creating requests to retrieve one `ProcessingStatus` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessingStatus<T>, T> {
    return new GetByKeyRequestBuilder<ProcessingStatus<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessingStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessingStatus`.
   */
  update(
    entity: ProcessingStatus<T>
  ): UpdateRequestBuilder<ProcessingStatus<T>, T> {
    return new UpdateRequestBuilder<ProcessingStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessingStatus`.
   * @param category Key property. See {@link ProcessingStatus.category}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingStatus`.
   */
  delete(category: string): DeleteRequestBuilder<ProcessingStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessingStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessingStatus<T>
  ): DeleteRequestBuilder<ProcessingStatus<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<ProcessingStatus<T>, T> {
    return new DeleteRequestBuilder<ProcessingStatus<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof ProcessingStatus
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
