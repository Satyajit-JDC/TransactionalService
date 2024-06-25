/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  transformReturnValueForEdmType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { regulationcompliancemasterserviceApi } from './service';

/**
 * Type of the parameters to be passed to {@link getNextRenewableId}.
 */
export interface GetNextRenewableIdParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Regulation Sub Scenario.
   */
  regulationSubScenario?: string | null;
}

/**
 * Get Next Renewable Id.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getNextRenewableId<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetNextRenewableIdParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  GetNextRenewableIdParameters<DeSerializersT>,
  string | null
> {
  const params = {
    regulationSubScenario: new OperationParameter(
      'regulationSubScenario',
      'Edm.String',
      parameters.regulationSubScenario
    )
  };

  return new OperationRequestBuilder(
    '/service/RegulationComplianceMasterService',
    'getNextRenewableId',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'action'
  );
}

export const operations = {
  getNextRenewableId
};
