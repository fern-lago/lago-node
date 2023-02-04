/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const PlanInput: core.serialization.ObjectSchema<serializers.PlanInput.Raw, LagoApi.PlanInput> =
    core.serialization.object({
        plan: core.serialization.lazyObject(async () => (await import("../../..")).PlanInputObject).optional(),
    });

export declare namespace PlanInput {
    interface Raw {
        plan?: serializers.PlanInputObject.Raw | null;
    }
}
