/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const CouponObject: core.serialization.ObjectSchema<serializers.CouponObject.Raw, LagoApi.CouponObject> =
    core.serialization.object({
        lagoId: core.serialization.property("lago_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        code: core.serialization.string().optional(),
        couponType: core.serialization.property(
            "coupon_type",
            core.serialization.lazy(async () => (await import("../../..")).CouponType).optional()
        ),
        amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
        amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
        reusable: core.serialization.boolean().optional(),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
        percentageRate: core.serialization.property("percentage_rate", core.serialization.number().optional()),
        frequency: core.serialization.lazy(async () => (await import("../../..")).FrequencyType).optional(),
        frequencyDuration: core.serialization.property("frequency_duration", core.serialization.number().optional()),
        expirationAt: core.serialization.property("expiration_at", core.serialization.string().optional()),
        expiration: core.serialization.lazy(async () => (await import("../../..")).ExpirationType).optional(),
    });

export declare namespace CouponObject {
    interface Raw {
        lago_id?: string | null;
        name?: string | null;
        code?: string | null;
        coupon_type?: serializers.CouponType.Raw | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
        reusable?: boolean | null;
        created_at?: string | null;
        percentage_rate?: number | null;
        frequency?: serializers.FrequencyType.Raw | null;
        frequency_duration?: number | null;
        expiration_at?: string | null;
        expiration?: serializers.ExpirationType.Raw | null;
    }
}
