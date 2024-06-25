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
import { MaintainRegulationToleranceForDateMatch } from './MaintainRegulationToleranceForDateMatch';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationToleranceForDateMatch} entity.
 */
export class MaintainRegulationToleranceForDateMatchRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationToleranceForDateMatch` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationToleranceForDateMatch` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainRegulationToleranceForDateMatch<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainRegulationToleranceForDateMatch<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationToleranceForDateMatch` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationToleranceForDateMatch`.
   */
  create(
    entity: MaintainRegulationToleranceForDateMatch<T>
  ): CreateRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T> {
    return new CreateRequestBuilder<
      MaintainRegulationToleranceForDateMatch<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationToleranceForDateMatch` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationToleranceForDateMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationToleranceForDateMatch.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationToleranceForDateMatch` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationToleranceForDateMatch<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationToleranceForDateMatch`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationToleranceForDateMatch`.
   */
  update(
    entity: MaintainRegulationToleranceForDateMatch<T>
  ): UpdateRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T> {
    return new UpdateRequestBuilder<
      MaintainRegulationToleranceForDateMatch<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationToleranceForDateMatch`.
   * @param id Key property. See {@link MaintainRegulationToleranceForDateMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationToleranceForDateMatch.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationToleranceForDateMatch`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationToleranceForDateMatch`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationToleranceForDateMatch` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationToleranceForDateMatch<T>
  ): DeleteRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationToleranceForDateMatch<T>, T> {
    return new DeleteRequestBuilder<
      MaintainRegulationToleranceForDateMatch<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationToleranceForDateMatch
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
