/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { MaintainRegulationMaterialGroupView } from './MaintainRegulationMaterialGroupView';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationMaterialGroupView} entity.
 */
export class MaintainRegulationMaterialGroupViewRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationMaterialGroupView<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationMaterialGroupView` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationMaterialGroupView` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationMaterialGroupView<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationMaterialGroupView<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationMaterialGroupView` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationMaterialGroupView`.
   */
  create(
    entity: MaintainRegulationMaterialGroupView<T>
  ): CreateRequestBuilder<MaintainRegulationMaterialGroupView<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationMaterialGroupView<T>, T>(
      this.entityApi,
      entity
    );
  }
}
