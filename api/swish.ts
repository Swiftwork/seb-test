import { promises as fs } from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as https from 'https';

export const SwishRoutes = express.Router();

const API = 'mss.cpc.getswish.net';

SwishRoutes.post('', async (req, res) => {
  console.log('init payment');

  const key = await fs.readFile(
    path.resolve('tls', 'Swish_Merchant_TestCertificate_1234679304.key')
  );
  const cert = await fs.readFile(
    path.resolve('tls', 'Swish_Merchant_TestCertificate_1234679304.pem')
  );
  const ca = await fs.readFile(path.resolve('tls', 'Swish_TLS_RootCA.pem'));

  const body = JSON.stringify({
    payeePaymentReference: '0123456789',
    callbackUrl: 'https://webhook.site/7e4d4ab9-44c5-49c9-aa19-50441e4defa3',
    payerAlias: req.body.tel,
    payeeAlias: '1231181189',
    amount: req.body.amount,
    currency: 'SEK',
    message: 'Donation',
  });

  const swishReq = https.request(
    {
      hostname: API,
      port: 443,
      path:
        '/swish-cpcapi/api/v2/paymentrequests/5469d466-abcd-44b5-91f5-6f4e3c1f2df4',
      method: 'PUT',
      key,
      cert,
      ca,
      maxVersion: 'TLSv1.2',
      passphrase: 'swish',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': body.length,
      },
    },
    (swishRes) => {
      if (swishRes.statusCode == 201) {
        console.log(swishRes.headers.location);
        setTimeout(() => {
          res.status(swishRes.statusCode).end();
        }, 2000);
      } else {
        res.status(swishRes.statusCode).end();
      }

      swishRes.on('data', (d) => {
        process.stdout.write(d);
      });
    }
  );

  swishReq.on('error', (error) => {
    console.log(error);
    res.status(500).end();
  });

  swishReq.write(body);
  swishReq.end();
});
