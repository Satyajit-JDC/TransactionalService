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
import { MaintainRegulationMaterialGroup } from './MaintainRegulationMaterialGroup';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationMaterialGroup} entity.
 */
export class MaintainRegulationMaterialGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationMaterialGroup` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationMaterialGroup` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationMaterialGroup<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationMaterialGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationMaterialGroup`.
   */
  create(
    entity: MaintainRegulationMaterialGroup<T>
  ): CreateRequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationMaterialGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationMaterialGroup` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationMaterialGroup.id}.
   * @param regulationMaterialGroup Key property. See {@link MaintainRegulationMaterialGroup.regulationMaterialGroup}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationMaterialGroup.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationMaterialGroup` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    regulationMaterialGroup: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationMaterialGroup<T>, T>(
      this.entityApi,
      {
        ID: id,
        regulationMaterialGroup: regulationMaterialGroup,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationMaterialGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationMaterialGroup`.
   */
  update(
    entity: MaintainRegulationMaterialGroup<T>
  ): UpdateRequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationMaterialGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationMaterialGroup`.
   * @param id Key property. See {@link MaintainRegulationMaterialGroup.id}.
   * @param regulationMaterialGroup Key property. See {@link MaintainRegulationMaterialGroup.regulationMaterialGroup}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationMaterialGroup.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationMaterialGroup`.
   */
  delete(
    id: string,
    regulationMaterialGroup: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationMaterialGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationMaterialGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationMaterialGroup` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationMaterialGroup<T>
  ): DeleteRequestBuilder<MaintainRegulationMaterialGroup<T>, T>;
  delete(
    idOrEntity: any,
    regulationMaterialGroup?: string,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationMaterialGroup<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationMaterialGroup<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationMaterialGroup
        ? idOrEntity
        : {
            ID: idOrEntity!,
            regulationMaterialGroup: regulationMaterialGroup!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
