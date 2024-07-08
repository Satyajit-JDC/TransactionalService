/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { MaintainTransactionTypeApi } from './MaintainTransactionTypeApi';
import { MaintainRegulationTransactionTypeApi } from './MaintainRegulationTransactionTypeApi';
import { MaintainFuelMappingApi } from './MaintainFuelMappingApi';
import { MaintainRegulationObjectTypeApi } from './MaintainRegulationObjectTypeApi';
import { MaintainRegulationGroupApi } from './MaintainRegulationGroupApi';
import { MaintainRegulationMaterialGroupApi } from './MaintainRegulationMaterialGroupApi';
import { MaintainAdjustmentReasonCodeApi } from './MaintainAdjustmentReasonCodeApi';
import { MaintainInventoryPostingPlantApi } from './MaintainInventoryPostingPlantApi';
import { MaintainIncotermsImpactForImportOrExportApi } from './MaintainIncotermsImpactForImportOrExportApi';
import { MaintainDateToleranceForAutoMatchApi } from './MaintainDateToleranceForAutoMatchApi';
import { MaintainVolumeToleranceForAutoMatchApi } from './MaintainVolumeToleranceForAutoMatchApi';
import { MaintainRegulationTransactionTypeWithImpactApi } from './MaintainRegulationTransactionTypeWithImpactApi';
import { MaintainMovementTypeApi } from './MaintainMovementTypeApi';
import { MaintainMovementTypeToTransactionCategoryMappingApi } from './MaintainMovementTypeToTransactionCategoryMappingApi';
import { MaintainRenewableMovementTypeApi } from './MaintainRenewableMovementTypeApi';
import { MaintainRfs2MaterialApi } from './MaintainRfs2MaterialApi';
import { MaintainCompanyIdToPlantMappingApi } from './MaintainCompanyIdToPlantMappingApi';
import { MaintainCompanyIdOrPlantToFacilityIdMappingApi } from './MaintainCompanyIdOrPlantToFacilityIdMappingApi';
import { MaintainRegulationSubScenarioToScenarioApi } from './MaintainRegulationSubScenarioToScenarioApi';
import { MaintainActionSubScenarioMappingApi } from './MaintainActionSubScenarioMappingApi';
import { ManageRegulationTypeAndActiveApi } from './ManageRegulationTypeAndActiveApi';
import { ManageRegulationTypeAndObjectCategoryApi } from './ManageRegulationTypeAndObjectCategoryApi';
import { MaintainIdRangeForRenewableObjectSequenceApi } from './MaintainIdRangeForRenewableObjectSequenceApi';
import { ProcessingStatusApi } from './ProcessingStatusApi';
import { MaintainRegulationGroupViewApi } from './MaintainRegulationGroupViewApi';
import { MaintainRegulationMaterialGroupViewApi } from './MaintainRegulationMaterialGroupViewApi';
import { MaintainIdRangeForRenewableObjectApi } from './MaintainIdRangeForRenewableObjectApi';
import { MaintainIdRangeForReconciliationGroupApi } from './MaintainIdRangeForReconciliationGroupApi';
import { RegulationCategoryApi } from './RegulationCategoryApi';
import { CountriesApi } from './CountriesApi';
import { RegulationUomApi } from './RegulationUomApi';
import { TransactionCategoryApi } from './TransactionCategoryApi';
import { FuelCategoryApi } from './FuelCategoryApi';
import { FuelSubCategoryApi } from './FuelSubCategoryApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { ObjectCategoryApi } from './ObjectCategoryApi';
import { ImpactApi } from './ImpactApi';
import { PassRetainIndicatorApi } from './PassRetainIndicatorApi';
import { ModeApi } from './ModeApi';
import { Rfs2DebitTypeApi } from './Rfs2DebitTypeApi';
import { Rfs2FuelCodeApi } from './Rfs2FuelCodeApi';
import { TransactionSourceScenarioApi } from './TransactionSourceScenarioApi';
import { RegulationSubTypeApi } from './RegulationSubTypeApi';
import { ActionInventoryApi } from './ActionInventoryApi';
import { Countries_TextsApi } from './Countries_TextsApi';
import { ObjectType_TextsApi } from './ObjectType_TextsApi';
import { Mode_TextsApi } from './Mode_TextsApi';
import { getNextRenewableId, GetNextRenewableIdParameters } from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function regulationcompliancemasterserviceApi<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): RegulationcompliancemasterserviceApi<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new RegulationcompliancemasterserviceApi(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class RegulationcompliancemasterserviceApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get maintainRegulationTypeApi(): MaintainRegulationTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationTypeApi',
      MaintainRegulationTypeApi
    );
    const linkedApis = [
      this.initApi('regulationCategoryApi', RegulationCategoryApi),
      this.initApi('countriesApi', CountriesApi),
      this.initApi('countriesApi', CountriesApi),
      this.initApi('regulationUomApi', RegulationUomApi),
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainTransactionTypeApi(): MaintainTransactionTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainTransactionTypeApi',
      MaintainTransactionTypeApi
    );
    const linkedApis = [
      this.initApi('maintainTransactionTypeApi', MaintainTransactionTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationTransactionTypeApi(): MaintainRegulationTransactionTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationTransactionTypeApi',
      MaintainRegulationTransactionTypeApi
    );
    const linkedApis = [
      this.initApi('maintainTransactionTypeApi', MaintainTransactionTypeApi),
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi(
        'maintainRegulationTransactionTypeApi',
        MaintainRegulationTransactionTypeApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainFuelMappingApi(): MaintainFuelMappingApi<DeSerializersT> {
    const api = this.initApi('maintainFuelMappingApi', MaintainFuelMappingApi);
    const linkedApis = [
      this.initApi('fuelCategoryApi', FuelCategoryApi),
      this.initApi('fuelSubCategoryApi', FuelSubCategoryApi),
      this.initApi('maintainFuelMappingApi', MaintainFuelMappingApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationObjectTypeApi(): MaintainRegulationObjectTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationObjectTypeApi',
      MaintainRegulationObjectTypeApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('objectCategoryApi', ObjectCategoryApi),
      this.initApi(
        'maintainRegulationObjectTypeApi',
        MaintainRegulationObjectTypeApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationGroupApi(): MaintainRegulationGroupApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationGroupApi',
      MaintainRegulationGroupApi
    );
    const linkedApis = [
      this.initApi(
        'manageRegulationTypeAndActiveApi',
        ManageRegulationTypeAndActiveApi
      ),
      this.initApi('maintainRegulationGroupApi', MaintainRegulationGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationMaterialGroupApi(): MaintainRegulationMaterialGroupApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationMaterialGroupApi',
      MaintainRegulationMaterialGroupApi
    );
    const linkedApis = [
      this.initApi(
        'manageRegulationTypeAndObjectCategoryApi',
        ManageRegulationTypeAndObjectCategoryApi
      ),
      this.initApi(
        'maintainRegulationMaterialGroupApi',
        MaintainRegulationMaterialGroupApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainAdjustmentReasonCodeApi(): MaintainAdjustmentReasonCodeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainAdjustmentReasonCodeApi',
      MaintainAdjustmentReasonCodeApi
    );
    const linkedApis = [
      this.initApi(
        'maintainAdjustmentReasonCodeApi',
        MaintainAdjustmentReasonCodeApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainInventoryPostingPlantApi(): MaintainInventoryPostingPlantApi<DeSerializersT> {
    const api = this.initApi(
      'maintainInventoryPostingPlantApi',
      MaintainInventoryPostingPlantApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainInventoryPostingPlantApi',
        MaintainInventoryPostingPlantApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainIncotermsImpactForImportOrExportApi(): MaintainIncotermsImpactForImportOrExportApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIncotermsImpactForImportOrExportApi',
      MaintainIncotermsImpactForImportOrExportApi
    );
    const linkedApis = [
      this.initApi('impactApi', ImpactApi),
      this.initApi(
        'maintainIncotermsImpactForImportOrExportApi',
        MaintainIncotermsImpactForImportOrExportApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainDateToleranceForAutoMatchApi(): MaintainDateToleranceForAutoMatchApi<DeSerializersT> {
    const api = this.initApi(
      'maintainDateToleranceForAutoMatchApi',
      MaintainDateToleranceForAutoMatchApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainDateToleranceForAutoMatchApi',
        MaintainDateToleranceForAutoMatchApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainVolumeToleranceForAutoMatchApi(): MaintainVolumeToleranceForAutoMatchApi<DeSerializersT> {
    const api = this.initApi(
      'maintainVolumeToleranceForAutoMatchApi',
      MaintainVolumeToleranceForAutoMatchApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainVolumeToleranceForAutoMatchApi',
        MaintainVolumeToleranceForAutoMatchApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationTransactionTypeWithImpactApi(): MaintainRegulationTransactionTypeWithImpactApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationTransactionTypeWithImpactApi',
      MaintainRegulationTransactionTypeWithImpactApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('maintainTransactionTypeApi', MaintainTransactionTypeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi('impactApi', ImpactApi),
      this.initApi('passRetainIndicatorApi', PassRetainIndicatorApi),
      this.initApi(
        'maintainRegulationTransactionTypeWithImpactApi',
        MaintainRegulationTransactionTypeWithImpactApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainMovementTypeApi(): MaintainMovementTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainMovementTypeApi',
      MaintainMovementTypeApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('impactApi', ImpactApi),
      this.initApi('maintainMovementTypeApi', MaintainMovementTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainMovementTypeToTransactionCategoryMappingApi(): MaintainMovementTypeToTransactionCategoryMappingApi<DeSerializersT> {
    const api = this.initApi(
      'maintainMovementTypeToTransactionCategoryMappingApi',
      MaintainMovementTypeToTransactionCategoryMappingApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('maintainMovementTypeApi', MaintainMovementTypeApi),
      this.initApi('modeApi', ModeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi('impactApi', ImpactApi),
      this.initApi(
        'maintainMovementTypeToTransactionCategoryMappingApi',
        MaintainMovementTypeToTransactionCategoryMappingApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRenewableMovementTypeApi(): MaintainRenewableMovementTypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRenewableMovementTypeApi',
      MaintainRenewableMovementTypeApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('maintainMovementTypeApi', MaintainMovementTypeApi),
      this.initApi(
        'maintainRenewableMovementTypeApi',
        MaintainRenewableMovementTypeApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRfs2MaterialApi(): MaintainRfs2MaterialApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRfs2MaterialApi',
      MaintainRfs2MaterialApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('rfs2DebitTypeApi', Rfs2DebitTypeApi),
      this.initApi('rfs2FuelCodeApi', Rfs2FuelCodeApi),
      this.initApi('maintainRfs2MaterialApi', MaintainRfs2MaterialApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainCompanyIdToPlantMappingApi(): MaintainCompanyIdToPlantMappingApi<DeSerializersT> {
    const api = this.initApi(
      'maintainCompanyIdToPlantMappingApi',
      MaintainCompanyIdToPlantMappingApi
    );
    const linkedApis = [
      this.initApi(
        'maintainCompanyIdToPlantMappingApi',
        MaintainCompanyIdToPlantMappingApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainCompanyIdOrPlantToFacilityIdMappingApi(): MaintainCompanyIdOrPlantToFacilityIdMappingApi<DeSerializersT> {
    const api = this.initApi(
      'maintainCompanyIdOrPlantToFacilityIdMappingApi',
      MaintainCompanyIdOrPlantToFacilityIdMappingApi
    );
    const linkedApis = [
      this.initApi(
        'maintainCompanyIdOrPlantToFacilityIdMappingApi',
        MaintainCompanyIdOrPlantToFacilityIdMappingApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationSubScenarioToScenarioApi(): MaintainRegulationSubScenarioToScenarioApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationSubScenarioToScenarioApi',
      MaintainRegulationSubScenarioToScenarioApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'transactionSourceScenarioApi',
        TransactionSourceScenarioApi
      ),
      this.initApi('objectCategoryApi', ObjectCategoryApi),
      this.initApi('regulationSubTypeApi', RegulationSubTypeApi),
      this.initApi(
        'maintainRegulationSubScenarioToScenarioApi',
        MaintainRegulationSubScenarioToScenarioApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainActionSubScenarioMappingApi(): MaintainActionSubScenarioMappingApi<DeSerializersT> {
    const api = this.initApi(
      'maintainActionSubScenarioMappingApi',
      MaintainActionSubScenarioMappingApi
    );
    const linkedApis = [
      this.initApi('regulationSubTypeApi', RegulationSubTypeApi),
      this.initApi('actionInventoryApi', ActionInventoryApi),
      this.initApi(
        'maintainActionSubScenarioMappingApi',
        MaintainActionSubScenarioMappingApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get manageRegulationTypeAndActiveApi(): ManageRegulationTypeAndActiveApi<DeSerializersT> {
    const api = this.initApi(
      'manageRegulationTypeAndActiveApi',
      ManageRegulationTypeAndActiveApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('maintainRegulationGroupApi', MaintainRegulationGroupApi),
      this.initApi(
        'manageRegulationTypeAndActiveApi',
        ManageRegulationTypeAndActiveApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get manageRegulationTypeAndObjectCategoryApi(): ManageRegulationTypeAndObjectCategoryApi<DeSerializersT> {
    const api = this.initApi(
      'manageRegulationTypeAndObjectCategoryApi',
      ManageRegulationTypeAndObjectCategoryApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectCategoryApi', ObjectCategoryApi),
      this.initApi(
        'maintainRegulationMaterialGroupApi',
        MaintainRegulationMaterialGroupApi
      ),
      this.initApi(
        'manageRegulationTypeAndObjectCategoryApi',
        ManageRegulationTypeAndObjectCategoryApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainIdRangeForRenewableObjectSequenceApi(): MaintainIdRangeForRenewableObjectSequenceApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIdRangeForRenewableObjectSequenceApi',
      MaintainIdRangeForRenewableObjectSequenceApi
    );
    const linkedApis = [
      this.initApi('regulationSubTypeApi', RegulationSubTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get processingStatusApi(): ProcessingStatusApi<DeSerializersT> {
    return this.initApi('processingStatusApi', ProcessingStatusApi);
  }

  get maintainRegulationGroupViewApi(): MaintainRegulationGroupViewApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationGroupViewApi',
      MaintainRegulationGroupViewApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationGroupApi', MaintainRegulationGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationMaterialGroupViewApi(): MaintainRegulationMaterialGroupViewApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationMaterialGroupViewApi',
      MaintainRegulationMaterialGroupViewApi
    );
    const linkedApis = [
      this.initApi(
        'maintainRegulationMaterialGroupApi',
        MaintainRegulationMaterialGroupApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainIdRangeForRenewableObjectApi(): MaintainIdRangeForRenewableObjectApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIdRangeForRenewableObjectApi',
      MaintainIdRangeForRenewableObjectApi
    );
    const linkedApis = [
      this.initApi('regulationSubTypeApi', RegulationSubTypeApi),
      this.initApi(
        'maintainIdRangeForRenewableObjectApi',
        MaintainIdRangeForRenewableObjectApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainIdRangeForReconciliationGroupApi(): MaintainIdRangeForReconciliationGroupApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIdRangeForReconciliationGroupApi',
      MaintainIdRangeForReconciliationGroupApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainIdRangeForReconciliationGroupApi',
        MaintainIdRangeForReconciliationGroupApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get regulationCategoryApi(): RegulationCategoryApi<DeSerializersT> {
    return this.initApi('regulationCategoryApi', RegulationCategoryApi);
  }

  get countriesApi(): CountriesApi<DeSerializersT> {
    const api = this.initApi('countriesApi', CountriesApi);
    const linkedApis = [
      this.initApi('countries_TextsApi', Countries_TextsApi),
      this.initApi('countries_TextsApi', Countries_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get regulationUomApi(): RegulationUomApi<DeSerializersT> {
    return this.initApi('regulationUomApi', RegulationUomApi);
  }

  get transactionCategoryApi(): TransactionCategoryApi<DeSerializersT> {
    return this.initApi('transactionCategoryApi', TransactionCategoryApi);
  }

  get fuelCategoryApi(): FuelCategoryApi<DeSerializersT> {
    return this.initApi('fuelCategoryApi', FuelCategoryApi);
  }

  get fuelSubCategoryApi(): FuelSubCategoryApi<DeSerializersT> {
    return this.initApi('fuelSubCategoryApi', FuelSubCategoryApi);
  }

  get objectTypeApi(): ObjectTypeApi<DeSerializersT> {
    const api = this.initApi('objectTypeApi', ObjectTypeApi);
    const linkedApis = [
      this.initApi('objectType_TextsApi', ObjectType_TextsApi),
      this.initApi('objectType_TextsApi', ObjectType_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get objectCategoryApi(): ObjectCategoryApi<DeSerializersT> {
    return this.initApi('objectCategoryApi', ObjectCategoryApi);
  }

  get impactApi(): ImpactApi<DeSerializersT> {
    return this.initApi('impactApi', ImpactApi);
  }

  get passRetainIndicatorApi(): PassRetainIndicatorApi<DeSerializersT> {
    return this.initApi('passRetainIndicatorApi', PassRetainIndicatorApi);
  }

  get modeApi(): ModeApi<DeSerializersT> {
    const api = this.initApi('modeApi', ModeApi);
    const linkedApis = [
      this.initApi('mode_TextsApi', Mode_TextsApi),
      this.initApi('mode_TextsApi', Mode_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get rfs2DebitTypeApi(): Rfs2DebitTypeApi<DeSerializersT> {
    return this.initApi('rfs2DebitTypeApi', Rfs2DebitTypeApi);
  }

  get rfs2FuelCodeApi(): Rfs2FuelCodeApi<DeSerializersT> {
    return this.initApi('rfs2FuelCodeApi', Rfs2FuelCodeApi);
  }

  get transactionSourceScenarioApi(): TransactionSourceScenarioApi<DeSerializersT> {
    return this.initApi(
      'transactionSourceScenarioApi',
      TransactionSourceScenarioApi
    );
  }

  get regulationSubTypeApi(): RegulationSubTypeApi<DeSerializersT> {
    return this.initApi('regulationSubTypeApi', RegulationSubTypeApi);
  }

  get actionInventoryApi(): ActionInventoryApi<DeSerializersT> {
    return this.initApi('actionInventoryApi', ActionInventoryApi);
  }

  get countries_TextsApi(): Countries_TextsApi<DeSerializersT> {
    return this.initApi('countries_TextsApi', Countries_TextsApi);
  }

  get objectType_TextsApi(): ObjectType_TextsApi<DeSerializersT> {
    return this.initApi('objectType_TextsApi', ObjectType_TextsApi);
  }

  get mode_TextsApi(): Mode_TextsApi<DeSerializersT> {
    return this.initApi('mode_TextsApi', Mode_TextsApi);
  }

  get operations() {
    return {
      getNextRenewableId: (
        parameter: GetNextRenewableIdParameters<DeSerializersT>
      ) => getNextRenewableId(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
