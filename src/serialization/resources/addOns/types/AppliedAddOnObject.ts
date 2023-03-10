/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const AppliedAddOnObject: core.serialization.ObjectSchema<
    serializers.AppliedAddOnObject.Raw,
    LagoApi.AppliedAddOnObject
> = core.serialization.object({
    lagoId: core.serialization.property("lago_id", core.serialization.string().optional()),
    lagoAddOnId: core.serialization.property("lago_add_on_id", core.serialization.string().optional()),
    addOnCode: core.serialization.property("add_on_code", core.serialization.string().optional()),
    lagoCustomerId: core.serialization.property("lago_customer_id", core.serialization.string().optional()),
    externalCustomerId: core.serialization.property("external_customer_id", core.serialization.string().optional()),
    amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
    amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
});

export declare namespace AppliedAddOnObject {
    interface Raw {
        lago_id?: string | null;
        lago_add_on_id?: string | null;
        add_on_code?: string | null;
        lago_customer_id?: string | null;
        external_customer_id?: string | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
        created_at?: string | null;
    }
}
