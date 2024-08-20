import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Crea una suscripción
     *
     * @summary Crea una suscripción
     */
    postSubscriptionsCreate(body: types.PostSubscriptionsCreateBodyParam): Promise<FetchResponse<200, types.PostSubscriptionsCreateResponse200>>;
    /**
     * Actualiza una suscripción
     *
     * @summary Actualizar una suscripción
     */
    postSubscriptionsUpdate(body: types.PostSubscriptionsUpdateBodyParam): Promise<FetchResponse<200, types.PostSubscriptionsUpdateResponse200>>;
    /**
     * Obtén una lista de suscripciones con posibles filtros
     *
     * @summary Listar suscripciones
     */
    getSubscriptions(metadata?: types.GetSubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetSubscriptionsResponse200>>;
    /**
     * Ver el detalle de la suscripción de un cliente
     *
     * @summary Ver suscripción
     */
    postSubscriptionsView(body: types.PostSubscriptionsViewBodyParam): Promise<FetchResponse<200, types.PostSubscriptionsViewResponse200>>;
    /**
     * Pausar, cancelar o reactivar la suscripción de un cliente
     *
     * @summary Acciones de suscripción
     */
    postSubscriptionsActions(body: types.PostSubscriptionsActionsBodyParam): Promise<FetchResponse<200, types.PostSubscriptionsActionsResponse200>>;
    /**
     * Este enpoint te permite reportar el uso de una suscripción. Aplicar para suscripciones
     * con planes configurados en Treli con la opción de "Cobro basado en el uso"
     *
     * @summary Reportar uso
     */
    postSubscriptionsReportUsage(body: types.PostSubscriptionsReportUsageBodyParam): Promise<FetchResponse<200, types.PostSubscriptionsReportUsageResponse200>>;
    /**
     * Obtén una lista de todos tus planes o el detalle de uno especifico
     *
     * @summary Listar planes
     */
    getPlans(metadata?: types.GetPlansMetadataParam): Promise<FetchResponse<200, types.GetPlansResponse200>>;
    /**
     * Obtén una lista de tus planes con posibles filtros
     *
     * @summary Listar planes
     */
    getPlansGet(metadata?: types.GetPlansGetMetadataParam): Promise<FetchResponse<200, types.GetPlansGetResponse200>>;
    /**
     * Crear una plan
     *
     * @summary Crear una plan
     */
    postPlansCreate(body: types.PostPlansCreateBodyParam): Promise<FetchResponse<200, types.PostPlansCreateResponse200>>;
    /**
     * Actualiza un plan de suscripción de un plan
     *
     * @summary Actualiza un plan
     */
    postPlansUpdate(body: types.PostPlansUpdateBodyParam): Promise<FetchResponse<200, types.PostPlansUpdateResponse200>>;
    /**
     * Este endpoint te permite agregar un token de una tarjeta de crédito que tengas
     * almacenado en tu sistema y asignarlo a un cliente
     *
     * @summary Agregar token
     */
    postCardsAddToken(body: types.PostCardsAddTokenBodyParam): Promise<FetchResponse<200, types.PostCardsAddTokenResponse200>>;
    /**
     * Este endpoint te permite eliminar un token de una tarjeta de crédito de un cliente.
     *
     * @summary Eliminar token
     */
    postCardsDeleteToken(body: types.PostCardsDeleteTokenBodyParam): Promise<FetchResponse<200, types.PostCardsDeleteTokenResponse200>>;
    /**
     * Obtén una lista de los tokens asociados a un cliente y pasarela de pago
     *
     * @summary Listar tokens
     */
    getCardsGetTokens(metadata?: types.GetCardsGetTokensMetadataParam): Promise<FetchResponse<200, types.GetCardsGetTokensResponse200>>;
    /**
     * Crea una un pago único o una solicitud de pago asociada a una factura
     *
     * @summary Crear un pago
     */
    postPaymentsCreate(body: types.PostPaymentsCreateBodyParam): Promise<FetchResponse<200, types.PostPaymentsCreateResponse200>>;
    /**
     * Cambia el estado de un pago a anulado o aprobado
     *
     * @summary Actualizar estado de un pago
     */
    postPaymentsUpdateStatus(body: types.PostPaymentsUpdateStatusBodyParam): Promise<FetchResponse<200, types.PostPaymentsUpdateStatusResponse200>>;
    /**
     * Actualiza un pago
     *
     * @summary Actualizar un pago
     */
    postPaymentsUpdate(body: types.PostPaymentsUpdateBodyParam): Promise<FetchResponse<200, types.PostPaymentsUpdateResponse200>>;
    /**
     * Obtén una lista de pagos con posibles filtros
     *
     * @summary Listar pagos
     */
    getPaymentsList(metadata?: types.GetPaymentsListMetadataParam): Promise<FetchResponse<200, types.GetPaymentsListResponse200>>;
    /**
     * Obtén una lista de tus plantillas de pago
     *
     * @summary Listar plantillas de pago
     */
    getPaymentsTemplates(): Promise<FetchResponse<200, types.GetPaymentsTemplatesResponse200>>;
    /**
     * Listar pasarelas y métodos de pago disponibles en tu cuenta de Treli
     *
     * @summary Listar pasarelas
     */
    getGatewaysList(metadata?: types.GetGatewaysListMetadataParam): Promise<FetchResponse<200, types.GetGatewaysListResponse200>>;
    /**
     * Con el portal del cliente, puedes permitir a tus clientes gestionar sus suscripciones,
     * métodos de pago y pagar facturas sin necesidad de desarrollar un portal tú mismo.
     * Después de configurar e integrar el portal, los clientes son redirigidos a un portal de
     * marca compartida donde pueden administrar su cuenta según las funcionalidades que
     * configures
     *
     * @summary Crear una sesión de portal
     */
    postPortalSessionsCreate(body: types.PostPortalSessionsCreateBodyParam): Promise<FetchResponse<200, types.PostPortalSessionsCreateResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
