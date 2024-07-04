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
import { MaintainRegulationObjectType } from './MaintainRegulationObjectType';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationObjectType} entity.
 */
export class MaintainRegulationObjectTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationObjectType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationObjectType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationObjectType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationObjectType<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationObjectType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationObjectType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationObjectType`.
   */
  create(
    entity: MaintainRegulationObjectType<T>
  ): CreateRequestBuilder<MaintainRegulationObjectType<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationObjectType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationObjectType` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationObjectType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationObjectType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationObjectType` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationObjectType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationObjectType<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationObjectType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationObjectType`.
   */
  update(
    entity: MaintainRegulationObjectType<T>
  ): UpdateRequestBuilder<MaintainRegulationObjectType<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationObjectType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationObjectType`.
   * @param id Key property. See {@link MaintainRegulationObjectType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationObjectType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationObjectType`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationObjectType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationObjectType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationObjectType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationObjectType<T>
  ): DeleteRequestBuilder<MaintainRegulationObjectType<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationObjectType<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationObjectType<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationObjectType
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
