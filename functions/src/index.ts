import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const helloWorld = functions.https.onRequest((req, res) => {
  res.send('Hello from Firebase Functions');
});

export const onOrderStatusUpdate = functions.firestore
  .document('orders/{orderId}')
  .onUpdate((change) => {
    const before = change.before.data();
    const after = change.after.data();
    if (before.status !== after.status) {
      console.log(`Order ${change.after.id} status changed to ${after.status}`);
    }
  });
