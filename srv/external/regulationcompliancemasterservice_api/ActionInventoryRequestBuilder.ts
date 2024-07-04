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
import { ActionInventory } from './ActionInventory';

/**
 * Request builder class for operations supported on the {@link ActionInventory} entity.
 */
export class ActionInventoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionInventory<T>, T> {
  /**
   * Returns a request builder for querying all `ActionInventory` entities.
   * @returns A request builder for creating requests to retrieve all `ActionInventory` entities.
   */
  getAll(): GetAllRequestBuilder<ActionInventory<T>, T> {
    return new GetAllRequestBuilder<ActionInventory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActionInventory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionInventory`.
   */
  create(
    entity: ActionInventory<T>
  ): CreateRequestBuilder<ActionInventory<T>, T> {
    return new CreateRequestBuilder<ActionInventory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionInventory` entity based on its keys.
   * @param category Key property. See {@link ActionInventory.category}.
   * @returns A request builder for creating requests to retrieve one `ActionInventory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionInventory<T>, T> {
    return new GetByKeyRequestBuilder<ActionInventory<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ActionInventory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionInventory`.
   */
  update(
    entity: ActionInventory<T>
  ): UpdateRequestBuilder<ActionInventory<T>, T> {
    return new UpdateRequestBuilder<ActionInventory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionInventory`.
   * @param category Key property. See {@link ActionInventory.category}.
   * @returns A request builder for creating requests that delete an entity of type `ActionInventory`.
   */
  delete(category: string): DeleteRequestBuilder<ActionInventory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionInventory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionInventory` by taking the entity as a parameter.
   */
  delete(
    entity: ActionInventory<T>
  ): DeleteRequestBuilder<ActionInventory<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<ActionInventory<T>, T> {
    return new DeleteRequestBuilder<ActionInventory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof ActionInventory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
