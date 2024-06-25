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
import { RegulationSubCategory } from './RegulationSubCategory';

/**
 * Request builder class for operations supported on the {@link RegulationSubCategory} entity.
 */
export class RegulationSubCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulationSubCategory<T>, T> {
  /**
   * Returns a request builder for querying all `RegulationSubCategory` entities.
   * @returns A request builder for creating requests to retrieve all `RegulationSubCategory` entities.
   */
  getAll(): GetAllRequestBuilder<RegulationSubCategory<T>, T> {
    return new GetAllRequestBuilder<RegulationSubCategory<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegulationSubCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulationSubCategory`.
   */
  create(
    entity: RegulationSubCategory<T>
  ): CreateRequestBuilder<RegulationSubCategory<T>, T> {
    return new CreateRequestBuilder<RegulationSubCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulationSubCategory` entity based on its keys.
   * @param category Key property. See {@link RegulationSubCategory.category}.
   * @returns A request builder for creating requests to retrieve one `RegulationSubCategory` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulationSubCategory<T>, T> {
    return new GetByKeyRequestBuilder<RegulationSubCategory<T>, T>(
      this.entityApi,
      { category: category }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegulationSubCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulationSubCategory`.
   */
  update(
    entity: RegulationSubCategory<T>
  ): UpdateRequestBuilder<RegulationSubCategory<T>, T> {
    return new UpdateRequestBuilder<RegulationSubCategory<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulationSubCategory`.
   * @param category Key property. See {@link RegulationSubCategory.category}.
   * @returns A request builder for creating requests that delete an entity of type `RegulationSubCategory`.
   */
  delete(category: string): DeleteRequestBuilder<RegulationSubCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulationSubCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulationSubCategory` by taking the entity as a parameter.
   */
  delete(
    entity: RegulationSubCategory<T>
  ): DeleteRequestBuilder<RegulationSubCategory<T>, T>;
  delete(
    categoryOrEntity: any
  ): DeleteRequestBuilder<RegulationSubCategory<T>, T> {
    return new DeleteRequestBuilder<RegulationSubCategory<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof RegulationSubCategory
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
