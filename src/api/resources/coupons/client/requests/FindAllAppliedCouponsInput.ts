/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

export interface FindAllAppliedCouponsInput {
    /**
     * Number of page
     */
    page?: number;
    /**
     * Number of records per page
     */
    perPage?: number;
    /**
     * Applied coupon status
     */
    status?: LagoApi.CouponStatus;
    /**
     * External customer ID
     */
    externalCustomerId?: string;
}
