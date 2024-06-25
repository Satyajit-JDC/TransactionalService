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
import { MaintainRegulationSubScenarioAction } from './MaintainRegulationSubScenarioAction';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationSubScenarioAction} entity.
 */
export class MaintainRegulationSubScenarioActionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationSubScenarioAction` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationSubScenarioAction` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationSubScenarioAction` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationSubScenarioAction`.
   */
  create(
    entity: MaintainRegulationSubScenarioAction<T>
  ): CreateRequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationSubScenarioAction` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationSubScenarioAction.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationSubScenarioAction.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationSubScenarioAction` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationSubScenarioAction<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationSubScenarioAction`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationSubScenarioAction`.
   */
  update(
    entity: MaintainRegulationSubScenarioAction<T>
  ): UpdateRequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationSubScenarioAction`.
   * @param id Key property. See {@link MaintainRegulationSubScenarioAction.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationSubScenarioAction.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationSubScenarioAction`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationSubScenarioAction`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationSubScenarioAction` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationSubScenarioAction<T>
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioAction<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationSubScenarioAction<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationSubScenarioAction
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
