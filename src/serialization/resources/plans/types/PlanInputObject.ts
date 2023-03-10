/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const PlanInputObject: core.serialization.ObjectSchema<
    serializers.PlanInputObject.Raw,
    LagoApi.PlanInputObject
> = core.serialization.object({
    name: core.serialization.string().optional(),
    code: core.serialization.string().optional(),
    interval: core.serialization.lazy(async () => (await import("../../..")).PlanInterval).optional(),
    description: core.serialization.string().optional(),
    amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
    amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
    trialPeriod: core.serialization.property("trial_period", core.serialization.number().optional()),
    payInAdvance: core.serialization.property("pay_in_advance", core.serialization.boolean().optional()),
    billChargesMonthly: core.serialization.property("bill_charges_monthly", core.serialization.boolean().optional()),
    charges: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Charges))
        .optional(),
});

export declare namespace PlanInputObject {
    interface Raw {
        name?: string | null;
        code?: string | null;
        interval?: serializers.PlanInterval.Raw | null;
        description?: string | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
        trial_period?: number | null;
        pay_in_advance?: boolean | null;
        bill_charges_monthly?: boolean | null;
        charges?: serializers.Charges.Raw[] | null;
    }
}
