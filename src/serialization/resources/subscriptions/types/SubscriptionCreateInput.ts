/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const SubscriptionCreateInput: core.serialization.ObjectSchema<
    serializers.SubscriptionCreateInput.Raw,
    LagoApi.SubscriptionCreateInput
> = core.serialization.object({
    subscription: core.serialization
        .lazyObject(async () => (await import("../../..")).SubscriptionCreateInputObject)
        .optional(),
});

export declare namespace SubscriptionCreateInput {
    interface Raw {
        subscription?: serializers.SubscriptionCreateInputObject.Raw | null;
    }
}
