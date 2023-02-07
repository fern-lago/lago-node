/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { LagoApi } from "@fern-api/lago";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.LagoApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Create a new coupon
     */
    public async create(request: LagoApi.CouponInput): Promise<LagoApi.Coupon> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "coupons"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CouponInput.json(request),
        });
        if (_response.ok) {
            return await serializers.Coupon.parse(_response.body as serializers.Coupon.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Return a single coupon
     */
    public async get(code: string): Promise<LagoApi.Coupon> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, `coupons/${code}`),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Coupon.parse(_response.body as serializers.Coupon.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing coupon by code
     */
    public async update(code: string, request: LagoApi.CouponInput): Promise<LagoApi.Coupon> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, `coupons/${code}`),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CouponInput.json(request),
        });
        if (_response.ok) {
            return await serializers.Coupon.parse(_response.body as serializers.Coupon.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a coupon
     */
    public async destroy(code: string): Promise<LagoApi.Coupon> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, `coupons/${code}`),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Coupon.parse(_response.body as serializers.Coupon.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Find all coupons in certain organisation
     */
    public async find(request: LagoApi.FindAllCouponsRequest = {}): Promise<LagoApi.Coupons> {
        const { page, perPage } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (perPage != null) {
            _queryParams.append("per_page", perPage.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "coupons"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Coupons.parse(_response.body as serializers.Coupons.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Apply a coupon to a customer
     */
    public async apply(request: LagoApi.AppliedCouponInput): Promise<LagoApi.AppliedCoupon> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "applied_coupons"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.AppliedCouponInput.json(request),
        });
        if (_response.ok) {
            return await serializers.AppliedCoupon.parse(_response.body as serializers.AppliedCoupon.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Find all applied coupons
     */
    public async findAllAppliedCoupons(
        request: LagoApi.FindAllAppliedCouponsInput = {}
    ): Promise<LagoApi.AppliedCoupons> {
        const { page, perPage, status, externalCustomerId } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (perPage != null) {
            _queryParams.append("per_page", perPage.toString());
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (externalCustomerId != null) {
            _queryParams.append("external_customer_id", externalCustomerId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "applied_coupons"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.AppliedCoupons.parse(_response.body as serializers.AppliedCoupons.Raw);
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LagoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LagoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LagoApiTimeoutError();
            case "unknown":
                throw new errors.LagoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
