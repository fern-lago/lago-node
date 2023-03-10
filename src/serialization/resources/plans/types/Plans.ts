/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Plans: core.serialization.ObjectSchema<serializers.Plans.Raw, LagoApi.Plans> = core.serialization.object({
    plans: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).PlanObject))
        .optional(),
});

export declare namespace Plans {
    interface Raw {
        plans?: serializers.PlanObject.Raw[] | null;
    }
}
