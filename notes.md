[ client ] < HTTP > [ API (Knex + db driver ) ] < DB Network Protocol > [ Data Store ]

Knex: Translates JS to SQL & translates rows of DB data to JS arrays

DB Driver: knows how to use the db protocol over the network. Depends on the type of db used.

MongoDB -> mongo protocol 
PostgreSQL -> postgresql://

## Mantras

- every table MUST have a primary key
- every change to the database schema requires a new migration 

## Expectations

- NOT about managing databases 
- about using databases from an API
- about taking requirements and designing a data model (the db schema)

## Database Migrations

- a tool to evolve your db over time
- can create db objects
- can modify db objects
- live together with your application code. Pushed to source control (Git)
- written in JS 

## Songs table schema
- id: primary key, integer, auto-increment 
- name: string, not unique, max size of 255, indexed (an index is a way of making searched on this column faster)
- duration: integer (stored in seconds)
- artist: string, indexed
- favorite: boolean, default value: false