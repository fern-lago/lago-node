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
     * Create a new billable metric
     */
    public async create(request: LagoApi.BillableMetricInput): Promise<LagoApi.BillableMetric> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "/billable_metrics"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.BillableMetricInput.json(request),
        });
        if (_response.ok) {
            return await serializers.BillableMetric.parse(_response.body as serializers.BillableMetric.Raw);
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
     * Return a single billable metric
     */
    public async get(code: string): Promise<LagoApi.BillableMetric> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/billable_metrics/${code}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.BillableMetric.parse(_response.body as serializers.BillableMetric.Raw);
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
     * Update an existing billable metric by code
     */
    public async update(code: string, request: LagoApi.BillableMetricInput): Promise<LagoApi.BillableMetric> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/billable_metrics/${code}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.BillableMetricInput.json(request),
        });
        if (_response.ok) {
            return await serializers.BillableMetric.parse(_response.body as serializers.BillableMetric.Raw);
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
     * Delete a billable metric
     */
    public async destroy(code: string): Promise<LagoApi.BillableMetric> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/billable_metrics/${code}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.BillableMetric.parse(_response.body as serializers.BillableMetric.Raw);
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
     * Get all billable metrics in certain organisation
     */
    public async getAll(request: LagoApi.FindAllBillableMetricsInput = {}): Promise<LagoApi.BillableMetrics> {
        const { page, perPage } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (perPage != null) {
            _queryParams.append("per_page", perPage.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "/billable_metrics"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.BillableMetrics.parse(_response.body as serializers.BillableMetrics.Raw);
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
     * Find all billable metric groups in certain organisation
     */
    public async findMetricGroups(
        code: string,
        request: LagoApi.FindAllBillableMetricGroupsInput = {}
    ): Promise<LagoApi.Groups> {
        const { page, perPage } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (perPage != null) {
            _queryParams.append("per_page", perPage.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/billable_metrics/${code}/groups`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Groups.parse(_response.body as serializers.Groups.Raw);
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
