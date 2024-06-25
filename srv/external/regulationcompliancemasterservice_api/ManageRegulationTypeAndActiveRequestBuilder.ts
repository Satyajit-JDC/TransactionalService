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
import { ManageRegulationTypeAndActive } from './ManageRegulationTypeAndActive';

/**
 * Request builder class for operations supported on the {@link ManageRegulationTypeAndActive} entity.
 */
export class ManageRegulationTypeAndActiveRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ManageRegulationTypeAndActive<T>, T> {
  /**
   * Returns a request builder for querying all `ManageRegulationTypeAndActive` entities.
   * @returns A request builder for creating requests to retrieve all `ManageRegulationTypeAndActive` entities.
   */
  getAll(): GetAllRequestBuilder<ManageRegulationTypeAndActive<T>, T> {
    return new GetAllRequestBuilder<ManageRegulationTypeAndActive<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ManageRegulationTypeAndActive` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ManageRegulationTypeAndActive`.
   */
  create(
    entity: ManageRegulationTypeAndActive<T>
  ): CreateRequestBuilder<ManageRegulationTypeAndActive<T>, T> {
    return new CreateRequestBuilder<ManageRegulationTypeAndActive<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ManageRegulationTypeAndActive` entity based on its keys.
   * @param id Key property. See {@link ManageRegulationTypeAndActive.id}.
   * @param isActiveEntity Key property. See {@link ManageRegulationTypeAndActive.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `ManageRegulationTypeAndActive` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<ManageRegulationTypeAndActive<T>, T> {
    return new GetByKeyRequestBuilder<ManageRegulationTypeAndActive<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ManageRegulationTypeAndActive`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ManageRegulationTypeAndActive`.
   */
  update(
    entity: ManageRegulationTypeAndActive<T>
  ): UpdateRequestBuilder<ManageRegulationTypeAndActive<T>, T> {
    return new UpdateRequestBuilder<ManageRegulationTypeAndActive<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ManageRegulationTypeAndActive`.
   * @param id Key property. See {@link ManageRegulationTypeAndActive.id}.
   * @param isActiveEntity Key property. See {@link ManageRegulationTypeAndActive.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ManageRegulationTypeAndActive`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<ManageRegulationTypeAndActive<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ManageRegulationTypeAndActive`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ManageRegulationTypeAndActive` by taking the entity as a parameter.
   */
  delete(
    entity: ManageRegulationTypeAndActive<T>
  ): DeleteRequestBuilder<ManageRegulationTypeAndActive<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<ManageRegulationTypeAndActive<T>, T> {
    return new DeleteRequestBuilder<ManageRegulationTypeAndActive<T>, T>(
      this.entityApi,
      idOrEntity instanceof ManageRegulationTypeAndActive
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
