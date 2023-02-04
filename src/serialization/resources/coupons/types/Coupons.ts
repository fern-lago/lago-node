/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Coupons: core.serialization.ObjectSchema<serializers.Coupons.Raw, LagoApi.Coupons> =
    core.serialization.object({
        coupons: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CouponObject))
            .optional(),
    });

export declare namespace Coupons {
    interface Raw {
        coupons?: serializers.CouponObject.Raw[] | null;
    }
}
