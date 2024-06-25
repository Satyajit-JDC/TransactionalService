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
import { ObjectCategory } from './ObjectCategory';

/**
 * Request builder class for operations supported on the {@link ObjectCategory} entity.
 */
export class ObjectCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ObjectCategory<T>, T> {
  /**
   * Returns a request builder for querying all `ObjectCategory` entities.
   * @returns A request builder for creating requests to retrieve all `ObjectCategory` entities.
   */
  getAll(): GetAllRequestBuilder<ObjectCategory<T>, T> {
    return new GetAllRequestBuilder<ObjectCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ObjectCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ObjectCategory`.
   */
  create(
    entity: ObjectCategory<T>
  ): CreateRequestBuilder<ObjectCategory<T>, T> {
    return new CreateRequestBuilder<ObjectCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ObjectCategory` entity based on its keys.
   * @param category Key property. See {@link ObjectCategory.category}.
   * @returns A request builder for creating requests to retrieve one `ObjectCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ObjectCategory<T>, T> {
    return new GetByKeyRequestBuilder<ObjectCategory<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ObjectCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ObjectCategory`.
   */
  update(
    entity: ObjectCategory<T>
  ): UpdateRequestBuilder<ObjectCategory<T>, T> {
    return new UpdateRequestBuilder<ObjectCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ObjectCategory`.
   * @param category Key property. See {@link ObjectCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `ObjectCategory`.
   */
  delete(category: string): DeleteRequestBuilder<ObjectCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ObjectCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ObjectCategory` by taking the entity as a parameter.
   */
  delete(entity: ObjectCategory<T>): DeleteRequestBuilder<ObjectCategory<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<ObjectCategory<T>, T> {
    return new DeleteRequestBuilder<ObjectCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof ObjectCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
