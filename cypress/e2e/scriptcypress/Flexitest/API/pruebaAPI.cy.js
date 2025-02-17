describe('Prueba de integración con la API', () => {
  it('Envío de datos de reportes', () => {
      // Realizar la solicitud POST para obtener el token OAuth
      cy.request({
          method: 'POST',
          url: 'https://api.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/authorizationserver/oauth/token', // URL de la API
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
              url: 'https://api.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/flexicommercewebservices/v2/flexi/producteca/startorder', // URL de la API para enviar el reporte
              headers: {
                  'Authorization': `Bearer ${token}`, // Usar el token de acceso
                  'Content-Type': 'application/json'   // Establecer el tipo de contenido como JSON
              },
              body: {
                  "Report": {
                      "SalesOrder": {
                          "Integrations": [
                              {
                                  "IntegrationId": "2000010118188688",
                                  "App": 2,
                                  "AlternateId": null
                              }
                          ],
                          "InvoiceIntegration": {
                              "IntegrationId": 152138851,
                              "App": 232,
                              "CreatedAt": "2024-12-10T21:12:66",
                              "DecreaseStock": true
                          },
                          "Channel": "2",
                          "Contact": {
                              "Name": "ESJE7718812",
                              "ContactPerson": "Monserrat Anahi Medina Cantu",
                              "Mail": "ESJE7718812-noreply@mercadolibre.com",
                              "PhoneNumber": "XXXXXXX",
                              "Location": {
                                  "StreetName": "Jimenez",
                                  "StreetNumber": "1245",
                                  "AddressNotes": "Referencia: Es la casa de en medio de la cuadra color verde con beige Entre: Arramberry y Rosales",
                                  "State": "Coahuila",
                                  "City": "Nava",
                                  "Neighborhood": "Centro",
                                  "ZipCode": "26170"
                              },
                              "Type": "Customer",
                              "Profile": {
                                  "App": 2,
                                  "IntegrationId": "258968498",
                                  "Nickname": null
                              },
                              "Id": 369090406,
                              "TaxId": "",
                              "BillingInfo": null,
                              "OriginalMail": "ESJE7718812-noreply@mercadolibre.com",
                              "PriceList": null,
                              "PriceListId": null,
                              "Notes": null
                          },
                          "Warehouse": "Default",
                          "WarehouseId": 14954,
                          "WarehouseIntegration": {
                              "App": null,
                              "Status": null,
                              "IntegrationId": null
                          },
                          "Mode": "Normal",
                          "IsME1": false,
                          "Amount": 599.25,
                          "ShippingCost": 0,
                          "FinancialCost": 0,
                          "PaidApproved": 599.25,
                          "PaymentStatus": "Approved",
                          "DeliveryStatus": "PickingPending",
                          "PaymentFulfillmentStatus": "Done",
                          "DeliveryFulfillmentStatus": "Pending",
                          "DeliveryMethod": "Ship",
                          "PaymentTerm": "Advance",
                          "Currency": "Local",
                          "CustomId": "44206662319",
                          "IsOpen": true,
                          "IsCanceled": false,
                          "CartId": "",
                          "HasAnyShipments": true,
                          "HasAnyPayments": true,
                          "Date": "2024-12-10T21:12:17",
                          "Id": 152138851,
                          "ProductecaAccount": "232662",
                          "ChannelName": "Mercadolibre",
                          "Lines": [
                              {
                                  "Price": 599.25,
                                  "Quantity": 1,
                                  "Description": "Tenis Flexi para Mujer Estilo 125601 Coral",
                                  "Code": "1390034124",
                                  "Sku": "7500421244821",
                                  "Mode": "Normal"
                              }
                          ],
                          "Payments": [
                              {
                                  "Payment": {
                                      "Date": "2024-12-10T03:49:26",
                                      "Amount": 599.25,
                                      "Status": "Approved",
                                      "Method": "Ticket",
                                      "TransactionFee": 89.89,
                                      "IntegrationId": "95857633492"
                                  }
                              }
                          ],
                          "Shipments": [
                              {
                                  "Shipment": {
                                      "TrackingNumber": "MEL44206662319FMXDF01",
                                      "TrackingUrl": "https://myaccount.mercadolibre.com.mx/purchases/2000010118188688/shipments/44206662319/detail",
                                      "Courier": "MercadoEnvios",
                                      "Cost": 100,
                                      "Mode": "Estándar a domicilio",
                                      "LabelUrl": "https://apps.producteca.com/couriers/couriers/salesOrders/152138851/labels?access_token=95f2900771c7bdc71a9f58505ca141664bfdb537&type=zpl2"
                                  }
                              }
                          ],
                          "Notes": null
                      }
                  }
              }
          }).then((response) => {
              // Verificar que la respuesta sea exitosa
              expect(response.status).to.eq(200);
              cy.log(`Response Body: ${JSON.stringify(response.body, null, 2)}`); 
          });
      });
  });
});
