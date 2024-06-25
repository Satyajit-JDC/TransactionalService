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
import { MaintainRegulationGroupView } from './MaintainRegulationGroupView';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationGroupView} entity.
 */
export class MaintainRegulationGroupViewRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationGroupView<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationGroupView` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationGroupView` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationGroupView<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationGroupView<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationGroupView` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationGroupView`.
   */
  create(
    entity: MaintainRegulationGroupView<T>
  ): CreateRequestBuilder<MaintainRegulationGroupView<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationGroupView<T>, T>(
      this.entityApi,
      entity
    );
  }
}
