/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const BillingConfigurationCustomer: core.serialization.Schema<
    serializers.BillingConfigurationCustomer.Raw,
    LagoApi.BillingConfigurationCustomer
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace BillingConfigurationCustomer {
    type Raw = Record<string, unknown>;
}
