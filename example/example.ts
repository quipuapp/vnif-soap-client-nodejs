// this is an example of how to use the generated client
// to make a SOAP call to the Verifactu service
// not warranty that this code will work
// you will need to adapt it to your needs


import { createClientAsync } from '../src/generated/vnifv2/client'
import fs from 'fs'
  
import { ClientSSLSecurity } from '../src/index'
import { VNifV2EntvNifV2Ent } from '../src/generated/vnifv2/definitions/VNifV2EntvNifV2Ent'
  
  
  async function main() {
    // need a correct certificate and private key
    // on production it's only possible to use a valid certificate
    const CERT_PATH = './certificate.pem'
    const KEY_PATH = './private.key'
  
    // Client options for the SOAP call
    const options = {
      wsdl_options: {
        disableCache: true, // Optional SOAP client options
      },
    }
  
    const client = await createClientAsync(
      'https://www2.agenciatributaria.gob.es/static_files/common/internet/dep/aplicaciones/es/aeat/burt/jdit/ws/VNifV2.wsdl',
      options,
      'https://www1.agenciatributaria.gob.es/wlpl/BURT-JDIT/ws/VNifV2SOAP',
    )
  
    client.setSecurity(new ClientSSLSecurity(KEY_PATH, CERT_PATH))
  
    try {
      
      const parameters: VNifV2EntvNifV2Ent = {
        Contribuyente: [
          {
            Nif: 'B66086042',
            Nombre: 'Nombre'
          },
        ],
      }
  
      const result = await client.VNifV2Async(parameters)
  
      console.log('Result:', result)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      // save the request into a xml file
      const request = client.lastRequest
  
      fs.writeFileSync('./example/request.xml', request?.toString() || '')
  
      // save the response into a xml file
      const response = client.lastResponse
  
      fs.writeFileSync('./example/response.xml', response)
    }
  }
  
  main()
  