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
import { Impact } from './Impact';

/**
 * Request builder class for operations supported on the {@link Impact} entity.
 */
export class ImpactRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Impact<T>, T> {
  /**
   * Returns a request builder for querying all `Impact` entities.
   * @returns A request builder for creating requests to retrieve all `Impact` entities.
   */
  getAll(): GetAllRequestBuilder<Impact<T>, T> {
    return new GetAllRequestBuilder<Impact<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Impact` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Impact`.
   */
  create(entity: Impact<T>): CreateRequestBuilder<Impact<T>, T> {
    return new CreateRequestBuilder<Impact<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Impact` entity based on its keys.
   * @param category Key property. See {@link Impact.category}.
   * @returns A request builder for creating requests to retrieve one `Impact` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Impact<T>, T> {
    return new GetByKeyRequestBuilder<Impact<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Impact`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Impact`.
   */
  update(entity: Impact<T>): UpdateRequestBuilder<Impact<T>, T> {
    return new UpdateRequestBuilder<Impact<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Impact`.
   * @param category Key property. See {@link Impact.category}.
   * @returns A request builder for creating requests that delete an entity of type `Impact`.
   */
  delete(category: string): DeleteRequestBuilder<Impact<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Impact`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Impact` by taking the entity as a parameter.
   */
  delete(entity: Impact<T>): DeleteRequestBuilder<Impact<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<Impact<T>, T> {
    return new DeleteRequestBuilder<Impact<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof Impact
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
