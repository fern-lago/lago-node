/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Customers: core.serialization.ObjectSchema<serializers.Customers.Raw, LagoApi.Customers> =
    core.serialization.object({
        customers: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CustomerObject))
            .optional(),
    });

export declare namespace Customers {
    interface Raw {
        customers?: serializers.CustomerObject.Raw[] | null;
    }
}
