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
import { FuelCode } from './FuelCode';

/**
 * Request builder class for operations supported on the {@link FuelCode} entity.
 */
export class FuelCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FuelCode<T>, T> {
  /**
   * Returns a request builder for querying all `FuelCode` entities.
   * @returns A request builder for creating requests to retrieve all `FuelCode` entities.
   */
  getAll(): GetAllRequestBuilder<FuelCode<T>, T> {
    return new GetAllRequestBuilder<FuelCode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FuelCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FuelCode`.
   */
  create(entity: FuelCode<T>): CreateRequestBuilder<FuelCode<T>, T> {
    return new CreateRequestBuilder<FuelCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FuelCode` entity based on its keys.
   * @param category Key property. See {@link FuelCode.category}.
   * @returns A request builder for creating requests to retrieve one `FuelCode` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FuelCode<T>, T> {
    return new GetByKeyRequestBuilder<FuelCode<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FuelCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FuelCode`.
   */
  update(entity: FuelCode<T>): UpdateRequestBuilder<FuelCode<T>, T> {
    return new UpdateRequestBuilder<FuelCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FuelCode`.
   * @param category Key property. See {@link FuelCode.category}.
   * @returns A request builder for creating requests that delete an entity of type `FuelCode`.
   */
  delete(category: string): DeleteRequestBuilder<FuelCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FuelCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FuelCode` by taking the entity as a parameter.
   */
  delete(entity: FuelCode<T>): DeleteRequestBuilder<FuelCode<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<FuelCode<T>, T> {
    return new DeleteRequestBuilder<FuelCode<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof FuelCode
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
