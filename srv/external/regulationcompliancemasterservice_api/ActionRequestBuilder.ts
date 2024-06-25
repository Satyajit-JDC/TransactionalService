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
import { Action } from './Action';

/**
 * Request builder class for operations supported on the {@link Action} entity.
 */
export class ActionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Action<T>, T> {
  /**
   * Returns a request builder for querying all `Action` entities.
   * @returns A request builder for creating requests to retrieve all `Action` entities.
   */
  getAll(): GetAllRequestBuilder<Action<T>, T> {
    return new GetAllRequestBuilder<Action<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Action` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Action`.
   */
  create(entity: Action<T>): CreateRequestBuilder<Action<T>, T> {
    return new CreateRequestBuilder<Action<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Action` entity based on its keys.
   * @param category Key property. See {@link Action.category}.
   * @returns A request builder for creating requests to retrieve one `Action` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Action<T>, T> {
    return new GetByKeyRequestBuilder<Action<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Action`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Action`.
   */
  update(entity: Action<T>): UpdateRequestBuilder<Action<T>, T> {
    return new UpdateRequestBuilder<Action<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Action`.
   * @param category Key property. See {@link Action.category}.
   * @returns A request builder for creating requests that delete an entity of type `Action`.
   */
  delete(category: string): DeleteRequestBuilder<Action<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Action`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Action` by taking the entity as a parameter.
   */
  delete(entity: Action<T>): DeleteRequestBuilder<Action<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<Action<T>, T> {
    return new DeleteRequestBuilder<Action<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof Action
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
