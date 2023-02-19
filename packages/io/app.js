const admin = require("firebase-admin");
const express = require("express");
const serviceAccount = require("./serviceacc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
// cors:
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());

app.get("/focus", (req, res) => {
  db.doc("users/jsLs7nJUAZS1re7Gt6LQLWxcM962")
    .get()
    .then((doc) => res.json(doc.data()));
});

app.listen(5001, () => console.log("listening on 5001"));

app.get("/strike/:uid", async (req, res) => {
  const uid = req.params.uid;
  // see what strike they're on
  const doc = await db.doc(`users/${uid}`).get();

  console.log(doc.data());
  const strikes = Math.min(doc.data().strikes, 2) ?? 0;

  const attr = ["", "first_strike", "second_strike", "third_strike"][strikes + 1];

  const contacts = await db.doc("contacts/jsLs7nJUAZS1re7Gt6LQLWxcM962").get();

  console.log(contacts.data());
  const ids = contacts.data()[attr];

  const mapped = ids.map((id) => contacts.data().contacts.find((c) => c.recordID === id));
  const texted = mapped[(mapped.length * Math.random()) | 0];

  const phoneNumber = texted.phoneNumbers?.[0].number;

  const accountSid = "ACa10264a81b93eddd00912fd56e7370f7";
  const authToken = "58d6b94350d12e1888aae09fea69d89e";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      to: "+16055926144",
      body: "ayo. samyok is not doing his work!! " + (req.query.msg ?? ""),
      from: "+19032317886",
    })
    .then((message) => {
      console.log(message.sid);
    });

  await db.doc(`users/${uid}`).set(
    {
      strikes: strikes + 1,
    },
    { merge: true }
  );

  res.json({ texted, phoneNumber });
});

app.get("/reset/:uid", async (req, res) => {
  const uid = req.params.uid;

  await db.doc(`users/${uid}`).set(
    {
      strikes: 0,
    },
    { merge: true }
  );

  res.json({ success: true });
});
