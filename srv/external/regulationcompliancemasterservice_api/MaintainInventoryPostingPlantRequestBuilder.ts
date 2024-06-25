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
import { MaintainInventoryPostingPlant } from './MaintainInventoryPostingPlant';

/**
 * Request builder class for operations supported on the {@link MaintainInventoryPostingPlant} entity.
 */
export class MaintainInventoryPostingPlantRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainInventoryPostingPlant<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainInventoryPostingPlant` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainInventoryPostingPlant` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainInventoryPostingPlant<T>, T> {
    return new GetAllRequestBuilder<MaintainInventoryPostingPlant<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainInventoryPostingPlant` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainInventoryPostingPlant`.
   */
  create(
    entity: MaintainInventoryPostingPlant<T>
  ): CreateRequestBuilder<MaintainInventoryPostingPlant<T>, T> {
    return new CreateRequestBuilder<MaintainInventoryPostingPlant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainInventoryPostingPlant` entity based on its keys.
   * @param id Key property. See {@link MaintainInventoryPostingPlant.id}.
   * @param isActiveEntity Key property. See {@link MaintainInventoryPostingPlant.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainInventoryPostingPlant` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainInventoryPostingPlant<T>, T> {
    return new GetByKeyRequestBuilder<MaintainInventoryPostingPlant<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainInventoryPostingPlant`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainInventoryPostingPlant`.
   */
  update(
    entity: MaintainInventoryPostingPlant<T>
  ): UpdateRequestBuilder<MaintainInventoryPostingPlant<T>, T> {
    return new UpdateRequestBuilder<MaintainInventoryPostingPlant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainInventoryPostingPlant`.
   * @param id Key property. See {@link MaintainInventoryPostingPlant.id}.
   * @param isActiveEntity Key property. See {@link MaintainInventoryPostingPlant.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainInventoryPostingPlant`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainInventoryPostingPlant<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainInventoryPostingPlant`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainInventoryPostingPlant` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainInventoryPostingPlant<T>
  ): DeleteRequestBuilder<MaintainInventoryPostingPlant<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainInventoryPostingPlant<T>, T> {
    return new DeleteRequestBuilder<MaintainInventoryPostingPlant<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainInventoryPostingPlant
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
