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
import { FuelCategory } from './FuelCategory';

/**
 * Request builder class for operations supported on the {@link FuelCategory} entity.
 */
export class FuelCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FuelCategory<T>, T> {
  /**
   * Returns a request builder for querying all `FuelCategory` entities.
   * @returns A request builder for creating requests to retrieve all `FuelCategory` entities.
   */
  getAll(): GetAllRequestBuilder<FuelCategory<T>, T> {
    return new GetAllRequestBuilder<FuelCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FuelCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FuelCategory`.
   */
  create(entity: FuelCategory<T>): CreateRequestBuilder<FuelCategory<T>, T> {
    return new CreateRequestBuilder<FuelCategory<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FuelCategory` entity based on its keys.
   * @param category Key property. See {@link FuelCategory.category}.
   * @returns A request builder for creating requests to retrieve one `FuelCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FuelCategory<T>, T> {
    return new GetByKeyRequestBuilder<FuelCategory<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FuelCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FuelCategory`.
   */
  update(entity: FuelCategory<T>): UpdateRequestBuilder<FuelCategory<T>, T> {
    return new UpdateRequestBuilder<FuelCategory<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FuelCategory`.
   * @param category Key property. See {@link FuelCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `FuelCategory`.
   */
  delete(category: string): DeleteRequestBuilder<FuelCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FuelCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FuelCategory` by taking the entity as a parameter.
   */
  delete(entity: FuelCategory<T>): DeleteRequestBuilder<FuelCategory<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<FuelCategory<T>, T> {
    return new DeleteRequestBuilder<FuelCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof FuelCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
