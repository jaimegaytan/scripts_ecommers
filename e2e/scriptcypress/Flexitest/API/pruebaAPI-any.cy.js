describe('Prueba de integración con la API', () => {
  it('Envío de datos de reportes', () => {
      // Realizar la solicitud POST para obtener el token OAuth
      cy.request({
          method: 'POST',
          url: 'https://api.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/authorizationserver/oauth/token', // URL de la API
          form: true, // Esto indica que estamos enviando datos en formato 'application/x-www-form-urlencoded'
          form: true, // Esto indica que estamos enviando datos en formato 'application/x-www-form-urlencoded'
          body: {
              grant_type: 'client_credentials',  // Tipo de grant (cliente)
              client_id: 'ptecatest',            // ID del cliente
              client_secret: 'test123'           // Secreto del cliente
          }
      }).then((response) => {
          // Verificar que la respuesta sea exitosa
          expect(response.status).to.eq(200);
          // Mostrar el token obtenido
          cy.log('Access Token:', response.body.access_token);

          // Ahora puedes usar el token para hacer solicitudes protegidas
          const token = response.body.access_token;

          // Hacer otra solicitud a la API utilizando el token de acceso
          cy.request({
              method: 'POST',
              url: 'https://api.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/flexicommercewebservices/v2/flexi/anymarket/createOrder', // URL de la API para enviar el reporte
              headers: {
                  'Authorization': `Bearer ${token}`, // Usar el token de acceso
                  'Content-Type': 'application/json'   // Establecer el tipo de contenido como JSON
              },
              body: {
                "id": 183555362,
                "accountName": "Flexi tienda oficial",
                "marketPlaceId": "702-6204842-8347412",
                "marketPlaceNumber": "702-6204842-8347412",
                "marketPlace": "AMAZON_GLOBAL_API",
                "createdAt": "2024-09-26T11:57:05Z",
                "paymentDate": "2024-09-26T11:57:05Z",
                "transmissionStatus": "OK",
                "status": "PAID_WAITING_SHIP",
                "marketPlaceStatus": "Pago",
                "discount": 0.0,
                "freight": 0.0,
                "sellerFreight": 0.0,
                "interestValue": 0.0,
                "gross": 599.4,
                "total": 599.4,
                "shipping": {
                    "city": "Villa verdun",
                    "country": "MX",
                    "countryAcronymNormalized": "MX",
                    "countryNameNormalized": "MEXICO",
                    "address": "Tolosa 38 -",
                    "number": "0",
                    "street": "Tolosa 38",
                    "zipCode": "37296",
                    "receiverName": "susana avilez",
                    "promisedShippingTime": "2024-10-05T05:59:59Z",
                    "neighborhood": "Tolosa 38"
                },
                "anymarketAddress": {
                    "country": "MX",
                    "city": "Villa verdun",
                    "zipCode": "37296",
                    "address": "Tolosa 38 -",
                    "street": "Tolosa 38",
                    "number": "0",
                    "receiverName": "susana avilez",
                    "promisedShippingTime": "2024-10-05T05:59:59Z",
                    "neighborhood": "Tolosa 38"
                },
                "buyer": {
                    "name": "susana avilez",
                    "email": "b9h2fb3jc5m9lb2@marketplace.amazon.com.mx",
                    "documentType": "OTHER",
                    "phone": "5510689258"
                },
                "payments": [
                    {
                        "method": "CreditCard",
                        "status": "Pago",
                        "value": 599.4,
                        "marketplaceId": "A1AM78C64UM0Y8",
                        "paymentMethodNormalized": "CARTÃO DE CRÉDITO",
                        "paymentDetailNormalized": "CARTÃO DE CRÉDITO"
                    }
                ],
                "items": [
                    {
                        "product": {
                            "id": 258658635,
                            "title": "Mocasines Y Oxfords Flexi para Mujer Estilo 119509 Negro"
                        },
                        "sku": {
                            "id": 87964462,
                            "title": "Mocasines Y Oxfords Flexi para Mujer Estilo 119509 Negro",
                            "partnerId": "7500421244746",
                            "ean": "7500421244746"
                        },
                        "amount": 1,
                        "unit": 599.4,
                        "gross": 599.4,
                        "total": 599.4,
                        "discount": 0.0,
                        "shippings": [
                            {
                                "id": 415284742,
                                "shippingtype": "Standard",
                                "shippingCarrierNormalized": "UNKNOWN",
                                "shippingCarrierTypeNormalized": "UNKNOWN"
                            }
                        ],
                        "idInMarketPlace": "7500421244821",
                        "marketPlaceId": "110361864774561",
                        "orderItemId": 214379018,
                        "freeShipping": false,
                        "stocks": [
                            {
                                "stockLocalId": 40596,
                                "amount": 1.0,
                                "stockName": "Estoque Físico"
                            }
                        ],
                        "isCatalog": false,
                        "idInMarketplaceCatalogOrigin": " "
                    }
                ],
                "deliverStatus": "UNKNOWN",
                "idAccount": 4086,
                "fulfillment": false,
                "metadata": {
                    "system_origin": "Amazon Global Api"
                },
                "orderTypeName": "MFN"
            }
                  
              
          }).then((response) => {
              // Verificar que la respuesta sea exitosa
              const filePath = 'cypress/fixtures/resultado'
              expect(response.status).to.eq(200);
              cy.log(`Response Body: ${JSON.stringify(response.body, null, 2)}`); 
          });
      });
  });
});
