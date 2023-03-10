/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const SubscriptionCreateInputObject: core.serialization.ObjectSchema<
    serializers.SubscriptionCreateInputObject.Raw,
    LagoApi.SubscriptionCreateInputObject
> = core.serialization.object({
    externalCustomerId: core.serialization.property("external_customer_id", core.serialization.string().optional()),
    planCode: core.serialization.property("plan_code", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    billingTime: core.serialization.property(
        "billing_time",
        core.serialization.lazy(async () => (await import("../../..")).BillingTime).optional()
    ),
    subscriptionAt: core.serialization.property("subscription_at", core.serialization.string().optional()),
});

export declare namespace SubscriptionCreateInputObject {
    interface Raw {
        external_customer_id?: string | null;
        plan_code?: string | null;
        name?: string | null;
        external_id?: string | null;
        billing_time?: serializers.BillingTime.Raw | null;
        subscription_at?: string | null;
    }
}
