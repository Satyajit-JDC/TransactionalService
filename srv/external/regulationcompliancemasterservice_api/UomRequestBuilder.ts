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
import { Uom } from './Uom';

/**
 * Request builder class for operations supported on the {@link Uom} entity.
 */
export class UomRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Uom<T>, T> {
  /**
   * Returns a request builder for querying all `Uom` entities.
   * @returns A request builder for creating requests to retrieve all `Uom` entities.
   */
  getAll(): GetAllRequestBuilder<Uom<T>, T> {
    return new GetAllRequestBuilder<Uom<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Uom` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Uom`.
   */
  create(entity: Uom<T>): CreateRequestBuilder<Uom<T>, T> {
    return new CreateRequestBuilder<Uom<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Uom` entity based on its keys.
   * @param category Key property. See {@link Uom.category}.
   * @returns A request builder for creating requests to retrieve one `Uom` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Uom<T>, T> {
    return new GetByKeyRequestBuilder<Uom<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Uom`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Uom`.
   */
  update(entity: Uom<T>): UpdateRequestBuilder<Uom<T>, T> {
    return new UpdateRequestBuilder<Uom<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Uom`.
   * @param category Key property. See {@link Uom.category}.
   * @returns A request builder for creating requests that delete an entity of type `Uom`.
   */
  delete(category: string): DeleteRequestBuilder<Uom<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Uom`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Uom` by taking the entity as a parameter.
   */
  delete(entity: Uom<T>): DeleteRequestBuilder<Uom<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<Uom<T>, T> {
    return new DeleteRequestBuilder<Uom<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof Uom
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
