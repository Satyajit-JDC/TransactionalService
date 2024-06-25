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
import { MaintainRegulatonToleranceForVolumeMatch } from './MaintainRegulatonToleranceForVolumeMatch';

/**
 * Request builder class for operations supported on the {@link MaintainRegulatonToleranceForVolumeMatch} entity.
 */
export class MaintainRegulatonToleranceForVolumeMatchRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulatonToleranceForVolumeMatch` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulatonToleranceForVolumeMatch` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainRegulatonToleranceForVolumeMatch<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRegulatonToleranceForVolumeMatch` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   */
  create(
    entity: MaintainRegulatonToleranceForVolumeMatch<T>
  ): CreateRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T> {
    return new CreateRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulatonToleranceForVolumeMatch` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulatonToleranceForVolumeMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulatonToleranceForVolumeMatch.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulatonToleranceForVolumeMatch` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   */
  update(
    entity: MaintainRegulatonToleranceForVolumeMatch<T>
  ): UpdateRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T> {
    return new UpdateRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   * @param id Key property. See {@link MaintainRegulatonToleranceForVolumeMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulatonToleranceForVolumeMatch.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulatonToleranceForVolumeMatch`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulatonToleranceForVolumeMatch` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulatonToleranceForVolumeMatch<T>
  ): DeleteRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulatonToleranceForVolumeMatch<T>, T> {
    return new DeleteRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainRegulatonToleranceForVolumeMatch
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
