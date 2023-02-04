/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const AddOnInputObject: core.serialization.ObjectSchema<
    serializers.AddOnInputObject.Raw,
    LagoApi.AddOnInputObject
> = core.serialization.object({
    name: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
    amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
});

export declare namespace AddOnInputObject {
    interface Raw {
        name?: string | null;
        code?: string | null;
        description?: string | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
    }
}
