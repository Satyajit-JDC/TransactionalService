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
import { RegulationSubType } from './RegulationSubType';

/**
 * Request builder class for operations supported on the {@link RegulationSubType} entity.
 */
export class RegulationSubTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulationSubType<T>, T> {
  /**
   * Returns a request builder for querying all `RegulationSubType` entities.
   * @returns A request builder for creating requests to retrieve all `RegulationSubType` entities.
   */
  getAll(): GetAllRequestBuilder<RegulationSubType<T>, T> {
    return new GetAllRequestBuilder<RegulationSubType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RegulationSubType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulationSubType`.
   */
  create(
    entity: RegulationSubType<T>
  ): CreateRequestBuilder<RegulationSubType<T>, T> {
    return new CreateRequestBuilder<RegulationSubType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulationSubType` entity based on its keys.
   * @param category Key property. See {@link RegulationSubType.category}.
   * @returns A request builder for creating requests to retrieve one `RegulationSubType` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulationSubType<T>, T> {
    return new GetByKeyRequestBuilder<RegulationSubType<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RegulationSubType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulationSubType`.
   */
  update(
    entity: RegulationSubType<T>
  ): UpdateRequestBuilder<RegulationSubType<T>, T> {
    return new UpdateRequestBuilder<RegulationSubType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulationSubType`.
   * @param category Key property. See {@link RegulationSubType.category}.
   * @returns A request builder for creating requests that delete an entity of type `RegulationSubType`.
   */
  delete(category: string): DeleteRequestBuilder<RegulationSubType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulationSubType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulationSubType` by taking the entity as a parameter.
   */
  delete(
    entity: RegulationSubType<T>
  ): DeleteRequestBuilder<RegulationSubType<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<RegulationSubType<T>, T> {
    return new DeleteRequestBuilder<RegulationSubType<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof RegulationSubType
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
