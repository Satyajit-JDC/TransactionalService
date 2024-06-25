/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { MaintainTransactionTypeApi } from './MaintainTransactionTypeApi';
import { MaintainRegulationTransactionTypeTsApi } from './MaintainRegulationTransactionTypeTsApi';
import { MaintainFuelMappingApi } from './MaintainFuelMappingApi';
import { MaintainRegulationObjecttypeApi } from './MaintainRegulationObjecttypeApi';
import { MaintainRegulationGroupApi } from './MaintainRegulationGroupApi';
import { MaintainRegulationMaterialGroupApi } from './MaintainRegulationMaterialGroupApi';
import { MaintainAdjustmentReasonCodeApi } from './MaintainAdjustmentReasonCodeApi';
import { MaintainInventoryPostingPlantApi } from './MaintainInventoryPostingPlantApi';
import { MaintainIncotermsImpactForImportOrExportApi } from './MaintainIncotermsImpactForImportOrExportApi';
import { MaintainRegulationToleranceForDateMatchApi } from './MaintainRegulationToleranceForDateMatchApi';
import { MaintainRegulatonToleranceForVolumeMatchApi } from './MaintainRegulatonToleranceForVolumeMatchApi';
import { MaintainRegulationTransactionTypeBuApi } from './MaintainRegulationTransactionTypeBuApi';
import { MaintainMovementTypeApi } from './MaintainMovementTypeApi';
import { MaintainMovementTypeToTransactionCategoryImpactApi } from './MaintainMovementTypeToTransactionCategoryImpactApi';
import { MaintainRenewableMovementTypeApi } from './MaintainRenewableMovementTypeApi';
import { MaintainRenewableMaterialConfigurationApi } from './MaintainRenewableMaterialConfigurationApi';
import { MaintainCompanyIdToPlantApi } from './MaintainCompanyIdToPlantApi';
import { MaintainCompanyIdOrPlantToFacilityIdApi } from './MaintainCompanyIdOrPlantToFacilityIdApi';
import { MaintainRegulationSubScenarioToScenarioApi } from './MaintainRegulationSubScenarioToScenarioApi';
import { MaintainRegulationSubScenarioActionApi } from './MaintainRegulationSubScenarioActionApi';
import { ManageRegulationTypeAndActiveApi } from './ManageRegulationTypeAndActiveApi';
import { ManageRegulationTypeAndObjectCategoryApi } from './ManageRegulationTypeAndObjectCategoryApi';
import { MaintainIdRangeForRenewableObjectSequenceApi } from './MaintainIdRangeForRenewableObjectSequenceApi';
import { MaintainRegulationGroupViewApi } from './MaintainRegulationGroupViewApi';
import { MaintainRegulationMaterialGroupViewApi } from './MaintainRegulationMaterialGroupViewApi';
import { MaintainIdRangeForRenewableObjectsApi } from './MaintainIdRangeForRenewableObjectsApi';
import { MaintainIdRangeForReconciliationGroupsApi } from './MaintainIdRangeForReconciliationGroupsApi';
import { RegulationCategoryApi } from './RegulationCategoryApi';
import { CountriesApi } from './CountriesApi';
import { UomApi } from './UomApi';
import { TransactionCategoryApi } from './TransactionCategoryApi';
import { FuelCategoryApi } from './FuelCategoryApi';
import { FuelSubCategoryApi } from './FuelSubCategoryApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { ObjectCategoryApi } from './ObjectCategoryApi';
import { ImpactApi } from './ImpactApi';
import { PassRetainIndicatorApi } from './PassRetainIndicatorApi';
import { ModeApi } from './ModeApi';
import { Rfs2DebitTypeApi } from './Rfs2DebitTypeApi';
import { FuelCodeApi } from './FuelCodeApi';
import { TransactionSourceScenarioApi } from './TransactionSourceScenarioApi';
import { RegulationSubCategoryApi } from './RegulationSubCategoryApi';
import { ActionApi } from './ActionApi';
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
      this.initApi('uomApi', UomApi),
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

  get maintainRegulationTransactionTypeTsApi(): MaintainRegulationTransactionTypeTsApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationTransactionTypeTsApi',
      MaintainRegulationTransactionTypeTsApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi(
        'maintainRegulationTransactionTypeTsApi',
        MaintainRegulationTransactionTypeTsApi
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

  get maintainRegulationObjecttypeApi(): MaintainRegulationObjecttypeApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationObjecttypeApi',
      MaintainRegulationObjecttypeApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('objectCategoryApi', ObjectCategoryApi),
      this.initApi(
        'maintainRegulationObjecttypeApi',
        MaintainRegulationObjecttypeApi
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

  get maintainRegulationToleranceForDateMatchApi(): MaintainRegulationToleranceForDateMatchApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationToleranceForDateMatchApi',
      MaintainRegulationToleranceForDateMatchApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainRegulationToleranceForDateMatchApi',
        MaintainRegulationToleranceForDateMatchApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulatonToleranceForVolumeMatchApi(): MaintainRegulatonToleranceForVolumeMatchApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulatonToleranceForVolumeMatchApi',
      MaintainRegulatonToleranceForVolumeMatchApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainRegulatonToleranceForVolumeMatchApi',
        MaintainRegulatonToleranceForVolumeMatchApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationTransactionTypeBuApi(): MaintainRegulationTransactionTypeBuApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationTransactionTypeBuApi',
      MaintainRegulationTransactionTypeBuApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('maintainTransactionTypeApi', MaintainTransactionTypeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi('impactApi', ImpactApi),
      this.initApi('passRetainIndicatorApi', PassRetainIndicatorApi),
      this.initApi(
        'maintainRegulationTransactionTypeBuApi',
        MaintainRegulationTransactionTypeBuApi
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

  get maintainMovementTypeToTransactionCategoryImpactApi(): MaintainMovementTypeToTransactionCategoryImpactApi<DeSerializersT> {
    const api = this.initApi(
      'maintainMovementTypeToTransactionCategoryImpactApi',
      MaintainMovementTypeToTransactionCategoryImpactApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('maintainMovementTypeApi', MaintainMovementTypeApi),
      this.initApi('modeApi', ModeApi),
      this.initApi('transactionCategoryApi', TransactionCategoryApi),
      this.initApi('impactApi', ImpactApi),
      this.initApi(
        'maintainMovementTypeToTransactionCategoryImpactApi',
        MaintainMovementTypeToTransactionCategoryImpactApi
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

  get maintainRenewableMaterialConfigurationApi(): MaintainRenewableMaterialConfigurationApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRenewableMaterialConfigurationApi',
      MaintainRenewableMaterialConfigurationApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi('objectTypeApi', ObjectTypeApi),
      this.initApi('rfs2DebitTypeApi', Rfs2DebitTypeApi),
      this.initApi('fuelCodeApi', FuelCodeApi),
      this.initApi(
        'maintainRenewableMaterialConfigurationApi',
        MaintainRenewableMaterialConfigurationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainCompanyIdToPlantApi(): MaintainCompanyIdToPlantApi<DeSerializersT> {
    const api = this.initApi(
      'maintainCompanyIdToPlantApi',
      MaintainCompanyIdToPlantApi
    );
    const linkedApis = [
      this.initApi('maintainCompanyIdToPlantApi', MaintainCompanyIdToPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainCompanyIdOrPlantToFacilityIdApi(): MaintainCompanyIdOrPlantToFacilityIdApi<DeSerializersT> {
    const api = this.initApi(
      'maintainCompanyIdOrPlantToFacilityIdApi',
      MaintainCompanyIdOrPlantToFacilityIdApi
    );
    const linkedApis = [
      this.initApi(
        'maintainCompanyIdOrPlantToFacilityIdApi',
        MaintainCompanyIdOrPlantToFacilityIdApi
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
      this.initApi('regulationSubCategoryApi', RegulationSubCategoryApi),
      this.initApi(
        'maintainRegulationSubScenarioToScenarioApi',
        MaintainRegulationSubScenarioToScenarioApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainRegulationSubScenarioActionApi(): MaintainRegulationSubScenarioActionApi<DeSerializersT> {
    const api = this.initApi(
      'maintainRegulationSubScenarioActionApi',
      MaintainRegulationSubScenarioActionApi
    );
    const linkedApis = [
      this.initApi('regulationSubCategoryApi', RegulationSubCategoryApi),
      this.initApi('actionApi', ActionApi),
      this.initApi(
        'maintainRegulationSubScenarioActionApi',
        MaintainRegulationSubScenarioActionApi
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
      this.initApi('regulationSubCategoryApi', RegulationSubCategoryApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
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

  get maintainIdRangeForRenewableObjectsApi(): MaintainIdRangeForRenewableObjectsApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIdRangeForRenewableObjectsApi',
      MaintainIdRangeForRenewableObjectsApi
    );
    const linkedApis = [
      this.initApi('regulationSubCategoryApi', RegulationSubCategoryApi),
      this.initApi(
        'maintainIdRangeForRenewableObjectsApi',
        MaintainIdRangeForRenewableObjectsApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get maintainIdRangeForReconciliationGroupsApi(): MaintainIdRangeForReconciliationGroupsApi<DeSerializersT> {
    const api = this.initApi(
      'maintainIdRangeForReconciliationGroupsApi',
      MaintainIdRangeForReconciliationGroupsApi
    );
    const linkedApis = [
      this.initApi('maintainRegulationTypeApi', MaintainRegulationTypeApi),
      this.initApi(
        'maintainIdRangeForReconciliationGroupsApi',
        MaintainIdRangeForReconciliationGroupsApi
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

  get uomApi(): UomApi<DeSerializersT> {
    return this.initApi('uomApi', UomApi);
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

  get fuelCodeApi(): FuelCodeApi<DeSerializersT> {
    return this.initApi('fuelCodeApi', FuelCodeApi);
  }

  get transactionSourceScenarioApi(): TransactionSourceScenarioApi<DeSerializersT> {
    return this.initApi(
      'transactionSourceScenarioApi',
      TransactionSourceScenarioApi
    );
  }

  get regulationSubCategoryApi(): RegulationSubCategoryApi<DeSerializersT> {
    return this.initApi('regulationSubCategoryApi', RegulationSubCategoryApi);
  }

  get actionApi(): ActionApi<DeSerializersT> {
    return this.initApi('actionApi', ActionApi);
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
