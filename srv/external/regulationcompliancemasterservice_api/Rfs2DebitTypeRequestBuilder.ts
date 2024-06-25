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
import { Rfs2DebitType } from './Rfs2DebitType';

/**
 * Request builder class for operations supported on the {@link Rfs2DebitType} entity.
 */
export class Rfs2DebitTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Rfs2DebitType<T>, T> {
  /**
   * Returns a request builder for querying all `Rfs2DebitType` entities.
   * @returns A request builder for creating requests to retrieve all `Rfs2DebitType` entities.
   */
  getAll(): GetAllRequestBuilder<Rfs2DebitType<T>, T> {
    return new GetAllRequestBuilder<Rfs2DebitType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Rfs2DebitType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Rfs2DebitType`.
   */
  create(entity: Rfs2DebitType<T>): CreateRequestBuilder<Rfs2DebitType<T>, T> {
    return new CreateRequestBuilder<Rfs2DebitType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Rfs2DebitType` entity based on its keys.
   * @param category Key property. See {@link Rfs2DebitType.category}.
   * @returns A request builder for creating requests to retrieve one `Rfs2DebitType` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Rfs2DebitType<T>, T> {
    return new GetByKeyRequestBuilder<Rfs2DebitType<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Rfs2DebitType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Rfs2DebitType`.
   */
  update(entity: Rfs2DebitType<T>): UpdateRequestBuilder<Rfs2DebitType<T>, T> {
    return new UpdateRequestBuilder<Rfs2DebitType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Rfs2DebitType`.
   * @param category Key property. See {@link Rfs2DebitType.category}.
   * @returns A request builder for creating requests that delete an entity of type `Rfs2DebitType`.
   */
  delete(category: string): DeleteRequestBuilder<Rfs2DebitType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Rfs2DebitType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Rfs2DebitType` by taking the entity as a parameter.
   */
  delete(entity: Rfs2DebitType<T>): DeleteRequestBuilder<Rfs2DebitType<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<Rfs2DebitType<T>, T> {
    return new DeleteRequestBuilder<Rfs2DebitType<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof Rfs2DebitType
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
