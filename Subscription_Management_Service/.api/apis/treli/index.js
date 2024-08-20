import Oas from 'oas'
import APICore from 'api/dist/core/index.js'
import definition from './openapi.json' assert { type: 'json' }

class SDK {
  constructor() {
    this.spec = Oas.init(definition)
    this.core = new APICore(this.spec, 'treli/1.0.0 (api/6.1.2)')
  }
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config) {
    this.core.setConfig(config)
  }
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
  auth(...values) {
    this.core.setAuth(...values)
    return this
  }
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
  server(url, variables = {}) {
    this.core.setServer(url, variables)
  }
  /**
   * Crea una suscripción
   *
   * @summary Crea una suscripción
   */
  postSubscriptionsCreate(body) {
    return this.core.fetch('/subscriptions/create', 'post', body)
  }
  /**
   * Actualiza una suscripción
   *
   * @summary Actualizar una suscripción
   */
  postSubscriptionsUpdate(body) {
    return this.core.fetch('/subscriptions/update', 'post', body)
  }
  /**
   * Obtén una lista de suscripciones con posibles filtros
   *
   * @summary Listar suscripciones
   */
  getSubscriptions(metadata) {
    return this.core.fetch('/subscriptions', 'get', metadata)
  }
  /**
   * Ver el detalle de la suscripción de un cliente
   *
   * @summary Ver suscripción
   */
  postSubscriptionsView(body) {
    return this.core.fetch('/subscriptions/view', 'post', body)
  }
  /**
   * Pausar, cancelar o reactivar la suscripción de un cliente
   *
   * @summary Acciones de suscripción
   */
  postSubscriptionsActions(body) {
    return this.core.fetch('/subscriptions/actions', 'post', body)
  }
  /**
   * Este enpoint te permite reportar el uso de una suscripción. Aplicar para suscripciones
   * con planes configurados en Treli con la opción de "Cobro basado en el uso"
   *
   * @summary Reportar uso
   */
  postSubscriptionsReportUsage(body) {
    return this.core.fetch('/subscriptions/report-usage', 'post', body)
  }
  /**
   * Obtén una lista de todos tus planes o el detalle de uno especifico
   *
   * @summary Listar planes
   */
  getPlans(metadata) {
    return this.core.fetch('/plans', 'get', metadata)
  }
  /**
   * Obtén una lista de tus planes con posibles filtros
   *
   * @summary Listar planes
   */
  getPlansGet(metadata) {
    return this.core.fetch('/plans/get', 'get', metadata)
  }
  /**
   * Crear una plan
   *
   * @summary Crear una plan
   */
  postPlansCreate(body) {
    return this.core.fetch('/plans/create', 'post', body)
  }
  /**
   * Actualiza un plan de suscripción de un plan
   *
   * @summary Actualiza un plan
   */
  postPlansUpdate(body) {
    return this.core.fetch('/plans/update', 'post', body)
  }
  /**
   * Este endpoint te permite agregar un token de una tarjeta de crédito que tengas
   * almacenado en tu sistema y asignarlo a un cliente
   *
   * @summary Agregar token
   */
  postCardsAddToken(body) {
    return this.core.fetch('/cards/add-token', 'post', body)
  }
  /**
   * Este endpoint te permite eliminar un token de una tarjeta de crédito de un cliente.
   *
   * @summary Eliminar token
   */
  postCardsDeleteToken(body) {
    return this.core.fetch('/cards/delete-token', 'post', body)
  }
  /**
   * Obtén una lista de los tokens asociados a un cliente y pasarela de pago
   *
   * @summary Listar tokens
   */
  getCardsGetTokens(metadata) {
    return this.core.fetch('/cards/get-tokens', 'get', metadata)
  }
  /**
   * Crea una un pago único o una solicitud de pago asociada a una factura
   *
   * @summary Crear un pago
   */
  postPaymentsCreate(body) {
    return this.core.fetch('/payments/create', 'post', body)
  }
  /**
   * Cambia el estado de un pago a anulado o aprobado
   *
   * @summary Actualizar estado de un pago
   */
  postPaymentsUpdateStatus(body) {
    return this.core.fetch('/payments/update-status', 'post', body)
  }
  /**
   * Actualiza un pago
   *
   * @summary Actualizar un pago
   */
  postPaymentsUpdate(body) {
    return this.core.fetch('/payments/update', 'post', body)
  }
  /**
   * Obtén una lista de pagos con posibles filtros
   *
   * @summary Listar pagos
   */
  getPaymentsList(metadata) {
    return this.core.fetch('/payments/list', 'get', metadata)
  }
  /**
   * Obtén una lista de tus plantillas de pago
   *
   * @summary Listar plantillas de pago
   */
  getPaymentsTemplates() {
    return this.core.fetch('/payments/templates', 'get')
  }
  /**
   * Listar pasarelas y métodos de pago disponibles en tu cuenta de Treli
   *
   * @summary Listar pasarelas
   */
  getGatewaysList(metadata) {
    return this.core.fetch('/gateways/list', 'get', metadata)
  }
  /**
   * Con el portal del cliente, puedes permitir a tus clientes gestionar sus suscripciones,
   * métodos de pago y pagar facturas sin necesidad de desarrollar un portal tú mismo.
   * Después de configurar e integrar el portal, los clientes son redirigidos a un portal de
   * marca compartida donde pueden administrar su cuenta según las funcionalidades que
   * configures
   *
   * @summary Crear una sesión de portal
   */
  postPortalSessionsCreate(body) {
    return this.core.fetch('/portal/sessions/create', 'post', body)
  }
}
const createSDK = (() => {
  return new SDK()
})()
export default createSDK
