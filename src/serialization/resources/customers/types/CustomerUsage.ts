/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const CustomerUsage: core.serialization.ObjectSchema<serializers.CustomerUsage.Raw, LagoApi.CustomerUsage> =
    core.serialization.object({
        customerUsage: core.serialization.property(
            "customer_usage",
            core.serialization.lazyObject(async () => (await import("../../..")).CustomerUsageObject).optional()
        ),
    });

export declare namespace CustomerUsage {
    interface Raw {
        customer_usage?: serializers.CustomerUsageObject.Raw | null;
    }
}