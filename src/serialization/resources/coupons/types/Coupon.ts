/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Coupon: core.serialization.ObjectSchema<serializers.Coupon.Raw, LagoApi.Coupon> =
    core.serialization.object({
        coupon: core.serialization.lazyObject(async () => (await import("../../..")).CouponObject).optional(),
    });

export declare namespace Coupon {
    interface Raw {
        coupon?: serializers.CouponObject.Raw | null;
    }
}