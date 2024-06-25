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
import { MaintainCompanyIdToPlant } from './MaintainCompanyIdToPlant';

/**
 * Request builder class for operations supported on the {@link MaintainCompanyIdToPlant} entity.
 */
export class MaintainCompanyIdToPlantRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainCompanyIdToPlant<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainCompanyIdToPlant` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainCompanyIdToPlant` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainCompanyIdToPlant<T>, T> {
    return new GetAllRequestBuilder<MaintainCompanyIdToPlant<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainCompanyIdToPlant` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainCompanyIdToPlant`.
   */
  create(
    entity: MaintainCompanyIdToPlant<T>
  ): CreateRequestBuilder<MaintainCompanyIdToPlant<T>, T> {
    return new CreateRequestBuilder<MaintainCompanyIdToPlant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainCompanyIdToPlant` entity based on its keys.
   * @param id Key property. See {@link MaintainCompanyIdToPlant.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdToPlant.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainCompanyIdToPlant` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainCompanyIdToPlant<T>, T> {
    return new GetByKeyRequestBuilder<MaintainCompanyIdToPlant<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainCompanyIdToPlant`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainCompanyIdToPlant`.
   */
  update(
    entity: MaintainCompanyIdToPlant<T>
  ): UpdateRequestBuilder<MaintainCompanyIdToPlant<T>, T> {
    return new UpdateRequestBuilder<MaintainCompanyIdToPlant<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdToPlant`.
   * @param id Key property. See {@link MaintainCompanyIdToPlant.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdToPlant.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdToPlant`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdToPlant<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdToPlant`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdToPlant` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainCompanyIdToPlant<T>
  ): DeleteRequestBuilder<MaintainCompanyIdToPlant<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdToPlant<T>, T> {
    return new DeleteRequestBuilder<MaintainCompanyIdToPlant<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainCompanyIdToPlant
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
