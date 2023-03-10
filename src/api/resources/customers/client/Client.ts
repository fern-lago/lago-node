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
     * Create a new customer
     */
    public async create(request: LagoApi.CustomerInput): Promise<LagoApi.Customer> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "/customers"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CustomerInput.json(request),
        });
        if (_response.ok) {
            return await serializers.Customer.parse(_response.body as serializers.Customer.Raw);
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
     * Return a single customer
     */
    public async get(externalId: string): Promise<LagoApi.Customer> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/customers/${externalId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Customer.parse(_response.body as serializers.Customer.Raw);
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
     * Return a customer current usage
     */
    public async getCurrentUsage(
        customerExternalId: string,
        request: LagoApi.FindCustomerCurrentUsageInput
    ): Promise<LagoApi.CustomerUsage> {
        const { externalSubscriptionId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("external_subscription_id", externalSubscriptionId);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.LagoApiEnvironment.Production,
                `/customers/${customerExternalId}/current_usage`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.CustomerUsage.parse(_response.body as serializers.CustomerUsage.Raw);
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
     * Find all customers in certain organisation
     */
    public async find(request: LagoApi.FindAllCustomersInput = {}): Promise<LagoApi.Customers> {
        const { page, perPage } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (perPage != null) {
            _queryParams.append("per_page", perPage.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "/customers"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.Customers.parse(_response.body as serializers.Customers.Raw);
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
