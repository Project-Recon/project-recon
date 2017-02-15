BEGIN;

DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  appName VARCHAR NOT NULL,
  host TEXT NOT NULL,
  latitude VARCHAR NOT NULL,
  longitude VARCHAR NOT NULL,
  locTime TIMESTAMP DEFAULT current_timestamp
);

COPY locations (appName, host, latitude, longitude, locTime)
FROM '/Users/donaldhighe/code/wdi/recon/db/location.csv' with (format csv, delimiter ',');

COMMIT;
