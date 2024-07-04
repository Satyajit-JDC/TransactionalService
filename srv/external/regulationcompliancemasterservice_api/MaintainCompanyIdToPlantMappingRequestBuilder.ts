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
import { MaintainCompanyIdToPlantMapping } from './MaintainCompanyIdToPlantMapping';

/**
 * Request builder class for operations supported on the {@link MaintainCompanyIdToPlantMapping} entity.
 */
export class MaintainCompanyIdToPlantMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainCompanyIdToPlantMapping` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainCompanyIdToPlantMapping` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
    return new GetAllRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainCompanyIdToPlantMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainCompanyIdToPlantMapping`.
   */
  create(
    entity: MaintainCompanyIdToPlantMapping<T>
  ): CreateRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
    return new CreateRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainCompanyIdToPlantMapping` entity based on its keys.
   * @param id Key property. See {@link MaintainCompanyIdToPlantMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdToPlantMapping.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainCompanyIdToPlantMapping` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
    return new GetByKeyRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainCompanyIdToPlantMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainCompanyIdToPlantMapping`.
   */
  update(
    entity: MaintainCompanyIdToPlantMapping<T>
  ): UpdateRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
    return new UpdateRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdToPlantMapping`.
   * @param id Key property. See {@link MaintainCompanyIdToPlantMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdToPlantMapping.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdToPlantMapping`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdToPlantMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdToPlantMapping` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainCompanyIdToPlantMapping<T>
  ): DeleteRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T> {
    return new DeleteRequestBuilder<MaintainCompanyIdToPlantMapping<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainCompanyIdToPlantMapping
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
