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
import { Rfs2FuelCode } from './Rfs2FuelCode';

/**
 * Request builder class for operations supported on the {@link Rfs2FuelCode} entity.
 */
export class Rfs2FuelCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Rfs2FuelCode<T>, T> {
  /**
   * Returns a request builder for querying all `Rfs2FuelCode` entities.
   * @returns A request builder for creating requests to retrieve all `Rfs2FuelCode` entities.
   */
  getAll(): GetAllRequestBuilder<Rfs2FuelCode<T>, T> {
    return new GetAllRequestBuilder<Rfs2FuelCode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Rfs2FuelCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Rfs2FuelCode`.
   */
  create(entity: Rfs2FuelCode<T>): CreateRequestBuilder<Rfs2FuelCode<T>, T> {
    return new CreateRequestBuilder<Rfs2FuelCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Rfs2FuelCode` entity based on its keys.
   * @param category Key property. See {@link Rfs2FuelCode.category}.
   * @returns A request builder for creating requests to retrieve one `Rfs2FuelCode` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Rfs2FuelCode<T>, T> {
    return new GetByKeyRequestBuilder<Rfs2FuelCode<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Rfs2FuelCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Rfs2FuelCode`.
   */
  update(entity: Rfs2FuelCode<T>): UpdateRequestBuilder<Rfs2FuelCode<T>, T> {
    return new UpdateRequestBuilder<Rfs2FuelCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Rfs2FuelCode`.
   * @param category Key property. See {@link Rfs2FuelCode.category}.
   * @returns A request builder for creating requests that delete an entity of type `Rfs2FuelCode`.
   */
  delete(category: string): DeleteRequestBuilder<Rfs2FuelCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Rfs2FuelCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Rfs2FuelCode` by taking the entity as a parameter.
   */
  delete(entity: Rfs2FuelCode<T>): DeleteRequestBuilder<Rfs2FuelCode<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<Rfs2FuelCode<T>, T> {
    return new DeleteRequestBuilder<Rfs2FuelCode<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof Rfs2FuelCode
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
