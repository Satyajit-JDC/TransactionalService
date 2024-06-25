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
import { ManageRegulationTypeAndObjectCategory } from './ManageRegulationTypeAndObjectCategory';

/**
 * Request builder class for operations supported on the {@link ManageRegulationTypeAndObjectCategory} entity.
 */
export class ManageRegulationTypeAndObjectCategoryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
  /**
   * Returns a request builder for querying all `ManageRegulationTypeAndObjectCategory` entities.
   * @returns A request builder for creating requests to retrieve all `ManageRegulationTypeAndObjectCategory` entities.
   */
  getAll(): GetAllRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
    return new GetAllRequestBuilder<
      ManageRegulationTypeAndObjectCategory<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ManageRegulationTypeAndObjectCategory` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ManageRegulationTypeAndObjectCategory`.
   */
  create(
    entity: ManageRegulationTypeAndObjectCategory<T>
  ): CreateRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
    return new CreateRequestBuilder<
      ManageRegulationTypeAndObjectCategory<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ManageRegulationTypeAndObjectCategory` entity based on its keys.
   * @param id Key property. See {@link ManageRegulationTypeAndObjectCategory.id}.
   * @param isActiveEntity Key property. See {@link ManageRegulationTypeAndObjectCategory.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `ManageRegulationTypeAndObjectCategory` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
    return new GetByKeyRequestBuilder<
      ManageRegulationTypeAndObjectCategory<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ManageRegulationTypeAndObjectCategory`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ManageRegulationTypeAndObjectCategory`.
   */
  update(
    entity: ManageRegulationTypeAndObjectCategory<T>
  ): UpdateRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
    return new UpdateRequestBuilder<
      ManageRegulationTypeAndObjectCategory<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ManageRegulationTypeAndObjectCategory`.
   * @param id Key property. See {@link ManageRegulationTypeAndObjectCategory.id}.
   * @param isActiveEntity Key property. See {@link ManageRegulationTypeAndObjectCategory.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ManageRegulationTypeAndObjectCategory`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ManageRegulationTypeAndObjectCategory`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ManageRegulationTypeAndObjectCategory` by taking the entity as a parameter.
   */
  delete(
    entity: ManageRegulationTypeAndObjectCategory<T>
  ): DeleteRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<ManageRegulationTypeAndObjectCategory<T>, T> {
    return new DeleteRequestBuilder<
      ManageRegulationTypeAndObjectCategory<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof ManageRegulationTypeAndObjectCategory
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
