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
import { RegulationCategory } from './RegulationCategory';

/**
 * Request builder class for operations supported on the {@link RegulationCategory} entity.
 */
export class RegulationCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulationCategory<T>, T> {
  /**
   * Returns a request builder for querying all `RegulationCategory` entities.
   * @returns A request builder for creating requests to retrieve all `RegulationCategory` entities.
   */
  getAll(): GetAllRequestBuilder<RegulationCategory<T>, T> {
    return new GetAllRequestBuilder<RegulationCategory<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RegulationCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulationCategory`.
   */
  create(
    entity: RegulationCategory<T>
  ): CreateRequestBuilder<RegulationCategory<T>, T> {
    return new CreateRequestBuilder<RegulationCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulationCategory` entity based on its keys.
   * @param category Key property. See {@link RegulationCategory.category}.
   * @returns A request builder for creating requests to retrieve one `RegulationCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulationCategory<T>, T> {
    return new GetByKeyRequestBuilder<RegulationCategory<T>, T>(
      this.entityApi,
      { category: category }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegulationCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulationCategory`.
   */
  update(
    entity: RegulationCategory<T>
  ): UpdateRequestBuilder<RegulationCategory<T>, T> {
    return new UpdateRequestBuilder<RegulationCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulationCategory`.
   * @param category Key property. See {@link RegulationCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `RegulationCategory`.
   */
  delete(category: string): DeleteRequestBuilder<RegulationCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulationCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulationCategory` by taking the entity as a parameter.
   */
  delete(
    entity: RegulationCategory<T>
  ): DeleteRequestBuilder<RegulationCategory<T>, T>;
  delete(
    categoryOrEntity: any
  ): DeleteRequestBuilder<RegulationCategory<T>, T> {
    return new DeleteRequestBuilder<RegulationCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof RegulationCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
