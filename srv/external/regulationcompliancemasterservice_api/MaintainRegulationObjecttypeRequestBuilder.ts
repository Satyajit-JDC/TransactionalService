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
import { MaintainRegulationObjecttype } from './MaintainRegulationObjecttype';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationObjecttype} entity.
 */
export class MaintainRegulationObjecttypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationObjecttype<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationObjecttype` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationObjecttype` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationObjecttype<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationObjecttype<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationObjecttype` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationObjecttype`.
   */
  create(
    entity: MaintainRegulationObjecttype<T>
  ): CreateRequestBuilder<MaintainRegulationObjecttype<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationObjecttype<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationObjecttype` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationObjecttype.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationObjecttype.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationObjecttype` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationObjecttype<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationObjecttype<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationObjecttype`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationObjecttype`.
   */
  update(
    entity: MaintainRegulationObjecttype<T>
  ): UpdateRequestBuilder<MaintainRegulationObjecttype<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationObjecttype<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationObjecttype`.
   * @param id Key property. See {@link MaintainRegulationObjecttype.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationObjecttype.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationObjecttype`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationObjecttype<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationObjecttype`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationObjecttype` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationObjecttype<T>
  ): DeleteRequestBuilder<MaintainRegulationObjecttype<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationObjecttype<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationObjecttype<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationObjecttype
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
