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
import { FuelSubCategory } from './FuelSubCategory';

/**
 * Request builder class for operations supported on the {@link FuelSubCategory} entity.
 */
export class FuelSubCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FuelSubCategory<T>, T> {
  /**
   * Returns a request builder for querying all `FuelSubCategory` entities.
   * @returns A request builder for creating requests to retrieve all `FuelSubCategory` entities.
   */
  getAll(): GetAllRequestBuilder<FuelSubCategory<T>, T> {
    return new GetAllRequestBuilder<FuelSubCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FuelSubCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FuelSubCategory`.
   */
  create(
    entity: FuelSubCategory<T>
  ): CreateRequestBuilder<FuelSubCategory<T>, T> {
    return new CreateRequestBuilder<FuelSubCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FuelSubCategory` entity based on its keys.
   * @param category Key property. See {@link FuelSubCategory.category}.
   * @returns A request builder for creating requests to retrieve one `FuelSubCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FuelSubCategory<T>, T> {
    return new GetByKeyRequestBuilder<FuelSubCategory<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FuelSubCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FuelSubCategory`.
   */
  update(
    entity: FuelSubCategory<T>
  ): UpdateRequestBuilder<FuelSubCategory<T>, T> {
    return new UpdateRequestBuilder<FuelSubCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FuelSubCategory`.
   * @param category Key property. See {@link FuelSubCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `FuelSubCategory`.
   */
  delete(category: string): DeleteRequestBuilder<FuelSubCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FuelSubCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FuelSubCategory` by taking the entity as a parameter.
   */
  delete(
    entity: FuelSubCategory<T>
  ): DeleteRequestBuilder<FuelSubCategory<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<FuelSubCategory<T>, T> {
    return new DeleteRequestBuilder<FuelSubCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof FuelSubCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
