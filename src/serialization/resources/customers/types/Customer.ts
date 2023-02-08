/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Customer: core.serialization.ObjectSchema<serializers.Customer.Raw, LagoApi.Customer> =
    core.serialization.object({
        customer: core.serialization.lazyObject(async () => (await import("../../..")).CustomerObject).optional(),
    });

export declare namespace Customer {
    interface Raw {
        customer?: serializers.CustomerObject.Raw | null;
    }
}