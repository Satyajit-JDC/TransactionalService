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
import { MaintainCompanyIdOrPlantToFacilityId } from './MaintainCompanyIdOrPlantToFacilityId';

/**
 * Request builder class for operations supported on the {@link MaintainCompanyIdOrPlantToFacilityId} entity.
 */
export class MaintainCompanyIdOrPlantToFacilityIdRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainCompanyIdOrPlantToFacilityId` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainCompanyIdOrPlantToFacilityId` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
    return new GetAllRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainCompanyIdOrPlantToFacilityId` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   */
  create(
    entity: MaintainCompanyIdOrPlantToFacilityId<T>
  ): CreateRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
    return new CreateRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainCompanyIdOrPlantToFacilityId` entity based on its keys.
   * @param id Key property. See {@link MaintainCompanyIdOrPlantToFacilityId.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdOrPlantToFacilityId.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainCompanyIdOrPlantToFacilityId` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   */
  update(
    entity: MaintainCompanyIdOrPlantToFacilityId<T>
  ): UpdateRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
    return new UpdateRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   * @param id Key property. See {@link MaintainCompanyIdOrPlantToFacilityId.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdOrPlantToFacilityId.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdOrPlantToFacilityId`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdOrPlantToFacilityId` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainCompanyIdOrPlantToFacilityId<T>
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T> {
    return new DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityId<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainCompanyIdOrPlantToFacilityId
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
