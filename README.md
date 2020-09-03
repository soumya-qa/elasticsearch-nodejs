Install elasticsearc globally in your machine (Linux / Mac / Windows)

Enable and Start elasticsearch (Linux)
1) systemctl enable elasticsearch
2) systemctl start elasticsearch

Elastic search should run on localhost:9200 (Optional)
--------------------------------------------------------------------------------------------
To test the connectivity use the following command:
cd ./modules
node .ping.js
---------------------------------------------------------------------------------------------
To start the nodejs server by executing the following command: 
node server.js
---------------------------------------------------------------------------------------------

API routes:

i) Search:
http://localhost:4000/search/?searchTerm=<SEARCH_TERM>&indexName=<INDEX_NAME>

Method: GET

ii) Add New index and mapping index
http://localhost:4000/search/create_index

Params: indexName (string)
Method: POST

iii) Add Data
http://localhost:4000/search/add_data

Params:
title (string)
tags: (comma separated values)
content: (long text)
id: (integer)
indexName: Name of the index already created (string)

Method: POST