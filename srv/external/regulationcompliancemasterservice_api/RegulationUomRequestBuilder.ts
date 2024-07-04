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
import { RegulationUom } from './RegulationUom';

/**
 * Request builder class for operations supported on the {@link RegulationUom} entity.
 */
export class RegulationUomRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegulationUom<T>, T> {
  /**
   * Returns a request builder for querying all `RegulationUom` entities.
   * @returns A request builder for creating requests to retrieve all `RegulationUom` entities.
   */
  getAll(): GetAllRequestBuilder<RegulationUom<T>, T> {
    return new GetAllRequestBuilder<RegulationUom<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RegulationUom` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegulationUom`.
   */
  create(entity: RegulationUom<T>): CreateRequestBuilder<RegulationUom<T>, T> {
    return new CreateRequestBuilder<RegulationUom<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegulationUom` entity based on its keys.
   * @param category Key property. See {@link RegulationUom.category}.
   * @returns A request builder for creating requests to retrieve one `RegulationUom` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegulationUom<T>, T> {
    return new GetByKeyRequestBuilder<RegulationUom<T>, T>(this.entityApi, {
      category: category
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RegulationUom`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegulationUom`.
   */
  update(entity: RegulationUom<T>): UpdateRequestBuilder<RegulationUom<T>, T> {
    return new UpdateRequestBuilder<RegulationUom<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegulationUom`.
   * @param category Key property. See {@link RegulationUom.category}.
   * @returns A request builder for creating requests that delete an entity of type `RegulationUom`.
   */
  delete(category: string): DeleteRequestBuilder<RegulationUom<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegulationUom`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegulationUom` by taking the entity as a parameter.
   */
  delete(entity: RegulationUom<T>): DeleteRequestBuilder<RegulationUom<T>, T>;
  delete(categoryOrEntity: any): DeleteRequestBuilder<RegulationUom<T>, T> {
    return new DeleteRequestBuilder<RegulationUom<T>, T>(
      this.entityApi,
      categoryOrEntity instanceof RegulationUom
        ? categoryOrEntity
        : { category: categoryOrEntity! }
    );
  }
}
