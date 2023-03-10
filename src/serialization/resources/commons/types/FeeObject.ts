/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const FeeObject: core.serialization.ObjectSchema<serializers.FeeObject.Raw, LagoApi.FeeObject> =
    core.serialization.object({
        lagoId: core.serialization.property("lago_id", core.serialization.string().optional()),
        lagoGroupId: core.serialization.property("lago_group_id", core.serialization.string().optional()),
        amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
        amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
        vatAmountCents: core.serialization.property("vat_amount_cents", core.serialization.number().optional()),
        vatAmountCurrency: core.serialization.property("vat_amount_currency", core.serialization.string().optional()),
        units: core.serialization.number().optional(),
        eventsCount: core.serialization.property("events_count", core.serialization.number().optional()),
        item: core.serialization.lazyObject(async () => (await import("../../..")).FeeItem).optional(),
    });

export declare namespace FeeObject {
    interface Raw {
        lago_id?: string | null;
        lago_group_id?: string | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
        vat_amount_cents?: number | null;
        vat_amount_currency?: string | null;
        units?: number | null;
        events_count?: number | null;
        item?: serializers.FeeItem.Raw | null;
    }
}
