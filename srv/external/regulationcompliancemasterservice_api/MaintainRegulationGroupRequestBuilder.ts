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
import { MaintainRegulationGroup } from './MaintainRegulationGroup';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationGroup} entity.
 */
export class MaintainRegulationGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationGroup<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationGroup` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationGroup` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationGroup<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationGroup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationGroup`.
   */
  create(
    entity: MaintainRegulationGroup<T>
  ): CreateRequestBuilder<MaintainRegulationGroup<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationGroup` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationGroup.id}.
   * @param regulationGroup Key property. See {@link MaintainRegulationGroup.regulationGroup}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationGroup.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationGroup` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    regulationGroup: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationGroup<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationGroup<T>, T>(
      this.entityApi,
      {
        ID: id,
        regulationGroup: regulationGroup,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationGroup`.
   */
  update(
    entity: MaintainRegulationGroup<T>
  ): UpdateRequestBuilder<MaintainRegulationGroup<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationGroup`.
   * @param id Key property. See {@link MaintainRegulationGroup.id}.
   * @param regulationGroup Key property. See {@link MaintainRegulationGroup.regulationGroup}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationGroup.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationGroup`.
   */
  delete(
    id: string,
    regulationGroup: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationGroup` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationGroup<T>
  ): DeleteRequestBuilder<MaintainRegulationGroup<T>, T>;
  delete(
    idOrEntity: any,
    regulationGroup?: string,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationGroup<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationGroup<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationGroup
        ? idOrEntity
        : {
            ID: idOrEntity!,
            regulationGroup: regulationGroup!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
