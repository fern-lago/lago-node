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
     * Update an existing organization
     */
    public async update(request: LagoApi.OrganizationInput): Promise<LagoApi.Organization> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.LagoApiEnvironment.Production, "/organizations"),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.OrganizationInput.json(request),
        });
        if (_response.ok) {
            return await serializers.Organization.parse(_response.body as serializers.Organization.Raw);
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
