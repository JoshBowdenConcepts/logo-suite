import bigQuery from "./images/bigquery.svg";
import couchDB from "./images/couchdb.svg";
import googleSheets from "./images/google-sheets.svg";
import jira from "./images/jira.svg";
import mongoDB from "./images/mongodb.svg";
import oracle from "./images/oracle.svg";
import postgreSQL from "./images/postgresql.svg";
import salesforce from "./images/salesforce.svg";
import snowflake from "./images/snowflake.svg";
import stripe from "./images/stripe.svg";
import twillo from "./images/twilio.svg";

export type Brand = {
  name: string;
  icon: string;
  heading?: string;
  description?: string[];
};

export const brands: Brand[] = [
  {
    name: "Big Query",
    icon: bigQuery,
	description: [
		'BigQuery is a data warehouse from Google',
		'Connecting Retool to BigQuery takes just a few minutes, and lets you build user interfaces quickly on top of your BigQuery data. For example, you can pull your analytics data for each user, and render it side by side with your app data from Postgres.',
		'Retool supports querying BigQuery via Standard and Legacy SQL.'
	]
  },
  {
    name: "CouchDB",
    icon: couchDB,
	description: ['Connecting Retool to CouchDB takes just a few minutes, and lets you quickly build internal tools like admin panels on top of your CouchDB data. Paste in a connection string, whitelist the Retool IP, and you’re ready to start building.',
'Working with CouchDB is easy in Retool: you can pull in comments for moderation into a Table component, mark them as approved with a Button, and write the new data back to your DB with .update. ']
  },
  {
    name: "Google Sheets",
    icon: googleSheets,
	description: [
		"Connecting Retool to Google Sheets takes just a few minutes, and lets you build user interfaces quickly on top of the data in your spreadsheets. For example, you can pull in data from your Google sheet, then run an API request for each row. Or, you could populate a blank template model in Google Sheets with data from your database. Here's a blog post about more use cases for our Google Sheets integration.",
		"Retool supports querying arbitrary Google Sheets, as well cloning individual sheets and appending rows to existing sheets. In the future, we'll also support writing back to individual cells."
	]
  },
  {
    name: "Jira",
    icon: jira,
	description: [
		"Atlassian's Jira is an issue tracking tool for agile development.",
		"Connecting Retool to Jira takes just a few minutes, and lets you push and pull monitoring data programmatically from Retool. Retool integrates directly with Jira's API so you can send tasks to Jira, visualize your projects or programmatically manage your users and workspaces. Build internal tools to extend the Jira product with reporting, task workflows, and more common examples.",
		"Retool supports both reading from and writing back to Jira. Get started with our quickstart docs. "

	]
  },
  {
    name: "MongoDB",
    icon: mongoDB,
	description: [
		'Retool makes it easy to build back office UIs like a listing approval system on top of your MongoDB data. ',
		'Connecting Retool to MongoDB takes just a few minutes, and lets you build internal tools quickly on top of your MongoDB data. For example, you could build a CMS tool to pull and push content to a MongoDB store that powers an e-commerce site. You can read content data from MongoDB to populate your product pages, and then write data back to it to insert and update orders.',
		'Retool gives you a simple and flexible GUI for Mongo find() operations where you can specify your query, projection, sort by, and limit, as well as fields for other MongoDB operations like count() and insertOne().'
	]
  },
  {
    name: "Oracle",
    icon: oracle,
	description: [
		'Connecting Retool to Oracle takes just a few minutes, and lets you quickly build internal tools like admin panels on top of your OracleDB data. Paste in credentials, whitelist the Retool IP, and you’re ready to start querying.',
		'Building internal tools in Retool with your Oracle data is easy: you can write a query that pulls user data from your production database, display that data in a Table component, and then show a more detailed view with a few Text components in a Container. Integrating with other data sources is simple too: you can make a REST API call on your selected table row, or join your production DB with marketing site data to get a full picture of your business.',
		'Retool supports both reading to and writing from Oracle. When writing data, we give you a point and click interface that makes it easy to perform the actions you want and hard to unintentionally do anything destructive, like DROP TABLE.'
	]
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
	description: [
		'Connecting Retool to Postgres takes just a few minutes, and lets you quickly build internal tools like admin panels on top of your Postgres data.',
		'Retool connects directly to your PostgreSQL database and lets you use SQL to manage the data in your PostgreSQL tables. For example, you can render users from Postgres into a Table and add a button that, when clicked, runs an SQL query and marks that user as approved.',
		'Retool supports both reading to and writing from Postgres. When writing data, we give you a point and click interface that makes it easy to perform the actions you want and hard to unintentionally do anything destructive.'
	]
  },
  {
    name: "Salesforce",
    icon: salesforce,
	description: [
		'Salesforce is a popular CRM.',
		'Connecting Retool to Salesforce takes just a few minutes, and lets you build user interfaces quickly on top of your Salesforce data. For example, you could pull in all your Opportunities from Salesforce, join it with your data from your app data (perhaps in Postgres), and quickly build a tool to track commissions for all your salespeople.'
	]
  },
  {
    name: "Snowflake",
    icon: snowflake,
	description: [
		'Snowflake provides a best-in-class, unified analytics platform that will forever be independent from underlying infrastructure.',
		'Connecting Retool to Snowflake takes just a few minutes, and lets you build user interfaces quickly on top of your Snowflake data. For example, you could build a tool to modify metadata tables. You can read data from Snowflake, and then write data back to it either directly, or via a separate API.',
		'Retool supports both reading and writing from Snowflake.'
	]
  },
  {
    name: "Stripe",
    icon: stripe,
	description: [
		'Stripe is an API for payments.',
		'Connecting Retool to Stripe takes just a few minutes, and lets you quickly build user interfaces on top of your payments data. For example, you could build a tool to dispute chargebacks: you can pull the chargebacks in from Stripe, write a template for disputing them, and then pull in data from your app (via Postgres, perhaps) to attach as evidence.'
	]
  },
  {
    name: "Twillo",
    icon: twillo,
	description: [
		'Twilio is an API for sending text messages and making calls.',
		'Connecting Retool to Twilio takes just a few minutes, and lets you send texts or make calls programmatically from Retool. For example, you could build a tool to send personalized texts to inform users of last minute changes in plans. You could pull your users from a Postgres database, drag on a TextInput to write a personalized text message, and then drag on a Button to actually send the text via Twilio. You can also use Retool to build a UI to track the confirmations.',
	]
  },
];
