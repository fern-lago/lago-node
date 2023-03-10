/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const BatchEventInputObject: core.serialization.ObjectSchema<
    serializers.BatchEventInputObject.Raw,
    LagoApi.BatchEventInputObject
> = core.serialization.object({
    transactionId: core.serialization.property("transaction_id", core.serialization.string().optional()),
    externalCustomerId: core.serialization.property("external_customer_id", core.serialization.string().optional()),
    code: core.serialization.string().optional(),
    timestamp: core.serialization.number().optional(),
    externalSubscriptionIds: core.serialization.property(
        "external_subscription_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
    properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace BatchEventInputObject {
    interface Raw {
        transaction_id?: string | null;
        external_customer_id?: string | null;
        code?: string | null;
        timestamp?: number | null;
        external_subscription_ids?: string[] | null;
        properties?: Record<string, unknown> | null;
    }
}
