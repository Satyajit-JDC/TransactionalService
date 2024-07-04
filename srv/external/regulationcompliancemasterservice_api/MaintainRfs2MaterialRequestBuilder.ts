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
import { MaintainRfs2Material } from './MaintainRfs2Material';

/**
 * Request builder class for operations supported on the {@link MaintainRfs2Material} entity.
 */
export class MaintainRfs2MaterialRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRfs2Material<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRfs2Material` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRfs2Material` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRfs2Material<T>, T> {
    return new GetAllRequestBuilder<MaintainRfs2Material<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRfs2Material` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRfs2Material`.
   */
  create(
    entity: MaintainRfs2Material<T>
  ): CreateRequestBuilder<MaintainRfs2Material<T>, T> {
    return new CreateRequestBuilder<MaintainRfs2Material<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRfs2Material` entity based on its keys.
   * @param id Key property. See {@link MaintainRfs2Material.id}.
   * @param isActiveEntity Key property. See {@link MaintainRfs2Material.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRfs2Material` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRfs2Material<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRfs2Material<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRfs2Material`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRfs2Material`.
   */
  update(
    entity: MaintainRfs2Material<T>
  ): UpdateRequestBuilder<MaintainRfs2Material<T>, T> {
    return new UpdateRequestBuilder<MaintainRfs2Material<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRfs2Material`.
   * @param id Key property. See {@link MaintainRfs2Material.id}.
   * @param isActiveEntity Key property. See {@link MaintainRfs2Material.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRfs2Material`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRfs2Material<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRfs2Material`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRfs2Material` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRfs2Material<T>
  ): DeleteRequestBuilder<MaintainRfs2Material<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRfs2Material<T>, T> {
    return new DeleteRequestBuilder<MaintainRfs2Material<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRfs2Material
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
