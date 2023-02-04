/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const AddOn: core.serialization.ObjectSchema<serializers.AddOn.Raw, LagoApi.AddOn> = core.serialization.object({
    addOn: core.serialization.property(
        "add_on",
        core.serialization.lazyObject(async () => (await import("../../..")).AddOnObject).optional()
    ),
});

export declare namespace AddOn {
    interface Raw {
        add_on?: serializers.AddOnObject.Raw | null;
    }
}
