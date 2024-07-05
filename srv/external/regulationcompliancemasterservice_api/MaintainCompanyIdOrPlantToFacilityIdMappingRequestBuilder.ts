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
import { MaintainCompanyIdOrPlantToFacilityIdMapping } from './MaintainCompanyIdOrPlantToFacilityIdMapping';

/**
 * Request builder class for operations supported on the {@link MaintainCompanyIdOrPlantToFacilityIdMapping} entity.
 */
export class MaintainCompanyIdOrPlantToFacilityIdMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainCompanyIdOrPlantToFacilityIdMapping` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainCompanyIdOrPlantToFacilityIdMapping` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainCompanyIdOrPlantToFacilityIdMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   */
  create(
    entity: MaintainCompanyIdOrPlantToFacilityIdMapping<T>
  ): CreateRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T> {
    return new CreateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainCompanyIdOrPlantToFacilityIdMapping` entity based on its keys.
   * @param id Key property. See {@link MaintainCompanyIdOrPlantToFacilityIdMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdOrPlantToFacilityIdMapping.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainCompanyIdOrPlantToFacilityIdMapping` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   */
  update(
    entity: MaintainCompanyIdOrPlantToFacilityIdMapping<T>
  ): UpdateRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T> {
    return new UpdateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   * @param id Key property. See {@link MaintainCompanyIdOrPlantToFacilityIdMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainCompanyIdOrPlantToFacilityIdMapping.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainCompanyIdOrPlantToFacilityIdMapping` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainCompanyIdOrPlantToFacilityIdMapping<T>
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainCompanyIdOrPlantToFacilityIdMapping<T>, T> {
    return new DeleteRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainCompanyIdOrPlantToFacilityIdMapping
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
