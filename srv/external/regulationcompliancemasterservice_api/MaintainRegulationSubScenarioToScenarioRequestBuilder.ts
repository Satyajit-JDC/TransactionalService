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
import { MaintainRegulationSubScenarioToScenario } from './MaintainRegulationSubScenarioToScenario';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationSubScenarioToScenario} entity.
 */
export class MaintainRegulationSubScenarioToScenarioRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationSubScenarioToScenario` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationSubScenarioToScenario` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainRegulationSubScenarioToScenario<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainRegulationSubScenarioToScenario<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationSubScenarioToScenario` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationSubScenarioToScenario`.
   */
  create(
    entity: MaintainRegulationSubScenarioToScenario<T>
  ): CreateRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T> {
    return new CreateRequestBuilder<
      MaintainRegulationSubScenarioToScenario<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationSubScenarioToScenario` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationSubScenarioToScenario.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationSubScenarioToScenario.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationSubScenarioToScenario` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationSubScenarioToScenario<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationSubScenarioToScenario`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationSubScenarioToScenario`.
   */
  update(
    entity: MaintainRegulationSubScenarioToScenario<T>
  ): UpdateRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T> {
    return new UpdateRequestBuilder<
      MaintainRegulationSubScenarioToScenario<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationSubScenarioToScenario`.
   * @param id Key property. See {@link MaintainRegulationSubScenarioToScenario.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationSubScenarioToScenario.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationSubScenarioToScenario`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationSubScenarioToScenario`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationSubScenarioToScenario` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationSubScenarioToScenario<T>
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationSubScenarioToScenario<T>, T> {
    return new DeleteRequestBuilder<
      MaintainRegulationSubScenarioToScenario<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationSubScenarioToScenario
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
