declare const GetCardsGetTokens: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Email del cliente";
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id de la pasarela de pago. Más información [aquí](https://treli.readme.io/reference/pasarelas-de-pago).";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetGatewaysList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id de la pasarela que quieres consultar. Puedes consultar los IDs de las pasarelas de pago [aquí](https://treli.readme.io/reference/pasarelas-de-pago). Dejar vacio para obtener información sobre todas tus pasarelas";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos asociados a un correo. Ejemplo. demo@treli.co";
                };
                readonly customer_identification: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos asociados un número de identificación de un cliente. Ejemplo. 1234567890";
                };
                readonly date_created: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos creados en una fecha especifica. Ejemplo. 2022-11-26";
                };
                readonly date_range: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos creados en un rango de fecha. Ejemplo. 2022-11-26...2022-12-26";
                };
                readonly subscription_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos asociados a una suscripción. Este filtro sobrescribe cualquier filtro enviado anteriormente. Ejemplo. 12345";
                };
                readonly payment_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén el detalle de un pago específico. Este filtro sobrescribe cualquier filtro enviado anteriormente. Ejemplo. 12345";
                };
                readonly collection_template_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de los pagos asociados una plantilla de cobro.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un límite en el número de objetos a devolver. El límite puede oscilar entre 1 y 200, y el valor predeterminado es 50.";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un cursor para usar en la paginación. Por ejemplo, si realizas una solicitud y recibes 200 objetos pero en la respuesta obtienes has_more=true, tu siguiente solicitud puede incluir page=foo para obtener la siguiente página de la lista.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPaymentsTemplates: {
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPlans: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id del plan que quieres obtener. Dejar vacio para obtener todos tus planes";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPlansGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Id del plan que quieres obtener.";
                };
                readonly sku: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "SKU del plan que quieres obtener.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["active", "inactive", "private", "draft"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtrar planes por estado.";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un límite en el número de objetos a devolver. El límite puede oscilar entre 1 y 200, y el valor predeterminado es 50.";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un cursor para usar en la paginación.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly pagination: {
                    readonly type: "object";
                    readonly properties: {
                        readonly page: {
                            readonly type: "string";
                            readonly description: "Página actual de la paginación.";
                            readonly examples: readonly ["1"];
                        };
                        readonly page_size: {
                            readonly type: "integer";
                            readonly description: "Número de resultados obtenidos.";
                            readonly examples: readonly ["50"];
                        };
                    };
                };
                readonly results: {
                    readonly type: "array";
                    readonly description: "Listado de planes.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly description: "ID del plan.";
                                readonly examples: readonly [25462];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Nombre del plan.";
                                readonly examples: readonly ["Nombre de prueba"];
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly description: "SKU del plan.";
                                readonly examples: readonly ["123"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Descripción del plan.";
                                readonly examples: readonly ["Descripción de prueba"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "Estado del plan.";
                                readonly examples: readonly ["active"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Tipo de plan.";
                                readonly examples: readonly ["recurring_service"];
                            };
                            readonly plans: {
                                readonly type: "array";
                                readonly description: "Lista de planes de suscripción.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly interval: {
                                            readonly type: "string";
                                            readonly description: "Intervalo de renovación del plan.";
                                            readonly examples: readonly ["1"];
                                        };
                                        readonly period: {
                                            readonly type: "string";
                                            readonly description: "Periodo de renovación del plan.";
                                            readonly examples: readonly ["month"];
                                        };
                                        readonly pricing_model: {
                                            readonly type: "string";
                                            readonly description: "Modelo de precios del plan.";
                                            readonly examples: readonly ["standard"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly description: "Precio del plan en la moneda base de tu cuenta de Treli.";
                                            readonly examples: readonly ["50000"];
                                        };
                                        readonly trial: {
                                            readonly type: "object";
                                            readonly description: "Información de la prueba gratuita.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly description: "Tipo de prueba gratuita. \"duration\" para una prueba gratuita de duración fija, \"month_day\" para una prueba gratuita que finaliza en un específico del mes.";
                                                    readonly examples: readonly ["month_day"];
                                                };
                                                readonly month_day: {
                                                    readonly type: "string";
                                                    readonly description: "Si el tipo de prueba gratuita es \"month_day\", día del mes en el que finaliza la prueba gratuita.";
                                                    readonly examples: readonly ["15"];
                                                };
                                                readonly period: {
                                                    readonly type: "string";
                                                    readonly description: "Si el tipo de prueba gratuita es \"duration\", periodo de duración de la prueba gratuita.";
                                                    readonly examples: readonly ["day"];
                                                };
                                                readonly length: {
                                                    readonly type: "string";
                                                    readonly description: "Si el tipo de prueba gratuita es \"duration\", duración de la prueba gratuita.";
                                                    readonly examples: readonly ["30"];
                                                };
                                            };
                                        };
                                        readonly sign_up_fee: {
                                            readonly type: "string";
                                            readonly description: "Cuota de inscripción del plan en la moneda base de tu cuenta de Treli";
                                            readonly examples: readonly ["100000"];
                                        };
                                        readonly commitment_period: {
                                            readonly type: "string";
                                            readonly description: "Período de permanencia del plan.";
                                            readonly examples: readonly ["12"];
                                        };
                                        readonly multi_currency_prices: {
                                            readonly type: "object";
                                            readonly description: "Precios en múltiples monedas. Si el plan no tiene precios en múltiples monedas, se retorna \"null\" en lugar de un objeto.";
                                            readonly properties: {
                                                readonly USD: {
                                                    readonly type: "string";
                                                    readonly description: "Precio en dólares.";
                                                    readonly examples: readonly ["123"];
                                                };
                                            };
                                        };
                                        readonly multi_currency_signup_fees: {
                                            readonly type: "object";
                                            readonly description: "Cuotas de inscripción en múltiples monedas. Si el plan no tiene cuotas de inscripción en múltiples monedas, se retorna \"null\" en lugar de un objeto.";
                                            readonly properties: {
                                                readonly USD: {
                                                    readonly type: "string";
                                                    readonly description: "Precio en dólares.";
                                                    readonly examples: readonly ["100"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly _links: {
                    readonly type: "object";
                    readonly properties: {
                        readonly self: {
                            readonly type: "object";
                            readonly properties: {
                                readonly href: {
                                    readonly type: "string";
                                    readonly description: "URL de la página actual.";
                                    readonly examples: readonly ["https://test.treli.co/wp-json/api/plans/get?page_size=4&page=1&status=active"];
                                };
                            };
                        };
                        readonly next: {
                            readonly type: "object";
                            readonly properties: {
                                readonly href: {
                                    readonly type: "string";
                                    readonly description: "URL de la siguiente página.";
                                    readonly examples: readonly ["https://test.treli.co/wp-json/api/plans/get?page_size=4&page=2&status=active"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSubscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de las suscripciones asociadas a un correo. Ejemplo. demo@treli.co";
                };
                readonly date_created: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de las suscripciones creadas en una fecha especifica. Ejemplo. 2022-11-26";
                };
                readonly date_range: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de las suscripciones creadas en un rango de fecha. Ejemplo. 2022-11-26...2022-12-26";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén una lista de las suscripciones con un estado específico. Posibles estados \"active\", \"paused\", \"cancelled\", \"dunning\", \"in validation\", \"on hold\", \"intent\". Ejemplo. active";
                };
                readonly subscription_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Obtén el detalle de una suscripción específica. Este filtro sobrescribe cualquier filtro enviado anteriormente. Ejemplo. 12345";
                };
                readonly page_size: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un límite en el número de objetos a devolver. El límite puede oscilar entre 1 y 200, y el valor predeterminado es 50.";
                };
                readonly page: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Un cursor para usar en la paginación. Por ejemplo, si realizas una solicitud y recibes 200 objetos pero en la respuesta obtienes has_more=true, tu siguiente solicitud puede incluir page=foo para obtener la siguiente página de la lista.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCardsAddToken: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["gateway", "token_info"];
        readonly properties: {
            readonly gateway: {
                readonly type: "string";
                readonly minimum: 1;
                readonly description: "El id de la pasarela de pago a la cual quieres agregar el token. Más información [aquí](https://treli.readme.io/reference/pasarelas-de-pago).";
                readonly examples: readonly ["wompidirect"];
            };
            readonly token_info: {
                readonly type: "object";
                readonly required: readonly ["email", "cardTokenId"];
                readonly description: "Información del token de la tarjeta de crédito. Esta información puede variar según la pasarela de pago utilizada. El ejemplo a continuación es para la pasarela de pago Wompi. Más información [aquí](https://treli.readme.io/reference/pasarelas-de-pago).";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                        readonly description: "Correo electrónico del cliente";
                        readonly examples: readonly ["demo@treli.co"];
                    };
                    readonly cardTokenId: {
                        readonly type: "string";
                        readonly description: "Token de la tarjeta de crédito";
                        readonly examples: readonly ["33752"];
                    };
                    readonly last: {
                        readonly type: "string";
                        readonly description: "Últimos cuatro digitos de la tarjeta de crédito";
                        readonly examples: readonly ["4242"];
                    };
                    readonly ctype: {
                        readonly type: "string";
                        readonly description: "Tipo de tarjeta de crédito";
                        readonly examples: readonly ["VISA"];
                    };
                    readonly cexpire: {
                        readonly type: "string";
                        readonly description: "Fecha de expiración de la tarjeta de crédito. Formato mm/aaaa";
                        readonly examples: readonly ["12/2025"];
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCardsDeleteToken: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email", "gateway", "token_id"];
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Correo electrónico del cliente";
                readonly examples: readonly ["correo@ejemplo.com"];
            };
            readonly gateway: {
                readonly type: "string";
                readonly description: "El id de la pasarela de pago a la cual quieres agregar el token. Más información [aquí](https://treli.readme.io/reference/pasarelas-de-pago).";
                readonly examples: readonly ["wompidirect"];
            };
            readonly token_id: {
                readonly type: "integer";
                readonly description: "ID del token de la tarjeta de crédito que quieres eliminar";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPaymentsCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email", "billing_address", "requires_shipping"];
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Correo electrónico de tu cliente";
                readonly examples: readonly ["test@treli.co"];
            };
            readonly billing_address: {
                readonly type: "object";
                readonly description: "Dirección de facturación de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                        readonly examples: readonly ["Nombre"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                        readonly examples: readonly ["Apellido"];
                    };
                    readonly cedula: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Cédula de facturación del cliente";
                        readonly examples: readonly [123456789];
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                        readonly examples: readonly ["Cra 1 1 1"];
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente";
                        readonly examples: readonly ["Barranquilla"];
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente";
                        readonly examples: readonly ["ATL"];
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                        readonly examples: readonly [80001];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";
                        readonly examples: readonly ["CO"];
                    };
                    readonly phone: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Teléfono de facturación del cliente. Debe contener 10 digitos.";
                        readonly examples: readonly [3111111111];
                    };
                };
            };
            readonly requires_shipping: {
                readonly type: "boolean";
                readonly description: "Decide si el pago tiene asociado una dirección de envío";
            };
            readonly manual_payment: {
                readonly type: "boolean";
                readonly description: "Decide si el pago debe ser completado por parte del cliente. Si el pago es manual (true), este request te retorna un link de pago para que redirecciones a tu cliente. Si el pago no es manual (false), debes enviar la información del método de pago.";
            };
            readonly payment_collection: {
                readonly type: "string";
                readonly description: "Decide como quieres que Treli realice la cobranza del pago. \"now\" para crear un pago que debe ser pagado al instante y que Treli envie una notificación solicitando el pago. \"template\" para utilizar una plantilla de pago creada previamente. No aplica is \"manual_payment\" es true o false.";
            };
            readonly payment_template: {
                readonly type: "string";
                readonly description: "Si el \"payment_collection\" es \"template\", debes enviar el id de la plantilla que quieres utilizar. Puedes consultar tus plantillas con el endpoint [listar plantillas](https://treli.readme.io/reference/get_payments-templates). No aplica is \"manual_payment\" es true o false.";
            };
            readonly invoice_due_date: {
                readonly type: "string";
                readonly description: "Fecha de vencimiento de la factura o solicitud de pago. Formato YYYY-MM-DD.";
            };
            readonly invoicing: {
                readonly type: "string";
                readonly description: "Decide si quieres asociar una factura a la solicitud de pago. \"connect\" para conectar una factura que ya tengas creada en tu proveedor de facturación contable y lo tengas integrado con Treli. \"upload\" para recaudar una factura de un proveedor contable que no tengas integrado a Treli. \"create\" para crear una factura en tu proveedor contable y asociarla a la solicitud de pago. Para crear una factura, debes tener integrado un proveedor contable en tu cuenta de Treli.";
            };
            readonly connect_invoice_number: {
                readonly type: "string";
                readonly description: "Si \"invoicing\" es \"connect\", ingresa el número de una factura que ya tengas creada en tu proveedor de facturación contable. Treli descargara la factura, la enviara a tu cliente en las notificaciones de solicitud de pago. Debes tener integrado un proveedor contable en tu cuenta de Treli.";
            };
            readonly upload_invoice_number: {
                readonly type: "string";
                readonly description: "Si \"invoicing\" es \"upload\", ingresa el número de una factura que ya tengas creada en tu proveedor de facturación contable. Usalo cuando NO tengas integrado un proveedor contable en tu cuenta de Treli y quieras recaudar una factura.";
            };
            readonly upload_invoice_pdf_url: {
                readonly type: "string";
                readonly description: "Si \"invoicing\" es \"upload\", ingresa la URL del PDF de la factura que estas recaudando. Usalo cuando NO tengas integrado un proveedor contable en tu cuenta de Treli y quieras recaudar una factura. No es necesario si ya estas enviando la cadena en base64 del PDF de la factura.";
            };
            readonly upload_invoice_pdf_base64: {
                readonly type: "string";
                readonly description: "Si \"invoicing\" es \"upload\", ingresa la cadena en base64 de la factura que estas recaudando. Usalo cuando NO tengas integrado un proveedor contable en tu cuenta de Treli y quieras recaudar una factura. No es necesario si ya estas enviando la URL del PDF de la factura.";
            };
            readonly invoice_retentions: {
                readonly type: "object";
                readonly description: "Si \"invoicing\" es \"create\", agrega retenciones en la factura";
                readonly properties: {
                    readonly reteiva: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por IVA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly reteica: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por ICA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly retefte: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por el impuesto de renta que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                };
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly description: "Dirección de envío de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente";
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Lista de productos asociados al pago. Requerido si estas creando un pago con productos existentes en tu cuenta de Treli.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "id del producto. Lo puedes obtener consultando el endpoint *planes*";
                            readonly examples: readonly ["2026"];
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del producto";
                            readonly examples: readonly ["1"];
                        };
                        readonly unit_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio unitario del producto";
                            readonly examples: readonly ["150000"];
                        };
                    };
                };
            };
            readonly amount: {
                readonly type: "integer";
                readonly description: "Ingresa el valor total a pagar. Solo es necesario y válido cuando estas creando un pago sin productos.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Ingresa la descripción del pago. Solo y válido cuando estas creando un pago sin productos.";
            };
            readonly payment: {
                readonly type: "object";
                readonly description: "Información del método de pago";
                readonly properties: {
                    readonly cardNumber: {
                        readonly type: "string";
                        readonly description: "Número de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["4575623182290326"];
                    };
                    readonly month: {
                        readonly type: "string";
                        readonly description: "Mes de vencimiento de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["12"];
                    };
                    readonly year: {
                        readonly type: "string";
                        readonly description: "Año de vencimiento de la tarjeta de crédito del cliente. Debe tener dos dígitos. Por ejemplo, una tarjeta que vence en el año *2025*, el año de vencimiento debe ser enviado como *25*";
                        readonly examples: readonly ["25"];
                    };
                    readonly cardCvc: {
                        readonly type: "string";
                        readonly description: "Código de seguridad de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["123"];
                    };
                    readonly cardtoken: {
                        readonly type: "integer";
                        readonly description: "ID del token de la tarjeta de crédito almacenado en Treli. Puedes listar los tokens con el endpoint [listar tokens](https://treli.readme.io/reference/get_cards-get-tokens) y enviar la posición del token que te retorna el json.";
                        readonly examples: readonly [1];
                    };
                    readonly gateway: {
                        readonly type: "string";
                        readonly description: "ID de la pasarela de pago. Puedes consultar los IDs de las pasarelas de pago [aquí](https://treli.readme.io/reference/pasarelas-de-pago). Es necesario enviar la pasarela de pago si estas creando un pago con un token de tarjeta de crédito o si tienes múltiples pasarelas de pago activas y quieres cobrar con una especifica.";
                        readonly examples: readonly ["wompidirect"];
                    };
                    readonly payer_address: {
                        readonly type: "object";
                        readonly description: "Dirección de facturación del pagador. Usalo cuando la dirección de facturación del pago es distinta a la dirección del pagador.";
                        readonly properties: {
                            readonly first_name: {
                                readonly type: "string";
                                readonly description: "Nombre del pagador";
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly description: "Apellido del pagador";
                            };
                            readonly id_type: {
                                readonly type: "string";
                                readonly description: "Tipo de identificación del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia)";
                            };
                            readonly identification: {
                                readonly type: "string";
                                readonly description: "Número de identificación del pagador";
                            };
                            readonly address_1: {
                                readonly type: "string";
                                readonly description: "Dirección principal del pagador";
                            };
                            readonly address_2: {
                                readonly type: "string";
                                readonly description: "Apartamento, casa, unidad, etc del pagador";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "Ciudad del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#ciudades)";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "Departamento del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#departamentos)";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "País del pagador. El país debe ser enviado en código ISO alfa-2. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/general)";
                            };
                            readonly phone: {
                                readonly type: "integer";
                                readonly minimum: 1;
                                readonly description: "Teléfono de facturación del pagador. Debe contener 10 digitos.";
                            };
                        };
                    };
                };
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Código de la moneda en tres letras (ISO 4217). Debes tener la moneda habilitada en tu cuenta de Treli. Este campo es opcional, si envías este campo vacío, se utiliza la moneda base configurada en tu cuenta de Treli.";
                readonly examples: readonly ["COP"];
            };
            readonly coupon_code: {
                readonly type: "string";
                readonly description: "Cupón de descuento para el pago. Debes tener el cupón creado en tu cuenta de Treli.";
            };
            readonly invoice_observations: {
                readonly type: "string";
                readonly description: "Comentarios u observaciones de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable.";
            };
            readonly credit_balance: {
                readonly type: "integer";
                readonly description: "Ingresa un saldo a favor que se debe aplicar a la solicitud de pago.";
            };
            readonly meta_data: {
                readonly type: "array";
                readonly description: "Lista de meta data asociada al pago";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly description: "Key de la meta data";
                            readonly examples: readonly ["user_id"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Valor de la meta data";
                            readonly examples: readonly ["36"];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPaymentsUpdate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["status"];
        readonly properties: {
            readonly payment_id: {
                readonly type: "integer";
                readonly description: "Id del pago que quieres actualizar.";
            };
            readonly invoice_number: {
                readonly type: "string";
                readonly description: "Número de la factura asociada al pago que quieres actualizar. No aplica si ya estas utilizando \"payment_id\".";
            };
            readonly invoice_due_date: {
                readonly type: "string";
                readonly description: "Fecha de vencimiento de la factura asociada a la solicitud de pago. Formato yyyy-MM-dd.";
            };
            readonly credit_balance: {
                readonly type: "integer";
                readonly description: "Ingresa un saldo a favor que se debe aplicar a la solicitud de pago.";
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Lista de productos para actualizar en el pago. Si el id del producto ya existe en el pago, se actualiza la cantidad y el precio unitario. Si el id del producto no existe en el pago, se agrega el producto al pago.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "id del producto. Debe estar previamente creado en tu cuenta de Treli.";
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del producto";
                        };
                        readonly unit_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio unitario del producto";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPaymentsUpdateStatus: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["status"];
        readonly properties: {
            readonly payment_id: {
                readonly type: "integer";
                readonly description: "Id del pago sobre el cual quieres cambiar el estado.";
            };
            readonly invoice_number: {
                readonly type: "integer";
                readonly description: "Número de la factura asociada al pago sobre el cual quieres cambiar el estado. No aplica si ya estas utilizando \"payment_id\".";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "Para aprobar un pago - \"approved\". Para anular un pago - \"voided\"";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPlansCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "product_type", "subs_plans"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Nombre del plan";
                readonly examples: readonly ["Plan prueba"];
            };
            readonly description: {
                readonly type: "string";
                readonly description: "Descripción del plan";
                readonly examples: readonly ["Descripción del plan de prueba"];
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "SKU/ID del plan";
                readonly examples: readonly [12345];
            };
            readonly trackqty: {
                readonly type: "boolean";
                readonly description: "Decide si quieres activar la gestión y seguimiento de inventario para este plan";
            };
            readonly inventory: {
                readonly type: "integer";
                readonly description: "Número de únidades disponibles para este plan. Solo tiene efecto si activaste la gestion gestión y seguimiento de inventario";
            };
            readonly stockstatus: {
                readonly type: "string";
                readonly description: "Si no la gestión y seguimiento, puedes definir si este plan esta disponible o agotado. \"instock\" para disponible, \"outofstock\" para agotado";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "URL de la imagen para este plan. Posibles extensiones jpg, jpeg, gif y png";
                readonly examples: readonly ["https://treli.co/wp-content/uploads/2022/10/demo_suscripcion_3-1-16-1.jpg"];
            };
            readonly productstatus: {
                readonly type: "string";
                readonly description: "Define el estado del plan. \"active\", \"draft\" o \"private\"";
                readonly examples: readonly ["active"];
            };
            readonly product_type: {
                readonly type: "string";
                readonly description: "Define el tipo de plan. \"subsproduct, para un producto recurrente\", \"membership, para un membresía\" o \"service, para un servicio recurrente\"";
                readonly examples: readonly ["subsproduct"];
            };
            readonly subs_plans: {
                readonly type: "array";
                readonly description: "Lista de planes de suscripción del plan";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["interval", "period", "subsprice"];
                    readonly properties: {
                        readonly interval: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Intervalo de frecuencía de renovación. **obligatorio**";
                            readonly examples: readonly [1];
                        };
                        readonly period: {
                            readonly type: "string";
                            readonly description: "Periodo de frecuencía de renovación. Debe ser \"day\", \"week\", \"month\", \"year\"";
                            readonly examples: readonly ["month"];
                        };
                        readonly subsprice: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio del plan";
                            readonly examples: readonly [50000];
                        };
                        readonly length: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Duracion de la suscripción. No es necesario enviar en la petición si no aplica.";
                            readonly examples: readonly [5];
                        };
                        readonly commitment_periods: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Duracion de la suscripción. No es necesario enviar en la petición si no aplica.";
                        };
                        readonly has_signup_fee: {
                            readonly type: "boolean";
                            readonly description: "Decide si el plan tiene cuota de inscripción. No es necesario enviar en la petición si no aplica.";
                        };
                        readonly signup_fee: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio de la cuota de inscripción. No es necesario enviar en la petición si no aplica.";
                        };
                        readonly hast_trial: {
                            readonly type: "boolean";
                            readonly description: "Decide si el plan tiene prueba gratuita. No es necesario enviar en la petición si no aplica.";
                        };
                        readonly trial_period: {
                            readonly type: "string";
                            readonly description: "Periodo de la prueba gratuita. Debe ser \"day\", \"week\", \"month\", \"year\". No es necesario enviar en la petición si no aplica.";
                        };
                        readonly trial_length: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Duración de la prueba gratuita. No es necesario enviar en la petición si no aplica.";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPlansUpdate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["id", "subscription_plan_id", "subs_plans"];
        readonly properties: {
            readonly id: {
                readonly type: "integer";
                readonly description: "Id del plan. Lo puedes obtener conulstando el endpoint \"Listar planes\"";
                readonly examples: readonly [2026];
            };
            readonly subscription_plan_id: {
                readonly type: "integer";
                readonly description: "Id del plan de suscripción. Si tus planes solo tienen un plan de suscripción, puede enviar este valor como \"0\". Si tus planes tienen varios planes de suscripción, puedes consultar el endpoint \"Listar planes\" para obtener el id del plan de suscripción que quieres actualizar";
            };
            readonly subs_plan: {
                readonly type: "object";
                readonly description: "Lista de planes de suscripción del plan";
                readonly required: readonly ["interval", "period", "subsprice"];
                readonly properties: {
                    readonly interval: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Intervalo de frecuencía de renovación. **obligatorio**";
                        readonly examples: readonly [1];
                    };
                    readonly period: {
                        readonly type: "string";
                        readonly description: "Periodo de frecuencía de renovación. Debe ser \"day\", \"week\", \"month\", \"year\"";
                        readonly examples: readonly ["month"];
                    };
                    readonly subsprice: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Precio del plan";
                        readonly examples: readonly [50000];
                    };
                    readonly length: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Duracion de la suscripción. No es necesario enviar en la petición si no aplica.";
                    };
                    readonly commitment_periods: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Duracion de la suscripción. No es necesario enviar en la petición si no aplica.";
                    };
                    readonly has_signup_fee: {
                        readonly type: "boolean";
                        readonly description: "Decide si el plan tiene cuota de inscripción. No es necesario enviar en la petición si no aplica.";
                    };
                    readonly signup_fee: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Precio de la cuota de inscripción. No es necesario enviar en la petición si no aplica.";
                    };
                    readonly hast_trial: {
                        readonly type: "boolean";
                        readonly description: "Decide si el plan tiene prueba gratuita. No es necesario enviar en la petición si no aplica.";
                    };
                    readonly trial_period: {
                        readonly type: "string";
                        readonly description: "Periodo de la prueba gratuita. Debe ser \"day\", \"week\", \"month\", \"year\". No es necesario enviar en la petición si no aplica.";
                    };
                    readonly trial_length: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Duración de la prueba gratuita. No es necesario enviar en la petición si no aplica.";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPortalSessionsCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["customer_email"];
        readonly properties: {
            readonly customer_email: {
                readonly type: "string";
                readonly description: "Correo electrónico de un cliente existente.";
                readonly examples: readonly ["correo@dominio.com"];
            };
            readonly return_url: {
                readonly type: "string";
                readonly description: "URL para redirigir a los clientes a cuando hacen clic en el enlace del portal para cerrar su sesión.";
                readonly examples: readonly ["https://example.com"];
            };
            readonly forward: {
                readonly type: "string";
                readonly description: "Enlace directo que te permite redirigir a una página específica del portal cuando el cliente es autenticado. Conoce más [aquí](https://treli.readme.io/reference/configura-el-portal-de-clientes-con-la-api#opcional-enlaces-directos) sobre los valores permitidos.";
                readonly enum: readonly ["customer_update_address", "customer_invoices", "subscription_update_payment"];
                readonly examples: readonly ["customer_invoices"];
            };
            readonly subscription_id: {
                readonly type: "integer";
                readonly description: "Id de suscripción para actualización de método de pago. Únicamente necesario si estás creando una sesión de portal para que tu cliente pueda actualizar el método de pago de una suscripción, utilizando \"forward\"=\"subscription_update_payment\".";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Estado de la respuesta.";
                    readonly examples: readonly ["success"];
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly description: "ID del cliente.";
                    readonly examples: readonly ["cus_wpydsdf3s3f8s"];
                };
                readonly created: {
                    readonly type: "integer";
                    readonly description: "Marca de tiempo de creación.";
                    readonly examples: readonly [1719858585];
                };
                readonly valid_until: {
                    readonly type: "integer";
                    readonly description: "Marca de tiempo hasta cuando es válida la sesión.";
                    readonly examples: readonly [1719860385];
                };
                readonly return_url: {
                    readonly type: "string";
                    readonly description: "URL para redirigir a los clientes al cerrar su sesión.";
                    readonly examples: readonly ["https://treli.co"];
                };
                readonly forward: {
                    readonly type: "string";
                    readonly description: "Enlace directo configurado.";
                    readonly examples: readonly ["customer_invoices"];
                };
                readonly auth_url: {
                    readonly type: "string";
                    readonly description: "URL de autenticación.";
                    readonly examples: readonly ["https://portal.treli.co/p/authenticate?forward=customer_invoices&token={{TOKEN}}&customer_id=cus_wpydsdf3s3f8s"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubscriptionsActions: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["subscription_id", "action"];
        readonly properties: {
            readonly subscription_id: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly description: "Id de la suscripción sobre la que quieres hacer una acción.";
                readonly examples: readonly [12345];
            };
            readonly action: {
                readonly type: "string";
                readonly description: "Para pausar una suscripción - pause. Para activar una suscripción - activate. Para cancelar una suscripción - cancel";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubscriptionsCreate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["email", "billing_address", "products", "payment"];
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Correo electrónico de tu cliente";
                readonly examples: readonly ["test@treli.co"];
            };
            readonly billing_address: {
                readonly type: "object";
                readonly description: "Dirección de facturación de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                        readonly examples: readonly ["Nombre"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                        readonly examples: readonly ["Apellido"];
                    };
                    readonly cedula: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Cédula de facturación del cliente";
                        readonly examples: readonly [123456789];
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                        readonly examples: readonly ["Cra 1 1 1"];
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#ciudades)";
                        readonly examples: readonly ["Barranquilla"];
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#departamentos)";
                        readonly examples: readonly ["ATL"];
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                        readonly examples: readonly [80001];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/general)";
                        readonly examples: readonly ["CO"];
                    };
                    readonly phone: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Teléfono de facturación del cliente. Debe contener 10 digitos.";
                        readonly examples: readonly [3991111111];
                    };
                    readonly id_type: {
                        readonly type: "string";
                        readonly description: "Tipo de identificación del cliente. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia)";
                    };
                    readonly company: {
                        readonly type: "string";
                        readonly description: "Compañia de facturación del cliente";
                    };
                };
            };
            readonly block_billing_change: {
                readonly type: "boolean";
                readonly description: "Opcional, el valor predeterminado es false. Decide si el pagador puede modificar la información de facturación en la página de pago de Treli. Si es true, el pagador no podra modificar su información de facturación en la página de pago.";
            };
            readonly requires_shipping: {
                readonly type: "boolean";
                readonly description: "Opcional, el valor predeterminado es false. Decide si la suscripción requiere envío o no";
            };
            readonly manual_payment: {
                readonly type: "boolean";
                readonly description: "Decide si el pago de la suscripción es manual no. Si el pago es manual (true), Este endpoint te retorna un link de pago y Treli envia un correo electrónico a tu cliente para que complete el pago manualmente.";
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly description: "Dirección de envío de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente";
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Plan que se cobrara en la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "id del plan. Lo puedes obtener consultando el endpoint *[plans](https://treli.readme.io/reference/get_plans)*";
                            readonly examples: readonly ["2026"];
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del producto.";
                            readonly examples: readonly ["1"];
                        };
                        readonly subscription_period_interval: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Intervalo de la suscripción. Lo puedes obtener consultando el endpoint *[plans](https://treli.readme.io/reference/get_plans)* o puedes enviar cualquier intervalo";
                            readonly examples: readonly ["1"];
                        };
                        readonly subscription_period: {
                            readonly type: "string";
                            readonly minimum: 1;
                            readonly description: "Periodo de la suscripción. Lo puedes obtener consultando el endpoint *[plans](https://treli.readme.io/reference/get_plans)* o puedes enviar cualquier periodo";
                            readonly examples: readonly ["month"];
                        };
                        readonly subscription_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio de la suscripción. Lo puedes obtener consultando el endpoint *[plans](https://treli.readme.io/reference/get_plans)* o puedes enviar cualquier precio";
                            readonly examples: readonly ["150000"];
                        };
                        readonly subscription_length: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Número total de pagos de esta suscripción. Lo puedes obtener consultando el endpoint *[plans](https://treli.readme.io/reference/get_plans)* o puedes enviar cualquier duración. Dejar vacío para duración indefinida.";
                        };
                    };
                };
            };
            readonly one_time_products: {
                readonly type: "array";
                readonly description: "Productos no recurrentes que quieres cobrar en el mismo pago inicial asociado a la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Nombre del producto";
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del producto.";
                        };
                        readonly unit_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio unitario del producto";
                        };
                        readonly sku: {
                            readonly type: "string";
                            readonly description: "SKU o ID interno del producto";
                        };
                    };
                };
            };
            readonly addons: {
                readonly type: "array";
                readonly description: "Addons asociados a la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Nombre del addon";
                            readonly examples: readonly ["Nombre addon"];
                        };
                        readonly unit_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio unitario del addon";
                            readonly examples: readonly [10000];
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del addon";
                            readonly examples: readonly [1];
                        };
                    };
                };
            };
            readonly payment: {
                readonly type: "object";
                readonly description: "Información del pago de la suscripción";
                readonly properties: {
                    readonly cardNumber: {
                        readonly type: "string";
                        readonly description: "Número de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["4575623182290326"];
                    };
                    readonly month: {
                        readonly type: "string";
                        readonly description: "Mes de vencimiento de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["12"];
                    };
                    readonly year: {
                        readonly type: "string";
                        readonly description: "Año de vencimiento de la tarjeta de crédito del cliente. Debe tener dos dígitos. Por ejemplo, una tarjeta que vence en el año *2025*, el año de vencimiento debe ser enviado como *25*";
                        readonly examples: readonly ["25"];
                    };
                    readonly cardCvc: {
                        readonly type: "string";
                        readonly description: "Código de seguridad de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["123"];
                    };
                    readonly cardtoken: {
                        readonly type: "integer";
                        readonly description: "ID del token de la tarjeta de crédito almacenado en Treli. Solo si el pago se realiza con un token de tarjeta de crédito. Puedes listar los tokens con el endpoint [listar tokens](https://treli.readme.io/reference/get_cards-get-tokens) y enviar la posición del token que te retorna el json.";
                    };
                    readonly phone: {
                        readonly type: "integer";
                        readonly description: "Numero de teléfono. Solo para pagos por medio de Wompi Nequi";
                        readonly examples: readonly [3991111111];
                    };
                    readonly gateway: {
                        readonly type: "string";
                        readonly description: "ID de la pasarela de pago. Puedes consultar las pasarelas de pago habilitadas en tu cuenta aqui [aquí](https://treli.readme.io/reference/get_gateways-list). Es necesario enviar la pasarela de pago si estas creando una suscripción con un token o si tienes múltiples pasarelas de pago activas y quieres cobrar con una especifica.";
                        readonly examples: readonly ["wompidirect"];
                    };
                    readonly payment_method: {
                        readonly type: "string";
                        readonly description: "Método de pago. Valor por defecto \"card\". Puedes consultar los método de pago habilitados en tu cuenta de Treli [aquí](https://treli.readme.io/reference/get_gateways-list).";
                        readonly examples: readonly ["card"];
                    };
                    readonly payer_address: {
                        readonly type: "object";
                        readonly description: "Dirección de facturación del pagador. Usalo cuando la dirección de facturación de la suscripción es distinta a la dirección del pagador.";
                        readonly properties: {
                            readonly first_name: {
                                readonly type: "string";
                                readonly description: "Nombre del pagador";
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly description: "Apellido del pagador";
                            };
                            readonly id_type: {
                                readonly type: "string";
                                readonly description: "Tipo de identificación del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia)";
                            };
                            readonly identification: {
                                readonly type: "string";
                                readonly description: "Número de identificación del pagador";
                            };
                            readonly address_1: {
                                readonly type: "string";
                                readonly description: "Dirección principal del pagador";
                            };
                            readonly address_2: {
                                readonly type: "string";
                                readonly description: "Apartamento, casa, unidad, etc del pagador";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "Ciudad del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#ciudades)";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "Departamento del pagador. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/colombia#departamentos)";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "País del pagador. El país debe ser enviado en código ISO alfa-2. Obtén los valores aceptados [aquí](https://treli.readme.io/docs/general)";
                            };
                            readonly phone: {
                                readonly type: "integer";
                                readonly minimum: 1;
                                readonly description: "Teléfono de facturación del pagador. Debe contener 10 digitos.";
                            };
                        };
                    };
                };
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Código de la moneda en tres letras (ISO 4217). Debes tener la moneda habilitada en tu cuenta de Treli. Este campo es opcional, si envías este campo vacío, se utiliza la moneda base configurada en tu cuenta de Treli.";
                readonly examples: readonly ["COP"];
            };
            readonly coupon_code: {
                readonly type: "string";
                readonly description: "Cupón de descuento para la suscripción. Debes tener el cupón creado en tu cuenta de Treli.";
            };
            readonly coupon_duration: {
                readonly type: "integer";
                readonly description: "Duración del cupon en número de pagos. Por ejemplo, si \"coupon_duration\" es \"3\", el cupón sera eliminado de la suscripción despues del tercer pago. Solo aplica si el cupón que estas utilizando para la suscripción es de tipo \"Descuento en porcentaje % recurrente\" o \"Descuento fijo recurrente\".";
            };
            readonly payment_invoicing: {
                readonly type: "string";
                readonly description: "Decide si quieres generar una factura para el pago inicial de la suscripción. \"create\" para generar una factura inmediatamente. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable.";
            };
            readonly auorretencion: {
                readonly type: "string";
                readonly description: "Autorretención para la generación de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable. Debes envíar el ID de la autorretención de tu software contable.";
            };
            readonly invoice_observations: {
                readonly type: "string";
                readonly description: "Comentarios u observaciones de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable.";
            };
            readonly invoice_retentions: {
                readonly type: "object";
                readonly description: "Retenciones para la generación de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable y tienes las retenciones configuradas.";
                readonly properties: {
                    readonly reteiva: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por IVA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly reteica: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por ICA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly retefte: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por el impuesto de renta que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                };
            };
            readonly meta_data: {
                readonly type: "array";
                readonly description: "Lista de meta data asociada a la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly description: "Key de la meta data";
                            readonly examples: readonly ["user_id"];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Valor de la meta data";
                            readonly examples: readonly ["36"];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubscriptionsReportUsage: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["subscription_id", "usage_report"];
        readonly properties: {
            readonly subscription_id: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly description: "Id de la suscripción a la cual le quieres reportar el uso.";
                readonly examples: readonly [12345];
            };
            readonly process_renewal: {
                readonly type: "boolean";
                readonly description: "Decide si quieres reportar uso únicamente o reportar uso y procesar la renovación. False para únicamente reportar uso. True para reportar uso y procesar la renovación. Valor por defecto, false.";
                readonly examples: readonly [true];
            };
            readonly usage_report: {
                readonly type: "array";
                readonly description: "Lista de items dentro de la suscripción a los cuales le estas reportando el uso";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly item_id: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "id del item. Lo puedes obtener consultando el endpoint *ver suscripción*. Treli tambien te retorna el id de los items dentro de la suscripción si tienes configurado el webhook \"Usage report\"";
                            readonly examples: readonly [2026];
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del uso";
                            readonly examples: readonly [112];
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubscriptionsUpdate: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["subscription_id"];
        readonly properties: {
            readonly subscription_id: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly description: "Id de la suscripción que quieres actualizar";
                readonly examples: readonly [1234];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Correo electrónico de tu cliente";
                readonly examples: readonly ["test@treli.co"];
            };
            readonly billing_address: {
                readonly type: "object";
                readonly description: "Dirección de facturación de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                        readonly examples: readonly ["Nombre"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                        readonly examples: readonly ["Apellido"];
                    };
                    readonly cedula: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Cédula de facturación del cliente";
                        readonly examples: readonly [123456789];
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                        readonly examples: readonly ["Cra 1 1 1"];
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente";
                        readonly examples: readonly ["Barranquilla"];
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente";
                        readonly examples: readonly ["ATL"];
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                        readonly examples: readonly [80001];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";
                        readonly examples: readonly ["CO"];
                    };
                    readonly phone: {
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly description: "Teléfono de facturación del cliente. Debe contener 10 digitos.";
                        readonly examples: readonly [3111111111];
                    };
                };
            };
            readonly requires_shipping: {
                readonly type: "boolean";
                readonly description: "Decide si la suscripción requiere envío o no";
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly description: "Dirección de envío de tu cliente";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "Nombre de facturación del cliente";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Apellido de facturación del cliente";
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Dirección principal de facturación del cliente";
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Apartamento, casa, unidad, etc de facturación del cliente";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "Ciudad de facturación del cliente";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Departamento de facturación del cliente";
                    };
                    readonly postcode: {
                        readonly type: "string";
                        readonly description: "Código postal de facturación del cliente";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "País de facturación del cliente. El país debe ser enviado en código ISO alfa-2. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2";
                    };
                };
            };
            readonly products: {
                readonly type: "array";
                readonly description: "Lista de productos de la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "id del producto. Lo puedes obtener consultando el endpoint *productos*";
                            readonly examples: readonly ["2626"];
                        };
                        readonly quantity: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Cantidad del producto.";
                            readonly examples: readonly ["1"];
                        };
                        readonly subscription_period_interval: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Intervalo de la suscripción. Lo puedes obtener consultando el endpoint *productos* en la información de los planes de suscripción";
                            readonly examples: readonly ["1"];
                        };
                        readonly subscription_period: {
                            readonly type: "string";
                            readonly minimum: 1;
                            readonly description: "Periodo de la suscripción. Lo puedes obtener consultando el endpoint *productos* en la información de los planes de suscripción";
                            readonly examples: readonly ["month"];
                        };
                        readonly subscription_price: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Precio de la suscripción. Lo puedes obtener consultando el endpoint *productos* en la información de los planes de suscripción";
                            readonly examples: readonly ["150000"];
                        };
                    };
                };
            };
            readonly payment: {
                readonly type: "object";
                readonly description: "Información del pago de la suscripción";
                readonly properties: {
                    readonly cardNumber: {
                        readonly type: "string";
                        readonly description: "Número de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["4242424242424242"];
                    };
                    readonly month: {
                        readonly type: "string";
                        readonly description: "Mes de vencimiento de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["12"];
                    };
                    readonly year: {
                        readonly type: "string";
                        readonly description: "Año de vencimiento de la tarjeta de crédito del cliente. Debe tener dos dígitos. Por ejemplo, una tarjeta que vence en el año *2025*, el año de vencimiento debe ser enviado como *25*";
                        readonly examples: readonly ["25"];
                    };
                    readonly cardCvc: {
                        readonly type: "string";
                        readonly description: "Código de seguridad de la tarjeta de crédito del cliente";
                        readonly examples: readonly ["123"];
                    };
                    readonly cardtoken: {
                        readonly type: "integer";
                        readonly description: "ID del token de la tarjeta de crédito almacenado en Treli. Solo si el pago se realiza con un token de tarjeta de crédito. Puedes listar los tokens con el endpoint [listar tokens](https://treli.readme.io/reference/get_cards-get-tokens) y enviar la posición del token que te retorna el json.";
                    };
                    readonly gateway: {
                        readonly type: "string";
                        readonly description: "ID de la pasarela de pago. Puedes consultar las pasarelas de pago habilitadas en tu cuenta aqui [aquí](https://treli.readme.io/reference/get_gateways-list). Es necesario enviar la pasarela de pago si estas creando una suscripción con un token o si tienes múltiples pasarelas de pago activas y quieres cobrar con una especifica.";
                        readonly examples: readonly ["wompidirect"];
                    };
                };
            };
            readonly next_payment: {
                readonly type: "string";
                readonly description: "Fecha de próximo pago de la suscripción. Formato Y-m-d H:i:s";
                readonly examples: readonly ["2023-11-26 14:33:00"];
            };
            readonly coupon_code: {
                readonly type: "string";
                readonly description: "Cupón de descuento para la suscripción. Debes tener el cupón creado en tu cuenta de Treli y debe ser de tipo \"Descuento en porcentaje % recurrente\" o \"Descuento fijo recurrente\".";
            };
            readonly coupon_duration: {
                readonly type: "integer";
                readonly description: "Duración del cupon en número de pagos. Por ejemplo, si \"coupon_duration\" es \"3\", el cupón sera eliminado de la suscripción despues del tercer pago\".";
            };
            readonly invoice_observations: {
                readonly type: "string";
                readonly description: "Comentarios u observaciones de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable.";
            };
            readonly invoice_retentions: {
                readonly type: "object";
                readonly description: "Retenciones para la generación de la factura. Solo aplica si tienes habilitada la opción de generar facturas en tu proveedor contable y tienes las retenciones configuradas.";
                readonly properties: {
                    readonly reteiva: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por IVA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly reteica: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por ICA que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                    readonly retefte: {
                        readonly type: "string";
                        readonly description: "ID de la retención en la fuente por el impuesto de renta que quieres agregar en la factura. Debes tener configuradas las rentenciones en tu cuenta de Treli.";
                    };
                };
            };
            readonly meta_data: {
                readonly type: "array";
                readonly description: "Lista de meta data asociada a la suscripción";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly key: {
                            readonly type: "string";
                            readonly description: "Key de la meta data";
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly description: "Valor de la meta data";
                        };
                    };
                };
            };
            readonly exclude_from_bulk: {
                readonly type: "boolean";
                readonly description: "Decide si la suscripción debe ser excluida de las operaciones masivas. True para excluir, false para volver a incluir.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostSubscriptionsView: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["subscription_id"];
        readonly properties: {
            readonly subscription_id: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly description: "Id de la suscripción que quieres ver";
                readonly examples: readonly [12345];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetCardsGetTokens, GetGatewaysList, GetPaymentsList, GetPaymentsTemplates, GetPlans, GetPlansGet, GetSubscriptions, PostCardsAddToken, PostCardsDeleteToken, PostPaymentsCreate, PostPaymentsUpdate, PostPaymentsUpdateStatus, PostPlansCreate, PostPlansUpdate, PostPortalSessionsCreate, PostSubscriptionsActions, PostSubscriptionsCreate, PostSubscriptionsReportUsage, PostSubscriptionsUpdate, PostSubscriptionsView };
